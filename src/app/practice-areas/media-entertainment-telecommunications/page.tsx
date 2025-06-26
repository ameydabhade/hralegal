'use client';

import { motion } from 'framer-motion';

const preProductionAreas = [
  {
    id: 'development-agreements',
    title: 'Development Agreements',
    description: 'Development including First Look or Exclusive Arrangements, Option Agreements between production company and writer or rights holder, Writer\'s Agreements, and format rights.'
  },
  {
    id: 'financing-agreements',
    title: 'Financing Agreements',
    description: 'Multiple production companies or investors contribute funds, Investment agreements with investor terms for profit sharing and equity.'
  },
  {
    id: 'talent-crew-agreements',
    title: 'Talent and Crew Agreements',
    description: 'Location and Rights Agreements, Location Releases for shooting permissions, Music & Images Licensing for pre-existing content.'
  },
  {
    id: 'script-reviews',
    title: 'Script Reviews',
    description: 'Identify non-compliances or violation of any media laws/regulation to avoid future claims or liabilities.'
  }
];

const productionAreas = [
  {
    title: 'Production Agreements',
    description: 'All structures of master production agreements including Co-Production, Commissioning/Work-For-Hire, Production cum Assignment Agreement, Direct Acquisition (ready content) Agreements.'
  },
  {
    title: 'Above-the-Line Contracts',
    description: 'For principal talent (actors, directors, casting director, producers, writers, lead star cast, music composer, lead singers etc.).'
  },
  {
    title: 'Below-the-Line Contracts',
    description: 'For crew members such as line producer, cinematographers, art directors, costume designer, sound engineers, costume designers, etc.'
  },
  {
    title: 'Copyright and Trademarks',
    description: 'Copyright Registration and Trademark Protection to ensure intellectual property protection and avoid infringement.'
  }
];

const distributionAreas = [
  {
    title: 'Theatrical Distribution',
    description: 'Distribution agreements for theatrical releases and cinema exhibition.'
  },
  {
    title: 'Television/Satellite Rights',
    description: 'Sale or licensing of content to TV networks via various satellite rights such as Terrestrial Television, Pay Television, Free Television, Cable TV Rights, etc.'
  },
  {
    title: 'Digital Rights',
    description: 'Sale or licensing of content via various digital rights on streaming and download basis such as Video on Demand – Transaction VOD, Subscription VOD, Advertising VOD.'
  },
  {
    title: 'Music Rights',
    description: 'Synchronization rights, Master rights, Music Publishing Agreements for composers and songwriters.'
  }
];

const telecomsAreas = [
  {
    title: 'Telecommunications Regulations',
    description: 'Providing counsel on telecommunications regulations, spectrum licensing, and compliance with government regulations related to telecommunications services.'
  }
];

export default function MediaEntertainmentTelecommunicationsPage() {
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
              Media, Entertainment & Telecommunications
              <div className="h-1 bg-gray-800 w-32 mx-auto mt-4"></div>
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              With close to 2 decades of enriching experience in Media and Entertainment sector, 
              we provide comprehensive legal services across all stages of content creation, production, 
              distribution, and telecommunications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pre-Production Services */}
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
              Pre-Production
              <div className="h-1 bg-gray-800 w-24 mx-auto mt-4"></div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {preProductionAreas.map((area, index) => (
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

      {/* Production Services */}
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
              Production
              <div className="h-1 bg-gray-800 w-24 mx-auto mt-4"></div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {productionAreas.map((area, index) => (
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

      {/* Distribution & Licensing */}
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
              Distribution & Licensing
              <div className="h-1 bg-gray-800 w-24 mx-auto mt-4"></div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {distributionAreas.map((area, index) => (
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

      {/* Telecommunications */}
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
              Telecommunications
              <div className="h-1 bg-gray-800 w-24 mx-auto mt-4"></div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {telecomsAreas.map((area, index) => (
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
    </div>
  );
} 