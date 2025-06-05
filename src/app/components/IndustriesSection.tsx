import { Building2, Film, Gamepad2, Music, Smartphone, Factory, Landmark, TrendingUp } from 'lucide-react';

const industries = [
  {
    icon: Film,
    title: "Media & Entertainment",
    description: "Comprehensive legal support for film production, content licensing, distribution agreements, and celebrity contracts.",
    expertise: [
      "Film and TV production agreements",
      "Content licensing and distribution",
      "Celebrity and talent contracts",
      "Copyright and trademark protection",
      "Content regulation compliance"
    ]
  },
  {
    icon: Smartphone,
    title: "Technology & IT",
    description: "Specialized services for tech companies, startups, and digital platforms including IP protection and data privacy.",
    expertise: [
      "Software licensing agreements",
      "Data privacy and protection",
      "Technology transfer agreements",
      "Startup legal framework",
      "Cybersecurity compliance"
    ]
  },
  {
    icon: Gamepad2,
    title: "Gaming & Sports",
    description: "Expert legal guidance for gaming companies, sports organizations, and athlete representation.",
    expertise: [
      "Gaming licensing and regulations",
      "Sports contracts and representation",
      "Tournament and league agreements",
      "Sponsorship and endorsement deals",
      "Broadcasting rights"
    ]
  },
  {
    icon: Music,
    title: "Music Industry",
    description: "Complete legal solutions for music production, publishing, distribution, and artist management.",
    expertise: [
      "Recording and publishing contracts",
      "Music licensing and royalties",
      "Artist management agreements",
      "Live performance contracts",
      "Digital distribution rights"
    ]
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Legal support for manufacturing companies including compliance, contracts, and industrial relations.",
    expertise: [
      "Manufacturing agreements",
      "Supply chain contracts",
      "Environmental compliance",
      "Industrial safety regulations",
      "Labor and employment matters"
    ]
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Comprehensive real estate legal services for commercial and residential property transactions.",
    expertise: [
      "Property purchase and sale",
      "Lease agreements and rentals",
      "Real estate development",
      "Property disputes resolution",
      "Title verification and clearance"
    ]
  },
  {
    icon: Landmark,
    title: "Financial Services",
    description: "Regulatory compliance and legal advisory for banks, fintech, and financial institutions.",
    expertise: [
      "Banking regulations compliance",
      "Fintech legal framework",
      "Investment advisory agreements",
      "Financial product structuring",
      "Regulatory reporting"
    ]
  },
  {
    icon: TrendingUp,
    title: "Startups & SMEs",
    description: "End-to-end legal support for startups and small-medium enterprises from incorporation to scaling.",
    expertise: [
      "Company incorporation",
      "Funding and investment agreements",
      "Equity structuring",
      "Exit strategies and M&A",
      "Ongoing compliance management"
    ]
  }
];

export default function IndustriesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
            <span className="text-sm font-medium text-blue-700">Industries We Serve</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sector-Specific Legal Expertise
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            With deep industry knowledge and specialized experience, we provide tailored legal solutions 
            across diverse sectors, understanding the unique challenges and opportunities in each industry.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-20">
          {industries.map((industry, index) => (
            <IndustryCard key={index} industry={industry} />
          ))}
        </div>

        {/* Why Sector Expertise Matters */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Industry-Specific Legal Expertise Matters
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Deep Regulatory Knowledge</h3>
                    <p className="text-gray-600 text-sm">Understanding sector-specific regulations, compliance requirements, and industry standards.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Tailored Contract Solutions</h3>
                    <p className="text-gray-600 text-sm">Industry-appropriate contract templates and negotiation strategies based on market practices.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Strategic Business Insights</h3>
                    <p className="text-gray-600 text-sm">Legal advice that considers industry trends, competitive landscape, and business realities.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Proven Track Record</h3>
                    <p className="text-gray-600 text-sm">Established relationships and successful outcomes with leading companies in each sector.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Industry Experience</h3>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-4 bg-white rounded-xl">
                  <div className="text-2xl font-bold text-blue-700">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="p-4 bg-white rounded-xl">
                  <div className="text-2xl font-bold text-blue-700">8</div>
                  <div className="text-sm text-gray-600">Key Industries</div>
                </div>
                <div className="p-4 bg-white rounded-xl">
                  <div className="text-2xl font-bold text-blue-700">500+</div>
                  <div className="text-sm text-gray-600">Clients Served</div>
                </div>
                <div className="p-4 bg-white rounded-xl">
                  <div className="text-2xl font-bold text-blue-700">95%</div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-3xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Need Legal Support for Your Industry?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Our sector-specific expertise ensures you get the most relevant and effective legal solutions 
              tailored to your industry's unique requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Schedule Industry Consultation
              </a>
              <a 
                href="/practice-areas" 
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition-colors"
              >
                View Practice Areas
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ industry }: { industry: typeof industries[0] }) {
  const Icon = industry.icon;
  
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
            <Icon className="w-8 h-8 text-blue-700" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900">{industry.title}</h3>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-gray-600 leading-relaxed">
          {industry.description}
        </p>
        
        {/* Expertise */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Key Expertise:</h4>
          <div className="space-y-2">
            {industry.expertise.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-sm text-gray-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 