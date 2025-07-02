import { GraduationCap, Briefcase, Mail, FileText, Heart, Users, TrendingUp, Award } from 'lucide-react';

export const metadata = {
  title: 'Careers - HRA Legal',
  description: 'Join our team of legal professionals. Explore internship and retainership opportunities at HRA Legal.',
}

export default function CareersPage() {
  const opportunities = [
    {
      id: 1,
      icon: GraduationCap,
      title: "Internship",
      description: "Gain valuable experience and learn from seasoned legal professionals in a dynamic environment.",
      requirements: [
        "Current law student or recent graduate",
        "Strong academic record",
        "Passion for learning and professional development",
        "Excellent communication and research skills"
      ],
      application: "Please write to us along with a letter of interest showcasing your educational qualifications and future career path and goals."
    },
    {
      id: 2,
      icon: Briefcase,
      title: "Retainership",
      description: "Join our team of retained legal professionals and work on diverse, challenging legal matters.",
      requirements: [
        "Qualified legal professional",
        "Relevant experience in legal practice",
        "Commitment to excellence and professional growth",
        "Alignment with our values and culture"
      ],
      application: "Please write to us along with a letter of interest showcasing your educational qualifications and future career path and goals."
    }
  ];

  const whyJoinUs = [
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work in a dynamic, passionate and inclusive environment that fosters professional growth."
    },
    {
      icon: TrendingUp,
      title: "Professional Development",
      description: "Continuous learning opportunities and exposure to diverse legal practice areas."
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "We believe in fostering well-being within a vibrant and enjoyable workspace."
    },
    {
      icon: Award,
      title: "Excellence & Innovation",
      description: "Be part of an entrepreneurial mindset with strong conviction and principled leadership."
    }
  ];

  return (
    <div className="min-h-screen bg-[#ECE5DE]">
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
                      <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 border-b-4 border-gray-800 pb-4 inline-block">
              Careers
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Join HRA Legal and build your career with a team committed to excellence, integrity, and professional growth.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section id="why" className="pb-12">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-gray-800 pb-2 inline-block">Why Choose HRA Legal?</h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto">
              At HRA Legal, we foster a culture driven by entrepreneurial mindset, strong conviction, principled leadership, resilience, continuous learning, and focus on work-life balance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyJoinUs.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                                  <div className="w-16 h-16 bg-[#ECE5DE] rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-[#B39F96]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-800 pb-1 inline-block">{benefit.title}</h3>
                  <p className="text-gray-700 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section id="opportunities" className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-gray-800 pb-2 inline-block">Career Opportunities</h2>
            <p className="text-base text-gray-700">
              Explore opportunities to grow your legal career with HRA Legal.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {opportunities.map((opportunity) => {
              const IconComponent = opportunity.icon;
              return (
                <div key={opportunity.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-[#B39F96] rounded-xl flex items-center justify-center mr-6">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 border-b border-gray-800 pb-1 inline-block">{opportunity.title}</h3>
                      <p className="text-gray-700">{opportunity.description}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4 border-b border-gray-800 pb-1 inline-block">What We Look For:</h4>
                    <ul className="space-y-2">
                      {opportunity.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-[#B39F96] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#ECE5DE] rounded-lg p-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center border-b border-gray-800 pb-1 inline-block">
                      <FileText className="w-5 h-5 mr-2 text-[#B39F96]" />
                      How to Apply
                    </h4>
                    <p className="text-gray-700 mb-4">{opportunity.application}</p>
                    <div className="flex items-center text-[#B39F96]">
                      <Mail className="w-5 h-5 mr-2" />
                      <span className="font-semibold">info@hralegal.com</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section id="process" className="py-12">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-gray-800 pb-2 inline-block">Application Process</h2>
              <p className="text-base text-gray-700">
                We welcome applications from passionate legal professionals who share our values and commitment to excellence.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ECE5DE] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-[#B39F96]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-800 pb-1 inline-block">1. Submit Application</h3>
                <p className="text-gray-600">Send your letter of interest along with educational qualifications and career goals</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ECE5DE] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#B39F96]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-800 pb-1 inline-block">2. Review Process</h3>
                <p className="text-gray-600">Our team reviews applications and conducts interviews with suitable candidates</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ECE5DE] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[#B39F96]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-800 pb-1 inline-block">3. Welcome Aboard</h3>
                <p className="text-gray-600">Successful candidates join our team and begin their growth journey with HRA Legal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16">
                  <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-gray-800 pb-2 inline-block">
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Take the first step towards an exciting career in law with HRA Legal. We look forward to hearing from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:info@hralegal.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#B39F96] text-white font-semibold rounded-lg hover:bg-[#A08B80] transition-colors duration-200"
            >
              <Mail className="w-5 h-5 mr-2" />
              Apply Now
            </a>
            <a 
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#B39F96] text-[#B39F96] font-semibold rounded-lg hover:bg-[#B39F96] hover:text-white transition-colors duration-200"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 