import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Tracks = () => {
  const container = useRef();
  
  const tracks = [
    { 
      title: "Generative AI", 
      desc: "Harness LLMs and diffusion models to build creative assistants and automated workflows.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      title: "Web3 & DeFi", 
      desc: "Build decentralized apps, smart contracts, or financial tools for the next-gen web.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    { 
      title: "Health & BioTech", 
      desc: "Solutions improving patient care, diagnostics, or accessible healthcare for all.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    { 
      title: "Open Innovation", 
      desc: "No boundaries. Solve a problem you care about using any tech stack you prefer.",
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
  ];

  useGSAP(() => {
    // 1. Ensure elements are visible immediately in case JS fails, then animate
    const cards = gsap.utils.toArray(".track-card");
    
    gsap.fromTo(cards, 
      { 
        opacity: 0, 
        y: 100, 
        rotateX: -45 // Tilted back slightly
      },
      {
        opacity: 1,
        y: 0,
        rotateX: 0, // Flat and visible
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%", // Triggers when top of section hits 80% of viewport
          toggleActions: "play none none reverse",
        }
      }
    );
  }, { scope: container });

  return (
    <section id="tracks" ref={container} className="min-h-screen py-24 bg-black text-white px-6 relative z-10 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto">
        <h2 className="font-cyber text-4xl md:text-5xl font-bold mb-20 text-center uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
          Event Tracks
        </h2>
        
        {/* Added perspective directly to the grid container for 3D effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" style={{ perspective: "1000px" }}>
          {tracks.map((track, i) => (
            <div key={i} className="track-card relative p-8 border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm hover:border-green-500/50 hover:bg-zinc-900/80 transition-all duration-500 group cursor-pointer rounded-xl overflow-hidden hover:-translate-y-2">
              
              {/* Hover Scanner Effect */}
              <div className="absolute top-0 -left-[100%] w-full h-full bg-gradient-to-r from-transparent via-green-500/10 to-transparent group-hover:left-[100%] transition-all duration-1000 ease-in-out"></div>
              
              <div className="mb-6 text-zinc-500 group-hover:text-green-400 transition-colors duration-300 transform group-hover:scale-110 origin-left drop-shadow-[0_0_8px_rgba(74,222,128,0.4)]">
                {track.icon}
              </div>

              <h3 className="font-cyber text-2xl font-bold mb-3 text-gray-100 group-hover:text-white">
                {track.title}
              </h3>
              <p className="font-code text-gray-400 text-sm leading-relaxed mb-6 group-hover:text-gray-300">
                {track.desc}
              </p>
              
              <div className="flex justify-between items-center border-t border-zinc-800 pt-4 mt-auto">
                 <span className="font-code text-xs text-green-500/60 group-hover:text-green-400">
                   ID: 0{i+1}
                 </span>
                 <span className="font-code text-xs text-zinc-600 group-hover:text-green-400 opacity-0 group-hover:opacity-100 transition-all transform translate-x-2 group-hover:translate-x-0">
                   &lt;EXPLORE /&gt;
                 </span>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-green-500/0 group-hover:border-green-500 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-green-500/0 group-hover:border-green-500 transition-all duration-300"></div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;