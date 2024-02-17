import React from "react";
import Navbar from "./home/navbar";
import Home from "./home/home";
import Blog from "./home/features";
import AboutUs from "./home/aboutUs";
import Footer from "./home/footer";
import Contact from "./home/contact";
export default function Main() {
  return (
    <div>
      <Navbar />
      <Home />
      <Blog />
      <AboutUs />
      <Contact />
      <Footer />
    </div>
  );
}
