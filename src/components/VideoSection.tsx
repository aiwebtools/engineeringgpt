
import React from 'react';
import { motion } from 'framer-motion';

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black to-[#080808] z-0"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 glow-text">
            See ENGINEERING GPTs in Action
          </h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
            Watch how these powerful engineering AI tools can solve complex problems and assist with technical documentation.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto relative overflow-hidden rounded-xl"
        >
          <div className="absolute inset-0 cyber-border z-0"></div>
          
          <div className="relative w-full h-full bg-black flex items-center justify-center">
            <img 
              src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-advertisement-for-engineering-_hEePg.png/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1200,cg:true" 
              alt="Engineering GPTs Advertisement" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
