import { Building, ShoppingCart, Zap, GraduationCap, Package, Globe, Building2, Shield, Film, Pill, BookOpen, Home, Cpu, Shirt } from 'lucide-react';

export const metadata = {
  title: 'Sectors We Serve - HRA Legal',
  description: 'HRA Legal provides specialized legal services across diverse sectors including Banking, E-Commerce, Media & Entertainment, and more.',
}

export default function SectorsPage() {
  const sectors = [
    {
      icon: Building,
      title: "Banking",
      description: "Comprehensive legal services for banking institutions, financial compliance, and regulatory matters."
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce & Retail",
      description: "Digital commerce legal support, consumer protection compliance, and retail regulations."
    },
    {
      icon: Zap,
      title: "Energy",
      description: "Legal expertise in energy sector regulations, renewable energy projects, and power distribution."
    },
    {
      icon: GraduationCap,
      title: "Education & Learning",
      description: "Educational institution support, EdTech compliance, and academic legal frameworks."
    },
    {
      icon: Package,
      title: "FMCG's",
      description: "Fast-moving consumer goods legal services, product compliance, and distribution agreements."
    },
    {
      icon: Globe,
      title: "Internet",
      description: "Digital platform legal services, online business regulations, and internet compliance."
    },
    {
      icon: Building2,
      title: "Infrastructure",
      description: "Infrastructure project legal support, construction contracts, and development regulations."
    },
    {
      icon: Shield,
      title: "Insurance",
      description: "Insurance sector legal services, policy compliance, and regulatory frameworks."
    },
    {
      icon: Film,
      title: "Media & Entertainment",
      description: "Comprehensive entertainment industry expertise including productions, theatres, satellite, digital and music services."
    },
    {
      icon: Pill,
      title: "Pharmaceuticals, Healthcare & Life Sciences",
      description: "Healthcare legal services, pharmaceutical compliance, and life sciences regulations."
    },
    {
      icon: BookOpen,
      title: "Publishing",
      description: "Publishing industry legal support, content rights, and intellectual property management."
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Property legal services, real estate transactions, and development project support."
    },
    {
      icon: Cpu,
      title: "Technology & Telecommunications",
      description: "Technology sector legal services, telecom regulations, and digital innovation support."
    },
    {
      icon: Shirt,
      title: "Textiles",
      description: "Textile industry legal services, manufacturing compliance, and trade regulations."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-100 to-white py-20">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Sectors We Serve
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Leveraging sector-specific expertise to provide tailored legal solutions across diverse industries and business environments.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {sectors.map((sector, index) => {
              const IconComponent = sector.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 bg-beige-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-beige-200 transition-colors duration-300">
                      <IconComponent className="w-10 h-10 text-beige-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{sector.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{sector.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Sector Highlight - Media & Entertainment */}
      <section className="bg-gradient-to-r from-beige-100 to-beige-50 py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Featured Sector: Media & Entertainment
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              With deep expertise and extensive experience in the Media & Entertainment sector, we provide comprehensive legal services across all aspects of content creation and distribution.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-beige-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Film className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Productions</h3>
              <p className="text-gray-600 text-sm">Pre-production, production, and post-production legal services</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-beige-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Theatres</h3>
              <p className="text-gray-600 text-sm">Theatrical distribution and exhibition agreements</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-beige-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Satellite & Digital</h3>
              <p className="text-gray-600 text-sm">Broadcasting rights and digital platform agreements</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-16 h-16 bg-beige-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Music</h3>
              <p className="text-gray-600 text-sm">Music rights, licensing, and synchronization agreements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience and Expertise */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Cross-Sector Expertise
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our comprehensive understanding across multiple sectors enables us to provide integrated legal solutions that address the complex, multi-industry challenges that modern businesses face.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-beige-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-beige-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Regulatory Compliance</h3>
                <p className="text-gray-600">Navigating complex regulatory frameworks across all sectors</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-beige-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-beige-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate Solutions</h3>
                <p className="text-gray-600">Tailored corporate legal strategies for sector-specific needs</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-beige-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-beige-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cross-Industry Insights</h3>
                <p className="text-gray-600">Leveraging insights from multiple sectors for innovative solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-beige-50 py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Work with Sector Experts?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Partner with HRA Legal for specialized legal services tailored to your sector's unique requirements and challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-beige-600 text-white font-semibold rounded-lg hover:bg-beige-700 transition-colors duration-200"
            >
              Discuss Your Sector Needs
            </a>
            <a 
              href="/practice-areas"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-beige-600 text-beige-600 font-semibold rounded-lg hover:bg-beige-600 hover:text-white transition-colors duration-200"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 