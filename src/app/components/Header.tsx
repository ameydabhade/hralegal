'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-10 backdrop-blur-sm bg-white/95 border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-bold text-gray-900 hover:text-blue-700 transition-colors"
          >
            <span className="text-blue-700">HRA</span> Legal
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-700 transition-colors text-sm font-medium"
            >
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-700 transition-colors text-sm font-medium flex items-center gap-1">
                About Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Why Choose Us</Link>
                <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Vision & Mission</Link>
                <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Values & Culture</Link>
              </div>
            </div>
            <Link 
              href="/founders" 
              className="text-gray-700 hover:text-blue-700 transition-colors text-sm font-medium"
            >
              Founders
            </Link>
            <Link 
              href="/practice-areas" 
              className="text-gray-700 hover:text-blue-700 transition-colors text-sm font-medium"
            >
              Practice Areas
            </Link>
            <Link 
              href="/industries" 
              className="text-gray-700 hover:text-blue-700 transition-colors text-sm font-medium"
            >
              Industries
            </Link>
            <Link 
              href="/knowledge-centre" 
              className="text-gray-700 hover:text-blue-700 transition-colors text-sm font-medium"
            >
              Knowledge Centre
            </Link>
            <Link 
              href="/careers" 
              className="text-gray-700 hover:text-blue-700 transition-colors text-sm font-medium"
            >
              Careers
            </Link>
            <Link 
              href="/contact" 
              className="text-gray-700 hover:text-blue-700 transition-colors text-sm font-medium"
            >
              Contact Us
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link 
              href="/contact"
              className="inline-flex items-center px-6 py-2 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors"
            >
              Get Legal Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg 
              className="w-5 h-5" 
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
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-100 mt-4 pt-4">
            <div className="flex flex-col gap-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-blue-700 transition-colors text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-blue-700 transition-colors text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                href="/founders" 
                className="text-gray-700 hover:text-blue-700 transition-colors text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Founders
              </Link>
              <Link 
                href="/practice-areas" 
                className="text-gray-700 hover:text-blue-700 transition-colors text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Practice Areas
              </Link>
              <Link 
                href="/industries" 
                className="text-gray-700 hover:text-blue-700 transition-colors text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Industries
              </Link>
              <Link 
                href="/knowledge-centre" 
                className="text-gray-700 hover:text-blue-700 transition-colors text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Knowledge Centre
              </Link>
              <Link 
                href="/careers" 
                className="text-gray-700 hover:text-blue-700 transition-colors text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Careers
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-blue-700 transition-colors text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-2 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Legal Consultation
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 