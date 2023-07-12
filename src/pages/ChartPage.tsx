import XYChartDemo from '@/components/charts/XYChartDemo';
import PieChartDemo from '@/components/charts/PieChartDemo';
import DonutChartDemo from '@/components/charts/DonutChartDemo';
import LineChartDemo from '@/components/charts/LineChartDemo';
import StackLineChartDemo from '@/components/charts/StackLineChartDemo';
// import DonutChart from '@/components/charts/DonutChart';
import {
  XYChartData,
  PieChartData,
  DonutChartData,
  LineChartData,
  StackLineChartData
} from './data';

const ChartPage = () => {
  return (
    <>
      <div className='mb-4'>
        <h2 className='text-2xl my-4 border-l-4 border-l-primary-500 pl-2 font-bold'>XYChart Demo</h2>
        <XYChartDemo data={XYChartData} chartId='XYChartDiv1' />
      </div>
      <div className='mb-4'>
        <h2 className='text-2xl my-4 border-l-4 border-l-primary-500 pl-2 font-bold'>PieChart Demo</h2>
        <PieChartDemo data={PieChartData} chartId='PieChartDiv1' />
      </div>
      <div className='mb-4'>
        <h2 className='text-2xl my-4 border-l-4 border-l-primary-500 pl-2 font-bold'>Dragging Donut Slices Demo</h2>
        <DonutChartDemo data={DonutChartData} chartId='DonutChartDiv1' />
      </div>
      <div className='mb-4'>
        <h2 className='text-2xl my-4 border-l-4 border-l-primary-500 pl-2 font-bold'>Line Chart with Range Slider Demo</h2>
        <LineChartDemo data={LineChartData} chartId='LineChartDiv1' />
      </div>
      <div className='mb-4'>
        <h2 className='text-2xl my-4 border-l-4 border-l-primary-500 pl-2 font-bold'>Line Chart Stacked line Demo</h2>
        <StackLineChartDemo data={StackLineChartData} chartId='StackLineChartDiv1' />
      </div>
    </>
  );
};

export default ChartPage;
