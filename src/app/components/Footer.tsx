import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';
import { 
  FloatingElements, 
  InteractiveIcon, 
  FloatingLegalElements,
  PulsingOrb 
} from './ui';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <FloatingLegalElements count={8} className="z-0 opacity-20" />
      
      {/* Ambient Orbs */}
      <div className="absolute top-10 right-10 z-0">
        <PulsingOrb size={70} color="blue" className="opacity-15" />
      </div>
      <div className="absolute bottom-20 left-20 z-0">
        <PulsingOrb size={50} color="purple" className="opacity-20" />
      </div>
      
      <div className="max-w-6xl mx-auto px-4 lg:px-20 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
              <span className="text-blue-400">HRA</span> Legal
            </Link>
            <p className="text-gray-300 leading-relaxed">
              Expert legal counsel specializing in Corporate Law, Intellectual Property, 
              Media & Entertainment, and comprehensive business legal solutions.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-300">
                <InteractiveIcon magneticStrength={0.3}>
                  <MapPin className="w-4 h-4 text-blue-400" />
                </InteractiveIcon>
                <span className="text-sm">Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <InteractiveIcon magneticStrength={0.3}>
                  <Phone className="w-4 h-4 text-blue-400" />
                </InteractiveIcon>
                <span className="text-sm">+91 XXXX-XXXX-XX</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <InteractiveIcon magneticStrength={0.3}>
                  <Mail className="w-4 h-4 text-blue-400" />
                </InteractiveIcon>
                <span className="text-sm">contact@hralegal.com</span>
              </div>
            </div>
          </div>

          {/* Legal Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Legal Services</h3>
            <div className="space-y-2">
              <Link href="/practice-areas" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Corporate Law
              </Link>
              <Link href="/practice-areas" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Intellectual Property
              </Link>
              <Link href="/practice-areas" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Media & Entertainment
              </Link>
              <Link href="/practice-areas" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Employment Law
              </Link>
              <Link href="/practice-areas" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Contract Drafting
              </Link>
            </div>
          </div>

          {/* Firm Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Firm</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-300 hover:text-white transition-colors text-sm">
                About Us
              </Link>
              <Link href="/founders" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Our Founders
              </Link>
              <Link href="/industries" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Industries We Serve
              </Link>
              <Link href="/knowledge-centre" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Knowledge Centre
              </Link>
              <Link href="/careers" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Careers
              </Link>
            </div>
          </div>

          {/* Support & Legal */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support & Legal</h3>
            <div className="space-y-2">
              <Link href="/contact" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Contact Us
              </Link>
              <Link href="/disclaimer" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Disclaimer
              </Link>
              <Link href="/privacy-policy" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-use" className="block text-gray-300 hover:text-white transition-colors text-sm">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>

        {/* Bar Council Disclaimer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-800/30 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2 text-red-300">Important Legal Notice</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              <strong>As per the rules of the Bar Council of India,</strong> lawyers and law firms are not permitted to 
              solicit work or advertise. The information contained on this website is provided solely for informational 
              purposes and should not be construed as solicitation or advertisement. By accessing this website, you 
              acknowledge that you are seeking information relating to HRA Legal on your own accord.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <p className="text-gray-400 text-sm">
            © 2024 HRA Legal. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex gap-6">
            <Link href="/terms-of-use" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms
            </Link>
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy
            </Link>
            <Link href="/disclaimer" className="text-gray-400 hover:text-white text-sm transition-colors">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 