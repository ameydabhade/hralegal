import { Scale, Users, Trophy, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { 
  AnimatedCard, 
  AnimatedButton, 
  AnimatedCounter, 
  FloatingElements, 
  ParticleBackground,
  TypewriterText,
  InteractiveIcon,
  FloatingLegalElements,
  PulsingOrb 
} from './ui';

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
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white relative overflow-hidden">
      <FloatingLegalElements count={15} className="z-0 opacity-15" />
      
      {/* Creative Orb Positioning */}
      <div className="absolute top-16 right-16 z-0">
        <PulsingOrb size={90} color="blue" className="opacity-25" />
      </div>
      <div className="absolute bottom-16 left-16 z-0">
        <PulsingOrb size={110} color="purple" className="opacity-20" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0">
        <PulsingOrb size={70} color="indigo" className="opacity-15" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 relative z-10">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 border border-blue-200 rounded-full mb-6 hover:bg-blue-200 transition-colors duration-300">
            <span className="text-sm font-medium text-blue-700">About HRA Legal</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <TypewriterText 
              texts={["Your Trusted Legal Partners", "Professional Legal Excellence", "Comprehensive Legal Solutions"]}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
              speed={85}
            />
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            HRA Legal is a premier law firm specializing in Civil/Business Law, Intellectual Property, 
            Corporate Law, and Employment Law. With deep expertise in Media & Entertainment, Technology, 
            and Sports sectors, we provide comprehensive legal solutions tailored to your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 relative z-10">
          {stats.map((stat, index) => (
            <AnimatedCard 
              key={index} 
              variant={index % 2 === 0 ? 'tilt' : 'glow'} 
              className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-100 hover:border-blue-200 group"
            >
              <InteractiveIcon magneticStrength={0.5} className="inline-block mb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
              </InteractiveIcon>
              <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
                {stat.number.includes('+') || stat.number.includes('%') ? (
                  <AnimatedCounter 
                    end={parseInt(stat.number.replace(/[+%]/g, ''))}
                    suffix={stat.number.replace(/[0-9]/g, '')}
                    variant="default"
                    className="text-3xl md:text-4xl font-bold text-blue-700"
                  />
                ) : (
                  stat.number
                )}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </AnimatedCard>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Comprehensive Legal Excellence
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-2 h-2 bg-blue-700 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    Specialized Industry Knowledge
                  </h4>
                  <p className="text-gray-600">
                    Deep understanding of Media & Entertainment, Technology, Sports, and Corporate sectors 
                    with tailored legal strategies for each industry.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-2 h-2 bg-blue-700 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    End-to-End Legal Solutions
                  </h4>
                  <p className="text-gray-600">
                    From contract drafting and negotiation to complex litigation and regulatory compliance, 
                    we handle every aspect of your legal needs.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                <div className="w-2 h-2 bg-blue-700 rounded-full mt-3 flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
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
          
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <span className="text-blue-700 font-bold text-sm">I</span>
                </div>
                <span className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">Integrity</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <span className="text-blue-700 font-bold text-sm">T</span>
                </div>
                <span className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">Trust</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <span className="text-blue-700 font-bold text-sm">R</span>
                </div>
                <span className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">Respect</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <span className="text-blue-700 font-bold text-sm">H</span>
                </div>
                <span className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">Humility</span>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <span className="text-blue-700 font-bold text-sm">U</span>
                </div>
                <span className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">Unity</span>
              </div>
            </div>
            
            <div className="mt-8">
              <AnimatedButton 
                href="/about" 
                variant="primary"
                className="w-full justify-center"
              >
                Learn More About Us
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 