import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Sponsors = () => {
  const container = useRef();
  const textRef = useRef();

  // Placeholder Sponsors (Tech Giants)
  const sponsors = [
    "GOOGLE", "MICROSOFT", "AMAZON", "META", "NETFLIX", "TESLA", "OPENAI", "GITHUB"
  ];

  useGSAP(() => {
    // 1. Infinite Marquee Animation
    const totalWidth = textRef.current.scrollWidth;
    
    gsap.to(textRef.current, {
      x: "-50%", // Move halfway (since we duplicated the list)
      duration: 20, // Speed
      ease: "linear",
      repeat: -1, // Infinite loop
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-24 bg-black border-y border-zinc-900 overflow-hidden relative z-10">
      
      <p className="font-code text-center text-gray-500 text-sm mb-12 tracking-[0.2em] uppercase">
        Powered by Industry Leaders
      </p>

      {/* Marquee Wrapper */}
      <div className="relative w-full overflow-hidden">
        {/* We double the list to ensure seamless looping */}
        <div ref={textRef} className="flex whitespace-nowrap w-fit">
          {[...sponsors, ...sponsors].map((sponsor, i) => (
            <div key={i} className="flex items-center mx-8 md:mx-16 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer group">
              {/* Fake Logo Icon */}
              <div className="w-8 h-8 md:w-12 md:h-12 bg-zinc-800 rounded-full mr-4 group-hover:bg-green-500 transition-colors"></div>
              
              <span className="font-cyber text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-600 group-hover:from-green-400 group-hover:to-green-600 transition-all">
                {sponsor}
              </span>
            </div>
          ))}
        </div>
        
        {/* Gradient Fade on Edges */}
        <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
      </div>

    </section>
  );
};

export default Sponsors;