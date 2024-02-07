"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id="home">
      <div className="rounded-lg rounded-br-[80px] gradient-backgorund md:p-9 px-4 py-9 shadow-lg">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gp-10">
          {/* Banner Image */}
          <motion.div
            variants={fadeIn({ direction: "down", delay: 0.2 })}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <img
              src="/home-assets/banner-assets/banner.png"
              alt="banner-image"
              className="lg:h-[386px]"
            />
          </motion.div>
          {/* Banner Content */}
          <motion.div
            className="md:w-3/5"
            variants={fadeIn({ direction: "up", delay: 0.2 })}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <h2 className="md-text-7xl text-4xl font-bold text-white mb-6 leading-relaxed">
              Empowering Minds , Transforming Lives. Finding Strength in Every
              Struggle.
            </h2>
            <p className="text-white text-1xl mb-8">
              Change your life for better. Mental Health Support thats right for
              you.
            </p>
            <div>
              <Button className="py-2 px-6 bg-blue-600 font-semibold text-white hover:bg-blue-700 transition-all duration-300">
                Get Started
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
