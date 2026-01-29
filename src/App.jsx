import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Tracks from "./components/Tracks";
import Schedule from "./components/Schedule";
import Team from "./components/Team";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor"; 

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <div className="font-sans antialiased bg-black min-h-screen selection:bg-green-500 selection:text-black">
      <Cursor /> {/* <--- Add Component Here */}
      
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="about"><About /></div>
      <div id="tracks"><Tracks /></div>
      <div id="schedule"><Schedule /></div>
      <Team />
      <Footer />
    </div>
  );
}