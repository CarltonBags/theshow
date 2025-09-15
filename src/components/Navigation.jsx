import { useState } from 'react';
import degenzLogo from '../assets/degenz-logo.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'EPISODES', href: '#episodes' },
    { name: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (href) => {
    if (href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary border-b-4 border-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src={degenzLogo} 
              alt="DEGENZ" 
              className="h-12 cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => scrollToSection('#home')}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="font-fredoka font-bold text-primary hover:text-secondary transition-colors duration-300 text-lg hover:scale-105 transform"
              >
                {item.name}
              </button>
            ))}
            <button 
              onClick={() => window.open('https://twitter.com/DegenzTheShow', '_blank')}
              className="cartoon-button bg-secondary text-black"
            >
              TWITTER
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="cartoon-button bg-primary text-primary-foreground px-4 py-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={3} 
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-background border-t-4 border-black py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="font-fredoka font-bold text-primary hover:text-secondary transition-colors duration-300 text-lg text-center py-2"
                >
                  {item.name}
                </button>
              ))}
              <button 
                onClick={() => {
                  window.open('https://twitter.com/DegenzTheShow', '_blank');
                  setIsOpen(false);
                }}
                className="cartoon-button bg-secondary text-black mx-4"
              >
                TWITTER
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;