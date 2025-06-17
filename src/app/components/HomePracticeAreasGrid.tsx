"use client"
import { 
  FileText, 
  Building, 
  Shield, 
  Database, 
  Users, 
  Monitor, 
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Award
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

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
          'General Agreements (Partnership, Supply, Service)',
          'Digital Agreements (Software Licenses, Cloud Services)',
          'E-Commerce Agreements (Terms & Conditions, Privacy Policies)'
        ]
      },
      {
        title: 'Compliances & Advisory',
        items: [
          'Privacy and Data Protection',
          'Consumer Protection Compliance',
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
          'Regulatory Compliances'
        ]
      },
      {
        title: 'Corporate Financing & Restructuring',
        items: [
          'Investment Agreements',
          'Debt & Refinancing',
          'Corporate Reorganization'
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
          'Whistleblower Protection'
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
          'Labor Disputes',
          'Workplace Safety and Compliance'
        ]
      }
    ]
  },
  {
    id: 'media',
    icon: Monitor,
    title: 'Media, Technology, and Telecommunications',
    description: 'Media production, technology, and telecom legal services.',
    categories: [
      {
        title: 'Production & Technology',
        items: [
          'Production Agreements',
          'Technology Contracts',
          'Broadcasting & Digital Agreements'
        ]
      }
    ]
  }
];

export default function HomePracticeAreasGrid() {
  const [expandedArea, setExpandedArea] = useState<string | null>(null);

  const toggleArea = (areaId: string) => {
    setExpandedArea(expandedArea === areaId ? null : areaId);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-beige-50 to-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-beige-200 border border-beige-300 rounded-full mb-6">
            <span className="text-sm font-medium text-beige-600">Our Practice Areas</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Practice Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive legal services across multiple practice areas, 
            delivering expert counsel tailored to your specific industry and business needs.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid lg:grid-cols-2 gap-8 auto-rows-max mb-16">
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
                className="p-6 cursor-pointer hover:bg-beige-50 transition-colors duration-200"
                onClick={() => toggleArea(area.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="p-3 bg-beige-400 rounded-xl mr-4 flex-shrink-0">
                      <area.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{area.title}</h3>
                      <p className="text-gray-600 text-sm">{area.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center ml-4">
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
                    <div className="space-y-6">
                      {area.categories.map((category, catIndex) => (
                        <div key={catIndex} className="bg-beige-50 p-4 rounded-xl">
                          <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                            <Award className="w-4 h-4 text-beige-500 mr-2" />
                            {category.title}
                          </h4>
                          <ul className="space-y-2">
                            {category.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start">
                                <div className="w-1.5 h-1.5 bg-beige-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                <span className="text-gray-700 text-xs leading-relaxed">{item}</span>
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

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-beige-100 to-beige-200 rounded-2xl p-8 border border-beige-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Explore Our Complete Legal Services
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              From contracts and compliance to emerging technologies, we offer comprehensive legal solutions 
              across all major practice areas to support your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/practice-areas" 
                className="inline-flex items-center px-8 py-3 bg-beige-400 text-white font-semibold rounded-lg hover:bg-beige-500 transition-colors duration-200"
              >
                View All Practice Areas
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-3 border-2 border-beige-400 text-beige-600 font-semibold rounded-lg hover:bg-beige-400 hover:text-white transition-colors duration-200"
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