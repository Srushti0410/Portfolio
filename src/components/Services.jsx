import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

export default function Services() {
  const [openIdx, setOpenIdx] = useState(3); // Default open BUILD stage

  const stages = [
    {
      num: '01',
      title: 'BRIEFING',
      description: 'Defining core business goals, target audience requirements, project scope, technical constraints, and key performance indicators to establish a clear architectural roadmap.',
    },
    {
      num: '02',
      title: 'RESEARCH',
      description: 'Competitive visual benchmark analysis, technical stack evaluation (Cloud, Database, Frontend Frameworks), database schema modeling, and UX persona mapping.',
    },
    {
      num: '03',
      title: 'PROTOTYPING',
      description: 'High-fidelity wireframing in Figma, visual design tokens definition, interactive micro-interaction specs, and component hierarchy planning before code execution.',
    },
    {
      num: '04',
      title: 'BUILD',
      description: 'Clean modular frontend & backend implementation using React, Tailwind CSS, Python/Node, cloud microservices, state management, and optimized API design.',
    },
    {
      num: '05',
      title: 'DEPLOY',
      description: 'Automated CI/CD deployment pipelines, AWS/Vercel cloud setup, SSL configuration, performance optimization, and lighthouse audit tuning for maximum speed.',
    },
    {
      num: '06',
      title: 'HANDOFF',
      description: 'Thorough developer documentation, GitHub repository delivery, clean codebase commentary, presentation deck creation, and ongoing support planning.',
    },
  ];

  const toggleAccordion = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 sm:py-32 w-full bg-[#050505] border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 md:px-12">
        
        {/* Centered Heading */}
        <div className="text-center mb-12 sm:mb-20">
          <span className="text-xs font-mono font-semibold text-[#ff0055] tracking-widest uppercase mb-3 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff0055]" />
            03 // METHODOLOGY
          </span>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter leading-tight mt-1">
            STAGES OF PROJECT <br />
            <span className="text-stroke-neon">DEVELOPMENT</span>
            <span className="text-[#ff0055]">.</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col border-t border-white/10">
          {stages.map((stage, idx) => {
            const isOpen = openIdx === idx;

            return (
              <motion.div
                key={stage.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="border-b border-white/10"
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full py-6 sm:py-8 flex items-center justify-between text-left group focus:outline-none"
                >
                  <div className="flex items-center gap-4 sm:gap-10">
                    <span className="font-mono text-xs sm:text-base font-semibold text-gray-500 group-hover:text-[#ff0055] transition-colors shrink-0">
                      {stage.num}
                    </span>
                    <h3 className={`font-display text-lg sm:text-3xl lg:text-4xl font-extrabold tracking-tight transition-colors ${
                      isOpen ? 'text-[#ff0055]' : 'text-white group-hover:text-gray-300'
                    }`}>
                      {stage.title}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 ${
                    isOpen ? 'border-[#ff0055] bg-[#ff0055]/10 text-[#ff0055]' : 'border-white/10 bg-[#0c0c0e] text-gray-400 group-hover:border-white/30'
                  }`}>
                    {isOpen ? <Minus size={16} className="sm:w-[18px]" /> : <Plus size={16} className="sm:w-[18px]" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-6 sm:pb-8 pl-8 sm:pl-16 pr-2">
                        <p className="text-gray-300 font-sans leading-relaxed text-sm sm:text-base lg:text-lg max-w-2xl">
                          {stage.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
