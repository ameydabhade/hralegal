import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Terms of Use
            </h1>
            
            <div className="space-y-8 text-gray-600 leading-relaxed">
              <div>
                <p className="text-sm text-gray-500 mb-6">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
                
                <p className="mb-6">
                  These Terms of Use govern your use of the HRA Legal website and our legal services. 
                  By accessing our website or engaging our services, you agree to be bound by these terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Website</h2>
                <div className="space-y-4">
                  <p>
                    This website is provided for informational purposes only. The content on this website 
                    does not constitute legal advice and should not be relied upon as such.
                  </p>
                  <p>You agree to use this website only for lawful purposes and in accordance with these Terms.</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">No Attorney-Client Relationship</h2>
                <p>
                  Browsing this website or contacting us through this website does not create an attorney-client 
                  relationship. An attorney-client relationship is established only through a signed engagement 
                  letter or retainer agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Confidentiality Notice</h2>
                <p>
                  Do not send confidential or sensitive information through this website until an attorney-client 
                  relationship has been established. Any information sent prior to establishing such a relationship 
                  may not be protected by attorney-client privilege.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
                <p>
                  All content on this website, including text, graphics, logos, and images, is the property of 
                  HRA Legal and is protected by copyright and other intellectual property laws. You may not 
                  reproduce, distribute, or create derivative works without our written permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p>
                  HRA Legal shall not be liable for any direct, indirect, incidental, consequential, or punitive 
                  damages arising from your use of this website or our services, except as required by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Standards</h2>
                <p>
                  Our legal services are provided in accordance with the professional standards and ethical 
                  rules governing the legal profession in India, including the Bar Council of India rules.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Jurisdiction and Governing Law</h2>
                <p>
                  These Terms of Use shall be governed by and construed in accordance with the laws of India. 
                  Any disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Modifications</h2>
                <p>
                  We reserve the right to modify these Terms of Use at any time. Changes will be effective 
                  immediately upon posting on this website. Your continued use of the website constitutes 
                  acceptance of the modified terms.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Use, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p><strong>HRA Legal</strong></p>
                  <p>Email: legal@hralegal.com</p>
                  <p>Phone: +91 XXXX-XXXX-XX</p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-amber-900 mb-2">
                  Important Notice
                </h3>
                <p className="text-amber-800">
                  By using this website, you acknowledge that you have read, understood, and agree to be bound 
                  by these Terms of Use and our Privacy Policy.
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