"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const practiceAreaGroups = [
  {
    title: 'HRA Corporate',
    color: 'blue',
    underlineColor: 'bg-blue-500',
    textColor: 'text-blue-600',
    items: [
      'Company Secretarial & Corporate Governance',
      'Corporate Structure & Formation',
      'Board Governance & Compliance',
      'Corporate Financing & Restructuring',
      'Investment Agreements',
      'CSR, Sustainability and ESG',
      'Mergers & Acquisitions',
      'Joint Ventures & Strategic Alliances',
      'Due Diligence',
      'Corporate Reorganization'
    ]
  },
  {
    title: 'HRA Finance',
    color: 'amber',
    underlineColor: 'bg-amber-500',
    textColor: 'text-amber-600',
    items: [
      'Banking & Finance Advisory',
      'Debt & Refinancing',
      'Capital Markets',
      'Financial Regulatory Compliance',
      'Fintech Legal Framework',
      'Investment Fund Advisory',
      'Transaction Documentation',
      'Tax Planning & Advisory',
      'International Tax Structuring',
      'Corporate Tax Compliance'
    ]
  },
  {
    title: 'HRA Dispute Resolution',
    color: 'orange',
    underlineColor: 'bg-orange-500',
    textColor: 'text-orange-600',
    items: [
      'Commercial Litigation',
      'Arbitration & Mediation',
      'Contract Disputes',
      'Employment Disputes',
      'IP Disputes & Enforcement',
      'Regulatory Enforcement',
      'White Collar Crime',
      'Anti-Corruption & Compliance',
      'Insolvency & Bankruptcy',
      'Cross-Border Disputes'
    ]
  },
  {
    title: 'HRA Markets',
    color: 'green',
    underlineColor: 'bg-green-500',
    textColor: 'text-green-600',
    items: [
      'Intellectual Property Protection',
      'Technology & Digital Innovation',
      'Data Privacy & Cybersecurity',
      'Media & Entertainment Law',
      'International Trade Advisory',
      'Regulatory Advisory',
      'Employment & Labour Relations',
      'Real Estate Transactions',
      'Startup & Emerging Business',
      'Contract Drafting & Compliance'
    ]
  }
];

const developingAreas = [
  'Antitrust & Competition',
  'Construction & Infrastructure',
  'Criminal Law',
  'Environment & Climate Change',
  'Family Law',
  'Healthcare & Life Sciences',
  'Immigration',
  'Insurance',
  'Mining & Resources',
  'Oil, Gas, Energy & Infrastructure',
  'Private Equity & Venture Capital'
];

export default function HomePracticeAreasGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
            Our Practices
            <div className="h-1 bg-red-600 w-24 mx-auto mt-4"></div>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive legal services across multiple practice areas, delivering expert 
            counsel tailored to your specific industry and business needs.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-20">
          {practiceAreaGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Group Header */}
              <div className="mb-8">
                <h2 className={`text-2xl font-bold ${group.textColor} mb-2`}>
                  {group.title}
                </h2>
                <div className={`h-1 w-24 ${group.underlineColor}`}></div>
              </div>

              {/* Practice Items */}
              <div className="space-y-3">
                {group.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (itemIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="flex items-start group cursor-pointer"
                  >
                    <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-red-500 transition-colors"></div>
                    <span className="text-gray-700 text-sm leading-relaxed hover:text-red-600 transition-colors">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Developing Areas */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
              Developing Areas
              <div className="h-1 bg-red-600 w-20 mx-auto mt-2"></div>
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Emerging practice areas where we are building our expertise 
              to meet evolving market demands and client needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developingAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-red-200"
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  <h3 className="text-lg font-semibold text-gray-700 hover:text-red-600 transition-colors">
                    {area}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Button - Centered and Properly Aligned */}
        <div className="flex justify-center">
          <Link href="/practice-areas">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-lg"
            >
              View All Practice Areas
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
} 