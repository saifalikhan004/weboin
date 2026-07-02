import React from 'react';
import Image from 'next/image';

const projects = [
  { id: 1, title: 'Max Gold', image: '/maxg.jpg' },
  { id: 2, title: 'Nithya Amirtham', image: '/nithya.png' },
  { id: 3, title: 'Pista House', image: '/pista.png' },
  { id: 4, title: 'ZeroWatts Photography', image: '/zero.png' },
  { id: 5, title: 'Asia Kitchen', image: '/asiakitchen.webp' },
  { id: 6, title: 'Lyca Productions', image: '/lycap.jpg' },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="w-full min-h-screen flex flex-col items-center justify-center p-8 border-b border-gray-200 dark:border-zinc-800"
      style={{ background: 'linear-gradient(135deg, #3e87db, #7588e8, #67bfff)' }}
    >
      {/* Portfolio Section Header */}
      <div className="w-full max-w-2xl md:max-w-7xl mx-auto text-left mb-16 px-4 sm:px-10 md:px-20 pt-16">
        <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/60 font-semibold mb-3 block font-poppins">
          Portfolio
        </span>
        <h2 className="text-3xl md:text-6xl font-bold text-white leading-tight tracking-tight max-w-5xl font-poppins">
          A showcase of our <span className="text-zinc-300">trust-worthy</span> and creative digital works.
        </h2>
      </div>

      {/* Grid Layout of 6 Projects */}
      <div className="w-full max-w-2xl md:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-10 md:px-20 pb-20">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`w-full h-80 md:h-[450px] rounded-[24px] md:rounded-[32px] overflow-hidden relative group cursor-pointer shadow-lg border border-gray-200/50 dark:border-zinc-800/50 ${project.id === 6 ? 'bg-black' : 'bg-zinc-200 dark:bg-zinc-900'
              }`}
          >
            {/* Gradient Overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-95" />

            {/* Project Image */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className={`transition-transform duration-700 ease-out ${project.id === 6
                  ? 'object-contain scale-[0.8] group-hover:scale-[0.83]'
                  : 'object-cover group-hover:scale-[1.03]'
                }`}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={project.id <= 2}
            />

            {/* Hover details/arrow overlay */}
            <div className="absolute bottom-8 left-8 z-20 flex items-center gap-3 text-white font-poppins">
              <span className="text-2xl md:text-4xl font-bold tracking-tight flex items-center gap-2 transition-transform duration-300 ease-out group-hover:translate-x-1">
                → {project.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
