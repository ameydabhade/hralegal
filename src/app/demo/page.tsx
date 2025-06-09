'use client';
import { useState } from 'react';
import HeroSectionOption1 from '../components/HeroSection'; // Sage Green (current default)
import HeroSectionOption2 from '../components/HeroSection-Option2'; // Lavender
import HeroSectionOption3 from '../components/HeroSection-Option3'; // Peach

export default function DemoPage() {
  const [selectedOption, setSelectedOption] = useState<1 | 2 | 3>(1);

  const options = [
    {
      id: 1,
      name: 'Sage Green & Cream',
      description: 'Nature-inspired, calming palette that conveys trust and stability',
      colors: ['#546349', '#6a7a60', '#87967f', '#adb8a9'],
      component: HeroSectionOption1
    },
    {
      id: 2,
      name: 'Lavender & Soft Gray',
      description: 'Sophisticated, modern palette that conveys elegance and professionalism',
      colors: ['#775a8a', '#8a6ba4', '#a287bd', '#bda8d1'],
      component: HeroSectionOption2
    },
    {
      id: 3,
      name: 'Warm Peach & Beige',
      description: 'Warm, approachable palette that maintains professionalism while being inviting',
      colors: ['#b6472a', '#da5a37', '#ec6f42', '#f2916a'],
      component: HeroSectionOption3
    }
  ];

  const SelectedComponent = options.find(opt => opt.id === selectedOption)?.component || HeroSectionOption1;

  return (
    <div className="min-h-screen">
      {/* Color Scheme Selector */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-[100] bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-xl p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4 text-center">Choose Your Color Scheme</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {options.map((option) => (
            <button
              key={option.id}
              onClick={() => setSelectedOption(option.id as 1 | 2 | 3)}
              className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                selectedOption === option.id
                  ? 'border-gray-900 bg-gray-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="text-left space-y-2">
                <h3 className="font-semibold text-sm text-gray-900">{option.name}</h3>
                <p className="text-xs text-gray-600 leading-tight">{option.description}</p>
                <div className="flex gap-1">
                  {option.colors.map((color, index) => (
                    <div
                      key={index}
                      className="w-6 h-6 rounded-full border border-gray-200"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            Currently viewing: <span className="font-semibold">{options.find(opt => opt.id === selectedOption)?.name}</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="pt-40">
        <SelectedComponent />
      </div>
    </div>
  );
} 