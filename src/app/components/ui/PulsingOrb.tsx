'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

interface PulsingOrbProps {
  size?: number;
  color?: string;
  className?: string;
  interactive?: boolean;
}

export function PulsingOrb({ 
  size = 120, 
  color = 'blue', 
  className = '',
  interactive = true 
}: PulsingOrbProps) {
  const [isActive, setIsActive] = useState(false);
  const [ripples, setRipples] = useState<number[]>([]);

  const handleClick = () => {
    if (!interactive) return;
    
    setIsActive(true);
    const newRipple = Date.now();
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setIsActive(false);
      setRipples(prev => prev.filter(id => id !== newRipple));
    }, 1000);
  };

  const orbVariants = {
    idle: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 0.9, 0.7],
    },
    active: {
      scale: [1, 1.2, 1],
      opacity: [0.9, 1, 0.9],
    }
  };

  return (
    <div 
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      {/* Main Orb */}
      <motion.div
        className={`absolute inset-0 rounded-full cursor-pointer bg-gradient-to-br from-${color}-400 to-${color}-600 shadow-2xl`}
        variants={orbVariants}
        animate={isActive ? 'active' : 'idle'}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        onClick={handleClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Inner glow */}
        <motion.div
          className={`absolute inset-2 rounded-full bg-gradient-to-br from-${color}-300 to-${color}-500 opacity-60`}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.6, 0.8, 0.6]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Core */}
        <motion.div
          className={`absolute inset-4 rounded-full bg-white/30 backdrop-blur-sm`}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Ripple Effects */}
      {ripples.map((rippleId) => (
        <motion.div
          key={rippleId}
          className={`absolute inset-0 rounded-full border-2 border-${color}-400`}
          initial={{ scale: 1, opacity: 0.8 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      ))}

      {/* Ambient Particles */}
      {Array.from({ length: 6 }, (_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 bg-${color}-400 rounded-full`}
          animate={{
            x: [0, Math.cos(i * 60 * Math.PI / 180) * (size * 0.8)],
            y: [0, Math.sin(i * 60 * Math.PI / 180) * (size * 0.8)],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
          style={{
            left: '50%',
            top: '50%',
            marginLeft: '-2px',
            marginTop: '-2px'
          }}
        />
      ))}
    </div>
  );
} 