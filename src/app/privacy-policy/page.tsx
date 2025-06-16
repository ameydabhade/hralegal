import { Shield, Eye, Lock, FileText, Clock, AlertCircle } from 'lucide-react';

import Footer from '../components/Footer';

export const metadata = {
  title: 'Privacy Policy - HRA Legal',
  description: 'Privacy Policy for HRA Legal website and services, outlining how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-12 h-12 text-beige-400 mr-4" />
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                Privacy Policy
              </h1>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
            </p>
            <div className="flex items-center justify-center mt-6 text-sm text-gray-600">
              <Clock className="w-4 h-4 mr-2" />
              Last updated: January 2024
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8 md:p-12">
            
            {/* Introduction */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <AlertCircle className="w-6 h-6 text-beige-400 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                HRA Legal ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using our website and services, you agree to the collection and use of information in accordance with this Privacy Policy.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <Eye className="w-6 h-6 text-beige-400 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect personal information that you voluntarily provide to us, including:
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">Name, email address, and phone number</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">Business or organization name and address</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">Legal matter details and case information</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">Communication preferences and inquiry details</span>
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you visit our website, we may automatically collect certain information, including:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">IP address and browser information</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">Pages visited and time spent on our website</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">Device type and operating system</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">Referral sources and search terms</span>
                </li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <FileText className="w-6 h-6 text-beige-400 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use the information we collect for the following purposes:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">To provide legal services and consultations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">To respond to inquiries and communicate with clients</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">To improve our website and services</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">To send legal updates and newsletters (with consent)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">To comply with legal obligations and professional standards</span>
                </li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <Lock className="w-6 h-6 text-beige-400 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Information Sharing and Disclosure</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">With your explicit consent</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">To trusted service providers who assist in our operations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">When required by law or legal process</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">To protect our rights, property, or safety</span>
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div className="mb-12">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-beige-400 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Data Security</h2>
              </div>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">Secure server infrastructure and encryption</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">Regular security assessments and updates</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">Limited access to personal information</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">Employee training on data protection</span>
                </li>
              </ul>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You have the following rights regarding your personal information:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">Access and review your personal information</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">Request correction of inaccurate information</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">Request deletion of your information (subject to legal obligations)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">Opt-out of marketing communications</span>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-beige-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> rushi@hralegal.com</p>
                <p><strong>Phone:</strong> +91 9967382875</p>
                <p><strong>Address:</strong> 93 East Building, 705, Mahakali Caves Road, Near MIDC/Ahura/Onida, Andheri East, Mumbai 400093</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
} 