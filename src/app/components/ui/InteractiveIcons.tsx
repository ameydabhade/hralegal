'use client';
import { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface InteractiveIconProps {
  children: React.ReactNode;
  className?: string;
  magneticStrength?: number;
}

export function InteractiveIcon({ 
  children, 
  className = '', 
  magneticStrength = 0.3 
}: InteractiveIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!ref.current || !isHovered) return;
      
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (event.clientX - centerX) * magneticStrength;
      const deltaY = (event.clientY - centerY) * magneticStrength;
      
      x.set(deltaX);
      y.set(deltaY);
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [isHovered, magneticStrength, x, y]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`cursor-pointer ${className}`}
      style={{ x: springX, y: springY }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        animate={{
          rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
        }}
        transition={{
          duration: 0.5,
          ease: "easeInOut"
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
} 