"use client";
import User_DoughnutChat from "@/components/ui/User_DoughnutChart";
import BaseLayout from "../BaseLayout";

export default function Dashboard() {

  const data = {
    labels: ['Active', 'New', 'Inactive'],
    datasets: [{
      label: 'poll',
      data: [6, 4, 2],
      backgroundColor: ['#B09FFF', '#FFD572', '#EFEFEF'],
      borderColor: ['#B09FFF', '#FFD572', '#EFEFEF'],
    }] 
  }

  const options = {
    aspectRatio: 2.5
  };

  return(
    <BaseLayout>
      <div>
        {/* Dashboard content Start */}
        <h1 className="Dashboard_Topic">Dashboard</h1>

        <img className="TopUserIcon" src="/Figures/TopUserIcon.png" alt="TopUserIcon" />
        <div className="TopUserContent1">Steven</div>

        <div className="Dashboard_TopBox">
          <img className="Dashboard_TopBox_Image" src="/Figures/DashBoard_TopBoxImage.png" alt="TopBox_Image" />
          <div className="Dashboard_Date">January 16, 2024</div>
          <div className="Dashboard_Welcome_Text">Welcome back, Steven!</div>
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
          
          <User_DoughnutChat />

        </div>

        {/* Resource 1 */}
        <iframe className="Frame1" src="https://www.pinerest.org/newsroom/articles/mental-health-awareness-blog/"></iframe>

        {/* Resource 2 */}
        <iframe className="Frame2" src="https://www.today.com/video/how-to-develop-and-attract-deeper-connections-with-others-199161413847"></iframe>
      </div>
    </BaseLayout>
  );
}