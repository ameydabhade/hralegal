import { Target, Eye, Heart, Users, Lightbulb, Shield, HandHeart, Award, BookOpen, Briefcase, GraduationCap, Trophy } from 'lucide-react';

export const metadata = {
  title: 'About Us | HRA Legal - Professional Law Firm',
  description: 'Learn about HRA Legal, our mission, vision, core values, and meet our experienced founders. Professional law firm with specialized expertise across various legal disciplines.',
  keywords: 'HRA Legal, about us, law firm, legal services, mission, vision, founders, legal expertise',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About HRA Legal
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Discover our mission, vision, values, and culture that drive our commitment to exceptional legal services.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 mb-16">
            <h3 className="text-2xl font-bold text-beige-400 mb-4">Our Story</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              HRA Legal works on an <strong>ever-evolving and diverse outlook</strong> consistently aligned with prevalent market dynamics and technology shifts.
            </p>
            <p className="text-gray-600">
              Just like technology, law is continuously evolving — and so does HRA Legal.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-beige-700 p-8 flex items-center justify-center">
                <div className="text-center">
                  <Target className="w-16 h-16 text-white mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-white">Mission</h2>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our mission is to deliver outstanding professional legal services to a diverse range of global and domestic clients, including governments and economic entities, while upholding a strong focus on our Core Values, consistent profitability, long term sustainability, and social responsibility, while fostering a dynamic, passionate and inclusive work environment for our professionals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <div className="bg-beige-50 rounded-lg p-6">
                  <p className="text-lg text-gray-700 leading-relaxed text-center">
                    <strong>Our vision is to be a renowned profitable premier law firm globally.</strong>
                  </p>
                </div>
              </div>
              <div className="md:w-1/3 bg-beige-600 p-8 flex items-center justify-center">
                <div className="text-center">
                  <Eye className="w-16 h-16 text-white mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-white">Vision</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-12 h-12 text-beige-700 mr-4" />
              <h2 className="text-4xl font-bold text-gray-900">Core Values</h2>
            </div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our core values of <strong>Integrity, Trust, Respect, Humility, and Unity</strong> are consistently reflected in our business ethics and are embedded in the professional legal services we offer worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
              <Shield className="w-12 h-12 text-beige-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">Honesty and moral principles in all our actions</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
              <HandHeart className="w-12 h-12 text-beige-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trust</h3>
              <p className="text-gray-600">Building reliable relationships with clients and colleagues</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
              <Users className="w-12 h-12 text-beige-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Respect</h3>
              <p className="text-gray-600">Treating everyone with dignity and consideration</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
              <Lightbulb className="w-12 h-12 text-beige-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Humility</h3>
              <p className="text-gray-600">Grounded approach and continuous learning mindset</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300">
              <Award className="w-12 h-12 text-beige-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Unity</h3>
              <p className="text-gray-600">Collaboration and teamwork towards common goals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Culture</h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Our culture is driven by an <strong>entrepreneurial mindset, strong conviction, principled leadership, resilience, continuous learning, and focus on work-life balance</strong>, all fostered within a vibrant and enjoyable workspace.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl hover:bg-beige-50 transition-all duration-300">
                <div className="w-16 h-16 bg-beige-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-beige-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Entrepreneurial Mindset</h3>
                <p className="text-sm text-gray-600">Innovation and creative problem-solving approach</p>
              </div>
              
              <div className="text-center p-6 rounded-xl hover:bg-beige-50 transition-all duration-300">
                <div className="w-16 h-16 bg-beige-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-beige-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Strong Conviction</h3>
                <p className="text-sm text-gray-600">Unwavering commitment to excellence and quality</p>
              </div>
              
              <div className="text-center p-6 rounded-xl hover:bg-beige-50 transition-all duration-300">
                <div className="w-16 h-16 bg-beige-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-beige-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Principled Leadership</h3>
                <p className="text-sm text-gray-600">Ethical guidance and mentorship at all levels</p>
              </div>
              
              <div className="text-center p-6 rounded-xl hover:bg-beige-50 transition-all duration-300">
                <div className="w-16 h-16 bg-beige-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-beige-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Resilience</h3>
                <p className="text-sm text-gray-600">Adaptability and strength in challenging situations</p>
              </div>
              
              <div className="text-center p-6 rounded-xl hover:bg-beige-50 transition-all duration-300">
                <div className="w-16 h-16 bg-beige-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-beige-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Continuous Learning</h3>
                <p className="text-sm text-gray-600">Commitment to professional development and growth</p>
              </div>
              
              <div className="text-center p-6 rounded-xl hover:bg-beige-50 transition-all duration-300">
                <div className="w-16 h-16 bg-beige-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-beige-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Work-Life Balance</h3>
                <p className="text-sm text-gray-600">Fostering well-being in a vibrant workspace</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Team</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Meet our experienced leadership team with decades of combined expertise
            </p>
          </div>
          
          {/* Rushi Upadhyaya */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden mb-12">
            <div className="md:flex">
              <div className="md:w-1/3 bg-gradient-to-br from-beige-600 to-beige-700 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <Briefcase className="w-16 h-16 text-beige-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Rushi Upadhyaya</h3>
                  <p className="text-beige-100 font-medium">Founder, HRA Legal</p>
                </div>
              </div>
              <div className="md:w-2/3 p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Qualifications</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <GraduationCap className="w-5 h-5 text-beige-600 mr-2" />
                        <span className="text-gray-700">Masters of Business Laws (MBL)</span>
                      </div>
                      <div className="flex items-center">
                        <GraduationCap className="w-5 h-5 text-beige-600 mr-2" />
                        <span className="text-gray-700">Qualified Company Secretary</span>
                      </div>
                      <div className="flex items-center">
                        <GraduationCap className="w-5 h-5 text-beige-600 mr-2" />
                        <span className="text-gray-700">Diploma in Intellectual Property Laws (PGIPR)</span>
                      </div>
                      <div className="flex items-center">
                        <GraduationCap className="w-5 h-5 text-beige-600 mr-2" />
                        <span className="text-gray-700">Law Graduate (LLB)</span>
                      </div>
                      <div className="flex items-center">
                        <GraduationCap className="w-5 h-5 text-beige-600 mr-2" />
                        <span className="text-gray-700">Management Graduate (BMS)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Experience</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>15+ years</strong> as an in-house Counsel - Legal, Corporate Affairs and Business Affairs in Media & Entertainment sector.
                    </p>
                    <div className="space-y-2">
                      <p className="text-gray-600"><strong>Previous Organizations:</strong></p>
                      <ul className="text-gray-600 space-y-1 ml-4">
                        <li>• Sony Pictures Networks India Pvt. Ltd. (now Culver Max)</li>
                        <li>• Shemaroo Entertainment Ltd.</li>
                        <li>• Goldmines Telefilms Ltd.</li>
                        <li>• Reliance Industries Ltd.-Jio Studios</li>
                        <li>• Sony Music (India) Pvt. Ltd.</li>
                        <li>• Maddock Films</li>
                        <li>• Consultant at Reliance Retail</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Core Skills</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-beige-50 p-4 rounded-lg">
                        <p className="text-gray-700"><strong>Leadership:</strong> Sharp leadership mindset with prompt decision making</p>
                      </div>
                      <div className="bg-beige-50 p-4 rounded-lg">
                        <p className="text-gray-700"><strong>Analysis:</strong> Strong analytical and meticulous approach</p>
                      </div>
                      <div className="bg-beige-50 p-4 rounded-lg">
                        <p className="text-gray-700"><strong>Strategy:</strong> Proficiency in strategic and prolific suggestions</p>
                      </div>
                      <div className="bg-beige-50 p-4 rounded-lg">
                        <p className="text-gray-700"><strong>Solutions:</strong> Competence in balanced win-win solutions</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ami Upadhyaya */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3 p-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Qualifications</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center">
                        <GraduationCap className="w-5 h-5 text-beige-600 mr-2" />
                        <span className="text-gray-700">Management Graduate (BMS)</span>
                      </div>
                      <div className="flex items-center">
                        <GraduationCap className="w-5 h-5 text-beige-600 mr-2" />
                        <span className="text-gray-700">Master of Commerce (MCom)</span>
                      </div>
                      <div className="flex items-center">
                        <GraduationCap className="w-5 h-5 text-beige-600 mr-2" />
                        <span className="text-gray-700">Master of Business Administration (MBA)</span>
                      </div>
                      <div className="flex items-center">
                        <GraduationCap className="w-5 h-5 text-beige-600 mr-2" />
                        <span className="text-gray-700">Master of Business Laws (MBL)</span>
                      </div>
                      <div className="flex items-center">
                        <GraduationCap className="w-5 h-5 text-beige-600 mr-2" />
                        <span className="text-gray-700">Certified/Licensed NLP Practitioner</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Experience</h4>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>18+ years</strong> as a Human Resource Professional in IT and Real Estate sector.
                    </p>
                    <div className="space-y-2">
                      <p className="text-gray-600"><strong>Previous Organizations:</strong></p>
                      <ul className="text-gray-600 space-y-1 ml-4">
                        <li>• PXL Soft</li>
                        <li>• Karizma</li>
                        <li>• Sethia Pride</li>
                        <li>• One Avigna</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">Core Skills</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-beige-50 p-4 rounded-lg">
                        <p className="text-gray-700"><strong>Entrepreneurial:</strong> Entrepreneurial aptitude and vision</p>
                      </div>
                      <div className="bg-beige-50 p-4 rounded-lg">
                        <p className="text-gray-700"><strong>Innovation:</strong> Effortless approach in conventional and new ideas</p>
                      </div>
                      <div className="bg-beige-50 p-4 rounded-lg">
                        <p className="text-gray-700"><strong>Business Acumen:</strong> Profound comprehension of business</p>
                      </div>
                      <div className="bg-beige-50 p-4 rounded-lg">
                        <p className="text-gray-700"><strong>Leadership:</strong> Self-assertive and strategic risk taker</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/3 bg-gradient-to-br from-beige-500 to-beige-600 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-16 h-16 text-beige-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Ami Upadhyaya</h3>
                  <p className="text-beige-100 font-medium">Independent Consultant</p>
                  <p className="text-beige-100 text-sm mt-2">Founder, HRpreneurs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 