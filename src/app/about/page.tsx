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
  Building
} from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-100 to-white">
      {/* Hero Section */}
      <section className="pb-20">
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

      {/* Meet the Founder */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-beige-100 to-beige-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-6 border-b-4 border-red-600 pb-4 inline-block">
              Meet the Founder
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Meet the visionary leader driving HRA Legal's success with her expertise and passion for excellence.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
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
                <div className="bg-gradient-to-r from-red-500 to-red-600 p-8 text-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-12 h-12 text-red-600" />
                  </div>
                  <h3 className="text-2xl text-white font-bold mb-2">Rushi Upadhyaya</h3>
                  <p className="text-red-100 font-medium">Founder & Legal Expert</p>
                  <div className="mt-4 bg-red-400 bg-opacity-20 rounded-full px-4 py-2 inline-block">
                    <span className="text-white text-sm font-semibold">15+ Years Experience</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  {/* Professional Background */}
                  <div>
                    <h4 className="text-lg font-bold text-red-600 mb-4 flex items-center border-b-2 border-red-600 pb-2 inline-block">
                      <Building className="w-5 h-5 text-red-600 mr-2" />
                      Professional Background
                    </h4>
                    <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-600">
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        Rushi has an extensive experience of 15+ years as an in-house Counsel - Legal, Corporate Affairs and Business Affairs in Media & Entertainment sector, and has worked with global and multinational companies including:
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                        {[
                          
                        ].map((company, index) => (
                          <div key={index} className="flex items-center text-sm">
                            <div className="w-1.5 h-1.5 bg-red-600 rounded-full mr-2"></div>
                            <span className="text-gray-700">{company}</span>
                          </div>
                        ))}
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        With her good educational foundation and enriching experience in Legal, Corporate Affairs and Business Affairs, she is adept in structuring, negotiating and executing complex agreements for multifarious businesses, advising on corporate, commercial and intellectual property matters, standard & practices/content regulation, setting up legal processes/systems/standard operating procedures and leading corporate matters including mergers and acquisitions.
                      </p>
                    </div>
                  </div>

                  {/* Qualifications */}
                  <div>
                    <h4 className="text-lg font-bold text-red-600 mb-4 flex items-center border-b-2 border-red-600 pb-2 inline-block">
                      <Award className="w-5 h-5 text-red-600 mr-2" />
                      Qualifications
                    </h4>
                    <div className="space-y-2">
                      {[
                        'Masters of Business Laws (MBL)', 
                        'Qualified Company Secretary', 
                        'Diploma in IP Laws (PGIPR)', 
                        'Law Graduate (LLB)', 
                        'Management Graduate (BMS)'
                      ].map((qual, index) => (
                        <div key={index} className="flex items-center bg-red-50 p-3 rounded-lg">
                          <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                          <span className="text-gray-700 text-sm">{qual}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Experience Highlight */}
                  <div className="bg-gradient-to-r from-red-50 to-white p-6 rounded-xl border-l-4 border-red-600">
                    <h4 className="text-lg font-bold text-red-600 mb-3">Media & Entertainment Expert</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Specialized experience with global giants in media and entertainment industry, 
                      bringing deep understanding of content creation, distribution, and licensing.
                    </p>
                  </div>

                  {/* Core Strengths */}
                  <div>
                    <h4 className="text-lg font-bold text-red-600 mb-4 flex items-center border-b-2 border-red-600 pb-2 inline-block">
                      <Trophy className="w-5 h-5 text-red-600 mr-2" />
                      Core Strengths
                    </h4>
                    <div className="space-y-3">
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        Core skills that define her includes a sharp leadership mindset, prompt decision making, strong analytical and meticulous approach, proficiency to provide strategic and prolific suggestions, and competence to provide balanced solutions for a win-win closure.
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        {['Sharp Leadership Mindset', 'Prompt Decision Making', 'Strong Analytical Approach', 'Strategic Solutions', 'Meticulous Approach', 'Win-Win Closure'].map((skill, index) => (
                          <div key={index} className="bg-red-50 p-3 rounded-lg text-center border border-red-200">
                            <span className="text-red-600 text-sm font-medium">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Call-to-Action - Experience Excellence (Optional) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-200">
              <h3 className="text-2xl font-bold text-red-600 mb-4 border-b-2 border-red-600 pb-2 inline-block">
                Experience Excellence in Leadership
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Our founder brings 15+ years of expertise in legal services, 
                ensuring comprehensive solutions for your business needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">Legal Excellence</span>
                <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">Strategic Leadership</span>
                <span className="bg-red-100 text-red-700 px-4 py-2 rounded-full text-sm font-medium">Global Experience</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story - Placeholder for new content */}
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
              <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-6 border-b-4 border-red-600 pb-4 inline-block">
                Our Story
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Placeholder - Will be replaced with your story content */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                <p className="text-red-600 font-medium">
                  📝 Story content will be updated when you provide the new content
                </p>
              </div>
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
              <div className="lg:w-1/3 bg-gradient-to-br from-red-500 to-red-600 p-12 flex items-center justify-center">
                <div className="text-center">
                  <Target className="w-20 h-20 text-white mx-auto mb-6" />
                  <h2 className="text-4xl font-bold text-white">Mission</h2>
                </div>
              </div>
              <div className="lg:w-2/3 p-12">
                <h3 className="text-2xl font-bold text-red-600 mb-6 border-b-2 border-red-600 pb-2 inline-block">
                  Our Mission
                </h3>
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
                  <h3 className="text-2xl font-bold text-red-600 mb-6 border-b-2 border-red-600 pb-2 inline-block">
                    Our Vision
                  </h3>
                  <div className="bg-red-50 rounded-2xl p-8 border-l-4 border-red-600">
                    <p className="text-2xl text-gray-800 leading-relaxed font-semibold text-center">
                      Our vision is to be a renowned profitable premier law firm globally.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 bg-gradient-to-br from-red-500 to-red-600 p-12 flex items-center justify-center">
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
            <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-6 border-b-4 border-red-600 pb-4 inline-block">
              Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our core values of <strong>Integrity, Trust, Respect, Humility, and Unity</strong> are consistently 
              reflected in our business ethics and are embedded in the professional legal services we offer worldwide.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
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
                className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="p-3 bg-red-600 rounded-2xl inline-block mb-4">
                  <value.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-red-600 mb-3">
                  {value.title}
                  <div className="h-0.5 bg-red-600 w-12 mx-auto mt-1"></div>
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{value.description}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-6 border-b-4 border-red-600 pb-4 inline-block">
              Our Culture
            </h2>
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
                  <div className="p-3 bg-red-600 rounded-xl mr-4 flex-shrink-0">
                    <culture.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-red-600 mb-3 border-b border-red-600 pb-1 inline-block">
                      {culture.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{culture.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 