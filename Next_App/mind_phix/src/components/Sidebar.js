import Image from "next/image";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { TiContacts } from "react-icons/ti";
import { FiMail } from "react-icons/fi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GiProgression } from "react-icons/gi";
import { BsChatLeftDots } from "react-icons/bs";
import { RxExit } from "react-icons/rx";
import Link from "next/link";
import { useContext } from "react";
import { SidebarContext } from "@/context/SidebarContext";
import { useRouter } from "next/router";

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/Dashboard",
    icon: MdDashboard,
  },
  {
    name: "Profile",
    href: "/Profile",
    icon: CgProfile,
  },
  {
    name: "Progress Report",
    href: "/ProgressReport",
    icon: GiProgression,
  },
  {
    name: "Chat",
    href: "/Chat",
    icon: BsChatLeftDots,
  },
];

const Sidebar = () => {
  const router = useRouter();
  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);

  return (
    <div className="sidebar__wrapper">
      <button className="btn" onClick={toggleSidebarcollapse}>
        {isCollapsed ? <MdKeyboardArrowRight /> : <MdKeyboardArrowLeft />}
      </button>
      <aside className="sidebar" data-collapse={isCollapsed}>
        <div className="sidebar__top">
          <Image
            width={100}
            height={100}
            className="sidebar__logo"
            src="/HalfLogo.png"
            alt="logo"
          />
          <p className="sidebar__logo-name">MindPhix</p>
        </div>
        <ul className="sidebar__list">
          {sidebarItems.map(({ name, href, icon: Icon }) => {
            return (
              <li className="sidebar__item" key={name}>
                <Link
                  className={`sidebar__link ${
                    router.pathname === href ? "sidebar__link--active" : ""
                  }`}
                  href={href}
                >
                  <span className="sidebar__icon">
                    <Icon />
                  </span>
                  <span className="sidebar__name">{name}</span>
                </Link>
              </li>
            );
          })}


          {/* Display "Exit" button at the bottom of the sidebar */}
          <li id="exit_btn" className="sidebar__item" key="Exit">
            <Link
              className={`sidebar__link ${
                router.pathname === "/exit" ? "sidebar__link--active" : ""
              }`}
              href="/exit" // Specify the correct href for the exit page
            >
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
};

export default Sidebar;
