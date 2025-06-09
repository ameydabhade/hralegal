import { Scale, Building, Lightbulb, Users, Shield, Home, Calculator, Globe, FileText, Gavel } from 'lucide-react';

export const metadata = {
  title: 'Practice Areas - HRA Legal',
  description: 'Comprehensive legal services across Civil & Business Law, Intellectual Property, Corporate Law, and specialized areas.',
}

export default function PracticeAreasPage() {
  const practiceAreas = [
    {
      icon: Scale,
      title: "Civil & Business Law",
      description: "Comprehensive legal solutions for civil disputes, contracts, and business litigation matters.",
      services: [
        "Contract Disputes",
        "Business Litigation", 
        "Civil Disputes Resolution",
        "Commercial Arbitration",
        "Debt Recovery"
      ]
    },
    {
      icon: Lightbulb,
      title: "Intellectual Property Laws",
      description: "Specialized expertise in Media & Entertainment, Technology, and Sports IP protection.",
      services: [
        "Trademark Registration & Protection",
        "Copyright Management",
        "Patent Applications",
        "Media & Entertainment Law",
        "Technology IP Rights",
        "Sports Law"
      ]
    },
    {
      icon: Building,
      title: "Corporate & Commercial Law",
      description: "End-to-end corporate legal services from formation to complex transactions.",
      services: [
        "Company Formation",
        "Mergers & Acquisitions",
        "Joint Ventures",
        "Corporate Governance",
        "Commercial Contracts",
        "Due Diligence"
      ]
    },
    {
      icon: FileText,
      title: "Company Secretarial & Corporate Governance",
      description: "Ensuring regulatory compliance and corporate governance excellence.",
      services: [
        "Board Meeting Compliance",
        "Statutory Filings",
        "Annual Compliance",
        "Corporate Governance",
        "Regulatory Advisory"
      ]
    },
    {
      icon: Users,
      title: "Employment & Labor Laws",
      description: "Comprehensive employment law services for employers and employees.",
      services: [
        "Employment Contracts",
        "HR Policy Drafting",
        "Labor Dispute Resolution",
        "Workplace Compliance",
        "Employee Benefits"
      ]
    },
    {
      icon: Globe,
      title: "Environment Law",
      description: "Environmental compliance and regulatory advisory services.",
      services: [
        "Environmental Clearances",
        "Pollution Control Compliance",
        "Green Regulations",
        "Sustainability Advisory",
        "Environmental Litigation"
      ]
    },
    {
      icon: Home,
      title: "Property Law",
      description: "Real estate transactions, property disputes, and development projects.",
      services: [
        "Property Transactions",
        "Real Estate Development",
        "Property Disputes",
        "Title Verification",
        "Land Acquisition"
      ]
    },
    {
      icon: Calculator,
      title: "Taxation Law",
      description: "Tax planning, compliance, and dispute resolution services.",
      services: [
        "Tax Planning & Advisory",
        "GST Compliance",
        "Income Tax Matters",
        "Tax Dispute Resolution",
        "International Taxation"
      ]
    },
    {
      icon: Shield,
      title: "Regulatory & Compliance",
      description: "Comprehensive regulatory compliance across various industries.",
      services: [
        "Regulatory Advisory",
        "Compliance Audits",
        "Government Relations",
        "Policy Implementation",
        "Risk Assessment"
      ]
    },
    {
      icon: Gavel,
      title: "Litigation & Arbitration",
      description: "Expert representation in courts and alternative dispute resolution.",
      services: [
        "High Court Litigation",
        "Supreme Court Matters",
        "Commercial Arbitration",
        "Mediation Services",
        "International Arbitration"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Practice Areas
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Comprehensive legal expertise across diverse practice areas, providing specialized solutions for complex legal challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {practiceAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-xl border border-gray-100 p-8 hover:shadow-2xl transition-shadow duration-300">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-beige-100 rounded-lg flex items-center justify-center mr-6">
                      <IconComponent className="w-8 h-8 text-beige-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{area.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{area.description}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-beige-400 mb-4">Our Services Include:</h4>
                    <ul className="space-y-2">
                      {area.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Legal Services */}
      <section className="bg-beige-50 py-16">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose HRA Legal for Your Legal Needs?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our specialized expertise and client-focused approach ensure comprehensive legal solutions tailored to your specific requirements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-beige-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-beige-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">15+ Years Experience</h3>
              <p className="text-gray-700">Proven track record across diverse legal practice areas</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-beige-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-beige-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-700">Specialized lawyers with deep domain expertise</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-beige-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-beige-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Confidential Service</h3>
              <p className="text-gray-700">Complete confidentiality and professional discretion</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-beige-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gavel className="w-8 h-8 text-beige-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-700">95% success rate in resolved legal matters</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Need Legal Assistance?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Our experienced legal team is ready to help you navigate your legal challenges with confidence and expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-beige-400 text-white font-semibold rounded-md hover:bg-beige-800 transition-colors duration-200"
            >
              Schedule Consultation
            </a>
            <a 
              href="/founders"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-beige-400 text-beige-400 font-semibold rounded-md hover:bg-beige-400 hover:text-white transition-colors duration-200"
            >
              Meet Our Team
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 