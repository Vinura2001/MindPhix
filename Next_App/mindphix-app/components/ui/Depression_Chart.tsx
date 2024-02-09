"use client";
import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

const uData = [28, 19, 12, 15, 8, 2, 1];
const xLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'PWeek 6', 'Week 7'];

export default function DepressionChart() {
  // Define colors for your chart
  const color = '#2E6DE8'; // Example: Change the color to red

  const seriesData = [{ 
    data: uData, 
    area: true, 
    showMark: false, 
    color: color // Assign the color directly to the series data object
  }];

  return (
    <LineChart
      width={500}
      height={300}
      series={seriesData}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        '.MuiLineElement-root': {
          display: 'none',
        },
      }}
    />
  );
}
