
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const navLinks = [
    { name: 'TRY ELECTRIC ENGINEERING GPT', url: 'https://chatgpt.com/g/g-67cbb50f1ec48191a3944e4c503fcc9d-electrical-engineering-gpt' },
    { name: 'Mechanical Engineering GPT', url: 'https://chatgpt.com/g/g-67cbb096c0f08191be55a6436a4e5313-mechanical-engineering-gpt' },
    { name: 'Civil Engineer GPT', url: 'https://chatgpt.com/g/g-67cbabcbf6988191840b58b26cdecbdd-civil-engineer-gpt' },
    { name: 'AI Software Engineer GPT', url: 'https://chatgpt.com/g/g-67cba72430b08191a43779ca0cca0e84-ai-software-engineer-gpt' },
    { name: 'Rocket Engineering GPT', url: 'https://chatgpt.com/g/g-67cdf8a38eb4819191ef22099e43f53a-rocket-engineering-gpt' },
    { name: 'PROMPT ENGINEER GPT', url: 'https://perfectpromptengine.lovable.app/' },
    { name: 'FAQ', url: '#faq' },
    { name: 'Disclaimer', url: '#disclaimer' },
  ];

  return (
    <footer className="bg-gradient-to-b from-cyber-black to-[#0a0a0a] pt-12 pb-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo className="mb-4" />
            <p className="text-gray-400 text-sm">
              Advanced AI tools for electrical, mechanical, civil, and software engineering problems.
            </p>
            <div className="pt-2">
              <a 
                href="https://www.aiwebtools.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 rounded-full glass border border-cyber-blue/50 text-sm font-medium text-cyber-blue hover:bg-cyber-blue/10 transition-all"
              >
                More AI Tools
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url}
                    target={link.url.startsWith('http') ? '_blank' : undefined}
                    rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-400 hover:text-cyber-blue text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyber-blue text-sm transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.ai/terms-of-services"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyber-blue text-sm transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="tel:4758008096"
                  className="text-gray-400 hover:text-cyber-blue text-sm transition-colors"
                >
                  (475) 800-8096
                </a>
              </li>
              <li>
                <a 
                  href="mailto:Contact@ai-webtools.com"
                  className="text-gray-400 hover:text-cyber-blue text-sm transition-colors"
                >
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            <a 
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyber-blue transition-colors"
            >
              © 2025 AI WEB TOOLS LLC All rights reserved.
            </a>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://www.aiwebtools.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyber-blue transition-colors"
            >
              <span className="sr-only">AiWebTools</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
