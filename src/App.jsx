import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import RecentWorks from './components/RecentWorks';
import Services from './components/Services';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#ff0055] selection:text-white">
      {/* Fixed Navigation Bar */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Recent Works / 3D Card Stack Section */}
        <RecentWorks />

        {/* Services / Project Stages Section */}
        <Services />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
