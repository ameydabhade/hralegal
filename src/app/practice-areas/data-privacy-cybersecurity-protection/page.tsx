'use client';

import { motion } from 'framer-motion';

const dataPrivacyAreas = [
  {
    id: 'data-privacy',
    title: 'Data Privacy',
    description: 'Drafting and Advising businesses on compliance with data privacy laws and regulations including the drafting of privacy policies.'
  },
  {
    id: 'data-processing-agreements',
    title: 'Data Processing Agreements',
    description: 'Agreements between e-commerce platforms and third-party vendors who handle customer data, ensuring compliance with data protection laws and outlining data processing terms, cookies policy, tracking consent etc.'
  },
  {
    id: 'cross-border-data-transfers',
    title: 'Cross-Border Data Transfers',
    description: 'Advising on the legal complexities of transferring data across borders, including compliance with international data transfer agreements.'
  },
  {
    id: 'third-party-data-contracts',
    title: 'Third-Party Data Contracts',
    description: 'Drafting and negotiating data-sharing and data-processing agreements with third-party service providers to ensure compliance with privacy and security standards.'
  }
];

export default function DataPrivacyCybersecurityProtectionPage() {
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
              Data Privacy, Cybersecurity & Protection
              <div className="h-1 bg-gray-800 w-32 mx-auto mt-4"></div>
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive data protection services to ensure compliance with privacy laws, 
              secure data handling practices, and robust cybersecurity frameworks for your business.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Data Privacy Services */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {dataPrivacyAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-gray-800 pb-1 inline-block">{area.title}</h3>
                <p className="text-gray-700 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 