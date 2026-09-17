import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'WORK', href: '#work' },
    { name: 'CONTACT', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full h-24 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#050505]/90 backdrop-blur-md border-b border-white/10 shadow-2xl' : 'bg-[#050505]/80 backdrop-blur-md border-b border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto h-full px-6 md:px-12 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button 
          onClick={scrollToTop} 
          className="group flex items-center gap-1 focus:outline-none"
        >
          <span className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-white group-hover:opacity-90 transition-opacity">
            SRUSHTI<span className="text-[#ff0055]">.</span>
          </span>
        </button>

        {/* Desktop Links & Status */}
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-semibold text-gray-300 hover:text-[#ff0055] transition-colors duration-200 uppercase tracking-widest relative group py-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ff0055] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Far Right Action Button with Neon Maroon Dot */}
          <div className="flex items-center gap-3 pl-6 border-l border-white/10">
            <div className="relative flex items-center justify-center group">
              <button 
                onClick={(e) => handleNavClick(e, '#contact')}
                title="Available for Opportunities"
                className="w-10 h-10 rounded-full border border-white/10 bg-[#0c0c0e] flex items-center justify-center hover:border-[#ff0055]/50 hover:bg-[#141214] transition-all duration-300"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff0055] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ff0055]"></span>
                </span>
              </button>
              
              {/* Hover Tooltip */}
              <span className="absolute right-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#0c0c0e] text-xs font-mono text-[#ff0055] border border-[#ff0055]/30 py-1 px-3 rounded-full whitespace-nowrap pointer-events-none shadow-lg">
                Available for Roles
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={(e) => handleNavClick(e, '#contact')}
            className="w-9 h-9 rounded-full border border-white/10 bg-[#0c0c0e] flex items-center justify-center"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff0055] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#ff0055]"></span>
            </span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-[#ff0055] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-base font-semibold text-gray-200 hover:text-[#ff0055] tracking-widest transition-colors py-2 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
