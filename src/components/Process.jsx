import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Process = () => {
  const sectionRef = useRef(null); 

  useGSAP(() => {
    // Animate the Header Text
    gsap.from(".process-header", {
      y: 50,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      }
    });

    // Animate Steps: Staggered Slide Up with a slight rotation
    const cards = gsap.utils.toArray(".process-card");
    
    cards.forEach((card, i) => {
      gsap.from(card, {
        y: 100,
        opacity: 0,
        rotateX: -15, // Slight 3D tilt
        duration: 0.8,
        ease: "back.out(1.7)", // Elastic bounce effect
        scrollTrigger: {
          trigger: card,
          start: "top 85%", // Triggers when card is near bottom of viewport
          toggleActions: "play none none reverse",
        }
      });
    });

  }, { scope: sectionRef });

  const steps = [
    { id: "01", title: "REGISTER", desc: "Sign up solo or form a squad of up to 4 members via Devfolio.", color: "border-blue-500", shadow: "shadow-blue-500/20" },
    { id: "02", title: "CHECK-IN", desc: "Arrive at the venue, grab your swag kit, and set up your battle station.", color: "border-purple-500", shadow: "shadow-purple-500/20" },
    { id: "03", title: "BUILD", desc: "36 hours of non-stop coding. Mentors will guide you through blockers.", color: "border-green-500", shadow: "shadow-green-500/20" },
    { id: "04", title: "EVALUATE", desc: "Two rounds of judging. Show your prototype's functionality and impact.", color: "border-yellow-500", shadow: "shadow-yellow-500/20" },
    { id: "05", title: "GLORY", desc: "Top 3 teams win cash prizes, internships, and incubation support.", color: "border-red-500", shadow: "shadow-red-500/20" },
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-zinc-950 relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="process-header mb-16 text-center md:text-left">
          <p className="font-code text-green-500 text-sm mb-2">&gt; PARTICIPATION_PROTOCOL</p>
          <h2 className="font-cyber text-4xl md:text-6xl font-bold text-white leading-tight">
            THE <span className="text-gray-500">ROADMAP</span>
          </h2>
        </div>

        {/* Vertical List of Steps */}
        <div className="flex flex-col gap-8">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className={`process-card w-full md:w-[80%] mx-auto bg-zinc-900/50 backdrop-blur-sm border-l-4 ${step.color} p-8 md:p-10 rounded-r-xl relative overflow-hidden group hover:bg-zinc-800 transition-all duration-500 hover:translate-x-2`}
            >
               {/* Background Glow */}
               <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

               {/* Giant Number */}
               <span className="absolute right-4 top-0 text-8xl md:text-9xl font-bold text-white/5 group-hover:text-white/10 transition-colors select-none font-cyber">
                  {step.id}
               </span>

               <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-center">
                  <div className="font-code text-xl bg-black/40 border border-zinc-700 px-4 py-2 rounded w-fit">
                    Phase {step.id}
                  </div>
                  
                  <div>
                    <h4 className="font-cyber text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                      {step.title}
                    </h4>
                    <p className="font-code text-gray-400 text-sm md:text-base max-w-2xl">
                      {step.desc}
                    </p>
                  </div>
               </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Process;