
import React from 'react';
import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

const RocketEngineerSection: React.FC = () => {
  return <section className="py-20 relative overflow-hidden" id="rocket-engineering">
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] to-cyber-black z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="lg:order-1 order-2">
            <div className="cyber-card glass p-8 border border-cyber-purple/20 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyber-purple/10 blur-3xl rounded-full -mr-20 -mt-20"></div>
              
              <div className="relative">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-cyber-purple/10 rounded-xl flex items-center justify-center mr-4">
                    <Rocket className="text-cyber-purple h-6 w-6" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                    Rocket Engineering GPT
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6">
                  Access cutting-edge rocket engineering expertise with our specialized AI tool. From propulsion systems and aerodynamics to mission planning and spacecraft design, get comprehensive assistance for all aerospace engineering challenges.
                </p>
                
                <ul className="space-y-3 mb-6">
                  {['Propulsion system design and optimization', 'Aerodynamic analysis and modeling', 'Structural engineering for aerospace applications', 'Mission planning and trajectory calculations', 'Thermal management in rocket systems', 'Payload integration and spacecraft design'].map((feature, index) => <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-cyber-purple/20 flex items-center justify-center mt-1">
                        <div className="w-2 h-2 rounded-full bg-cyber-purple"></div>
                      </div>
                      <span className="ml-3 text-gray-300 text-sm">{feature}</span>
                    </li>)}
                </ul>
                
                <a href="https://chatgpt.com/g/g-67cdf8a38eb4819191ef22099e43f53a-rocket-engineering-gpt" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-5 py-2.5 rounded-lg bg-cyber-purple/10 text-cyber-purple border border-cyber-purple/30 hover:bg-cyber-purple/20 transition-all duration-300">
                  <span>Try Rocket Engineering GPT</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }} className="lg:order-2 order-1">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-cyber-purple/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-cyber-blue/20 rounded-full filter blur-3xl"></div>
              
              <div className="relative bg-[#0a0a0a] border border-gray-800 rounded-xl p-4 backdrop-blur-sm">
                <div className="aspect-square w-full h-auto bg-gradient-to-br from-[#0a0a0a] to-[#131313] rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative p-6 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/20 to-cyber-blue/20 rounded-full blur-xl"></div>
                      <Rocket className="w-28 h-28 text-white" />
                    </div>
                  </div>
                  
                  <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-cyber-purple/5 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-cyber-blue/5 to-transparent"></div>
                </div>
                
                <div className="mt-4 space-y-2">
                  <div className="h-2 bg-gray-800/50 rounded-full w-full"></div>
                  <div className="h-2 bg-gray-800/50 rounded-full w-3/4"></div>
                  <div className="h-2 bg-gray-800/50 rounded-full w-1/2"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};

export default RocketEngineerSection;
