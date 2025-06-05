import { Brain, Target, Handshake, CheckCircle, Crown, Users2 } from 'lucide-react';
import Link from 'next/link';

const traits = [
  {
    icon: Brain,
    title: "Comprehension",
    description: "We dive deep into your business model, understanding every nuance to provide tailored legal solutions.",
    benefit: "Strategic legal advice aligned with your business goals"
  },
  {
    icon: Target,
    title: "Structuring",
    description: "Expert structuring of deals, contracts, and legal frameworks that optimize outcomes and minimize risks.",
    benefit: "Optimized legal structures for maximum protection"
  },
  {
    icon: Handshake,
    title: "Negotiations",
    description: "Skilled negotiation strategies that protect your interests while maintaining positive business relationships.",
    benefit: "Win-win outcomes that preserve partnerships"
  },
  {
    icon: CheckCircle,
    title: "Deal Closures",
    description: "Efficient deal execution with attention to detail, ensuring smooth and timely transaction completions.",
    benefit: "Seamless transactions with reduced timeline"
  },
  {
    icon: Crown,
    title: "Leadership",
    description: "Proactive legal leadership that anticipates challenges and guides strategic decision-making.",
    benefit: "Forward-thinking legal strategy and guidance"
  },
  {
    icon: Users2,
    title: "Accessibility",
    description: "Always available when you need us, with clear communication and responsive client service.",
    benefit: "24/7 support with transparent communication"
  }
];

export default function HomeWhyChooseUsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 border border-green-200 rounded-full mb-6">
            <span className="text-sm font-medium text-green-700">Why Choose HRA Legal</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Six Defining Traits
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            What sets HRA Legal apart is our unique approach, combining deep legal expertise 
            with business acumen to deliver exceptional results for our clients.
          </p>
        </div>

        {/* Traits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {traits.map((trait, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <trait.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {trait.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {trait.description}
                    </p>
                    
                    {/* Benefit */}
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 border border-green-100">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-800">{trait.benefit}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 lg:p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">
              Proven Track Record
            </h3>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto">
              Our defining traits translate into measurable success for our clients across industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">15+</div>
              <div className="text-blue-100">Years Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-100">Successful Cases</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-blue-100">Client Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-blue-100">Client Support</div>
            </div>
          </div>
        </div>

        {/* Client-Centric Approach */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Client-Centric Legal Solutions
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Business-First Approach
                  </h4>
                  <p className="text-gray-600">
                    We understand that legal decisions impact your business. Our advice always considers 
                    commercial implications and strategic objectives.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Transparent Communication
                  </h4>
                  <p className="text-gray-600">
                    Clear, jargon-free communication ensures you understand every aspect of your legal matters 
                    and can make informed decisions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Cost-Effective Solutions
                  </h4>
                  <p className="text-gray-600">
                    We provide high-quality legal services with transparent pricing and efficient processes 
                    to maximize value for your investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 border border-green-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Ready to Experience the Difference?
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Discover how our unique approach and defining traits can benefit your business. 
              Schedule a consultation to discuss your specific legal needs.
            </p>
            
            <div className="space-y-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center w-full px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
              >
                Schedule Consultation
              </Link>
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center w-full px-8 py-3 border-2 border-blue-700 text-blue-700 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 