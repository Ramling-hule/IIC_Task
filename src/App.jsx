import React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sponsors from "./components/Sponsors"; // <--- NEW
import About from "./components/About";
import Process from "./components/Process";   // <--- NEW
import PastWinners from "./components/PastWinners";
import Tracks from "./components/Tracks";
import Schedule from "./components/Schedule";
import Team from "./components/Team";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <div className="font-sans antialiased bg-black min-h-screen selection:bg-green-500 selection:text-black">
      <Cursor />
      <Navbar />
      
      <main>
        <div id="hero"><Hero /></div>
        
        {/* Sponsors right after Hero for credibility */}
        <Sponsors /> 
        
        <div id="about"><About /></div>
        
        {/* "How it Works" Horizontal Scroll Section */}
        <Process />
        
        <PastWinners />
        <div id="tracks"><Tracks /></div>
        <div id="schedule"><Schedule /></div>
        <div id="team"><Team /></div>
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}