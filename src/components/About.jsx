import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom", 
        end: "center center", 
        scrub: 1, 
      }
    });

    tl.from(".about-left", { x: -200, opacity: 0, rotation: -5 })
      .from(".about-right", { x: 200, opacity: 0 }, "<");
      
  }, { scope: container });

  return (
    <section id="about" ref={container} className="py-20 md:py-32 bg-black text-white px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
        
        <div className="about-left relative rounded-xl overflow-hidden border border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.2)] aspect-video md:aspect-auto md:h-[500px] group">
          <div className="absolute inset-0 bg-green-500/10 mix-blend-overlay z-10"></div>
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" alt="Hackathon" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"/>
        </div>

        <div className="about-right text-center md:text-left">
          <h2 className="font-cyber text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
            More Than Just <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">A Hackathon</span>
          </h2>
          
          <p className="font-code text-gray-400 text-sm md:text-lg mb-6 leading-relaxed">
            &gt; STATUS: SCALING_UP.<br/><br/>
            CyberFest is a convergence of coding, creativity, and chaos. We bring together the brightest minds from 
            50+ universities to solve real-world problems. Expect sleepless nights, endless coffee, and 
            networking with industry leaders.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
             <div className="border-l-2 border-green-500 pl-4">
                <h4 className="font-cyber text-2xl font-bold">₹5.5 Lakhs</h4>
                <p className="font-code text-xs text-gray-500">TOTAL PRIZE POOL</p>
             </div>
             <div className="border-l-2 border-green-500 pl-4">
                <h4 className="font-cyber text-2xl font-bold">2,000+</h4>
                <p className="font-code text-xs text-gray-500">EXPECTED FOOTFALL</p>
             </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start font-cyber text-xs md:text-sm">
            <button className="bg-green-600 text-black px-6 py-3 font-bold hover:bg-green-500 transition-all clip-path-polygon">
              REGISTER FOR 2026
            </button>
            
            <a href="#" className="group flex items-center justify-center gap-2 border border-zinc-700 px-6 py-3 text-gray-300 hover:border-green-500 hover:text-green-400 transition-all">
              <span>ACCESS ARCHIVE</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;