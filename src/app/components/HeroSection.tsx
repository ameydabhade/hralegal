import Link from 'next/link';
import { Scale, Shield, Users, Award } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-32 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Hero Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Professional Legal<br />
                  Excellence & Trust
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                HRA Legal is a specialized law firm providing comprehensive legal solutions across 
                Civil & Business Law, Intellectual Property, Corporate Law, and more with 15+ years of expertise.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get Legal Consultation
              </Link>
              <Link 
                href="#about"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-700 text-blue-700 font-semibold rounded-lg hover:bg-blue-700 hover:text-white transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </div>

          {/* Hero Visual - Legal Theme */}
          <div className="relative">
            <div className="relative z-10 max-w-lg mx-auto lg:max-w-none">
              {/* Main Legal Document/Scale Illustration */}
              <div className="relative">
                {/* Background circles */}
                <div className="absolute inset-0">
                  <div className="absolute top-12 left-12 w-32 h-32 bg-blue-100 rounded-full opacity-60"></div>
                  <div className="absolute bottom-12 right-12 w-24 h-24 bg-blue-200 rounded-full opacity-40"></div>
                  <div className="absolute top-24 right-24 w-16 h-16 bg-blue-300 rounded-full opacity-30"></div>
                </div>
                
                {/* Central legal document mockup */}
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="space-y-6">
                    {/* Document header */}
                    <div className="border-b border-gray-200 pb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <Scale className="w-8 h-8 text-blue-700" />
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
                </div>
                
                {/* Floating service cards */}
                <div className="absolute -left-12 top-24 hidden lg:block">
                  <div className="bg-white p-4 rounded-xl shadow-lg transform -rotate-12 hover:rotate-0 transition-transform duration-300 border-l-4 border-blue-700">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-blue-700" />
                      <span className="text-sm font-semibold text-gray-900">IP Protection</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -right-16 bottom-32 hidden lg:block">
                  <div className="bg-white p-4 rounded-xl shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-300 border-l-4 border-blue-700">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-blue-700" />
                      <span className="text-sm font-semibold text-gray-900">Corporate Law</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -left-8 bottom-12 hidden lg:block">
                  <div className="bg-white p-4 rounded-xl shadow-lg transform -rotate-6 hover:rotate-0 transition-transform duration-300 border-l-4 border-blue-700">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-blue-700" />
                      <span className="text-sm font-semibold text-gray-900">15+ Years</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Key Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-700">15+</div>
            <div className="text-sm font-medium text-gray-600">Years Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-700">500+</div>
            <div className="text-sm font-medium text-gray-600">Cases Handled</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-700">95%</div>
            <div className="text-sm font-medium text-gray-600">Success Rate</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-700">24/7</div>
            <div className="text-sm font-medium text-gray-600">Legal Support</div>
          </div>
        </div>
      </div>
      
      {/* Trusted By Section */}
      <div className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <p className="text-gray-500 mb-8 font-medium">Trusted by Leading Organizations</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="h-12 w-40 bg-gray-200 rounded flex items-center justify-center text-sm font-medium text-gray-600">Sony Pictures</div>
            <div className="h-12 w-36 bg-gray-200 rounded flex items-center justify-center text-sm font-medium text-gray-600">Reliance</div>
            <div className="h-12 w-32 bg-gray-200 rounded flex items-center justify-center text-sm font-medium text-gray-600">Shemaroo</div>
            <div className="h-12 w-38 bg-gray-200 rounded flex items-center justify-center text-sm font-medium text-gray-600">Goldmines</div>
            <div className="h-12 w-34 bg-gray-200 rounded flex items-center justify-center text-sm font-medium text-gray-600">Maddock</div>
          </div>
        </div>
      </div>
    </section>
  );
} 