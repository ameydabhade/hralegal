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
            <Link href="/" className="text-lg font-bold text-white hover:text-gray-400 transition-colors group inline-block mb-3">
              <div className="relative px-2 py-1">
                {/* Top-left corner bracket */}
                <div className="absolute top-0 left-0 w-4 h-4 transition-all duration-300 group-hover:w-5 group-hover:h-5">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-white group-hover:bg-gray-400"></div>
                  <div className="absolute top-0 left-0 w-0.5 h-full bg-white group-hover:bg-gray-400"></div>
                </div>
                
                {/* Bottom-right corner bracket */}
                <div className="absolute bottom-0 right-0 w-4 h-4 transition-all duration-300 group-hover:w-5 group-hover:h-5">
                  <div className="absolute bottom-0 right-0 w-full h-0.5 bg-white group-hover:bg-gray-400"></div>
                  <div className="absolute bottom-0 right-0 w-0.5 h-full bg-white group-hover:bg-gray-400"></div>
                </div>
                
                <span className="text-white font-semibold tracking-wide group-hover:text-gray-400 transition-colors">HRA LEGAL</span>
              </div>
            </Link>
            
            <p className="text-gray-400 leading-relaxed text-sm mb-4">
              Expert legal counsel specializing in Corporate Law, Intellectual Property, 
              Media & Entertainment, and comprehensive business legal solutions.
            </p>

            {/* Contact Information */}
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-gray-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="font-medium text-white mb-1">Mumbai Office</div>
                  <div>93 East Building, 705, Mahakali Caves Road,<br />
                  Near MIDC/Ahura/Onida, Andheri East,<br />
                  Mumbai 400093, India</div>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Phone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <a href="tel:To Be Added" className="hover:text-gray-300 transition-colors">  To Be Added</a>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Mail className="w-4 h-4 text-gray-500 flex-shrink-0" />
                <a href="mailto:info@hralegal.com" className="hover:text-gray-300 transition-colors">info@hralegal.com</a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-400 mb-3 border-b border-gray-400 pb-1 inline-block">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <Link href="/" className="block text-gray-400 hover:text-gray-300 transition-colors text-sm">
                  Home
                </Link>
                <Link href="/about" className="block text-gray-400 hover:text-gray-300 transition-colors text-sm">
                  About Us
                </Link>
                <Link href="/practice-areas" className="block text-gray-400 hover:text-gray-300 transition-colors text-sm">
                  Practice Areas
                </Link>
                <Link href="/sectors" className="block text-gray-400 hover:text-gray-300 transition-colors text-sm">
                  Sectors
                </Link>
              </div>
              <div className="space-y-1">
                <Link href="/learners-page" className="block text-gray-400 hover:text-gray-300 transition-colors text-sm">
                  Learners Page
                </Link>
                <Link href="/careers" className="block text-gray-400 hover:text-gray-300 transition-colors text-sm">
                  Careers
                </Link>
                <Link href="/contact" className="block text-gray-400 hover:text-gray-300 transition-colors text-sm">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Legal & Social */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-400 mb-3 border-b border-gray-400 pb-1 inline-block">Legal & Social</h3>
            
            {/* Legal Links */}
            <div className="space-y-1 mb-4">
              <Link href="/disclaimer" className="block text-gray-400 hover:text-gray-300 transition-colors text-sm">
                Disclaimer
              </Link>
              <Link href="/privacy-policy" className="block text-gray-400 hover:text-gray-300 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="block text-gray-400 hover:text-gray-300 transition-colors text-sm">
                Terms of Use
              </Link>
            </div>

            {/* Social Media Links */}
            <div>
              <div className="text-white font-medium mb-2 text-sm">Follow Us</div>
              <div className="flex gap-2">
                <a 
                  href="#" 
                  className="w-8 h-8 bg-[#B39F96] rounded-full flex items-center justify-center hover:bg-[#A08B80] transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-[#B39F96] rounded-full flex items-center justify-center hover:bg-[#A08B80] transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-[#B39F96] rounded-full flex items-center justify-center hover:bg-[#A08B80] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="#" 
                  className="w-8 h-8 bg-[#B39F96] rounded-full flex items-center justify-center hover:bg-[#A08B80] transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            {/* <div className="text-xs text-gray-400">
              leave this as it is.
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
} 