import Header from '../components/Header';
import Footer from '../components/Footer';

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Disclaimer
            </h1>
            
            <div className="space-y-8 text-gray-600 leading-relaxed">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-6">
                <h2 className="text-xl font-bold text-red-900 mb-4">
                  Important Legal Notice - Bar Council of India Rules
                </h2>
                <p className="text-red-800 font-medium">
                  As per the rules of the Bar Council of India, lawyers and law firms are not permitted to 
                  solicit work or advertise. The information contained in this website is provided solely 
                  for informational purposes and should not be construed as solicitation or advertisement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">No Solicitation</h2>
                <p>
                  By accessing this website, you acknowledge and confirm that you are seeking information 
                  relating to HRA Legal on your own accord and that there has been no advertisement, touts, 
                  personal communication, solicitation, invitation or any other inducement of any sort whatsoever 
                  by or on behalf of HRA Legal or any of its members to solicit any work through this website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">No Legal Advice</h2>
                <p>
                  The information provided on this website is for general informational purposes only and 
                  does not constitute legal advice. Every legal matter is unique and requires individual 
                  analysis. Do not rely on this information as a substitute for professional legal counsel.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">No Attorney-Client Relationship</h2>
                <p>
                  Use of this website does not create an attorney-client relationship between you and HRA Legal. 
                  Such a relationship can only be established through a formal engagement letter or retainer 
                  agreement signed by both parties.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Confidentiality Warning</h2>
                <p>
                  Please do not include confidential or sensitive information in any communication through 
                  this website until an attorney-client relationship has been established. Information sent 
                  before such a relationship is established may not be protected by attorney-client privilege.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Accuracy</h2>
                <p>
                  While we strive to keep the information on this website current and accurate, HRA Legal 
                  makes no warranties or representations as to the accuracy, completeness, or timeliness 
                  of the information provided. Laws change frequently, and information may become outdated.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p>
                  HRA Legal shall not be liable for any damages, direct or indirect, arising from the use 
                  of this website or reliance on the information contained herein. This includes but is not 
                  limited to any decisions made based on the information provided.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Jurisdiction</h2>
                <p>
                  Any legal issues arising from the use of this website shall be governed by Indian law 
                  and subject to the jurisdiction of appropriate courts in Mumbai, Maharashtra, India.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Standards</h2>
                <p>
                  HRA Legal is committed to maintaining the highest standards of professional conduct in 
                  accordance with the rules and regulations of the Bar Council of India and applicable 
                  professional ethical standards.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
                <p>
                  This website may contain links to third-party websites. HRA Legal is not responsible 
                  for the content or privacy practices of such websites. Access to third-party websites 
                  is at your own risk.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Updates and Changes</h2>
                <p>
                  HRA Legal reserves the right to update or modify this disclaimer at any time without 
                  prior notice. It is your responsibility to review this disclaimer periodically for 
                  any changes.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  Contact for Legal Consultation
                </h3>
                <p className="text-blue-800">
                  If you require legal advice or services, please contact HRA Legal directly to discuss 
                  your specific legal needs and to establish a formal attorney-client relationship.
                </p>
                <div className="mt-4">
                  <p className="text-blue-800">
                    <strong>Email:</strong> legal@hralegal.com<br/>
                    <strong>Phone:</strong> +91 XXXX-XXXX-XX
                  </p>
                </div>
              </div>

              <div className="text-center pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  By continuing to use this website, you acknowledge that you have read, understood, 
                  and agree to this disclaimer and all terms and conditions.
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