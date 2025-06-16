'use client';

import { motion } from 'framer-motion';
import { 
  FileText, 
  Building, 
  Shield, 
  Globe, 
  Database, 
  Users, 
  Home, 
  Rocket, 
  Handshake, 
  Copyright, 
  Monitor, 
  Settings, 
  Calculator, 
  Brain,
  ChevronDown,
  ChevronRight,
  Award,
  TrendingUp
} from 'lucide-react';
import { useState } from 'react';

const expertiseAreas = [
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
          'E-Commerce Agreements (Terms & Conditions, Privacy Policies)',
          'Sales and Distribution Agreements',
          'Subscription Agreements'
        ]
      },
      {
        title: 'Compliances & Advisory',
        items: [
          'Privacy and Data Protection',
          'Consumer Protection Compliance',
          'E-Signature Legal Advisory',
          'Regulatory Research for E-Commerce',
          'Intellectual Property Protection',
          'Indemnity, Liability and Dispute Resolution'
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
          'Corporate Filings & Reporting',
          'CSR, Sustainability and ESG'
        ]
      },
      {
        title: 'Corporate Financing & Restructuring',
        items: [
          'Investment Agreements',
          'Debt & Refinancing',
          'Insolvency and Bankruptcy',
          'Corporate Reorganization',
          'Liquidation and Winding-Up'
        ]
      }
    ]
  },
  {
    id: 'compliance',
    icon: Shield,
    title: 'Compliance, Bribery, Anti-Corruption & White Collar Crime',
    description: 'Comprehensive compliance programs and anti-corruption policies.',
    categories: [
      {
        title: 'Compliance Programs',
        items: [
          'Compliance Program Development',
          'Anti-Corruption and Anti-Bribery Policies',
          'Whistleblower Protection',
          'Penalties and Settlements',
          'Training Presentations'
        ]
      }
    ]
  },
  {
    id: 'trade',
    icon: Globe,
    title: 'International Trade & Export/Import Advisory',
    description: 'Trade compliance and cross-border documentation services.',
    categories: [
      {
        title: 'Trade Services',
        items: [
          'Trade Compliance (Import/Export Laws)',
          'Cross-Border Documentation',
          'International Agreements',
          'Customs and Regulatory Compliance'
        ]
      }
    ]
  },
  {
    id: 'data',
    icon: Database,
    title: 'Data Privacy, Protection, and Cybersecurity',
    description: 'Data privacy compliance and cybersecurity legal services.',
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
          'Workplace Safety and Compliance',
          'Redundancy and Layoffs',
          'Training and Development Programs'
        ]
      }
    ]
  },
  {
    id: 'realestate',
    icon: Home,
    title: 'Real Estate',
    description: 'Real estate transactions, property law, and development agreements.',
    categories: [
      {
        title: 'Property Services',
        items: [
          'General Property Agreements',
          'Property Transactions (Buying, Selling, Leasing)',
          'Landlord and Tenant Relations',
          'Regulatory Research and Advisory'
        ]
      }
    ]
  },
  {
    id: 'startups',
    icon: Rocket,
    title: 'Startups & Emerging Businesses',
    description: 'Comprehensive legal support for startups and emerging businesses.',
    categories: [
      {
        title: 'Startup Services',
        items: [
          'Business Formation and Structure',
          'Contract Drafting (Founder, Employment, Customer)',
          'Intellectual Property Protection',
          'Investment and Growth Support'
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
          'M&A Agreements',
          'Joint Venture Agreements',
          'Strategic Alliances',
          'Post-M&A Integration'
        ]
      }
    ]
  },
  {
    id: 'ip',
    icon: Copyright,
    title: 'Intellectual Property',
    description: 'IP protection, licensing, enforcement, and portfolio management.',
    categories: [
      {
        title: 'IP Services',
        items: [
          'Trademark and Copyright Protection',
          'IP Licensing and Monetization',
          'Brand Protection and Enforcement',
          'IP Portfolio Management'
        ]
      }
    ]
  },
  {
    id: 'media',
    icon: Monitor,
    title: 'Media, Technology, and Telecommunications',
    description: 'Comprehensive media production, technology, and telecom legal services.',
    categories: [
      {
        title: 'Pre-Production',
        items: [
          'Development Agreements',
          'Financing Agreements',
          'Talent and Crew Agreements',
          'Location and Rights Agreements'
        ]
      },
      {
        title: 'Production & Post-Production',
        items: [
          'Production Agreements',
          'Copyright and Trademarks',
          'Third Party Production Agreements',
          'Distribution and Licensing'
        ]
      },
      {
        title: 'Specialized Services',
        items: [
          'Standards and Practices Compliance',
          'Satellite, Broadcasting & Digital Agreements',
          'Music Agreements',
          'Technology Contracts'
        ]
      }
    ]
  },
  {
    id: 'project',
    icon: Settings,
    title: 'Project Management',
    description: 'Legal and HR project management, contract lifecycle management.',
    categories: [
      {
        title: 'Management Services',
        items: [
          'Legal & HR Project Management',
          'Contract Lifecycle Management',
          'Data Management System',
          'Software Customization Assistance'
        ]
      }
    ]
  },
  {
    id: 'taxation',
    icon: Calculator,
    title: 'Taxation',
    description: 'Corporate tax planning, compliance, and dispute resolution.',
    categories: [
      {
        title: 'Tax Services',
        items: [
          'Corporate Tax Planning',
          'Tax Compliance',
          'Tax Disputes and Litigation',
          'Tax Structuring for M&A'
        ]
      }
    ]
  },
  {
    id: 'emerging',
    icon: Brain,
    title: 'AI, Blockchain, Metaverse, NFT',
    description: 'Cutting-edge legal services for emerging technologies.',
    categories: [
      {
        title: 'Emerging Tech',
        items: [
          'Artificial Intelligence (AI) Agreements',
          'Blockchain Regulation and Compliance',
          'Metaverse Legal Framework',
          'NFT Intellectual Property Protection'
        ]
      }
    ]
  }
];

