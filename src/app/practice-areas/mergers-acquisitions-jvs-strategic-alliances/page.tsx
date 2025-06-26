'use client';

import { motion } from 'framer-motion';

const dueDiligenceAreas = [
  {
    id: 'due-diligence',
    title: 'Due Diligence',
    description: 'Conducting thorough legal due diligence for mergers, de-mergers, acquisitions, and investments to identify legal risks, liabilities, and opportunities.'
  },
  {
    id: 'ma-structuring',
    title: 'M&A Structuring and Strategy',
    description: 'Advising on the optimal structure for mergers and acquisitions and negotiating terms for emerging businesses.'
  },
  {
    id: 'ma-agreements',
    title: 'M&A Agreements',
    description: 'Drafting, Reviewing and Negotiating term sheets, LOI\'s, definitive agreements, share purchase agreements (SPAs), shareholder agreements, assignment agreement, novation agreement, intimation letters, and other related documents.'
  },
  {
    id: 'regulatory-approvals',
    title: 'Regulatory Approvals and Notifications',
    description: 'Advising for regulatory filings and obtaining necessary approvals for transactions.'
  }
];

const jointVentureAreas = [
  {
    title: 'Joint Venture Agreements',
    description: 'Drafting, Reviewing and Negotiating joint venture agreements, including the terms of collaboration, capital contributions, profit-sharing, et al.'
  },
  {
    title: 'Strategic Alliances',
    description: 'Drafting strategic alliance agreements, partnerships, collaborations, including defining roles, responsibilities, and profit-sharing mechanisms.'
  }
];

const postTransactionAreas = [
  {
    title: 'Post-M&A Integration',
    description: 'Advising on the post-transaction integration of businesses including forms, filings, employee retention, compliance with existing contracts, and restructuring et al.'
  }
];

export default function MergersAcquisitionsJVsStrategicAlliancesPage() {
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
              Mergers & Acquisitions, JVs & Strategic Alliances
              <div className="h-1 bg-gray-800 w-32 mx-auto mt-4"></div>
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Expert legal guidance for complex corporate transactions, mergers, acquisitions, joint ventures, 
              and strategic partnerships to maximize value and ensure successful business combinations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core M&A Services */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {dueDiligenceAreas.map((area, index) => (
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

      {/* Joint Ventures & Strategic Alliances */}
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
              Joint Ventures & Strategic Alliances
              <div className="h-1 bg-gray-800 w-24 mx-auto mt-4"></div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {jointVentureAreas.map((area, index) => (
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

      {/* Post-Transaction Integration */}
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
              Post-Transaction Integration
              <div className="h-1 bg-gray-800 w-24 mx-auto mt-4"></div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {postTransactionAreas.map((area, index) => (
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