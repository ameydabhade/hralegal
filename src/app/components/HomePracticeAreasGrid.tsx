"use client"
import { 
  ChevronDown,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

// Practice Areas organized like CAM website
const expertiseAreas = [
  {
    id: 'corporate',
    title: 'Corporate • Business • Commercial',
    description: 'Comprehensive corporate legal services for businesses of all sizes.',
    subAreas: [
      'Mergers & Acquisitions',
      'Corporate Governance', 
      'Business Transactions',
      'Commercial Agreements',
      'Joint Ventures',
      'Corporate Restructuring'
    ]
  },
  {
    id: 'ip',
    title: 'Intellectual Property',
    description: 'Protecting and monetizing your intellectual assets.',
    subAreas: [
      'Patent Law',
      'Trademark Protection',
      'Copyright Law',
      'Trade Secrets',
      'IP Licensing',
      'IP Litigation'
    ]
  },
  {
    id: 'employment',
    title: 'Employment • Labour • Industrial Relations',
    description: 'Complete employment law solutions for modern workplaces.',
    subAreas: [
      'Employment Contracts',
      'Labor Disputes',
      'Workplace Compliance',
      'Industrial Relations',
      'Employee Benefits',
      'Workplace Safety'
    ]
  },
  {
    id: 'contracts',
    title: 'Contracts • Compliance • Advisory',
    description: 'Contract drafting, review, and compliance advisory services.',
    subAreas: [
      'Contract Drafting',
      'Contract Review & Negotiation',
      'Regulatory Compliance',
      'Legal Advisory',
      'Risk Assessment',
      'Policy Development'
    ]
  }
];

const developingAreas = [
  {
    id: 'data',
    title: 'Data Privacy • Cybersecurity',
    description: 'Emerging data protection and cybersecurity legal services.',
    subAreas: [
      'Data Protection Compliance',
      'Privacy Policies',
      'Cybersecurity Framework',
      'Cross-Border Data Transfers'
    ]
  },
  {
    id: 'media',
    title: 'Media • Technology • Entertainment',
    description: 'Legal services for the digital and entertainment industry.',
    subAreas: [
      'Media Law',
      'Technology Contracts',
      'Entertainment Agreements',
      'Digital Rights Management'
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
    <section className="py-20 bg-gradient-to-b from-beige-50 to-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header with Red Theme */}
        <div className="text-center mb-16">
        
          <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-6 border-b-4 border-red-600 pb-4 inline-block">
            Practice Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive legal services across multiple practice areas, 
            delivering expert counsel tailored to your specific industry and business needs.
          </p>
        </div>

        {/* Expertise Areas */}
        <div className="mb-16">
         
          
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {expertiseAreas.map((area, index) => (
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
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-red-600 mb-2 border-b-2 border-red-600 pb-1 inline-block">
                        {area.title}
                      </h4>
                      <p className="text-gray-600 text-sm mt-3">{area.description}</p>
                    </div>
                    <div className="flex items-center ml-4">
                      {expandedExpertise === area.id ? (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-6 h-6 text-gray-400" />
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
                    <div className="border-t border-gray-100 pt-4">
                      <div className="bg-red-50 p-4 rounded-xl">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {area.subAreas.map((subArea, subIndex) => (
                            <li key={subIndex} className="flex items-start">
                              <span className="text-red-600 mr-3 text-sm font-bold">•</span>
                              <span className="text-gray-700 text-sm leading-relaxed">{subArea}</span>
                            </li>
                          ))}
                        </ul>
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
          <h3 className="text-3xl font-bold text-red-600 mb-8 text-center border-b-2 border-red-600 pb-3 inline-block w-full">
            Developing Areas
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-6 mb-12">
            {developingAreas.map((area, index) => (
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
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-red-600 mb-2 border-b-2 border-red-600 pb-1 inline-block">
                        {area.title}
                      </h4>
                      <p className="text-gray-600 text-sm mt-3">{area.description}</p>
                    </div>
                    <div className="flex items-center ml-4">
                      {expandedDeveloping === area.id ? (
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      ) : (
                        <ChevronRight className="w-6 h-6 text-gray-400" />
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
                    <div className="border-t border-gray-100 pt-4">
                      <div className="bg-red-50 p-4 rounded-xl">
                        <ul className="space-y-2">
                          {area.subAreas.map((subArea, subIndex) => (
                            <li key={subIndex} className="flex items-start">
                              <span className="text-red-600 mr-3 text-sm font-bold">•</span>
                              <span className="text-gray-700 text-sm leading-relaxed">{subArea}</span>
                            </li>
                          ))}
                        </ul>
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
          <div className="bg-gradient-to-r from-beige-100 to-beige-200 rounded-2xl p-8 border border-beige-300">
            <h3 className="text-2xl font-bold text-red-600 mb-4 border-b-2 border-red-600 pb-2 inline-block">
              Explore Our Complete Legal Services
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              From established expertise areas to developing specializations, we offer comprehensive legal solutions 
              across all major practice areas to support your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/practice-areas" 
                className="inline-flex items-center px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
              >
                View All Practice Areas
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-8 py-3 border-2 border-red-600 text-red-600 font-semibold rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-200"
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