import * as am5 from '@amcharts/amcharts5';
export const XYChartData = [
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
    value2: 120,
  },
];

export const Donut1Data = [
  // { value: 100, category: 'no data' },
  { value: 10, category: 'One' },
  { value: 9, category: 'Two' },
  { value: 6, category: 'Three' },
  { value: 5, category: 'Four' },
  { value: 4, category: 'Five' },
  { value: 3, category: 'Six' },
  { value: 1, category: 'Seven' },
];
export const Donut2Data = [
  { value: 2, category: '某類 1 ' },
  { value: 7, category: '某類 2' },
  { value: 4, category: '某類 3' },
  { value: 6, category: '某類 4' },
  { value: 1, category: '某類 5' },
  { value: 5, category: '某類 6' },
  { value: 8, category: '某類 7' },
];

export const PieChartData = [
  {
    category: 'Lithuania',
    value: 501.9,
  },
  {
    category: 'Czechia',
    value: 301.9,
  },
  {
    category: 'Ireland',
    value: 201.1,
  },
  {
    category: 'Germany',
    value: 165.8,
  },
  {
    category: 'Australia',
    value: 139.9,
  },
  {
    category: 'Austria',
    value: 128.3,
  },
  {
    category: 'UK',
    value: 99,
  },
];

export const DonutChartData = [
  {
    category: 'Dummy',
    value: 1000,
    settings: {
      fill: am5.color(0xdadada),
      stroke: am5.color(0xdadada),
      fillOpacity: 0.3,
      strokeDasharray: [4, 4],
      tooltipText: null,
      draggable: false,
    },
    dummyLabelSettings: {
      forceHidden: true,
    },
  },
  {
    category: 'Lithuania',
    value: 501.9,
  },
  {
    category: 'Estonia',
    value: 301.9,
  },
  {
    category: 'Ireland',
    value: 201.1,
  },
  {
    category: 'Germany',
    value: 165.8,
  },
  {
    category: 'Australia',
    value: 139.9,
  },
  {
    category: 'Austria',
    value: 128.3,
  },
];

// Generate random data
const date = new Date();
date.setHours(0, 0, 0, 0);
let value = 100;

function generateData() {
  value = Math.round(Math.random() * 10 - 5 + value);
  am5.time.add(date, 'day', 1);
  return {
    date: date.getTime(),
    value: value,
  };
}

function generateDatas(count: number) {
  const data = [];
  for (let i = 0; i < count; ++i) {
    data.push(generateData());
  }
  return data;
}

// Set data
export const LineChartData = generateDatas(1200);

export const StackLineChartData = [
  {
    year: '1994',
    cars: 1587,
    motorcycles: 650,
    bicycles: 121,
  },
  {
    year: '1995',
    cars: 1567,
    motorcycles: 683,
    bicycles: 146,
  },
  {
    year: '1996',
    cars: 1617,
    motorcycles: 691,
    bicycles: 138,
  },
  {
    year: '1997',
    cars: 1630,
    motorcycles: 642,
    bicycles: 127,
  },
  {
    year: '1998',
    cars: 1660,
    motorcycles: 699,
    bicycles: 105,
  },
  {
    year: '1999',
    cars: 1683,
    motorcycles: 721,
    bicycles: 109,
  },
  {
    year: '2000',
    cars: 1691,
    motorcycles: 737,
    bicycles: 112,
  },
  {
    year: '2001',
    cars: 1298,
    motorcycles: 680,
    bicycles: 101,
  },
  {
    year: '2002',
    cars: 1275,
    motorcycles: 664,
    bicycles: 97,
  },
  {
    year: '2003',
    cars: 1246,
    motorcycles: 648,
    bicycles: 93,
  },
  {
    year: '2004',
    cars: 1318,
    motorcycles: 697,
    bicycles: 111,
  },
  {
    year: '2005',
    cars: 1213,
    motorcycles: 633,
    bicycles: 87,
  },
  {
    year: '2006',
    cars: 1199,
    motorcycles: 621,
    bicycles: 79,
  },
  {
    year: '2007',
    cars: 1110,
    motorcycles: 210,
    bicycles: 81,
  },
  {
    year: '2008',
    cars: 1165,
    motorcycles: 232,
    bicycles: 75,
  },
  {
    year: '2009',
    cars: 1145,
    motorcycles: 219,
    bicycles: 88,
  },
  {
    year: '2010',
    cars: 1163,
    motorcycles: 201,
    bicycles: 82,
  },
  {
    year: '2011',
    cars: 1180,
    motorcycles: 285,
    bicycles: 87,
  },
  {
    year: '2012',
    cars: 1159,
    motorcycles: 277,
    bicycles: 71,
  },
];
