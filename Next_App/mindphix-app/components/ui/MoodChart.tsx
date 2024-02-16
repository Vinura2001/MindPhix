"use client";
import Stack from '@mui/material/Stack';
import { LineChart } from '@mui/x-charts/LineChart';
import React, { useState, useEffect } from 'react';
import { ref, child, get } from "firebase/database";
import { database } from "@/app/firebase/config";

export default function MoodChart() {


  const [data, setData] = useState([0, 0, 0, 0, 0, 0, 0]);
  const xData = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7'];
  const [userId, setUserId] = useState<string>('U001'); 

  useEffect(() => {
    
    const dbRef = ref(database);
    
    // Fetch Week1 count
    get(child(dbRef, `users/${userId}/Progress/Mood_Shift/Week1`)).then((week1_Snapshot) => {
      const week1_Count = week1_Snapshot.exists() ? week1_Snapshot.val() : 0;
      
      // Fetch Week2 count
      get(child(dbRef, `users/${userId}/Progress/Mood_Shift/Week2`)).then((week2_Snapshot) => {
        const week2_Count = week2_Snapshot.exists() ? week2_Snapshot.val() : 0;
  
        // Fetch Week3 count
        get(child(dbRef, `users/${userId}/Progress/Mood_Shift/Week3`)).then((week3_Snapshot) => {
          const week3_Count = week3_Snapshot.exists() ? week3_Snapshot.val() : 0;
        
           // Fetch Week4 count
          get(child(dbRef, `users/${userId}/Progress/Mood_Shift/Week4`)).then((week4_Snapshot) => {
            const week4_Count = week4_Snapshot.exists() ? week4_Snapshot.val() : 0;

             // Fetch Week5 count
            get(child(dbRef, `users/${userId}/Progress/Mood_Shift/Week5`)).then((week5_Snapshot) => {
              const week5_Count = week5_Snapshot.exists() ? week5_Snapshot.val() : 0;

              // Fetch Week6 count
              get(child(dbRef, `users/${userId}/Progress/Mood_Shift/Week6`)).then((week6_Snapshot) => {
                const week6_Count = week6_Snapshot.exists() ? week6_Snapshot.val() : 0;

                // Fetch Week7 count
                get(child(dbRef, `users/${userId}/Progress/Mood_Shift/Week7`)).then((week7_Snapshot) => {
                  const week7_Count = week7_Snapshot.exists() ? week7_Snapshot.val() : 0;
        
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
    <Stack sx={{ width: '150%' }}>
    
      <LineChart
        xAxis={[{ data: xData, scaleType: 'point' }]}
        series={[{ data, connectNulls: true }]}
        height={190}
        margin={{ top: 10, bottom: 20 }}
      />
    </Stack>
  );
}