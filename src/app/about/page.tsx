import { Target, Eye, Heart, Users, Lightbulb, Shield, HandHeart, Award } from 'lucide-react';

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

      {/* Introduction */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 mb-16">
            <h3 className="text-2xl font-bold text-beige-400 mb-4">Our Evolution</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              HRA Legal works with an <strong>ever-evolving and diverse outlook</strong> consistently aligned with prevalent market dynamics and technology shifts.
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Commitment</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                    <span>Offer outstanding legal services for diverse client needs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                    <span>Maintain highest standards of our Core Values</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                    <span>Foster growth-oriented environment for our team</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-beige-400 rounded-full mr-3 mt-2"></div>
                    <span>Ensure long-term success for clients and firm</span>
                  </li>
                </ul>
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Aspiration</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Premier Law Firm Status</h4>
                    <p className="text-gray-700">Establish ourselves as a renowned legal service provider</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Global & Domestic Reach</h4>
                    <p className="text-gray-700">Serve diverse clients including governments and economic entities</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Sustainable Growth</h4>
                    <p className="text-gray-700">Focus on profitability, sustainability, and social responsibility</p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Team Environment</h4>
                    <p className="text-gray-700">Foster dynamic, passionate, and inclusive workplace</p>
                  </div>
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
              <strong>Five fundamental principles</strong> reflected in our business ethics and embedded in our professional legal services worldwide.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 text-center">
              <Shield className="w-12 h-12 text-beige-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">Honesty and moral principles in all actions</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 text-center">
              <HandHeart className="w-12 h-12 text-beige-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Trust</h3>
              <p className="text-gray-600">Reliable relationships with clients and colleagues</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 text-center">
              <Users className="w-12 h-12 text-beige-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Respect</h3>
              <p className="text-gray-600">Dignity and consideration for everyone</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 text-center">
              <Lightbulb className="w-12 h-12 text-beige-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Humility</h3>
              <p className="text-gray-600">Grounded approach and continuous learning</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100 text-center">
              <Award className="w-12 h-12 text-beige-700 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Unity</h3>
              <p className="text-gray-600">Collaboration towards common goals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Culture</h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                <strong>Five key elements</strong> that drive our culture within a vibrant and enjoyable workspace.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-beige-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-beige-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Entrepreneurial Mindset</h3>
                <p className="text-sm text-gray-600">Innovation and creative problem-solving</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-beige-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-beige-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Strong Conviction</h3>
                <p className="text-sm text-gray-600">Unwavering commitment to excellence</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-beige-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-beige-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Principled Leadership</h3>
                <p className="text-sm text-gray-600">Ethical guidance and mentorship</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-beige-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-beige-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Resilience</h3>
                <p className="text-sm text-gray-600">Adapting and thriving through challenges</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-beige-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-beige-700" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Work-Life Balance</h3>
                <p className="text-sm text-gray-600">Vibrant and enjoyable workspace</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-beige-50 py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Work with HRA Legal?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Experience our values-driven approach to legal services and discover why clients trust us with their most important matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-beige-700 text-white font-semibold rounded-md hover:bg-beige-800 transition-colors duration-200"
            >
              Get in Touch
            </a>
            <a 
              href="/founders"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-beige-700 text-beige-700 font-semibold rounded-md hover:bg-beige-700 hover:text-white transition-colors duration-200"
            >
              Meet Our Founders
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 