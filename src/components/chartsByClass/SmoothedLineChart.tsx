import * as am5 from '@amcharts/amcharts5';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5themes_Dark from '@amcharts/amcharts5/themes/Dark';
import * as am5xy from '@amcharts/amcharts5/xy';
import { useEffect, useRef, useContext } from 'react';
import DarkModeContext from '@/context/DarkModeContext';

type SmoothedLineChartProps = {
  chartId: string;
};

class ChartPresenter {
  id: string;
  root: am5.Root;
  constructor(id: string) {
    this.id = id;
    this.root = am5.Root.new(id);
  }
}

const SmoothedLineChart = ({ chartId }: SmoothedLineChartProps) => {
  const { darkMode } = useContext(DarkModeContext);
  const rootRef = useRef<am5.Root | null>(null);
  // const chart1 = new ChartPresenter(chartId);
  // console.log(chart1);
  useEffect(() => {
    /* Chart code */
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    // const root = am5.Root.new(chartId);
    rootRef.current = am5.Root.new(chartId);
    const root = rootRef.current;
    root?._logo?.dispose();
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    // root.setThemes([am5themes_Animated.new(root)]);
    root.setThemes(
      darkMode
        ? [am5themes_Animated.new(root), am5themes_Dark.new(root)]
        : [am5themes_Animated.new(root)]
    );

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

    // Generate random data
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    let value = 100;

    function generateData() {
      value = Math.round(Math.random() * 10 - 5 + value);
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
        maxDeviation: 0.5,
        baseInterval: {
          timeUnit: 'day',
          count: 1,
        },
        renderer: am5xy.AxisRendererX.new(root, {
          pan: 'zoom',
        }),
        tooltip: am5.Tooltip.new(root, {}),
      })
    );

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 1,
        renderer: am5xy.AxisRendererY.new(root, {
          pan: 'zoom',
        }),
      })
    );

    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    const series = chart.series.push(
      am5xy.SmoothedXLineSeries.new(root, {
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
      visible: true,
      fillOpacity: 0.2,
    });

    series.bullets.push(function () {
      return am5.Bullet.new(root, {
        locationY: 0,
        sprite: am5.Circle.new(root, {
          radius: 4,
          stroke: root.interfaceColors.get('background'),
          strokeWidth: 2,
          fill: series.get('fill'),
        }),
      });
    });

    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    chart.set(
      'scrollbarX',
      am5.Scrollbar.new(root, {
        orientation: 'horizontal',
      })
    );

    const data = generateDatas(50);
    series.data.setAll(data);

    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    series.appear(1000);
    chart.appear(1000, 100);
    return () => root.dispose();
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (root) {
      root.setThemes(
        darkMode
          ? [am5themes_Animated.new(root), am5themes_Dark.new(root)]
          : [am5themes_Animated.new(root)]
      );
    }
  }, [darkMode]);

  return (
    <>
      <div id={chartId} style={{ width: '100%', height: '500px' }}></div>
    </>
  );
};

export default SmoothedLineChart;
