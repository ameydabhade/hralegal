'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'What areas of law does HRA Legal specialize in?',
    answer: 'HRA Legal specializes in Civil & Business Law, Intellectual Property Laws (with focus on Media & Entertainment, Technology, and Sports), Corporate and Commercial Law, Company Secretarial and Corporate Governance, Employment and Labor Laws, Environment Law, Property Law, and Taxation Law.',
  },
  {
    question: 'How experienced is the HRA Legal team?',
    answer: 'Our founders bring over 33+ years of combined experience. Rushi Upadhyaya has 15+ years in legal, corporate affairs, and business affairs, while Ami Upadhyaya has 18+ years in human resources and management across various industries.',
  },
  {
    question: 'Do you provide services to both individuals and businesses?',
    answer: 'Yes, we provide comprehensive legal services to both established and emerging businesses, as well as individual clients. Our services range from contract drafting to complete legal department management.',
  },
  {
    question: 'Can HRA Legal manage our entire legal department?',
    answer: 'Absolutely. We offer end-to-end legal department management services, including setting up processes, systems, SOPs, preparing policies for various compliances, and providing ongoing legal support for your business operations.',
  },
  {
    question: 'What makes HRA Legal different from other law firms?',
    answer: 'Our defining traits include effortless comprehension of complex matters, effective structuring and strategizing, confident negotiations using various styles, successful deal closures, flexible leadership, and always being accessible for advice and consultations.',
  },
  {
    question: 'Do you offer consultation services before engagement?',
    answer: 'Yes, we provide consultations and advisory services. We believe in "paperwork must, before you make any commitments" and are always accessible for preliminary discussions about your legal needs.',
  },
  {
    question: 'What is your approach to negotiations?',
    answer: 'We employ a mix of negotiation styles - Integrative, Distributive, or Adversarial - keeping in mind the Zone of Possible Agreement and Best Alternative to Negotiated Agreement (BATNA) to ensure optimal outcomes for our clients.',
  },
  {
    question: 'How do you ensure client confidentiality?',
    answer: 'We maintain the highest standards of confidentiality and professional ethics. All client information is protected under attorney-client privilege, and we have robust systems in place to ensure data security and privacy.',
  }
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
            <span className="text-sm font-medium text-blue-700">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Common questions about our legal services and approach. Can't find what you're looking for? 
            <a href="mailto:contact@hralegal.com" className="text-blue-700 hover:text-blue-800 ml-1 font-medium">
              Contact our team
            </a>
            .
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-200 transition-colors hover:shadow-sm"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 p-1">
                  {openItems.includes(index) ? (
                    <Minus className="w-5 h-5 text-blue-700" />
                  ) : (
                    <Plus className="w-5 h-5 text-blue-700" />
                  )}
                </div>
              </button>
              
              {openItems.includes(index) && (
                <div className="px-8 pb-6">
                  <div className="border-t border-gray-100 pt-6">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-br from-blue-50 to-white rounded-3xl border border-blue-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Need Legal Consultation?
          </h3>
          <p className="text-gray-600 mb-6">
            Our experienced legal team is ready to assist you with personalized solutions for your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@hralegal.com"
              className="inline-flex items-center justify-center px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors shadow-md hover:shadow-lg"
            >
              Get Legal Consultation
            </a>
            <a
              href="tel:+91-XXXXXXXXXX"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-700 text-blue-700 font-semibold rounded-lg hover:bg-blue-700 hover:text-white transition-colors"
            >
              Call Us Today
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Initial consultation available. Professional legal advice you can trust.
          </p>
        </div>
      </div>
    </section>
  );
} 