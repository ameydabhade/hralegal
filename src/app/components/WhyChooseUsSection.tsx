'use client';

import { motion } from 'framer-motion';
import { 
  Eye,
  Layers,
  MessageSquare,
  Trophy,
  Brain,
  Clock
} from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: "Effortlessly Comprehend the deal/matter",
    description: "We quickly understand complex legal matters and business deals to provide clear, actionable insights."
  },
  {
    icon: Layers,
    title: "Effective Structuring and Strategizing",
    description: "Strategic deal structuring from both legal and commercial perspectives to maximize value and minimize risk."
  },
  {
    icon: MessageSquare,
    title: "Confident Negotiations",
    description: "Expert negotiation using Integrative, Distributive, or Adversarial styles, keeping in mind Zone of Possible Agreement and Best Alternate to Negotiated Agreement."
  },
  {
    icon: Trophy,
    title: "Successful Deal Closures",
    description: "Proven track record of bringing complex deals to successful completion through meticulous attention to detail."
  },
  {
    icon: Brain,
    title: "Leadership Excellence",
    description: "Flexible thinking amid constantly shifting situations and risks, adapting strategies as circumstances evolve."
  },
  {
    icon: Clock,
    title: "Always Accessible for Advice/Consultations",
    description: "Available for guidance and consultations when you need us most. Paperwork must be completed before making any commitments."
  }
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-beige-50 to-beige-100">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-beige-200 border border-beige-300 rounded-full mb-6">
            <span className="text-sm font-medium text-beige-600">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Why Choose HRA Legal?
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Experience excellence in legal services with our comprehensive approach to your business needs
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-start">
                <div className="p-4 bg-beige-400 rounded-xl shadow-lg mr-4 flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-beige-100 to-beige-200 rounded-2xl p-8 md:p-12 ">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Experience Excellence?
            </h3>
            <p className=" mb-8 max-w-2xl mx-auto">
              Let us help you navigate your legal challenges with confidence and expertise.
            </p>
            <button className="bg-white text-beige-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 shadow-lg">
              Get Started Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 