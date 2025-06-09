import Link from 'next/link';
import Image from 'next/image';
import { Scale, Shield, Users, Award, Phone, Mail, CheckCircle, Target, Eye, Heart } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-beige-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-32 pb-16">
        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[600px] mb-20">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                HRA Legal
                <span className="block text-3xl lg:text-4xl font-normal text-beige-400 mt-2">
                  Professional Legal Services
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                Specialized law firm with <strong>15+ years of expertise</strong> across multiple legal disciplines.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                We provide comprehensive legal solutions in Civil & Business Law, Intellectual Property, Corporate Law, and specialized areas.
              </p>
            </div>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-beige-400 text-white font-semibold rounded-md hover:bg-beige-800 transition-colors duration-200"
              >
                <Phone className="w-5 h-5 mr-2" />
                Get Legal Consultation
              </Link>
              <Link 
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-beige-400 text-beige-400 font-semibold rounded-md hover:bg-beige-400 hover:text-white transition-colors duration-200"
              >
                Learn About Us
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="border-t border-gray-200 pt-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-beige-400 mr-3" />
                  <span className="text-gray-700 font-medium">15+ Years Experience</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-beige-400 mr-3" />
                  <span className="text-gray-700 font-medium">100% Confidential</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-beige-400 mr-3" />
                  <span className="text-gray-700 font-medium">500+ Cases Handled</span>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Image/Illustration */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-100">
              {/* Legal Document Mockup */}
              <div className="space-y-6">
                {/* Document Header */}
                <div className="flex items-center border-b border-gray-200 pb-4">
                  <Scale className="w-8 h-8 text-beige-400 mr-4" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Legal Agreement</h3>
                    <p className="text-gray-600">Professional Documentation</p>
                  </div>
                </div>
                
                {/* Document Content */}
                <div className="space-y-4">
                  <div className="h-4 bg-gray-100 rounded w-full"></div>
                  <div className="h-4 bg-gray-100 rounded w-4/5"></div>
                  <div className="h-4 bg-gray-100 rounded w-5/6"></div>
                  <div className="h-4 bg-beige-100 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-100 rounded w-2/3"></div>
                  <div className="h-4 bg-gray-100 rounded w-4/5"></div>
                </div>
                
                {/* Signature Area */}
                <div className="border-t border-gray-200 pt-4 flex justify-between items-center">
                  <div>
                    <div className="h-8 w-32 bg-beige-400 rounded opacity-20 mb-2"></div>
                    <p className="text-sm text-gray-500">Digital Signature</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">HRA Legal</p>
                    <p className="text-sm text-gray-600">Professional Services</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Introduction Section */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">About HRA Legal</h2>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>Professional law firm</strong> with specialized expertise across various legal disciplines.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-beige-400 mb-3">Our Expertise</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Civil and Business Law</li>
                    <li>• Intellectual Property Laws</li>
                    <li>• Corporate and Commercial Law</li>
                    <li>• Employment and Labor Laws</li>
                    <li>• Environment & Property Law</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-beige-400 mb-3">Our Approach</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Personalized legal solutions</li>
                    <li>• Prompt and reliable service</li>
                    <li>• Quality-focused delivery</li>
                    <li>• Business-oriented guidance</li>
                    <li>• Confidence and clarity</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Defining Traits Section */}
        <div className="mb-20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">Our Defining Traits</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-8 h-8 text-beige-400 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Effortless Comprehension</h3>
                </div>
                <p className="text-gray-700">Deep understanding and analysis of every deal and matter.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-beige-400 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Effective Structuring</h3>
                </div>
                <p className="text-gray-700">Strategic deal structuring from legal and commercial perspectives.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-beige-400 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Confident Negotiations</h3>
                </div>
                <p className="text-gray-700">Expert negotiations using proven methodologies and strategies.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <Award className="w-8 h-8 text-beige-400 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Successful Closures</h3>
                </div>
                <p className="text-gray-700">Proven track record of successful deal closures and outcomes.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <Shield className="w-8 h-8 text-beige-400 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Leadership</h3>
                </div>
                <p className="text-gray-700">Flexible thinking and adaptability in changing situations.</p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
                <div className="flex items-center mb-4">
                  <Phone className="w-8 h-8 text-beige-400 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">Always Accessible</h3>
                </div>
                <p className="text-gray-700">24/7 availability for advice and consultations.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-8">Our Services</h2>
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-beige-400 mb-6">End-to-End Legal Solutions</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Documentation & Contracts</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Definitive agreements</li>
                    <li>• Long form agreements</li>
                    <li>• Non-disclosure agreements</li>
                    <li>• No objection certificates</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">Legal Support</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Legal research and analysis</li>
                    <li>• Consultation and advisory</li>
                    <li>• Compliance policies</li>
                    <li>• Standard operating procedures</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-gray-600 italic mt-6 text-center">
                Detailed services for each practice area available in respective sections.
              </p>
            </div>
          </div>
        </div>
        
        {/* Key Statistics */}
        <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8 mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-beige-400">15+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-beige-400">500+</div>
              <div className="text-gray-600 font-medium">Cases Handled</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-beige-400">95%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-beige-400">24/7</div>
              <div className="text-gray-600 font-medium">Legal Support</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Trusted By Section */}
      <div className="bg-beige-50 py-16 border-t border-beige-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Trusted by Leading Organizations</h3>
            <p className="text-gray-600">Professional legal services for industry leaders</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {/* Sony Pictures */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <Image
                src="/Logos/sony.svg"
                alt="Sony Pictures"
                width={140}
                height={48}
                className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-200"
              />
            </div>
            
            {/* Reliance Entertainment */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <Image
                src="/Logos/relience.svg"
                alt="Reliance Entertainment"
                width={128}
                height={48}
                className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-200"
              />
            </div>
            
            {/* Shemaroo Entertainment */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <Image
                src="/Logos/shemaroo.svg"
                alt="Shemaroo Entertainment"
                width={120}
                height={48}
                className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-200"
              />
            </div>
            
            {/* Goldmines Telefilms */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <Image
                src="/Logos/goldmines.webp"
                alt="Goldmines Telefilms"
                width={128}
                height={48}
                className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-200"
              />
            </div>
            
            {/* Maddock Films */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              <Image
                src="/Logos/maddock.webp"
                alt="Maddock Films"
                width={120}
                height={48}
                className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-200"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 