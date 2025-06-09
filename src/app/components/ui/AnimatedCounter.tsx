'use client';
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  end: number;
  start?: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  variant?: 'default' | 'glow' | 'bounce' | 'fade';
  trigger?: boolean;
}

export function AnimatedCounter({
  end,
  start = 0,
  duration = 2000,
  suffix = '',
  prefix = '',
  className = '',
  variant = 'default',
  trigger = true
}: AnimatedCounterProps) {
  const [count, setCount] = useState(start);
  const [isVisible, setIsVisible] = useState(false);
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && trigger) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [trigger]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(start + (end - start) * easeOutQuart);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, start, end, duration]);

  const variants = {
    default: 'transition-all duration-300',
    glow: `
      transition-all duration-300 
      text-shadow-lg hover:scale-105
      before:absolute before:inset-0 before:blur-xl before:opacity-30
      before:bg-gradient-to-r before:from-current before:to-current
      relative inline-block
    `,
    bounce: `
      transition-all duration-300 
      hover:animate-bounce
      transform hover:scale-110
    `,
    fade: `
      transition-all duration-500
      hover:opacity-80
    `
  };

  return (
    <div
      ref={countRef}
      className={`${variants[variant]} ${className} font-bold`}
    >
      <span className="relative z-10">
        {prefix}{count.toLocaleString()}{suffix}
      </span>
    </div>
  );
} 