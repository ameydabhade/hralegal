import Link from 'next/link';
import { Scale, Shield, Award, Phone, ArrowRight, CheckCircle } from 'lucide-react';

export default function HeroSection() {

  return (
    <section className="min-h-screen bg-gradient-to-br from-beige-200 via-beige-100 to-beige-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-beige-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-beige-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-beige-200 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 pt-28 pb-12 relative z-10">
        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px] mb-16">
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1.5 bg-beige-200 border border-beige-400 rounded-full">
              <span className="text-xs font-medium text-beige-800">🏆 15+ Years of Legal Excellence</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                Your Legal Partners
                <span className="block text-2xl lg:text-3xl font-normal text-beige-700 mt-1">
                  for Business Success
                </span>
              </h1>
              
              <p className="text-base text-gray-800 leading-relaxed max-w-2xl">
                HRA Legal is a professional law firm with specialized expertise across various legal disciplines, including Civil and Business Law, Intellectual Property Laws, Corporate Law, and Employment Laws.
              </p>
              
              <p className="text-sm text-gray-700 leading-relaxed max-w-2xl">
                Our seasoned lawyers provide personalized solutions with prompt, reliable and qualitative services that enable businesses to navigate legal complexities with confidence and clarity.
              </p>
            </div>
            
            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-beige-400 text-white font-semibold text-sm rounded-lg hover:bg-beige-500 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-4 h-4 mr-2" />
                Schedule Consultation
                <ArrowRight className="w-3 h-3 ml-2" />
              </Link>
              <Link 
                href="/practice-areas"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-beige-500 text-beige-800 font-semibold text-sm rounded-lg hover:bg-beige-500 hover:text-white transition-all duration-200"
              >
                View Our Services
              </Link>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            {/* Main Visual Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 border border-beige-100 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              {/* Legal Document Mockup */}
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-center border-b border-beige-200 pb-3">
                  <div className="w-10 h-10 bg-beige-400 rounded-xl flex items-center justify-center">
                    <Scale className="w-5 h-5 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-bold text-gray-900">This section will be replaced with a full width image </h3>
                    <p className="text-xs text-beige-800">Professional Documentation</p>
                  </div>
                </div>
                
                {/* Content Lines */}
                <div className="space-y-2">
                  <div className="h-2 bg-gray-100 rounded-full w-full"></div>
                  <div className="h-2 bg-beige-100 rounded-full w-4/5"></div>
                  <div className="h-2 bg-gray-100 rounded-full w-5/6"></div>
                  <div className="h-2 bg-beige-200 rounded-full w-3/4"></div>
                  <div className="h-2 bg-gray-100 rounded-full w-2/3"></div>
                </div>
                
                {/* Signature Area */}
                <div className="border-t border-beige-200 pt-3 flex justify-between items-center">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-xs text-gray-700">Verified & Approved</span>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-sm text-gray-900">HRA Legal</p>
                    <p className="text-xs text-beige-800">Professional Services</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-3 -right-3 w-12 h-12 bg-beige-300 rounded-full flex items-center justify-center shadow-lg">
              <Award className="w-6 h-6 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-beige-400 rounded-full flex items-center justify-center shadow-lg">
              <Shield className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        {/* Sliding Testimonials Section */}
        {/* <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-beige-600 mb-2">TRUSTED BY LEADING ORGANIZATIONS</p>
            <h3 className="text-2xl font-bold text-gray-900">What Our Clients Say</h3>
          </div>
          
          <div className="relative overflow-hidden">
            <div className="sliding-testimonials flex animate-slide">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-full lg:w-1/2 px-4">
                  <div className="bg-white rounded-2xl shadow-lg border border-beige-100 p-8 h-full">
                    <Quote className="w-8 h-8 text-beige-400 mb-6" />
                    <blockquote className="text-lg text-gray-700 leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-beige-100 rounded-full flex items-center justify-center mr-4">
                        <Users className="w-6 h-6 text-beige-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{testimonial.author}</div>
                        <div className="text-sm text-gray-600">{testimonial.role}</div>
                        <div className="text-sm text-beige-600">{testimonial.company}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}

    

        {/* Services Section */}
   

        {/* Sliding Client Logos */}
        {/* <div className="bg-white rounded-2xl shadow-lg border border-beige-100 p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Trusted by</h3>
            <p className="text-gray-600">15+ years of experience across industries</p>
          </div>

          <div className="border-t border-beige-200 pt-8">
            
            <div className="relative overflow-hidden">
              <div className="sliding-logos flex animate-slide-slow">
                {[...clients, ...clients].map((client, index) => (
                  <div key={index} className="flex-shrink-0 flex items-center justify-center px-8">
                    <Image 
                      src={client.logo} 
                      alt={client.name} 
                      width={120} 
                      height={40} 
                      className="h-8 w-auto opacity-60 hover:opacity-100 transition-opacity duration-300" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
} 