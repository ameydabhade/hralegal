import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* Company Info & Contact */}
          <div className="md:col-span-1">
            <Link href="/" className="text-base font-bold text-white hover:text-red-400 transition-colors group inline-block mb-3">
              <div className="relative px-2 py-1">
                {/* Top-left corner bracket */}
                <div className="absolute top-0 left-0 w-3 h-3 transition-all duration-300 group-hover:w-4 group-hover:h-4">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-white group-hover:bg-red-400"></div>
                  <div className="absolute top-0 left-0 w-0.5 h-full bg-white group-hover:bg-red-400"></div>
                </div>
                
                {/* Bottom-right corner bracket */}
                <div className="absolute bottom-0 right-0 w-3 h-3 transition-all duration-300 group-hover:w-4 group-hover:h-4">
                  <div className="absolute bottom-0 right-0 w-full h-0.5 bg-white group-hover:bg-red-400"></div>
                  <div className="absolute bottom-0 right-0 w-0.5 h-full bg-white group-hover:bg-red-400"></div>
                </div>
                
                <span className="text-white font-semibold tracking-wide group-hover:text-red-400 transition-colors">HRA LEGAL</span>
              </div>
            </Link>
            
            <p className="text-gray-400 leading-relaxed text-xs mb-4">
              Expert legal counsel specializing in Corporate Law, Intellectual Property, 
              Media & Entertainment, and comprehensive business legal solutions.
            </p>

            {/* Contact Information */}
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-gray-400 text-xs">
                <MapPin className="w-3 h-3 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-white mb-1">Mumbai Office</div>
                  <div>93 East Building, 705, Mahakali Caves Road,<br />
                  Near MIDC/Ahura/Onida, Andheri East,<br />
                  Mumbai 400093, India</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <Phone className="w-3 h-3 text-red-400 flex-shrink-0" />
                <a href="tel:+919967382875" className="hover:text-red-400 transition-colors">+91 9967382875</a>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <Mail className="w-3 h-3 text-red-400 flex-shrink-0" />
                <a href="mailto:info@hralegal.com" className="hover:text-red-400 transition-colors">info@hralegal.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-base font-semibold text-red-400 mb-3 border-b border-red-400 pb-1 inline-block">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <Link href="/" className="block text-gray-400 hover:text-red-400 transition-colors text-xs">
                  Home
                </Link>
                <Link href="/about" className="block text-gray-400 hover:text-red-400 transition-colors text-xs">
                  About Us
                </Link>
                <Link href="/practice-areas" className="block text-gray-400 hover:text-red-400 transition-colors text-xs">
                  Practice Areas
                </Link>
                <Link href="/sectors" className="block text-gray-400 hover:text-red-400 transition-colors text-xs">
                  Sectors
                </Link>
              </div>
              <div className="space-y-1">
                <Link href="/learners-page" className="block text-gray-400 hover:text-red-400 transition-colors text-xs">
                  Knowledge Centre
                </Link>
                <Link href="/contact" className="block text-gray-400 hover:text-red-400 transition-colors text-xs">
                  Contact Us
                </Link>
                <Link href="/careers" className="block text-gray-400 hover:text-red-400 transition-colors text-xs">
                  Careers
                </Link>
              </div>
            </div>
          </div>

          {/* Legal & Social */}
          <div className="md:col-span-1">
            <h3 className="text-base font-semibold text-red-400 mb-3 border-b border-red-400 pb-1 inline-block">Legal & Social</h3>
            
            {/* Legal Links */}
            <div className="space-y-1 mb-4">
              <Link href="/disclaimer" className="block text-gray-400 hover:text-red-400 transition-colors text-xs">
                Disclaimer
              </Link>
              <Link href="/privacy-policy" className="block text-gray-400 hover:text-red-400 transition-colors text-xs">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="block text-gray-400 hover:text-red-400 transition-colors text-xs">
                Terms of Use
              </Link>
            </div>

            {/* Social Media Links */}
            <div>
              <div className="text-white font-medium mb-2 text-xs">Follow Us</div>
              <div className="flex gap-2">
                <a 
                  href="#" 
                  className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-3 h-3" />
                </a>
                <a 
                  href="#" 
                  className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-3 h-3" />
                </a>
                <a 
                  href="#" 
                  className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-3 h-3" />
                </a>
                <a 
                  href="#" 
                  className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div className="text-xs text-gray-400">
              © 2024 HRA Legal. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 