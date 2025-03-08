
import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', iconOnly = false }) => {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-full flex items-center justify-center animate-pulse-glow">
          <div className="w-8 h-8 bg-cyber-black rounded-full flex items-center justify-center">
            <div className="text-cyber-blue font-bold text-xl">E</div>
          </div>
        </div>
        <div className="absolute inset-0 w-10 h-10 rounded-full bg-gradient-to-br from-cyber-blue to-cyber-purple opacity-50 blur-sm animate-pulse-glow"></div>
      </div>
      
      {!iconOnly && (
        <div className="ml-3">
          <div className="font-display font-bold text-lg text-white">
            ENGINEERING <span className="text-cyber-blue">GPTs</span>
          </div>
          <div className="text-[10px] text-gray-400 -mt-1">
            Presented by <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-cyber-blue hover:text-cyber-purple transition-colors">AiWebTools.Ai</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