const developingAreas = [
  'Admiralty & Maritime',
  'Aerospace & Defence', 
  'Banking and Finance',
  'Foreign Investment and Exchange Control',
  'Healthcare & Lifesciences',
  'Immigration',
  'Insurance',
  'Mining & Resources',
  'Oil, Gas, Energy & Infrastructure',
  'Private Equity, Venture Capital and funds'
];

export default function PracticeAreasPage() {
  const [expandedArea, setExpandedArea] = useState<string | null>(null);

  const toggleArea = (areaId: string) => {
    setExpandedArea(expandedArea === areaId ? null : areaId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-100 to-white py-20">
      {/* Hero Section */}



      {/* Expertise Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Expertise Areas</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our core areas of legal expertise where we deliver comprehensive, specialized services 
              backed by years of experience and deep industry knowledge.
            </p>
          </motion.div>

          <div className="space-y-6">
            {expertiseAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              >
                {/* Header */}
                <div 
                  className="p-6 cursor-pointer hover:bg-beige-50 transition-colors duration-200"
                  onClick={() => toggleArea(area.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="p-3 bg-beige-400 rounded-xl mr-4">
                        <area.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
                        <p className="text-gray-600">{area.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {expandedArea === area.id ? (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Expandable Content */}
                {expandedArea === area.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <div className="border-t border-gray-100 pt-6">
                      <div className="grid md:grid-cols-2 gap-8">
                        {area.categories.map((category, catIndex) => (
                          <div key={catIndex} className="bg-beige-50 p-6 rounded-xl">
                            <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                              <Award className="w-5 h-5 text-beige-500 mr-2" />
                              {category.title}
                            </h4>
                            <ul className="space-y-2">
                              {category.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start">
                                  <div className="w-2 h-2 bg-beige-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                  <span className="text-gray-700 text-sm">{item}</span>
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
      </section>

      {/* Developing Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-beige-100 to-beige-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Developing Areas</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Emerging practice areas where we provide transactional services, building our expertise 
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
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="p-3 bg-beige-200 rounded-xl mr-4">
                    <TrendingUp className="w-5 h-5 text-beige-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{area}</h3>
                    <p className="text-sm text-gray-600 mt-1">Transactional Services</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-beige-100 to-beige-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=""
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Need Legal Expertise?</h2>
            <p className="text-xl  mb-8 leading-relaxed">
              Whether you need assistance in our core expertise areas or developing practice areas, 
              our experienced team is ready to provide comprehensive legal solutions tailored to your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-beige-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg">
                Schedule Consultation
              </button>
              <button className="border-2 border-beige-200 bg-beige-200  font-bold px-8 py-4 rounded-lg hover:text-beige-600 transition-colors duration-200">
                View Our Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 