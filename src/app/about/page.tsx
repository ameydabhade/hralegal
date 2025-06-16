'use client';

import { motion } from 'framer-motion';
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Shield, 
  HandHeart, 
  Award, 
  BookOpen, 
  Lightbulb,
  Trophy,
  Brain,
  Zap
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-100 to-white">
      {/* Hero Section */}
      <section className=" pb-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
         

          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-beige-100 to-beige-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Meet the visionary leaders driving HRA Legal's success with their combined expertise and passion for excellence.
            </p>
          </motion.div>

          {/* Stats Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-beige-500 mb-2">33+</div>
              <p className="text-gray-600">Combined Years of Experience</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-beige-500 mb-2">8+</div>
              <p className="text-gray-600">Advanced Qualifications</p>
            </div>
            <div className="text-center bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-4xl font-bold text-beige-500 mb-2">10+</div>
              <p className="text-gray-600">Global Organizations Served</p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Rushi Upadhyaya */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-beige-400 to-beige-500 p-8 text-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-12 h-12 text-beige-600" />
                  </div>
                  <h3 className="text-2xl text-black font-bold mb-2">Rushi Upadhyaya</h3>
                  <p className=" font-medium">Founder & Legal Expert</p>
                  <div className="mt-4 bg-beige-200 bg-opacity-20 rounded-full px-4 py-2 inline-block">
                    <span className=" text-sm font-semibold">15+ Years Experience</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  {/* Qualifications */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <Award className="w-5 h-5 text-beige-500 mr-2" />
                      Qualifications
                    </h4>
                    <div className="space-y-2">
                      {['Masters of Business Laws (MBL)', 'Qualified Company Secretary', 'Diploma in IP Laws (PGIPR)', 'Law Graduate (LLB)', 'Management Graduate (BMS)'].map((qual, index) => (
                        <div key={index} className="flex items-center bg-beige-100 p-3 rounded-lg">
                          <div className="w-2 h-2 bg-beige-200 rounded-full mr-3"></div>
                          <span className=" text-black text-sm">{qual}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Experience Highlight */}
                  <div className="bg-gradient-to-r from-beige-50 to-white p-6 rounded-xl border-l-4 border-beige-400">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Media & Entertainment Expert</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Specialized experience with global giants including Sony Pictures, Reliance, Shemaroo, and Maddock Films.
                    </p>
                  </div>

                  {/* Core Strengths */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <Trophy className="w-5 h-5 text-beige-500 mr-2" />
                      Core Strengths
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {['Strategic Leadership', 'Complex Negotiations', 'Analytical Approach', 'Win-Win Solutions'].map((skill, index) => (
                        <div key={index} className="bg-beige-100 p-3 rounded-lg text-center">
                          <span className="text-gray-700 text-sm font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Ami Upadhyaya */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-beige-400 to-beige-500 p-8 text-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Brain className="w-12 h-12 text-beige-600" />
                  </div>
                  <h3 className="text-2xl text-black font-bold mb-2">Ami Upadhyaya</h3>
                  <p className=" font-medium">HR Consultant & Strategist</p>
                  <div className="mt-4 bg-beige-200 bg-opacity-20 rounded-full px-4 py-2 inline-block">
                    <span className=" text-sm font-semibold">18+ Years Experience</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  {/* Qualifications */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <Award className="w-5 h-5 text-beige-500 mr-2" />
                      Triple Masters + More
                    </h4>
                    <div className="space-y-2">
                      {['Master of Commerce (MCom)', 'Master of Business Admin (MBA)', 'Master of Business Laws (MBL)', 'Management Graduate (BMS)', 'Licensed NLP Practitioner'].map((qual, index) => (
                        <div key={index} className="flex items-center bg-beige-100 p-3 rounded-lg">
                          <div className="w-2 h-2 bg-beige-200 rounded-full mr-3"></div>
                          <span className="  text-black text-sm">{qual}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Experience Highlight */}
                  <div className="bg-gradient-to-r from-beige-50 to-white p-6 rounded-xl border-l-4 border-beige-400">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">HR & Management Specialist</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Founder of HRpreneurs with extensive experience across IT and Real Estate sectors.
                    </p>
                  </div>

                  {/* Core Strengths */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                      <Trophy className="w-5 h-5 text-beige-500 mr-2" />
                      Core Strengths
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {['Entrepreneurial Vision', 'Strategic Risk-Taking', 'Business Innovation', 'Leadership Excellence'].map((skill, index) => (
                        <div key={index} className="bg-beige-100 p-3 rounded-lg text-center">
                          <span className="text-gray-700 text-sm font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Call-to-Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-beige-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Experience Excellence in Leadership</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our founders bring together decades of combined expertise in legal services and human resources, 
                ensuring comprehensive solutions for your business needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-beige-100 text-beige-700 px-4 py-2 rounded-full text-sm font-medium">Legal Excellence</span>
                <span className="bg-beige-100 text-beige-700 px-4 py-2 rounded-full text-sm font-medium">Strategic Leadership</span>
                <span className="bg-beige-100 text-beige-700 px-4 py-2 rounded-full text-sm font-medium">Global Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-beige-50 rounded-3xl p-12 shadow-xl border border-beige-100"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Story</h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed text-center">
                HRA Legal works on an ever evolving and diverse outlook consistently aligned with the 
                prevalent market dynamics, and technology shifts.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed text-center">
                Just like technology, law is continuously evolving, and so does HRA Legal.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-beige-100 to-beige-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="lg:flex">
              <div className="lg:w-1/3 bg-gradient-to-br from-beige-500 to-beige-600 p-12 flex items-center justify-center">
                <div className="text-center">
                  <Target className="w-20 h-20 text-white mx-auto mb-6" />
                  <h2 className="text-4xl font-bold text-white">Mission</h2>
                </div>
              </div>
              <div className="lg:w-2/3 p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our mission is to deliver outstanding professional legal services to a diverse range of global 
                  and domestic clients, including governments and economic entities, while upholding a strong 
                  focus on our Core Values, consistent profitability, long term sustainability, and social 
                  responsibility, while fostering a dynamic, passionate and inclusive work environment for our 
                  professionals.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="lg:flex">
              <div className="lg:w-2/3 p-12 flex items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Vision</h3>
                  <div className="bg-beige-50 rounded-2xl p-8 border-l-4 border-beige-400">
                    <p className="text-2xl text-gray-800 leading-relaxed font-semibold text-center">
                      Our vision is to be a renowned profitable premier law firm globally.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 bg-gradient-to-br from-beige-400 to-beige-500 p-12 flex items-center justify-center">
                <div className="text-center">
                  <Eye className="w-20 h-20 text-white mx-auto mb-6" />
                  <h2 className="text-4xl font-bold text-white">Vision</h2>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-beige-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Core Values</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our core values of <strong>Integrity, Trust, Respect, Humility, and Unity</strong> are consistently 
              reflected in our business ethics and are embedded in the professional legal services we offer worldwide.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { icon: Shield, title: "Integrity", description: "Honesty and moral principles in all our actions" },
              { icon: HandHeart, title: "Trust", description: "Building reliable relationships with clients and colleagues" },
              { icon: Users, title: "Respect", description: "Treating everyone with dignity and consideration" },
              { icon: Heart, title: "Humility", description: "Grounded approach and continuous learning mindset" },
              { icon: Award, title: "Unity", description: "Collaboration and teamwork towards common goals" }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="p-4 bg-beige-400 rounded-2xl inline-block mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Culture</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our culture is driven by an <strong>entrepreneurial mindset, strong conviction, principled leadership, 
              resilience, continuous learning, and focus on work-life balance</strong>, all fostered within a vibrant 
              and enjoyable workspace.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Lightbulb, title: "Entrepreneurial Mindset", description: "Innovation and creative problem-solving approach" },
              { icon: Shield, title: "Strong Conviction", description: "Unwavering commitment to excellence and quality" },
              { icon: Users, title: "Principled Leadership", description: "Ethical guidance and mentorship at all levels" },
              { icon: Trophy, title: "Resilience", description: "Adaptability and strength in challenging situations" },
              { icon: BookOpen, title: "Continuous Learning", description: "Commitment to professional development and growth" },
              { icon: Heart, title: "Work-Life Balance", description: "Fostering well-being in a vibrant workspace" }
            ].map((culture, index) => (
              <motion.div
                key={culture.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-start">
                  <div className="p-3 bg-beige-400 rounded-xl mr-4 flex-shrink-0">
                    <culture.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{culture.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{culture.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-beige-100 to-beige-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl text-black  md:text-5xl font-bold mb-6">Ready to Work With Us?</h2>
            <p className="text-xl text-black  mb-8 leading-relaxed">
              Experience the HRA Legal difference. Let us help you navigate your legal challenges with our 
              expertise, values, and commitment to excellence.
            </p>
            <button className="bg-white text-beige-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg text-lg">
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}