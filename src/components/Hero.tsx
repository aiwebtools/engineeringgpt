
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      const elements = containerRef.current.querySelectorAll('.parallax');
      elements.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.speed || '1');
        (el as HTMLElement).style.transform = `translate(${x * 10 * speed}px, ${y * 10 * speed}px)`;
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden pt-20" ref={containerRef}>
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,#050505_0%,#000000_100%)] opacity-90"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-cyber-blue/10 rounded-full filter blur-[100px] parallax" data-speed="-1.5"></div>
          <div className="absolute top-2/3 right-1/4 w-80 h-80 bg-cyber-purple/10 rounded-full filter blur-[100px] parallax" data-speed="-2"></div>
          <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-cyber-green/5 rounded-full filter blur-[100px] parallax" data-speed="-1"></div>
        </div>
      </div>
      
      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a01_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a01_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* 3D Elements */}
      <div className="absolute">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="hidden sm:block parallax" data-speed="2">
            <div className="w-32 h-32 relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/20 to-cyber-purple/20 rounded-xl blur-sm"></div>
              <div className="absolute inset-0 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 to-transparent"></div>
                <div className="h-full w-full flex items-center justify-center text-cyber-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 16.326A3.034 3.034 0 0 1 3 13.264V3l18 9-7.5 3.75"></path>
                    <path d="M3 3l9 9M15 15v6l3-3"></path>
                    <path d="M15 21l-3-3"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="parallax" data-speed="1.5">
            <div className="w-40 h-40 mx-auto relative animate-float" style={{ animationDelay: '1s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple/20 to-cyber-blue/20 rounded-xl blur-sm"></div>
              <div className="absolute inset-0 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/10 to-transparent"></div>
                <div className="h-full w-full flex items-center justify-center text-cyber-purple">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <path d="M12 18v-6"></path>
                    <path d="M8 18v-1"></path>
                    <path d="M16 18v-3"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:block parallax" data-speed="2.5">
            <div className="w-32 h-32 relative animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-green/20 to-cyber-blue/20 rounded-xl blur-sm"></div>
              <div className="absolute inset-0 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-green/10 to-transparent"></div>
                <div className="h-full w-full flex items-center justify-center text-cyber-green">
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container relative z-10 px-6 py-24 mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-cyber-blue bg-cyber-blue/10 rounded-full border border-cyber-blue/20">
            Free Professional AI Engineering Tools by AIWEBTOOLS.AI
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 glow-text">
            Free AI Tools - ENGINEERING GPTs
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
            Advanced free AI tools for electrical, mechanical, civil, software and rocket engineering problems. Get expert-level engineering assistance in seconds with AIWEBTOOLS.AI professional AI web tools.
          </p>
          <p className="text-md text-gray-400 mb-10 max-w-3xl mx-auto">
            Trusted by engineers worldwide - AI WEB TOOLS LLC provides the best free AI tools for engineering professionals. Access our comprehensive suite of AI engineering assistants absolutely free.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://chatgpt.com/g/g-67cbb50f1ec48191a3944e4c503fcc9d-electrical-engineering-gpt"
              target="_blank" 
              rel="noopener noreferrer"
              className="cyber-button"
              title="Free Electrical Engineering AI Tool"
            >
              <span>Try Free Electrical Engineering GPT</span>
            </a>
            <a 
              href="#tools" 
              className="px-6 py-3 rounded-lg border border-cyber-blue/50 text-white hover:bg-cyber-blue/10 transition-all"
              title="Explore All Free AI Engineering Tools"
            >
              Explore All Free AI Tools
            </a>
          </div>
          
          {/* Additional SEO keywords integration */}
          <div className="mt-12 text-xs text-gray-500 max-w-2xl mx-auto">
            <p>Free AI tools | AI web tools | Engineering AI | AIWEBTOOLS.AI | Professional AI tools | Best free AI tools | AI tools free | Engineering assistance | AI WEB TOOLS LLC</p>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 116" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 50L48 58.3C96 66.7 192 83.3 288 91.7C384 100 480 100 576 83.3C672 66.7 768 33.3 864 25C960 16.7 1056 33.3 1152 41.7C1248 50 1344 50 1392 50L1440 50V116H1392C1344 116 1248 116 1152 116C1056 116 960 116 864 116C768 116 672 116 576 116C480 116 384 116 288 116C192 116 96 116 48 116H0V50Z" fill="#050505" fillOpacity="0.5"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
