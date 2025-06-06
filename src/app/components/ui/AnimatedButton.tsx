import React from 'react';
import Link from 'next/link';

interface AnimatedButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'glow' | 'magnetic' | 'morphing';
  onClick?: () => void;
  href?: string;
  className?: string;
}

export function AnimatedButton({ 
  children, 
  variant = 'primary', 
  onClick, 
  href, 
  className = '' 
}: AnimatedButtonProps) {
  const baseClasses = "relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white rounded-[32px] transition-all duration-300 overflow-hidden group";
  
  const variants = {
    primary: `
      bg-gradient-to-r from-blue-600 to-blue-700 
      hover:from-blue-700 hover:to-blue-800 
      shadow-lg hover:shadow-2xl 
      transform hover:-translate-y-1 
      before:absolute before:inset-0 
      before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent 
      before:translate-x-[-100%] hover:before:translate-x-[100%] 
      before:transition-transform before:duration-700
    `,
    secondary: `
      bg-transparent border-2 border-blue-600 text-blue-600
      hover:bg-blue-600 hover:text-white hover:border-blue-700
      before:absolute before:inset-0 before:bg-blue-600 
      before:scale-x-0 hover:before:scale-x-100 
      before:origin-left before:transition-transform before:duration-300
      before:z-[-1]
    `,
    glow: `
      bg-gradient-to-r from-purple-500 to-pink-500
      hover:from-purple-600 hover:to-pink-600
      shadow-lg hover:shadow-purple-500/25
      before:absolute before:inset-0 before:rounded-[32px]
      before:p-[2px] before:bg-gradient-to-r before:from-purple-400 before:to-pink-400
      before:content-[''] before:z-[-1] before:animate-pulse
    `,
    magnetic: `
      bg-gradient-to-r from-indigo-500 to-blue-600
      hover:from-indigo-600 hover:to-blue-700
      shadow-xl hover:shadow-2xl
      transition-all duration-200 ease-out
      hover:scale-105 active:scale-95
    `,
    morphing: `
      bg-gradient-to-r from-emerald-500 to-teal-600
      hover:from-emerald-600 hover:to-teal-700
      rounded-full hover:rounded-[32px]
      transition-all duration-500 ease-in-out
      transform hover:rotate-3 hover:scale-110
    `
  };

  const buttonClasses = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        <span className="relative z-10">{children}</span>
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      <span className="relative z-10">{children}</span>
    </button>
  );
} 