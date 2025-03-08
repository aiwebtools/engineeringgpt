
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'TRY ELECTRIC ENGINEERING GPT', url: 'https://chatgpt.com/g/g-67cbb50f1ec48191a3944e4c503fcc9d-electrical-engineering-gpt' },
    { name: 'Mechanical Engineering GPT', url: 'https://chatgpt.com/g/g-67cbb096c0f08191be55a6436a4e5313-mechanical-engineering-gpt' },
    { name: 'Civil Engineer GPT', url: 'https://chatgpt.com/g/g-67cbabcbf6988191840b58b26cdecbdd-civil-engineer-gpt' },
    { name: 'AI Software Engineer GPT', url: 'https://chatgpt.com/g/g-67cba72430b08191a43779ca0cca0e84-ai-software-engineer-gpt' },
    { name: 'PROMPT ENGINEER GPT', url: 'https://perfectpromptengine.lovable.app/' },
    { name: 'FAQ', url: '#faq' },
    { name: 'Disclaimer', url: '#disclaimer' },
    { name: 'More AI Tools', url: 'https://www.aiwebtools.ai' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-2' : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Logo className="animate-fade-in" />
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyber-blue transition-colors duration-200 rounded"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden flex items-center text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-cyber-blue" />
            ) : (
              <Menu className="h-6 w-6 text-cyber-blue" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="glass lg:hidden px-4 py-2 animate-slide-in-right">
          <nav className="flex flex-col space-y-2 py-3">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyber-blue transition-colors duration-200 rounded"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
