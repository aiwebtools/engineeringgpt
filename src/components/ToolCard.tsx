
import React from 'react';
import { motion } from 'framer-motion';

interface ToolCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  url: string;
  delay?: number;
}

const ToolCard: React.FC<ToolCardProps> = ({ 
  title, 
  description, 
  icon, 
  color, 
  url,
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <a 
        href={url}
        target="_blank"
        rel="noopener noreferrer" 
        className="block h-full"
      >
        <div className="cyber-card rounded-lg h-full p-6 border border-gray-800 hover:border-opacity-0 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 overflow-hidden group">
          <div className="relative overflow-hidden rounded-full w-14 h-14 mb-6 flex items-center justify-center">
            <div className={`absolute inset-0 opacity-10 ${color} rounded-full`}></div>
            <div className={`${color} text-3xl`}>
              {icon}
            </div>
          </div>
          
          <h3 className={`text-xl font-semibold mb-3 text-white group-hover:${color} transition-colors`}>
            {title}
          </h3>
          
          <p className="text-gray-400 mb-4 text-sm">
            {description}
          </p>
          
          <div className={`flex items-center text-sm ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-auto`}>
            <span>Try it now</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
          
          <div className={`absolute top-0 right-0 w-40 h-40 ${color} opacity-5 blur-3xl rounded-full -mr-20 -mt-20 transform rotate-45 group-hover:opacity-10 transition-opacity duration-300`}></div>
        </div>
      </a>
    </motion.div>
  );
};

export default ToolCard;
