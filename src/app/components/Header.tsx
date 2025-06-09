'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AnimatedButton } from './ui';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
        <header className={`fixed top-4 left-4 right-4 z-50 backdrop-blur-sm border border-gray-100 rounded-[32px] transition-all duration-500 ease-out mx-auto max-w-7xl hover:shadow-xl ${
      isScrolled 
        ? 'bg-white/98 shadow-2xl border-gray-200' 
        : 'bg-white/95 shadow-lg hover:bg-white/98'
    }`}>
        <nav className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between py-2">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-bold text-gray-900 hover:text-beige-400 transition-all duration-300 transform hover:scale-105 group"
          >
            <span className="text-beige-400 group-hover:text-beige-800 transition-colors duration-300">HRA</span> 
            <span className="group-hover:text-beige-600 transition-colors duration-300">Legal</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            <Link 
              href="/" 
              className="relative text-gray-700 hover:text-beige-400 transition-all duration-300 text-sm font-medium group transform hover:-translate-y-0.5"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-beige-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/about" 
              className="relative text-gray-700 hover:text-beige-400 transition-all duration-300 text-sm font-medium group transform hover:-translate-y-0.5"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-beige-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/founders" 
              className="relative text-gray-700 hover:text-beige-400 transition-all duration-300 text-sm font-medium group transform hover:-translate-y-0.5"
            >
              Founders
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-beige-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/practice-areas" 
              className="relative text-gray-700 hover:text-beige-400 transition-all duration-300 text-sm font-medium group transform hover:-translate-y-0.5"
            >
              Practice Areas
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-beige-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/industries" 
              className="relative text-gray-700 hover:text-beige-400 transition-all duration-300 text-sm font-medium group transform hover:-translate-y-0.5"
            >
              Industries
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-beige-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/knowledge-centre" 
              className="relative text-gray-700 hover:text-beige-400 transition-all duration-300 text-sm font-medium group transform hover:-translate-y-0.5"
            >
              Knowledge Centre
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-beige-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/careers" 
              className="relative text-gray-700 hover:text-beige-400 transition-all duration-300 text-sm font-medium group transform hover:-translate-y-0.5"
            >
              Careers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-beige-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/contact" 
              className="relative text-gray-700 hover:text-beige-400 transition-all duration-300 text-sm font-medium group transform hover:-translate-y-0.5"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-beige-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block relative z-10">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-2 bg-beige-400 text-white text-sm font-semibold rounded-md hover:bg-beige-800 transition-colors duration-200"
            >
              Get Legal Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300 transform hover:scale-110 hover:rotate-3 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg 
              className={`w-5 h-5 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-180' : 'rotate-0'}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pb-4 border-t border-gray-100 mt-4 pt-4">
            <div className="flex flex-col gap-4 animate-in slide-in-from-top duration-300">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-beige-400 transition-colors text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-beige-400 transition-colors text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/founders" 
                className="text-gray-700 hover:text-beige-400 transition-colors text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Founders
              </Link>
              <Link 
                href="/practice-areas" 
                className="text-gray-700 hover:text-beige-400 transition-colors text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Practice Areas
              </Link>
              <Link 
                href="/industries" 
                className="text-gray-700 hover:text-beige-400 transition-colors text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Industries
              </Link>
              <Link 
                href="/knowledge-centre" 
                className="text-gray-700 hover:text-beige-400 transition-colors text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Knowledge Centre
              </Link>
              <Link 
                href="/careers" 
                className="text-gray-700 hover:text-beige-400 transition-colors text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Careers
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-beige-400 transition-colors text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <div onClick={() => setIsMobileMenuOpen(false)}>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-2 bg-beige-400 text-white text-sm font-semibold rounded-md hover:bg-beige-800 transition-colors duration-200 mt-2 w-full"
                >
                  Get Legal Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
} 