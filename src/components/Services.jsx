import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Cloud, Database, Users, ChevronRight, ChevronLeft, Sparkles, CheckCircle2, Terminal } from 'lucide-react';

export default function Services() {
  const [activeDomainIdx, setActiveDomainIdx] = useState(0);
  const [activeSubNodeIdx, setActiveSubNodeIdx] = useState(0);

  const domains = [
    {
      id: 'fullstack',
      num: '01',
      title: 'FULL-STACK DEVELOPMENT',
      shortTitle: 'FULL-STACK DEV',
      icon: Code2,
      summary: 'Building end-to-end web applications — from Figma screenshots to production-ready components. Stack: React.js, Tailwind CSS, Framer Motion. Shipped React/Tailwind landing pages for the Institute of Trusted Leadership (ITL), including custom gradients, lucide-react icons, and interactive carousels built from static design files.',
      tags: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Figma to Code', 'Vite'],
      nodes: [
        {
          id: 'figma-code',
          title: '01. Figma to Code',
          badge: 'UI ARCHITECTURE',
          description: 'Pixel-perfect translation of static Figma mockups into responsive, accessible React component structures.',
          details: 'Extracted design tokens, typography scales, color variables, and fluid spacing grids directly from design files.',
        },
        {
          id: 'react-tailwind',
          title: '02. React & Tailwind',
          badge: 'FRONTEND STACK',
          description: 'Building modular, reusable UI components using React and utility-first Tailwind CSS.',
          details: 'Leveraging modern hooks, clean component separation, and custom Tailwind configuration tokens.',
        },
        {
          id: 'framer-motion',
          title: '03. Framer Motion',
          badge: 'ANIMATIONS',
          description: 'Injecting luxury micro-interactions, drag physics, 3D card decks, and smooth scroll triggers.',
          details: 'Crafting custom spring curves, AnimatePresence state transitions, and viewport scroll reveals.',
        },
        {
          id: 'itl-landing',
          title: '04. ITL Landing Pages',
          badge: 'FEATURED SHIP',
          description: 'Shipped production landing pages for the Institute of Trusted Leadership with custom gradients.',
          details: 'Built interactive visual carousels, custom SVG graphics, and responsive layouts from static screenshots.',
        },
        {
          id: 'prod-build',
          title: '05. Production Build',
          badge: 'PERFORMANCE',
          description: 'Vite bundle optimization, lighthouse audit tuning, and automated deployment pipelines.',
          details: 'Ensuring sub-second load speeds, zero build warnings, and mobile first responsive execution.',
        },
      ],
    },
    {
      id: 'cloud',
      num: '02',
      title: 'CLOUD COMPUTING (AWS)',
      shortTitle: 'CLOUD (AWS)',
      icon: Cloud,
      summary: 'Coursework and hands-on labs in cloud architecture and deployment. Completed a 15-section report on cloud computing\'s role in AI/ML, plus a case study on Capital One\'s AWS migration. Currently building toward AWS certification.',
      tags: ['AWS EC2', 'S3 & RDS', 'IAM Security', 'AI/ML Cloud', 'Architecture'],
      nodes: [
        {
          id: 'cloud-arch',
          title: '01. Core AWS Services',
          badge: 'INFRASTRUCTURE',
          description: 'Hands-on configuration of core cloud infrastructure: EC2 compute, S3 storage, and RDS databases.',
          details: 'Configured security groups, VPC networks, IAM policies, and automated snapshot backup routines.',
        },
        {
          id: 'aiml-report',
          title: '02. AI/ML Cloud Report',
          badge: 'RESEARCH PAPER',
          description: 'Authored an exhaustive 15-section technical report exploring cloud infrastructure for scalable AI/ML.',
          details: 'Analyzed GPU acceleration nodes, cloud training pipelines, model hosting latency, and cost modeling.',
        },
        {
          id: 'capital-one',
          title: '03. Capital One Case Study',
          badge: 'ENTERPRISE MIGRATION',
          description: 'Deep-dive analytical case study evaluating Capital One\'s complete digital cloud migration to AWS.',
          details: 'Studied financial compliance standards, multi-region failover resiliency, and microservice refactoring.',
        },
        {
          id: 'aws-cert',
          title: '04. AWS Certification',
          badge: 'GOAL IN PROGRESS',
          description: 'Actively preparing for official AWS Cloud Practitioner / Solutions Architect certification.',
          details: 'Mastering well-architected framework pillars: performance, security, cost optimization, and reliability.',
        },
      ],
    },
    {
      id: 'data',
      num: '03',
      title: 'DATA ENGINEERING',
      shortTitle: 'DATA ENGINEERING',
      icon: Database,
      summary: 'Modeling and visualizing structured data at scale. Designed a Galaxy Schema for a manufacturing fact constellation — 4 fact tables, 10 dimension tables — rendered as a 4K static diagram with orthogonal connectors via a Python-generated SVG pipeline.',
      tags: ['Data Modeling', 'Galaxy Schema', 'Fact Constellation', 'Python SVG Pipeline', 'SQL'],
      nodes: [
        {
          id: 'data-modeling',
          title: '01. Data Modeling',
          badge: 'SCHEMA DESIGN',
          description: 'Architecting relational and dimensional data models for high-throughput analytical queries.',
          details: 'Normalizing operational databases while designing denormalized star and snowflake schemas for OLAP.',
        },
        {
          id: 'galaxy-schema',
          title: '02. Galaxy Schema Design',
          badge: 'FACT CONSTELLATION',
          description: 'Designed a complex Galaxy Schema featuring 4 core fact tables and 10 shared dimension tables.',
          details: 'Tailored for manufacturing supply chain metrics, cross-departmental analytics, and inventory tracking.',
        },
        {
          id: 'python-svg',
          title: '03. Python SVG Pipeline',
          badge: 'AUTOMATED GRAPHICS',
          description: 'Programmed a custom Python script to automatically render 4K static schema architecture diagrams.',
          details: 'Calculated orthogonal connector routing, node bounds, and crisp vector output without manual drawing.',
        },
        {
          id: 'data-vis',
          title: '04. Data Analytics',
          badge: 'PIPELINE METRICS',
          description: 'Transforming raw dataset streams into actionable visual telemetry and operational dashboards.',
          details: 'Structuring query paths for fast reporting, dimension hierarchies, and data integrity checks.',
        },
      ],
    },
    {
      id: 'team-pitch',
      num: '04',
      title: 'TEAM & PITCH (HACKATHON NARRATIVE/UX)',
      shortTitle: 'TEAM & PITCH',
      icon: Users,
      summary: 'Leading frontend, UX, and pitch narrative across hackathon teams. Built CarbonTide — a blockchain-powered blue carbon MRV and CSR matchmaking registry — at BIOTHON 2026, scoring 74.50/100 on the feasibility round. Also led narrative and frontend for SupplyIQ (AI-driven supply chain risk intelligence) and GrievanceGrid (geospatial civic accountability platform).',
      tags: ['Hackathons', 'CarbonTide (BIOTHON 2026)', 'SupplyIQ', 'GrievanceGrid', 'UX & Pitch'],
      nodes: [
        {
          id: 'hackathon-leadership',
          title: '01. Team Leadership',
          badge: 'HACKATHONS',
          description: 'Spearheading frontend architecture, product design, and narrative storytelling in competitive hackathons.',
          details: 'Synchronizing cross-functional team workflows under strict 24-48 hour hackathon sprint timelines.',
        },
        {
          id: 'carbontide-node',
          title: '02. CarbonTide (BIOTHON 2026)',
          badge: 'FEASIBILITY SCORE: 74.50',
          description: 'Blockchain blue carbon MRV and CSR matchmaking registry built at BIOTHON 2026 (Parul University).',
          details: 'Pitched ocean carbon credit verification; secured a 74.50/100 score in the rigorous feasibility round.',
        },
        {
          id: 'supplyiq-node',
          title: '03. SupplyIQ Platform',
          badge: 'AI & SUPPLY CHAIN',
          description: 'Led narrative and frontend UI for an AI-driven supply chain risk intelligence platform.',
          details: 'Integrated NLP risk feeds, predictive ML alerts, and ESG compliance tracking for manufacturers.',
        },
        {
          id: 'grievance-node',
          title: '04. GrievanceGrid',
          badge: 'CIVIC TECH',
          description: 'Geospatial civic accountability platform presented at Parul Environment Hackathon 2026.',
          details: 'Designed interactive smart-city grievance heatmaps and resolution tracking interfaces.',
        },
        {
          id: 'pitch-deck',
          title: '05. Pitch & Narrative',
          badge: 'STORYTELLING',
          description: 'Crafting high-impact pitch decks, live demo scripts, and value proposition presentations.',
          details: 'Communicating technical architecture clearly to judges, industry mentors, and hackathon evaluators.',
        },
      ],
    },
  ];

  const currentDomain = domains[activeDomainIdx];
  const currentSubNodes = currentDomain.nodes;
  const activeSubNode = currentSubNodes[activeSubNodeIdx] || currentSubNodes[0];

  const handleDomainSelect = (idx) => {
    setActiveDomainIdx(idx);
    setActiveSubNodeIdx(0);
  };

  const handleNextSubNode = () => {
    setActiveSubNodeIdx((prev) => (prev + 1) % currentSubNodes.length);
  };

  const handlePrevSubNode = () => {
    setActiveSubNodeIdx((prev) => (prev - 1 + currentSubNodes.length) % currentSubNodes.length);
  };

  return (
    <section className="py-24 sm:py-32 w-full bg-[#050505] border-t border-white/5 relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#ff0055]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#b3003b]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <span className="text-xs font-mono font-semibold text-[#ff0055] tracking-widest uppercase mb-3 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff0055] animate-ping" />
            03 // TECHNICAL EXPERTISE
          </span>
          
          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter leading-none">
            SKILLS BY / <span className="text-stroke-neon">DOMAIN</span>
            <span className="text-[#ff0055]">.</span>
          </h2>
          <p className="text-gray-400 font-sans text-sm sm:text-base max-w-xl mt-4">
            Explore core engineering domains through an interactive step pipeline — featuring projects, research, and hackathon accomplishments.
          </p>
        </div>

        {/* Level 1: Domain Selection Pipeline Track */}
        <div className="relative mb-14">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-white/10 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 relative z-10">
            {domains.map((dom, idx) => {
              const IconComp = dom.icon;
              const isSelected = idx === activeDomainIdx;

              return (
                <motion.button
                  key={dom.id}
                  onClick={() => handleDomainSelect(idx)}
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className={`flex flex-col items-start p-4 sm:p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group ${
                    isSelected
                      ? 'bg-[#0c0c0e] border-[#ff0055] shadow-[0_0_25px_rgba(255,0,85,0.25)] ring-1 ring-[#ff0055]/50'
                      : 'bg-[#0c0c0e]/60 border-white/10 hover:border-white/30 hover:bg-[#0c0c0e]'
                  }`}
                >
                  <div className="w-full flex items-center justify-between mb-3">
                    <span className={`font-mono text-xs font-bold ${isSelected ? 'text-[#ff0055]' : 'text-gray-500'}`}>
                      {dom.num}
                    </span>
                    
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      isSelected ? 'bg-[#ff0055] text-white shadow-[0_0_12px_#ff0055]' : 'bg-white/5 text-gray-400 group-hover:text-white'
                    }`}>
                      <IconComp size={16} />
                    </div>
                  </div>

                  <h3 className={`font-display text-xs sm:text-sm font-extrabold tracking-tight transition-colors ${
                    isSelected ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'
                  }`}>
                    {dom.title}
                  </h3>

                  {isSelected && (
                    <motion.div 
                      layoutId="activeDomainBar"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#ff0055] shadow-[0_0_8px_#ff0055]" 
                      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Domain Summary & Tag Pills */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDomain.id}
            initial={{ opacity: 0, y: 15, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -15, filter: 'blur(4px)' }}
            transition={{ duration: 0.4 }}
            className="bg-[#0c0c0e] border border-white/10 rounded-3xl p-6 sm:p-8 mb-12 shadow-2xl relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="max-w-3xl">
                <div className="flex items-center gap-2 text-xs font-mono text-[#ff0055] uppercase tracking-widest mb-2">
                  <Sparkles size={14} /> DOMAIN OVERVIEW
                </div>
                <p className="text-gray-300 font-sans text-sm sm:text-base leading-relaxed">
                  {currentDomain.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 md:justify-end shrink-0">
                {currentDomain.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 rounded-full bg-[#ff0055]/10 border border-[#ff0055]/30 text-[#ff0055] text-xs font-mono font-medium cursor-default"
                  >
                    #{tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Level 2: Interactive Sub-Node Horizontal Pipeline */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative">
          
          <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-8">
            <div>
              <h4 className="font-display text-xl sm:text-2xl font-extrabold text-white tracking-tight flex items-center gap-2">
                <Terminal size={20} className="text-[#ff0055]" />
                INTERACTIVE PIPELINE NODES
              </h4>
              <p className="text-xs font-mono text-gray-400 mt-1">
                CLICK OR SWIPE NODES TO EXPLORE SUB-MILESTONES ({currentSubNodes.length} NODES)
              </p>
            </div>

            <div className="flex items-center gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handlePrevSubNode}
                className="w-9 h-9 rounded-full border border-white/10 bg-[#0c0c0e] flex items-center justify-center text-gray-300 hover:border-[#ff0055] hover:text-[#ff0055] transition-colors"
                aria-label="Previous step"
              >
                <ChevronLeft size={16} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleNextSubNode}
                className="w-9 h-9 rounded-full border border-white/10 bg-[#0c0c0e] flex items-center justify-center text-gray-300 hover:border-[#ff0055] hover:text-[#ff0055] transition-colors"
                aria-label="Next step"
              >
                <ChevronRight size={16} />
              </motion.button>
            </div>
          </div>

          {/* Horizontal Pipeline Node Stepper Track */}
          <div className="relative mb-10 overflow-x-auto pb-4 scrollbar-thin">
            <div className="absolute top-6 left-8 right-8 h-[2px] bg-white/10 -translate-y-1/2 z-0 min-w-[600px]" />

            <div className="flex items-center justify-between min-w-[600px] relative z-10 px-4">
              {currentSubNodes.map((node, nIdx) => {
                const isSubActive = nIdx === activeSubNodeIdx;

                return (
                  <motion.button
                    key={node.id}
                    onClick={() => setActiveSubNodeIdx(nIdx)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center group focus:outline-none"
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 relative ${
                      isSubActive
                        ? 'bg-[#ff0055] border-[#ff0055] text-white shadow-[0_0_20px_#ff0055] scale-110'
                        : 'bg-[#0c0c0e] border-white/20 text-gray-400 hover:border-[#ff0055] hover:text-white'
                    }`}>
                      {isSubActive ? (
                        <CheckCircle2 size={20} className="text-white" />
                      ) : (
                        <span className="font-mono text-xs font-bold">{nIdx + 1}</span>
                      )}

                      {isSubActive && (
                        <span className="animate-ping absolute inset-0 rounded-full bg-[#ff0055] opacity-50 pointer-events-none" />
                      )}
                    </div>

                    <span className={`text-[11px] font-mono font-semibold mt-3 max-w-[110px] text-center truncate transition-colors ${
                      isSubActive ? 'text-[#ff0055]' : 'text-gray-400 group-hover:text-gray-200'
                    }`}>
                      {node.title.split('. ')[1] || node.title}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* Selected Sub-Node Active Card Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSubNode.id}
              initial={{ opacity: 0, scale: 0.98, y: 12, filter: 'blur(4px)' }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 0.98, y: -12, filter: 'blur(4px)' }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="bg-[#0c0c0e] border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-xl"
            >
              <div className="inline-block px-3 py-1 rounded-md bg-[#ff0055]/10 border border-[#ff0055]/30 text-[#ff0055] font-mono text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-4">
                {activeSubNode.badge}
              </div>

              <h5 className="font-display text-xl sm:text-2xl font-extrabold text-white tracking-tight mb-3">
                {activeSubNode.title}
              </h5>

              <p className="text-gray-200 font-sans text-sm sm:text-base leading-relaxed mb-4">
                {activeSubNode.description}
              </p>

              <div className="pt-4 border-t border-white/10 text-xs font-mono text-gray-400 flex items-start gap-2">
                <span className="text-[#ff0055] font-bold">➜</span>
                <span>{activeSubNode.details}</span>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
