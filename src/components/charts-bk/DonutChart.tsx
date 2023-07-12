import DarkModeContext from '@/context/DarkModeContext';
import { useLayoutEffect, useRef, useContext } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
// import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
// import am5themes_Dark from '@amcharts/amcharts5/themes/Dark';
import { setChartTheme, useChartTheme } from './useChartConfig';
type DonutChartProps = {
  data: {
    value: number;
    category: string;
  }[];
  chartId: string;
  chartTitle?: string;
};
const DonutChart = ({
  data,
  chartId,
  chartTitle,
}: DonutChartProps): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext);
  const rootRef = useRef<am5.Root | null>(null);

  useLayoutEffect(() => {
    rootRef.current = am5.Root.new(chartId);
    const root = rootRef.current;
    root?._logo?.dispose(); // 隱藏 amCharts logo
    setChartTheme(root, darkMode);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    const chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
        innerRadius: am5.percent(70),
      })
    );

    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    const series = chart.series.push(
      am5percent.PieSeries.new(root, {
        valueField: 'value',
        categoryField: 'category',
        alignLabels: false,
      })
    );
    series.labels.template.setAll({
      textType: 'circular',
      text:"{category}",
      // inside: true,
      centerX: 0,
      centerY: 0,
    });
    // series.set("stroke", am5.color(0xff0000));
    // series.labels.template.set('forceHidden', true);
    series.ticks.template.set('forceHidden', true);

    series.children.push(
      am5.Label.new(root, {
        text: `${
          chartTitle ? chartTitle : ''
        } [fontSize: 12px; verticalAlign: super;]So it begins...[/]\n[fontSize: 14px; verticalAlign: super;]and ends on a second line.[/] `,
        fontSize: 32,
        centerX: am5.percent(50),
        centerY: am5.percent(50),
      })
    );

    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series.data.setAll(data);

    // Create legend
    // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
    const legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        marginTop: 15,
        marginBottom: 15,
        // clickTarget: "none"
      })
    );
    legend.events.on('click', function (e) {
      console.log('click', e.target);
    });
    legend.markerRectangles.template.setAll({
      cornerRadiusTL: 10,
      cornerRadiusTR: 10,
      cornerRadiusBL: 10,
      cornerRadiusBR: 10,
    });
    legend.data.setAll(series.dataItems);
    // legend.labels.template.set("forceHidden", true);
    // legend.valueLabels.template.set("forceHidden", true);
    // Play initial series animation
    // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
    series.appear(1000, 100);
    return () => {
      root.dispose();
    };
  }, []);
  useChartTheme({ rootRef, darkMode });
  // useLayoutEffect(() => {
  //   if (rootRef.current) {
  //     const root = rootRef.current;
  //     setChartTheme(root, darkMode);
  //   }
  // }, [darkMode]);
  return <div id={chartId} style={{ width: '100%', height: '500px' }}></div>;
};

export default DonutChart;
