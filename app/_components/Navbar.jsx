"use client";

import React from 'react';

// Reusable NavLink component for navigation items
const NavLink = ({ href, children }) => (
  <a href={href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
    {children}
  </a>
);

export default function Navbar() {
  return (
    // Header is fixed to the top, with a blurred, semi-transparent background and a bottom border
    <header className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-lg border-b border-white/20">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          
          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-xl">Manav.</span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#work">Work</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#blog">Blog</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
          </nav>

          {/* "Get in Touch" Button */}
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
