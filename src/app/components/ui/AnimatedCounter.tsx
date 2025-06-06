'use client';
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  variant?: 'default' | 'glow' | 'typewriter';
}

export function AnimatedCounter({ 
  end, 
  duration = 2000, 
  suffix = '', 
  prefix = '',
  className = '',
  variant = 'default'
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setCount(Math.floor(easeOutExpo * end));

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isVisible, end, duration]);

  const getVariantClasses = () => {
    switch (variant) {
      case 'glow':
        return 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]';
      case 'typewriter':
        return 'font-mono border-r-2 border-blue-500 animate-pulse';
      default:
        return '';
    }
  };

  return (
    <div 
      ref={counterRef}
      className={`inline-block ${getVariantClasses()} ${className}`}
    >
      {prefix}{count.toLocaleString()}{suffix}
    </div>
  );
} 