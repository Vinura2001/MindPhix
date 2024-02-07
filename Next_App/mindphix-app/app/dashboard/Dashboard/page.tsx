"use client";
import { useState } from "react";
import BaseLayout from "../BaseLayout";


export default function Dashboard() {

  const [activePercentage, setActivePercentage] = useState(74);
  const [newPercentage, setNewPercentage] = useState(18);
  const [inactivePercentage, setInactivePercentage] = useState(8);


  return(
    <BaseLayout>
      <div>
        {/* Dashboard content Start */}
        <h1 className="Topic">Dashboard</h1>

        <img className="TopUserIcon" src="Figures/TopUserIcon.png" alt="TopUserIcon" />
        <div className="TopUserContent1">Steven</div>
        <div className="TopUserContent2">User</div>

        <div className="TopBox">
          <img className="TopBox_Image" src="@/Figures/DashBoard_TopBoxImage.png" alt="TopBox_Image" />
          <div className="Date">January 16, 2024</div>
          <div className="Welcome_Text">Welcome back, Steven!</div>
          <div className="Welcome_Text2">We keep track of your progress</div>
        </div>

        <div className="ApprovedBox">
          <div className="ApprovedBoxTopic">Approved</div>
          <div className="ApprovedBoxText1">36</div>

          <img className="ApprovedBoxArrow" src="Figures/ApprovedBoxArrow.png" alt="Arrow" />
          <div className="ApprovedBoxText2">Since Last month</div>
        </div>

        <div className="UserBox">
          <div className="UserBoxTopic">User</div>

          <div className="UserBoxText1">Active <span id="UserBoxText1_value">74%</span></div>
          <div className="UserBoxText2">New <span id="UserBoxText2_value">18%</span></div>
          <div className="UserBoxText3">Inactive <span id="UserBoxText3_value">8%</span></div>

          <div className="UserBoxText1_ColorBox"></div>
          <div className="UserBoxText2_ColorBox"></div>
          <div className="UserBoxText3_ColorBox"></div>

          <canvas id="myChart" style={{ width: '100%', maxWidth: '600px' }}></canvas>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.4/Chart.js"></script>
          <script src="src/context/DashboardContext.js"></script>
        </div>

        {/* Resource 1 */}
        <iframe className="Frame1" src="https://www.pinerest.org/newsroom/articles/mental-health-awareness-blog/"></iframe>

        {/* Resource 2 */}
        <iframe className="Frame2" src="https://www.today.com/video/how-to-develop-and-attract-deeper-connections-with-others-199161413847"></iframe>
      </div>
    </BaseLayout>
  );
}
