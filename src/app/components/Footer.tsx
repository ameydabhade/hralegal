import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-beige-300 hover:text-beige-200 transition-colors">
              <span className="text-beige-300">HRA</span> Legal
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Expert legal counsel specializing in Corporate Law, Intellectual Property, 
              Media & Entertainment, and comprehensive business legal solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-beige-300 flex-shrink-0" />
                <span>93 East Building, 705, Mahakali Caves Road, Near MIDC/Ahura/Onida, Andheri East, Mumbai 400093</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-beige-300 flex-shrink-0" />
                <span>+91 9967382875</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-beige-300 flex-shrink-0" />
                <span>rushi@hralegal.com</span>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-beige-500 rounded-lg flex items-center justify-center hover:bg-beige-400 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-beige-500 rounded-lg flex items-center justify-center hover:bg-beige-400 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-beige-500 rounded-lg flex items-center justify-center hover:bg-beige-400 transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Legal Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Legal Services</h3>
            <div className="space-y-3">
              <Link href="/practice-areas" className="block text-gray-300 hover:text-beige-300 transition-colors">
                Corporate Law
              </Link>
              <Link href="/practice-areas" className="block text-gray-300 hover:text-beige-300 transition-colors">
                Intellectual Property
              </Link>
              <Link href="/practice-areas" className="block text-gray-300 hover:text-beige-300 transition-colors">
                Media & Entertainment
              </Link>
              <Link href="/practice-areas" className="block text-gray-300 hover:text-beige-300 transition-colors">
                Employment Law
              </Link>
              <Link href="/practice-areas" className="block text-gray-300 hover:text-beige-300 transition-colors">
                Contract Drafting
              </Link>
            </div>
          </div>

          {/* Firm Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Firm</h3>
            <div className="space-y-3">
              <Link href="/about" className="block text-gray-300 hover:text-beige-300 transition-colors">
                About Us
              </Link>
              <Link href="/founders" className="block text-gray-300 hover:text-beige-300 transition-colors">
                Our Founders
              </Link>
              <Link href="/industries" className="block text-gray-300 hover:text-beige-300 transition-colors">
                Industries We Serve
              </Link>
              <Link href="/knowledge-centre" className="block text-gray-300 hover:text-beige-300 transition-colors">
                Learners Page
              </Link>
              <Link href="/careers" className="block text-gray-300 hover:text-beige-300 transition-colors">
                Careers
              </Link>
            </div>
          </div>

          {/* Support & Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Support & Legal</h3>
            <div className="space-y-3">
              <Link href="/contact" className="block text-gray-300 hover:text-beige-300 transition-colors">
                Contact Us
              </Link>
              <Link href="/disclaimer" className="block text-gray-300 hover:text-beige-300 transition-colors">
                Disclaimer
              </Link>
              <Link href="/privacy-policy" className="block text-gray-300 hover:text-beige-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="block text-gray-300 hover:text-beige-300 transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>

        {/* Bar Council Disclaimer */}
      

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
          <div className="flex gap-6">
            <Link href="/terms-of-use" className="text-gray-400 hover:text-beige-300 transition-colors">
              Terms
            </Link>
            <Link href="/privacy-policy" className="text-gray-400 hover:text-beige-300 transition-colors">
              Privacy
            </Link>
            <Link href="/disclaimer" className="text-gray-400 hover:text-beige-300 transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 