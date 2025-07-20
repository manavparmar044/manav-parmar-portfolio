"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef } from "react"
import { ExternalLink, Github, ArrowUpRight } from "lucide-react"

export default function Projects() {
  const sectionRef = useRef(null)

  const projects = [
    {
      title: "Portfolio Website",
      description: "A sleek portfolio showcasing my work and blog posts using Next.js and Tailwind CSS.",
      image: "/images/demo1.png",
      link: "https://yourportfolio.com",
      github: "https://github.com/username/portfolio",
      tags: ["Next.js", "Tailwind", "TypeScript"],
      status: "Live"
    },
    {
      title: "E-Commerce Dashboard",
      description: "An admin dashboard for managing products, users, and orders built with React and Firebase.",
      image: "/images/demo2.png",
      link: "https://ecommerce-dashboard.com",
      github: "https://github.com/username/ecommerce-dashboard",
      tags: ["React", "Firebase", "Chart.js"],
      status: "Live"
    },
    {
      title: "Chat App",
      description: "Real-time chat application using Socket.IO and Node.js with authentication.",
      image: "/images/demo.png",
      link: "https://chatapp.com",
      github: "https://github.com/username/chat-app",
      tags: ["Socket.IO", "Node.js", "MongoDB"],
      status: "In Progress"
    },
    // Add more projects as needed
  ]
  

  useGSAP(() => {
    gsap.fromTo(
      ".project-card",
      { y: 50, opacity: 0, scale: 0.96 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      }
    )
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex flex-col justify-center items-center px-4 py-24 md:py-32 text-white"
    >
      {/* Available for Work */}
      <div className="bg-gradient-to-b from-[#0f172a] to-[#030712] text-center text-sm px-4 py-1 rounded-full border border-white/10 shadow-md mb-8">
        Available for work from August 2025 🚀
      </div>

      {/* Headings */}
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">
        My Latest Work
      </h2>
      <p className="text-white/60 text-center text-sm md:text-base max-w-xl mx-auto mb-12">
        A selection of my recent design & development projects, showcasing clean
        code, delightful UI and creative problem-solving.
      </p>

      {/* Project Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card group relative backdrop-blur-md bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl hover:scale-[1.02]"
          >
            {/* Image Container */}
            <div className="relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                onError={(e) => {
                  e.target.src = "https://placehold.co/600x400/1a1a1a/666?text=Project+Image";
                }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              
              {/* Quick Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-4 h-4 text-white" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-4 h-4 text-white" />
                </a>
              </div>

              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border ${
                  project.status === 'Live' 
                    ? 'bg-green-500/20 border-green-500/40 text-green-400' 
                    : 'bg-yellow-500/20 border-yellow-500/40 text-yellow-400'
                }`}>
                  {project.status}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              {/* Title and External Link */}
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                  {project.title}
                </h3>
                <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-blue-400 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0" />
              </div>

              {/* Description */}
              <p className="text-white/70 text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-xs font-medium text-white/80 transition-colors duration-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 group/btn bg-gradient-to-r from-blue-500/80 to-cyan-500/80 hover:from-blue-500 hover:to-cyan-500 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-blue-500/25"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span>View Live</span>
                  <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 text-white text-sm font-semibold py-2.5 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-4 h-4" />
                  <span>Code</span>
                </a>
              </div>
            </div>

            {/* Bottom Gradient Border */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
    </section>
  )
}