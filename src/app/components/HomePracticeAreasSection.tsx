import { Building, Copyright, Users, FileText, Briefcase, Shield } from 'lucide-react';
import Link from 'next/link';

const practiceAreas = [
  {
    icon: Building,
    title: "Corporate Law",
    description: "Comprehensive corporate legal services including M&A, governance, and compliance.",
    features: ["Mergers & Acquisitions", "Corporate Governance", "Regulatory Compliance"]
  },
  {
    icon: Copyright,
    title: "Intellectual Property",
    description: "Protecting and monetizing your intellectual assets across all industries.",
    features: ["Trademark Registration", "Copyright Protection", "IP Litigation"]
  },
  {
    icon: Users,
    title: "Employment Law",
    description: "Complete employment legal solutions for businesses and individuals.",
    features: ["Employment Contracts", "Workplace Compliance", "Dispute Resolution"]
  },
  {
    icon: FileText,
    title: "Contract Drafting",
    description: "Expert contract drafting and negotiation services for all business needs.",
    features: ["Commercial Contracts", "Service Agreements", "Partnership Deals"]
  },
  {
    icon: Briefcase,
    title: "Business Advisory",
    description: "Strategic legal counsel for business growth and operational excellence.",
    features: ["Legal Strategy", "Risk Management", "Business Structuring"]
  },
  {
    icon: Shield,
    title: "Compliance & Risk",
    description: "Ensuring your business stays compliant with evolving regulations.",
    features: ["Regulatory Audits", "Policy Development", "Risk Assessment"]
  }
];

export default function HomePracticeAreasSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 border border-gray-200 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-700">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Practice Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide comprehensive legal services across multiple practice areas, 
            delivering expert counsel tailored to your specific industry and business needs.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {practiceAreas.map((area, index) => (
            <div key={index} className="bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="space-y-6">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl">
                  <area.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {area.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Industry Focus */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 lg:p-12 border border-blue-100">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Industry-Specific Expertise
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our legal services are enhanced by deep industry knowledge across key sectors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-white rounded-2xl border border-blue-100">
              <h4 className="font-semibold text-gray-900 mb-2">Media & Entertainment</h4>
              <p className="text-sm text-gray-600">Film, TV, Music, Digital Content</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl border border-blue-100">
              <h4 className="font-semibold text-gray-900 mb-2">Technology & IT</h4>
              <p className="text-sm text-gray-600">Software, AI, Data Privacy, Fintech</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl border border-blue-100">
              <h4 className="font-semibold text-gray-900 mb-2">Gaming & Sports</h4>
              <p className="text-sm text-gray-600">Esports, Athletes, Tournaments</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl border border-blue-100">
              <h4 className="font-semibold text-gray-900 mb-2">Startups & SMEs</h4>
              <p className="text-sm text-gray-600">Growth, Funding, Compliance</p>
            </div>
          </div>
          
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/practice-areas" 
                className="inline-flex items-center px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
              >
                View All Practice Areas
              </Link>
              <Link 
                href="/industries" 
                className="inline-flex items-center px-8 py-3 border-2 border-blue-700 text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Explore Industries
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 