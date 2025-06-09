import { Scale, Users, Trophy, TrendingUp } from 'lucide-react';
import Link from 'next/link';

const stats = [
  {
    icon: Scale,
    number: "15+",
    label: "Years Experience",
    description: "Combined legal expertise"
  },
  {
    icon: Users,
    number: "500+",
    label: "Cases Handled",
    description: "Successful legal outcomes"
  },
  {
    icon: Trophy,
    number: "95%",
    label: "Success Rate",
    description: "Client satisfaction"
  },
  {
    icon: TrendingUp,
    number: "8",
    label: "Key Industries",
    description: "Specialized expertise"
  }
];

export default function HomeOverviewSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-beige-100 to-beige-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-beige-200 border border-beige-300 rounded-full mb-6">
            <span className="text-sm font-medium text-beige-600">About HRA Legal</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Trusted Legal Partners
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            HRA Legal is a premier law firm specializing in Civil/Business Law, Intellectual Property, 
            Corporate Law, and Employment Law. With deep expertise in Media & Entertainment, Technology, 
            and Sports sectors, we provide comprehensive legal solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-beige-400 rounded-2xl shadow-lg mb-4">
                <stat.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-beige-500 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

                  <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Comprehensive Legal Excellence
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-beige-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Specialized Industry Knowledge
                  </h4>
                  <p className="text-gray-600">
                    Deep understanding of Media & Entertainment, Technology, Sports, and Corporate sectors 
                    with tailored legal strategies for each industry.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-beige-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    End-to-End Legal Solutions
                  </h4>
                  <p className="text-gray-600">
                    From contract drafting and negotiation to complex litigation and regulatory compliance, 
                    we handle every aspect of your legal needs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-beige-400 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Client-Centric Approach
                  </h4>
                  <p className="text-gray-600">
                    We prioritize understanding your business goals and provide practical, 
                    cost-effective legal solutions that drive your success.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-beige-100 to-beige-50 p-8 rounded-2xl border border-beige-200 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-beige-200 rounded-full flex items-center justify-center">
                  <span className="text-beige-500 font-bold text-sm">I</span>
                </div>
                <span className="font-semibold text-gray-900">Integrity</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-beige-200 rounded-full flex items-center justify-center">
                  <span className="text-beige-500 font-bold text-sm">T</span>
                </div>
                <span className="font-semibold text-gray-900">Trust</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-beige-200 rounded-full flex items-center justify-center">
                  <span className="text-beige-500 font-bold text-sm">R</span>
                </div>
                <span className="font-semibold text-gray-900">Respect</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-beige-200 rounded-full flex items-center justify-center">
                  <span className="text-beige-500 font-bold text-sm">H</span>
                </div>
                <span className="font-semibold text-gray-900">Humility</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-beige-200 rounded-full flex items-center justify-center">
                  <span className="text-beige-500 font-bold text-sm">U</span>
                </div>
                <span className="font-semibold text-gray-900">Unity</span>
              </div>
            </div>
            
            <div className="mt-8">
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center w-full px-6 py-3 bg-beige-400 text-white font-semibold rounded-lg hover:bg-beige-500 transition-colors"
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