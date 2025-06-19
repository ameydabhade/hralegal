"use client"
import { 
  ChevronDown,
  ChevronRight,
  ArrowRight,
  FileText, 
  Building, 
  Database,
  Users, 
  Handshake, 
  Monitor
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

// Featured Expertise Areas for Home Page (subset of main practice areas)
const featuredExpertiseAreas = [
  {
    id: 'contracts',
    icon: FileText,
    title: 'Contracts, Compliances, and Advisory',
    description: 'Comprehensive contract drafting, review, negotiation, and compliance advisory services.',
    categories: [
      {
        title: 'Contract Drafting & Review',
        items: [
          'General Agreements (Partnership, Supply, Service, Employment)',
          'Digital Agreements (Software Licenses, Cloud Services)',
          'Technology and SaaS Agreements',
          'E-Commerce Agreements (Terms & Conditions, Privacy Policies)'
        ]
      },
      {
        title: 'Compliances & Advisory',
        items: [
          'Privacy and Data Protection',
          'Consumer Protection Compliance',
          'E-Signature Legal Advisory',
          'Regulatory Research for E-Commerce'
        ]
      }
    ]
  },
  {
    id: 'corporate',
    icon: Building,
    title: 'Company Secretarial and Corporate Governance',
    description: 'Corporate structure formation, governance, financing, and restructuring services.',
    categories: [
      {
        title: 'Company Secretarial',
        items: [
          'Corporate Structure & Formation',
          'Board Governance',
          'Regulatory Compliances',
          'Corporate Filings & Reporting'
        ]
      },
      {
        title: 'Corporate Financing & Restructuring',
        items: [
          'Investment Agreements',
          'Debt & Refinancing',
          'Insolvency and Bankruptcy',
          'Corporate Reorganization'
        ]
      }
    ]
  },
  {
    id: 'employment',
    icon: Users,
    title: 'Employment, Labour & Industrial Relations',
    description: 'Complete employment law services and workplace compliance.',
    categories: [
      {
        title: 'Employment Services',
        items: [
          'Employment Contracts and Policies',
          'Employee Benefits and Compensation',
          'Labor Disputes',
          'Workplace Safety and Compliance'
        ]
      }
    ]
  },
  {
    id: 'ma',
    icon: Handshake,
    title: 'Mergers & Acquisitions, JVs, Strategic Alliances',
    description: 'M&A transactions, joint ventures, and strategic partnerships.',
    categories: [
      {
        title: 'M&A Services',
        items: [
          'Due Diligence',
          'M&A Structuring and Strategy',
          'Transaction Documentation',
          'Regulatory Approvals'
        ]
      },
      {
        title: 'Joint Ventures & Strategic Alliances',
        items: [
          'Joint Venture Agreements',
          'Strategic Partnership Structuring',
          'Technology Transfer Agreements',
          'Distribution and Licensing Arrangements'
        ]
      }
    ]
  }
];

// Featured Developing Areas for Home Page
const featuredDevelopingAreas = [
  {
    id: 'data',
    icon: Database,
    title: 'Data Privacy, Protection, and Cybersecurity',
    description: '',
    categories: [
      {
        title: 'Data Protection',
        items: [
          'Data Privacy Compliance',
          'Cross-Border Data Transfers',
          'Third-Party Data Contracts',
          'Privacy Policy Drafting'
        ]
      }
    ]
  },
  {
    id: 'tech',
    icon: Monitor,
    title: 'Technology, Fintech & Digital Innovation',
    description: '',
    categories: [
      {
        title: 'Technology Services',
        items: [
          'Fintech Regulatory Compliance',
          'Digital Product Development',
          'API and Integration Agreements',
          'Blockchain and Cryptocurrency Advisory'
        ]
      }
    ]
  }
];

export default function HomePracticeAreasGrid() {
  const [expandedExpertise, setExpandedExpertise] = useState<string | null>(null);
  const [expandedDeveloping, setExpandedDeveloping] = useState<string | null>(null);

  const toggleExpertise = (areaId: string) => {
    setExpandedExpertise(expandedExpertise === areaId ? null : areaId);
  };

  const toggleDeveloping = (areaId: string) => {
    setExpandedDeveloping(expandedDeveloping === areaId ? null : areaId);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header with Red Theme */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
            Practice Areas
            <div className="h-1 bg-red-600 w-24 mx-auto mt-4"></div>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive legal services across multiple practice areas, 
            delivering expert counsel tailored to your specific industry and business needs.
          </p>
        </div>

        {/* Expertise Areas */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
              Expertise Areas
              <div className="h-0.5 bg-red-600 w-20 mx-auto mt-2"></div>
            </h3>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Our core practice areas where we deliver comprehensive, specialized services 
              backed by years of experience and deep industry knowledge.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {featuredExpertiseAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Header */}
                <div 
                  className="p-6 cursor-pointer hover:bg-red-50 transition-colors duration-200"
                  onClick={() => toggleExpertise(area.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-red-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-red-600 mb-2">
                          {area.title}
                          <div className="h-0.5 bg-red-600 w-16 mt-1"></div>
                        </h4>
                        <p className="text-gray-600 text-sm">{area.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center ml-4">
                      {expandedExpertise === area.id ? (
                        <ChevronDown className="w-5 h-5 text-red-600" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-red-600" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expandable Content */}
                {expandedExpertise === area.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="border-t border-gray-100 pt-6">
                      <div className="space-y-6">
                        {area.categories.map((category, catIndex) => (
                          <div key={catIndex} className="bg-red-50 p-4 rounded-xl">
                            <h4 className="text-base font-bold text-red-600 mb-3">
                              • {category.title}
                              <div className="h-0.5 bg-red-600 w-12 mt-1"></div>
                            </h4>
                            <ul className="space-y-2">
                              {category.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start">
                                  <div className="w-1 h-1 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Developing Areas */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-red-600 mb-4">
              Developing Areas
              <div className="h-0.5 bg-red-600 w-20 mx-auto mt-2"></div>
            </h3>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Emerging practice areas where we are building our expertise 
              to meet evolving market demands and client needs.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {featuredDevelopingAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* Header */}
                <div 
                  className="p-6 cursor-pointer hover:bg-red-50 transition-colors duration-200"
                  onClick={() => toggleDeveloping(area.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-red-600 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-red-600 mb-2">
                          {area.title}
                          <div className="h-0.5 bg-red-600 w-16 mt-1"></div>
                        </h4>
                        <p className="text-gray-600 text-sm">{area.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center ml-4">
                      {expandedDeveloping === area.id ? (
                        <ChevronDown className="w-5 h-5 text-red-600" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-red-600" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expandable Content */}
                {expandedDeveloping === area.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="border-t border-gray-100 pt-6">
                      <div className="space-y-6">
                        {area.categories.map((category, catIndex) => (
                          <div key={catIndex} className="bg-red-50 p-4 rounded-xl">
                            <h4 className="text-base font-bold text-red-600 mb-3">
                              • {category.title}
                              <div className="h-0.5 bg-red-600 w-12 mt-1"></div>
                            </h4>
                            <ul className="space-y-2">
                              {category.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start">
                                  <div className="w-1 h-1 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-2xl p-8 border border-red-200">
            <h3 className="text-xl md:text-2xl font-bold text-red-600 mb-4">
              Explore Our Complete Legal Services
              <div className="h-0.5 bg-red-600 w-20 mx-auto mt-2"></div>
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto text-sm">
              From established expertise areas to developing specializations, we offer comprehensive legal solutions 
              across all major practice areas to support your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/practice-areas" 
                className="inline-flex items-center px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm"
              >
                View All Practice Areas
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-2 border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-200 text-sm"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 