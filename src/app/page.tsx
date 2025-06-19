import HeroSection from './components/HeroSection';
import HomePracticeAreasGrid from './components/HomePracticeAreasGrid';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import ServicesSection from './components/ServicesSection';
import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HomePracticeAreasGrid />
      <WhyChooseUsSection />
      <ServicesSection />
      
      {/* Ready to Work With Us Section */}
      <section className="py-16 bg-gradient-to-r from-red-200 to-red-300">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
            <div className="h-1 bg-white w-24 mx-auto mt-4"></div>
          </h2>
          <p className="text-xl  mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the HRA Legal difference. Let us help you navigate your legal challenges with our expertise, values, and commitment to excellence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-red-50 transition-colors duration-200 shadow-lg"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-red-600 transition-colors duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
