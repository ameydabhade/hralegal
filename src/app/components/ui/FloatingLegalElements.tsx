'use client';
import { motion } from 'framer-motion';
import { Scale, Shield, FileText, Gavel, BookOpen, Award } from 'lucide-react';

const legalIcons = [Scale, Shield, FileText, Gavel, BookOpen, Award];

interface FloatingElementProps {
  index: number;
  delay?: number;
}

function FloatingElement({ index, delay = 0 }: FloatingElementProps) {
  const Icon = legalIcons[index % legalIcons.length];
  
  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      x: [0, 10, -10, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 0.95, 1],
    }
  };

  return (
    <motion.div
      className="absolute opacity-20 hover:opacity-40 transition-opacity duration-300"
      initial={{ 
        opacity: 0, 
        scale: 0,
        rotate: -180 
      }}
      animate={{ 
        opacity: 0.2, 
        scale: 1,
        rotate: 0 
      }}
      transition={{ 
        duration: 0.8, 
        delay: delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{
        scale: 1.2,
        opacity: 0.6,
        rotate: 10,
        transition: { duration: 0.2 }
      }}
      style={{
        left: `${Math.random() * 80 + 10}%`,
        top: `${Math.random() * 80 + 10}%`,
      }}
    >
      <motion.div
        variants={floatingVariants}
        animate="animate"
        transition={{
          duration: 4 + Math.random() * 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay
        }}
      >
        <Icon 
          size={24 + Math.random() * 16} 
          className="text-blue-700 drop-shadow-sm"
        />
      </motion.div>
    </motion.div>
  );
}

interface FloatingLegalElementsProps {
  count?: number;
  className?: string;
}

export function FloatingLegalElements({ 
  count = 8, 
  className = '' 
}: FloatingLegalElementsProps) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {Array.from({ length: count }, (_, i) => (
        <FloatingElement 
          key={i} 
          index={i} 
          delay={i * 0.2}
        />
      ))}
      
      {/* Ambient particles */}
      {Array.from({ length: 12 }, (_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-blue-300 rounded-full opacity-30"
          initial={{ 
            opacity: 0,
            scale: 0 
          }}
          animate={{ 
            opacity: [0, 0.5, 0],
            scale: [0, 1, 0],
            y: [0, -100],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeOut"
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: '100%',
          }}
        />
      ))}
    </div>
  );
} 