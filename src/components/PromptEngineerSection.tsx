
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Code } from 'lucide-react';

const PromptEngineerSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#080808] to-cyber-black z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <div className="inline-block px-3 py-1 mb-6 text-xs font-medium text-cyber-purple bg-cyber-purple/10 rounded-full border border-cyber-purple/20">
            NEW TOOL
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 glow-text">PROMPT ENGINEER GPT</h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            Craft perfect prompts for any AI system with our advanced prompt engineering tool. Design, test, and optimize your prompts for maximum effectiveness.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="cyber-card rounded-lg h-full p-8 border border-cyber-purple/30 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 text-cyber-purple opacity-5 blur-3xl rounded-full -mr-20 -mt-20 transform rotate-45"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="relative overflow-hidden rounded-full w-14 h-14 flex items-center justify-center mr-4">
                  <div className="absolute inset-0 bg-cyber-purple opacity-10 rounded-full"></div>
                  <div className="text-cyber-purple text-3xl">
                    <MessageSquare size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white">Master AI Communication</h3>
              </div>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 mr-2 text-cyber-purple">✓</span>
                  <span>Learn prompt engineering techniques and best practices</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 mr-2 text-cyber-purple">✓</span>
                  <span>Understand AI model capabilities and limitations</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 mr-2 text-cyber-purple">✓</span>
                  <span>Perfect your prompts for consistent, high-quality results</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="cyber-card rounded-lg h-full p-8 border border-cyber-purple/30 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 text-cyber-purple opacity-5 blur-3xl rounded-full -mr-20 -mt-20 transform rotate-45"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="relative overflow-hidden rounded-full w-14 h-14 flex items-center justify-center mr-4">
                  <div className="absolute inset-0 bg-cyber-purple opacity-10 rounded-full"></div>
                  <div className="text-cyber-purple text-3xl">
                    <Code size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white">Optimize Your Workflows</h3>
              </div>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 mr-2 text-cyber-purple">✓</span>
                  <span>Design structured prompts for complex tasks</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 mr-2 text-cyber-purple">✓</span>
                  <span>Generate templates for repetitive workflows</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-5 h-5 mr-2 text-cyber-purple">✓</span>
                  <span>Troubleshoot and refine prompts for better outcomes</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a 
            href="https://perfectpromptengine.lovable.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-cyber-purple text-white hover:bg-cyber-purple/90 transition-all duration-300"
          >
            <span className="mr-2">Try PROMPT ENGINEER GPT</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PromptEngineerSection;
