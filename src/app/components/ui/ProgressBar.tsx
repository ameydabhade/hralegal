'use client';
import React, { useState, useEffect, useRef } from 'react';

interface ProgressBarProps {
  progress: number;
  duration?: number;
  height?: string;
  className?: string;
  variant?: 'default' | 'gradient' | 'animated' | 'glow';
  showPercentage?: boolean;
  color?: string;
}

export function ProgressBar({
  progress,
  duration = 1000,
  height = 'h-2',
  className = '',
  variant = 'default',
  showPercentage = false,
  color = 'bg-blue-600'
}: ProgressBarProps) {
  const [currentProgress, setCurrentProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progressValue = Math.min((elapsed / duration) * progress, progress);
      
      setCurrentProgress(progressValue);

      if (progressValue < progress) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, progress, duration]);

  const variants = {
    default: `${color}`,
    gradient: 'bg-gradient-to-r from-blue-500 to-purple-600',
    animated: `${color} animate-pulse`,
    glow: `${color} shadow-lg`
  };

  return (
    <div ref={progressRef} className={`w-full ${className}`}>
      {showPercentage && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">Progress</span>
          <span className="text-sm font-medium text-gray-700">
            {Math.round(currentProgress)}%
          </span>
        </div>
      )}
      <div className={`w-full bg-gray-200 rounded-full ${height} overflow-hidden`}>
        <div
          className={`${height} rounded-full transition-all duration-300 ease-out ${variants[variant]}`}
          style={{ width: `${currentProgress}%` }}
        />
      </div>
    </div>
  );
} 