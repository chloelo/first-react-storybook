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

type StackLineChartDemoProps = {
  data: {
    year: string;
    cars: number;
    motorcycles: number;
    bicycles: number;
  }[];
  chartId: string;
};

export default function StackLineChartDemo({
  data,
  chartId,
}: StackLineChartDemoProps) {
  const { darkMode } = useContext(DarkModeContext);
  const series1Ref = useRef<am5xy.ColumnSeries | null>(null);
  const series2Ref = useRef<am5xy.ColumnSeries | null>(null);
  const xAxisRef = useRef<am5xy.CategoryAxis<am5xy.AxisRenderer> | null>(null);
  const rootRef = useAmchartsRoot(chartId);

  useChartTheme(rootRef, darkMode);
  // This code will only run one time
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (root) {
      setChartTheme(root, darkMode);
      renderChart(root);
    }
  }, []);

  // This code will only run when props.data changes
  useLayoutEffect(() => {
    xAxisRef.current?.data.setAll(data);
    series1Ref.current?.data.setAll(data);
    series2Ref.current?.data.setAll(data);
  }, [data]);

  function renderChart(root: am5.Root) {
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: 'panX',
        wheelY: 'zoomX',
        pinchZoomX: true,
      })
    );

    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    const cursor = chart.set(
      'cursor',
      am5xy.XYCursor.new(root, {
        behavior: 'none',
      })
    );
    cursor.lineY.set('visible', false);

    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    const xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        categoryField: 'year',
        startLocation: 0.5,
        endLocation: 0.5,
        renderer: am5xy.AxisRendererX.new(root, {}),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    xAxis.data.setAll(data);

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/

    function createSeries(name, field) {
      const series = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: name,
          xAxis: xAxis,
          yAxis: yAxis,
          stacked: true,
          valueYField: field,
          categoryXField: 'year',
          tooltip: am5.Tooltip.new(root, {
            pointerOrientation: 'horizontal',
            labelText: '[bold]{name}[/]\n{categoryX}: {valueY}',
          }),
        })
      );

      series.fills.template.setAll({
        fillOpacity: 0.5,
        visible: true,
      });

      series.data.setAll(data);
      series.appear(1000);
    }

    createSeries('Cars', 'cars');
    createSeries('Motorcycles', 'motorcycles');
    createSeries('Bicycles', 'bicycles');

    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    chart.set(
      'scrollbarX',
      am5.Scrollbar.new(root, {
        orientation: 'horizontal',
      })
    );

    // Create axis ranges
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/axis-ranges/
    const rangeDataItem = xAxis.makeDataItem({
      category: '2001',
      endCategory: '2003',
    });

    const range = xAxis.createAxisRange(rangeDataItem);

    rangeDataItem.get('grid').setAll({
      stroke: am5.color(0x00ff33),
      strokeOpacity: 0.5,
      strokeDasharray: [3],
    });

    rangeDataItem.get('axisFill').setAll({
      fill: am5.color(0x00ff33),
      fillOpacity: 0.1,
      visible: true,
    });

    rangeDataItem.get('label').setAll({
      inside: true,
      text: 'Fines for speeding increased',
      rotation: 90,
      centerX: am5.p100,
      centerY: am5.p100,
      location: 0,
      paddingBottom: 10,
      paddingRight: 15,
    });

    const rangeDataItem2 = xAxis.makeDataItem({
      category: '2007',
    });

    const range2 = xAxis.createAxisRange(rangeDataItem2);

    rangeDataItem2.get('grid').setAll({
      stroke: am5.color(0x00ff33),
      strokeOpacity: 1,
      strokeDasharray: [3],
    });

    rangeDataItem2.get('axisFill').setAll({
      fill: am5.color(0x00ff33),
      fillOpacity: 0.1,
      visible: true,
    });

    rangeDataItem2.get('label').setAll({
      inside: true,
      text: 'Motorcycle fee introduced',
      rotation: 90,
      centerX: am5.p100,
      centerY: am5.p100,
      location: 0,
      paddingBottom: 10,
      paddingRight: 15,
    });

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
  }
  return <div id={chartId} style={{ width: '100%', height: '500px' }}></div>;
}
