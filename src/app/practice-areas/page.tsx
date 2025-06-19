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

const practiceAreas = [
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
          'Transaction Documentation',
          'Regulatory Approvals',
          'Post-Transaction Integration'
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
  },
  {
    id: 'ip',
    icon: Copyright,
    title: 'Intellectual Property',
    description: 'IP protection, enforcement, and strategic advisory services.',
    categories: [
      {
        title: 'IP Services',
        items: [
          'Trademark Registration and Protection',
          'Copyright and Content Protection',
          'Patent Advisory and Protection',
          'IP Licensing and Commercialization',
          'IP Enforcement and Litigation',
          'Brand Protection Strategies'
        ]
      }
    ]
  },
  {
    id: 'tech',
    icon: Monitor,
    title: 'Technology, Fintech & Digital Innovation',
    description: 'Legal services for technology companies and digital innovation.',
    categories: [
      {
        title: 'Technology Services',
        items: [
          'Fintech Regulatory Compliance',
          'Digital Product Development',
          'API and Integration Agreements',
          'Blockchain and Cryptocurrency Advisory',
          'AI and Machine Learning Legal Framework'
        ]
      }
    ]
  },
  {
    id: 'regulatory',
    icon: Settings,
    title: 'Regulatory Advisory & Government Relations',
    description: 'Regulatory compliance and government relations services.',
    categories: [
      {
        title: 'Regulatory Services',
        items: [
          'Regulatory Research and Analysis',
          'Government Relations and Advocacy',
          'Policy Development and Implementation',
          'Regulatory Risk Assessment',
          'Compliance Monitoring and Reporting'
        ]
      }
    ]
  },
  {
    id: 'tax',
    icon: Calculator,
    title: 'Tax Planning & Advisory',
    description: 'Strategic tax planning and advisory services.',
    categories: [
      {
        title: 'Tax Services',
        items: [
          'Corporate Tax Planning',
          'Transaction Tax Advisory',
          'International Tax Structuring',
          'Tax Compliance and Reporting',
          'Tax Dispute Resolution'
        ]
      }
    ]
  },
  {
    id: 'disputes',
    icon: Brain,
    title: 'Dispute Resolution & Litigation',
    description: 'Comprehensive dispute resolution and litigation services.',
    categories: [
      {
        title: 'Dispute Resolution',
        items: [
          'Commercial Litigation',
          'Arbitration and Mediation',
          'Contract Disputes',
          'Employment Disputes',
          'IP Disputes',
          'Regulatory Enforcement'
        ]
      }
    ]
  }
];

const developingAreas = [
  'Antitrust & Competition',
  'Banking & Finance',
  'Capital Markets',
  'Construction & Infrastructure',
  'Criminal Law',
  'Environment & Climate Change',
  'Family Law',
  'Healthcare & Life Sciences',
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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold text-red-600 mb-6">
              Practice Areas
              <div className="h-1 bg-red-600 w-32 mx-auto mt-4"></div>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We provide comprehensive legal services across multiple practice areas, delivering expert 
              counsel tailored to your specific industry and business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
 

          <div className="grid lg:grid-cols-2 gap-8 auto-rows-max">
            {practiceAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 self-start"
              >
                {/* Header */}
                <div 
                  className="p-6 cursor-pointer hover:bg-red-50 transition-colors duration-200"
                  onClick={() => toggleArea(area.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="p-3 bg-red-600 rounded-xl mr-4 flex-shrink-0">
                        <area.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-red-600 mb-2">
                          {area.title}
                          <div className="h-0.5 bg-red-600 w-16 mt-1"></div>
                        </h3>
                        <p className="text-gray-600 text-sm">{area.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center ml-4">
                      {expandedArea === area.id ? (
                        <ChevronDown className="w-6 h-6 text-red-600" />
                      ) : (
                        <ChevronRight className="w-6 h-6 text-red-600" />
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
                      <div className="space-y-6">
                        {area.categories.map((category, catIndex) => (
                          <div key={catIndex} className="bg-red-50 p-4 rounded-xl">
                            <h4 className="text-lg font-bold text-red-600 mb-3 flex items-center">
                              <Award className="w-4 h-4 text-red-600 mr-2" />
                              {category.title}
                              <div className="h-0.5 bg-red-600 w-12 ml-2 mt-0.5"></div>
                            </h4>
                            <ul className="space-y-2">
                              {category.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="flex items-start">
                                  <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
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
      </section>

      {/* Developing Areas */}
      <section id="developing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-6">
              Developing Areas
              <div className="h-1 bg-red-600 w-24 mx-auto mt-4"></div>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
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
                className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center">
                  <div className="p-3 bg-red-100 rounded-xl mr-4">
                    <TrendingUp className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-red-600">
                      {area}
                      <div className="h-0.5 bg-red-600 w-12 mt-1"></div>
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-50 to-red-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-6">
              Need Legal Expertise?
              <div className="h-1 bg-red-600 w-24 mx-auto mt-4"></div>
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
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