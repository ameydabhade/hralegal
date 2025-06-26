'use client';

import { motion } from 'framer-motion';

const corporateStructureAreas = [
  {
    id: 'corporate-formation',
    title: 'Corporate Structure & Formation',
    description: 'Drafting, Reviewing and/or Advising on appropriate legal structure for businesses (e.g., corporation, limited liability company, partnership) and assisting with company formation, its documents, and registration.'
  },
  {
    id: 'board-governance',
    title: 'Board Governance',
    description: 'Drafting, Reviewing and/or Advising on corporate governance best practices and policies, charter documents [such as Certificate of Incorporation (COI), Articles of Association (AoA), shareholder agreements, shareholder rights], board structures, duties and power of directors, rules for board meetings, agenda, minutes, and resolutions, and ensuring compliance with legal obligations related to corporate meetings.'
  },
  {
    id: 'regulatory-compliance',
    title: 'Regulatory Compliances',
    description: 'Of relevant local, national, and international corporate laws, governance framework, and regulations, such as ministry of information and broadcasting, Securities Exchange Board of India, securities regulations, and industry-specific regulatory and compliance requirements (e.g., media, healthcare, et al).'
  },
  {
    id: 'corporate-filings',
    title: 'Corporate Filings & Reporting',
    description: 'Of corporate filings, forms, annual returns/reports, corporate disclosures to regulatory authorities, and any other required corporate documents.'
  }
];

const recordKeepingAreas = [
  {
    title: 'Corporate Record Keeping',
    description: 'Ensuring the proper maintenance of corporate records, registers of shareholders and directors, and other statutory documents.'
  },
  {
    title: 'Regulatory Filings and Updates',
    description: 'Regulatory filings, including changes in directorship, shareholding, and company structure, ensuring all changes are duly recorded and filed with the appropriate authorities.'
  }
];

const csrAreas = [
  {
    title: 'Sustainability and ESG',
    description: 'Offering legal counsel on sustainability initiatives, corporate social responsibility (CSR), and meeting ESG criteria in corporate governance.'
  },
  {
    title: 'Corporate Social Responsibility (CSR)',
    description: 'Drafting, Reviewing and/or Advising on CSR Policies, CSR strategies and ensuring compliance with regulations related to environmental impact, ethics, and corporate transparency and good governance.'
  }
];

export default function CompanySecretarialGovernancePage() {
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
              Company Secretarial & Governance
              <div className="h-1 bg-gray-800 w-32 mx-auto mt-4"></div>
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive corporate governance solutions to ensure legal compliance, effective board management, 
              and robust corporate structures that support your business growth and regulatory requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Corporate Structure & Governance Areas */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {corporateStructureAreas.map((area, index) => (
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

      {/* Record Keeping & Regulatory Updates */}
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
              Record Keeping & Regulatory Updates
              <div className="h-1 bg-gray-800 w-24 mx-auto mt-4"></div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {recordKeepingAreas.map((area, index) => (
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

      {/* CSR, Sustainability and ESG */}
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
              CSR, Sustainability and ESG
              <div className="h-1 bg-gray-800 w-24 mx-auto mt-4"></div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {csrAreas.map((area, index) => (
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
    </div>
  );
} 