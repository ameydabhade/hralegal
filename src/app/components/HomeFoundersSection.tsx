import { GraduationCap, Award, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const founders = [
  {
    name: "Rushi Upadhyaya",
    title: "Founder & Legal Expert",
    experience: "15+ Years",
    specialization: "Media & Entertainment, Corporate Affairs & Business Affairs",
    education: [
      "Masters of Business Laws (MBL)", 
      "Qualified Company Secretary", 
      "Diploma in IP Laws (PGIPR)", 
      "Law Graduate (LLB)", 
      "Management Graduate (BMS)"
    ],
    companies: [
      "Sony Pictures Networks India Pvt. Ltd. (now Culver Max)",
      "Reliance Industries Ltd. – Jio Studios",
      "Sony Music (India) Pvt. Ltd.",
      "Maddock Films",
      "Reliance Retail (Consultant)",
      "Shemaroo Entertainment Ltd.",
      "Goldmines Telefilms Ltd."
    ],
    highlights: [
      "Successfully structured and negotiated high-value media agreements",
      "Led corporate governance and compliance for multinational companies",
      "Established legal frameworks for content creation and distribution",
      "Expertise in intellectual property protection and enforcement",
      "Managed complex mergers & acquisitions in entertainment sector",
      "Developed standard operating procedures for legal departments"
    ],
    expertise: "Legal, Corporate Affairs and Business Affairs in Media & Entertainment sector",
    description: "She has been Legal and Business Affairs Counsel at top media companies, bringing extensive expertise in structuring, negotiating and executing complex agreements for multifarious businesses, advising on corporate, commercial and intellectual property matters.",
    coreStrengths: [
      "Sharp Leadership Mindset",
      "Prompt Decision Making", 
      "Strong Analytical Approach",
      "Strategic Solutions",
      "Meticulous Approach",
      "Win-Win Closure"
    ]
  }
];

export default function HomeFoundersSection() {
  return (
    <section className="py-16 bg-[#ECE5DE]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 border border-gray-200 rounded-full mb-6">
            <span className="text-sm font-medium text-gray-600">Leadership</span>
          </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Founder
            </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our founder brings close to two decades of experience in corporate law, 
            intellectual property, and media & entertainment law, with deep industry expertise.
          </p>
        </div>

        {/* Founder Profile */}
        <div className="max-w-2xl mx-auto mb-16">
          {founders.map((founder, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="space-y-6">
                {/* Header */}
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-600 to-gray-700 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">
                      {founder.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-lg text-gray-600 font-semibold mb-2">
                    {founder.title}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                    {founder.experience}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap className="w-5 h-5 text-gray-500" />
                    <h4 className="font-semibold text-gray-900">Education & Qualifications</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {founder.education.map((edu, eduIndex) => (
                      <span key={eduIndex} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg">
                        {edu}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Professional Background */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-5 h-5 text-gray-500" />
                    <h4 className="font-semibold text-gray-900">Professional Background</h4>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
                    <p className="text-gray-600 text-sm leading-relaxed mb-3 text-justify">{founder.description}</p>
                    <p className="text-gray-700 text-sm font-medium mb-3">Key Companies:</p>
                    <div className="grid grid-cols-1 gap-1">
                      {founder.companies.map((company, companyIndex) => (
                        <div key={companyIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-1.5 flex-shrink-0"></div>
                          <span className="text-xs text-gray-700">{company}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-gray-500" />
                    <h4 className="font-semibold text-gray-900">Career Highlights</h4>
                  </div>
                  <div className="space-y-2">
                    {founder.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Strengths */}
                {founder.coreStrengths && (
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-5 h-5 text-gray-500" />
                      <h4 className="font-semibold text-gray-900">Core Strengths</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {founder.coreStrengths.map((strength, strengthIndex) => (
                        <div key={strengthIndex} className="bg-gray-50 p-3 rounded-lg text-center border border-gray-200">
                          <span className="text-gray-600 text-xs font-medium">{strength}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>



        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Experienced Legal Leadership
            </h3>
            <p className="text-gray-600 mb-8">
              Our founder brings close to two decades of experience across corporate law, 
              intellectual property, and media & entertainment law to deliver exceptional legal services.
            </p>
            
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#B39F96] text-white font-semibold rounded-lg hover:bg-[#A08B80] transition-colors"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 