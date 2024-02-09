"use client";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import { LineChart } from '@mui/x-charts/LineChart';

const data = [0, 1, 2, 1, 3, 4, 5];
const xData = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'PWeek 6', 'Week 7'];
export default function MoodChart() {
  return (
    <Stack sx={{ width: '100%' }}>
    
      <LineChart
        xAxis={[{ data: xData, scaleType: 'point' }]}
        series={[{ data, connectNulls: true }]}
        height={190}
        margin={{ top: 10, bottom: 20 }}
      />
    </Stack>
  );
}