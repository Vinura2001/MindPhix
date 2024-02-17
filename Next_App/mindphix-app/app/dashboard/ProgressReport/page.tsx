"use client";
import WeeklyEngagement_Chart from "@/components/ui/WeeklyEngagement_Chart";
import BaseLayout from "../BaseLayout";
import CompletionActivity from "@/components/ui/CompletionActivity_Chart";
import MoodChart from "@/components/ui/MoodChart";
import DepressionChart from "@/components/ui/Depression_Chart";
import RecomendationChart from "@/components/ui/RecomondationChart";
import Logout from "../Dashboard/logout";


export default function ProgressReport() {
  return(
    <BaseLayout>
      <div>
      <Logout/>

      <div className="ProgressReport_TopBox">
        <img className="ProgressReport_TopBox_Image" src="/Figures/TopBox_Image.png" alt="TopBox_Image" />
        <div className="ProgressReport_Date">January 16, 2024</div>
        <div className="ProgressReport_Welcome_Text">Welcome back, Steven!</div>
        <div className="ProgressReport_Welcome_Text2">We keep track of your progress</div>
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

        <img id="happy_face" src="/Figures/1_happy_face.png" alt="happy_face" />
        <img id="smile_face" src="/Figures/2_smile_face.png" alt="smile_face" />
        <img id="neutral_face" src="/Figures/3_neutral_face.png" alt="neutral_face" />
        <img id="injured_face" src="/Figures/4_injured_face.png" alt="injured_face" />
        <img id="sceptic_face" src="/Figures/5_sceptic_face.png" alt="sceptic_face" />
        <img id="sad_face" src="/Figures/6_sad_face.png" alt="sad_face" />
        
        <MoodChart />
        
      </div>
      
      {/* Achievements end */}
      <hr className="ContentDivider" />

      {/* Analytics start */}
      <img className="AnalyticsIcon" src="/Figures/AnalyticsIcon.png" alt="AnalyticsIcon" />
      <div className="Analytics">Analytics</div>

      {/* Replace the following divs with your Chart.js logic */}
        <div className="AnalyticsBox1">
          <div className="NoLable">No</div>
          <div className="MinimalLable">Minimal</div>
          <div className="MildLable">Mild</div>
          <div className="ModerateLable">Moderate</div>
          <div className="Moderately_SevereLable">Moderately Severe</div>
          <div className="SevereLable">Severe</div>

          
          <DepressionChart />
      </div>
      
      <div className="AnalyticsBox2">
        <div className="AnalyticsBox2_Topic">Recommendations Analytics</div>
        
        <RecomendationChart />
        
      </div>
      {/* Analytics end */}
    </div>
    </BaseLayout>
  );
}