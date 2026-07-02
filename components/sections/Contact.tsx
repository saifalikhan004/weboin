'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle2, Send } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setEmail(val);
    if (emailError) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (emailRegex.test(val)) {
        setEmailError('');
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError('Email address is required');
      return;
    } else if (!emailRegex.test(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setEmailError('');
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setName('');
      setEmail('');
      setMessage('');
    }, 1500);
  };

  return (
    <section 
      id="contact" 
      className="w-full min-h-screen flex flex-col items-center justify-center p-8 border-b border-gray-200 dark:border-zinc-800 relative overflow-hidden"
      style={{ background: 'radial-gradient(circle, #ffffff 0%, #8CA6FC 100%)' }}
    >
      {/* SVG Grain Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.055] pointer-events-none mix-blend-overlay z-0" 
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
        }} 
      />

      {/* Content Wrapper */}
      <div className="w-full max-w-2xl md:max-w-7xl mx-auto z-10 flex flex-col items-center justify-center">
        
        {/* Contact Section Header */}
        <div className="w-full text-left mb-16 px-4 sm:px-10 md:px-20 pt-16">
          <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-zinc-700 font-semibold mb-3 block font-poppins">
            Contact
          </span>
          <h2 className="text-3xl md:text-6xl font-bold text-zinc-900 leading-tight tracking-tight max-w-5xl font-poppins">
            Let's collaborate on your <span className="text-zinc-600">next digital</span> masterpiece.
          </h2>
        </div>

        {/* 2-Column Content Wrapper */}
        <div className="w-full flex flex-col md:flex-row gap-16 px-4 sm:px-10 md:px-20 pb-20">
          
          {/* Column 1: Contact Details & Info */}
          <div className="w-full md:w-[45%] flex flex-col justify-between font-poppins">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-zinc-900 mb-6 uppercase tracking-wider font-oswald">
                Reach Out to Us
              </h3>
              <p className="text-zinc-700 text-base md:text-lg leading-relaxed mb-8">
                Whether you want to launch a campaign, redesign your UI/UX, build a WebGL interactive experience, or completely rebuild your branding, we are here to make it happen. Let's create something unusual.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 group">
                <div className="p-4 rounded-full bg-white/70 border border-zinc-300/50 text-zinc-800 transition-colors group-hover:bg-[#3e87db] group-hover:text-white group-hover:border-transparent shadow-sm">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-zinc-600 block">Email Us</span>
                  <a href="mailto:sales@weboin.com" className="text-zinc-900 hover:text-[#3e87db] transition-colors font-medium">
                    sales@weboin.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-4 rounded-full bg-white/70 border border-zinc-300/50 text-zinc-800 transition-colors group-hover:bg-[#3e87db] group-hover:text-white group-hover:border-transparent shadow-sm">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-zinc-600 block">Call Us</span>
                  <a href="tel:+919403891477" className="text-zinc-900 hover:text-[#3e87db] transition-colors font-medium">
                    +91 9403891477
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-4 rounded-full bg-white/70 border border-zinc-300/50 text-zinc-800 transition-colors group-hover:bg-[#3e87db] group-hover:text-white group-hover:border-transparent shadow-sm">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-zinc-600 block">Visit Us</span>
                  <span className="text-zinc-900 font-medium leading-relaxed">
                    766, 1st floor, Shakti Towers, Anna Salai, Chennai - 600 002
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Stateful Form Card */}
          <div className="w-full md:w-[55%] relative flex flex-col justify-center">
            <div className="w-full p-8 md:p-12 rounded-[24px] md:rounded-[32px] bg-white shadow-2xl border border-zinc-200/50 transition-all duration-300">
              
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center text-center py-8 font-poppins animate-in fade-in zoom-in-95 duration-500">
                  <div className="p-4 rounded-full bg-green-50 text-green-500 mb-6 shadow-[0_0_20px_rgba(34,197,94,0.15)]">
                    <CheckCircle2 className="w-12 h-12" />
                  </div>
                  <h4 className="text-2xl font-bold text-zinc-800 mb-3">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-zinc-600 max-w-sm leading-relaxed mb-6">
                    Thank you for reaching out! Our team has received your query and will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="px-6 py-2.5 rounded-lg text-sm bg-zinc-900 text-white font-semibold hover:bg-zinc-800 transition-colors shadow"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 font-poppins">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs md:text-sm uppercase tracking-wider text-zinc-600 font-semibold">
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="p-3 border border-zinc-200 rounded-lg bg-zinc-50 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#3e87db] focus:ring-1 focus:ring-[#3e87db] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs md:text-sm uppercase tracking-wider text-zinc-600 font-semibold">
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="text"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={handleEmailChange}
                      className={`p-3 border rounded-lg bg-zinc-50 text-zinc-800 placeholder-zinc-400 focus:outline-none transition-all ${
                        emailError 
                          ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
                          : 'border-zinc-200 focus:border-[#3e87db] focus:ring-1 focus:ring-[#3e87db]'
                      }`}
                    />
                    {emailError && (
                      <span className="text-xs text-red-500 font-medium mt-1 animate-in slide-in-from-top-1 duration-200">
                        {emailError}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs md:text-sm uppercase tracking-wider text-zinc-600 font-semibold">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      placeholder="Describe your project goals"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className="p-3 border border-zinc-200 rounded-lg bg-zinc-50 text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#3e87db] focus:ring-1 focus:ring-[#3e87db] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-2 p-3.5 bg-[#3e87db] hover:bg-[#3679c6] disabled:bg-[#3e87db]/60 text-white rounded-lg font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all active:scale-[0.98]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Request</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
