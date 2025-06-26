'use client';

import { motion } from 'framer-motion';

const tradeComplianceAreas = [
  {
    id: 'trade-compliance',
    title: 'Trade Compliance',
    description: 'Advising and providing opinion on compliance with import & export control laws, customs rules and regulations, duties, tariffs, taxes, sanctions, and international trade agreements, treaties & conventions.'
  },
  {
    id: 'cross-border-documentation',
    title: 'Cross-Border Documentation',
    description: 'Drafting, Reviewing and Negotiating international agreements & all allied documents, related to the export and import of goods and services ensuring compliance with international trade laws and regulations.'
  }
];

export default function InternationalTradePage() {
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
              International Trade
              <div className="h-1 bg-gray-800 w-32 mx-auto mt-4"></div>
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Expert guidance on international trade compliance, import/export regulations, and cross-border 
              transactions to help your business navigate global markets successfully.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core International Trade Services */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-1 gap-8 max-w-5xl mx-auto">
            {tradeComplianceAreas.map((area, index) => (
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