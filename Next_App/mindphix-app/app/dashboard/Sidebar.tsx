"use client";
import Image from "next/image";
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GiProgression } from "react-icons/gi";
import { AiFillAlert } from "react-icons/ai";
import { RxExit } from "react-icons/rx";
import { MdQuiz } from "react-icons/md";
import { CiChat1 } from "react-icons/ci";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useState, useEffect } from "react";
import Link from "next/link";

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/dashboard/Dashboard",
    icon: MdDashboard,
  },
  {
    name: "Profile",
    href: "/dashboard/Profile",
    icon: CgProfile,
  },
  {
    name: "Progress Report",
    href: "/dashboard/ProgressReport",
    icon: GiProgression,
  },
  {
    name: "Quiz",
    href: "/dashboard/Quiz",
    icon: MdQuiz,
  },
  {
    name: "Get recomendation",
    href: "/dashboard/Recomendation",
    icon: AiFillAlert,
  },
  {
    name: "Chat",
    href: "/dashboard/Chat",
    icon: CiChat1,
  }
];

export default function Sidebar() {
  const [isCollapsedSidebar, setIsCollapsedSidebar] = useState(false);

  useEffect(() => {
    // Check if window is available (client-side)
    if (typeof window !== "undefined") {
      const handleResize = () => {
        if (window.innerWidth <= 968) {
          setIsCollapsedSidebar(true);
        } else {
          setIsCollapsedSidebar(false);
        }
      };

      // Add event listener to window resize
      window.addEventListener("resize", handleResize);

      // Initial call to handleResize to set the initial state
      handleResize();

      // Remove event listener on component unmount
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const toggleSidebarCollapseHandler = () => {
    setIsCollapsedSidebar((prev) => !prev);
  };

  return (
    <div className="sidebar__wrapper">
      <button className="btn" onClick={toggleSidebarCollapseHandler}>
        <MdOutlineKeyboardArrowLeft />
      </button>
      <aside className="sidebar" data-collapse={isCollapsedSidebar}>
        <div className="sidebar__top">
          <Image
            src="/HalfLogo.png"
            width={80}
            height={80}
            className="sidebar__logo"
            alt="logo"
          />
          <p className="sidebar__logo-name">MindPhix</p>
        </div>
        <ul className="sidebar__list">
          {sidebarItems.map(({ name, href, icon: Icon }) => (
            <li className="sidebar__item" key={name}>
              <Link href={href} className="sidebar__link">
                <span className="sidebar_icon">
                  <Icon />
                </span>
                <span className="sidebar__name">{name}</span>
              </Link>
            </li>
          ))}

          {/* Display "Exit" button at the bottom of the sidebar */}
          <li id="exit_btn" className="sidebar__item" key="Exit">
            <Link href="/" className="sidebar__link">
              <span className="sidebar__icon">
                <RxExit />
              </span>
              <span className="sidebar__name">Exit</span>
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}
