'use client';

import { motion } from 'framer-motion';

const complianceAreas = [
  {
    id: 'compliance-program-development',
    title: 'Compliance Program Development',
    description: 'Designing, drafting and implementing compliance programs, policies, and procedures to adhere to laws and regulations across industries (such as anti-money laundering (AML), anti-bribery and corruption (ABC), data protection).'
  },
  {
    id: 'anti-corruption-policies',
    title: 'Anti-Corruption and Anti-Bribery Policies',
    description: 'Drafting / Reviewing anti-corruption and anti-bribery policies in accordance with international standards (e.g., Prevention of Money Laundering Act, 2002 (PMLA), the UK Bribery Act, the US Foreign Corrupt Practices Act). This also includes providing a standard provision for Anti Bribery / Anti-Corruption / Data Protection which can be incorporated in all legal documents of the company.'
  },
  {
    id: 'whistleblower-protection',
    title: 'Whistleblower Protection',
    description: 'Advising on whistleblower protection programs, including drafting whistleblower policies, setting up reporting mechanisms and escalations, implementation process & its documentation.'
  },
  {
    id: 'penalties-settlements',
    title: 'Penalties and Settlements',
    description: 'Assisting company with internal drafting and negotiating internal settlements, and remediation documents.'
  },
  {
    id: 'corporate-presentations',
    title: 'Corporate Presentations',
    description: 'Salient features, fundamental provisions, do\'s and don\'ts et al of the aforementioned laws.'
  }
];

export default function ComplianceBriberyWhiteCollarCrimePage() {
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
              Compliance, Bribery & White Collar Crime
              <div className="h-1 bg-gray-800 w-32 mx-auto mt-4"></div>
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive compliance and white collar crime services including anti-corruption policies, 
              whistleblower protection, and regulatory compliance programs to protect your business reputation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Compliance Services */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {complianceAreas.map((area, index) => (
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