"use client";
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';
import React, { useState, useEffect } from 'react';
import { ref, child, get } from "firebase/database";
import { database } from "@/app/firebase/config";


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

function Chart(){
  const [data, setData] = useState([{ value: 0 }, { value: 100 }]); // State to hold the data array
  const colors = ['#FB8C3B', '#dbd9d9'];
  const [userId, setUserId] = useState<string>('U001'); 

  useEffect(() => {
    
    const dbRef = ref(database);
    
    // Fetch completed activities count
    get(child(dbRef, `users/${userId}/Progress/Complete_Activities/Completed`)).then((completedSnapshot) => {
      const completedCount = completedSnapshot.exists() ? completedSnapshot.val() : 0;
      
      // Fetch given activities count
      get(child(dbRef, `users/${userId}/Progress/Complete_Activities/Given`)).then((givenSnapshot) => {
        const givenCount = givenSnapshot.exists() ? givenSnapshot.val() : 0;
        
        // Update state with both completed and given counts
        setData([{ value: completedCount }, { value: givenCount }]);
      }).catch((givenError) => {
        console.error("Error fetching given activities count:", givenError);
      });
    }).catch((completedError) => {
      console.error("Error fetching completed activities count:", completedError);
    });
  }, []);


  return (
    <PieChart series={[{ data, innerRadius: 80 }]} colors={colors} {...size}>
      <PieCenterLabel value={data[0].value}> out of {data[1].value}</PieCenterLabel>
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
