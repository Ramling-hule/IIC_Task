import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const menuRef = useRef();
  const linkRefs = useRef([]);

  // 1. Handle Scroll State
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Animate Mobile Menu
  useGSAP(() => {
    if (isMobileMenuOpen) {
      gsap.to(menuRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });
      gsap.fromTo(linkRefs.current, 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, stagger: 0.1, delay: 0.2 }
      );
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Tracks", href: "#tracks" },
    { name: "Schedule", href: "#schedule" },
    { name: "Team", href: "#team" },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full px-6 py-4 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-black/90 backdrop-blur-md border-b border-white/10 shadow-lg" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo */}
          <a href="#hero" className="text-2xl font-cyber font-bold tracking-tighter cursor-pointer text-white z-50">
            CYBER<span className="text-green-400">FEST</span>
          </a>

          {/* DESKTOP Menu */}
          <div className="hidden md:flex gap-8 items-center font-code text-sm tracking-wider text-white">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="hover:text-green-400 transition-colors uppercase relative group"
              >
                <span className="text-green-500 mr-1 opacity-0 group-hover:opacity-100 transition-opacity">&gt;</span>
                {link.name}
              </a>
            ))}
            <button className="font-cyber border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all text-xs md:text-sm text-white ml-4">
              REGISTER_NOW
            </button>
          </div>

          {/* MOBILE Hamburger Button */}
          <button 
            className="md:hidden text-white z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></div>
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
          </button>
        </div>

        {/* MOBILE Dropdown Menu */}
        <div 
          ref={menuRef} 
          className="md:hidden overflow-hidden h-0 bg-black/95 backdrop-blur-xl absolute top-full left-0 w-full border-b border-zinc-800"
          style={{ opacity: 0 }}
        >
          <div className="flex flex-col items-center py-8 gap-6 font-cyber text-lg">
            {navLinks.map((link, i) => (
              <a 
                key={link.name} 
                ref={el => linkRefs.current[i] = el}
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="text-white hover:text-green-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div ref={el => linkRefs.current[4] = el}>
               <button className="font-cyber bg-green-600 text-black px-8 py-3 rounded-full font-bold mt-4">
                  REGISTER NOW
               </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;