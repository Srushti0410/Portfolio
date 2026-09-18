import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Cloud, Layers, Award, Sparkles } from 'lucide-react';

export default function About() {
  const skills = [
    'React.js', 
    'Tailwind CSS', 
    'AWS', 
    'Python', 
    'Figma to Code', 
    'Framer Motion', 
    'Data Engineering', 
    'Google Apps Script'
  ];

  const stats = [
    { label: 'HACKATHONS', val: '04+', icon: Award },
    { label: 'PROJECTS SHIPPED', val: '10+', icon: Sparkles },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 w-full bg-[#050505] relative border-t border-white/5 overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#ff0055]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
            className="flex flex-col items-start"
          >
            {/* Section Tag */}
            <span className="text-xs font-mono font-semibold text-[#ff0055] tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff0055] animate-ping" />
              01 // ABOUT ME
            </span>

            {/* Heading */}
            <h2 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter leading-[0.95] mb-6 sm:mb-8">
              BUILDING WITH <br />
              <span className="text-[#ff0055]">PURPOSE.</span>
            </h2>

            {/* Paragraph 1 */}
            <p className="text-gray-300 font-sans leading-relaxed text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
              I am a third-year Computer Engineering student at Fr. Conceicao Rodrigues College of Engineering (CRCE), 
              actively cultivating practical technical skills across cloud computing, full-stack web development, and data engineering.
            </p>

            {/* Paragraph 2 */}
            <p className="text-gray-400 font-sans leading-relaxed text-sm sm:text-base md:text-lg mb-8 sm:mb-10">
              A high-energy contributor at hackathons (including national-level events at Parul University), 
              I take ownership of frontend engineering, intuitive UX design, and pitch narratives—turning complex 
              domain problems into clean, high-performance web products.
            </p>

            {/* Stats Row with Thin Divider */}
            <div className="w-full pt-6 sm:pt-8 border-t border-white/10 grid grid-cols-2 gap-6 sm:gap-8">
              {stats.map((stat, idx) => {
                const StatIcon = stat.icon;

                return (
                  <motion.div 
                    key={stat.label}
                    whileHover={{ y: -4 }}
                    className={`flex flex-col ${idx === 1 ? 'pl-6 sm:pl-8 border-l border-white/10' : ''}`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <StatIcon size={16} className="text-[#ff0055]" />
                      <span className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                        {stat.val}
                      </span>
                    </div>
                    <span className="text-[10px] sm:text-xs font-mono tracking-widest text-gray-400 uppercase">
                      {stat.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column: Toolkit Glassmorphism Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="w-full"
          >
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] group hover:border-[#ff0055]/30 transition-colors">
              
              {/* Header inside card */}
              <div className="flex items-center justify-between mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-white/10">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                    MY TOOLKIT
                  </h3>
                  <p className="text-[10px] sm:text-xs font-mono text-gray-400 mt-0.5 sm:mt-1">
                    TECHNOLOGIES & FRAMEWORKS
                  </p>
                </div>
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#ff0055]/10 border border-[#ff0055]/30 flex items-center justify-center shrink-0">
                  <Terminal size={18} className="text-[#ff0055]" />
                </div>
              </div>

              {/* Skills Chips Grid with Spring Hover Animations */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.06, duration: 0.4 }}
                    whileHover={{ 
                      scale: 1.08, 
                      y: -3,
                      rotate: index % 2 === 0 ? 1.5 : -1.5 
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-full bg-[#0c0c0e] border border-white/10 text-gray-200 text-xs sm:text-sm font-medium tracking-wide cursor-default transition-all duration-300 hover:border-[#ff0055] hover:text-[#ff0055] hover:shadow-[0_0_20px_rgba(255,0,85,0.4)] flex items-center gap-2 group/chip"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-500 group-hover/chip:bg-[#ff0055] group-hover/chip:shadow-[0_0_8px_#ff0055] transition-all" />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>

              {/* Decorative Grid overlay inside card */}
              <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] font-mono text-gray-500 gap-2">
                <span className="flex items-center gap-2">
                  <Cloud size={14} className="text-[#ff0055]" /> AWS & Cloud Stack
                </span>
                <span className="flex items-center gap-2">
                  <Layers size={14} className="text-[#ff0055]" /> Scalable UI Specs
                </span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
