import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Priya Sharma",
    title: "CEO, TechVision Solutions",
    industry: "Technology",
    content: "HRA Legal has been instrumental in our company's growth. Their expertise in IP law and technology contracts helped us secure crucial partnerships and protect our innovations. Highly recommended!",
    rating: 5,
    highlight: "Exceptional IP expertise"
  },
  {
    name: "Rajesh Kumar",
    title: "Producer, Silver Screen Entertainment",
    industry: "Media & Entertainment",
    content: "Working with HRA Legal on our film production contracts was seamless. Their deep understanding of the entertainment industry and attention to detail saved us from potential legal issues.",
    rating: 5,
    highlight: "Industry expertise"
  },
  {
    name: "Anita Desai",
    title: "HR Director, Global Manufacturing Ltd",
    industry: "Manufacturing",
    content: "The employment law guidance from HRA Legal transformed our HR policies. Their practical approach and clear communication made complex compliance issues manageable for our team.",
    rating: 5,
    highlight: "Clear communication"
  },
  {
    name: "Vikram Mehta",
    title: "Founder, StartupLab",
    industry: "Startup",
    content: "As a startup, we needed cost-effective legal solutions without compromising quality. HRA Legal delivered exactly that, helping us with incorporation, contracts, and investor agreements.",
    rating: 5,
    highlight: "Cost-effective solutions"
  },
  {
    name: "Sunita Patel",
    title: "General Manager, Sports Academy",
    industry: "Sports",
    content: "The sports law expertise at HRA Legal is outstanding. They handled our athlete contracts and sponsorship agreements with professionalism and deep industry knowledge.",
    rating: 5,
    highlight: "Sports law expertise"
  },
  {
    name: "Arjun Singh",
    title: "Director, Digital Marketing Agency",
    industry: "Digital Services",
    content: "HRA Legal's understanding of digital business models and data privacy laws helped us navigate complex regulatory requirements while scaling our operations effectively.",
    rating: 5,
    highlight: "Digital business expertise"
  }
];

export default function HomeTestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-orange-100 border border-orange-200 rounded-full mb-6">
            <span className="text-sm font-medium text-orange-700">Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what business leaders across industries 
            say about working with HRA Legal for their legal needs.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-orange-200" fill="currentColor" />
              </div>
              
              <div className="space-y-6">
                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                
                {/* Testimonial Content */}
                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                
                {/* Highlight */}
                <div className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded-full">
                  {testimonial.highlight}
                </div>
                
                {/* Client Info */}
                <div className="border-t border-gray-100 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {testimonial.title}
                      </p>
                      <p className="text-xs text-orange-600 font-medium">
                        {testimonial.industry}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Trusted by Industry Leaders
          </h3>
          <p className="text-orange-100 text-lg mb-8 max-w-2xl mx-auto">
            Our client satisfaction speaks volumes about our commitment to excellence 
            and our ability to deliver results across diverse industries.
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-orange-100">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">150+</div>
              <div className="text-orange-100">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">90%</div>
              <div className="text-orange-100">Repeat Business</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-orange-100">Average Rating</div>
            </div>
          </div>
        </div>

        {/* Bar Council Notice */}
        <div className="mt-16 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-3xl p-6">
          <div className="text-center">
            <h4 className="text-lg font-bold text-amber-900 mb-2">
              Client Testimonials Disclaimer
            </h4>
            <p className="text-amber-800 text-sm leading-relaxed">
              The testimonials displayed are from genuine clients who have engaged our legal services. 
              As per Bar Council of India rules, these testimonials are shared for informational purposes only 
              and do not constitute advertisement or solicitation of legal services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 