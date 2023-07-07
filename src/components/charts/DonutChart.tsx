import DarkModeContext from '@/context/DarkModeContext';
import { useLayoutEffect, useRef, useContext } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import am5themes_Dark from '@amcharts/amcharts5/themes/Dark';

const DonutChart = (): JSX.Element => {
  const { darkMode } = useContext(DarkModeContext);
  const rootRef = useRef<am5.Root | null>(null);
  function setChartTheme(root: am5.Root, isDarkMode: boolean) {
    root.setThemes(
      isDarkMode
        ? [am5themes_Animated.new(root), am5themes_Dark.new(root)]
        : [am5themes_Animated.new(root)]
    );
  }
  useLayoutEffect(() => {
    rootRef.current = am5.Root.new('chartDiv2');
    const root = rootRef.current;
    root?._logo?.dispose(); // 隱藏 amCharts logo
    setChartTheme(root, darkMode);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    const chart = root.container.children.push(
      am5percent.PieChart.new(root, {
        layout: root.verticalLayout,
        innerRadius: am5.percent(50),
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
      centerX: 0,
      centerY: 0,
    });

    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series.data.setAll([
      { value: 10, category: 'One' },
      { value: 9, category: 'Two' },
      { value: 6, category: 'Three' },
      { value: 5, category: 'Four' },
      { value: 4, category: 'Five' },
      { value: 3, category: 'Six' },
      { value: 1, category: 'Seven' },
    ]);

    // Create legend
    // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
    const legend = chart.children.push(
      am5.Legend.new(root, {
        centerX: am5.percent(50),
        x: am5.percent(50),
        marginTop: 15,
        marginBottom: 15,
      })
    );

    legend.data.setAll(series.dataItems);

    // Play initial series animation
    // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
    series.appear(1000, 100);
    return () => {
      root.dispose();
    };
  }, []);
  useLayoutEffect(() => {
    if (rootRef.current) {
      const root = rootRef.current;
      setChartTheme(root, darkMode);
    }
  }, [darkMode]);
  return <div id='chartDiv2' style={{ width: '100%', height: '500px' }}></div>;
};

export default DonutChart;
