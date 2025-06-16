import React from 'react';

const Logo = ({ className = '', size = 'md', dark = false }) => {
  const sizes = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-20',
  };

  const textColor = dark ? 'text-white' : 'text-black';
  
  return (
    <div className={`flex items-center ${sizes[size]} ${className}`}>
      <div className="relative h-full w-auto">
        <div className="absolute inset-0 rounded-full bg-primary"></div>
        <div className="relative flex items-center justify-center h-full w-full text-white font-bold text-xl">
          EJ
        </div>
      </div>
      <span className={`ml-3 font-display font-bold text-2xl ${textColor}`}>
        ESPRESSO JOINT
      </span>
    </div>
  );
};

export default Logo;
