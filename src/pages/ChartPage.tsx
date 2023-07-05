import FirstChart from '@/components/charts/FirstChart';

const data = [
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
    <div>
      <FirstChart data={data} />
    </div>
  );
};

export default ChartPage;
