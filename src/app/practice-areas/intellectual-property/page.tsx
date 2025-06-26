'use client';

import { motion } from 'framer-motion';

const trademarkCopyrightAreas = [
  {
    id: 'trademark-protection',
    title: 'Trademark and Copyright Protection',
    description: 'Advising on the protection and registration of trademarks, copyrights, and other IP assets, including licensing and enforcement.'
  },
  {
    id: 'ip-licensing',
    title: 'IP Licensing and Monetization',
    description: 'Advising on strategies to monetize intellectual property through licensing, franchising, and joint ventures.'
  },
  {
    id: 'brand-protection',
    title: 'Brand Protection and Enforcement',
    description: 'Assist in enforcing and defending their intellectual property rights, including trademark/copyright infringements, and takedown notices.'
  },
  {
    id: 'ip-portfolio',
    title: 'IP Portfolio Management',
    description: 'Assisting businesses in managing their IP portfolios, including IP due diligences, audits, and licensing agreements.'
  }
];

export default function IntellectualPropertyPage() {
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
              Intellectual Property
              <div className="h-1 bg-gray-800 w-32 mx-auto mt-4"></div>
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive intellectual property services to protect, manage, and monetize your valuable 
              IP assets including trademarks, copyrights, patents, and trade secrets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core IP Services */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {trademarkCopyrightAreas.map((area, index) => (
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