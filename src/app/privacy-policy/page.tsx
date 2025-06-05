import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Privacy Policy
            </h1>
            
            <div className="space-y-8 text-gray-600 leading-relaxed">
              <div>
                <p className="text-sm text-gray-500 mb-6">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                
                <p className="mb-6">
                  At HRA Legal, we respect your privacy and are committed to protecting your personal information. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
                  you visit our website or use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Personal Information</h3>
                    <p>We may collect personal information that you voluntarily provide, including:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Name and contact information</li>
                      <li>Email address and phone number</li>
                      <li>Company/organization details</li>
                      <li>Legal matter details and correspondence</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Usage Information</h3>
                    <p>We automatically collect certain information when you use our website:</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>IP address and browser information</li>
                      <li>Pages visited and time spent on our website</li>
                      <li>Referring website information</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Provide legal services and respond to your inquiries</li>
                  <li>Communicate with you about your legal matters</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations and professional requirements</li>
                  <li>Send you relevant updates about our services (with your consent)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Attorney-Client Privilege</h2>
                <p>
                  We maintain strict confidentiality regarding all client communications and information. 
                  All information shared with us in connection with legal services is protected by attorney-client 
                  privilege and professional obligations of confidentiality.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing</h2>
                <p>We do not sell, trade, or otherwise transfer your personal information to third parties, except:</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights or the rights of others</li>
                  <li>With service providers who assist us in operating our website or conducting our business</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                  over the internet is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc list-inside mt-4 space-y-2">
                  <li>Access and review your personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information (subject to legal and professional obligations)</li>
                  <li>Opt-out of non-essential communications</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p><strong>HRA Legal</strong></p>
                  <p>Email: privacy@hralegal.com</p>
                  <p>Phone: +91 XXXX-XXXX-XX</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes by 
                  posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
} 