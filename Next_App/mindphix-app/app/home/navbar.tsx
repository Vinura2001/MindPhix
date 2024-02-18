"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaBars,FaXmark } from "react-icons/fa6";
import { Link as ScrollLink } from "react-scroll/modules";
import Link from "next/link";

// Reusable function to generate navigation links
const generateNavLinks = (links: any[]) => {
  return links.map((link) => (
    <ScrollLink
      key={link.to}
      activeClass="activeLink"
      to={link.to}
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
    >
      <li className="hover:text-blue-900 cursor-pointer">{link.label}</li>
    </ScrollLink>
  ));
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationLinks = [
    { to: "home", label: "Home" },
    { to: "features", label: "Features" },
    { to: "aboutus", label: "About" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="bg-white md-px-14 p-4 max-w-screen-2xl mx-auto fixed top-0 right-0 left-0 border-b">
        <div className="text-lg container mx-auto flex justify-between items-center font-medium">
          <div className="flex space-x-14 items-center">
            <a
              href=""
              className="text-2xl font-semibold flex item-center space-x-3 text-primary"
            >
              {/* Logo */}
              <img
                src="/home-assets/logo.png"
                alt="logo"
                className="w-10 inline-block items-center"
              />
              {/* Name */}
              <span>MindPhix</span>
            </a>
            {/* Navigation Items */}
            <ul className="md:flex space-x-12 hidden">
              {generateNavLinks(navigationLinks)}
            </ul>
          </div>
          {/* Signin and Signup Buttons*/}
          <div className="space-x-7 hidden md:flex items-center">
          
              <Button className="bg-blue-800 py-2 px-4 transition-all duration-300  hover:bg-blue-900">
              <Link href="/sign-in">Sign in </Link>
              </Button>
           
              <Button className="bg-blue-800 py-2 px-4 transition-all duration-300  hover:bg-blue-900">
              <Link href="/sign-up">Sign up </Link>
              </Button>
            
          </div>
          {/* Menu button only display on mobile*/}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <FaXmark className="w-6 h-6 text-black" />
              ) : (
                <FaBars className="w-6 h-6 text-black" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {/* Nav items for mobile device*/}
      <div
        className={`space-y-4 px-4 pt-24 pb-5 bg-blue-100 text-lg text-black ${
          isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
        }`}
      >
        <ul>{generateNavLinks(navigationLinks)}</ul>
      </div>
    </>
  );
}
