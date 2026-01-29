import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Cursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useGSAP(() => {
    const moveCursor = (e) => {
      
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0,
      });
      
      gsap.to(followerRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15, 
        ease: "power2.out"
      });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === "BUTTON" || 
        e.target.tagName === "A" || 
        e.target.closest(".cursor-pointer") ||
        e.target.closest("button") ||
        e.target.closest("a")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver); 

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  useGSAP(() => {
    if (isHovering) {
      gsap.to(followerRef.current, {
        scale: 3,
        backgroundColor: "rgba(34, 197, 94, 0.1)", 
        borderColor: "transparent",
        duration: 0.2
      });
    } else {
      gsap.to(followerRef.current, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "#4ade80", 
        duration: 0.2
      });
    }
  }, [isHovering]);

  return (
    
    <div className="hidden md:block pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference">
      
      <div 
        ref={cursorRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-green-400 rounded-full -translate-x-1/2 -translate-y-1/2"
      ></div>

      <div 
        ref={followerRef} 
        className="fixed top-0 left-0 w-8 h-8 border border-green-400 rounded-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
      ></div>

    </div>
  );
};

export default Cursor;