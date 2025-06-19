import { GraduationCap, Award, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const founders = [
  {
    name: "Rushi Upadhyaya",
    title: "Founding Partner",
    experience: "15+ Years",
    specialization: "Corporate Law & IP",
    education: ["MBL", "Company Secretary", "PGIPR"],
    highlights: [
      "Worked with Sony Pictures Networks India",
      "Legal Head at Reliance Entertainment",
      "Entertainment & Media Law Expert"
    ],
    expertise: "Civil/Business Law, IP, Media & Entertainment"
  }
];

export default function HomeFoundersSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-red-100 border border-red-200 rounded-full mb-6">
            <span className="text-sm font-medium text-red-600">Leadership</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Founder
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our founding partner brings 15+ years of experience in corporate law, 
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
                  <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">
                      {founder.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-lg text-red-600 font-semibold mb-2">
                    {founder.title}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-red-100 text-red-600 text-sm font-medium rounded-full">
                    {founder.experience}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap className="w-5 h-5 text-red-500" />
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

                {/* Specialization */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="w-5 h-5 text-red-500" />
                    <h4 className="font-semibold text-gray-900">Specialization</h4>
                  </div>
                  <p className="text-gray-600">{founder.expertise}</p>
                </div>

                {/* Highlights */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-red-500" />
                    <h4 className="font-semibold text-gray-900">Career Highlights</h4>
                  </div>
                  <div className="space-y-2">
                    {founder.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{highlight}</span>
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
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Experienced Legal Leadership
            </h3>
            <p className="text-gray-600 mb-8">
              Our founding partner brings 15+ years of experience across corporate law, 
              intellectual property, and media & entertainment law to deliver exceptional legal services.
            </p>
            
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
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