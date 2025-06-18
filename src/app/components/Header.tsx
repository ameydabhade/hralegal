'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

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
        <header className={`fixed top-4 left-4 right-4 z-50 backdrop-blur-sm border border-beige-200 rounded-[32px] transition-all duration-500 ease-out mx-auto max-w-7xl hover:shadow-xl ${
      isScrolled 
        ? 'bg-beige-100/98 shadow-2xl border-beige-300' 
        : 'bg-beige-50/95 shadow-lg hover:bg-beige-100/98'
    }`}>
        <nav className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between py-2">
          {/* Logo with Corner Bracket Design */}
          <Link 
            href="/" 
            className="relative flex items-center text-lg font-bold text-gray-900 transition-all duration-300 transform hover:scale-105 group"
          >
            {/* Corner Bracket Frame */}
            <div className="relative px-3 py-1.5">
              {/* Top-left corner bracket */}
              <div className="absolute top-0 left-0 w-5 h-5 transition-all duration-300 group-hover:w-6 group-hover:h-6">
                <div className="absolute top-0 left-0 w-full h-1 bg-black group-hover:bg-gray-800"></div>
                <div className="absolute top-0 left-0 w-1 h-full bg-black group-hover:bg-gray-800"></div>
              </div>
              
              {/* Bottom-right corner bracket */}
              <div className="absolute bottom-0 right-0 w-5 h-5 transition-all duration-300 group-hover:w-6 group-hover:h-6">
                <div className="absolute bottom-0 right-0 w-full h-1 bg-black group-hover:bg-gray-800"></div>
                <div className="absolute bottom-0 right-0 w-1 h-full bg-black group-hover:bg-gray-800"></div>
              </div>
              
              {/* HRA LEGAL text with hover effects */}
              <div className="relative overflow-hidden">
                <span className="relative z-10 transition-all duration-300 group-hover:text-red-600 font-semibold tracking-wide">
                  HRA LEGAL
                </span>
                
                {/* Underline effect on hover */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                
                {/* Background shape that changes on hover */}
                <span className="absolute inset-0 bg-beige-700 transform scale-x-0 transition-all duration-300 group-hover:scale-x-100 origin-left opacity-0 group-hover:opacity-10 rounded"></span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Optimized font sizes */}
          <div className="hidden lg:flex items-center gap-4">
            <Link 
              href="/" 
              className="relative text-gray-700 hover:text-beige-500 transition-all duration-300 text-sm font-medium group transform hover:-translate-y-0.5"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-beige-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/about" 
              className="relative text-gray-700 hover:text-beige-500 transition-all duration-300 text-sm font-medium group transform hover:-translate-y-0.5"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-beige-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/practice-areas" 
              className="relative text-gray-700 hover:text-beige-500 transition-all duration-300 text-sm font-medium group transform hover:-translate-y-0.5"
            >
              Practice Areas
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-beige-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/sectors" 
              className="relative text-gray-700 hover:text-beige-500 transition-all duration-300 text-sm font-medium group transform hover:-translate-y-0.5"
            >
              Sectors
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-beige-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/learners-page" 
              className="relative text-gray-700 hover:text-beige-500 transition-all duration-300 text-sm font-medium group transform hover:-translate-y-0.5"
            >
              Learners Page
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-beige-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/contact" 
              className="relative text-gray-700 hover:text-beige-500 transition-all duration-300 text-sm font-medium group transform hover:-translate-y-0.5"
            >
              Contact Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-beige-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </div>

          {/* CTA Button - Optimized size */}
          <div className="hidden lg:block relative z-10">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2 bg-beige-400 text-white text-sm font-semibold rounded-md hover:bg-beige-500 transition-colors duration-200"
            >
              Get Legal Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg bg-beige-100 hover:bg-beige-200 transition-all duration-300 transform hover:scale-110 hover:rotate-3 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg 
              className={`w-4 h-4 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-180' : 'rotate-0'}`}
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

        {/* Mobile Navigation - Reduced font sizes */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pb-3 border-t border-beige-200 mt-3 pt-3">
            <div className="flex flex-col gap-3 animate-in slide-in-from-top duration-300">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-beige-500 transition-colors text-xs font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-beige-500 transition-colors text-xs font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/practice-areas" 
                className="text-gray-700 hover:text-beige-500 transition-colors text-xs font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Practice Areas
              </Link>
              <Link 
                href="/sectors" 
                className="text-gray-700 hover:text-beige-500 transition-colors text-xs font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sectors
              </Link>
              <Link 
                href="/learners-page" 
                className="text-gray-700 hover:text-beige-500 transition-colors text-xs font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Learners Page
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-beige-500 transition-colors text-xs font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <div onClick={() => setIsMobileMenuOpen(false)}>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-4 py-1.5 bg-beige-400 text-white text-xs font-semibold rounded-md hover:bg-beige-500 transition-colors duration-200 mt-2 w-full"
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