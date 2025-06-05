import { BarChart3, FileText, PiggyBank, Shield, TrendingUp, Zap } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Monitor your finances live with clear, intuitive dashboards.",
  },
  {
    icon: FileText,
    title: "Automated Reports",
    description: "Generate summaries instantly—no manual work needed.",
  },
  {
    icon: PiggyBank,
    title: "Smart Budgeting",
    description: "Plan and adjust with AI-powered budget suggestions.",
  },
  {
    icon: Shield,
    title: "Secure Syncing",
    description: "Link accounts safely with real-time data syncing.",
  },
  {
    icon: TrendingUp,
    title: "Growth Score",
    description: "View key metrics and trends at a glance.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full shadow-sm mb-6">
            <span className="text-sm font-medium text-gray-700">Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
            Streamline Finances with Smart Features
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Top Row - 3 features */}
          {features.slice(0, 3).map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
        
        {/* Bottom Row - 2 features centered */}
        <div className="grid md:grid-cols-2 gap-8 mt-8 max-w-4xl mx-auto">
          {features.slice(3).map((feature, index) => (
            <FeatureCard key={index + 3} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: typeof features[0] }) {
  const Icon = feature.icon;
  
  return (
    <div className="group p-8 bg-gradient-to-b from-white to-gray-50 border border-gray-200 rounded-3xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="space-y-4">
        {/* Content */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-gray-900">
            {feature.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {feature.description}
          </p>
        </div>
        
        {/* Icon/Visual */}
        <div className="flex justify-center pt-4">
          <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
            <Icon className="w-12 h-12 text-blue-600" strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </div>
  );
} 