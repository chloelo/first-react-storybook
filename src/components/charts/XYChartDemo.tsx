import { useLayoutEffect, useRef, useContext } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
// import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import DarkModeContext from '@/context/DarkModeContext';
import {
  setChartTheme,
  useChartTheme,
  useAmchartsRoot,
} from '@/components/charts/useCharts';

type XYChartDemoProps = {
  data: {
    category: string;
    value1: number;
    value2: number;
  }[];
  chartId: string;
};

export default function XYChartDemo({ data, chartId }: XYChartDemoProps) {
  const { darkMode } = useContext(DarkModeContext);
  const series1Ref = useRef<am5xy.ColumnSeries | null>(null);
  const series2Ref = useRef<am5xy.ColumnSeries | null>(null);
  const xAxisRef = useRef<am5xy.CategoryAxis<am5xy.AxisRenderer> | null>(null);
  const rootRef = useAmchartsRoot(chartId);
  useChartTheme(rootRef, darkMode);
  // This code will only run one time
  useLayoutEffect(() => {
    // const root = am5.Root.new(chartId);
    const root = rootRef.current;
    if (root) {
      setChartTheme(root, darkMode);
      const chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panY: false,
          layout: root.verticalLayout,
        })
      );

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
          name: 'Series',
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: 'value1',
          categoryXField: 'category',
        })
      );

      const series2 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: 'Series',
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: 'value2',
          categoryXField: 'category',
        })
      );

      // Add legend
      const legend = chart.children.push(am5.Legend.new(root, {}));
      legend.data.setAll(chart.series.values);

      // Add cursor
      chart.set('cursor', am5xy.XYCursor.new(root, {}));

      xAxisRef.current = xAxis;
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

  
  return <div id={chartId} style={{ width: '100%', height: '500px' }}></div>;
}
