import { Briefcase, Users, TrendingUp, Heart, Clock, MapPin, GraduationCap, Star, Award, Coffee } from 'lucide-react';

export const metadata = {
  title: 'Careers - HRA Legal',
  description: 'Join our team of legal professionals and build your career with HRA Legal. Explore opportunities in law, corporate affairs, and legal research.',
}

export default function CareersPage() {
  const jobOpenings = [
    {
      id: 1,
      title: "Senior Legal Associate - Corporate Law",
      department: "Corporate Affairs",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "3-5 years",
      description: "We are seeking an experienced legal associate to join our Corporate Law team, handling M&A transactions, corporate governance, and commercial contracts.",
      requirements: [
        "LLB/LLM from a recognized university",
        "3-5 years experience in corporate law",
        "Strong drafting and negotiation skills",
        "Experience with M&A and corporate transactions"
      ]
    },
    {
      id: 2,
      title: "Intellectual Property Specialist",
      department: "IP & Media Law",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "2-4 years",
      description: "Join our specialized IP team working with leading entertainment and technology companies on trademark, copyright, and patent matters.",
      requirements: [
        "LLB with specialization in IP Law",
        "2-4 years experience in IP practice",
        "Knowledge of media and entertainment law",
        "Experience with IP registration and enforcement"
      ]
    },
    {
      id: 3,
      title: "Legal Research Associate",
      department: "Research & Analysis",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "1-2 years",
      description: "Opportunity for a fresh graduate or junior associate to work on legal research, case analysis, and support senior lawyers in various practice areas.",
      requirements: [
        "LLB from a recognized law school",
        "Strong research and analytical skills",
        "Excellent written communication",
        "Proficiency in legal databases"
      ]
    },
    {
      id: 4,
      title: "HR Business Partner",
      department: "Human Resources",
      location: "Mumbai, Maharashtra",
      type: "Full-time",
      experience: "5-7 years",
      description: "Lead HR initiatives and support our growing team with strategic HR planning, talent development, and organizational excellence.",
      requirements: [
        "MBA in HR or related field",
        "5-7 years of HR experience",
        "Experience in professional services",
        "Strong leadership and communication skills"
      ]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Professional Growth",
      description: "Continuous learning opportunities, mentorship programs, and clear career progression paths."
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible working arrangements, wellness programs, and focus on employee well-being."
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work with experienced professionals in a supportive, team-oriented environment."
    },
    {
      icon: Award,
      title: "Competitive Benefits",
      description: "Attractive compensation packages, health insurance, and performance-based incentives."
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Sponsored training programs, conference attendance, and skill development initiatives."
    },
    {
      icon: Coffee,
      title: "Modern Workplace",
      description: "State-of-the-art office facilities, latest technology, and comfortable working environment."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Build your legal career with HRA Legal. Join a dynamic team of professionals committed to excellence, innovation, and client success.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose HRA Legal?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              At HRA Legal, we believe in fostering a culture of excellence, integrity, and continuous growth. Our team members are our greatest asset.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-beige-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-beige-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-700">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="bg-beige-50 py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Current Openings</h2>
            <p className="text-lg text-gray-700">
              Explore exciting career opportunities and find the perfect role to advance your legal career.
            </p>
          </div>

          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2 text-beige-400" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-beige-400" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-beige-400" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-2 text-beige-400" />
                        {job.experience}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{job.description}</p>
                  </div>
                  
                  <div className="lg:ml-8">
                    <button className="w-full lg:w-auto px-6 py-3 bg-beige-400 text-white font-semibold rounded-md hover:bg-beige-800 transition-colors duration-200">
                      Apply Now
                    </button>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Application Process</h2>
            <p className="text-lg text-gray-700">
              Our streamlined recruitment process ensures we find the best talent while providing a positive candidate experience.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-beige-400 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Submit Application</h3>
              <p className="text-gray-700">Send your resume and cover letter for the position you're interested in.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-beige-400 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Initial Screening</h3>
              <p className="text-gray-700">Our HR team will review your application and conduct an initial screening call.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-beige-400 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Technical Interview</h3>
              <p className="text-gray-700">Meet with our legal experts to discuss your experience and technical skills.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-beige-400 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Final Decision</h3>
              <p className="text-gray-700">Final interview with partners and offer discussion for successful candidates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-beige-50 py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Don't see a position that matches your skills? We're always looking for talented individuals to join our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-beige-400 text-white font-semibold rounded-md hover:bg-beige-800 transition-colors duration-200"
            >
              Send Your Resume
            </a>
            <a 
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-beige-400 text-beige-400 font-semibold rounded-md hover:bg-beige-400 hover:text-white transition-colors duration-200"
            >
              Learn About Our Culture
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 