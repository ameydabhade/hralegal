import { Building, Copyright, Users, FileText, Briefcase, Shield, Gavel, Scale } from 'lucide-react';

const practiceAreas = [
  {
    icon: Building,
    title: "Corporate Law",
    description: "Comprehensive corporate legal services including M&A, governance, and compliance.",
    services: ["Mergers & Acquisitions", "Corporate Governance", "Business Structuring"]
  },
  {
    icon: Copyright,
    title: "Intellectual Property",
    description: "Protecting and monetizing your intellectual assets across all industries.",
    services: ["Trademark Registration", "Copyright Protection", "Patent Filing"]
  },
  {
    icon: Users,
    title: "Employment Law",
    description: "Complete employment legal solutions for businesses and individuals.",
    services: ["Employment Contracts", "HR Compliance", "Dispute Resolution"]
  },
  {
    icon: FileText,
    title: "Contract Drafting",
    description: "Expert contract drafting and negotiation services for all business needs.",
    services: ["Commercial Contracts", "Service Agreements", "Partnership Deals"]
  },
  {
    icon: Briefcase,
    title: "Media & Entertainment",
    description: "Specialized legal services for the entertainment and media industry.",
    services: ["Film Production Contracts", "Artist Agreements", "Distribution Rights"]
  },
  {
    icon: Shield,
    title: "Compliance & Risk",
    description: "Ensuring your business stays compliant with evolving regulations.",
    services: ["Regulatory Audits", "Policy Development", "Risk Assessment"]
  },
  {
    icon: Gavel,
    title: "Civil Litigation",
    description: "Experienced representation in civil disputes and commercial litigation.",
    services: ["Commercial Disputes", "Contract Disputes", "Property Matters"]
  },
  {
    icon: Scale,
    title: "Business Advisory",
    description: "Strategic legal counsel for business growth and operational excellence.",
    services: ["Legal Strategy", "Business Planning", "Regulatory Guidance"]
  }
];

export default function HomePracticeAreasGrid() {
  return (
    <section className="py-20 bg-gradient-to-b from-beige-50 to-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-beige-200 border border-beige-300 rounded-full mb-6">
            <span className="text-sm font-medium text-beige-600">Our Expertise</span>
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {practiceAreas.map((area, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="space-y-4">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-14 h-14 bg-beige-400 rounded-2xl shadow-lg group-hover:bg-beige-500 transition-colors duration-300">
                  <area.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-beige-600 transition-colors duration-300">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {area.description}
                  </p>
                  
                  {/* Services */}
                  <div className="space-y-1">
                    {area.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-beige-400 rounded-full flex-shrink-0"></div>
                        <span className="text-xs text-gray-500">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-beige-100 to-beige-200 rounded-2xl p-8 border border-beige-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Legal Assistance?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our experienced legal team is ready to help you navigate complex legal challenges 
              and provide strategic counsel for your business needs.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 bg-beige-400 text-white font-semibold rounded-lg hover:bg-beige-500 transition-colors duration-200"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 