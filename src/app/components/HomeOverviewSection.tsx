import { Scale, Users, Trophy, TrendingUp } from 'lucide-react';

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
        
          
     
        </div>
      </div>
    </section>
  );
} 