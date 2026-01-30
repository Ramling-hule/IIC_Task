import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const container = useRef();
  
  const members = [
    { 
      name: "Alex 'Root' Doe", 
      role: "Lead Organizer", 
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    { 
      name: "Sarah 'Glitch' Smith", 
      role: "Tech Lead", 
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    { 
      name: "Mike 'Pixel' Jones", 
      role: "UI/UX Design", 
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    { 
      name: "Emily 'Byte' Wang", 
      role: "Logistics", 
      icon: (
        <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
  ];

  useGSAP(() => {
    // 1. Title Animation
    gsap.from(".team-title", {
      scrollTrigger: { trigger: container.current, start: "top 80%" },
      y: 30, opacity: 0, duration: 1, ease: "power3.out"
    });

    // 2. Cards Staggered Animation
    gsap.fromTo(".team-card", 
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.5)", // Subtle bounce
        scrollTrigger: {
          trigger: container.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        }
      }
    );
  }, { scope: container });

  return (
    <section id="team" ref={container} className="py-24 bg-zinc-950 text-white px-6 border-t border-zinc-900 relative z-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="team-title font-cyber text-4xl font-bold mb-16 text-center uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-teal-500">
          Command <span className="text-white">Unit</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, i) => (
            <div key={i} className="team-card group relative cursor-pointer">
              
              {/* Icon Container */}
              <div className="relative overflow-hidden aspect-square mb-6 border border-zinc-800 bg-zinc-900/50 group-hover:border-green-500 group-hover:bg-zinc-900 transition-all duration-300 flex items-center justify-center rounded-xl">
                
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(34,197,94,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,197,94,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* The Icon */}
                <div className="relative z-10 text-zinc-600 group-hover:text-green-400 transition-all duration-500 transform group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]">
                  {member.icon}
                </div>
                
                {/* Corner Accents */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Text Info */}
              <div className="text-center group-hover:-translate-y-2 transition-transform duration-300">
                <h3 className="font-cyber text-xl font-bold group-hover:text-green-400 transition-colors">
                  {member.name}
                </h3>
                <p className="font-code text-gray-500 text-sm mt-2 uppercase tracking-wider group-hover:text-white transition-colors">
                  [{member.role}]
                </p>
                {/* Status Line */}
                <div className="w-12 h-0.5 bg-zinc-800 mx-auto mt-4 group-hover:w-24 group-hover:bg-green-500 transition-all duration-500"></div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;