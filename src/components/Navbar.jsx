import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Section active observer
      const sections = ['about', 'work', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about', id: 'about' },
    { name: 'WORK', href: '#work', id: 'work' },
    { name: 'CONTACT', href: '#contact', id: 'contact' },
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
    <header className={`fixed top-0 left-0 w-full h-24 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-[#050505]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]' 
        : 'bg-[#050505]/80 backdrop-blur-md border-b border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto h-full px-5 sm:px-8 md:px-12 flex items-center justify-between">
        
        {/* Brand Logo */}
        <motion.button 
          onClick={scrollToTop} 
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="group flex items-center gap-1 focus:outline-none"
        >
          <span className="font-display text-2xl md:text-3xl font-extrabold tracking-tight text-white group-hover:opacity-90 transition-opacity">
            SRUSHTI<span className="text-[#ff0055] inline-block animate-pulse">.</span>
          </span>
        </motion.button>

        {/* Desktop Links & Status */}
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-sm font-semibold uppercase tracking-widest relative py-1 transition-colors duration-300 ${
                    isActive ? 'text-[#ff0055]' : 'text-gray-300 hover:text-[#ff0055]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-[#ff0055] shadow-[0_0_8px_#ff0055]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </nav>

          {/* Far Right Action Button with Neon Maroon Dot */}
          <div className="flex items-center gap-3 pl-6 border-l border-white/10">
            <div className="relative flex items-center justify-center group">
              <motion.button 
                onClick={(e) => handleNavClick(e, '#contact')}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                title="Available for Opportunities"
                className="w-10 h-10 rounded-full border border-white/10 bg-[#0c0c0e] flex items-center justify-center hover:border-[#ff0055] hover:bg-[#141214] transition-all duration-300 shadow-[0_0_15px_rgba(255,0,85,0.15)]"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff0055] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ff0055]"></span>
                </span>
              </motion.button>
              
              {/* Hover Tooltip */}
              <span className="absolute right-12 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[#0c0c0e] text-xs font-mono text-[#ff0055] border border-[#ff0055]/30 py-1 px-3 rounded-full whitespace-nowrap pointer-events-none shadow-lg translate-x-2 group-hover:translate-x-0">
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

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-[#ff0055] focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-[#050505]/95 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
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
