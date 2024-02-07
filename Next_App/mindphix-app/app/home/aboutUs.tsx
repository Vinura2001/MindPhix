import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../../components/ui/hover-card";

function AboutUs() {
  return (
    <div className="md:px-25 p-4 max-w-screen-2xl mx-auto -mt-2" id="aboutus">
      <div className="rounded-lg md:p-9 px-4 py-9">
        {/* Header */}
        <div className="container flex justify-center mx-auto">
          <div>
            <p className="text-blue-800 text-xl text-center font-bold pb-3">
              Our Team
            </p>
            <h1 className="text-3xl text-center pb-10 mx-auto w-5/6 ">
              Meet the Exceptional Minds Behind MindPhix
            </h1>
          </div>
        </div>

        <div className="rounded-lg rounded-br-[80px] md:p-9 px-4 py-9 shadow-lg bg-white">
          {/* Content */}
          <div className="grid gap-6 w-full px-10 pt-10 container mx-auto md:grid-cols-2 lg:grid-cols-4">
            {/* Card 1*/}
            <div className="m-full mb-6 px-6">
              <div className="flex flex-col">
                <img
                  src="/home-assets/about-assets/vinura.jpg"
                  alt="vinura"
                  className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 hover:translate-y-2"
                />
                <div className="text-center mt-6">
                  <h1 className="text-gray-700 text-xl font-bold mb-1">
                    <HoverCard>
                      <HoverCardTrigger className="cursor-pointer">
                        Vinura Imesh
                      </HoverCardTrigger>
                      <HoverCardContent className="text-xs text-gray-500">
                        Hey👋 I'm Vinura, a sophomore majoring in Software
                        Engineering.
                        <br />
                        Let's connect and explore how we can collaborate to
                        bring innovative ideas to life!
                      </HoverCardContent>
                    </HoverCard>
                  </h1>
                  <p className="text-gray-500 font-light mb-2 text-sm">
                    Developer
                  </p>
                </div>
                <div className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300 space-x-3">
                  <a
                    href="https://github.com/Vinura2001"
                    className="bg-sky-700 shadow rounded-full flex items-center justify-center h-9 w-9 text-white"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vinura-imesh-a37a0b263/"
                    className="bg-sky-700 shadow rounded-full flex items-center justify-center h-9 w-9 text-white"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.instagram.com/vinuraimesh/"
                    className="bg-sky-700 shadow rounded-full flex items-center justify-center h-9 w-9 text-white"
                  >
                    <RiInstagramFill />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2*/}
            <div className="m-full mb-4 px-4">
              <div className="flex flex-col">
                <img
                  src="/home-assets/about-assets/janeesha.jpg"
                  alt="janeesha"
                  className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 hover:translate-y-2"
                />
                <div className="text-center mt-4">
                  <h1 className="text-gray-700 text-xl font-bold mb-1">
                    <HoverCard>
                      <HoverCardTrigger className="cursor-pointer">
                        Janeesha Fernando
                      </HoverCardTrigger>
                      <HoverCardContent className="text-xs text-gray-500">
                        Hello! 👋 I'm Janeesha, a second-year undergraduate
                        majoring in Software Engineering. Feel free to reach
                        out, and let's create something extraordinary! 🌟
                      </HoverCardContent>
                    </HoverCard>
                  </h1>
                  <p className="text-gray-500 font-light mb-2 text-sm">
                    Developer
                  </p>
                </div>
                <div className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300 space-x-3">
                  <a
                    href="https://github.com/janeeshafernando02"
                    className="bg-sky-700 shadow rounded-full flex items-center justify-center h-9 w-9 text-white"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shalindi-fernando-98512927a/"
                    className="bg-sky-700 shadow rounded-full flex items-center justify-center h-9 w-9 text-white"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.instagram.com/shalindi_janeesha/"
                    className="bg-sky-700 shadow rounded-full flex items-center justify-center h-9 w-9 text-white"
                  >
                    <RiInstagramFill />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3*/}
            <div className="m-full mb-6 px-6">
              <div className="flex flex-col">
                <img
                  src="/home-assets/about-assets/dileesha.jpg"
                  alt="dileesha"
                  className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 hover:translate-y-2"
                />
                <div className="text-center mt-6">
                  <h1 className="text-gray-700 text-xl font-bold mb-1">
                    <HoverCard>
                      <HoverCardTrigger className="cursor-pointer">
                        Dileesha Gamage
                      </HoverCardTrigger>
                      <HoverCardContent className="text-xs text-gray-500">
                        Howdy! 👋 I'm Dileesha, a second-year Software
                        Engineering enthusiast. Let's connect and create
                        something extraordinary together! 💻✨
                      </HoverCardContent>
                    </HoverCard>
                  </h1>
                  <p className="text-gray-500 font-light mb-2 text-sm">
                    Developer
                  </p>
                </div>
                <div className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300 space-x-3">
                  <a
                    href="https://github.com/DileeGamage"
                    className="bg-sky-700 shadow rounded-full flex items-center justify-center h-9 w-9 text-white"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/gihan-dileesha-2879a0257/"
                    className="bg-sky-700 shadow rounded-full flex items-center justify-center h-9 w-9 text-white"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.instagram.com/dileeshx_g/"
                    className="bg-sky-700 shadow rounded-full flex items-center justify-center h-9 w-9 text-white"
                  >
                    <RiInstagramFill />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 4*/}
            <div className="m-full mb-6 px-6 shadow-black">
              <div className="flex flex-col">
                <img
                  src="/home-assets/about-assets/hansith.jpg"
                  alt="hansith"
                  className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 hover:translate-y-2"
                />
                <div className="text-center mt-6">
                  <h1 className="text-gray-700 text-xl font-bold mb-1">
                    <HoverCard>
                      <HoverCardTrigger className="cursor-pointer">
                        Hansith Fonseka
                      </HoverCardTrigger>
                      <HoverCardContent className="text-xs text-gray-500">
                        Hi! 👋 I'm Hansith, a second-year Software Engineering
                        student. Ready to collaborate? Let's create something
                        extraordinary together! 💻✨
                      </HoverCardContent>
                    </HoverCard>
                  </h1>
                  <p className="text-gray-500 font-light mb-2 text-sm">
                    Developer
                  </p>
                </div>
                <div className="flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300 space-x-3">
                  <a
                    href="https://github.com/HansithFonseka"
                    className="bg-sky-700 shadow rounded-full flex items-center justify-center h-9 w-9 text-white"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/hansith-fonseka-217715254/"
                    className="bg-sky-700 shadow rounded-full flex items-center justify-center h-9 w-9 text-white"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://www.instagram.com/hanz_lf/"
                    className="bg-sky-700 shadow rounded-full flex items-center justify-center h-9 w-9 text-white"
                  >
                    <RiInstagramFill />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
