
import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  const toggleMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const navLinks = [
    { name: 'TRY ELECTRIC ENGINEERING GPT', url: 'https://chatgpt.com/g/g-67cbb50f1ec48191a3944e4c503fcc9d-electrical-engineering-gpt' },
    { name: 'Mechanical Engineering GPT', url: 'https://chatgpt.com/g/g-67cbb096c0f08191be55a6436a4e5313-mechanical-engineering-gpt' },
    { name: 'Civil Engineer GPT', url: 'https://chatgpt.com/g/g-67cbabcbf6988191840b58b26cdecbdd-civil-engineer-gpt' },
    { name: 'AI Software Engineer GPT', url: 'https://chatgpt.com/g/g-67cba72430b08191a43779ca0cca0e84-ai-software-engineer-gpt' },
    { name: 'Rocket Engineering GPT', url: 'https://chatgpt.com/g/g-67cdf8a38eb4819191ef22099e43f53a-rocket-engineering-gpt' },
    { name: 'PROMPT ENGINEER GPT', url: 'https://perfectpromptengine.lovable.app/' },
    { name: 'FAQ', url: '#faq' },
    { name: 'Disclaimer', url: '#disclaimer' },
    { name: 'More AI Tools', url: 'https://aiwebtools.lovable.app/?via=aiwebtools' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-2' : 'py-3 sm:py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Logo className="animate-fade-in" />
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center flex-wrap justify-end gap-0.5">
            {navLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium text-gray-300 hover:text-cyber-blue transition-colors duration-200 rounded whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md active:bg-white/10 touch-manipulation"
            onClick={toggleMenu}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-cyber-blue" />
            ) : (
              <Menu className="h-6 w-6 text-cyber-blue" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation - full screen overlay */}
      <div 
        className={`lg:hidden fixed inset-0 top-[56px] bg-cyber-black/98 backdrop-blur-md transition-all duration-200 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <nav className="flex flex-col px-4 py-4 overflow-y-auto max-h-[calc(100vh-56px)]">
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="px-4 py-3.5 text-base font-medium text-gray-300 hover:text-cyber-blue active:text-cyber-blue transition-colors duration-150 rounded-lg hover:bg-white/5 active:bg-white/10 touch-manipulation border-b border-white/5 last:border-b-0"
              onClick={closeMenu}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
