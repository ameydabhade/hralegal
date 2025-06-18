import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="space-y-3">
            <Link href="/" className="text-lg font-bold text-beige-300 hover:text-beige-200 transition-colors group inline-block">
              <div className="relative px-3 py-2">
                {/* Top-left corner bracket */}
                <div className="absolute top-0 left-0 w-4 h-4 transition-all duration-300 group-hover:w-5 group-hover:h-5">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-white group-hover:bg-gray-200"></div>
                  <div className="absolute top-0 left-0 w-0.5 h-full bg-white group-hover:bg-gray-200"></div>
                </div>
                
                {/* Bottom-right corner bracket */}
                <div className="absolute bottom-0 right-0 w-4 h-4 transition-all duration-300 group-hover:w-5 group-hover:h-5">
                  <div className="absolute bottom-0 right-0 w-full h-0.5 bg-white group-hover:bg-gray-200"></div>
                  <div className="absolute bottom-0 right-0 w-0.5 h-full bg-white group-hover:bg-gray-200"></div>
                </div>
                
                <span className="text-white font-semibold tracking-wide">HRA LEGAL</span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed text-xs">
              Expert legal counsel specializing in Corporate Law, Intellectual Property, 
              Media & Entertainment, and comprehensive business legal solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-gray-400 text-xs">
                <MapPin className="w-3 h-3 text-beige-300 flex-shrink-0 mt-0.5" />
                <span>93 East Building, 705, Mahakali Caves Road, Near MIDC/Ahura/Onida, Andheri East, Mumbai 400093</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <Phone className="w-3 h-3 text-beige-300 flex-shrink-0" />
                <span>+91 9967382875</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <Mail className="w-3 h-3 text-beige-300 flex-shrink-0" />
                <span>rushi@hralegal.com</span>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white">Practice Areas</h3>
            <div className="space-y-1.5">
              <Link href="/practice-areas" className="block text-gray-400 hover:text-beige-300 transition-colors text-xs">
                Corporate Law
              </Link>
              <Link href="/practice-areas" className="block text-gray-400 hover:text-beige-300 transition-colors text-xs">
                Intellectual Property
              </Link>
              <Link href="/practice-areas" className="block text-gray-400 hover:text-beige-300 transition-colors text-xs">
                Media & Entertainment
              </Link>
              <Link href="/practice-areas" className="block text-gray-400 hover:text-beige-300 transition-colors text-xs">
                Employment Law
              </Link>
              <Link href="/practice-areas" className="block text-gray-400 hover:text-beige-300 transition-colors text-xs">
                Contract Drafting
              </Link>
            </div>
          </div>

          {/* Firm Links */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white">Our Firm</h3>
            <div className="space-y-1.5">
              <Link href="/about" className="block text-gray-400 hover:text-beige-300 transition-colors text-xs">
                About Us
              </Link>
              <Link href="/about" className="block text-gray-400 hover:text-beige-300 transition-colors text-xs">
                Leadership Team
              </Link>
              <Link href="/sectors" className="block text-gray-400 hover:text-beige-300 transition-colors text-xs">
                Sectors We Serve
              </Link>
              <Link href="/learners-page" className="block text-gray-400 hover:text-beige-300 transition-colors text-xs">
                Learners Page
              </Link>
              <Link href="/careers" className="block text-gray-400 hover:text-beige-300 transition-colors text-xs">
                Careers
              </Link>
            </div>
          </div>

          {/* Support & Legal */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white">Support & Legal</h3>
            <div className="space-y-1.5">
              <Link href="/contact" className="block text-gray-400 hover:text-beige-300 transition-colors text-xs">
                Contact Us
              </Link>
              <Link href="/disclaimer" className="block text-gray-400 hover:text-beige-300 transition-colors text-xs">
                Disclaimer
              </Link>
              <Link href="/privacy-policy" className="block text-gray-400 hover:text-beige-300 transition-colors text-xs">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="block text-gray-400 hover:text-beige-300 transition-colors text-xs">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-6 pt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © 2024 HRA Legal. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms-of-use" className="text-gray-500 hover:text-beige-300 transition-colors text-xs">
              Terms
            </Link>
            <Link href="/privacy-policy" className="text-gray-500 hover:text-beige-300 transition-colors text-xs">
              Privacy
            </Link>
            <Link href="/disclaimer" className="text-gray-500 hover:text-beige-300 transition-colors text-xs">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 