import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef();

  useGSAP(() => {
    gsap.from(".reveal-item", {
      scrollTrigger: { trigger: container.current, start: "top 80%" },
      y: 50, opacity: 0, duration: 1, stagger: 0.2
    });
  }, { scope: container });

  return (
    <section id="about" ref={container} className="py-20 md:py-32 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Image (Hidden on very small screens to save space, or kept if preferred) */}
        <div className="reveal-item relative rounded-xl overflow-hidden border border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.2)] aspect-video md:aspect-auto md:h-[400px]">
          <div className="absolute inset-0 bg-green-500/10 mix-blend-overlay"></div>
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
            alt="Coding Setup" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="reveal-item text-center md:text-left">
          <h2 className="font-cyber text-3xl md:text-5xl font-bold mb-6 text-white">
            Where <span className="text-green-500">Code</span> Meets Chaos
          </h2>
          <p className="font-code text-gray-400 text-sm md:text-lg mb-8 leading-relaxed">
            &gt; Initiating protocol: INNOVATION.<br/><br/>
            Whether you are a master of algorithms or a design wizard, TechFest provides the ultimate sandbox. 
            Competing against 500+ devs, you will turn caffeine into code and ideas into reality.
          </p>
          
          <div className="flex justify-center md:justify-start gap-4 font-cyber text-xs md:text-sm">
            <div className="bg-zinc-900 border border-zinc-700 px-4 py-3 rounded text-center min-w-[100px]">
              <span className="text-green-500 text-xl block font-bold">24h</span> Hackathon
            </div>
            <div className="bg-zinc-900 border border-zinc-700 px-4 py-3 rounded text-center min-w-[100px]">
              <span className="text-green-500 text-xl block font-bold">50+</span> Events
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;