'use client';

import { motion } from 'framer-motion';

const practiceAreas = [
  {
    id: 'general-agreements',
    title: 'General Agreements',
    description: 'Partnership agreements, purchase and supply agreements, service agreements, sale agreements, franchise agreements, founder agreements, employment agreements including KMPs, licensing agreements, distribution agreements, vendor contracts, non-disclosure agreements (NDAs), employment contracts (including offer letters, performance appraisal letters, termination letters), annual maintenance agreements, indemnity agreements, et al.'
  },
  {
    id: 'sales-distribution',
    title: 'Sales and Distribution Agreements',
    description: 'For goods/services including e-commerce-specific agreements.'
  },
  {
    id: 'consumer-protection',
    title: 'Consumer Protection Compliances',
    description: 'Consumer protection laws such as the Consumer Protection Act, IT Act, Data Protection Laws, and laws relating to refunds, warranties, and product guarantees.'
  },
  {
    id: 'e-signature',
    title: 'E-Signature Legal Advisory',
    description: 'Advising businesses on the use of electronic signatures (e-signatures) to ensure they are legally compliant.'
  }
];

const ecommerceAreas = [
  {
    title: 'Online Retailer Regulatory Compliance',
    description: 'Offering advice on compliance with industry-specific regulatory framework for e-commerce, such as health and safety standards, online pharmacy, and product liability issues for consumer goods sold online.'
  },
  {
    title: 'Advertising and Marketing Compliance',
    description: 'Ensuring compliance with advertising laws, including the use of consumer data for targeted marketing, and compliance with advertising standards set by regulatory bodies in respective industry / sector.'
  }
];

const ipAreas = [
  {
    title: 'Intellectual Property Protection',
    description: 'Advising on protecting intellectual property (IP) such as trademarks, patents, and copyrights for all contracts as enlisted hereinabove.'
  },
  {
    title: 'Copyright Infringement and Enforcement',
    description: 'Advising on strategies to protect and/or defend potential copyright infringement in the media, digital and e-commerce space, including issuing takedown notices, replies, and managing IP disputes, however not litigations.'
  }
];

const disputeAreas = [
  {
    title: 'Disputes',
    description: 'Notices/ Replies and/or Advising businesses on handling non-performance, breach, delivery disputes, payment disputes et al.'
  },
  {
    title: 'Indemnity Agreements',
    description: 'Drafting / Reviewing / Negotiating Indemnity and Liability Agreements. This includes sending notices/ replies to seek or defend Indemnity.'
  },
  {
    title: 'Dispute Resolution Agreements',
    description: 'Drafting / Reviewing / Negotiating clauses for dispute resolution, including, deadlock clauses, escalation matrix\'s, conciliations, mediation, Governing Law, and Arbitration provisions.'
  }
];

const documentationAreas = [
  {
    title: 'Drafting / Reviewing',
    description: 'Crucial (protective/defensive) clauses such as strengthening of commercial structure (including fundamental purpose, payment terms vs completion milestones, delivery obligations & date), obligations, representations and warranties, indemnity, limitation of liability, termination provisions, and dispute resolution.'
  },
  {
    title: 'Negotiation of Commercial Terms',
    description: 'To ensure favourable business conditions and legal protection.'
  },
  {
    title: 'Enforcement & Performance',
    description: 'Providing advice on enforcing and managing contractual obligations, as well as assisting in cases of non-performance or breach.'
  },
  {
    title: 'Exit Clauses & Termination',
    description: 'Drafting termination clauses and exit strategies for various types of agreements.'
  }
];

export default function ContractsAgreementsAdvisoryPage() {
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
              Contracts/Agreements & Advisory
              <div className="h-1 bg-gray-800 w-32 mx-auto mt-4"></div>
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive legal services for drafting, reviewing, and negotiating various types of 
              agreements and contracts to protect your business interests and ensure legal compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Practice Areas */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
            {practiceAreas.map((area, index) => (
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

      {/* E-Commerce / Retail Businesses */}
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
              E-Commerce / Retail Businesses
              <div className="h-1 bg-gray-800 w-24 mx-auto mt-4"></div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {ecommerceAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-800 pb-1 inline-block">{area.title}</h3>
                <p className="text-gray-700 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

            {/* Intellectual Property */}
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
              Intellectual Property
              <div className="h-1 bg-gray-800 w-24 mx-auto mt-4"></div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {ipAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-800 pb-1 inline-block">{area.title}</h3>
                <p className="text-gray-700 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Indemnity, Liability and Dispute Resolution */}
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
              Indemnity, Liability and Dispute Resolution
              <div className="h-1 bg-gray-800 w-24 mx-auto mt-4"></div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {disputeAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-800 pb-1 inline-block">{area.title}</h3>
                <p className="text-gray-700 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* General End-to-End Documentation */}
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
              General End-to-End Documentation
              <div className="h-1 bg-gray-800 w-24 mx-auto mt-4"></div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {documentationAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-800 pb-1 inline-block">{area.title}</h3>
                <p className="text-gray-700 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
} 