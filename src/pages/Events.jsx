import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Cpu, Trophy, Star, Zap, Code } from "lucide-react";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

const EVENTS = [
  { id: "technitude", title: "TECHNITUDE", icon: Cpu, route: "/Technitude" },
  { id: "milestone", title: "MILESTONE", icon: Trophy, route: "/milestone" },
  { id: "workshops", title: "WORKSHOPS", icon: Star, route: "/workshop" },
  { id: "beyond-bytes", title: "BEYOND BYTES", icon: Zap, route: "/beyond-bytes" },
  { id: "hackive", title: "HACKIVE", icon: Code, route: "/hackive" },
];

export default function Events() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (index) => {
    setActiveIndex(index);
  };

  const handleExplore = (route) => {
    navigate(route);
  };

  const getRotationAngle = (index) => {
    const diff = index - activeIndex;
    let angle = diff * 72;
    if (angle > 180) angle -= 360;
    if (angle < -180) angle += 360;
    return angle;
  };

  return (
    <div className="events-carousel-bg overflow-x-hidden relative min-h-screen">
      <Navbar show={true} />

      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen pt-24 pb-12 lg:py-20 px-6 md:px-12 lg:px-20 relative z-10">
        <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* Header & Nav Text Area */}
          <div className="w-full lg:flex-1 text-center lg:text-left z-20">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-NordBold mb-4 lg:mb-6 leading-tight">
              <span className="text-white">SHAIDS</span>
              <br />
              <span className="text-cyan-400 drop-shadow-[0_0_30px_rgba(79,209,255,0.6)]">
                EVENTS
              </span>
            </h1>

            <p className="text-gray-400 text-sm sm:text-base md:text-xl max-w-lg mb-8 lg:mb-10 leading-relaxed mx-auto lg:mx-0 px-2 lg:px-0">
              Join us for engaging workshops, inspiring seminars, and exclusive networking opportunities.
              Empower your future in AI & Data Science with SHAIDS.
            </p>

            {/* Small Navigation Circles */}
            <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 overflow-x-auto pb-4 no-scrollbar">
              {EVENTS.map((event, index) => (
                <button
                  key={event.id}
                  onClick={() => handleNavClick(index)}
                  className={`nav-circle flex-shrink-0 transition-all duration-500 scale-90 sm:scale-100 ${index === activeIndex ? 'nav-circle-active ring-2 ring-cyan-400 ring-offset-2 ring-offset-black' : ''}`}
                >
                  <event.icon className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              ))}
            </div>
          </div>

          {/* Wheel Rotation Container */}
          <div className="w-full lg:flex-1 flex items-center justify-center relative h-[300px] sm:h-[400px] lg:h-[600px] mt-4 lg:mt-0 overflow-visible lg:overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center">
              {EVENTS.map((event, index) => {
                const angle = getRotationAngle(index);
                const isActive = index === activeIndex;

                // Optimized Wheel positioning
                const radius = isMobile ? 350 : 550;
                const theta = (angle * Math.PI) / 180;

                // Position on the circular arc
                const x = isMobile ? Math.sin(theta) * radius : Math.cos(theta) * radius - radius;
                const y = isMobile ? (Math.cos(theta) * radius - radius) + 50 : Math.sin(theta) * radius;

                return (
                  <div
                    key={event.id}
                    className={`carousel-circle transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) ${isActive ? 'carousel-circle-active opacity-100' : 'carousel-circle-inactive opacity-0 pointer-events-none'}`}
                    style={{
                      transform: `translate(${x}px, ${y}px) scale(${isActive ? (isMobile ? 0.9 : 1.25) : 0.5}) rotate(${isMobile ? 0 : angle}deg)`,
                      zIndex: isActive ? 30 : 10,
                      position: 'absolute'
                    }}
                    onClick={() => isActive && handleExplore(event.route)}
                  >
                    <div className="flex flex-col items-center justify-center text-center p-4 select-none w-full h-full">
                      <event.icon className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-cyan-400 mb-2 sm:mb-4 drop-shadow-[0_0_20px_rgba(79,209,255,0.6)]" />
                      <h2 className={`event-title text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 sm:mb-6 tracking-wide uppercase px-4 w-full leading-tight ${isMobile ? 'truncate' : ''}`}>
                        {event.title}
                      </h2>
                      {isActive && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleExplore(event.route);
                          }}
                          className="explore-btn scale-90 sm:scale-100"
                        >
                          EXPLORE NOW
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
