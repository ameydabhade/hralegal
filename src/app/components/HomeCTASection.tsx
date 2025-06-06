import { Phone, Mail, Calendar, ArrowRight, Shield, Clock, Users } from 'lucide-react';
import Link from 'next/link';
import { 
  AnimatedCard, 
  AnimatedButton, 
  ParticleBackground, 
  TypewriterText,
  InteractiveIcon,
  PulsingOrb 
} from './ui';

const contactMethods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our legal experts",
    action: "Schedule a call",
    href: "tel:+91-XXXXXXXXXX",
    color: "blue"
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us your legal queries",
    action: "Send email",
    href: "mailto:contact@hralegal.com",
    color: "green"
  },
  {
    icon: Calendar,
    title: "Book Consultation",
    description: "Schedule a detailed consultation",
    action: "Book now",
    href: "/contact",
    color: "purple"
  }
];

const benefits = [
  {
    icon: Shield,
    title: "Confidential Consultation",
    description: "All discussions are protected by attorney-client privilege"
  },
  {
    icon: Clock,
    title: "Quick Response",
    description: "We respond to all inquiries within 24 hours"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Direct access to our experienced legal professionals"
  }
];

export default function HomeCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <ParticleBackground />
      
      {/* Interactive Orbs */}
      <div className="absolute top-20 left-20 z-0">
        <PulsingOrb size={120} color="blue" className="opacity-30" />
      </div>
      <div className="absolute bottom-32 right-32 z-0">
        <PulsingOrb size={90} color="purple" className="opacity-40" />
      </div>
      <div className="absolute top-1/2 left-1/4 z-0">
        <PulsingOrb size={60} color="indigo" className="opacity-25" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <TypewriterText 
              texts={["Ready to Get Started?", "Need Legal Assistance?", "Let's Talk Solutions!"]}
              className="text-white"
              speed={90}
            />
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            Don't let legal complexities hold back your business growth. Our expert legal team 
            is here to provide the guidance and solutions you need to move forward with confidence.
          </p>
          
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold rounded-full text-lg">
            🎯 Free Initial Consultation Available
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <AnimatedCard 
              key={index} 
              variant="glass" 
              className="bg-white/10 backdrop-blur-sm border border-white/10"
            >
              <div className="text-center space-y-6">
                <InteractiveIcon magneticStrength={0.6} className="inline-block">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl shadow-2xl ${
                    method.color === 'blue' ? 'bg-blue-500' :
                    method.color === 'green' ? 'bg-green-500' : 'bg-purple-500'
                  }`}>
                    <method.icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                  </div>
                </InteractiveIcon>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {method.title}
                  </h3>
                  <p className="text-slate-300 mb-6">
                    {method.description}
                  </p>
                  
                  <a 
                    href={method.href}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-colors ${
                      method.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700 text-white' :
                      method.color === 'green' ? 'bg-green-600 hover:bg-green-700 text-white' :
                      'bg-purple-600 hover:bg-purple-700 text-white'
                    }`}
                  >
                    {method.action}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Benefits */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10 mb-16">
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Our Consultation?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <InteractiveIcon magneticStrength={0.5} className="inline-block mb-4">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl shadow-lg">
                    <benefit.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                  </div>
                </InteractiveIcon>
                <h4 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h4>
                <p className="text-slate-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Urgent Legal Matters */}
        <AnimatedCard variant="neon" className="bg-gradient-to-r from-red-600 to-orange-600 text-center mb-16 border-red-400">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Urgent Legal Matter?
          </h3>
          <p className="text-red-100 text-lg mb-6">
            We understand that legal issues don't always wait for business hours. 
            For urgent matters, we provide expedited consultation services.
          </p>
          <a 
            href="tel:+91-XXXXXXXXXX"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-red-600 font-bold rounded-lg hover:bg-red-50 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call for Urgent Matters
          </a>
        </AnimatedCard>

        {/* Knowledge Resources */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Explore Our Knowledge Centre
            </h3>
            <p className="text-slate-300 mb-6">
              Stay informed with our latest legal insights, industry updates, and expert analysis 
              on matters affecting your business.
            </p>
            <Link 
              href="/knowledge-centre"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              Browse Articles
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-4">
              Join Our Team
            </h3>
            <p className="text-slate-300 mb-6">
              Looking for exciting career opportunities in law? Explore our current openings 
              and become part of our growing legal team.
            </p>
            <Link 
              href="/careers"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              View Careers
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Final Bar Council Notice */}
        <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 rounded-3xl p-6 text-center">
          <h4 className="text-lg font-bold text-amber-300 mb-2">
            Important Legal Notice
          </h4>
          <p className="text-amber-100 text-sm leading-relaxed">
            As per the rules of the Bar Council of India, lawyers and law firms are not permitted to 
            solicit work or advertise. By contacting us, you acknowledge that you are seeking information 
            relating to HRA Legal on your own accord and that there has been no solicitation from our side.
          </p>
        </div>
      </div>
    </section>
  );
} 