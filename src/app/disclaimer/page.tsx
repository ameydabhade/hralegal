import { AlertTriangle, Scale, Phone, Mail, MapPin } from 'lucide-react';

export const metadata = {
  title: 'Legal Disclaimer - HRA Legal',
  description: 'Legal disclaimer and Bar Council of India rules for HRA Legal website and services.',
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <AlertTriangle className="w-12 h-12 text-amber-600 mr-4" />
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                Legal Disclaimer
              </h1>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Important legal information and disclaimer for HRA Legal services
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8 md:p-12">
            
            {/* Bar Council Disclaimer */}
            <div className="mb-12">
              <div className="flex items-center mb-6">
                <Scale className="w-8 h-8 text-beige-400 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Bar Council of India Disclaimer</h2>
              </div>
              
              <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg mb-6">
                <p className="text-lg font-semibold text-gray-900 mb-4">
                  Important Notice Regarding Bar Council of India Rules
                </p>
                <p className="text-gray-700 leading-relaxed">
                  As per the rules of the Bar Council of India, lawyers and law firms are not permitted to solicit work or advertise. By accessing this website, you acknowledge and confirm that you are seeking information relating to HRA Legal on your own accord and that there has been no advertisement, touts, personal communication, solicitation, invitation or any other inducement of any sort whatsoever by or on behalf of HRA Legal or any of its members to solicit any work through this website.
                </p>
              </div>
            </div>

            {/* General Disclaimer */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">General Disclaimer</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">No Attorney-Client Relationship</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The information provided on this website is for general informational purposes only and does not constitute legal advice. No attorney-client relationship is formed by accessing or using this website.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Legal Advice Required</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The content on this website should not be used as a substitute for competent legal advice from a licensed professional attorney in your jurisdiction.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Accuracy of Information</h3>
                  <p className="text-gray-700 leading-relaxed">
                    While we strive to keep the information on this website accurate and up-to-date, we make no representations or warranties of any kind about the completeness, accuracy, reliability, or suitability of the information.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
                  <p className="text-gray-700 leading-relaxed">
                    HRA Legal shall not be liable for any loss or damage arising from the use of information provided on this website or any decisions made based on such information.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-beige-50 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For specific legal matters or to seek professional legal advice, please contact us directly:
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-beige-500 mr-3" />
                  <span className="text-gray-700">rushi@hralegal.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-beige-500 mr-3" />
                  <span className="text-gray-700">+91 9967382875</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-beige-500 mr-3 mt-1" />
                  <span className="text-gray-700">
                    93 East Building, 705, Mahakali Caves Road,<br />
                    Near MIDC/Ahura/Onida, Andheri East,<br />
                    Mumbai 400093
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 