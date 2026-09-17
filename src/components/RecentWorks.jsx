import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, Layers, ChevronRight, ChevronLeft } from 'lucide-react';

export default function RecentWorks() {
  const [activeIdx, setActiveIdx] = useState(0);

  const projects = [
    {
      id: 'carbontide',
      title: 'CarbonTide',
      category: 'Blockchain / Sustainability',
      description: 'India\'s first blockchain-powered blue carbon MRV and CSR matchmaking registry. Built during BIOTHON 2026 at Parul University to streamline transparent carbon credit trading and ocean ecosystem preservation.',
      tags: ['Blockchain', 'React', 'Sustainability', 'Team Project'],
      image: '/carbontide.jpg',
      link: '#',
    },
    {
      id: 'supplyiq',
      title: 'SupplyIQ',
      category: 'AI / Supply Chain',
      description: 'An AI-driven supply chain risk intelligence platform combining real-time NLP monitoring, predictive machine learning models, and blockchain ESG compliance tracking for enterprise manufacturers.',
      tags: ['AI/ML', 'NLP', 'Blockchain', 'ESG'],
      image: '/supplyiq.jpg',
      link: '#',
    },
    {
      id: 'grievancegrid',
      title: 'GrievanceGrid',
      category: 'Civic Tech',
      description: 'A geospatial civic accountability platform engineered to pinpoint, track, and resolve urban environmental grievances. Presented at the Parul University Environment Hackathon 2026.',
      tags: ['Geospatial', 'Civic Tech', 'React'],
      image: '/grievancegrid.jpg',
      link: '#',
    },
    {
      id: 'itllandings',
      title: 'ITL Landing Pages',
      category: 'Web Development',
      description: 'High-conversion, pixel-perfect React & Tailwind CSS landing pages built directly from Figma designs for the Institute of Trusted Leadership, featuring custom CSS gradients and interactive carousel flows.',
      tags: ['React', 'Tailwind CSS', 'Figma to Code'],
      image: '/itllandings.jpg',
      link: '#',
    },
  ];

  const handleCardClick = (index) => {
    if (index === activeIdx) {
      // Cycle forward
      setActiveIdx((prev) => (prev + 1) % projects.length);
    } else {
      setActiveIdx(index);
    }
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="work" className="py-24 sm:py-32 w-full bg-[#050505] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Section Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div>
            <span className="text-xs font-mono font-semibold text-[#ff0055] tracking-widest uppercase mb-3 sm:mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff0055]" />
              02 // FEATURED PORTFOLIO
            </span>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter leading-none">
              RECENT <span className="text-[#ff0055]">WORKS.</span>
            </h2>
          </div>

          <div className="flex items-center justify-between sm:justify-start gap-4 w-full sm:w-auto">
            {/* Manual Stack Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-white/10 bg-[#0c0c0e] flex items-center justify-center text-gray-300 hover:border-[#ff0055] hover:text-[#ff0055] transition-colors"
                aria-label="Previous project"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-white/10 bg-[#0c0c0e] flex items-center justify-center text-gray-300 hover:border-[#ff0055] hover:text-[#ff0055] transition-colors"
                aria-label="Next project"
              >
                <ChevronRight size={18} />
              </button>
            </div>

            <button 
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-gray-300 hover:text-[#ff0055] transition-colors group"
            >
              <span>View All</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* 3D Stack Interactive Deck Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Side: 3D Stacked Cards Deck (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-center w-full">
            
            {/* Stack Box Container with Mobile Responsive Height */}
            <div className="relative w-full h-[310px] xs:h-[360px] sm:h-[430px] md:h-[480px] perspective-[1200px]">
              {projects.map((project, index) => {
                const total = projects.length;
                const diff = (index - activeIdx + total) % total;
                const isTopCard = diff === 0;

                return (
                  <motion.div
                    key={project.id}
                    onClick={() => handleCardClick(index)}
                    animate={{
                      y: diff * 24,
                      scale: 1 - diff * 0.05,
                      rotateX: diff * 2.5,
                      zIndex: total - diff,
                      opacity: diff > 3 ? 0 : 1 - diff * 0.15,
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                    whileHover={isTopCard ? { scale: 1.02, y: -6 } : {}}
                    className={`absolute inset-0 w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer border border-white/10 bg-[#0c0c0e] shadow-2xl transition-shadow ${
                      isTopCard ? 'ring-1 ring-[#ff0055]/40 shadow-[0_20px_60px_rgba(255,0,85,0.25)]' : 'opacity-80 filter brightness-90'
                    }`}
                  >
                    {/* Project Screenshot / Image */}
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700"
                    />

                    {/* Dark Gradient Overlay & Banner */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent flex flex-col justify-between p-5 sm:p-8">
                      
                      {/* Top Bar inside card */}
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 sm:px-3 py-1 rounded-full bg-black/80 backdrop-blur-md text-[10px] sm:text-[11px] font-mono text-[#ff0055] border border-[#ff0055]/30">
                          {project.category}
                        </span>

                        <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-[10px] sm:text-xs font-mono text-gray-300">
                          0{index + 1}
                        </span>
                      </div>

                      {/* Bottom Banner inside card */}
                      <div>
                        <h3 className="font-display text-xl sm:text-3xl font-extrabold text-white tracking-tight">
                          {project.title}
                        </h3>
                        <p className="text-[10px] sm:text-xs font-mono text-gray-400 mt-1 flex items-center gap-1.5">
                          <Layers size={12} className="text-[#ff0055]" />
                          <span>Tap card to cycle stack</span>
                        </p>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation Dots Mapping Active Card */}
            <div className="flex items-center justify-center gap-2.5 sm:gap-3 mt-8 sm:mt-10">
              {projects.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActiveIdx(idx)}
                  aria-label={`Go to project ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === activeIdx ? 'w-7 sm:w-8 bg-[#ff0055] shadow-[0_0_10px_#ff0055]' : 'w-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

          </div>

          {/* Right Side: Description Panel (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2 lg:pt-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={projects[activeIdx].id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col items-start"
              >
                {/* Category Pill */}
                <div className="inline-block px-3 py-1 rounded-full bg-[#ff0055]/10 border border-[#ff0055]/30 text-[#ff0055] font-mono text-[11px] sm:text-xs font-medium tracking-wider uppercase mb-4 sm:mb-6">
                  {projects[activeIdx].category}
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4 sm:mb-6">
                  {projects[activeIdx].title}
                </h3>

                {/* Detailed Description */}
                <p className="text-gray-300 font-sans leading-relaxed text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
                  {projects[activeIdx].description}
                </p>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
                  {projects[activeIdx].tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2.5 sm:px-3 py-1 rounded-md bg-[#0c0c0e] border border-white/10 text-[11px] sm:text-xs font-mono text-gray-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Explore Project Button */}
                <a
                  href={projects[activeIdx].link}
                  onClick={(e) => {
                    e.preventDefault();
                    alert(`Opening details for ${projects[activeIdx].title}`);
                  }}
                  className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-full bg-[#0c0c0e] border border-[#ff0055]/50 text-[#ff0055] font-semibold text-xs sm:text-sm tracking-wider uppercase hover:bg-[#ff0055] hover:text-white transition-all duration-300 group shadow-[0_0_15px_rgba(255,0,85,0.2)] w-full sm:w-auto"
                >
                  <span>Explore Project</span>
                  <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
