"use client";
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const chartSetting = {
  xAxis: [
    {
      label: 'Activities',
    },
  ],
  width: 500,
  height: 250,
};
const dataset = [
  {
    seoul: 28,
    month: 'Sports/Games',
  },
  {
    seoul: 10,
    month: 'Movies/Dramas',
  },
  {
    seoul: 14,
    month: 'Music Therapy',
  },
  {
    seoul: 12,
    month: 'Exercises',
  },
  {
    seoul: 9,
    month: 'Meditation',
  },
  {
    seoul: 14,
    month: 'Therapy',
  },
];

const valueFormatter = (value: number) => `${value}mm`;

export default function RecomendationChart() {
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[{ dataKey: 'seoul', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
  );
}