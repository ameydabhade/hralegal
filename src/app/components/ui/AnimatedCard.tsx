import React from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  variant?: 'tilt' | 'glow' | 'gradient' | 'glass' | 'neon';
  className?: string;
  onClick?: () => void;
}

export function AnimatedCard({ 
  children, 
  variant = 'tilt', 
  className = '',
  onClick 
}: AnimatedCardProps) {
  const baseClasses = "relative p-6 rounded-2xl transition-all duration-300 group cursor-pointer";
  
  const variants = {
    tilt: `
      bg-white shadow-lg hover:shadow-2xl
      transform hover:-rotate-1 hover:scale-105
      border border-gray-100 hover:border-blue-200
      before:absolute before:inset-0 before:rounded-2xl
      before:bg-gradient-to-r before:from-blue-50 before:to-purple-50
      before:opacity-0 hover:before:opacity-100
      before:transition-opacity before:duration-300
      before:z-[-1]
    `,
    glow: `
      bg-white shadow-lg hover:shadow-2xl
      border border-gray-200 hover:border-blue-300
      hover:shadow-blue-500/25
      before:absolute before:inset-0 before:rounded-2xl
      before:bg-gradient-to-r before:from-blue-400/20 before:to-purple-400/20
      before:blur-xl before:opacity-0 hover:before:opacity-100
      before:transition-opacity before:duration-500
      before:z-[-1]
    `,
    gradient: `
      bg-gradient-to-br from-white to-blue-50 
      hover:from-blue-50 hover:to-purple-50
      shadow-lg hover:shadow-2xl
      border border-transparent
      bg-clip-padding
      before:absolute before:inset-0 before:rounded-2xl
      before:p-[1px] before:bg-gradient-to-r before:from-blue-500 before:to-purple-500
      before:content-[''] before:z-[-1]
      transform hover:scale-105
    `,
    glass: `
      bg-white/80 backdrop-blur-sm
      border border-white/20 shadow-lg hover:shadow-2xl
      before:absolute before:inset-0 before:rounded-2xl
      before:bg-gradient-to-br before:from-white/40 before:to-white/10
      before:border before:border-white/30
      before:backdrop-blur-sm before:z-[-1]
      transform hover:scale-105 hover:-translate-y-2
    `,
    neon: `
      bg-gray-900 text-white
      border-2 border-cyan-400 shadow-lg
      hover:shadow-cyan-400/50 hover:shadow-2xl
      before:absolute before:inset-0 before:rounded-2xl
      before:border-2 before:border-cyan-400
      before:animate-pulse before:z-[-1]
      transform hover:scale-105
      after:absolute after:inset-0 after:rounded-2xl
      after:bg-gradient-to-r after:from-cyan-400/10 after:to-purple-400/10
      after:opacity-0 hover:after:opacity-100
      after:transition-opacity after:duration-300
      after:z-[-1]
    `
  };

  const cardClasses = `${baseClasses} ${variants[variant]} ${className}`;

  return (
    <div className={cardClasses} onClick={onClick}>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
} 