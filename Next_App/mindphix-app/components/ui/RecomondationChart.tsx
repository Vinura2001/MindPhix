"use client";
import { BarChart } from '@mui/x-charts/BarChart';
import React, { useState, useEffect } from 'react';
import { ref, child, get } from "firebase/database";
import { database } from "@/app/firebase/config";


const valueFormatter = (value: number) => `${value}`;

export default function RecomendationChart() {

  const [userId, setUserId] = useState<string>('U001'); 

  const chartSetting = {
    xAxis: [
      {
        label: 'Activities',
      },
    ],
    width: 260,
    height: 250,
  };
  
  
  const [dataset, setData] = useState([
    {
      CompleateActivity_Count: 0,
      Activity_Type: 'Expressive Arts Therapy',
    },
    {
      CompleateActivity_Count: 0,
      Activity_Type: 'Mindfulness and Relaxation Techniques',
    },
    {
      CompleateActivity_Count: 0,
      Activity_Type: 'Motivational Videos',
    },
    {
      CompleateActivity_Count: 0,
      Activity_Type: 'Movies and Drama',
    },
    {
      CompleateActivity_Count: 0,
      Activity_Type: 'Physical Health Resource',
    },
    {
      CompleateActivity_Count: 0,
      Activity_Type: 'Podcasts',
    },
    {
      CompleateActivity_Count: 0,
      Activity_Type: 'Professional Help',
    },
    {
      CompleateActivity_Count: 0,
      Activity_Type: 'Social Connection Strategies',
    },
  ]);

  
  const valueFormatter = (value: number) => `${value}`;


  useEffect(() => {
    
    const dbRef = ref(database);
    
    // Fetch completed activity count
    get(child(dbRef, `users/${userId}/Progress/Recomendation_Analytics/Category_1/Count`)).then((Count_Snapshot) => {
      const Category1_Count = Count_Snapshot.exists() ? Count_Snapshot.val() : 0;
      
      // Fetch activity type
      get(child(dbRef, `users/${userId}/Progress/Recomendation_Analytics/Category_1/Type`)).then((Type_Snapshot) => {
        const Category1_Type = Type_Snapshot.exists() ? Type_Snapshot.val() : 0;
        
        // Fetch completed activity count
        get(child(dbRef, `users/${userId}/Progress/Recomendation_Analytics/Category_2/Count`)).then((Count_Snapshot) => {
        const Category2_Count = Count_Snapshot.exists() ? Count_Snapshot.val() : 0;
      
          // Fetch activity type
          get(child(dbRef, `users/${userId}/Progress/Recomendation_Analytics/Category_2/Type`)).then((Type_Snapshot) => {
          const Category2_Type = Type_Snapshot.exists() ? Type_Snapshot.val() : 0;
        

            // Fetch completed activity count
            get(child(dbRef, `users/${userId}/Progress/Recomendation_Analytics/Category_3/Count`)).then((Count_Snapshot) => {
            const Category3_Count = Count_Snapshot.exists() ? Count_Snapshot.val() : 0;
      
              // Fetch activity type
              get(child(dbRef, `users/${userId}/Progress/Recomendation_Analytics/Category_3/Type`)).then((Type_Snapshot) => {
                const Category3_Type = Type_Snapshot.exists() ? Type_Snapshot.val() : 0;

                get(child(dbRef, `users/${userId}/Progress/Recomendation_Analytics/Category_4/Count`)).then((Count_Snapshot) => {
                  const Category4_Count = Count_Snapshot.exists() ? Count_Snapshot.val() : 0;
            
                    // Fetch activity type
                    get(child(dbRef, `users/${userId}/Progress/Recomendation_Analytics/Category_4/Type`)).then((Type_Snapshot) => {
                      const Category4_Type = Type_Snapshot.exists() ? Type_Snapshot.val() : 0;
      
                      get(child(dbRef, `users/${userId}/Progress/Recomendation_Analytics/Category_5/Count`)).then((Count_Snapshot) => {
                        const Category5_Count = Count_Snapshot.exists() ? Count_Snapshot.val() : 0;
                  
                          // Fetch activity type
                          get(child(dbRef, `users/${userId}/Progress/Recomendation_Analytics/Category_5/Type`)).then((Type_Snapshot) => {
                            const Category5_Type = Type_Snapshot.exists() ? Type_Snapshot.val() : 0;
            
                            get(child(dbRef, `users/${userId}/Progress/Recomendation_Analytics/Category_6/Count`)).then((Count_Snapshot) => {
                              const Category6_Count = Count_Snapshot.exists() ? Count_Snapshot.val() : 0;
                        
                                // Fetch activity type
                                get(child(dbRef, `users/${userId}/Progress/Recomendation_Analytics/Category_6/Type`)).then((Type_Snapshot) => {
                                  const Category6_Type = Type_Snapshot.exists() ? Type_Snapshot.val() : 0;
                  
                                  get(child(dbRef, `users/${userId}/Progress/Recomendation_Analytics/Category_7/Count`)).then((Count_Snapshot) => {
                                    const Category7_Count = Count_Snapshot.exists() ? Count_Snapshot.val() : 0;
                              
                                      // Fetch activity type
                                      get(child(dbRef, `users/${userId}/Progress/Recomendation_Analytics/Category_7/Type`)).then((Type_Snapshot) => {
                                        const Category7_Type = Type_Snapshot.exists() ? Type_Snapshot.val() : 0;
                        
                                        get(child(dbRef, `users/${userId}/Progress/Recomendation_Analytics/Category_8/Count`)).then((Count_Snapshot) => {
                                          const Category8_Count = Count_Snapshot.exists() ? Count_Snapshot.val() : 0;
                                    
                                            // Fetch activity type
                                            get(child(dbRef, `users/${userId}/Progress/Recomendation_Analytics/Category_8/Type`)).then((Type_Snapshot) => {
                                              const Category8_Type = Type_Snapshot.exists() ? Type_Snapshot.val() : 0;
                              
                                              // Update state with both completed and given counts
                                              setData([
                                                {CompleateActivity_Count: Category1_Count, Activity_Type: Category1_Type},
                                                {CompleateActivity_Count: Category2_Count, Activity_Type: Category2_Type},
                                                {CompleateActivity_Count: Category3_Count, Activity_Type: Category3_Type},
                                                {CompleateActivity_Count: Category4_Count, Activity_Type: Category4_Type},
                                                {CompleateActivity_Count: Category5_Count, Activity_Type: Category5_Type},
                                                {CompleateActivity_Count: Category6_Count, Activity_Type: Category6_Type},
                                                {CompleateActivity_Count: Category7_Count, Activity_Type: Category7_Type},
                                                {CompleateActivity_Count: Category8_Count, Activity_Type: Category8_Type},
                                              ]);
                                      
                                            }).catch((givenError) => {
                                              console.error("Error fetching given activities count:", givenError);
                                            });
                                          }).catch((completedError) => {
                                            console.error("Error fetching completed activities count:", completedError);
                                          });
                                
                                      }).catch((givenError) => {
                                        console.error("Error fetching given activities count:", givenError);
                                      });
                                    }).catch((completedError) => {
                                      console.error("Error fetching completed activities count:", completedError);
                                    });
                          
                                }).catch((givenError) => {
                                  console.error("Error fetching given activities count:", givenError);
                                });
                              }).catch((completedError) => {
                                console.error("Error fetching completed activities count:", completedError);
                              });
                    
            
                    
                          }).catch((givenError) => {
                            console.error("Error fetching given activities count:", givenError);
                          });
                        }).catch((completedError) => {
                          console.error("Error fetching completed activities count:", completedError);
                        });
              
      
              
                    }).catch((givenError) => {
                      console.error("Error fetching given activities count:", givenError);
                    });
                  }).catch((completedError) => {
                    console.error("Error fetching completed activities count:", completedError);
                  });
        

        
              }).catch((givenError) => {
                console.error("Error fetching given activities count:", givenError);
              });
            }).catch((completedError) => {
              console.error("Error fetching completed activities count:", completedError);
            });

        
          }).catch((givenError) => {
            console.error("Error fetching given activities count:", givenError);
          });

        }).catch((completedError) => {
        console.error("Error fetching completed activities count:", completedError);
        });
        
      }).catch((givenError) => {
        console.error("Error fetching given activities count:", givenError);
      });
    }).catch((completedError) => {
      console.error("Error fetching completed activities count:", completedError);
    });

  }, []);


  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'Activity_Type' }]}
      series={[{ dataKey: 'CompleateActivity_Count', valueFormatter }]}
      layout="horizontal"
      {...chartSetting}
    />
  );
}