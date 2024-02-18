"use client";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll/modules";

const generateFooterLinks = (links: any[]) => {
  return links.map((link) => (
    <ScrollLink
      key={link.to}
      activeClass="active"
      to={link.to}
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
    >
      <li className="cursor-pointer">{link.label}</li>
    </ScrollLink>
  ));
};  

export default function Footer() {
    const footerLinks = [
      { to: "home", label: "Home" },
      { to: "features", label: "Features" },
      { to: "aboutus", label: "About" },
      { to: "contact", label: "Contact" },
    ];
  
  return (
    <div className="bg-blue-900 mt-10 md:px-14 p-4 max-w-screen-2xl mx-auto">
      <div className="my-12 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-5">
          <a
            href=""
            className="text-2xl font-semibold flex item-center space-x-3 text-primary"
          >
            {/* Logo */}
            <div className=" relative z-0 w-14 h-14 rounded-full left-2 -top-3 mr-3 bg-sky-50">
              <img
                src="/home-assets/logo.png"
                alt="logo"
                className="w-12 mt-2.5 ml-1.5  inline-block items-center"
              />
            </div>

            {/* Name */}
            <span className="text-white">MindPhix</span>
          </a>
          <p className="md:w-3/4 text-white text-sm">
            MindPhix is an innovative AI-driven chatbot dedicated to assessing
            and addressing depression levels by administering a personalized
            questionnaire, offering valuable information, and providing ongoing
            support to users, fostering emotional well being.
          </p>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
              className="bg-white py-2 px-4 rounded-md focus:outline-none"
            />
            <input
              type="submit"
              value="Subscribe"
              className="px-4 py-2 bg-blue-300 rounded-md -ml-2 cursor-pointer hover:bg-blue-200 hover:text-blue-600 duration-300 transition-all"
            />
          </div>
        </div>
        {/* footer navigations*/}
        <div className="md:w-2/5 flex flex-col md:flex-row flex-wrap justify-between">
          <div className="space-y-4 mt-5 -ml-10">
            <h4 className="text-sm text-white">Platform</h4>
            <ul className="space-y3 text-white text-sm">
            {generateFooterLinks(footerLinks)}
            </ul>
          </div>

          <div className="space-y-4 mt-5 ml-10">
            <h4 className="text-sm text-white">Help</h4>
            <ul className="space-y3 text-white text-sm">
              <a href="#" className="block hover:text-gray-200">
                Help Center
              </a>
              <a href="#" className="block hover:text-gray-200">
                Contact Support
              </a>
              <a href="#" className="block hover:text-gray-200">
                Instructions
              </a>
              <a href="#" className="block hover:text-gray-200">
                How it works
              </a>
            </ul>
          </div>

          <div className="space-y-4 mt-5 ml-10">
            <h4 className="text-sm text-white">Awareness</h4>
            <ul className="space-y3 text-white text-sm">
              <a href="https://www.psychiatry.org/patients-families/depression/what-is-depression" className="block hover:text-gray-200">
                What is Depression ?
              </a>
              <a href="https://patient.info/doctor/patient-health-questionnaire-phq-9" className="block hover:text-gray-200">
                What is PHQ-9 ?
              </a>
              <a href="https://www.nhs.uk/mental-health/conditions/depression-in-adults/symptoms/" className="block hover:text-gray-200">
                What are the Symptoms ?
              </a>
              <a href="https://www.helpguide.org/articles/depression/coping-with-depression.htm" className="block hover:text-gray-200">
                How to manage depression ?
              </a>
            </ul>
          </div>

        </div>
      </div>
      <hr />
      <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8 text-white">
        <p className="text-sm">
          Copyright © 2024 MindPhix. All rights reserved
        </p>
        <div className="flex items-center space-x-5">
          <a href="#">
            <FaFacebook className="w-8 cursor-pointer hover:translate-y-4 transition-all duration-300" />
          </a>
          <a href="#">
            <AiFillInstagram />
          </a>
          <a href="#">
            <FaXTwitter />
          </a>
          <a href="#">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}

