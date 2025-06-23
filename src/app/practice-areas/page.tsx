'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const practiceAreaGroups = [
  {
    title: 'Corporate, Commercial & Company Law',
    color: 'blue',
    underlineColor: 'bg-blue-500',
    textColor: 'text-blue-600',
    items: [
      { name: 'Contracts/Agreements & Advisory', url: '/practice-areas/contracts-agreements-advisory' },
      { name: 'Company Secretarial & Governance', url: null },
      { name: 'Mergers & Acquisitions, JVs & Strategic Alliances', url: null },
      { name: 'Employment, Labour & Industrial Relations', url: null },
      { name: 'Intellectual Property', url: null },
      { name: 'Startups & Emerging Businesses', url: null }
    ]
  },
  {
    title: 'Finance, Taxation & Regulatory',
    color: 'amber',
    underlineColor: 'bg-amber-500',
    textColor: 'text-amber-600',
    items: [
      { name: 'Corporate Financing', url: null },
      { name: 'Restructuring, Insolvency & Bankruptcy', url: null },
      { name: 'Taxation', url: null },
      { name: 'Compliance, Bribery & White Collar Crime', url: null }
    ]
  },
  {
    title: 'Technology, Media & Data',
    color: 'orange',
    underlineColor: 'bg-orange-500',
    textColor: 'text-orange-600',
    items: [
      { name: 'Technology & Digital Contracts', url: null },
      { name: 'Media, Entertainment & Telecommunications', url: null },
      { name: 'Data Privacy, Cybersecurity & Protection', url: null }
    ]
  },
  {
    title: 'Real Estate, Trade & Other Advisory',
    color: 'green',
    underlineColor: 'bg-green-500',
    textColor: 'text-green-600',
    items: [
      { name: 'Real Estate', url: null },
      { name: 'International Trade', url: null },
      { name: 'Project Management', url: null }
    ]
  }
];

const developingAreas = [
  'Admiralty & Maritime',
  'Banking and Finance',
  'Defence, Aviation & Space',
  'Foreign Investment and Exchange Control',
  'Healthcare & Lifesciences',
  'Immigration',
  'Insurance & Reinsurance',
  'Mining & Resources',
  'Oil, Gas, Energy & Infrastructure',
  'Private Equity, Venture Capital & Funds'
];

export default function PracticeAreasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-100 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-red-600 mb-6">
              Our Practices
              <div className="h-1 bg-red-600 w-32 mx-auto mt-4"></div>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive legal services across multiple practice areas, delivering expert 
              counsel tailored to your specific industry and business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section id="expertise" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
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
                      className={`flex items-start group ${item.url ? 'cursor-pointer' : ''}`}
                    >
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-red-500 transition-colors"></div>
                      {item.url ? (
                        <Link href={item.url} className="text-gray-700 text-sm leading-relaxed hover:text-red-600 transition-colors">
                          {item.name}
                        </Link>
                      ) : (
                        <span className="text-gray-700 text-sm leading-relaxed">
                          {item.name}
                        </span>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Developing Areas */}
      <section id="developing" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-beige-100 to-beige-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-6">
              Developing Areas
              <div className="h-1 bg-red-600 w-24 mx-auto mt-4"></div>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
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
      </section>

      {/* Call to Action */}
      <section className="py-4 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-50 to-red-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-6">
              Need Legal Expertise?
              <div className="h-1 bg-red-600 w-24 mx-auto mt-4"></div>
            </h2>
            <p className="text-base text-gray-700 mb-8 leading-relaxed">
              Whether you need assistance in our core practice areas or developing practice areas, 
              our experienced team is ready to provide comprehensive legal solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-lg">
                Schedule Consultation
              </button>
              <button className="border-2 border-red-600 text-red-600 font-bold px-8 py-4 rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-200">
                View Our Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 