'use client';
import { useState } from 'react';
import { BookOpen, TrendingUp, Calendar, Clock, User, ChevronRight, Search } from 'lucide-react';

export default function KnowledgeCentrePage() {
  const [activeTab, setActiveTab] = useState('blogs');

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Intellectual Property Rights in the Digital Age",
      excerpt: "A comprehensive guide to protecting your intellectual property in today's digital landscape, covering patents, trademarks, and copyrights.",
      author: "Rushi Upadhyaya",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Intellectual Property",
      image: "/api/placeholder/400/200"
    },
    {
      id: 2,
      title: "Corporate Governance Best Practices for Modern Businesses",
      excerpt: "Essential corporate governance principles that every business leader should understand to ensure compliance and sustainable growth.",
      author: "HRA Legal Team",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Corporate Law",
      image: "/api/placeholder/400/200"
    },
    {
      id: 4,
      title: "Media & Entertainment Law: Navigating Content Licensing",
      excerpt: "Key considerations for content creators and distributors when negotiating licensing agreements in the entertainment industry.",
      author: "Rushi Upadhyaya",
      date: "2023-12-28",
      readTime: "10 min read",
      category: "Media Law",
      image: "/api/placeholder/400/200"
    }
  ];

  const latestNews = [
    {
      id: 1,
      title: "Supreme Court Ruling on Digital Privacy Rights",
      excerpt: "The Supreme Court's latest decision on digital privacy has significant implications for technology companies and data protection practices.",
      date: "2024-01-18",
      source: "Supreme Court of India",
      category: "Privacy Law",
      urgent: true
    },
    {
      id: 2,
      title: "New GST Regulations for Digital Services",
      excerpt: "Government announces updated GST framework for digital services, affecting e-commerce and technology platforms.",
      date: "2024-01-16",
      source: "Ministry of Finance",
      category: "Tax Law",
      urgent: false
    },
    {
      id: 3,
      title: "SEBI Updates on Corporate Disclosure Requirements",
      excerpt: "Securities and Exchange Board of India introduces new disclosure norms for listed companies regarding ESG compliance.",
      date: "2024-01-14",
      source: "SEBI",
      category: "Corporate Law",
      urgent: false
    },
    {
      id: 4,
      title: "Environmental Clearance Process Streamlined",
      excerpt: "Ministry of Environment announces simplified procedures for environmental clearances, reducing approval timeframes.",
      date: "2024-01-12",
      source: "Ministry of Environment",
      category: "Environmental Law",
      urgent: false
    },
    {
      id: 5,
      title: "International Trade Agreement Updates",
      excerpt: "New bilateral trade agreements signed with key trading partners, impacting import-export regulations and customs duties.",
      date: "2024-01-10",
      source: "Ministry of External Affairs",
      category: "Trade Law",
      urgent: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-100 to-white py-12">
      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
                      <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 border-b-4 border-gray-800 pb-4 inline-block">
              Learners Page
            </h1>
       
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, legal updates, or topics..."
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-colors"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              <button
                onClick={() => setActiveTab('blogs')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'blogs'
                    ? 'border-gray-800 text-gray-800'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Blogs & Articles
                </div>
              </button>
              <button
                onClick={() => setActiveTab('news')}
                className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'news'
                    ? 'border-gray-800 text-gray-800'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Latest News & Updates
                </div>
              </button>
            </nav>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          {/* Blogs Tab */}
          {activeTab === 'blogs' && (
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-4 border-b-2 border-gray-800 pb-2 inline-block">
                  Latest Legal Insights & Articles
                </h2>
                <p className="text-base text-gray-700">
                  Expert analysis and practical guidance on legal matters affecting businesses and individuals.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-gray-600" />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                          {post.category}
                        </span>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.readTime}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-gray-900 transition-colors cursor-pointer border-b border-gray-800 pb-1 inline-block">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-700 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <User className="w-4 h-4 text-gray-400 mr-2" />
                          <span className="text-sm text-gray-600">{post.author}</span>
                          <span className="mx-2 text-gray-400">•</span>
                          <span className="text-sm text-gray-600">{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        
                        <button className="flex items-center text-gray-700 hover:text-gray-900 transition-colors">
                          Read More
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* Latest News Tab */}
          {activeTab === 'news' && (
            <div>
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-gray-800 mb-4 border-b-2 border-gray-800 pb-2 inline-block">
                  Latest Legal News & Updates
                </h2>
                <p className="text-lg text-gray-700">
                  Stay current with the latest legal developments, regulatory changes, and industry news.
                </p>
              </div>

              <div className="space-y-6">
                {latestNews.map((news) => (
                  <article key={news.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          {news.urgent && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full mr-3">
                              URGENT
                            </span>
                          )}
                          <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                            {news.category}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-gray-900 transition-colors cursor-pointer border-b border-gray-800 pb-1 inline-block">
                          {news.title}
                        </h3>
                        
                        <p className="text-gray-700 mb-4">
                          {news.excerpt}
                        </p>
                        
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{new Date(news.date).toLocaleDateString()}</span>
                          <span className="mx-2">•</span>
                          <span>{news.source}</span>
                        </div>
                      </div>
                      
                      <button className="ml-6 flex items-center text-gray-700 hover:text-gray-900 transition-colors">
                        Read Full Update
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription - Updated Text */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 border-b-2 border-gray-800 pb-2 inline-block">
            Stay Updated with Legal Insights
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            To subscribe to our articles, blogs.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-gray-400 transition-colors"
              />
              <button className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-900 transition-colors duration-200">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
} 