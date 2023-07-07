import XYChart from '@/components/charts/XYChart';
import DonutChart from '@/components/charts/DonutChart';

const XYChartData = [
  {
    category: 'Research',
    value1: 1000,
    value2: 588,
  },
  {
    category: 'Marketing',
    value1: 1200,
    value2: 1800,
  },
  {
    category: 'Sales',
    value1: 850,
    value2: 1230,
  },
];
const ChartPage = () => {
  return (
    <div className='md:flex md:gap-4'>
      <XYChart data={XYChartData} />
      <DonutChart />
    </div>
  );
};

export default ChartPage;
