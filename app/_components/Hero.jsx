"use client";

import { useRef } from "react";
import { ShieldCheck } from "lucide-react";
import {
    SiReact,
    SiTailwindcss,
    SiMongodb,
    SiCplusplus,
    SiFirebase,
    SiMysql,
    SiExpress,
    SiNodedotjs,
  } from "react-icons/si";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


// An array of technology icons that will be displayed in the scroller
const iconComponents = [
    { Icon: SiReact, color: "text-cyan-400" },
    { Icon: SiTailwindcss, color: "text-sky-400" },
    { Icon: SiMongodb, color: "text-green-400" },
    { Icon: SiCplusplus, color: "text-blue-400" },
    { Icon: SiFirebase, color: "text-amber-400" },
    { Icon: SiMysql, color: "text-indigo-400" },
    { Icon: SiExpress, color: "text-gray-300" },
    { Icon: SiNodedotjs, color: "text-lime-400" },
];

export default function Hero() {
  // Ref for the container of the scrolling icons
  const scrollerRef = useRef(null);

  // useGSAP hook for creating the animation
  useGSAP(() => {
    // Target the two lists within the scroller
    const lists = scrollerRef.current.querySelectorAll("ul");
    
    // Animate both lists to move from right to left
    gsap.to(lists, {
      xPercent: -100,
      duration: 5,
      ease: "none",
      repeat: -1, // Repeat indefinitely
    });

  }, { scope: scrollerRef }); // Scope the animation to the ref

  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">
      {/* Animated background gradient blobs */}
      <div className="absolute top-[-20%] left-[-20%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-blue-600/40 rounded-full blur-[150px] animate-pulse-slow"></div>
      <div className="absolute bottom-[-20%] right-[-20%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-blue-600/40 rounded-full blur-[150px] animate-pulse-slow animation-delay-4000"></div>

      {/* Main content container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto">
          {/* Main hero section content */}
          <main className="flex flex-col items-center text-center pt-20 sm:pt-28 lg:pt-36">
            {/* Profile image and verified badge */}
            <div className="relative mb-6">
              <img
                src="https://placehold.co/96x96/E2E8F0/1A202C?text=MMP"
                alt="Profile"
                className="w-24 h-24 rounded-full border-2 border-gray-700 object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://placehold.co/96x96/333/FFF?text=404";
                }}
              />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 bg-white rounded-full shadow-lg">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                <span className="text-xs font-semibold text-gray-800">
                  Verified Expert
                </span>
              </div>
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mt-8">
              Web Developer
              <br />
              <span className="text-white/80">And Designer</span>
            </h1>

            {/* Subheading text */}
            <p className="mt-6 max-w-2xl text-lg text-gray-400">
              Helping startups and brands craft expressive and engaging
              solutions for their software needs.
            </p>

            {/* Call to action buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
              <button className="px-6 py-3 text-base font-semibold text-black bg-white rounded-lg shadow hover:bg-gray-200 transition-colors">
                Work
              </button>
              <button className="px-6 py-3 text-base font-semibold text-white bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                Connect
              </button>
            </div>
          </main>
        </div>

        {/* Icon Scroller */}
        <footer className="w-full max-w-4xl mx-auto mt-24 sm:mt-24 lg:mt-32 pb-10">
            <div ref={scrollerRef} className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                {/* The animate-infinite-scroll class has been removed */}
                <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8">
  {iconComponents.map(({ Icon, color }, index) => (
    <li key={index}>
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-3 shadow-md">
        <Icon className={`w-10 h-10 ${color}`} />
      </div>
    </li>
  ))}
</ul>
<ul className="flex items-center justify-center md:justify-start [&_li]:mx-8">
  {iconComponents.map(({ Icon, color }, index) => (
    <li key={index}>
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-3 shadow-md">
        <Icon className={`w-10 h-10 ${color}`} />
      </div>
    </li>
  ))}
</ul>
            </div>
        </footer>
      </div>
    </div>
  );
}
