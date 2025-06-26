'use client';

import { motion } from 'framer-motion';

const projectManagementAreas = [
  {
    id: 'legal-hr-project-management',
    title: 'Legal & HR Project Management',
    description: 'Managing complex legal projects such as Contract Management, Standard Operating Procedures, Rights (media) Management, Human Resources – ERP, SAP, Standard Legal Clauses Framework, Escalation Matrix\'s, Workflows et al.'
  },
  {
    id: 'contract-lifecycle-management',
    title: 'Contract Lifecycle Management',
    description: 'Assisting in managing the entire lifecycle of contracts, from drafting and negotiation to execution and termination. This includes customization of the software, preparing basic templates, contract tracking, renewals, and ensuring compliance with the agreed terms.'
  },
  {
    id: 'data-management-system',
    title: 'Data Management System',
    description: 'Assist in preparation of uniform title / nomenclature, numbering system, manuals, excels, workflow for managing the data in electronic file and physical file formats.'
  },
  {
    id: 'software-customization',
    title: 'Assist in Software Customization',
    description: 'Assist in customization/design of digital platforms or software solutions for automating contract creation, storage, and management or any other legal processes. This includes the standard operating procedures, and varied matrix that are required for optimizing the goods/services to maximize the revenues.'
  }
];

export default function ProjectManagementPage() {
  return (
    <div className="min-h-screen bg-[#ECE5DE]">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-[#ECE5DE]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Project Management
              <div className="h-1 bg-gray-800 w-32 mx-auto mt-4"></div>
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive project management services for legal and business operations, 
              specializing in contract lifecycle management, data systems, and process optimization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Project Management Services */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projectManagementAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-gray-800 pb-1 inline-block">{area.title}</h3>
                <p className="text-gray-700 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 