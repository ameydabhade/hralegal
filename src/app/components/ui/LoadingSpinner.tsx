import React from 'react';

interface LoadingSpinnerProps {
  variant?: 'dots' | 'bars' | 'pulse' | 'legal' | 'gradient';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function LoadingSpinner({ 
  variant = 'dots', 
  size = 'md', 
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  if (variant === 'dots') {
    return (
      <div className={`flex space-x-1 ${className}`}>
        <div className={`${sizeClasses[size]} bg-blue-600 rounded-full animate-bounce`} style={{ animationDelay: '0ms' }}></div>
        <div className={`${sizeClasses[size]} bg-blue-600 rounded-full animate-bounce`} style={{ animationDelay: '150ms' }}></div>
        <div className={`${sizeClasses[size]} bg-blue-600 rounded-full animate-bounce`} style={{ animationDelay: '300ms' }}></div>
      </div>
    );
  }

  if (variant === 'bars') {
    return (
      <div className={`flex space-x-1 ${className}`}>
        <div className={`w-1 ${sizeClasses[size]} bg-blue-600 animate-pulse`} style={{ animationDelay: '0ms' }}></div>
        <div className={`w-1 ${sizeClasses[size]} bg-blue-600 animate-pulse`} style={{ animationDelay: '150ms' }}></div>
        <div className={`w-1 ${sizeClasses[size]} bg-blue-600 animate-pulse`} style={{ animationDelay: '300ms' }}></div>
        <div className={`w-1 ${sizeClasses[size]} bg-blue-600 animate-pulse`} style={{ animationDelay: '450ms' }}></div>
      </div>
    );
  }

  if (variant === 'pulse') {
    return (
      <div className={`${sizeClasses[size]} relative ${className}`}>
        <div className="w-full h-full bg-blue-600 rounded-full animate-ping absolute"></div>
        <div className="w-full h-full bg-blue-700 rounded-full animate-pulse"></div>
      </div>
    );
  }

  if (variant === 'legal') {
    return (
      <div className={`relative ${sizeClasses[size]} ${className}`}>
        <div className="absolute inset-0 border-2 border-blue-600 rounded-full animate-spin"></div>
        <div className="absolute inset-2 border-2 border-purple-600 rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
        <div className="absolute inset-4 bg-blue-600 rounded-full animate-pulse"></div>
      </div>
    );
  }

  if (variant === 'gradient') {
    return (
      <div className={`${sizeClasses[size]} relative ${className}`}>
        <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 animate-spin">
          <div className="absolute inset-2 bg-white rounded-full"></div>
        </div>
      </div>
    );
  }

  return null;
} 