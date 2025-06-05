import { GraduationCap, Briefcase, Award, Users } from 'lucide-react';

const founders = [
  {
    name: "Rushi Upadhyaya",
    role: "Founder of HRA Legal, Co-founder of HRpreneurs",
    image: "/api/placeholder/300/400", // Placeholder - replace with actual image
    education: [
      "Masters of Business Laws (MBL)",
      "Company Secretary (Qualified)",
      "Post Graduate Diploma in Intellectual Property Laws (PGIPR)",
      "Law Graduate (LLB)",
      "Management Graduate (BMS)"
    ],
    experience: "15+ years as Counsel - Legal, Corporate Affairs and Business Affairs",
    companies: [
      "Sony Pictures Networks India Pvt. Ltd. (now Culver Max)",
      "Shemaroo Entertainment Ltd.",
      "Goldmines Telefilms Ltd.",
      "Reliance Industries Ltd. - Jio Studios",
      "Sony Music (India) Pvt. Ltd.",
      "Maddock Films",
      "Reliance Retail (Consultant)"
    ],
    expertise: [
      "Structuring, negotiating and executing complex agreements",
      "Corporate, commercial and intellectual property matters",
      "Content regulation and standard practices",
      "Legal processes, systems, and SOPs",
      "Mergers and acquisitions"
    ],
    skills: [
      "Sharp leadership mindset",
      "Prompt decision making",
      "Strong analytical and meticulous approach",
      "Strategic and prolific suggestions",
      "Balanced solutions for win-win closures"
    ]
  },
  {
    name: "Ami Upadhyaya",
    role: "Founder of HRpreneurs, Co-founder of HRA Legal",
    image: "/api/placeholder/300/400", // Placeholder - replace with actual image
    education: [
      "Management Graduate (BMS)",
      "Master of Commerce (MCom)",
      "Master of Business Administration (MBA)",
      "Master of Business Laws (MBL)",
      "Certified/Licensed Neuro Linguistic Practitioner"
    ],
    experience: "18+ years as Human Resource Professional in IT and Real Estate sector",
    companies: [
      "PXL Soft",
      "Sethia Pride",
      "One Avigna"
    ],
    expertise: [
      "Recruitment and talent acquisition",
      "Salary and compensation management",
      "Performance appraisals and evaluations",
      "Taxation and benefits administration",
      "Policy preparation (POSH, Code of Conduct, D&I)",
      "Training & development programs",
      "Leadership training & management"
    ],
    skills: [
      "Entrepreneurial aptitude",
      "Effortless approach to conventional and new ideas",
      "Profound comprehension of business",
      "Self-assertive leadership",
      "Risk-taking ability"
    ]
  }
];

export default function FoundersSection() {
  return (
    <section id="founders" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
            <span className="text-sm font-medium text-blue-700">Leadership</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Founders
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experienced professionals with complementary expertise in legal and human resources, 
            bringing together 33+ years of combined industry experience.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {founders.map((founder, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Profile Header */}
              <div className="bg-gradient-to-r from-blue-700 to-blue-800 p-8 text-white text-center">
                <div className="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                <p className="text-blue-100 text-sm font-medium">{founder.role}</p>
              </div>

              <div className="p-8 space-y-6">
                {/* Education */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="w-5 h-5 text-blue-700" />
                    <h4 className="text-lg font-semibold text-gray-900">Education</h4>
                  </div>
                  <div className="space-y-2">
                    {founder.education.map((edu, eduIndex) => (
                      <div key={eduIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{edu}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase className="w-5 h-5 text-blue-700" />
                    <h4 className="text-lg font-semibold text-gray-900">Experience</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3 font-medium">{founder.experience}</p>
                  <div className="space-y-2">
                    {founder.companies.map((company, compIndex) => (
                      <div key={compIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{company}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Expertise */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-blue-700" />
                    <h4 className="text-lg font-semibold text-gray-900">Areas of Expertise</h4>
                  </div>
                  <div className="space-y-2">
                    {founder.expertise.map((exp, expIndex) => (
                      <div key={expIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600">{exp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Skills */}
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Core Skills</h4>
                  <div className="space-y-2">
                    {founder.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-700 font-medium">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Work with Our Expert Team?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Leverage our founders' combined expertise and proven track record for your legal and business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Schedule Consultation
              </a>
              <a 
                href="#practice-areas" 
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition-colors"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 