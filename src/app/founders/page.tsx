import { User, GraduationCap, Building, Award, Users, TrendingUp, Heart, Briefcase } from 'lucide-react';

export const metadata = {
  title: 'Founders - HRA Legal',
  description: 'Meet the founders of HRA Legal - experienced professionals with expertise in legal and human resources.',
}

export default function FoundersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Founders
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Meet the visionary leaders behind HRA Legal, bringing together decades of expertise in law and human resources.
            </p>
          </div>
        </div>
      </section>

      {/* Rushi Upadhyaya */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
            <div className="lg:flex">
              <div className="lg:w-1/3 bg-beige-700 p-8 text-center">
                <div className="mb-6">
                  <User className="w-24 h-24 text-white mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-white mb-2">Rushi Upadhyaya</h2>
                  <p className="text-beige-100 text-lg">Founder of HRA Legal</p>
                  <p className="text-beige-100">Co-founder of HRpreneurs</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-beige-600 rounded-lg p-4">
                    <div className="flex items-center justify-center mb-2">
                      <Award className="w-6 h-6 text-white mr-2" />
                      <span className="text-white font-semibold">Experience</span>
                    </div>
                    <p className="text-beige-100">15+ Years</p>
                  </div>
                  
                  <div className="bg-beige-600 rounded-lg p-4">
                    <div className="flex items-center justify-center mb-2">
                      <Building className="w-6 h-6 text-white mr-2" />
                      <span className="text-white font-semibold">Specialization</span>
                    </div>
                    <p className="text-beige-100">Legal & Corporate Affairs</p>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-2/3 p-8">
                <div className="space-y-6">
                  {/* Education */}
                  <div>
                    <div className="flex items-center mb-4">
                      <GraduationCap className="w-6 h-6 text-beige-700 mr-3" />
                      <h3 className="text-2xl font-bold text-gray-900">Education & Qualifications</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-beige-50 rounded-lg p-4">
                        <p className="font-semibold text-gray-900">Masters of Business Laws (MBL)</p>
                      </div>
                      <div className="bg-beige-50 rounded-lg p-4">
                        <p className="font-semibold text-gray-900">Qualified Company Secretary</p>
                      </div>
                      <div className="bg-beige-50 rounded-lg p-4">
                        <p className="font-semibold text-gray-900">Diploma in Intellectual Property Laws (PGIPR)</p>
                      </div>
                      <div className="bg-beige-50 rounded-lg p-4">
                        <p className="font-semibold text-gray-900">Law Graduate (LLB)</p>
                      </div>
                      <div className="bg-beige-50 rounded-lg p-4 md:col-span-2">
                        <p className="font-semibold text-gray-900">Management Graduate (BMS)</p>
                      </div>
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <div className="flex items-center mb-4">
                      <Briefcase className="w-6 h-6 text-beige-700 mr-3" />
                      <h3 className="text-2xl font-bold text-gray-900">Professional Experience</h3>
                    </div>
                    <p className="text-lg text-gray-700 mb-4">
                      She has an experience of 15+ years as a Counsel - Legal, Corporate Affairs and Business Affairs in Media & Entertainment sector, and has worked with global and multinational companies including:
                    </p>
                    <div className="grid md:grid-cols-2 gap-3 mb-6">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-beige-700 rounded-full mr-3"></div>
                        <span className="text-gray-700">Sony Pictures Networks India Pvt. Ltd. (now Culver Max)</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-beige-700 rounded-full mr-3"></div>
                        <span className="text-gray-700">Shemaroo Entertainment Ltd.</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-beige-700 rounded-full mr-3"></div>
                        <span className="text-gray-700">Goldmines Telefilms Ltd.</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-beige-700 rounded-full mr-3"></div>
                        <span className="text-gray-700">Reliance Industries Ltd.-Jio Studios</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-beige-700 rounded-full mr-3"></div>
                        <span className="text-gray-700">Sony Music (India) Pvt.Ltd.</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-beige-700 rounded-full mr-3"></div>
                        <span className="text-gray-700">Maddock Films</span>
                      </div>
                      <div className="flex items-center md:col-span-2">
                        <div className="w-2 h-2 bg-beige-700 rounded-full mr-3"></div>
                        <span className="text-gray-700">Consultant at Reliance Retail</span>
                      </div>
                    </div>
                  </div>

                  {/* Expertise */}
                  <div>
                    <div className="flex items-center mb-4">
                      <TrendingUp className="w-6 h-6 text-beige-700 mr-3" />
                      <h3 className="text-2xl font-bold text-gray-900">Areas of Expertise</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      With her good educational foundation and enriching experience in Legal, Corporate Affairs and Business Affairs, she is adept in:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-beige-700 rounded-full mr-3 mt-2"></div>
                        <span>Structuring, negotiating and executing complex agreements for multifarious businesses</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-beige-700 rounded-full mr-3 mt-2"></div>
                        <span>Advising on corporate, commercial and intellectual property matters</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-beige-700 rounded-full mr-3 mt-2"></div>
                        <span>Standard & practices/content regulation</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-beige-700 rounded-full mr-3 mt-2"></div>
                        <span>Setting up legal processes/systems/standard operating procedures</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-beige-700 rounded-full mr-3 mt-2"></div>
                        <span>Leading corporate matters including mergers and acquisitions</span>
                      </li>
                    </ul>
                  </div>

                  {/* Core Skills */}
                  <div>
                    <div className="flex items-center mb-4">
                      <Award className="w-6 h-6 text-beige-700 mr-3" />
                      <h3 className="text-2xl font-bold text-gray-900">Core Skills</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-semibold text-gray-900 mb-2">Sharp Leadership Mindset</p>
                        <p className="text-sm text-gray-600">Strategic thinking and team guidance</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-semibold text-gray-900 mb-2">Prompt Decision Making</p>
                        <p className="text-sm text-gray-600">Quick and effective solutions</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-semibold text-gray-900 mb-2">Strong Analytical Approach</p>
                        <p className="text-sm text-gray-600">Meticulous and thorough analysis</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-semibold text-gray-900 mb-2">Strategic Suggestions</p>
                        <p className="text-sm text-gray-600">Proficiency in providing prolific advice</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 md:col-span-2">
                        <p className="font-semibold text-gray-900 mb-2">Balanced Solutions</p>
                        <p className="text-sm text-gray-600">Competence to provide win-win closure solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ami Upadhyaya */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
            <div className="lg:flex">
              <div className="lg:w-2/3 p-8">
                <div className="space-y-6">
                  {/* Education */}
                  <div>
                    <div className="flex items-center mb-4">
                      <GraduationCap className="w-6 h-6 text-beige-700 mr-3" />
                      <h3 className="text-2xl font-bold text-gray-900">Education & Qualifications</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-beige-50 rounded-lg p-4">
                        <p className="font-semibold text-gray-900">Management Graduate (BMS)</p>
                      </div>
                      <div className="bg-beige-50 rounded-lg p-4">
                        <p className="font-semibold text-gray-900">Master of Commerce (MCom)</p>
                      </div>
                      <div className="bg-beige-50 rounded-lg p-4">
                        <p className="font-semibold text-gray-900">Master of Business Administration (MBA)</p>
                      </div>
                      <div className="bg-beige-50 rounded-lg p-4">
                        <p className="font-semibold text-gray-900">Master of Business Laws (MBL)</p>
                      </div>
                      <div className="bg-beige-50 rounded-lg p-4 md:col-span-2">
                        <p className="font-semibold text-gray-900">Certified/Licensed Neuro Linguistic Practitioner</p>
                      </div>
                    </div>
                  </div>

                  {/* Experience */}
                  <div>
                    <div className="flex items-center mb-4">
                      <Briefcase className="w-6 h-6 text-beige-700 mr-3" />
                      <h3 className="text-2xl font-bold text-gray-900">Professional Experience</h3>
                    </div>
                    <p className="text-lg text-gray-700 mb-4">
                      She has an experience of 18+ years as a Human Resource Professional in IT and Real Estate sector, and has worked with global and multinational companies including:
                    </p>
                    <div className="grid md:grid-cols-3 gap-3 mb-6">
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-beige-700 rounded-full mr-3"></div>
                        <span className="text-gray-700">PXL Soft</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-beige-700 rounded-full mr-3"></div>
                        <span className="text-gray-700">Sethia Pride</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-2 h-2 bg-beige-700 rounded-full mr-3"></div>
                        <span className="text-gray-700">One Avigna</span>
                      </div>
                    </div>
                  </div>

                  {/* Expertise */}
                  <div>
                    <div className="flex items-center mb-4">
                      <Users className="w-6 h-6 text-beige-700 mr-3" />
                      <h3 className="text-2xl font-bold text-gray-900">Areas of Expertise</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      With her good educational foundation and enriching experience in Human Resources and Management, she is adept in all human resources and management functions including:
                    </p>
                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-beige-700 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">Recruitment</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-beige-700 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">Salary, Performance Appraisals</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-beige-700 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">Taxation, Benefits and Compensation</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-beige-700 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">ESI & Gratuity</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-beige-700 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">Preparing Policies (POSH, Code of Conduct)</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-beige-700 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">Diversity and Inclusion</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-beige-700 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">Inductions and Orientations</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-beige-700 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">Training & Development</span>
                      </div>
                      <div className="flex items-start md:col-span-2">
                        <div className="w-2 h-2 bg-beige-700 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">Leadership Training & Management</span>
                      </div>
                    </div>
                  </div>

                  {/* Core Skills */}
                  <div>
                    <div className="flex items-center mb-4">
                      <Heart className="w-6 h-6 text-beige-700 mr-3" />
                      <h3 className="text-2xl font-bold text-gray-900">Core Skills</h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-semibold text-gray-900 mb-2">Entrepreneurial Aptitude</p>
                        <p className="text-sm text-gray-600">Business-minded approach</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-semibold text-gray-900 mb-2">Effortless Approach</p>
                        <p className="text-sm text-gray-600">Conventional and new ideas</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-semibold text-gray-900 mb-2">Business Comprehension</p>
                        <p className="text-sm text-gray-600">Profound understanding of business</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <p className="font-semibold text-gray-900 mb-2">Self-Assertive</p>
                        <p className="text-sm text-gray-600">Confident and decisive</p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4 md:col-span-2">
                        <p className="font-semibold text-gray-900 mb-2">Risk Taker</p>
                        <p className="text-sm text-gray-600">Bold in pursuing opportunities</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/3 bg-beige-600 p-8 text-center">
                <div className="mb-6">
                  <User className="w-24 h-24 text-white mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-white mb-2">Ami Upadhyaya</h2>
                  <p className="text-beige-100 text-lg">Founder of HRpreneurs</p>
                  <p className="text-beige-100">Co-founder of HRA Legal</p>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-beige-400 rounded-lg p-4">
                    <div className="flex items-center justify-center mb-2">
                      <Award className="w-6 h-6 text-white mr-2" />
                      <span className="text-white font-semibold">Experience</span>
                    </div>
                    <p className="text-beige-100">18+ Years</p>
                  </div>
                  
                  <div className="bg-beige-400 rounded-lg p-4">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="w-6 h-6 text-white mr-2" />
                      <span className="text-white font-semibold">Specialization</span>
                    </div>
                    <p className="text-beige-100">Human Resources & Management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-beige-50 py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Work with Experienced Leaders
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Benefit from the combined expertise of our founders and their proven track record in legal and human resource management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-beige-700 text-white font-semibold rounded-md hover:bg-beige-800 transition-colors duration-200"
            >
              Schedule a Consultation
            </a>
            <a 
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-beige-700 text-beige-700 font-semibold rounded-md hover:bg-beige-700 hover:text-white transition-colors duration-200"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 