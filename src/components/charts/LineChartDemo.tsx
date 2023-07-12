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

type LineChartDemoProps = {
  data: {
    date: number;
    value: number;
  }[];
  chartId: string;
};

export default function LineChartDemo({ data, chartId }: LineChartDemoProps) {
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
      // let root = am5.Root.new("chartdiv");

      // Set themes
      // https://www.amcharts.com/docs/v5/concepts/themes/
      // root.setThemes([
      //   am5themes_Animated.new(root)
      // ]);

      // Create chart
      // https://www.amcharts.com/docs/v5/charts/xy-chart/
      let chart = root.container.children.push(
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
      let cursor = chart.set('cursor', am5xy.XYCursor.new(root, {}));
      cursor.lineX.set('forceHidden', true);
      cursor.lineY.set('forceHidden', true);

      // Create axes
      // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
      let xAxis = chart.xAxes.push(
        am5xy.DateAxis.new(root, {
          baseInterval: {
            timeUnit: 'day',
            count: 1,
          },
          renderer: am5xy.AxisRendererX.new(root, {}),
        })
      );

      let yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {}),
        })
      );

      // Add series
      // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
      let series = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: 'Series',
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: 'value',
          valueXField: 'date',
          tooltip: am5.Tooltip.new(root, {
            labelText: '{valueY}',
          }),
        })
      );

      series.fills.template.setAll({
        fillOpacity: 0.2,
        visible: true,
      });

      // Add scrollbar
      // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
      chart.set(
        'scrollbarX',
        am5.Scrollbar.new(root, {
          orientation: 'horizontal',
        })
      );

      series.data.setAll(data);

      let rangeDate = new Date();
      am5.time.add(rangeDate, 'day', Math.round(series.dataItems.length / 2));
      let rangeTime = rangeDate.getTime();

      // add series range
      let seriesRangeDataItem = xAxis.makeDataItem({});
      let seriesRange = series.createAxisRange(seriesRangeDataItem);
      seriesRange.fills.template.setAll({
        visible: true,
        opacity: 0.3,
      });

      seriesRange.fills.template.set(
        'fillPattern',
        am5.LinePattern.new(root, {
          color: am5.color(0xff0000),
          rotation: 45,
          strokeWidth: 2,
          width: 2000,
          height: 2000,
          fill: am5.color(0xffffff),
        })
      );

      seriesRange.strokes.template.set('stroke', am5.color(0xff0000));

      xAxis.onPrivate('max', function (value) {
        seriesRangeDataItem.set('endValue', value);
        seriesRangeDataItem.set('value', rangeTime);
      });

      // add axis range
      let range = xAxis.createAxisRange(xAxis.makeDataItem({}));
      let color = root.interfaceColors.get('primaryButton');

      range.set('value', rangeDate.getTime());
      range.get('grid').setAll({
        strokeOpacity: 1,
        stroke: color,
      });

      let resizeButton = am5.Button.new(root, {
        themeTags: ['resize', 'horizontal'],
        icon: am5.Graphics.new(root, {
          themeTags: ['icon'],
        }),
      });

      // restrict from being dragged vertically
      resizeButton.adapters.add('y', function () {
        return 0;
      });

      // restrict from being dragged outside of plot
      resizeButton.adapters.add('x', function (x) {
        return Math.max(0, Math.min(chart.plotContainer.width(), x));
      });

      // change range when x changes
      resizeButton.events.on('dragged', function () {
        let x = resizeButton.x();
        let position = xAxis.toAxisPosition(x / chart.plotContainer.width());

        let value = xAxis.positionToValue(position);

        range.set('value', value);

        seriesRangeDataItem.set('value', value);
        seriesRangeDataItem.set('endValue', xAxis.getPrivate('max'));
      });

      // set bullet for the range
      range.set(
        'bullet',
        am5xy.AxisBullet.new(root, {
          sprite: resizeButton,
        })
      );

      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear(1000);
      chart.appear(1000, 100);
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
