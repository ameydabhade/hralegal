import React from 'react';

interface ProgressBarProps {
  progress: number; // 0-100
  variant?: 'default' | 'gradient' | 'neon' | 'legal';
  size?: 'sm' | 'md' | 'lg';
  showPercentage?: boolean;
  className?: string;
}

export function ProgressBar({ 
  progress, 
  variant = 'default', 
  size = 'md', 
  showPercentage = false,
  className = '' 
}: ProgressBarProps) {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  
  const sizeClasses = {
    sm: 'h-2',
    md: 'h-4',
    lg: 'h-6'
  };

  const getVariantClasses = () => {
    switch (variant) {
      case 'gradient':
        return {
          container: 'bg-gray-200 rounded-full overflow-hidden',
          bar: 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-full transition-all duration-700 ease-out rounded-full'
        };
      case 'neon':
        return {
          container: 'bg-gray-800 rounded-full overflow-hidden border border-cyan-400',
          bar: 'bg-gradient-to-r from-cyan-400 to-purple-500 h-full transition-all duration-700 ease-out rounded-full shadow-[0_0_20px_rgba(34,211,238,0.5)]'
        };
      case 'legal':
        return {
          container: 'bg-gray-100 rounded-full overflow-hidden border border-blue-200',
          bar: 'bg-gradient-to-r from-blue-600 to-indigo-600 h-full transition-all duration-700 ease-out rounded-full relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:translate-x-[-100%] before:animate-[shimmer_2s_infinite] before:rounded-full'
        };
      default:
        return {
          container: 'bg-gray-200 rounded-full overflow-hidden',
          bar: 'bg-blue-600 h-full transition-all duration-700 ease-out rounded-full'
        };
    }
  };

  const variantClasses = getVariantClasses();

  return (
    <div className={`relative w-full ${className}`}>
      <div className={`${variantClasses.container} ${sizeClasses[size]}`}>
        <div 
          className={variantClasses.bar}
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
      
      {showPercentage && (
        <div className="absolute right-0 -top-6 text-sm font-medium text-gray-600">
          {Math.round(clampedProgress)}%
        </div>
      )}
      
      {/* Animated pulse effect for legal variant */}
      {variant === 'legal' && clampedProgress > 0 && (
        <div 
          className="absolute top-0 left-0 h-full bg-blue-400 opacity-30 rounded-full animate-pulse"
          style={{ width: `${clampedProgress}%` }}
        />
      )}
    </div>
  );
} 