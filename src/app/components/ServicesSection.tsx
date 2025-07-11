'use client';

import { motion } from 'framer-motion';
import { 
  FileText,
  PenTool,
  Shield,
  Search,
  MessageCircle,
  Settings,
  Laptop,
  GitBranch,
  Workflow,
  Presentation
} from 'lucide-react';

const primaryServices = [
  {
    icon: FileText,
    title: "Deal Structuring with / without commercials",
    description: "Comprehensive structuring of business deals and transactions"
  },
  {
    icon: PenTool,
    title: "Contract Drafting, Reviewing, Negotiating and Execution",
    description: "End-to-end contract management and legal documentation"
  },
  {
    icon: Shield,
    title: "Setting Up of Policies, Framework and Manuals",
    description: "Development of comprehensive legal frameworks and policies"
  },
  {
    icon: Search,
    title: "Research and Opinions",
    description: "In-depth legal research and expert legal opinions"
  },
  {
    icon: MessageCircle,
    title: "Consultations & Advisory",
    description: "Strategic legal guidance and advisory services"
  },
  {
    icon: Settings,
    title: "Standards and Practices",
    description: "Implementation of legal standards and best practices"
  }
];

const secondaryServices = [
  {
    icon: Laptop,
    title: "Legal Software Customizations",
    description: "Tailored legal technology solutions"
  },
  {
    icon: GitBranch,
    title: "Project Management",
    description: "Comprehensive legal project oversight"
  },
  {
    icon: Workflow,
    title: "Setting up Legal Processes Flow Charts and Standard Operating Procedures",
    description: "Systematic process documentation and workflows"
  },
  {
    icon: Presentation,
    title: "Trainings and Presentations",
    description: "Professional legal training and educational sessions"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#ECE5DE]">
      <div className="max-w-7xl mx-auto">
        {/* Header - Only badge, no duplicate title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 border border-gray-300 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-700">Our Services</span>
          </div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive legal solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Primary Services */}
        <div className="mb-16">
          {/* End-to-End Legal Services Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12 bg-white rounded-2xl p-8 border-l-4 border-gray-600 shadow-sm"
          >
            <p className="text-lg text-gray-700 leading-relaxed text-center text-justify">
              HRA Legal offers services including structuring, drafting, negotiation and execution of all types of contracts/agreements/documents/paperwork (including definitive agreements, long form agreements, founder agreements, non-disclosure agreements, no objection certificates, letters, agency agreements, et al), sending notices &amp; replies, legal research and analysis, consultations and advisory services, policy drafting and its implementation manual, tabulating databases, setting up of processes, systems, SOP&apos;s (standard operating procedures), providing opinions &amp; solutions, et al for established and emerging businesses, and/or managing entire legal department of your company.
            </p>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center border-b-4 border-gray-800 pb-4 inline-block w-full"
          >
            Primary Services
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {primaryServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start">
                  <div className="p-3 bg-[#B39F96] rounded-xl shadow-lg mr-4 flex-shrink-0">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2 leading-tight border-b border-gray-300 pb-1 inline-block">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed mt-3">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Secondary Services */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center border-b-4 border-gray-800 pb-4 inline-block w-full"
          >
            Secondary Services
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {secondaryServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start">
                  <div className="p-3 bg-[#B39F96] rounded-xl shadow-lg mr-4 flex-shrink-0">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2 leading-tight border-b border-gray-300 pb-1 inline-block">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed mt-3">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 