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
  },
  {
    name: "Ami Upadhyaya",
    title: "Founding Partner",
    experience: "18+ Years",
    specialization: "Employment & HR Law",
    education: ["MCom", "MBA", "MBL", "NLP Certified"],
    highlights: [
      "18+ years in HR & Legal",
      "Worked with PXL Soft, Sethia Pride",
      "Employee Relations Specialist"
    ],
    expertise: "Employment Law, HR Compliance, Legal Operations"
  }
];

export default function HomeFoundersSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 border border-purple-200 rounded-full mb-6">
            <span className="text-sm font-medium text-purple-700">Leadership</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Founders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our founding partners bring together decades of combined experience in corporate law, 
            intellectual property, and employment law, with deep industry expertise.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {founders.map((founder, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="space-y-6">
                {/* Header */}
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl font-bold text-white">
                      {founder.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-lg text-purple-600 font-semibold mb-2">
                    {founder.title}
                  </p>
                  <div className="inline-flex items-center px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">
                    {founder.experience}
                  </div>
                </div>

                {/* Education */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap className="w-5 h-5 text-purple-600" />
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
                    <Award className="w-5 h-5 text-purple-600" />
                    <h4 className="font-semibold text-gray-900">Specialization</h4>
                  </div>
                  <p className="text-gray-600">{founder.expertise}</p>
                </div>

                {/* Highlights */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-5 h-5 text-purple-600" />
                    <h4 className="font-semibold text-gray-900">Career Highlights</h4>
                  </div>
                  <div className="space-y-2">
                    {founder.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Combined Experience */}
        <div className="bg-gradient-to-br from-purple-600 to-blue-700 rounded-3xl p-8 lg:p-12 text-white text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">
            Combined Legal Excellence
          </h3>
          <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
            Our founders bring together 33+ years of combined experience across diverse legal domains, 
            offering comprehensive solutions backed by deep industry knowledge.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">33+</div>
              <div className="text-purple-100">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">6</div>
              <div className="text-purple-100">Advanced Qualifications</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">5+</div>
              <div className="text-purple-100">Major Corporate Roles</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Learn More About Our Leadership
            </h3>
            <p className="text-gray-600 mb-8">
              Discover the full background, experience, and vision of our founding partners 
              who lead HRA Legal's mission to provide exceptional legal services.
            </p>
            
            <Link 
              href="/founders" 
              className="inline-flex items-center gap-2 px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
            >
              Meet Our Founders
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 