import { Phone, Mail, MapPin, Clock, Send, Linkedin, Instagram, Facebook } from 'lucide-react';

export const metadata = {
  title: 'Contact Us - HRA Legal',
  description: 'Get in touch with HRA Legal for professional legal consultation and services.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-100 to-white py-20">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your legal needs? Get in touch with our experienced team for professional consultation and guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
                <p className="text-lg text-gray-700 mb-8">
                  We're here to help you navigate your legal challenges. Reach out to us for a consultation and discover how we can assist you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-beige-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-beige-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-700">rushi@hralegal.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-beige-100 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-beige-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Phone Number</h3>
                    <p className="text-gray-700">9967382875</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-beige-100 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-beige-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Office Address</h3>
                    <p className="text-gray-700">
                      93 East Building, 705<br />
                      Mahakali Caves Road<br />
                      Near MIDC/Ahura/Onida<br />
                      Andheri East, Mumbai 400093
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-beige-100 rounded-lg flex items-center justify-center mr-4">
                    <Clock className="w-6 h-6 text-beige-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Office Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-700">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-gray-700">Sunday: Closed</p>
                    <p className="text-sm text-beige-700 mt-2">*Emergency consultations available upon request</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-8 border-t border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-beige-600 rounded-lg flex items-center justify-center hover:bg-beige-700 transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-beige-600 rounded-lg flex items-center justify-center hover:bg-beige-700 transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-beige-600 rounded-lg flex items-center justify-center hover:bg-beige-700 transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-xl border border-gray-100 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-beige-400 focus:border-beige-400 transition-colors"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-beige-400 focus:border-beige-400 transition-colors"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-beige-400 focus:border-beige-400 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-beige-400 focus:border-beige-400 transition-colors"
                    placeholder="+91 99999 99999"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Legal Service Needed
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-beige-400 focus:border-beige-400 transition-colors">
                    <option value="">Select a service</option>
                    <option value="contracts">Contracts, Compliances, and Advisory</option>
                    <option value="corporate">Company Secretarial and Corporate Governance</option>
                    <option value="compliance">Compliance, Bribery, Anti-Corruption</option>
                    <option value="trade">International Trade & Export/Import Advisory</option>
                    <option value="data">Data Privacy, Protection, and Cybersecurity</option>
                    <option value="employment">Employment, Labour & Industrial Relations</option>
                    <option value="realestate">Real Estate</option>
                    <option value="startups">Startups & Emerging Businesses</option>
                    <option value="ma">Mergers and Acquisitions, JV's, Strategic Alliances</option>
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-beige-400 focus:border-beige-400 transition-colors"
                    placeholder="Please describe your legal needs and how we can help you..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-beige-600 text-white font-semibold rounded-md hover:bg-beige-700 transition-colors duration-200"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>

                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to our{' '}
                  <a href="/privacy-policy" className="text-beige-700 hover:text-beige-800 underline">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="/terms-of-use" className="text-beige-700 hover:text-beige-800 underline">
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