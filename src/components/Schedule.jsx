import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Schedule = () => {
  const container = useRef();
  
  const events = [
    { time: "09:00 AM", event: "Opening Ceremony", type: "Main Stage" },
    { time: "11:00 AM", event: "Hacking Begins", type: "All Tracks" },
    { time: "02:00 PM", event: "Workshop: GenAI", type: "Lab 1" },
    { time: "05:00 PM", event: "Mentoring Round", type: "Arena" },
    { time: "08:00 PM", event: "Gaming Tournament", type: "Chill Zone" },
  ];

  useGSAP(() => {
    gsap.from(".timeline-item", {
      scrollTrigger: { trigger: container.current, start: "top 70%" },
      x: -30, opacity: 0, duration: 0.8, stagger: 0.15
    });
  }, { scope: container });

  return (
    <section id="schedule" ref={container} className="py-24 bg-zinc-950 text-white flex flex-col items-center px-4">
      <h2 className="font-cyber text-3xl md:text-4xl font-bold mb-16 uppercase tracking-widest text-center">
        Timeline
      </h2>
      
      <div className="w-full max-w-2xl relative border-l-2 border-zinc-800 ml-4 md:ml-0">
        {events.map((item, i) => (
          <div key={i} className="timeline-item mb-10 relative pl-6 md:pl-10 group cursor-pointer">
            
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 bg-zinc-900 border-2 border-green-500 rounded-full group-hover:bg-green-500 transition-colors shadow-[0_0_10px_rgba(34,197,94,0.3)]"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
              <span className="font-code text-green-400 text-sm tracking-wider bg-green-500/10 px-2 py-0.5 rounded w-fit">
                {item.time}
              </span>
              <span className="text-xs text-zinc-500 font-code uppercase border border-zinc-800 px-2 py-0.5 rounded w-fit">
                {item.type}
              </span>
            </div>

            <h3 className="font-cyber text-xl md:text-2xl font-bold mt-2 text-gray-200 group-hover:text-white transition-colors">
              {item.event}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;