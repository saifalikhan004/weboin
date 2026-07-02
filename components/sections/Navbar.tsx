'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="absolute top-0 left-0 w-full bg-transparent z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <Image src="/weboin_logo.webp" alt="Weboin Logo" width={120} height={40} className="h-8 w-auto object-contain" priority />
        </div>
        
        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex gap-6">
          
          <a href="#services" className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors font-poppins">Services</a>
          <a href="#portfolio" className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors font-poppins">Portfolio</a>
          <a href="#contact" className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white transition-colors font-poppins">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <nav className="md:hidden border-t border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 flex flex-col p-4 gap-4 animate-in slide-in-from-top duration-200">
          
          <a 
            href="#services" 
            onClick={closeMenu}
            className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white py-1 transition-colors font-poppins"
          >
            Services
          </a>
          <a 
            href="#portfolio" 
            onClick={closeMenu}
            className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white py-1 transition-colors font-poppins"
          >
            Portfolio
          </a>
          <a 
            href="#contact" 
            onClick={closeMenu}
            className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-white py-1 transition-colors font-poppins"
          >
            Contact
          </a>
        </nav>
      )}
    </header>
  );
}
