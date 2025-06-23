'use client';

import { motion } from 'framer-motion';

const sectorGroups = [
  {
    title: 'Traditional Industries',
    color: 'blue',
    underlineColor: 'bg-blue-500',
    textColor: 'text-blue-600',
    items: [
      'Energy',
      'Infrastructure',
      'Insurance',
      'Real Estate'
    ]
  },
  {
    title: 'Digital & Technology',
    color: 'purple',
    underlineColor: 'bg-purple-500',
    textColor: 'text-purple-600',
    items: [
      'Technology & Telecommunications',
      'E-Commerce & Retail',
      'Internet'
    ]
  },
  {
    title: 'Media & Entertainment',
    color: 'orange',
    underlineColor: 'bg-orange-500',
    textColor: 'text-orange-600',
    items: [
      'Media & Entertainment',
      'Publishing',
      'Education & Learning'
    ]
  },
  {
    title: 'Healthcare & Consumer',
    color: 'green',
    underlineColor: 'bg-green-500',
    textColor: 'text-green-600',
    items: [
      'Pharmaceuticals, Healthcare & Life Sciences',
      'Food & Beverages'
    ]
  }
];



export default function SectorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold text-red-600 mb-6">
              Sectors We Serve
              <div className="h-1 bg-red-600 w-32 mx-auto mt-4"></div>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Leveraging sector-specific expertise to provide tailored legal solutions across 
              diverse industries and evolving business environments.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section id="sectors" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {sectorGroups.map((group, index) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Group Header */}
                <div className="mb-8">
                  <h2 className={`text-2xl font-bold ${group.textColor} mb-2`}>
                    {group.title}
                  </h2>
                  <div className={`h-1 w-24 ${group.underlineColor}`}></div>
                </div>

                {/* Sector Items */}
                <div className="space-y-3">
                  {group.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (itemIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="flex items-start group cursor-pointer"
                    >
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-red-500 transition-colors"></div>
                      <span className="text-gray-700 text-sm leading-relaxed hover:text-red-600 transition-colors">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Featured Sector Highlight - Media & Entertainment */}
      <section id="featured" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-50 to-red-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-6">
              Featured Expertise
              <div className="h-1 bg-red-600 w-24 mx-auto mt-4"></div>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Our deep expertise in Media & Entertainment showcases our commitment to 
              understanding complex industry dynamics and delivering specialized solutions.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Productions',
                description: 'Pre-production, production, and post-production legal services'
              },
              {
                title: 'Theatres',
                description: 'Theatrical distribution and exhibition agreements'
              },
              {
                title: 'Satellite & Digital',
                description: 'Broadcasting rights and digital platform agreements'
              },
              {
                title: 'Music',
                description: 'Music rights, licensing, and synchronization agreements'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-red-200"
              >
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                  <h3 className="text-lg font-semibold text-red-600">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-50 to-red-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-6">
              Need Sector-Specific Expertise?
              <div className="h-1 bg-red-600 w-24 mx-auto mt-4"></div>
            </h2>
            <p className="text-base text-gray-700 mb-8 leading-relaxed">
              Our industry-focused approach ensures that you receive legal guidance that understands 
              the unique challenges and opportunities within your sector.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 text-white font-bold px-8 py-4 rounded-lg hover:bg-red-700 transition-colors duration-200 shadow-lg">
                Schedule Consultation
              </button>
              <button className="border-2 border-red-600 text-red-600 font-bold px-8 py-4 rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-200">
                Explore Our Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 