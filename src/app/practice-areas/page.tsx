'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import PageWrapper from '../components/PageWrapper';

const practiceAreaGroups = [
  {
    title: 'Corporate, Commercial & Company Law',
    color: 'blue',
    underlineColor: 'bg-blue-500',
    textColor: 'text-blue-600',
    items: [
      { name: 'Contracts/Agreements & Advisory', url: '/practice-areas/contracts-agreements-advisory' },
      { name: 'Company Secretarial & Governance', url: '/practice-areas/company-secretarial-governance' },
      { name: 'Mergers & Acquisitions, JVs & Strategic Alliances', url: '/practice-areas/mergers-acquisitions-jvs-strategic-alliances' },
      { name: 'Employment, Labour & Industrial Relations', url: '/practice-areas/employment-labour-industrial-relations' },
      { name: 'Intellectual Property', url: '/practice-areas/intellectual-property' },
      { name: 'Startups & Emerging Businesses', url: '/practice-areas/startups-emerging-businesses' } 
    ]
  },
  {
    title: 'Finance, Taxation & Regulatory',
    color: 'amber',
    underlineColor: 'bg-amber-500',
    textColor: 'text-amber-600',
    items: [
      { name: 'Corporate Financing', url: '/practice-areas/corporate-financing' },
      { name: 'Restructuring, Insolvency & Bankruptcy', url: '/practice-areas/restructuring-insolvency-bankruptcy' },
      { name: 'Taxation', url: '/practice-areas/taxation' },
      { name: 'Compliance, Bribery & White Collar Crime', url: '/practice-areas/compliance-bribery-white-collar-crime' }
    ]
  },
  {
    title: 'Technology, Media & Data',
    color: 'orange',
    underlineColor: 'bg-orange-500',
    textColor: 'text-orange-600',
    items: [
      { name: 'Technology & Digital Contracts', url: '/practice-areas/technology-digital-contracts' },
      { name: 'Media, Entertainment & Telecommunications', url: '/practice-areas/media-entertainment-telecommunications' },
      { name: 'Data Privacy, Cybersecurity & Protection', url: '/practice-areas/data-privacy-cybersecurity-protection' }
    ]
  },
  {
    title: 'Real Estate, Trade & Other Advisory',
    color: 'green',
    underlineColor: 'bg-green-500',
    textColor: 'text-green-600',
    items: [
      { name: 'Real Estate', url: '/practice-areas/real-estate' },
      { name: 'International Trade', url: '/practice-areas/international-trade' },
      { name: 'Project Management', url: '/practice-areas/project-management' }
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
    <PageWrapper 
      title="Our Practices"
      subtitle="We provide comprehensive legal services across multiple practice areas, delivering expert counsel tailored to your specific industry and business needs."
    >
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
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-gray-600 transition-colors"></div>
                      {item.url ? (
                        <Link href={item.url} className="text-gray-700 text-sm leading-relaxed hover:text-gray-900 transition-colors">
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
      <section id="developing" className="py-12 px-4 sm:px-6 lg:px-8 bg-[#ECE5DE]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Developing Areas
              <div className="h-1 bg-gray-800 w-24 mx-auto mt-4"></div>
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
                className="bg-white p-6 cursor-pointer rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-gray-300"
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gray-500 rounded-full mr-3"></div>
                  <h3 className="text-lg font-semibold text-gray-700 hover:text-gray-900 transition-colors">
                    {area}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
} 