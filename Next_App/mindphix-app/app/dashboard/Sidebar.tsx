"use client";
import Image from "next/image";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GiProgression } from "react-icons/gi";
import { BsChatLeftDots } from "react-icons/bs";
import { RxExit } from "react-icons/rx";
import Link from "next/link";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useState } from "react";

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
    name: "Chat",
    href: "/dashboard/Chat",
    icon: BsChatLeftDots,
  },
];

export default function Sidebar(){

  const [isCollapsedSidebar,setIsCollapsedSidebar] = useState <Boolean>(false);

  const toggleSidebarCollapseHandler = () =>{
    setIsCollapsedSidebar((prev) => !prev)
  }

  return(
    <div className="sidebar__wrapper">
      <button className="btn" onClick={(toggleSidebarCollapseHandler)}>
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
          {sidebarItems.map(({name, href, icon: Icon}) => (
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
