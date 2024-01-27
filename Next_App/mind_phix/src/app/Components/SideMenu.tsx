import React from 'react'
import './SideMenu.css';

const SideMenu = () => {
  return (
    <div className="SideBar">
            {/* top logo */}
            <img className="Logo" src= "Figures/HalfLogo.png" alt="Logo" />
            <div className="LogoName">MindPhix</div>

            {/* option 1 */}
            <a href="">
                <div className="Dashboard_Option_Container">
                    <img className="DashboardIcon_Black" src="Figures/DashboardIcon_Black.png" alt="DashboardIcon" />
                    <img className="DashboardIcon_White" src="Figures/DashboardIcon_White.png" alt="DashboardIcon" />
                    <div className="SideBar_Item1">Dashboard</div>
                </div>
            </a>

            {/* option 2 */}
            <a href="">
                <div className="Profile_Option_Container">
                    <img className="UserIcon_Black" src="Figures/UserIcon_Black.png" alt="UserIcon" />
                    <img className="UserIcon_White" src="Figures/UserIcon_White.png" alt="UserIcon" />
                    <div className="SideBar_Item2">Profile</div>
                </div>
            </a>

            {/* option 3 */}
            <a href="">
                <div className="Progress_Option_Container">
                    <img className="Chart_Line_Black" src="Figures/Chart_Line_Black.png" alt="Chart_Line_Black" />
                    <img className="Chart_Line_White" src="Figures/Chart_Line_White.png" alt="Chart_Line_White" />
                    <div className="SideBar_Item3">Progress Report</div>
                </div>
            </a>

            {/* option 4 */}
            <a href="">
                <div className="Chat_Option_Container">
                    <img className="MessageIcon_Black" src="Figures/MessageIcon_Black.png" alt="ChatIcon" />
                    <img className="MessageIcon_White" src="Figures/MessageIcon_White.png" alt="ChatIcon" />
                    <div className="SideBar_Item4">Chat</div>
                </div>
            </a>

            {/* Log out option */}
            <a href="">
                <div>
                    <img className="LogoutIcon" src="Figures/LogoutIcon.png" alt="SignOutIcon" />
                    <div className="SignOutText">Sign Out</div>
                </div>
            </a>
        </div>
  )
}

export default SideMenu
