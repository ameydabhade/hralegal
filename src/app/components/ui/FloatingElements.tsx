import React from 'react';

interface FloatingElementsProps {
  variant?: 'circles' | 'squares' | 'mixed' | 'legal';
  count?: number;
  className?: string;
}

export function FloatingElements({ 
  variant = 'circles', 
  count = 6,
  className = '' 
}: FloatingElementsProps) {
  const elements = Array.from({ length: count }, (_, i) => i);

  const getElementStyle = (index: number) => {
    const delay = index * 0.5;
    const duration = 3 + (index % 3);
    const size = 20 + (index % 40);
    
    return {
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`,
      width: `${size}px`,
      height: `${size}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
    };
  };

  const variants = {
    circles: 'rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-20',
    squares: 'rounded-lg bg-gradient-to-r from-emerald-400 to-teal-400 opacity-20 rotate-45',
    mixed: `rounded-${Math.random() > 0.5 ? 'full' : 'lg'} bg-gradient-to-r from-pink-400 to-rose-400 opacity-20`,
    legal: 'rounded-lg bg-gradient-to-r from-blue-500 to-indigo-500 opacity-10'
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((index) => (
        <div
          key={index}
          className={`absolute animate-bounce ${variants[variant]}`}
          style={getElementStyle(index)}
        />
      ))}
      
      {/* Additional animated elements for legal theme */}
      {variant === 'legal' && (
        <>
          <div className="absolute top-1/4 left-1/4 w-16 h-16 border-2 border-blue-300 opacity-20 rounded-full animate-spin" 
               style={{ animationDuration: '8s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-12 h-12 border-2 border-indigo-300 opacity-20 rounded-lg animate-pulse" />
          <div className="absolute top-3/4 left-3/4 w-8 h-8 bg-blue-400 opacity-20 rounded-full animate-ping" />
        </>
      )}
    </div>
  );
}

export function ParticleBackground({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 blur-3xl animate-pulse" 
           style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-10 blur-3xl animate-pulse" 
           style={{ animationDelay: '4s' }} />
      
      {/* Moving particles */}
      <FloatingElements variant="legal" count={8} />
    </div>
  );
} 