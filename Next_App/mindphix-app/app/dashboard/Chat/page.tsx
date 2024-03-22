import React from "react";
import BaseLayout from "../BaseLayout";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import "../../styles/ChatHome.css";

function Chat() {
  return (
    <BaseLayout>
      <div className="top-container rounded-lg bg-white rounder-lg pb-5 mt-5 absolute lg:w-[710px] md:w-[740px] shadow-xl max-h-fit left-72 md:-ml-48 lg:ml-2 xl:mt-5 overflow-hidden xl:w-[1120px]">
        <Image
          src="/Figures/wallpaper.jpg"
          alt="banner"
          width={350}
          height={50}
          className="block mt-0 float-right xl:w-[450px]"
        ></Image>

        <p className="title1 text-blue-900 mt-10 ml-10 text-base font-bold font-poppins xl:text-lg">
          MindPhix
        </p>
        <h1 className="title2 lg:text-2xl font-poppins ml-10 mt-5 font-bold xl:text-3xl xl:mt-10">
          Make Your Mental Health A Priority
        </h1>
        <p className="title3 text-gray-600 font-poppins mt-5 ml-10 font-medium lg:text-sm xl:text-base xl:mt-10">
          Mental health support that&apos;s right for you.
        </p>
        <Link href="/dashboard/Chat/ChatInterface" target="__blank">
          <Button className="mt-5 ml-7 hover:bg-blue-400 bg-blue-500 xl:mt-10 xl:p-5 start-btn">
            Start Conversation
          </Button>
        </Link>
      </div>

      <div className="bottom-container rounded-lg bg-white rounder-lg pb-10 mt-[320px] absolute lg:w-[710px] shadow-xl max-h-fit left-72 md:-ml-48 md:w-[740px] md:h-[300px] lg:ml-2 xl:mt-[400px] xl:w-[1120px] xl:h-[380px]">
        <h1 className="lg:mt-10 lg:ml-10 text-base font-bold md:mt-10 md:ml-10 xl:text-2xl title4">
          Spreading Depression Awareness
        </h1>
        <div className="bg-blue-100 lg:mt-8 lg:ml-7 lg:w-[320px] text-black rounded-2xl shadow-lg md:mt-8 md:ml-7 md:w-[320px] xl:mt-8 feature-container">
          <Image
            src="/Figures/circle.png"
            alt="banner"
            width={40}
            height={50}
            className="circle-image"
          ></Image>
          <p className="lg:ml-14 lg:-mt-[30px] lg:pb-2 md:ml-14 md:-mt-[30px] md:pb-2 md:text-sm xl:text-base xl:pb-3 feature">
            Break Stigma
          </p>
        </div>
        <div className="bg-blue-100 lg:mt-8 lg:ml-7 lg:w-[320px] text-black rounded-2xl shadow-lg md:mt-8 md:ml-7 md:w-[320px] xl:mt-8 feature-container">
          <Image
            src="/Figures/circle.png"
            alt="banner"
            width={40}
            height={50}
            className="circle-image"
          ></Image>
          <p className="lg:ml-14 lg:-mt-[30px] lg:pb-2 md:ml-14 md:-mt-[30px] md:pb-2 md:text-sm xl:text-base xl:pb-3 feature">
            Early Intervention
          </p>
        </div>
        <div className="bg-blue-100 lg:mt-8 lg:ml-7 lg:w-[320px] text-black rounded-2xl shadow-lg md:mt-8 md:ml-7 md:w-[320px] xl:mt-8 feature-container">
          <Image
            src="/Figures/circle.png"
            alt="banner"
            width={40}
            height={50}
            className="circle-image"
          ></Image>
          <p className="lg:ml-14 lg:-mt-[30px] lg:pb-2 md:ml-14 md:-mt-[30px] md:pb-2 md:text-sm xl:text-base xl:pb-3 feature">
            Support Networks
          </p>
        </div>
        <Image
          src={"/Figures/chat.gif"}
          height={350}
          width={350}
          alt={"chatbot"}
          unoptimized={true}
          className="lg:ml-[350px] lg:-mt-[250px] md:ml-[380px] md:-mt-[240px] md:w-[350px] xl:w-[450px] xl:ml-[650px] xl:-mt-[280px] chat-image"
        />
      </div>
    </BaseLayout>
  );
}

export default Chat;
