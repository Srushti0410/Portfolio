import React, { useState } from 'react';
import { Mail, ArrowUpRight, Copy, Check, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "srushti.manwal@example.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative pt-24 sm:pt-32 pb-12 w-full bg-[#050505] border-t border-white/10 overflow-hidden">
      
      {/* Massive Background Graphic Text "CONTACT" */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none select-none overflow-hidden">
        <h1 className="font-display font-black text-[25vw] text-white opacity-[0.03] tracking-tighter leading-none translate-y-1/4">
          CONTACT
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10">
        
        {/* Top Row: Pitch & CTA (Left) and Navigation / Socials (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 sm:pb-24 border-b border-white/10">
          
          {/* Left Column (7 cols): Heading, Intro, Email CTA Button */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs font-mono font-semibold text-[#ff0055] tracking-widest uppercase mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff0055]" />
              04 // GET IN TOUCH
            </span>

            <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tighter leading-[0.9] mb-6 sm:mb-8">
              LET'S BUILD <br />
              <span className="text-[#ff0055]">SOMETHING.</span>
            </h2>

            <p className="text-gray-300 font-sans leading-relaxed text-sm sm:text-base md:text-lg max-w-lg mb-8 sm:mb-10">
              Open to technical internships, full-stack & cloud developer roles, freelance projects, 
              and hackathon collaborations. Drop me a line anytime!
            </p>

            {/* Email CTA Pill Button */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold text-xs sm:text-sm tracking-wider uppercase hover:bg-[#ff0055] hover:text-white transition-all duration-300 shadow-[0_0_25px_rgba(255,0,85,0.3)] group w-full sm:w-auto"
              >
                <Mail size={18} />
                <span>Send An Email</span>
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-full bg-[#0c0c0e] border border-white/10 text-gray-300 text-xs font-mono tracking-wider hover:border-[#ff0055] hover:text-[#ff0055] transition-all w-full sm:w-auto"
              >
                {copied ? <Check size={14} className="text-[#ff0055]" /> : <Copy size={14} />}
                <span>{copied ? "COPIED TO CLIPBOARD!" : "COPY EMAIL"}</span>
              </button>
            </div>
          </div>

          {/* Right Column (5 cols): Two-column grid of Links */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 pt-4">
            
            {/* Menu Links */}
            <div>
              <h4 className="font-mono text-[11px] sm:text-xs text-gray-400 tracking-widest uppercase mb-5 sm:mb-6">
                NAVIGATION
              </h4>
              <ul className="flex flex-col gap-3.5 text-xs sm:text-sm font-semibold tracking-wider text-gray-300 uppercase">
                <li>
                  <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-[#ff0055] transition-colors">
                    ABOUT
                  </a>
                </li>
                <li>
                  <a href="#work" onClick={(e) => handleNavClick(e, '#work')} className="hover:text-[#ff0055] transition-colors">
                    WORK
                  </a>
                </li>
                <li>
                  <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-[#ff0055] transition-colors">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-mono text-[11px] sm:text-xs text-gray-400 tracking-widest uppercase mb-5 sm:mb-6">
                SOCIALS
              </h4>
              <ul className="flex flex-col gap-3.5 text-xs sm:text-sm font-medium text-gray-300">
                <li>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:text-[#ff0055] transition-colors inline-flex items-center gap-2"
                  >
                    <Github size={16} /> GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:text-[#ff0055] transition-colors inline-flex items-center gap-2"
                  >
                    <Linkedin size={16} /> LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="hover:text-[#ff0055] transition-colors inline-flex items-center gap-2"
                  >
                    <Twitter size={16} /> Twitter / X
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Row: Copyright & Credits */}
        <div className="pt-8 sm:pt-10 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs font-mono text-gray-400 gap-4 text-center sm:text-left">
          <p>© 2026 Srushti. All rights reserved.</p>
          <p className="flex items-center gap-1 justify-center">
            CRAFTED WITH <span className="text-[#ff0055]">REACT</span> & <span className="text-[#ff0055]">TAILWIND</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
