'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, Search, Scale, CheckCircle, Users, Award } from 'lucide-react';

const legalSteps = [
  { icon: FileText, title: "Consultation", description: "Initial case review" },
  { icon: Search, title: "Research", description: "Legal analysis" },
  { icon: Scale, title: "Strategy", description: "Case planning" },
  { icon: Users, title: "Execution", description: "Legal action" },
  { icon: CheckCircle, title: "Resolution", description: "Case closure" },
  { icon: Award, title: "Success", description: "Outcome delivery" }
];

interface ProcessStepProps {
  step: typeof legalSteps[0];
  index: number;
  isActive: boolean;
  isCompleted: boolean;
  onClick: () => void;
}

function ProcessStep({ step, index, isActive, isCompleted, onClick }: ProcessStepProps) {
  const Icon = step.icon;
  
  return (
    <motion.div
      className="relative flex flex-col items-center cursor-pointer group"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >

      
      {/* Step Circle */}
      <motion.div
        className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
          isActive ? 'bg-blue-600 shadow-lg shadow-blue-600/25' :
          isCompleted ? 'bg-green-500' : 'bg-gray-300'
        }`}
        animate={{
          scale: isActive ? [1, 1.1, 1] : 1,
          boxShadow: isActive ? [
            "0 0 0 0 rgba(59, 130, 246, 0.5)",
            "0 0 0 10px rgba(59, 130, 246, 0)",
            "0 0 0 0 rgba(59, 130, 246, 0)"
          ] : "0 0 0 0 rgba(59, 130, 246, 0)"
        }}
        transition={{
          duration: 1.5,
          repeat: isActive ? Infinity : 0,
          ease: "easeInOut"
        }}
      >
        <Icon 
          size={20} 
          className={`transition-colors duration-300 ${
            isActive || isCompleted ? 'text-white' : 'text-gray-600'
          }`}
        />
      </motion.div>
      
      {/* Step Label */}
      <motion.div
        className="mt-3 text-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <h4 className={`text-sm font-semibold transition-colors duration-300 ${
          isActive ? 'text-blue-600' : 'text-gray-700'
        }`}>
          {step.title}
        </h4>
        <p className="text-xs text-gray-500 mt-1 group-hover:text-gray-700 transition-colors">
          {step.description}
        </p>
      </motion.div>
      
      {/* Active indicator */}
      {isActive && (
        <motion.div
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
        </motion.div>
      )}
    </motion.div>
  );
}

interface AnimatedLegalProcessProps {
  autoPlay?: boolean;
  className?: string;
}

export function AnimatedLegalProcess({ 
  autoPlay = true, 
  className = '' 
}: AnimatedLegalProcessProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  // Auto-play animation
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      setActiveStep(prev => {
        const next = (prev + 1) % legalSteps.length;
        if (next === 0) {
          setCompletedSteps([]);
        } else {
          setCompletedSteps(prevCompleted => [...new Set([...prevCompleted, prev])]);
        }
        return next;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setCompletedSteps(Array.from({ length: index }, (_, i) => i));
  };

  return (
    <motion.div
      className={`w-full ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Our Legal Process</h3>
        <p className="text-gray-600 text-sm">From consultation to successful resolution</p>
      </div>
      
      <div className="relative max-w-5xl mx-auto">
        <div className="grid grid-cols-6 gap-4 items-start">
          {legalSteps.map((step, index) => (
            <ProcessStep
              key={index}
              step={step}
              index={index}
              isActive={activeStep === index}
              isCompleted={completedSteps.includes(index)}
              onClick={() => handleStepClick(index)}
            />
          ))}
        </div>
        
        {/* Progress Bar Background */}
        <div className="absolute top-6 left-12 right-12 h-0.5 bg-gray-200 -z-10"></div>
        
        {/* Animated Progress Bar */}
        <motion.div
          className="absolute top-6 left-12 h-0.5 bg-blue-600 -z-10"
          initial={{ width: "0%" }}
          animate={{ 
            width: `${(completedSteps.length / (legalSteps.length - 1)) * 100}%` 
          }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            maxWidth: "calc(100% - 96px)"
          }}
        />
      </div>
      
      {/* Current Step Details */}
      <motion.div
        className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100"
        key={activeStep}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center gap-3 mb-2">
          {(() => {
            const StepIcon = legalSteps[activeStep].icon;
            return <StepIcon className="w-6 h-6 text-blue-600" />;
          })()}
          <h4 className="text-lg font-semibold text-gray-900">
            {legalSteps[activeStep].title}
          </h4>
        </div>
        <p className="text-gray-700">
          {legalSteps[activeStep].description}
        </p>
      </motion.div>
    </motion.div>
  );
} 