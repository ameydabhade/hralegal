import Link from 'next/link';
import Image from 'next/image';
import { Phone, ArrowRight } from 'lucide-react';

export default function HeroSection() {

  return (
    <section className="min-h-screen bg-[#ECE5DE] relative overflow-hidden">
      {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gray-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gray-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gray-200 rounded-full blur-3xl"></div>
        </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-6 pt-28 pb-12 relative z-10">
        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px] mb-16">
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center px-3 py-1.5 bg-gray-100 border border-gray-300 rounded-full">
              <span className="text-xs font-medium text-gray-700">🏆 Close to Two Decades of Legal Excellence</span>
            </div>

            <div className="space-y-4">
              {/* Main Title with Red Theme and Underlines */}
              <div className="space-y-3">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 leading-tight border-b-4 border-gray-800 pb-3 inline-block">
                  Your Legal Partners
                </h1>
                <div className="text-xl lg:text-2xl text-gray-700 font-medium">
                  for Business Success
                </div>
                <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">
                  Expert Legal Counsel • Trusted Solutions
                </div>
              </div>
              
              <p className="text-base text-gray-800 leading-relaxed max-w-2xl">
                HRA Legal is a professional law firm with specialized expertise across various legal disciplines, including Civil and Business Law, Intellectual Property Laws (with a niche focus on Media & Entertainment, Technology, and Sports), Corporate and Commercial Law, Company Secretarial and Corporate Governance, Employment and Labor Laws, Environment Law, Property Law, Taxation Law and other developing areas of law.
              </p>
              
              <p className="text-sm text-gray-700 leading-relaxed max-w-2xl">
                At HRA Legal, our seasoned and diligent lawyers provide personalized solutions to cater to the specific requirements of each client. We pride ourselves on delivering prompt, reliable and qualitative services that enables businesses to navigate the complexities of the law with confidence and clarity.
              </p>
            </div>
            
            {/* Call to Action Buttons - Less prominent Get Legal Consultation */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link 
                href="/practice-areas"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#B39F96] text-white font-semibold text-sm rounded-lg hover:bg-[#A08B80] transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Our Services
                <ArrowRight className="w-3 h-3 ml-2" />
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-gray-600 font-semibold text-sm rounded-lg border-b-2 border-gray-600 hover:bg-gray-50 transition-all duration-200"
              >
                <Phone className="w-4 h-4 mr-2" />
                Get Legal Consultation
              </Link>
            </div>
          </div>

          {/* Visual Element - Professional Office Image */}
          <div className="relative">
            {/* Professional Office Image */}
            <div className="relative rounded-2xl shadow-2xl overflow-hidden">
              <Image 
                src="/hero1.jpeg" 
                alt="HRA Legal Office - Professional Legal Environment" 
                width={800}
                height={600}
                className="w-full h-[600px] object-cover rounded-2xl"
                priority
              />
              
              {/* Overlay with company info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl">
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-white space-y-4">
                    <blockquote className="text-xl italic text-gray-100 leading-relaxed">
                      &quot;Excellence in Action&quot;
                    </blockquote>
                    
                    <div className="border-t border-gray-300 pt-4 flex justify-between items-center text-sm">
                      <div className="text-gray-200 font-semibold">
                        HRA Legal
                      </div>
                      <div className="text-gray-300 font-semibold">
                        Mumbai, India
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
} 