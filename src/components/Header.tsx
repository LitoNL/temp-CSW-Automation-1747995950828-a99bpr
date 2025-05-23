import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-100/95 backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className="font-heading text-2xl md:text-3xl tracking-wider">
            <span className="text-white">CSW</span>
            <span className="text-cyan ml-1">Automation</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#benefits" className="text-gray-300 hover:text-cyan transition">
            Benefits
          </a>
          <a href="#how-it-works" className="text-gray-300 hover:text-cyan transition">
            How It Works
          </a>
          <a href="#contact" className="btn btn-primary">
            Free Demo
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-dark-100/95 backdrop-blur-md py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a
              href="#benefits"
              className="text-gray-300 hover:text-cyan transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefits
            </a>
            <a
              href="#how-it-works"
              className="text-gray-300 hover:text-cyan transition py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#contact"
              className="btn btn-primary inline-block text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Free Demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;