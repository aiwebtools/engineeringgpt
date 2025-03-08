
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ToolCard from '../components/ToolCard';
import VideoSection from '../components/VideoSection';
import FAQ from '../components/FAQ';
import Disclaimer from '../components/Disclaimer';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import PromptEngineerSection from '../components/PromptEngineerSection';
import ParticleBackground from '../components/particles/ParticleBackground';
import { motion } from 'framer-motion';

const Index: React.FC = () => {
  // SEO title update
  useEffect(() => {
    document.title = "ENGINEERING GPTs | Professional Engineering AI Tools";
  }, []);

  const tools = [
    {
      title: "Electrical Engineering GPT",
      description: "Expert electrical engineering assistance with 30 years of experience. Get help with circuit design, energy analysis, safety procedures, and regulatory compliance.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 19l-.85.85a2.13 2.13 0 0 1-3 0 2.13 2.13 0 0 1 0-3L5 16"></path>
          <path d="M16 11a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4Z"></path>
          <path d="M15 17h1"></path>
          <path d="M17 13v4"></path>
          <path d="M3 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Z"></path>
          <path d="M10 2v2"></path>
          <path d="M10 16v2"></path>
          <path d="M13 8h3"></path>
          <path d="M16 6V4c0-.6-.4-1-1-1h-2a1 1 0 0 0-1 1v2"></path>
          <path d="M19 10v2c0 .6-.4 1-1 1h-2a1 1 0 0 1-1-1v-2"></path>
        </svg>
      ),
      color: "text-cyber-blue",
      url: "https://chatgpt.com/g/g-67cbb50f1ec48191a3944e4c503fcc9d-electrical-engineering-gpt",
      delay: 0
    },
    {
      title: "Mechanical Engineering GPT",
      description: "Comprehensive mechanical engineering assistance for all disciplines from CFD and FEA to material selection and manufacturing processes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="7"></circle>
          <circle cx="12" cy="12" r="3"></circle>
          <line x1="12" y1="5" x2="12" y2="3"></line>
          <line x1="17" y1="7" x2="19" y2="5"></line>
          <line x1="19" y1="12" x2="21" y2="12"></line>
          <line x1="17" y1="17" x2="19" y2="19"></line>
          <line x1="12" y1="19" x2="12" y2="21"></line>
          <line x1="7" y1="17" x2="5" y2="19"></line>
          <line x1="5" y1="12" x2="3" y2="12"></line>
          <line x1="7" y1="7" x2="5" y2="5"></line>
        </svg>
      ),
      color: "text-cyber-purple",
      url: "https://chatgpt.com/g/g-67cbb096c0f08191be55a6436a4e5313-mechanical-engineering-gpt",
      delay: 0.1
    },
    {
      title: "Civil Engineer GPT",
      description: "Advanced civil engineering assistance spanning structural analysis, foundation design, construction management, and environmental impact assessments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
          <path d="M17 18h1"></path>
          <path d="M12 18h1"></path>
          <path d="M7 18h1"></path>
        </svg>
      ),
      color: "text-cyber-green",
      url: "https://chatgpt.com/g/g-67cbabcbf6988191840b58b26cdecbdd-civil-engineer-gpt",
      delay: 0.2
    },
    {
      title: "AI Software Engineer GPT",
      description: "Expert-level software engineering assistance with 30 years of experience. Get help with code development, debugging, documentation, and best practices.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
          <line x1="12" y1="2" x2="12" y2="22"></line>
        </svg>
      ),
      color: "text-cyber-yellow",
      url: "https://chatgpt.com/g/g-67cba72430b08191a43779ca0cca0e84-ai-software-engineer-gpt",
      delay: 0.3
    }
  ];

  return (
    <div className="relative min-h-screen bg-cyber-black text-white overflow-hidden">
      <ParticleBackground />
      <Header />
      
      <main>
        <Hero />
        
        {/* Tools Section */}
        <section id="tools" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-cyber-black to-[#080808] z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center mb-16"
            >
              <div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-cyber-blue bg-cyber-blue/10 rounded-full border border-cyber-blue/20">
                Professional Suite
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 glow-text">
                Engineering Tools
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Access specialized AI tools designed for different engineering disciplines.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {tools.map((tool, index) => (
                <ToolCard 
                  key={index}
                  title={tool.title}
                  description={tool.description}
                  icon={tool.icon}
                  color={tool.color}
                  url={tool.url}
                  delay={tool.delay}
                />
              ))}
            </div>
          </div>
        </section>
        
        <HowItWorks />
        <VideoSection />
        <PromptEngineerSection />
        <Testimonials />
        <FAQ />
        <Disclaimer />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
