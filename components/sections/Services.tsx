'use client';

import React from 'react';
import Image from 'next/image';
import ScrollStack, { ScrollStackItem } from '../ScrollStack';

export default function Services() {
  return (
    <section
      id="services"
      className="w-full min-h-screen flex flex-col items-center justify-center border-b border-gray-200 dark:border-zinc-800 p-8 text-center"
      style={{ background: 'linear-gradient(135deg, #3e87dbfb, #7588e8ff, #67bfff)' }}
    >
      {/* Scroll Stack Container - constrained width on mobile, wider on desktop */}
      <div className="w-full max-w-2xl md:max-w-7xl mx-auto text-left">
        <div className="mb-12 font-poppins px-4 sm:px-10 md:px-20 pt-16">
          <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/60 font-semibold mb-3 block">
            Services
          </span>
          <h2 className="text-3xl md:text-6xl font-bold text-white leading-tight tracking-tight max-w-5xl">
            We are an <span className="opacity-60">unusual</span> digital agency focusing on transforming your vision into a captivating digital experience.
          </h2>
        </div>

        <ScrollStack useWindowScroll={true}>
          <ScrollStackItem itemClassName="bg-white/10 text-white border border-white/20 backdrop-blur-md flex flex-col md:flex-row md:items-center md:justify-between pt-12 md:pt-0">
            <div className="flex flex-col justify-start md:max-w-[55%]">
              <h3 className="text-3xl md:text-7xl font-bold font-oswald mb-6 uppercase tracking-wider">BRANDING</h3>
              <p className="text-blue-100 text-base md:text-xl leading-relaxed font-poppins">
                Craft a unique identity, positioning, and voice that makes your brand unforgettable and connects emotionally with your audience.
              </p>
            </div>
            <div className="hidden md:flex relative w-[40%] h-[80%] items-center justify-center">
              <Image
                src="/branding.png"
                alt="Branding Service"
                width={400}
                height={400}
                className="w-auto h-full max-h-full object-contain rounded-2xl"
                priority
              />
            </div>
          </ScrollStackItem>
          <ScrollStackItem itemClassName="bg-white/10 text-white border border-white/20 backdrop-blur-md flex flex-col md:flex-row md:items-center md:justify-between pt-12 md:pt-0">
            <div className="flex flex-col justify-start md:max-w-[55%]">
              <h3 className="text-3xl md:text-7xl font-bold font-oswald mb-6 uppercase tracking-wider">DIGITAL MARKETING</h3>
              <p className="text-blue-100 text-base md:text-xl leading-relaxed font-poppins">
                Drive traffic, generate leads, and boost conversions with data-driven search, social media, and paid advertising campaigns.
              </p>
            </div>
            <div className="hidden md:flex relative w-[40%] h-[80%] items-center justify-center">
              <Image
                src="/digital.png"
                alt="Digital Marketing Service"
                width={400}
                height={400}
                className="w-auto h-full max-h-full object-contain rounded-2xl"
                priority
              />
            </div>
          </ScrollStackItem>
          <ScrollStackItem itemClassName="bg-white/10 text-white border border-white/20 backdrop-blur-md flex flex-col md:flex-row md:items-center md:justify-between pt-12 md:pt-0">
            <div className="flex flex-col justify-start md:max-w-[55%]">
              <h3 className="text-3xl md:text-7xl font-bold font-oswald mb-6 uppercase tracking-wider">UI/UX DESIGN</h3>
              <p className="text-blue-100 text-base md:text-xl leading-relaxed font-poppins">
                Design intuitive, engaging, and visually stunning digital products that delight users and streamline customer journeys.
              </p>
            </div>
            <div className="hidden md:flex relative w-[40%] h-[80%] items-center justify-center">
              <Image
                src="/ui.png"
                alt="UI/UX Design Service"
                width={400}
                height={400}
                className="w-auto h-full max-h-full object-contain rounded-2xl"
                priority
              />
            </div>
          </ScrollStackItem>
          <ScrollStackItem itemClassName="bg-white/10 text-white border border-white/20 backdrop-blur-md flex flex-col md:flex-row md:items-center md:justify-between pt-12 md:pt-0">
            <div className="flex flex-col justify-start md:max-w-[55%]">
              <h3 className="text-3xl md:text-7xl font-bold font-oswald mb-6 uppercase tracking-wider">WEB DEVELOPMENT</h3>
              <p className="text-blue-100 text-base md:text-xl leading-relaxed font-poppins">
                Build high-performance, robust, and responsive websites and web applications utilizing modern technologies and smooth WebGL experiences.
              </p>
            </div>
            <div className="hidden md:flex relative w-[40%] h-[80%] items-center justify-center">
              <Image
                src="/development.png"
                alt="Web Development Service"
                width={400}
                height={400}
                className="w-auto h-full max-h-full object-contain rounded-2xl"
                priority
              />
            </div>
          </ScrollStackItem>
        </ScrollStack>
      </div>
    </section>
  );
}

