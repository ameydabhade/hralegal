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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-beige-50 via-white to-beige-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-beige-200 border border-beige-300 rounded-full mb-6">
            <span className="text-sm font-medium text-beige-600">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Services
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive legal solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Primary Services */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
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
                  <div className="p-3 bg-beige-400 rounded-xl shadow-lg mr-4 flex-shrink-0">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
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
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
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
                  <div className="p-3 bg-beige-400 rounded-xl shadow-lg mr-4 flex-shrink-0">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2 leading-tight">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* End-to-End Legal Services Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-beige-100 to-beige-200 rounded-2xl p-8 md:p-12  relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 left-1/4 w-24 h-24 border border-white rounded-full"
            />
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="absolute top-3/4 right-1/4 w-16 h-16 border border-white rounded-full"
            />
          </div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              End-to-End Legal Services
            </h3>
            
            <p className="text-lg leading-relaxed  max-w-5xl mx-auto text-center">
              HRA Legal offers end-to-end Legal services, including, structuring, drafting, negotiation and 
              execution of all types of contracts/agreements/documents/paperwork (including definitive 
              agreements, long form agreements, founder agreements, non-disclosure agreements, no 
              objection certificates, letters, agency agreements, et al), sending notices & replies, legal 
              research and analysis, consultations and advisory services, policy drafting and its 
              implementation manual, tabulating databases, setting up of processes, systems, SOP's 
              (standard operating procedures), providing opinions & solutions, et al for established and 
              emerging businesses, and/or managing entire legal department of your company.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 