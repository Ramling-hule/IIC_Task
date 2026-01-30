import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// --- DATA: Winners by Year ---
const winnersData = {
  "2025": [
    { title: "MediBot AI", team: "Team Alpha", desc: "Autonomous drone for medical delivery.", img: "https://images.unsplash.com/photo-1535378433864-48cf10419c48?q=80&w=2000&auto=format&fit=crop" },
    { title: "EcoChain", team: "GreenNodes", desc: "Blockchain based carbon credit tracker.", img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2000&auto=format&fit=crop" },
    { title: "VisionAR", team: "Spectra", desc: "AR glasses for the visually impaired.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop" }
  ],
  "2024": [
    { title: "AgroSense", team: "FarmTech", desc: "IoT Soil moisture sensing network.", img: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2000&auto=format&fit=crop" },
    { title: "CyberShield", team: "NetGuard", desc: "AI powered firewall for SMEs.", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop" }
  ],
  "2023": [
    { title: "StudySync", team: "EdTech Bros", desc: "Peer-to-peer learning platform.", img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2000&auto=format&fit=crop" }
  ]
};

const PastWinners = () => {
  const [activeYear, setActiveYear] = useState("2025");
  const [currentIndex, setCurrentIndex] = useState(0);
  const container = useRef();
  const carouselRef = useRef();
  const intervalRef = useRef(null);

  const years = Object.keys(winnersData).sort((a, b) => b - a);
  const currentProjects = winnersData[activeYear];

  // 1. Reset Index when Year Changes & Animate Entry
  useEffect(() => {
    setCurrentIndex(0);
    
    // Animate cards entering
    gsap.fromTo(".winner-card", 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }
    );
  }, [activeYear]);

  // 2. Auto-Swipe Logic
  const startAutoSlide = () => {
    stopAutoSlide(); // Clear existing to prevent double timers
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 4000); // 4 Seconds
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [currentIndex, activeYear]); // Restart timer if user interacts

  // 3. Navigation Handlers
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % currentProjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + currentProjects.length) % currentProjects.length);
  };

  useGSAP(() => {
    gsap.from(container.current, {
      scrollTrigger: { trigger: container.current, start: "top 75%" },
      opacity: 0, duration: 1
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 bg-zinc-950 text-white relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          <h2 className="font-cyber text-3xl md:text-4xl font-bold uppercase">
            Hall of <span className="text-green-500">Fame</span>
          </h2>

          {/* Year Selector */}
          <div className="flex gap-2 bg-zinc-900 p-1 rounded-lg">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`px-6 py-2 rounded font-code text-sm transition-all ${
                  activeYear === year 
                  ? "bg-green-600 text-black font-bold shadow-[0_0_15px_rgba(34,197,94,0.4)]" 
                  : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-black aspect-[16/9] md:aspect-[21/9]"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          {/* Slides */}
          <div 
            ref={carouselRef}
            className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {currentProjects.map((project, i) => (
              <div key={i} className="winner-card min-w-full h-full relative group">
                {/* Background Image */}
                <img src={project.img} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"/>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                   <span className="font-code text-green-400 text-sm tracking-widest border border-green-500/30 px-3 py-1 rounded mb-4 inline-block bg-black/50 backdrop-blur">
                     WINNER {activeYear}
                   </span>
                   <h3 className="font-cyber text-4xl md:text-6xl font-bold mb-2">{project.title}</h3>
                   <p className="font-cyber text-xl text-gray-300 mb-4">By {project.team}</p>
                   <p className="font-code text-gray-400 max-w-2xl text-sm md:text-base">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-green-600 hover:text-black text-white p-3 rounded-full backdrop-blur border border-zinc-700 transition-all z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-green-600 hover:text-black text-white p-3 rounded-full backdrop-blur border border-zinc-700 transition-all z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 right-6 flex gap-2">
            {currentProjects.map((_, i) => (
              <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === currentIndex ? "w-8 bg-green-500" : "w-2 bg-zinc-600"}`}></div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PastWinners;