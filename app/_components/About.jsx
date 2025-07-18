"use client";

import { useRef } from "react";
import {
  Code,
  Palette,
  Users,
  Trophy,
  Coffee,
  BookOpen,
  PaletteIcon,
} from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { icon: Code, name: "Full Stack Development", level: 90 },
  { icon: Palette, name: "UI/UX Design", level: 85 },
  { icon: Users, name: "Team Leadership", level: 80 },
  { icon: Trophy, name: "Problem Solving", level: 95 },
];

const interests = [
  { icon: Coffee, name: "Coffee Brewing", desc: "Perfecting the art of specialty coffee" },
  { icon: BookOpen, name: "Tech Reading", desc: "Staying updated with latest trends" },
  { icon: PaletteIcon, name: "Brand designing", desc: "Designing logos and brand identities" },
  { icon: Users, name: "Mentoring", desc: "Helping junior developers grow" },
];

export default function About() {
  const sectionRef = useRef(null);
  const skillsRef = useRef(null);

  useGSAP(() => {
    const bars = skillsRef.current.querySelectorAll(".skill-bar");

    bars.forEach((bar, i) => {
      const level = bar.dataset.level;
      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: `${level}%`,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative w-full min-h-screen bg-black overflow-hidden py-20">
      {/* Background blobs */}
      <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-blue-600/30 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-[30%] right-[-10%] w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-blue-600/20 rounded-full blur-[140px] animate-pulse-slow animation-delay-2000"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-white">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate developer and designer crafting digital experiences that make a difference
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-6">
          {/* Bio */}
          <div className="lg:col-span-3 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">My Story</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate full-stack developer with over 3 years of experience building
                modern web applications. I love turning complex problems into simple, beautiful
                designs that provide exceptional user experiences.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div
            ref={skillsRef}
            className="lg:col-span-3 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Skills & Expertise</h3>
            </div>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <skill.icon className="w-5 h-5 text-blue-400" />
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    <span className="text-blue-400 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2">
                    <div
                      className="skill-bar h-2 bg-gradient-to-r from-blue-900 to-blue-400 rounded-full"
                      style={{ width: "0%" }}
                      data-level={skill.level}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interests */}
          <div className="lg:col-span-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white text-center mb-12">When I'm Not Coding</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {interests.map((interest, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group-hover:scale-105">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition-colors">
                      <interest.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h4 className="text-white font-semibold mb-2">{interest.name}</h4>
                    <p className="text-gray-400 text-sm">{interest.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
