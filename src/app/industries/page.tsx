import { Film, Monitor, Building2, Factory, Stethoscope, GraduationCap, Banknote, Truck, Cpu, Music } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Industries We Serve - HRA Legal',
  description: 'HRA Legal provides specialized legal services across diverse industries including Media & Entertainment, Technology, Real Estate, and more.',
}

export default function IndustriesPage() {
  const industries = [
    {
      icon: Film,
      title: "Media & Entertainment",
      description: "Deep expertise in the entertainment industry with extensive experience working with leading production houses, music labels, and content creators.",
      highlights: [
        "Content Licensing & Distribution",
        "Talent Agreements",
        "Production Legal Services",
        "Music Rights Management",
        "Digital Platform Compliance"
      ],
      clients: ["Sony Pictures", "Reliance Entertainment", "Shemaroo", "Goldmines", "Maddock Films"]
    },
    {
      icon: Monitor,
      title: "Technology & IT",
      description: "Comprehensive legal support for technology companies, startups, and digital businesses navigating complex regulatory landscapes.",
      highlights: [
        "Software Licensing",
        "Data Privacy & Protection",
        "Technology Transfer",
        "IP Portfolio Management",
        "Cybersecurity Compliance"
      ],
      clients: ["Tech Startups", "Software Companies", "Digital Platforms"]
    },
    {
      icon: Building2,
      title: "Real Estate & Construction",
      description: "Full-service legal support for real estate developers, construction companies, and property investors.",
      highlights: [
        "Project Development",
        "Construction Contracts",
        "Property Transactions",
        "Regulatory Approvals",
        "Dispute Resolution"
      ],
      clients: ["Real Estate Developers", "Construction Companies", "Property Investors"]
    },
    {
      icon: Factory,
      title: "Manufacturing & Industrial",
      description: "Legal services tailored for manufacturing companies, industrial enterprises, and supply chain businesses.",
      highlights: [
        "Manufacturing Agreements",
        "Supply Chain Contracts",
        "Environmental Compliance",
        "Labor Relations",
        "Product Liability"
      ],
      clients: ["Manufacturing Companies", "Industrial Enterprises"]
    },
    {
      icon: Stethoscope,
      title: "Healthcare & Pharmaceuticals",
      description: "Specialized legal services for healthcare providers, pharmaceutical companies, and medical device manufacturers.",
      highlights: [
        "Regulatory Compliance",
        "Clinical Trial Agreements",
        "Healthcare Partnerships",
        "Medical Device Regulation",
        "Pharmaceutical Licensing"
      ],
      clients: ["Healthcare Providers", "Pharmaceutical Companies"]
    },
    {
      icon: GraduationCap,
      title: "Education & EdTech",
      description: "Legal support for educational institutions, EdTech companies, and online learning platforms.",
      highlights: [
        "Educational Licensing",
        "Student Data Privacy",
        "Institutional Partnerships",
        "Content Development",
        "Regulatory Compliance"
      ],
      clients: ["Educational Institutions", "EdTech Companies"]
    },
    {
      icon: Banknote,
      title: "Financial Services",
      description: "Comprehensive legal services for banks, financial institutions, and fintech companies.",
      highlights: [
        "Banking Regulations",
        "Financial Compliance",
        "Investment Agreements",
        "Fintech Legal Framework",
        "Risk Management"
      ],
      clients: ["Banks", "Financial Institutions", "Fintech Companies"]
    },
    {
      icon: Truck,
      title: "Logistics & Transportation",
      description: "Legal expertise for logistics companies, transportation businesses, and supply chain enterprises.",
      highlights: [
        "Transportation Contracts",
        "Logistics Agreements",
        "Regulatory Compliance",
        "Cross-border Trade",
        "Supply Chain Legal"
      ],
      clients: ["Logistics Companies", "Transportation Businesses"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Industries We Serve
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Leveraging industry-specific expertise to provide tailored legal solutions across diverse sectors and business environments.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-beige-100 rounded-lg flex items-center justify-center mr-6">
                      <IconComponent className="w-8 h-8 text-beige-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{industry.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{industry.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-beige-400 mb-4">Key Legal Services:</h4>
                    <ul className="space-y-2">
                      {industry.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Representative Clients:</h4>
                    <div className="flex flex-wrap gap-2">
                      {industry.clients.map((client, clientIndex) => (
                        <span key={clientIndex} className="px-3 py-1 bg-beige-50 text-beige-400 text-sm rounded-full">
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Clients Section */}
      <section className="bg-beige-50 py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Prestigious Clients
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We are proud to serve leading organizations across industries, providing specialized legal expertise that enables their success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Media & Entertainment Clients */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Film className="w-8 h-8 text-beige-400 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Media & Entertainment</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <Image
                    src="/Logos/sony.svg"
                    alt="Sony Pictures"
                    width={80}
                    height={32}
                    className="h-8 w-auto object-contain"
                  />
                  <span className="ml-3 text-gray-700">Sony Pictures Networks India</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <Image
                    src="/Logos/relience.svg"
                    alt="Reliance Entertainment"
                    width={80}
                    height={32}
                    className="h-8 w-auto object-contain"
                  />
                  <span className="ml-3 text-gray-700">Reliance Entertainment</span>
                </div>
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <Image
                    src="/Logos/shemaroo.svg"
                    alt="Shemaroo Entertainment"
                    width={80}
                    height={32}
                    className="h-8 w-auto object-contain"
                  />
                  <span className="ml-3 text-gray-700">Shemaroo Entertainment</span>
                </div>
              </div>
            </div>

            {/* Industry Expertise */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Cpu className="w-8 h-8 text-beige-400 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Industry Expertise</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Legal Experience</span>
                  <span className="font-bold text-beige-400">15+ Years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Industries Served</span>
                  <span className="font-bold text-beige-400">8+ Sectors</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Major Clients</span>
                  <span className="font-bold text-beige-400">50+ Companies</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Success Rate</span>
                  <span className="font-bold text-beige-400">95%</span>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center mb-4">
                <Music className="w-8 h-8 text-beige-400 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Why Choose HRA Legal</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">Deep industry knowledge and experience</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">Proven track record with industry leaders</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">Tailored solutions for specific sectors</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                  <span className="text-gray-700">Comprehensive legal support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Partner with Industry Experts?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Our industry-specific legal expertise can help your business navigate complex challenges and achieve sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-beige-400 text-white font-semibold rounded-md hover:bg-beige-800 transition-colors duration-200"
            >
              Discuss Your Industry Needs
            </a>
            <a 
              href="/practice-areas"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-beige-400 text-beige-400 font-semibold rounded-md hover:bg-beige-400 hover:text-white transition-colors duration-200"
            >
              View Our Practice Areas
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 