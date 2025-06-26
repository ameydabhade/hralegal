'use client';

import { motion } from 'framer-motion';

const restructuringAreas = [
  {
    id: 'restructuring-research',
    title: 'Restructuring Research & Advisory',
    description: 'Research of current laws and regulations in relation to restructuring corporate debt, equity, and operations to improve financial health.'
  },
  {
    id: 'insolvency-bankruptcy',
    title: 'Insolvency and Bankruptcy',
    description: 'Research of current laws and regulations on insolvency proceedings, liquidation, creditor rights, bankruptcy filings, and bankruptcy protection.'
  },
  {
    id: 'debt-restructuring',
    title: 'Debt Restructuring',
    description: 'Collaborating with in-house counsels with debt restructuring processes, including negotiating with creditors, refinancing, or converting debt into equity.'
  },
  {
    id: 'corporate-reorganization',
    title: 'Corporate Reorganization',
    description: 'Collaborating with in-house counsels for research and review of corporate reorganizations agreements, such as spin-offs, and mergers, to improve operational efficiencies or address financial difficulties.'
  },
  {
    id: 'liquidation-winding-up',
    title: 'Liquidation and Winding-Up',
    description: 'Collaborating with in-house counsels for liquidation or winding-up processes, including the appointment of liquidators, asset distribution, and creditor settlements.'
  }
];

export default function RestructuringInsolvencyBankruptcyPage() {
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
              Restructuring, Insolvency & Bankruptcy
              <div className="h-1 bg-gray-800 w-32 mx-auto mt-4"></div>
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Expert guidance on corporate restructuring, insolvency proceedings, and bankruptcy matters 
              to help businesses navigate financial challenges and optimize their operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Restructuring Services */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {restructuringAreas.map((area, index) => (
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