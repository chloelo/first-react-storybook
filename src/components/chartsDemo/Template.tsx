import * as am5 from '@amcharts/amcharts5';
import * as am5percent from '@amcharts/amcharts5/percent';
import { useEffect, useContext } from 'react';

import DarkModeContext from '@/context/DarkModeContext';
import {
  setChartTheme,
  useChartTheme,
  useAmchartsRoot,
} from '@/components/chartsDemo/useCharts';

type ChartTemplateProps = {
  data: {}[];
  chartId: string;
};
const createChart = (root: am5.Root, data) => {
  // 
};
const ChartTemplate = ({ data, chartId }: ChartTemplateProps) => {
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

export default ChartTemplate;
