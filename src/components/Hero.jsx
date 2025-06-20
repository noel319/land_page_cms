import React from 'react';
import { useContent } from '../hooks/useContent';
import Logo from './Logo';

const StyledWord = ({ children }) => (
  <span className="relative inline-block">
    <span className="relative z-10">{children}</span>
    <span 
      className="absolute inset-0 text-transparent"
      style={{
        WebkitTextStroke: '2px #ff0000',
        textShadow: `1px 1px 0 #000, 2px 2px 0 #000, 3px 3px 0 #ff0000`,
        transform: 'translate(1px, 1px)',
        zIndex: 1,
        display: 'inline-block'
      }}
      aria-hidden="true"
    >
      {children}
    </span>
  </span>
);

export default function Hero() {
  const { content, loading, error } = useContent('/content/hero.json');

  if (loading) return <div className="min-h-[45vh] bg-black flex items-center justify-center"><div className="text-white">Loading...</div></div>;
  if (error) return <div className="min-h-[45vh] bg-black flex items-center justify-center"><div className="text-white">Error loading content</div></div>;

  return (
    <header className="relative min-h-[45vh] flex flex-col items-center justify-center bg-black text-white text-center px-6 pt-24 pb-12">
      <div className="absolute inset-0 w-full h-full -z-10" />
      <div className="max-w-5xl mx-auto w-full px-4">
        <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider text-white mb-6 leading-tight">
          {content?.title?.split(' ').map((word, index) => 
            word === 'coffee' || word === 'food' ? (
              <StyledWord key={index}>{word}</StyledWord>
            ) : (
              <span key={index}>{word} </span>
            )
          )}
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-normal font-normal tracking-wide">
          {content?.subtitle}
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#menu" 
            className="inline-block px-8 py-3.5 bg-primary hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 text-base tracking-wider uppercase"
            style={{ letterSpacing: '0.2em', fontWeight: 600 }}
          >
            {content?.primaryButton}
          </a>
          <a 
            href="#locations" 
            className="inline-block px-8 py-3.5 bg-transparent border-2 border-white hover:bg-white/10 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 text-base tracking-wider uppercase"
            style={{ letterSpacing: '0.2em', fontWeight: 600 }}
          >
            {content?.secondaryButton}
          </a>
        </div>
      </div>
    </header>
  );
}