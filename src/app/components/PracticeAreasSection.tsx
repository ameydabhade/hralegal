import { Scale, Building, Shield, Users, Leaf, Home, Calculator, Briefcase } from 'lucide-react';

const practiceAreas = [
  {
    icon: Scale,
    title: "Civil & Business Law",
    description: "Comprehensive legal solutions for civil disputes and business matters with strategic approach.",
  },
  {
    icon: Shield,
    title: "Intellectual Property",
    description: "Specialized in Media & Entertainment, Technology, and Sports IP protection and enforcement.",
  },
  {
    icon: Building,
    title: "Corporate & Commercial Law",
    description: "Expert guidance on corporate governance, mergers, acquisitions, and commercial transactions.",
  },
  {
    icon: Users,
    title: "Employment & Labor Laws",
    description: "Complete employment law services including policy drafting and compliance management.",
  },
  {
    icon: Leaf,
    title: "Environment Law",
    description: "Environmental compliance, regulations, and sustainable business practice guidance.",
  },
  {
    icon: Home,
    title: "Property Law",
    description: "Real estate transactions, property disputes, and comprehensive property legal services.",
  },
  {
    icon: Calculator,
    title: "Taxation Law",
    description: "Tax planning, compliance, and dispute resolution across various taxation matters.",
  },
  {
    icon: Briefcase,
    title: "Company Secretarial",
    description: "Corporate governance, regulatory compliance, and company secretarial services.",
  },
];

export default function PracticeAreasSection() {
  return (
    <section id="practice-areas" className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
            <span className="text-sm font-medium text-blue-700">Practice Areas</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Legal Expertise
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our specialized legal disciplines cover all aspects of modern business and personal legal needs,
            backed by years of experience and proven success.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practiceAreas.map((area, index) => (
            <PracticeAreaCard key={index} area={area} />
          ))}
        </div>

        {/* Detailed Services Section */}
        <div className="mt-20 bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              End-to-End Legal Services
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              From contract structuring to dispute resolution, we provide comprehensive legal support 
              for established and emerging businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              title="Contract & Agreement Services"
              items={[
                "Structuring and drafting agreements",
                "Long form and definitive agreements", 
                "Non-disclosure agreements",
                "Letters and certificates",
                "Contract negotiations"
              ]}
            />
            <ServiceCard 
              title="Legal Research & Advisory"
              items={[
                "Legal research and analysis",
                "Strategic consultations",
                "Advisory services",
                "Legal opinions and solutions",
                "Regulatory guidance"
              ]}
            />
            <ServiceCard 
              title="Corporate Management"
              items={[
                "Compliance policy preparation",
                "Process and system setup",
                "Standard operating procedures",
                "Legal department management",
                "Corporate governance"
              ]}
            />
          </div>

          <div className="text-center mt-12">
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl"
            >
              Discuss Your Legal Needs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PracticeAreaCard({ area }: { area: typeof practiceAreas[0] }) {
  const Icon = area.icon;
  
  return (
    <div className="group p-8 bg-gradient-to-b from-white to-gray-50 border border-gray-200 rounded-3xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-200">
      <div className="space-y-4">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl group-hover:from-blue-100 group-hover:to-blue-200 transition-colors">
            <Icon className="w-8 h-8 text-blue-700" strokeWidth={1.5} />
          </div>
        </div>
        
        {/* Content */}
        <div className="text-center space-y-3">
          <h3 className="text-xl font-semibold text-gray-900">
            {area.title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm">
            {area.description}
          </p>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h4 className="text-lg font-semibold text-gray-900 mb-4">{title}</h4>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-2 flex-shrink-0"></div>
            <span className="text-sm text-gray-600">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 