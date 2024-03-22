"use client";
import User_DoughnutChat from "@/components/ui/User_DoughnutChart";
import BaseLayout from "../BaseLayout";

import {get, ref,} from 'firebase/database';
import { useState, useEffect } from 'react';
import { database } from "@/app/firebase/config";


interface User {
  id: string;
  First_Name: string;
  Last_Name: string;
  User_Name: string;
  Date_of_Birth: string;
  Gender: string; 
  Email_Address: string;
  Phone_Number: string;
  Status: string;
}

export default function Dashboard() {
  const [userId, setUserId] = useState<string>('U001'); // Default user ID
  const [user, setUser] = useState<User | null>(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  //User Data
  useEffect(() => {
    const fetchUserData = async () => {
      const usersRef = ref(database, `users/${userId}`);
      try {
        const snapshot = await get(usersRef);
        if (snapshot.exists()) {
          const userData = snapshot.val();
          setUser({
            id: userId,
            ...userData,
          });
        } else {
          console.log('No user data available');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();

    //Date
    const intervalId = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); 

    return () => clearInterval(intervalId);


  }, [userId]);

  const formattedDate = currentDate.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  // Function to handle changing the user
  const handleChangeUser = (newUserId: string) => {
    setUserId(newUserId);
  };

  return(
    <BaseLayout>
      {user && (
        <div className="Dashboard_Container">
          {/* Dashboard content Start */}


          <div className="Dashboard_TopBox">
            <img className="Dashboard_TopBox_Image" src="/Figures/DashBoard_TopBoxImage.png" alt="TopBox_Image" />
            <div className="Dashboard_Date">{formattedDate}</div>
            <div className="Dashboard_Welcome_Text">Welcome back, {user.First_Name}!</div>
            <div className="Dashboard_Welcome_Text2">We keep track of your progress</div>
          </div>

          <div className="ApprovedBox">
            <div className="ApprovedBoxTopic">Approved</div>
            <div className="ApprovedBoxText1">36</div>

            <img className="ApprovedBoxArrow" src="/Figures/ApprovedBoxArrow.png" alt="Arrow" />
            <div className="ApprovedBoxText2">Since Last month</div>
          </div>

          <div className="UserBox">
            <div className="UserBoxTopic">User</div>
            
            <div className="UserChart">
              <User_DoughnutChat />
            </div>

          </div>

          {/* Resource 1 */}
          <iframe className="Frame1" src="https://www.pinerest.org/newsroom/articles/mental-health-awareness-blog/"></iframe>

          {/* Resource 2 */}
          <iframe className="Frame2" src="https://www.today.com/video/how-to-develop-and-attract-deeper-connections-with-others-199161413847"></iframe>
        </div>
      )}
    </BaseLayout>
  );
}
