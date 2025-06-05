'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const integrations = [
  { name: 'Microsoft', logo: 'https://logo.clearbit.com/microsoft.com?size=500' },
  { name: 'Stripe', logo: 'https://logo.clearbit.com/stripe.com?size=500' },
  { name: 'Google', logo: 'https://logo.clearbit.com/google.com?size=500' },
  { name: 'Zapier', logo: 'https://logo.clearbit.com/zapier.com?size=500' },
  { name: 'Slack', logo: 'https://logo.clearbit.com/slack.com?size=500' },
  { name: 'PayPal', logo: 'https://logo.clearbit.com/paypal.com?size=500' },
  { name: 'Notion', logo: 'https://logo.clearbit.com/notion.so?size=500' },
  { name: 'Dropbox', logo: 'https://logo.clearbit.com/dropbox.com?size=500' },
  { name: 'GitHub', logo: 'https://logo.clearbit.com/github.com?size=500' },
];

export default function IntegrationSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section id="integrations" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative">
      <div className="max-w-6xl mx-auto px-4 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm mb-6">
            <span className="text-sm font-medium text-gray-700">Integrations</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
            Powerful Integrations, Effortless Setup
          </h2>
        </div>

        {/* Integration Circle */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative w-96 h-96 mx-auto">
            {/* Background Circle with Gradient */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-blue-100/50 to-transparent"></div>
            
            {/* Integration Logos */}
            {integrations.map((integration, index) => {
              const angle = (index * 360) / integrations.length;
              const radius = 180;
              const x = Math.cos((angle - 90) * (Math.PI / 180)) * radius;
              const y = Math.sin((angle - 90) * (Math.PI / 180)) * radius;
              
              return (
                <div
                  key={integration.name}
                  className="absolute w-20 h-20 transform -translate-x-1/2 -translate-y-1/2 group"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    animation: `float-${index} 6s ease-in-out infinite`,
                    animationDelay: `${index * 0.3}s`,
                  }}
                >
                  <div className="w-full h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-3 group-hover:scale-110">
                    <div className="relative w-full h-full">
                      <Image
                        src={integration.logo}
                        alt={`${integration.name} logo`}
                        fill
                        className="object-contain rounded-lg"
                        sizes="80px"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
            
            {/* Center Element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full shadow-lg flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-blue-600">L</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float-0 { 0%, 100% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); } 50% { transform: translate(-50%, -50%) translateY(-10px) rotate(5deg); } }
        @keyframes float-1 { 0%, 100% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); } 50% { transform: translate(-50%, -50%) translateY(-8px) rotate(-3deg); } }
        @keyframes float-2 { 0%, 100% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); } 50% { transform: translate(-50%, -50%) translateY(-12px) rotate(7deg); } }
        @keyframes float-3 { 0%, 100% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); } 50% { transform: translate(-50%, -50%) translateY(-6px) rotate(-5deg); } }
        @keyframes float-4 { 0%, 100% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); } 50% { transform: translate(-50%, -50%) translateY(-14px) rotate(4deg); } }
        @keyframes float-5 { 0%, 100% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); } 50% { transform: translate(-50%, -50%) translateY(-9px) rotate(-6deg); } }
        @keyframes float-6 { 0%, 100% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); } 50% { transform: translate(-50%, -50%) translateY(-11px) rotate(8deg); } }
        @keyframes float-7 { 0%, 100% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); } 50% { transform: translate(-50%, -50%) translateY(-7px) rotate(-4deg); } }
        @keyframes float-8 { 0%, 100% { transform: translate(-50%, -50%) translateY(0px) rotate(0deg); } 50% { transform: translate(-50%, -50%) translateY(-13px) rotate(6deg); } }
      `}</style>
    </section>
  );
} 