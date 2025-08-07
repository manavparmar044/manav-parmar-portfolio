"use client";

import React, { useRef } from "react";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    id: 1,
    role: "React Native Intern",
    company: "AMCROS",
    duration: "Jan 2024 – Mar 2024",
    location: "Remote",
    description:
      "Mobile app development internship focusing on cross-platform solutions",
    achievements: [
      "Worked on mobile app interfaces using React Native and TypeScript",
      "Collaborated with designers to create responsive and interactive UI",
      "Implemented authentication flows and integrated APIs",
      "Improved performance and resolved issues reported by QA",
    ],
    technologies: [
      "React Native",
      "Tailwind",
      "API Integration",
      "Mobile UI/UX",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        }
      );

      const cards = cardsRef.current.children;
      gsap.fromTo(
        cards,
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            end: "bottom 15%",
          },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Blobs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/15 rounded-full blur-[120px] animate-pulse-slow animation-delay-2000"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <div ref={titleRef} className="mb-16 text-center">
          <h2 className="font-ranade text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-blue-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            My professional journey and the experiences that shaped my development skills.
          </p>
        </div>

        {/* Cards */}
        <div ref={cardsRef} className="space-y-10">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="group relative">
              {/* Timeline dot and line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-indigo-500/40 to-blue-500/40 hidden lg:block"></div>
              )}
              <div className="absolute left-4 top-8 w-4 h-4 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full border-4 border-black z-10 hidden lg:block group-hover:scale-125 transition-transform duration-300"></div>

              {/* Experience Card */}
              <div className="lg:ml-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-xl hover:shadow-blue-500/10 transition-all duration-500 hover:scale-[1.02]">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="font-ranade text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-lg font-semibold text-indigo-400 mb-3">
                      <ExternalLink className="w-5 h-5" />
                      {exp.company}
                    </div>
                    <p className="text-gray-400">{exp.description}</p>
                  </div>
                </div>

                {/* Duration and Location */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="w-4 h-4 text-indigo-400" />
                    <span className="font-medium">{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span className="font-medium">{exp.location}</span>
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 text-lg">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full mt-2.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-white font-semibold mb-3 text-lg">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 text-sm font-medium bg-white/10 border border-white/20 text-white rounded-lg backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Gradient footer bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500/30 via-blue-500/40 to-indigo-500/30 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <p className="text-gray-400 mb-6 text-lg">Interested in working together?</p>
          <button className="px-8 py-3 text-base font-semibold text-black bg-white rounded-lg shadow-lg hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
}
