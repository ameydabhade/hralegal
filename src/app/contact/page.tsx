import { Phone, Mail, MapPin, Send } from 'lucide-react';

export const metadata = {
  title: 'Contact Us - HRA Legal',
  description: 'Get in touch with HRA Legal for professional legal consultation and services.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#ECE5DE] py-12">
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
                      <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 border-b-4 border-gray-800 pb-4 inline-block">
              Contact Us
            </h1>
            <p className="text-base text-gray-700 max-w-3xl mx-auto leading-relaxed">
              For inquiries, please fill in the form below and we will revert shortly.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section id="info" className="pb-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-gray-800 pb-2 inline-block">
                  Get In Touch
                </h2>
                <p className="text-base text-gray-700 mb-8">
                  We&apos;re here to help you navigate your legal challenges. Reach out to us for a consultation and discover how we can assist you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 border-b border-gray-800 pb-1 inline-block">
                      Email
                    </h3>
                    <p className="text-gray-700 text-sm">info@hralegal.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 border-b border-gray-800 pb-1 inline-block">
                      Phone Number
                    </h3>
                    <p className="text-gray-700 text-sm">To Be Added</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 border-b border-gray-800 pb-1 inline-block">
                      Office Address
                    </h3>
                    <p className="text-gray-700 text-sm">
                      93 East Building, 705<br />
                      Mahakali Caves Road<br />
                      Near MIDC/Ahura/Onida<br />
                      Andheri East, Mumbai 400093
                    </p>
                  </div>
                </div>
              </div>

              {/* Location Map */}
              <div className="mt-8">
                <h3 className="text-lg font-bold text-gray-800 mb-4 border-b border-gray-800 pb-1 inline-block">
                  Our Location
                </h3>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.664612282363!2d72.86162357515582!3d19.122363850515416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9c51880bb29%3A0x4960ca342b959585!2s93%20East!5e0!3m2!1sen!2sin!4v1750357109857!5m2!1sen!2sin" 
                    width="100%" 
                    height="300" 
                    style={{border: 0, borderRadius: '8px'}} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </div>
              </div>


            </div>

            {/* Contact Form */}
            <div id="form" className="bg-white rounded-lg shadow-xl border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-800 mb-6 border-b-2 border-gray-800 pb-2 inline-block">
                Send Us a Message
              </h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-colors text-sm"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-colors text-sm"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-colors text-sm"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-colors text-sm"
                    placeholder="  99999 99999"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Legal Service Needed
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-colors text-sm">
                    <option value="">Select a service</option>
                    <option value="contracts">Contracts, Compliances, and Advisory</option>
                    <option value="corporate">Company Secretarial and Corporate Governance</option>
                    <option value="compliance">Compliance, Bribery, Anti-Corruption</option>
                    <option value="trade">International Trade & Export/Import Advisory</option>
                    <option value="data">Data Privacy, Protection, and Cybersecurity</option>
                    <option value="employment">Employment, Labour & Industrial Relations</option>
                    <option value="realestate">Real Estate</option>
                    <option value="startups">Startups & Emerging Businesses</option>
                    <option value="ma">Mergers and Acquisitions, JV&apos;s, Strategic Alliances</option>
                    <option value="ip">Intellectual Property</option>
                    <option value="media">Media, Technology, and Telecommunications</option>
                    <option value="project">Project Management</option>
                    <option value="taxation">Taxation</option>
                    <option value="ai">AI, Blockchain, Metaverse, NFT</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-colors text-sm"
                    placeholder="Please describe your legal needs and how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-700 transition-colors duration-200 text-sm"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>

                <p className="text-xs text-gray-600 text-center">
                  By submitting this form, you agree to our{' '}
                  <a href="/privacy-policy" className="text-gray-600 hover:text-gray-700 underline">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="/terms-of-use" className="text-gray-600 hover:text-gray-700 underline">
                    Terms of Use
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

   
    </div>
  );
} 