import Link from 'next/link';
import Image from 'next/image';
import { Scale, Shield, Users, Award, Phone, ArrowRight, CheckCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-beige-200 via-beige-100 to-beige-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-beige-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-beige-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-beige-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-32 pb-16 relative z-10">
        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[600px] mb-20">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-beige-200 border border-beige-300 rounded-full">
              <span className="text-sm font-medium text-beige-600">🏆 15+ Years of Legal Excellence</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                HRA
                <span className="block text-beige-500">Legal</span>
                <span className="block text-2xl lg:text-3xl font-normal text-gray-600 mt-4">
                  Your Trusted Legal Partners
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                Expert legal counsel for <span className="font-semibold text-beige-600">Corporate Law</span>, 
                <span className="font-semibold text-beige-600"> Intellectual Property</span>, and 
                <span className="font-semibold text-beige-600"> Media & Entertainment</span> with proven results.
              </p>
            </div>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-beige-400 text-white font-semibold rounded-lg hover:bg-beige-500 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                href="#practice-areas"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-beige-400 text-beige-600 font-semibold rounded-lg hover:bg-beige-400 hover:text-white transition-all duration-200"
              >
                View Our Services
              </Link>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-beige-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-beige-500">500+</div>
                <div className="text-sm text-gray-600">Cases Won</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-beige-500">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-beige-500">24/7</div>
                <div className="text-sm text-gray-600">Available</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            {/* Main Visual Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-beige-100 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              {/* Legal Document Mockup */}
              <div className="space-y-6">
                {/* Header */}
                <div className="flex items-center border-b border-beige-200 pb-4">
                  <div className="w-12 h-12 bg-beige-400 rounded-xl flex items-center justify-center ">
                    <Scale className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-8">
                    <h3 className="text-xl font-bold text-gray-900">Legal Contract</h3>
                    <p className="text-beige-600">Professional Documentation</p>
                  </div>
                </div>
                
                {/* Content Lines */}
                <div className="space-y-3">
                  <div className="h-3 bg-gray-100 rounded-full w-full"></div>
                  <div className="h-3 bg-beige-100 rounded-full w-4/5"></div>
                  <div className="h-3 bg-gray-100 rounded-full w-5/6"></div>
                  <div className="h-3 bg-beige-200 rounded-full w-3/4"></div>
                  <div className="h-3 bg-gray-100 rounded-full w-2/3"></div>
                </div>
                
                {/* Signature Area */}
                <div className="border-t border-beige-200 pt-4 flex justify-between items-center">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                    <span className="text-sm text-gray-600">Verified & Approved</span>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">HRA Legal</p>
                    <p className="text-sm text-beige-600">Professional Services</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-beige-300 rounded-full flex items-center justify-center shadow-lg">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-beige-400 rounded-full flex items-center justify-center shadow-lg">
              <Shield className="w-10 h-10 text-white" />
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl shadow-lg border border-beige-100 p-8 mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Why Choose HRA Legal?</h3>
            <p className="text-gray-600">Trusted by leading organizations across industries</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-beige-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Expert Team</h4>
              <p className="text-sm text-gray-600">15+ years combined experience</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-beige-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Proven Results</h4>
              <p className="text-sm text-gray-600">95% success rate in cases</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-beige-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">100% Confidential</h4>
              <p className="text-sm text-gray-600">Your privacy is our priority</p>
            </div>
          </div>

          {/* Client Logos */}
          <div className="border-t border-beige-200 pt-8">
            <p className="text-center text-gray-600 mb-6">Trusted by leading organizations</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                  <Image src="/Logos/relience.svg" alt="Reliance Entertainment" width={90} height={32} className="h-8 w-auto" />
              <Image src="/Logos/shemaroo.svg" alt="Shemaroo Entertainment" width={85} height={32} className="h-8 w-auto" />
              <Image src="/Logos/goldmines.webp" alt="Goldmines Telefilms" width={90} height={32} className="h-8 w-auto" />
              <Image src="/Logos/maddock.webp" alt="Maddock Films" width={85} height={32} className="h-8 w-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 