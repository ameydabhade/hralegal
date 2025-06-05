import { CheckCircle, Target, Eye, Heart, Users } from 'lucide-react';

const definingTraits = [
  {
    icon: CheckCircle,
    title: "Effortlessly Comprehend",
    description: "We quickly understand the complexities of your deal or matter"
  },
  {
    icon: Target,
    title: "Effective Structuring",
    description: "Strategic structuring from both legal and commercial perspectives"
  },
  {
    icon: Users,
    title: "Confident Negotiations",
    description: "Mix of negotiation styles - Integrative, Distributive, or Adversarial"
  },
  {
    icon: CheckCircle,
    title: "Successful Deal Closures",
    description: "Track record of completing complex deals successfully"
  },
  {
    icon: Target,
    title: "Leadership",
    description: "Flexible thinking amid constantly shifting situations and risks"
  },
  {
    icon: Heart,
    title: "Always Accessible",
    description: "Available for advice and consultations when you need us most"
  }
];

const coreValues = [
  { name: "Integrity", description: "Unwavering commitment to ethical practices" },
  { name: "Trust", description: "Building lasting relationships through reliability" },
  { name: "Respect", description: "Treating every client with dignity and professionalism" },
  { name: "Humility", description: "Continuous learning and improvement mindset" },
  { name: "Unity", description: "Collaborative approach to achieving client goals" }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Introduction */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
            <span className="text-sm font-medium text-blue-700">About HRA Legal</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Professional Law Firm with Specialized Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            HRA Legal is a professional law firm with specialized expertise across various legal disciplines, 
            including Civil and Business Law, Intellectual Property Laws (with a niche focus on Media & Entertainment, 
            Technology, and Sports), Corporate and Commercial Law, Company Secretarial and Corporate Governance, 
            Employment and Labor Laws, Environment Law, Property Law, Taxation Law and other specialized areas of law.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Our Defining Traits That Will Assist You to Choose Us
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {definingTraits.map((trait, index) => (
              <div key={index} className="group p-6 bg-gradient-to-b from-white to-gray-50 border border-gray-200 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-100 rounded-xl">
                      <trait.icon className="w-6 h-6 text-blue-700" strokeWidth={1.5} />
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {trait.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {trait.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Mission & Vision */}
          <div className="space-y-8">
            <div className="p-8 bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100">
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-8 h-8 text-blue-700" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to offer outstanding legal services that meet the diverse needs of our clients, 
                while maintaining the highest standards of our Core Values, and foster a growth-oriented 
                environment for our team, ensuring long-term success and profitability for both our clients and our firm.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-8 h-8 text-blue-700" />
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our vision is to establish ourselves as a premier law firm, renowned for delivering exceptional 
                legal services to a diverse range of global and domestic clients, including governments and economic entities, 
                while upholding a strong focus on our Core Values, consistent profitability, long term sustainability, 
                and social responsibility.
              </p>
            </div>
          </div>

          {/* Core Values & Culture */}
          <div className="space-y-8">
            <div className="p-8 bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-blue-700" />
                <h3 className="text-2xl font-bold text-gray-900">Core Values</h3>
              </div>
              <div className="space-y-4">
                {coreValues.map((value, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{value.name}</h4>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-purple-50 to-white rounded-2xl border border-purple-100">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-blue-700" />
                <h3 className="text-2xl font-bold text-gray-900">Our Culture</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Our culture is driven by an entrepreneurial mindset, strong conviction, principled leadership, 
                resilience, and focus on work-life balance, all fostered within a vibrant and enjoyable workspace.
              </p>
            </div>
          </div>
        </div>

        {/* Services Overview */}
        <div className="text-center p-8 bg-gradient-to-r from-blue-700 to-blue-800 rounded-2xl text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Comprehensive Legal Services
          </h3>
          <p className="text-blue-100 text-lg mb-6 max-w-4xl mx-auto">
            HRA Legal offers end-to-end Legal services, including structuring, drafting, negotiation and execution 
            of all types of contracts/agreements/documents, legal research and analysis, consultations and advisory services, 
            preparing policies, and managing entire legal departments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#practice-areas" 
              className="inline-flex items-center px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Practice Areas
            </a>
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-700 transition-colors"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 