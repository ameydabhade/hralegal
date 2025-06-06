import { Users, TrendingUp, Heart, Coffee, Award, MapPin, Clock, DollarSign } from 'lucide-react';

const openPositions = [
  {
    title: "Senior Associate - Corporate Law",
    department: "Legal",
    location: "Mumbai",
    type: "Full-time",
    experience: "3-5 years",
    description: "Join our corporate law team to handle complex mergers, acquisitions, and corporate governance matters.",
    requirements: [
      "LLB with specialization in Corporate Law",
      "3-5 years experience in corporate legal practice",
      "Experience with M&A transactions",
      "Strong drafting and negotiation skills",
      "Excellent communication and client management skills"
    ]
  },
  {
    title: "Legal Associate - Intellectual Property",
    department: "IP Division",
    location: "Mumbai",
    type: "Full-time", 
    experience: "2-4 years",
    description: "Handle IP portfolio management, trademark registrations, and IP litigation for our entertainment and tech clients.",
    requirements: [
      "LLB with IP specialization or PGDM in IP",
      "2-4 years experience in IP law",
      "Knowledge of trademark and copyright law",
      "Experience with IP litigation",
      "Understanding of entertainment industry IP"
    ]
  },
  {
    title: "Junior Legal Counsel",
    department: "Legal",
    location: "Mumbai",
    type: "Full-time",
    experience: "1-2 years",
    description: "Support senior lawyers with contract drafting, research, and client coordination across various practice areas.",
    requirements: [
      "LLB from recognized university",
      "1-2 years of legal experience",
      "Strong research and writing skills",
      "Proficiency in legal databases",
      "Willingness to learn and grow"
    ]
  },
  {
    title: "Paralegal - Corporate Affairs",
    department: "Corporate",
    location: "Mumbai",
    type: "Full-time",
    experience: "0-1 years",
    description: "Assist with document management, compliance tracking, and administrative support for corporate legal matters.",
    requirements: [
      "Bachelor's degree (Law background preferred)",
      "0-1 years of experience",
      "Strong organizational skills",
      "Attention to detail",
      "Proficiency in MS Office and legal software"
    ]
  }
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Clear career progression paths with mentorship and skill development opportunities."
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Flexible working arrangements and focus on maintaining healthy work-life integration."
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description: "Work with experienced professionals in a supportive and inclusive environment."
  },
  {
    icon: Award,
    title: "Learning & Development",
    description: "Continuous learning opportunities, training programs, and professional development support."
  },
  {
    icon: Coffee,
    title: "Modern Workplace",
    description: "State-of-the-art office facilities with modern amenities and comfortable working spaces."
  },
  {
    icon: DollarSign,
    title: "Competitive Package",
    description: "Competitive salary, performance bonuses, and comprehensive benefits package."
  }
];

export default function CareersSection() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
            <span className="text-sm font-medium text-blue-700">Join Our Team</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Build Your Legal Career with HRA Legal
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Join a dynamic and growing law firm where talent is nurtured, excellence is recognized, 
            and every team member contributes to delivering outstanding legal services to our clients.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose HRA Legal as Your Career Partner?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl w-fit">
                    <benefit.icon className="w-8 h-8 text-blue-700" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Current Openings
            </h2>
            <p className="text-lg text-gray-600">
              Explore exciting opportunities to join our legal team and make an impact.
            </p>
          </div>
          
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Position Info */}
                  <div className="lg:col-span-2 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 mb-4">
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </span>
                        <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">
                          <Award className="w-4 h-4" />
                          {position.experience}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {position.description}
                    </p>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                      <div className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <div key={reqIndex} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Apply Button */}
                  <div className="flex flex-col justify-center">
                    <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl text-center">
                      <h4 className="font-semibold text-gray-900 mb-2">{position.department}</h4>
                      <p className="text-sm text-gray-600 mb-6">Join our {position.department.toLowerCase()} team</p>
                      <a 
                        href="/contact" 
                        className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-gray-100 mb-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Hiring Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-700">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Application</h3>
              <p className="text-sm text-gray-600">Submit your resume and cover letter</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-700">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Screening</h3>
              <p className="text-sm text-gray-600">Initial review and phone screening</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-700">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Interview</h3>
              <p className="text-sm text-gray-600">In-person or virtual interviews</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-700">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Onboarding</h3>
              <p className="text-sm text-gray-600">Welcome to the HRA Legal family</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-700 to-blue-800 rounded-3xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Don't See the Right Position?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented legal professionals. Send us your resume and 
              we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Send Your Resume
              </a>
              <a 
                href="mailto:careers@hralegal.com" 
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition-colors"
              >
                Email Us Directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 