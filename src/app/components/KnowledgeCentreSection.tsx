'use client';
import { useState } from 'react';
import { BookOpen, FileText, Newspaper, Calendar, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: "Understanding Intellectual Property Rights in Digital Media",
    excerpt: "A comprehensive guide to protecting your digital content and understanding IP laws in the modern entertainment industry.",
    date: "2024-05-15",
    category: "IP Law",
    readTime: "5 min read"
  },
  {
    title: "Corporate Governance Best Practices for Startups",
    excerpt: "Essential governance frameworks and legal structures that every startup should implement from day one.",
    date: "2024-05-10",
    category: "Corporate Law",
    readTime: "7 min read"
  },
  {
    title: "Employment Law Updates: What Employers Need to Know",
    excerpt: "Recent changes in labor laws and their impact on employment policies and workplace compliance.",
    date: "2024-05-05",
    category: "Employment Law",
    readTime: "6 min read"
  }
];

const articles = [
  {
    title: "The Future of Legal Technology in Indian Law Firms",
    excerpt: "Exploring how AI and technology are transforming legal practice and client service delivery in India.",
    date: "2024-05-18",
    category: "Legal Tech",
    readTime: "8 min read"
  },
  {
    title: "Mergers & Acquisitions: A Legal Perspective",
    excerpt: "Key legal considerations and due diligence processes in M&A transactions for growing businesses.",
    date: "2024-05-12",
    category: "M&A",
    readTime: "10 min read"
  },
  {
    title: "Environmental Compliance for Modern Businesses",
    excerpt: "Navigating environmental regulations and building sustainable business practices.",
    date: "2024-05-08",
    category: "Environment Law",
    readTime: "6 min read"
  }
];

const nicheNews = [
  {
    title: "Supreme Court Ruling on Digital Privacy Rights",
    excerpt: "Latest landmark judgment affecting data protection and privacy laws for businesses.",
    date: "2024-05-20",
    category: "Privacy Law",
    readTime: "4 min read"
  },
  {
    title: "New SEBI Guidelines for Startup Fundraising",
    excerpt: "Updated regulations for equity fundraising and compliance requirements for emerging companies.",
    date: "2024-05-16",
    category: "Securities Law",
    readTime: "5 min read"
  },
  {
    title: "Entertainment Industry Legal Trends 2024",
    excerpt: "Key legal developments shaping the media and entertainment sector this year.",
    date: "2024-05-14",
    category: "Entertainment Law",
    readTime: "7 min read"
  }
];

const tabs = [
  { id: 'blogs', label: 'Blogs', icon: BookOpen, content: blogPosts },
  { id: 'articles', label: 'Articles', icon: FileText, content: articles },
  { id: 'news', label: 'Niche News', icon: Newspaper, content: nicheNews }
];

export default function KnowledgeCentreSection() {
  const [activeTab, setActiveTab] = useState('blogs');

  const activeContent = tabs.find(tab => tab.id === activeTab)?.content || [];

  return (
    <section id="knowledge-centre" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full mb-6">
            <span className="text-sm font-medium text-blue-700">Knowledge Centre</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Legal Insights & Updates
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest legal developments, expert insights, and industry analysis 
            from our experienced legal professionals.
          </p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-200">
            <div className="flex gap-2">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-blue-700 text-white shadow-md'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeContent.map((item, index) => (
            <article key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              {/* Article Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.excerpt}
                </p>
              </div>

              {/* Article Footer */}
              <div className="p-6 bg-gray-50">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.readTime}</span>
                  <button className="flex items-center gap-2 text-blue-700 hover:text-blue-800 font-medium text-sm group-hover:gap-3 transition-all">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-gradient-to-r from-blue-700 to-blue-800 rounded-3xl p-8 lg:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Stay Updated with Legal Insights
            </h3>
            <p className="text-blue-100 mb-8 text-lg">
              Subscribe to our newsletter for regular updates on legal developments, 
              industry insights, and expert analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-700"
              />
              <button className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-blue-200 text-sm mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 