import DarkModeContext from '@/context/DarkModeContext';
import { useLayoutEffect, useRef, useContext } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5themes_Dark from '@amcharts/amcharts5/themes/Dark';

type XYChartProps = {
  data: {
    category: string;
    value1: number;
    value2: number;
  }[];
};

export default function XYChart({ data }: XYChartProps) {
  const { darkMode } = useContext(DarkModeContext);
  const series1Ref = useRef<am5xy.ColumnSeries | null>(null);
  const series2Ref = useRef<am5xy.ColumnSeries | null>(null);
  const xAxisRef = useRef<am5xy.CategoryAxis<am5xy.AxisRendererX> | null>(null);
  const rootRef = useRef<am5.Root | null>(null);

  function setChartTheme(root: am5.Root, isDarkMode: boolean) {
    root.setThemes(
      isDarkMode
        ? [am5themes_Animated.new(root), am5themes_Dark.new(root)]
        : [am5themes_Animated.new(root)]
    );
  }

  // This code will only run one time
  useLayoutEffect(() => {
    rootRef.current = am5.Root.new('chartDiv');

    const root = rootRef.current;
    root?._logo?.dispose();
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
    xAxisRef.current = xAxis as am5xy.CategoryAxis<am5xy.AxisRendererX>;
    series1Ref.current = series1;
    series2Ref.current = series2;

    return () => {
      root.dispose();
    };
  }, []);

  // This code will only run when props.data changes
  useLayoutEffect(() => {
    xAxisRef.current?.data.setAll(data);
    series1Ref.current?.data.setAll(data);
    series2Ref.current?.data.setAll(data);
  }, [data]);
  useLayoutEffect(() => {
    if (rootRef.current) {
      const root = rootRef.current;
      setChartTheme(root, darkMode);
    }
  }, [darkMode]);
  return <div id='chartDiv' style={{ width: '100%', height: '500px' }}></div>;
}
