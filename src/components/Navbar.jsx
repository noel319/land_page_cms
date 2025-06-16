import React, { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navBackground = scrolled 
    ? 'bg-white/90 backdrop-blur-sm shadow-md' 
    : 'bg-transparent';
  const textColor = scrolled ? 'text-dark' : 'text-white';

  return (
    <nav className={`fixed top-0 w-full ${navBackground} ${textColor} transition-all duration-300 flex items-center justify-between px-6 py-4 z-50`}>
      <Logo dark={!scrolled} size="md" />
      
      <button 
        className="md:hidden p-2 focus:outline-none" 
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className="material-icons text-2xl">{open ? 'close' : 'menu'}</span>
      </button>
      
      <ul className={`md:flex items-center gap-8 font-medium ${open 
        ? 'absolute top-full left-0 w-full bg-white text-dark p-6 shadow-lg' 
        : 'hidden md:flex'} ${textColor}`}>
        <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
        <li><a href="#menu" className="hover:text-primary transition-colors">Menu</a></li>
        <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
        <li className="mt-4 md:mt-0 md:ml-4">
          <a 
            href="#order" 
            className="bg-primary hover:bg-red-700 text-white px-6 py-2 rounded-full transition-colors inline-block"
          >
            Order Online
          </a>
        </li>
      </ul>
    </nav>
  );
}
