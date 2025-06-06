import Link from 'next/link';
import { Scale, Shield, Users, Award, Sparkles } from 'lucide-react';
import { 
  AnimatedButton, 
  AnimatedCard, 
  ParticleBackground, 
  AnimatedCounter, 
  TypewriterText,
  InteractiveIcon,
  FloatingLegalElements,
  PulsingOrb,
  AnimatedLegalProcess
} from './ui';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <ParticleBackground />
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Hero Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Professional Legal<br />
                  <TypewriterText 
                    texts={["Excellence", "Solutions", "Results"]}
                    className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 bg-clip-text text-transparent"
                    speed={150}
                  />
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                HRA Legal is a specialized law firm providing comprehensive legal solutions across 
                Civil & Business Law, Intellectual Property, Corporate Law, and more with 15+ years of expertise.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <AnimatedButton 
                href="/contact"
                variant="primary"
                className="px-8 py-4 text-lg font-semibold shadow-lg shadow-blue-600/25"
              >
                Get Legal Consultation
              </AnimatedButton>
              <AnimatedButton 
                href="/about"
                variant="secondary"
                className="px-8 py-4 text-lg font-semibold !text-black hover:!text-white"
              >
                Learn About Us
              </AnimatedButton>
            </div>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start mt-8">
              <div className="flex items-center gap-2 text-gray-600">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs font-bold text-white">15+</span>
                  </div>
                  <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs font-bold text-white">✓</span>
                  </div>
                  <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-xs font-bold text-white">⚡</span>
                  </div>
                </div>
                <span className="text-sm font-medium">15+ Years of Excellence</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Free Initial Consultation</span>
              </div>
              
              <div className="flex items-center gap-2 text-gray-600">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <span className="text-sm font-medium">100% Confidential</span>
              </div>
            </div>
          </div>

          {/* Hero Visual - Legal Theme */}
          <div className="relative">
            <FloatingLegalElements count={10} className="z-0" />
            <div className="relative z-10 max-w-lg mx-auto lg:max-w-none">
              
              {/* Interactive Pulsing Orb */}
              <div className="absolute -top-8 -right-8 z-0">
                <PulsingOrb size={100} color="blue" className="opacity-60" />
              </div>
              
              {/* Main Legal Document/Scale Illustration */}
              <div className="relative">
                {/* Background circles */}
                <div className="absolute inset-0">
                  <div className="absolute top-12 left-12 w-32 h-32 bg-blue-100 rounded-full opacity-60"></div>
                  <div className="absolute bottom-12 right-12 w-24 h-24 bg-blue-200 rounded-full opacity-40"></div>
                  <div className="absolute top-24 right-24 w-16 h-16 bg-blue-300 rounded-full opacity-30"></div>
                </div>
                
                {/* Central legal document mockup */}
                <AnimatedCard variant="tilt" className="transform rotate-2 hover:rotate-0">
                  <div className="space-y-6">
                    {/* Document header */}
                    <div className="border-b border-gray-200 pb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <InteractiveIcon magneticStrength={0.5}>
                          <Scale className="w-8 h-8 text-blue-700" />
                        </InteractiveIcon>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">Legal Agreement</h3>
                          <p className="text-sm text-gray-500">Professional Documentation</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Document content lines */}
                    <div className="space-y-3">
                      <div className="h-3 bg-gray-200 rounded w-full"></div>
                      <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-3 bg-blue-100 rounded w-5/6"></div>
                      <div className="h-3 bg-gray-200 rounded w-2/3"></div>
                      <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                    </div>
                    
                    {/* Signature area */}
                    <div className="border-t border-gray-200 pt-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="h-8 w-24 bg-blue-700 rounded opacity-20"></div>
                          <p className="text-xs text-gray-400 mt-1">Digital Signature</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-semibold text-gray-700">HRA Legal</p>
                          <p className="text-xs text-gray-500">Professional Services</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
                
                {/* Floating service cards with Interactive Icons */}
                <div className="absolute -left-12 top-24 hidden lg:block">
                  <AnimatedCard variant="glow" className="p-4 transform -rotate-12 hover:rotate-0 border-l-4 border-blue-700">
                    <div className="flex items-center gap-2">
                      <InteractiveIcon>
                        <Shield className="w-5 h-5 text-blue-700" />
                      </InteractiveIcon>
                      <span className="text-sm font-semibold text-gray-900">IP Protection</span>
                    </div>
                  </AnimatedCard>
                </div>
                
                <div className="absolute -right-16 bottom-32 hidden lg:block">
                  <AnimatedCard variant="glow" className="p-4 transform rotate-12 hover:rotate-0 border-l-4 border-blue-700">
                    <div className="flex items-center gap-2">
                      <InteractiveIcon>
                        <Users className="w-5 h-5 text-blue-700" />
                      </InteractiveIcon>
                      <span className="text-sm font-semibold text-gray-900">Corporate Law</span>
                    </div>
                  </AnimatedCard>
                </div>
                
                <div className="absolute -left-8 bottom-12 hidden lg:block">
                  <AnimatedCard variant="glow" className="p-4 transform -rotate-6 hover:rotate-0 border-l-4 border-blue-700">
                    <div className="flex items-center gap-2">
                      <InteractiveIcon>
                        <Award className="w-5 h-5 text-blue-700" />
                      </InteractiveIcon>
                      <span className="text-sm font-semibold text-gray-900">15+ Years</span>
                    </div>
                  </AnimatedCard>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Key Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <AnimatedCounter 
              end={15} 
              suffix="+"
              className="text-3xl font-bold text-blue-700"
              variant="glow"
            />
            <div className="text-sm font-medium text-gray-600">Years Experience</div>
          </div>
          <div className="space-y-2">
            <AnimatedCounter 
              end={500} 
              suffix="+"
              className="text-3xl font-bold text-blue-700"
              variant="glow"
            />
            <div className="text-sm font-medium text-gray-600">Cases Handled</div>
          </div>
          <div className="space-y-2">
            <AnimatedCounter 
              end={95} 
              suffix="%"
              className="text-3xl font-bold text-blue-700"
              variant="glow"
            />
            <div className="text-sm font-medium text-gray-600">Success Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-700">24/7</div>
            <div className="text-sm font-medium text-gray-600">Legal Support</div>
          </div>
        </div>
        
        {/* Interactive Legal Process */}
        <div className="mt-24">
          <AnimatedLegalProcess autoPlay={true} />
        </div>
      </div>
      
      {/* Trusted By Section */}
      <div className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <p className="text-gray-500 mb-8 font-medium">Trusted by Leading Organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {/* Sony Pictures Entertainment */}
            <div className="group cursor-pointer transition-all duration-300 hover:scale-105">
              <div className="h-16 w-44 bg-gradient-to-r from-black to-gray-800 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg">
                <div className="text-center">
                  <div className="text-white font-bold text-lg tracking-wide">SONY</div>
                  <div className="text-gray-300 text-xs font-medium tracking-wider">PICTURES</div>
                </div>
              </div>
            </div>
            
            {/* Reliance Entertainment */}
            <div className="group cursor-pointer transition-all duration-300 hover:scale-105">
              <div className="h-16 w-40 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg">
                <div className="text-white font-bold text-xl tracking-wide">
                  Reliance
                </div>
              </div>
            </div>
            
            {/* Shemaroo Entertainment */}
            <div className="group cursor-pointer transition-all duration-300 hover:scale-105">
              <div className="h-16 w-36 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg">
                <div className="text-center">
                  <div className="text-white font-bold text-lg">Shemaroo</div>
                  <div className="text-orange-100 text-xs font-medium">ENTERTAINMENT</div>
                </div>
              </div>
            </div>
            
            {/* Goldmines Telefilms */}
            <div className="group cursor-pointer transition-all duration-300 hover:scale-105">
              <div className="h-16 w-40 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 opacity-90"></div>
                <div className="relative text-center">
                  <div className="text-white font-bold text-lg tracking-wide drop-shadow-sm">GOLDMINES</div>
                  <div className="text-yellow-100 text-xs font-medium">TELEFILMS</div>
                </div>
              </div>
            </div>
            
            {/* Maddock Films */}
            <div className="group cursor-pointer transition-all duration-300 hover:scale-105">
              <div className="h-16 w-36 bg-gradient-to-r from-purple-700 to-indigo-800 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg">
                <div className="text-center">
                  <div className="text-white font-bold text-lg">MADDOCK</div>
                  <div className="text-purple-200 text-xs font-medium tracking-wider">FILMS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 