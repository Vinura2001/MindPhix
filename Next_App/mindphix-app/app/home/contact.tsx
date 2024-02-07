"use client";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaBlogger } from "react-icons/fa";
import { Button } from "../../components/ui/button";

export default function Contact() {
  return (
    <div className="antialiased" id="contact">
      <div className="container mx-auto text-center">
        <h1 className="mb-4 text-blue-800 text-xl font-bold">
          Feel free to reach out
        </h1>
        <p className="mx-auto w-full lg:w-1/2 text-3xl mb-10">
          Let&apos;s embark on a journey of innovation and success.
        </p>
      </div>
      <div className="flex w-screen min-h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row sm-p-12 overflow-hidden md:space-x-6 md:space-y-0 space-y-6 bg-blue-900 w-full max-w-6xl p-8 rounded-xl shadow-lg text-white ">
          <div className="flex flex-col justify-between space-y-8">
            <div>
              <h1 className="font-bold text-3xl tracking-wide">
                Contact Information
              </h1>
              <p className="pt-4 text-white text-sm w-1/2">
                Thank you for visiting our website! If you have any questions,
                feedback, or inquiries, please feel free to reach out to us.
              </p>
            </div>
            <div>
              <div className=" flex space-x-3 items-center mb-10 -mt-20">
                <IoCallSharp className="text-base" />
                <span className="text-sm">+94-743792700</span>
              </div>

              <div className="flex space-x-3 items-center mb-10">
                <MdEmail className="text-base" />
                <span className="text-sm">mindphixinquiries@gmail.com</span>
              </div>

              <div className="flex space-x-3 items-center">
                <FaBlogger className="text-base" />
                <span className="text-sm">mindphix-blog </span>
              </div>
            </div>
            <div className="flex space-6 gap-4 text-sm">
              <a href="#">
                <FaFacebook />
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
          <div className="relative">
            <div className="absolute z-0 w-40 h-40 bg-blue-600 rounded-full -right-28 -top-28"></div>
            <div className="absolute z-0 w-40 h-40 bg-blue-600 rounded-full -left-20 -bottom-16"></div>
            <div className=" relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 mr-10">
              <form action="" className="flex flex-col space-y-4 md:w-96">
                <div>
                  <label htmlFor="" className="text-sm">
                    Your name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-4 outline-none focus:ring-2 focus:ring-blue-600 focus:outline-none focus:ring-opacity-75 focus:shadow-outline-blue"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-sm">
                    Email Address
                  </label>
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-4 outline-none focus:ring-2 focus:ring-blue-600 focus:outline-none focus:ring-opacity-75 focus:shadow-outline-blue"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-sm">
                    Message
                  </label>
                  <textarea
                    placeholder="Enter your message here.."
                    rows={10}
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-4 outline-none resize-none focus:ring-2 focus:ring-blue-600 focus:outline-none focus:ring-opacity-75 focus:shadow-outline-blue"
                  />
                </div>
                <Button className="inline-block self-end bg-blue-800 text-white rounded-lg text-sm px-6 py-2 hover:bg-blue-700">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
