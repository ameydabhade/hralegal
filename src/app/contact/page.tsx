'use client';

import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import PageWrapper from '../components/PageWrapper';

// Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzICywAGgvs8c6BKJOcSW9aAbpjA2AmxDtlqkRGVhecJr8q2Vgs31O-75NJ_MiYtLgA/exec';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    legalService: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    console.log('Submitting form data:', formData);
    console.log('Google Script URL:', GOOGLE_SCRIPT_URL);

    try {
      // Use form submission directly (bypasses CORS)
      console.log('Using form submission method to bypass CORS');
      await submitViaForm();
      
      setSubmitStatus('success');
      setSubmitMessage('Thank you! Your message has been sent successfully. We will get back to you soon.');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        legalService: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Form submission failed:', error);
      setSubmitStatus('error');
      setSubmitMessage('Sorry, there was an error sending your message. Please try again or contact us directly at info@hralegal.com.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const submitViaForm = () => {
    return new Promise((resolve, reject) => {
      try {
        console.log('Creating hidden form for submission');
        
        // Create a hidden iframe first
        const iframe = document.createElement('iframe');
        iframe.name = 'hidden-iframe-' + Date.now();
        iframe.style.display = 'none';
        iframe.style.width = '0';
        iframe.style.height = '0';
        iframe.style.border = 'none';
        
        // Listen for iframe load to know when submission is complete
        iframe.onload = () => {
          console.log('Form submission completed');
          setTimeout(() => {
            // Clean up
            if (document.body.contains(iframe)) {
              document.body.removeChild(iframe);
            }
            if (document.body.contains(form)) {
              document.body.removeChild(form);
            }
            resolve(true);
          }, 1000);
        };
        
        iframe.onerror = () => {
          console.error('Iframe error occurred');
          // Still resolve as the form may have been submitted
          setTimeout(() => {
            if (document.body.contains(iframe)) {
              document.body.removeChild(iframe);
            }
            if (document.body.contains(form)) {
              document.body.removeChild(form);
            }
            resolve(true);
          }, 1000);
        };
        
        document.body.appendChild(iframe);

        // Create a hidden form
        const form = document.createElement('form');
        form.action = GOOGLE_SCRIPT_URL;
        form.method = 'POST';
        form.target = iframe.name;
        form.style.display = 'none';
        form.enctype = 'application/x-www-form-urlencoded';

        // Add form data as hidden inputs
        Object.entries(formData).forEach(([key, value]) => {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = key;
          input.value = value || '';
          form.appendChild(input);
        });

        document.body.appendChild(form);
        
        console.log('Submitting form with data:', formData);
        
        // Submit the form
        form.submit();
        
        // Fallback timeout in case onload doesn't fire
        setTimeout(() => {
          console.log('Fallback timeout - assuming submission completed');
          if (document.body.contains(iframe)) {
            document.body.removeChild(iframe);
          }
          if (document.body.contains(form)) {
            document.body.removeChild(form);
          }
          resolve(true);
        }, 5000);

      } catch (error) {
        console.error('Error in submitViaForm:', error);
        reject(error);
      }
    });
  };

  return (
    <PageWrapper 
      title="Contact Us"
      subtitle="For inquiries, please fill in the form below and we will revert shortly."
    >
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
                    <p className="text-gray-700 text-sm">
                      <a href="tel:+919967382875" className="hover:text-gray-900 transition-colors">
                        +91 99673 82875
                      </a>
                    </p>
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
                      93 East, 7th Floor, 705<br />
                      Mahakali Caves Road<br />
                      Near Onida / Burger King building<br />
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
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
                  <p className="text-green-800 text-sm">{submitMessage}</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
                  <p className="text-red-800 text-sm">{submitMessage}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-colors text-sm"
                      placeholder="Your first name"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-colors text-sm"
                      placeholder="Your last name"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-colors text-sm"
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-colors text-sm"
                    placeholder="+91 99999 99999"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Legal Service Needed
                  </label>
                  <select 
                    name="legalService"
                    value={formData.legalService}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-colors text-sm"
                    disabled={isSubmitting}
                  >
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
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-colors text-sm"
                    placeholder="Please describe your legal needs and how we can help you..."
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full inline-flex items-center justify-center px-6 py-3 font-semibold rounded-md transition-colors duration-200 text-sm ${
                    isSubmitting 
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed' 
                      : 'bg-gray-600 text-white hover:bg-gray-700'
                  }`}
                >
                  <Send className={`w-5 h-5 mr-2 ${isSubmitting ? 'animate-pulse' : ''}`} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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
    </PageWrapper>
  );
} 