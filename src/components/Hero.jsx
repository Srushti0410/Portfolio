import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownRight, Sparkles, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const bgWords = ['BUILD', 'CREATE', 'SCALE', 'INNOVATE', 'DEPLOY'];
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIdx((prev) => (prev + 1) % bgWords.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full bg-[#050505] bg-grid-pattern pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Subtle Glowing Neon Maroon Background Blur Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#ff0055]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-[#b3003b]/10 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      {/* Dynamic Animated Background Typography Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden px-4">
        <AnimatePresence mode="wait">
          <motion.h1
            key={bgWords[wordIdx]}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 0.035, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 1.05 }}
            transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
            className="font-display font-black text-[22vw] text-white tracking-tighter leading-none select-none uppercase pointer-events-none text-center"
          >
            {bgWords[wordIdx]}
          </motion.h1>
        </AnimatePresence>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Text Content (7 cols on lg) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* Subheading Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-[#0c0c0e] border border-white/10 mb-6 max-w-full">
            <span className="w-2 h-2 rounded-full bg-[#ff0055] shadow-[0_0_8px_#ff0055] shrink-0" />
            <span className="text-[10px] sm:text-xs font-semibold text-gray-300 tracking-widest uppercase font-mono truncate">
              COMPUTER ENGINEERING STUDENT
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-display font-extrabold text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.95] text-white mb-6">
            CODE <br />
            <span className="text-stroke-neon">AT SCALE</span>
            <span className="text-[#ff0055]">.</span>
          </h1>

          {/* Intro Paragraph */}
          <p className="text-sm sm:text-base md:text-lg text-gray-400 font-sans leading-relaxed max-w-xl mb-8 sm:mb-10">
            Third-year Computer Engineering student building across cloud computing, 
            full-stack development, and data engineering, with hands-on experience 
            shipping high-impact projects at hackathons.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            {/* View My Work Button */}
            <button
              onClick={() => handleScrollTo('#work')}
              className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#ff0055] to-[#b3003b] text-white font-semibold text-sm tracking-wider uppercase shadow-[0_0_25px_rgba(255,0,85,0.4)] hover:shadow-[0_0_35px_rgba(255,0,85,0.6)] transform hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
            >
              <span>View My Work</span>
              <div className="w-7 h-7 rounded-full bg-black/30 flex items-center justify-center group-hover:translate-x-1 group-hover:translate-y-1 transition-transform">
                <ArrowDownRight size={18} className="text-white" />
              </div>
            </button>

            {/* Contact Me Button */}
            <button
              onClick={() => handleScrollTo('#contact')}
              className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-[#0c0c0e] border border-white/10 text-white font-medium text-sm tracking-wider uppercase hover:border-[#ff0055] hover:text-[#ff0055] transition-all duration-300 group w-full sm:w-auto"
            >
              <span className="w-2 h-2 rounded-full bg-[#ff0055] group-hover:scale-125 transition-transform" />
              <span>Contact Me</span>
            </button>
          </div>
        </motion.div>

        {/* Right Column: Interactive Drag Badge / ID Card (5 cols on lg) */}
        <div className="lg:col-span-5 flex justify-center items-center relative pt-8 lg:pt-0 w-full">
          <motion.div
            drag
            dragElastic={0.2}
            dragConstraints={{ top: -30, left: -30, right: 30, bottom: 30 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            animate={{ 
              y: [0, -12, 0], 
              rotateZ: [-1, 1, -1] 
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98, cursor: 'grabbing' }}
            className="cursor-grab relative w-full max-w-[280px] xs:max-w-[300px] sm:max-w-[320px] bg-[#0c0c0e] border border-white/10 rounded-3xl p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)] backdrop-blur-xl group hover:border-[#ff0055]/40 transition-colors"
          >
            {/* Lanyard Strip */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-4 h-32 bg-gradient-to-b from-gray-900 via-gray-700 to-[#ff0055]/80 shadow-md flex items-end justify-center pb-1">
              {/* Badge Clip ring */}
              <div className="w-6 h-6 rounded-full border-2 border-white/20 bg-black/90 flex items-center justify-center -mb-3 shadow-inner">
                <div className="w-2 h-2 rounded-full bg-[#ff0055]" />
              </div>
            </div>

            {/* Badge Clip Connector */}
            <div className="mx-auto w-12 h-3 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 rounded-t-sm mb-4 flex justify-center items-center shadow-md">
              <div className="w-4 h-1 bg-black/80 rounded-full" />
            </div>

            {/* Card Header Info */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <div className="flex items-center gap-1.5">
                <Sparkles size={14} className="text-[#ff0055]" />
                <span className="text-[10px] font-mono text-gray-400 tracking-widest uppercase">
                  DEV PASS // 2026
                </span>
              </div>
              <div className="flex items-center gap-1 bg-[#ff0055]/10 border border-[#ff0055]/30 px-2 py-0.5 rounded-full">
                <ShieldCheck size={12} className="text-[#ff0055]" />
                <span className="text-[9px] font-mono text-[#ff0055] font-semibold">VERIFIED</span>
              </div>
            </div>

            {/* Portrait Image Container */}
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 border border-white/10 bg-black/60 group-hover:border-[#ff0055]/40 transition-colors">
              <img 
                src="/avatar.jpg" 
                alt="Srushti" 
                className="w-full h-full object-cover object-center filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e] via-transparent to-transparent opacity-80" />
              
              {/* Interactive Drag Tag overlay */}
              <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-md px-2 py-1 rounded text-[9px] font-mono text-gray-300 border border-white/10">
                DRAG ME
              </div>
            </div>

            {/* Card Footer Text */}
            <div className="relative z-10 pt-1">
              <h3 className="font-display text-2xl font-extrabold text-white tracking-tight">
                Srushti<span className="text-[#ff0055]">.</span>
              </h3>
              <p className="text-xs font-mono text-gray-400 mt-0.5">
                Computer Engineering, Fr. CRCE
              </p>
              
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-gray-500">
                <span>ID: #CRCE-2026-EN</span>
                <span className="text-[#ff0055] font-semibold">ONLINE</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
