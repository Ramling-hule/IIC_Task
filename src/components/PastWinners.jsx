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

  useEffect(() => {
    setCurrentIndex(0);
    gsap.fromTo(".winner-card", 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" }
    );
  }, [activeYear]);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 4000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [currentIndex, activeYear]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % currentProjects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + currentProjects.length) % currentProjects.length);
  };

  useGSAP(() => {
    gsap.from(container.current, {
      scrollTrigger: { trigger: container.current, start: "top 85%" },
      opacity: 0, duration: 1
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-12 md:py-24 bg-zinc-950 text-white relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Header & Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12 gap-6">
          <h2 className="font-cyber text-2xl md:text-4xl font-bold uppercase">
            Hall of <span className="text-green-500">Fame</span>
          </h2>

          {/* Year Selector - Scrollable on Mobile */}
          <div className="flex w-full md:w-auto overflow-x-auto pb-2 md:pb-0 gap-2 no-scrollbar">
            {years.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={`whitespace-nowrap px-4 py-1.5 md:px-6 md:py-2 rounded font-code text-xs md:text-sm transition-all border border-transparent ${
                  activeYear === year 
                  ? "bg-green-600 text-black font-bold shadow-[0_0_15px_rgba(34,197,94,0.4)]" 
                  : "bg-zinc-900 text-gray-400 hover:text-white hover:border-zinc-700"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Carousel Container - Taller aspect ratio on mobile for readability */}
        <div 
          className="relative overflow-hidden rounded-xl border border-zinc-800 bg-black aspect-[3/4] md:aspect-[21/9]"
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
                <img src={project.img} alt={project.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-500"/>
                
                {/* Stronger Gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12">
                   <span className="font-code text-green-400 text-xs tracking-widest border border-green-500/30 px-2 py-1 rounded mb-3 inline-block bg-black/60 backdrop-blur">
                     WINNER {activeYear}
                   </span>
                   <h3 className="font-cyber text-3xl md:text-6xl font-bold mb-1 md:mb-2 leading-tight">{project.title}</h3>
                   <p className="font-cyber text-base md:text-xl text-gray-300 mb-3 md:mb-4">By {project.team}</p>
                   <p className="font-code text-gray-400 max-w-2xl text-xs md:text-base leading-relaxed line-clamp-3 md:line-clamp-none">
                     {project.desc}
                   </p>
                </div>
              </div>
            ))}
          </div>

          {/* Controls - Smaller & Repositioned for Mobile */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 md:px-4 pointer-events-none">
            <button onClick={prevSlide} className="pointer-events-auto bg-black/30 hover:bg-green-600 hover:text-black text-white p-2 md:p-3 rounded-full backdrop-blur border border-white/10 transition-all">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            <button onClick={nextSlide} className="pointer-events-auto bg-black/30 hover:bg-green-600 hover:text-black text-white p-2 md:p-3 rounded-full backdrop-blur border border-white/10 transition-all">
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 flex gap-1.5 md:gap-2">
            {currentProjects.map((_, i) => (
              <div key={i} className={`h-1 rounded-full transition-all duration-300 ${i === currentIndex ? "w-6 md:w-8 bg-green-500" : "w-2 bg-zinc-600"}`}></div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PastWinners;