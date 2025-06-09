import { Film, Monitor, Gamepad2, Factory, Smartphone, Heart, GraduationCap, Building2 } from 'lucide-react';

const industries = [
  {
    icon: Film,
    name: "Media & Entertainment",
    description: "Film, TV, Music, Digital Content"
  },
  {
    icon: Monitor,
    name: "Technology & IT",
    description: "Software, AI, Data Privacy, Fintech"
  },
  {
    icon: Gamepad2,
    name: "Gaming & Sports",
    description: "Esports, Athletes, Tournaments"
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description: "Industrial, Production, Supply Chain"
  },
  {
    icon: Smartphone,
    name: "Startups & SMEs",
    description: "Growth, Funding, Compliance"
  },
  {
    icon: Heart,
    name: "Healthcare",
    description: "Medical Devices, Pharmaceuticals"
  },
  {
    icon: GraduationCap,
    name: "Education",
    description: "EdTech, Training, Institutions"
  },
  {
    icon: Building2,
    name: "Real Estate",
    description: "Property, Development, Investment"
  }
];

export default function HomeIndustriesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-beige-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-beige-200 border border-beige-300 rounded-full mb-6">
            <span className="text-sm font-medium text-beige-600">Industry Focus</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our legal expertise spans across key industries, providing specialized 
            knowledge and tailored solutions for sector-specific challenges.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 text-center group"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-beige-400 rounded-xl shadow-lg group-hover:bg-beige-500 transition-colors duration-300 mb-4">
                <industry.icon className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-beige-600 transition-colors duration-300">
                {industry.name}
              </h3>
              <p className="text-sm text-gray-600">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 