import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export const metadata = {
  title: 'Contact Us - HRA Legal',
  description: 'Get in touch with HRA Legal for professional legal consultation and services.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white">
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
                    <Phone className="w-6 h-6 text-beige-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
                    <p className="text-gray-700">+91 (0) 123 456 7890</p>
                    <p className="text-gray-700">+91 (0) 987 654 3210</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-beige-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-beige-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
                    <p className="text-gray-700">info@hralegal.com</p>
                    <p className="text-gray-700">legal@hralegal.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-beige-100 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-beige-700" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Office Address</h3>
                    <p className="text-gray-700">
                      123 Legal District<br />
                      Professional Tower, 5th Floor<br />
                      Mumbai, Maharashtra 400001<br />
                      India
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
                    <p className="text-sm text-beige-700 mt-2">*Emergency consultations available 24/7</p>
                  </div>
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
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Legal Service Needed
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-beige-400 focus:border-beige-400 transition-colors">
                    <option value="">Select a service</option>
                    <option value="corporate">Corporate & Commercial Law</option>
                    <option value="ip">Intellectual Property Law</option>
                    <option value="civil">Civil & Business Law</option>
                    <option value="employment">Employment & Labor Law</option>
                    <option value="property">Property Law</option>
                    <option value="taxation">Taxation Law</option>
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
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-beige-700 text-white font-semibold rounded-md hover:bg-beige-800 transition-colors duration-200"
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

      {/* Why Choose Us */}
      <section className="bg-beige-50 py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Choose HRA Legal?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-beige-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-beige-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">24/7 Availability</h3>
              <p className="text-gray-700">Always accessible for urgent legal consultations and advice</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-beige-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-beige-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Response</h3>
              <p className="text-gray-700">Prompt replies to all inquiries within 24 hours</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-beige-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-beige-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Convenient Location</h3>
              <p className="text-gray-700">Centrally located office with easy access and parking</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 