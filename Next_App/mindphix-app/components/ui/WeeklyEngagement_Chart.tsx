"use client";
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import React from 'react';

const data = [
  { value: 15},
  { value: 10}
];

const size = {
  width: 400,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function PieCenterLabel({ children, value }: { children: React.ReactNode, value: number }) {
  const { width, height, left, top } = useDrawingArea();
  return (
    <React.Fragment>
      <StyledText x={left + width / 2} y={top + height / 2 - 10}>
        {value}
      </StyledText>
      <StyledText x={left + width / 2} y={top + height / 2 + 10}>
        {children}
      </StyledText>
    </React.Fragment>
  );
}


export default function Chart() {
  const value = data[0].value;
  const colors = ['#0D5AC2', '#dbd9d9'];
  
  return (
    <PieChart series={[{ data, innerRadius: 80 }]} colors={colors} {...size}>
      <PieCenterLabel value={value}>Days</PieCenterLabel>
    </PieChart>
  );
}
