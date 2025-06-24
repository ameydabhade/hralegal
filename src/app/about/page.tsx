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
    <div className="min-h-screen bg-[#ECE5DE]">
      {/* Hero Section */}
      <section className="pt-24 pb-12">
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
      <section id="founder" className="py-8 px-4 sm:px-6 lg:px-8 bg-[#ECE5DE]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 border-b-4 border-gray-800 pb-2 inline-block">
              Meet the Founder
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Meet the visionary leader driving HRA Legal&apos;s success with her expertise and passion for excellence.
            </p>
          </motion.div>

          {/* Compact Single Card Layout */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            {/* Header Section */}
            <div className="bg-gradient-to-r from-gray-600 to-gray-700 p-6">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="flex items-center mb-4 lg:mb-0">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4 shadow-lg">
                    <Users className="w-8 h-8 text-gray-700" />
                  </div>
                  <div>
                    <h3 className="text-xl text-white font-bold">Rushi Upadhyaya</h3>
                    <p className="text-gray-100 font-medium text-sm">Founder & Legal Expert</p>
                  </div>
                </div>
                <div className="bg-gray-500 bg-opacity-30 rounded-full px-4 py-2">
                  <span className="text-white text-sm font-semibold">15+ Years Experience</span>
                </div>
              </div>
            </div>

            {/* Content Grid */}
            <div className="p-6 lg:p-8">
              <div className="grid lg:grid-cols-3 gap-6">
                
                {/* Professional Background */}
                <div className="lg:col-span-2">
                  <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center border-b-2 border-gray-800 pb-2 inline-block">
                    <Building className="w-5 h-5 text-gray-700 mr-2" />
                    Professional Background
                  </h4>
                  <div className="space-y-4">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      15+ years experience as in-house Counsel in Media & Entertainment sector with global companies:
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {[
                        "Sony Pictures Networks India",
                        "Shemaroo Entertainment Ltd.",
                        "Goldmines Telefilms Ltd.",
                        "Reliance Industries – Jio Studios",
                        "Sony Music (India) Pvt. Ltd.",
                        "Maddock Films"
                      ].map((company, index) => (
                        <div key={index} className="bg-gray-50 p-2 rounded-lg border border-gray-200">
                          <span className="text-gray-700 font-medium">{company}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Expert in structuring, negotiating complex agreements, corporate matters, IP laws, and M&A.
                    </p>
                  </div>
                </div>

                {/* Qualifications */}
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center border-b-2 border-gray-800 pb-2 inline-block">
                    <Award className="w-5 h-5 text-gray-700 mr-2" />
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
                      <div key={index} className="flex items-center bg-gray-50 p-2 rounded-lg">
                        <div className="w-2 h-2 bg-gray-600 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 text-xs font-medium">{qual}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Core Strengths */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center border-b-2 border-gray-800 pb-2 inline-block">
                  <Trophy className="w-5 h-5 text-gray-700 mr-2" />
                  Core Strengths & Expertise
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
                  {['Sharp Leadership', 'Quick Decision Making', 'Analytical Approach', 'Strategic Solutions', 'Meticulous Planning', 'Win-Win Closure'].map((skill, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg text-center border border-gray-200 hover:shadow-md transition-shadow">
                      <span className="text-gray-700 text-xs font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-gray-50 p-4 rounded-xl border-l-4 border-gray-600">
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Media & Entertainment Specialist:</strong> Deep understanding of content creation, distribution, licensing with proven track record across major studios and production houses.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Story - Placeholder for new content */}
      <section id="story" className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#ECE5DE] rounded-3xl p-12 shadow-xl border border-gray-200"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 border-b-4 border-gray-800 pb-4 inline-block">
                Our Story
              </h2>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                After spending over 2 decades in the whirlwind of Media and Entertainment—where creativity power-packed with chaos and my deadlines chased each other endlessly—one quiet dream always stayed with me: to create something of my own!.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                That quiet dream wasn&apos;t random—it was woven into my roots. As a Gujarati, the spirit of entrepreneurship has always been part of my worldview. It just needed the right moment, and the right kind of courage, to take shape.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                That persistent thought, that gentle nudge, became the spark behind what is now &ldquo;HRA Legal&rdquo;. It wasn&apos;t born from a moment—it was carved from many. More than a year of silent but determined groundwork, countless late nights fuelled by resilience and coffee, intense conversations, scribbled notes, and the comforting presence of the dear ones who believed in my &ldquo;someday.&rdquo;
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                That &ldquo;someday&rdquo; finally arrived for me. Wrapped in uncertainty, yes—but illuminated by purpose!
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Starting HRA Legal wasn&apos;t just a career leap. It&apos;s a decision made from an unwavering belief that law could be practiced with empathy, integrity, and excellence. A belief that we could build a firm where innovation meets experience, where professionalism walks hand-in-hand with personal connection, a space where clients aren&apos;t just advised—they&apos;re understood, a firm where solutions come wrapped in clarity, and support is always delivered with heart.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our firm stands on a rock-solid foundation: decades of real-world industry experience, strong-rooted academic grounding, and meaningful collaborations with inspiring minds and mentors. But above all, it&apos;s built on confidence, passion, perseverance, and the unshakable spirit of entrepreneurship.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We&apos;re here for the contracts, the complex codes, the compliance checks—but also for the comfort, the reassurance, and the honest conversations in between.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our story is still unfolding. But one truth anchors us: dreams fuelled by grit and grace are unstoppable.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-semibold text-center text-gray-800">
                Welcome to HRA Legal—a legal firm powered by passion, and guided by heart.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
              <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#ECE5DE]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="lg:flex">
              <div className="lg:w-1/3 bg-gradient-to-br from-gray-600 to-gray-700 p-12 flex items-center justify-center">
                <div className="text-center">
                  <Target className="w-20 h-20 text-white mx-auto mb-6" />
                  <h2 className="text-4xl font-bold text-white">Mission</h2>
                </div>
              </div>
              <div className="lg:w-2/3 p-12">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-gray-800 pb-2 inline-block">
                  Our Mission
                </h3>
                <p className="text-base text-gray-700 leading-relaxed">
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
      <section className="py-12 px-4 sm:px-6 lg:px-8">
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
                  <h3 className="text-2xl font-bold text-gray-800 mb-6 border-b-2 border-gray-800 pb-2 inline-block">
                    Our Vision
                  </h3>
                  <div className="bg-gray-50 rounded-2xl p-8 border-l-4 border-gray-600">
                    <p className="text-lg text-gray-800 leading-relaxed font-semibold text-center">
                      Our vision is to be a renowned profitable premier law firm globally.
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/3 bg-gradient-to-br from-gray-600 to-gray-700 p-12 flex items-center justify-center">
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
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#ECE5DE]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 border-b-4 border-gray-800 pb-4 inline-block">
              Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
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
                <div className="p-3 bg-[#B39F96] rounded-2xl inline-block mb-4">
                  <value.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                </div>
                <h3 className="text-lg lg:text-xl font-bold text-gray-800 mb-3">
                  {value.title}
                  <div className="h-0.5 bg-gray-800 w-12 mx-auto mt-1"></div>
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm lg:text-base">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 border-b-4 border-gray-800 pb-4 inline-block">
              Our Culture
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
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
                  <div className="p-3 bg-[#B39F96] rounded-xl mr-4 flex-shrink-0">
                    <culture.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-800 pb-1 inline-block">
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