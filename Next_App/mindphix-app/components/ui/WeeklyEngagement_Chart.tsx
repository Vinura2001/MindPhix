import React, { useState, useEffect } from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import { ref, child, get } from "firebase/database";
import { database } from "@/app/firebase/config";

const size = {
  width: 300,
  height: 200,
};

const StyledText = styled('text')(({ theme }) => ({
  fill: theme.palette.text.primary,
  textAnchor: 'middle',
  dominantBaseline: 'central',
  fontSize: 20,
}));

function Chart() {
  const [data, setData] = useState([{ value: 0 }, { value: 168 }]); // State to hold the data array
  const colors = ['#0D5AC2', '#dbd9d9'];
  const [userId, setUserId] = useState<string>('U001'); 

  useEffect(() => {
    
    const dbRef = ref(database);
    get(child(dbRef, `users/${userId}/Progress/Weekly_Engagement`)).then((snapshot) => {
      if (snapshot.exists()) {
        const newValue = snapshot.val();
        setData([{ value: newValue }, { value: 168 - newValue }]); // Update both values
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  return (
    <PieChart series={[{ data, innerRadius: 80 }]} colors={colors} {...size}>
      <PieCenterLabel value={data[0].value}>Hours</PieCenterLabel>
    </PieChart>
  );
}

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

export default Chart;
