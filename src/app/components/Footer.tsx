import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

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
                <span>Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-5 h-5 text-beige-300 flex-shrink-0" />
                <span>+91 99999 99999</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-5 h-5 text-beige-300 flex-shrink-0" />
                <span>contact@hralegal.com</span>
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
                Knowledge Centre
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
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="bg-gradient-to-r from-beige-900/20 to-beige-800/20 border border-beige-700/30 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3 text-beige-300">Important Legal Notice</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong>As per the rules of the Bar Council of India,</strong> lawyers and law firms are not permitted to 
              solicit work or advertise. The information contained on this website is provided solely for informational 
              purposes and should not be construed as solicitation or advertisement. By accessing this website, you 
              acknowledge that you are seeking information relating to HRA Legal on your own accord.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-gray-400">
            © 2024 HRA Legal. All rights reserved.
          </p>
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