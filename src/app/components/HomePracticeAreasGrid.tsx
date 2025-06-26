"use client"
import { motion } from 'framer-motion';


const practiceAreaGroups = [
  {
    title: 'Corporate, Commercial & Company Law',
    color: 'blue',
    underlineColor: 'bg-blue-500',
    textColor: 'text-blue-600',
    items: [
      'Contracts/Agreements & Advisory',
      'Company Secretarial & Governance',
      'Mergers & Acquisitions, JVs & Strategic Alliances',
      'Employment, Labour & Industrial Relations',
      'Intellectual Property',
      'Startups & Emerging Businesses'
    ]
  },
  {
    title: 'Finance, Taxation & Regulatory',
    color: 'amber',
    underlineColor: 'bg-amber-500',
    textColor: 'text-amber-600',
    items: [
      'Corporate Financing',
      'Restructuring, Insolvency & Bankruptcy',
      'Taxation',
      'Compliance, Bribery & White Collar Crime'
    ]
  },
  {
    title: 'Technology, Media & Data',
    color: 'orange',
    underlineColor: 'bg-orange-500',
    textColor: 'text-orange-600',
    items: [
      'Technology & Digital Contracts',
      'Media, Entertainment & Telecommunications',
      'Data Privacy, Cybersecurity & Protection'
    ]
  },
  {
    title: 'Real Estate, Trade & Other Advisory',
    color: 'green',
    underlineColor: 'bg-green-500',
    textColor: 'text-green-600',
    items: [
      'Real Estate',
      'International Trade',
      'Project Management'
    ]
  }
];

const developingAreas = [
  'Admiralty & Maritime',
  'Banking and Finance',
  'Defence, Aviation & Space',
  'Foreign Investment and Exchange Control',
  'Healthcare & Lifesciences',
  'Immigration',
  'Insurance & Reinsurance',
  'Mining & Resources',
  'Oil, Gas, Energy & Infrastructure',
  'Private Equity, Venture Capital & Funds'
];

export default function HomePracticeAreasGrid() {
  return (
    <section className="py-20 bg-[#ECE5DE]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
                      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Practices
              <div className="h-1 bg-gray-800 w-24 mx-auto mt-4"></div>
            </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive legal services across multiple practice areas, delivering expert 
            counsel tailored to your specific industry and business needs.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-20">
          {practiceAreaGroups.map((group, index) => (
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

              {/* Practice Items */}
              <div className="space-y-3">
                {group.items.map((item, itemIndex) => {
                  // Convert practice area name to URL slug
                                     const getUrlSlug = (name: string) => {
                     const urlMap: { [key: string]: string } = {
                       'Contracts/Agreements & Advisory': '/practice-areas/contracts-agreements-advisory',
                       'Company Secretarial & Governance': '/practice-areas/company-secretarial-governance',
                       'Mergers & Acquisitions, JVs & Strategic Alliances': '/practice-areas/mergers-acquisitions-jvs-strategic-alliances',
                       'Employment, Labour & Industrial Relations': '/practice-areas/employment-labour-industrial-relations',
                       'Intellectual Property': '/practice-areas/intellectual-property',
                       'Startups & Emerging Businesses': '/practice-areas/startups-emerging-businesses',
                       'Real Estate': '/practice-areas/real-estate',
                       'International Trade': '/practice-areas/international-trade',
                       'Project Management': '/practice-areas/project-management',
                       'Technology & Digital Contracts': '/practice-areas/technology-digital-contracts',
                       'Media, Entertainment & Telecommunications': '/practice-areas/media-entertainment-telecommunications',
                       'Data Privacy, Cybersecurity & Protection': '/practice-areas/data-privacy-cybersecurity-protection',
                       'Corporate Financing': '/practice-areas/corporate-financing',
                       'Restructuring, Insolvency & Bankruptcy': '/practice-areas/restructuring-insolvency-bankruptcy',
                       'Taxation': '/practice-areas/taxation',
                       'Compliance, Bribery & White Collar Crime': '/practice-areas/compliance-bribery-white-collar-crime'
                     };
                     return urlMap[name] || null;
                   };
                  
                  const url = getUrlSlug(item);
                  
                  return (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (index * 0.1) + (itemIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="flex items-start group cursor-pointer"
                      onClick={() => {
                        if (url) {
                          window.location.href = url;
                        }
                      }}
                    >
                      <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:bg-gray-600 transition-colors"></div>
                      <span className={`text-sm leading-relaxed transition-colors ${
                        url ? 'text-gray-700 hover:text-gray-900 cursor-pointer' : 'text-gray-500'
                      }`}>
                        {item}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Developing Areas */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Developing Areas
              <div className="h-1 bg-gray-800 w-20 mx-auto mt-2"></div>
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 cursor-pointer hover:border-gray-300"
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-gray-500 rounded-full mr-3"></div>
                  <h3 className="text-lg font-semibold text-gray-700 hover:text-gray-900 transition-colors">
                    {area}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
} 