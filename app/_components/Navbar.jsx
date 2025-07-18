"use client";

import React, { useEffect, useState } from 'react';

const NavLink = ({ href, children }) => (
  <a href={href} className="text-sm font-medium text-white hover:text-white transition-colors">
    {children}
  </a>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // you can tweak this threshold
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-5 z-50 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 transition-all duration-300
        ${isScrolled ? 'left-80 right-80' : 'left-20 right-20'}
      `}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-xl">Manav.</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-white">
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#blog">Blog</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
          </nav>
          <div>
            <button className="px-4 py-2 text-sm font-semibold text-white bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
