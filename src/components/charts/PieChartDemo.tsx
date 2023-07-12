import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
// import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { useEffect, useContext } from 'react';

import DarkModeContext from '@/context/DarkModeContext';
import {
  setChartTheme,
  useChartTheme,
  useAmchartsRoot,
} from '@/components/charts/useCharts';

type PieChartDemoProps = {
  data: {
    category: string;
    value: number;
  }[];
  chartId: string;
  chartTitle?: string;
};

function createChart(
  root: am5.Root,
  data: {
    category: string;
    value: number;
  }[]
) {
  // Create chart
  // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
  const chart = root.container.children.push(
    am5percent.PieChart.new(root, {
      endAngle: 270,
    })
  );

  // Create series
  // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
  const series = chart.series.push(
    am5percent.PieSeries.new(root, {
      valueField: 'value',
      categoryField: 'category',
      endAngle: 270,
    })
  );

  series.states.create('hidden', {
    endAngle: -90,
  });

  // Set data
  // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
  series.data.setAll(data);

  series.appear(1000, 100);
}

const PieChartDemo = ({ data, chartId }: PieChartDemoProps) => {
  const { darkMode } = useContext(DarkModeContext);
  const rootRef = useAmchartsRoot(chartId);
  useChartTheme(rootRef, darkMode);
  useEffect(() => {
    // Create root and chart
    /* Chart code */
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    // const root = am5.Root.new(chartId);
    const root = rootRef.current;
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    // root.setThemes([am5themes_Animated.new(root)]);

    if (root) {
      setChartTheme(root, darkMode);
      createChart(root, data);
      return () => root.dispose();
    }
  }, []);

  return <div id={chartId} style={{ width: '100%', height: '500px' }}></div>;
};

export default PieChartDemo;
