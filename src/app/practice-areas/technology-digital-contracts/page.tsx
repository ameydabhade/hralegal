'use client';

import { motion } from 'framer-motion';

const technologyContractsAreas = [
  {
    id: 'technology-contracts',
    title: 'Technology Contracts',
    description: 'Software customization, software development agreements, integration agreements (app-in-app, SDK), AMC contracts, payment gateway agreements, gaming development agreements, service level agreements, short messaging service agreements, and IT outsourcing contracts.'
  },
  {
    id: 'saas-agreements',
    title: 'Software-as-a-Service (SaaS) Agreements',
    description: 'For digital platforms providing subscription-based software services, including service level agreements (SLAs), uptime guarantees, and data security provisions.'
  },
  {
    id: 'eula',
    title: 'End User License Agreements (EULA)',
    description: 'For software applications, digital products, or mobile apps to outline usage rights, restrictions, and user responsibilities.'
  },
  {
    id: 'digital-licensing',
    title: 'Licensing & Distribution Agreements',
    description: 'For digital products, including software, online content, and digital assets (e.g., music, videos, apps, and e-books).'
  }
];

const ecommerceAgreementsAreas = [
  {
    title: 'E-Commerce Platform Agreements',
    description: 'Terms of use, seller agreements, affiliate contracts, and product listing terms and conditions.'
  },
  {
    title: 'Payment Gateway Agreements',
    description: 'Contracts with payment service providers and ensuring compliance with payment security standards.'
  },
  {
    title: 'Terms and Conditions/Terms of Use',
    description: 'Privacy policies, and return/refund policies for e-commerce platforms.'
  },
  {
    title: 'Subscription Agreements',
    description: 'Subscription-based businesses (either free or advertisement or pay basis), outlining terms for recurring billing, customer rights, and cancellation policies.'
  }
];

const digitalMarketingAreas = [
  {
    title: 'Advertising and Marketing Agreements',
    description: 'Digital marketing activities, including influencer marketing contracts, affiliate marketing agreements, and advertising terms.'
  }
];

const emergingTechAreas = [
  {
    title: 'Artificial Intelligence (AI) Agreements',
    description: 'AI development, licensing, and partnerships between AI providers, users, and collaborators. Guidance on complying with existing laws and regulations governing AI technologies.'
  },
  {
    title: 'Blockchain Agreements',
    description: 'Blockchain transactions and decentralized applications (DApps). Guidance on navigating regulatory frameworks for cryptocurrency transactions.'
  },
  {
    title: 'Metaverse Agreements',
    description: 'Drafting/Reviewing agreements related to virtual real estate, avatars, and digital assets within the metaverse, including licensing and ownership terms.'
  },
  {
    title: 'Non-Fungible Tokens (NFTs)',
    description: 'Drafting/Reviewing agreements related to the creation, license, sale, and transfer of NFTs, including intellectual property rights and resale terms.'
  }
];

export default function TechnologyDigitalContractsPage() {
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
              Technology & Digital Contracts
              <div className="h-1 bg-gray-800 w-32 mx-auto mt-4"></div>
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Specialized legal services for technology companies, digital platforms, and emerging technologies 
              including AI, blockchain, SaaS, and digital commerce agreements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Technology Contracts */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {technologyContractsAreas.map((area, index) => (
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

      {/* E-Commerce Agreements */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#ECE5DE]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              E-Commerce Agreements
              <div className="h-1 bg-gray-800 w-24 mx-auto mt-4"></div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {ecommerceAgreementsAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-800 pb-1 inline-block">{area.title}</h3>
                <p className="text-gray-700 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Marketing */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Digital Marketing
              <div className="h-1 bg-gray-800 w-24 mx-auto mt-4"></div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {digitalMarketingAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 text-center"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-800 pb-2 inline-block">{area.title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emerging Technologies */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#ECE5DE]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              AI, Blockchain, Metaverse, NFT
              <div className="h-1 bg-gray-800 w-24 mx-auto mt-4"></div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {emergingTechAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-800 pb-1 inline-block">{area.title}</h3>
                <p className="text-gray-700 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 