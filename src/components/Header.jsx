import React from 'react';

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-cream/95 backdrop-blur-sm z-50 border-b border-warm-gray/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-warm-gray/30 flex items-center justify-center">
              <span className="text-sm font-semibold text-dark-text">LOGO</span>
            </div>
            <h1 className="text-2xl font-bold text-dark-text tracking-tight">RE-LIFE</h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-dark-text hover:text-warm-gray transition-colors font-medium"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-dark-text hover:text-warm-gray transition-colors font-medium"
            >
              How it works
            </button>
            <button 
              onClick={() => scrollToSection('technology')}
              className="text-dark-text hover:text-warm-gray transition-colors font-medium"
            >
              Technology
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-dark-text hover:text-warm-gray transition-colors font-medium"
            >
              contact
            </button>
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-dark-text hover:text-warm-gray transition-colors font-medium"
            >
              Get started
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
