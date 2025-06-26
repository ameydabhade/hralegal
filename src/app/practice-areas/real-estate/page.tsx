'use client';

import { motion } from 'framer-motion';

const generalAgreementsAreas = [
  {
    id: 'general-agreements',
    title: 'General Agreements',
    description: 'Drafting and/or reviewing service agreements, procurement agreements, supply agreements, marketing agreements, employment agreements, confidentiality & non-disclosure agreements, general and specific power of attorneys, no objection certificates, transfer deed, gift deed, and other additional documents on a case to case basis.'
  },
  {
    id: 'property-transactions',
    title: 'Property Transactions',
    description: 'Drafting and /or reviewing agreements in relation to the buying, selling, licensing, leasing, and development/re-development of real estate. This includes partnership agreements including limited liability partnerships, project management agreements, title deed, purchase agreements, sale agreements, possession letter, allotment letter, conveyance deeds, permanent alternate accommodation agreements, shareholder agreements, and any other related documents.'
  }
];

const landlordTenantAreas = [
  {
    title: 'Landlord and Tenant Relations',
    description: 'Drafting and/or reviewing commercial and residential lease agreements, leave and license agreements, their amendments, renewals, and termination letters.'
  }
];

const researchAreas = [
  {
    title: 'Research',
    description: 'Research and Advising developers / tenants / members on zoning regulations, environmental regulations et al.'
  }
];

export default function RealEstatePage() {
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
              Real Estate
              <div className="h-1 bg-gray-800 w-32 mx-auto mt-4"></div>
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive real estate legal services covering property transactions, landlord-tenant relations, 
              development projects, and regulatory compliance for all your real estate needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Real Estate Services */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-1 gap-8 max-w-5xl mx-auto">
            {generalAgreementsAreas.map((area, index) => (
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

      {/* Landlord and Tenant Relations */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#ECE5DE]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Landlord and Tenant Relations
              <div className="h-1 bg-gray-800 w-24 mx-auto mt-4"></div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {landlordTenantAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 text-center"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-800 pb-2 inline-block">{area.title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Services */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Research Services
              <div className="h-1 bg-gray-800 w-24 mx-auto mt-4"></div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 text-center"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-800 pb-2 inline-block">{area.title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 