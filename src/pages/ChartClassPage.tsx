import SmoothedLineChart from '@/components/chartsByClass/SmoothedLineChart';

import {
  XYChartData,
  PieChartData,
  DonutChartData,
  LineChartWithRangeSliderData,
  StackLineChartData,
  HighlightingLineChartSeriesData,
} from './data';


const ChartPage = () => {
  return (
    <>
      <div className='mb-4'>
        <SmoothedLineChart chartId='SmoothedLineChartDiv1' />
        {/* <h2 className='text-2xl my-4 border-l-4 border-l-primary-500 pl-2 font-bold'>
          XYChart Demo
        </h2>
        <XYChartDemo data={XYChartData} chartId='XYChartDiv1' /> */}
      </div>
    </>
  );
};

export default ChartPage;
