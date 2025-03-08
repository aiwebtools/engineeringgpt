
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="7" height="7" x="3" y="3" rx="1"></rect>
        <rect width="7" height="7" x="14" y="3" rx="1"></rect>
        <rect width="7" height="7" x="14" y="14" rx="1"></rect>
        <rect width="7" height="7" x="3" y="14" rx="1"></rect>
      </svg>
    ),
    title: "Choose Your Tool",
    description: "Select the specialized engineering GPT that best matches your technical needs."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 8h14"></path>
        <path d="M5 12h14"></path>
        <path d="M5 16h14"></path>
      </svg>
    ),
    title: "Describe Your Problem",
    description: "Clearly explain your engineering challenge, providing relevant details and context."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
        <polyline points="14 2 14 8 20 8"></polyline>
      </svg>
    ),
    title: "Get Expert Analysis",
    description: "Receive detailed analysis, calculations, and engineering insights from the specialized AI."
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
      </svg>
    ),
    title: "Implement Solutions",
    description: "Apply the recommended solutions and documentation to your engineering projects."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] to-cyber-black z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-cyber-green bg-cyber-green/10 rounded-full border border-cyber-green/20">
            Simple Process
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 glow-text">
            How It Works
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Get expert engineering assistance in just a few simple steps.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="cyber-card rounded-lg p-6 h-full flex flex-col items-center text-center relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-purple flex items-center justify-center mb-4">
                  <div className="text-white">
                    {step.icon}
                  </div>
                </div>
                
                <div className="text-xl font-semibold mb-2 text-white">{step.title}</div>
                <p className="text-gray-400 text-sm">{step.description}</p>
                
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 hidden lg:block">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cyber-blue/30">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              
              <div className="absolute hidden lg:block -right-4 top-1/2 transform -translate-y-1/2 z-0">
                {index < steps.length - 1 && (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-cyber-blue/30">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
