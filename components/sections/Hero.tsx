'use client';

import React from 'react';
import Image from 'next/image';
import ColorBends from '../ColorBends';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full min-h-screen flex flex-col items-start justify-center p-8 overflow-hidden border-b border-gray-200 dark:border-zinc-800">

      {/* Background white overlay behind the canvas */}
      <div className="absolute inset-0 bg-white dark:bg-zinc-950 -z-20 pointer-events-none" />
      {/* Background WebGL Shader Container (Full-bleed and Responsive) */}
      <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden pointer-events-none">
        <ColorBends
          rotation={125}
          speed={0.2}
          colors={["#5227FF", "#030303", "#67bfff"]}
          transparent
          autoRotate={0}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={1}
          parallax={1.1}
          noise={0.15}
          iterations={1}
          intensity={1.5}
          bandWidth={5}
        />
      </div>

      {/* Subtle light overlay to improve text contrast */}
      <div className="absolute inset-0 bg-white/30 dark:bg-black/20 -z-5 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-2xl md:max-w-7xl mx-auto flex flex-col items-start gap-8 px-4 sm:px-10 md:px-20 text-left">
        <h1 className="text-4xl sm:text-7xl md:text-8xl lg:text-[96px] text-black dark:text-white max-w-5xl font-oswald font-bold uppercase tracking-tighter leading-[0.95] md:leading-[0.9]">
          We craft immersive and high-performance digital marketing experiences.
        </h1>
        <div className="flex gap-4 mt-4">
          <a href="#services" className="px-6 py-3 rounded-lg text-sm bg-zinc-900 text-white hover:bg-black dark:bg-white dark:text-black dark:hover:bg-zinc-100 transition-colors shadow-lg font-oswald font-bold tracking-wide">
            Our Services
          </a>
          <a href="#contact" className="px-6 py-3 rounded-lg text-sm border border-zinc-300 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 text-zinc-700 dark:text-white transition-colors bg-white/40 dark:bg-black/40 backdrop-blur-sm font-oswald font-bold tracking-wide">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
