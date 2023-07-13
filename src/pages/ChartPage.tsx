import XYChartDemo from '@/components/chartsDemo/XYChartDemo';
import PieChartDemo from '@/components/chartsDemo/PieChartDemo';
import DonutChartDemo from '@/components/chartsDemo/DonutChartDemo';
import LineChartWithRangeSliderDemo from '@/components/chartsDemo/LineChartWithRangeSliderDemo';
import StackLineChartDemo from '@/components/chartsDemo/StackLineChartDemo';
import HighlightingLineChartSeriesDemo from '@/components/chartsDemo/HighlightingLineChartSeriesDemo';

// import DonutChart from '@/components/charts/DonutChart';
import {
  XYChartData,
  PieChartData,
  DonutChartData,
  LineChartWithRangeSliderData,
  StackLineChartData,
  HighlightingLineChartSeriesData
} from './data';

const ChartPage = () => {
  return (
    <>
      <div className='mb-4'>
        <h2 className='text-2xl my-4 border-l-4 border-l-primary-500 pl-2 font-bold'>
          XYChart Demo
        </h2>
        <XYChartDemo data={XYChartData} chartId='XYChartDiv1' />
      </div>
      <div className='mb-4'>
        <h2 className='text-2xl my-4 border-l-4 border-l-primary-500 pl-2 font-bold'>
          PieChart Demo
        </h2>
        <PieChartDemo data={PieChartData} chartId='PieChartDiv1' />
      </div>
      <div className='mb-4'>
        <h2 className='text-2xl my-4 border-l-4 border-l-primary-500 pl-2 font-bold'>
          Dragging Donut Slices Demo
        </h2>
        <DonutChartDemo data={DonutChartData} chartId='DonutChartDiv1' />
      </div>
      <div className='mb-4'>
        <h2 className='text-2xl my-4 border-l-4 border-l-primary-500 pl-2 font-bold'>
          Line Chart with Range Slider Demo
        </h2>
        <LineChartWithRangeSliderDemo
          data={LineChartWithRangeSliderData}
          chartId='LineChartWithRangeSliderDiv1'
        />
      </div>
      <div className='mb-4'>
        <h2 className='text-2xl my-4 border-l-4 border-l-primary-500 pl-2 font-bold'>
          Line Chart Stacked line Demo
        </h2>
        <StackLineChartDemo
          data={StackLineChartData}
          chartId='StackLineChartDiv1'
        />
      </div>
      <div className='mb-4'>
        <h2 className='text-2xl my-4 border-l-4 border-l-primary-500 pl-2 font-bold'>
        Highlighting Line Chart Series on Legend Hover Demo
        </h2>
        <HighlightingLineChartSeriesDemo
          data={HighlightingLineChartSeriesData}
          chartId='HighlightingLineChartSeriesDiv1'
        />
      </div>
    </>
  );
};

export default ChartPage;
