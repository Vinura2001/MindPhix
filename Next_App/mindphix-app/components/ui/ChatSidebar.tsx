"use client";
import Image from "next/image";
import { RxExit } from "react-icons/rx";
import { RiChatHistoryLine } from "react-icons/ri";
import Link from "next/link";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { useState } from "react";

const sidebarItems = [
  {
    name: "Session 1",
    href: "/",
    icon: RiChatHistoryLine,
  },
  {
    name: "Session 2",
    href: "/",
    icon: RiChatHistoryLine,
  },
  {
    name: "Session 3",
    href: "/",
    icon: RiChatHistoryLine,
  },
  {
    name: "Session 4",
    href: "/",
    icon: RiChatHistoryLine,
  },
];

export default function ChatSidebar(){

  let CollapsState;
  
  if (window.innerWidth <= 768) {
    CollapsState =true;
  } else {
    CollapsState =false;
  }
  

  const [isCollapsedSidebar,setIsCollapsedSidebar] = useState <Boolean>(CollapsState);

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
            <Link href="/dashboard/Chat" className="sidebar__link">
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
