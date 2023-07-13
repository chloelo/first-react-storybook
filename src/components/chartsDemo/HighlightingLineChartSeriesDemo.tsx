import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import { useEffect, useContext } from 'react';

import DarkModeContext from '@/context/DarkModeContext';
import {
  setChartTheme,
  useChartTheme,
  useAmchartsRoot,
} from '@/components/chartsDemo/useCharts';

type HighlightingLineChartSeriesDemoProps = {
  data: {
    date: number;
    value: number;
  }[];
  chartId: string;
};
const createChart = (root: am5.Root) => {
  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  const chart = root.container.children.push(
    am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelX: 'panX',
      wheelY: 'zoomX',
      maxTooltipDistance: 0,
      pinchZoomX: true,
    })
  );

  let date = new Date();
  date.setHours(0, 0, 0, 0);
  let value = 100;

  function generateData() {
    value = Math.round(Math.random() * 10 - 4.2 + value);
    am5.time.add(date, 'day', 1);
    return {
      date: date.getTime(),
      value: value,
    };
  }

  function generateDatas(count: number) {
    const data = [];
    for (let i = 0; i < count; ++i) {
      data.push(generateData());
    }
    return data;
  }

  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  const xAxis = chart.xAxes.push(
    am5xy.DateAxis.new(root, {
      maxDeviation: 0.2,
      baseInterval: {
        timeUnit: 'day',
        count: 1,
      },
      renderer: am5xy.AxisRendererX.new(root, {}),
      tooltip: am5.Tooltip.new(root, {}),
    })
  );

  const yAxis = chart.yAxes.push(
    am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {}),
    })
  );

  // Add series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  for (let i = 0; i < 10; i++) {
    const series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: 'Series ' + i,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: 'value',
        valueXField: 'date',
        legendValueText: '{valueY}',
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: 'horizontal',
          labelText: '{valueY}',
        }),
      })
    );

    date = new Date();
    date.setHours(0, 0, 0, 0);
    value = 0;

    const data = generateDatas(100);
    series.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear();
  }

  // Add cursor
  // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
  const cursor = chart.set(
    'cursor',
    am5xy.XYCursor.new(root, {
      behavior: 'none',
    })
  );
  cursor.lineY.set('visible', false);

  // Add scrollbar
  // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
  chart.set(
    'scrollbarX',
    am5.Scrollbar.new(root, {
      orientation: 'horizontal',
    })
  );

  chart.set(
    'scrollbarY',
    am5.Scrollbar.new(root, {
      orientation: 'vertical',
    })
  );

  // Add legend
  // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
  const legend = chart.rightAxesContainer.children.push(
    am5.Legend.new(root, {
      width: 200,
      paddingLeft: 15,
      height: am5.percent(100),
    })
  );

  // When legend item container is hovered, dim all the series except the hovered one
  legend.itemContainers.template.events.on('pointerover', function (e) {
    const itemContainer = e.target;

    // As series list is data of a legend, dataContext is series
    const series = itemContainer?.dataItem?.dataContext;

    chart.series.each(function (chartSeries) {
      if (chartSeries !== series) {
        chartSeries.strokes.template.setAll({
          strokeOpacity: 0.15,
          stroke: am5.color(0x000000),
        });
      } else {
        chartSeries.strokes.template.setAll({
          strokeWidth: 3,
        });
      }
    });
  });

  // When legend item container is unhovered, make all series as they are
  legend.itemContainers.template.events.on('pointerout', function (e) {
    const itemContainer = e.target;
    let series = itemContainer.dataItem.dataContext;

    chart.series.each(function (chartSeries) {
      chartSeries.strokes.template.setAll({
        strokeOpacity: 1,
        strokeWidth: 1,
        stroke: chartSeries.get('fill'),
      });
    });
  });

  legend.itemContainers.template.set('width', am5.p100);
  legend.valueLabels.template.setAll({
    width: am5.p100,
    textAlign: 'right',
  });

  // It's is important to set legend data after all the events are set on template, otherwise events won't be copied
  legend.data.setAll(chart.series.values);

  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  chart.appear(1000, 100);
};
const HighlightingLineChartSeriesDemo = ({
  data,
  chartId,
}: HighlightingLineChartSeriesDemoProps) => {
  const { darkMode } = useContext(DarkModeContext);
  const rootRef = useAmchartsRoot(chartId);
  useChartTheme(rootRef, darkMode);
  useEffect(() => {
    const root = rootRef.current;
    if (root) {
      setChartTheme(root, darkMode);
      createChart(root, data);
      return () => root.dispose();
    }
  }, []);
  return <div id={chartId} style={{ width: '100%', height: '500px' }}></div>;
};

export default HighlightingLineChartSeriesDemo;
