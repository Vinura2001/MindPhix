"use client";
import { LineChart } from '@mui/x-charts/LineChart';
import React, { useState, useEffect } from 'react';
import { ref, child, get } from "firebase/database";
import { database } from "@/app/firebase/config";



export default function DepressionChart() {

  const [Data, setData] = useState([0, 0, 0, 0, 0, 0, 0]);
  const xLabels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'PWeek 6', 'Week 7'];
  const [userId, setUserId] = useState<string>('U001'); 
  const color = '#2E6DE8'; 

  const seriesData = [{ 
    data: Data, 
    area: true, 
    showMark: false, 
    color: color 
  }];


  useEffect(() => {
    
    const dbRef = ref(database);
    
    // Fetch Week1 count
    get(child(dbRef, `users/${userId}/Progress/Depression_Level/Week1`)).then((week1_Snapshot) => {
      const week1_Count = week1_Snapshot.exists() ? week1_Snapshot.val() : 0;
      console.log(week1_Count);
      
      // Fetch Week2 count
      get(child(dbRef, `users/${userId}/Progress/Depression_Level/Week2`)).then((week2_Snapshot) => {
        const week2_Count = week2_Snapshot.exists() ? week2_Snapshot.val() : 0;
        console.log(week2_Count);

        // Fetch Week3 count
        get(child(dbRef, `users/${userId}/Progress/Depression_Level/Week3`)).then((week3_Snapshot) => {
          const week3_Count = week3_Snapshot.exists() ? week3_Snapshot.val() : 0;
          console.log(week3_Count);
        
           // Fetch Week4 count
          get(child(dbRef, `users/${userId}/Progress/Depression_Level/Week4`)).then((week4_Snapshot) => {
            const week4_Count = week4_Snapshot.exists() ? week4_Snapshot.val() : 0;
            console.log(week4_Count);

             // Fetch Week5 count
            get(child(dbRef, `users/${userId}/Progress/Depression_Level/Week5`)).then((week5_Snapshot) => {
              const week5_Count = week5_Snapshot.exists() ? week5_Snapshot.val() : 0;
              console.log(week5_Count);

              // Fetch Week6 count
              get(child(dbRef, `users/${userId}/Progress/Depression_Level/Week6`)).then((week6_Snapshot) => {
                const week6_Count = week6_Snapshot.exists() ? week6_Snapshot.val() : 0;
                console.log(week6_Count);

                // Fetch Week7 count
                get(child(dbRef, `users/${userId}/Progress/Depression_Level/Week7`)).then((week7_Snapshot) => {
                  const week7_Count = week7_Snapshot.exists() ? week7_Snapshot.val() : 0;
                  console.log(week7_Count);
        
                  // Update state all weeks counts
                  setData([week1_Count, week2_Count, week3_Count, week4_Count, week5_Count, week6_Count, week7_Count]);
                }).catch((givenError) => {
                  console.error("Error fetching given activities count:", givenError);
                });
        
              }).catch((givenError) => {
                console.error("Error fetching given activities count:", givenError);
              });
        
            }).catch((givenError) => {
              console.error("Error fetching given activities count:", givenError);
            });
        
          }).catch((givenError) => {
            console.error("Error fetching given activities count:", givenError);
          });
      
        }).catch((givenError) => {
          console.error("Error fetching given activities count:", givenError);
        });
        
      }).catch((givenError) => {
        console.error("Error fetching given activities count:", givenError);
      });
    }).catch((completedError) => {
      console.error("Error fetching completed activities count:", completedError);
    });
  }, []);




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
