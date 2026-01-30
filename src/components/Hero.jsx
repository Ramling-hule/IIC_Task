import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CodeWindow = () => {
  const [displayText, setDisplayText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  // REVERTED: Previous snippets
  const snippets = [
    "npm install win-hackathon",
    "while (alive) { code(); }",
    "git commit -m 'History'",
    "System.out.println('TechFest');"
  ];

  useEffect(() => {
    let currentSnippetIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    const typeLoop = () => {
      const currentSnippet = snippets[currentSnippetIndex];
      if (!currentSnippet) return;

      if (isDeleting) {
        setDisplayText(currentSnippet.substring(0, charIndex - 1));
        charIndex--;
        typingSpeed = 50;
      } else {
        setDisplayText(currentSnippet.substring(0, charIndex + 1));
        charIndex++;
        typingSpeed = 100;
      }

      if (!isDeleting && charIndex === currentSnippet.length) {
        isDeleting = true;
        typingSpeed = 2000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        currentSnippetIndex = (currentSnippetIndex + 1) % snippets.length;
        typingSpeed = 500;
      }

      setTimeout(typeLoop, typingSpeed);
    };

    const timeoutId = setTimeout(typeLoop, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <div className="hero-visual w-full max-w-[90vw] md:max-w-lg mx-auto md:mr-0 bg-zinc-900 rounded-xl overflow-hidden border border-zinc-700 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transform hover:scale-[1.02] transition-all duration-300 relative z-20">
      <div className="bg-zinc-800 px-4 py-3 flex items-center gap-2 border-b border-zinc-700">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <span className="ml-2 font-code text-xs text-gray-400">main.js — VS Code</span>
      </div>
      
      {/* REVERTED: Previous Static Code Lines */}
      <div className="p-4 md:p-6 font-code text-xs md:text-sm text-left min-h-[140px] bg-black/80 backdrop-blur-sm">
        <div className="text-gray-500 mb-2">// Initialize Competition</div>
        <div>
          <span className="text-purple-400">const</span> <span className="text-blue-400">winner</span> = <span className="text-yellow-300">"You"</span>;
        </div>
        <div>
           <span className="text-purple-400">await</span> <span className="text-blue-300">hackathon</span>.<span className="text-yellow-200">start</span>();
        </div>
        <div className="mt-4 pt-4 border-t border-zinc-800">
          <span className="text-green-400 text-base md:text-lg">$ {displayText}</span>
          <span className={`${cursorVisible ? "opacity-100" : "opacity-0"} text-green-400 font-bold`}>|</span>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const container = useRef();
  const bgRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.fromTo(".animate-text", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, stagger: 0.1 })
      .fromTo(".animate-btn", { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5 }, "-=0.5")
      .fromTo(".hero-visual", { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 1 }, "-=0.8");

    gsap.to(bgRef.current, {
      y: "30%", 
      ease: "none",
      scrollTrigger: {
        trigger: container.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });
  }, { scope: container });

  return (
    <section id="hero" ref={container} className="min-h-screen flex items-center relative overflow-hidden pt-28 pb-12 md:pt-0 md:pb-0 bg-black">
      <div ref={bgRef} className="absolute inset-0 bg-hero-pattern bg-cover bg-center opacity-30 z-0 scale-110"></div>
      <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black via-black/90 to-black/60 z-0 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="hero-content text-center md:text-left">
          <div className="animate-text">
            <p className="font-code text-green-400 text-xs md:text-sm mb-4 tracking-widest border border-green-500/30 inline-block px-3 py-1 rounded bg-black/50 backdrop-blur-sm">&lt; SEASON_2026 /&gt;</p>
          </div>
          <h1 className="animate-text font-cyber text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(34,197,94,0.5)] leading-none md:leading-tight">
            INNOVATE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">DISRUPT</span> <br />
            CONQUER
          </h1>
          <p className="animate-text font-code text-gray-300 text-sm md:text-lg max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
            36 Hours. 1000+ Developers. One Stage. <br/>
            North India's largest technical symposium is back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="animate-btn font-cyber px-8 py-3 md:py-4 bg-green-600 hover:bg-green-500 text-black font-bold clip-path-polygon transition-all hover:scale-105">GET TICKETS</button>
            <button className="animate-btn font-cyber px-8 py-3 md:py-4 border border-zinc-600 hover:border-white hover:bg-white/5 text-white font-bold transition-all">VIEW TRACKS</button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end perspective-1000 mt-4 md:mt-0"><CodeWindow /></div>
      </div>
    </section>
  );
};
export default Hero;