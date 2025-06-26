'use client';

import { motion } from 'framer-motion';

const corporateFinancingAreas = [
  {
    id: 'investment-agreements',
    title: 'Investment Agreements',
    description: 'Drafting/Reviewing/Negotiating investment agreements between investors and companies, including shareholder agreements, venture capital, and private equity investments.'
  },
  {
    id: 'debt-refinancing',
    title: 'Debt & Refinancing',
    description: 'Assisting with review of loan agreements, debt restructuring agreements, refinancing existing debt agreements.'
  },
  {
    id: 'bank-guarantees',
    title: 'Bank Guarantees',
    description: 'Drafting / Assisting with Bank Guarantees and Indemnity Agreements.'
  }
];

export default function CorporateFinancingPage() {
  return (
    <div className="min-h-screen bg-[#ECE5DE]">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-[#ECE5DE]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Corporate Financing
              <div className="h-1 bg-gray-800 w-32 mx-auto mt-4"></div>
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive corporate financing solutions including investment agreements, debt restructuring, 
              and financial instrument documentation to support your business growth and capital requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Corporate Financing Services */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-1 gap-8 max-w-5xl mx-auto">
            {corporateFinancingAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b-2 border-gray-800 pb-2 inline-block">{area.title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 