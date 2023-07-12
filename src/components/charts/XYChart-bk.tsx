import DarkModeContext from '@/context/DarkModeContext';
import { useLayoutEffect, useRef, useContext } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
// import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
// import am5themes_Dark from '@amcharts/amcharts5/themes/Dark';
import {
  setChartTheme,
  useChartTheme,
  useAmchartsRoot,
} from './useChartConfig';

type XYChartProps = {
  data: {
    category: string;
    value1: number;
    value2: number;
  }[];
  chartId: string;
};

export default function XYChart({ data, chartId }: XYChartProps) {
  const { darkMode } = useContext(DarkModeContext);
  const series1Ref = useRef<am5xy.ColumnSeries | null>(null);
  const series2Ref = useRef<am5xy.ColumnSeries | null>(null);
  const xAxisRef = useRef<am5xy.CategoryAxis<am5xy.AxisRendererX> | null>(null);
  // const rootRef = useRef<am5.Root | null>(null);
  const rootRef = useAmchartsRoot(chartId);

  function setGridColor(): void {
    rootRef.current?.interfaceColors.set(
      'grid',
      am5.color(darkMode ? 0xffff00 : '#bbbbbb')
    );
  }
  // This code will only run one time
  useLayoutEffect(() => {
    const root = rootRef.current;
    // rootRef.current = am5.Root.new(chartId);

    // const root = rootRef.current;
    // root?._logo?.dispose();

    // root.interfaceColors.set('grid', am5.color(darkMode ? 0xffff00 : 0x095256));

    if (root) {
      setChartTheme(root, darkMode, setGridColor);
      const chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panY: false,
          layout: root.verticalLayout,
        })
      );
      chart
        ?.get('colors')
        ?.set('colors', [
          am5.color(0x095256),
          am5.color(0xbb9fe3),
          am5.color(0x087f8c),
          am5.color(0x5aaa95),
          am5.color(0x86a873),
          am5.color(0xbb9f06),
        ]);
      // Create Y-axis
      const yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {}),
        })
      );

      // Create X-Axis
      const xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
          renderer: am5xy.AxisRendererX.new(root, {}),
          categoryField: 'category',
        })
      );

      // Create series
      const series1 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: 'Series 123',
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: 'value1',
          categoryXField: 'category',
        })
      );

      const series2 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: 'Series 456',
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: 'value2',
          categoryXField: 'category',
        })
      );
      series1.columns.template.setAll({
        fillOpacity: 0.5,
        strokeWidth: 2,
        // fill: am5.color(0xdbb957),
        // stroke: am5.color(0xdbb957),
      });
      series2.columns.template.set('interactive', true);

      series2.columns.template.states.create('hover', {
        strokeWidth: 5,
        // fill: am5.color(0x297373),
        // stroke: am5.color(0x2973d3),
      });
      // Add legend
      const legend = chart.children.push(am5.Legend.new(root, {}));
      legend.data.setAll(chart.series.values);

      // Add cursor
      chart.set('cursor', am5xy.XYCursor.new(root, {}));

      xAxisRef.current = xAxis as am5xy.CategoryAxis<am5xy.AxisRendererX>;
      series1Ref.current = series1;
      series2Ref.current = series2;

      return () => {
        root.dispose();
      };
    }
  }, []);

  // This code will only run when props.data changes
  useLayoutEffect(() => {
    xAxisRef.current?.data.setAll(data);
    series1Ref.current?.data.setAll(data);
    series2Ref.current?.data.setAll(data);
  }, [data]);

  useChartTheme({ rootRef, darkMode, setGridColor });
  // useLayoutEffect(() => {
  //   if (rootRef.current) {
  //     const root = rootRef.current;
  //     setChartTheme(root, darkMode, setGridColor);
  //   }
  // }, [darkMode]);
  return <div id={chartId} style={{ width: '100%', height: '500px' }}></div>;
}
