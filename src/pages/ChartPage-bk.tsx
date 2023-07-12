import XYChartDemo from '@/components/charts/XYChartDemo';
import DonutChart from '@/components/charts/DonutChart';
import { XYChartData, Donut1Data, Donut2Data } from './data';

const ChartPage = () => {
  return (
    <>
      <div className='md:flex md:gap-4'>
        <XYChartDemo data={XYChartData} chartId='XYChartDiv1' />
      </div>
      <div className='flex'>
        <DonutChart data={Donut1Data} chartId='donutDiv1' chartTitle="圖表 1" />
        <DonutChart data={Donut2Data} chartId='donutDiv2'  />
      </div>
    </>
  );
};

export default ChartPage;
