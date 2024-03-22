"use client";
import WeeklyEngagement_Chart from "@/components/ui/WeeklyEngagement_Chart";
import BaseLayout from "../BaseLayout";
import CompletionActivity from "@/components/ui/CompletionActivity_Chart";
import MoodChart from "@/components/ui/MoodChart";
import DepressionChart from "@/components/ui/Depression_Chart";
import RecomendationChart from "@/components/ui/RecomondationChart";
import Logout from "../Dashboard/logout";
import {get, ref, remove} from 'firebase/database';
import { useState, useEffect } from 'react';
import { database } from "@/app/firebase/config";
import { Button } from "@/components/ui/button";

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

export default function ProgressReport() {

  const [userId, setUserId] = useState<string>('U002'); // Default user ID
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

  const handleDeleteProgress = async () => {
    try {
      const userRef = ref(database, `users/${userId}/Progress`);
      await remove(userRef);
      console.log("User data deleted successfully");
    } catch (error) {
      console.error("Error deleting user data:", error);
      // You can also display an error message to the user here
    }
  };

  return(
    <BaseLayout>
      {user && (
        <div>

        <div className="ProgressReport_TopBox">
          <img className="ProgressReport_TopBox_Image" src="/Figures/TopBox_Image.png" alt="TopBox_Image" />
          <div className="ProgressReport_Date">{formattedDate}</div>
          <div className="ProgressReport_Welcome_Text">Welcome back, {user.First_Name}!</div>
          <div className="ProgressReport_Welcome_Text2">We keep track of your progress</div>
          <Button
            type="button"
            onClick={handleDeleteProgress}
            className="ProgressDelete_Button text-sm text-white bg-red-800 h-6 p-4 rounded-sm hover:bg-blue-900"
          >
            Delete Progress
          </Button>
        </div>

        {/* Achievements start */}
        <img className="AchievementsImage" src="/Figures/AchievementsImage.png" alt="AchievementsImage" />
        <div className="Achievements">Achievements</div>

        {/* Achievement box 1 */}
        <div className="AchievementBox1_Topic">Weekly Engagement</div>
        <div className="AchievementBox1">
          <div className="WeeklyEngagement_Chart">
            <WeeklyEngagement_Chart />
          </div>
        </div>

        {/* Achievement box 2 */}
        <div className="AchievementBox2_Topic">Completion of Activities</div>
        <div className="AchievementBox2">
        <div className="WeeklyEngagement_Chart">
            <CompletionActivity />
          </div>
        </div>

        {/* Achievement box 3 */}
        <div className="AchievementBox3_Topic">Positive Mood Shift</div>
        <div className="AchievementBox3">

          <img id="face1" src="/Figures/Happy.png" alt="injured_face" />
          <img id="face2" src="/Figures/Clam.png" alt="smile_face" />
          <img id="face3" src="/Figures/Nutral.png" alt="sceptic_face" />
          <img id="face4" src="/Figures/Confused.png" alt="neutral_face" />
          <img id="face5" src="/Figures/Scared.png" alt="sad_face" />
          <img id="face6" src="/Figures/Anxious.png" alt="Anxious_face" />
          <img id="face7" src="/Figures/Sad.png" alt="sad_face" />
          
          <MoodChart />
          
        </div>
        
        {/* Achievements end */}
        <hr className="ContentDivider" />

        {/* Analytics start */}
        <img className="AnalyticsIcon" src="/Figures/AnalyticsIcon.png" alt="AnalyticsIcon" />
        <div className="Analytics">Analytics</div>

          <div className="DepressionLabel_box">
            <ul>
              <li className="UlMinimalLable">1-4 Minimal</li>
              <li className="UlMildLable">5-9 Mild</li>
              <li className="UlModerateLable">10-14 Moderate</li>
              <li className="UlModerately_SevereLable">15-19 Moderately Severe</li>
              <li className="UlSevereLable">20-27 Severe</li>
            </ul>
          </div>
        
          <div className="AnalyticsBox1_Topic">Deepression Analytics</div>
          <div className="AnalyticsBox1">
            
            <DepressionChart />
          </div>
        
        <div className="AnalyticsBox2">
          <div className="AnalyticsBox2_Topic">Recommendations Analytics</div>
          
          <RecomendationChart />
          
        </div>
        {/* Analytics end */}
      </div>
    )}
    </BaseLayout>
  );
}