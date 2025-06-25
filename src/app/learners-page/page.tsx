'use client';
import { useState, useEffect } from 'react';
import { BookOpen, TrendingUp, Calendar, Clock, User, ChevronRight, Search } from 'lucide-react';
import { getBlogPosts, getNewsUpdates, urlFor, BlogPost, NewsUpdate } from '../../../lib/sanity';
import Link from 'next/link';
import Image from 'next/image';

export default function KnowledgeCentrePage() {
  const [activeTab, setActiveTab] = useState('blogs');
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [newsUpdates, setNewsUpdates] = useState<NewsUpdate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch data separately to handle partial failures
        const blogs = await getBlogPosts();
        const news = await getNewsUpdates();
        
        setBlogPosts(blogs || []);
        setNewsUpdates(news || []);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Failed to load content. Please try again later.');
        // Still set empty arrays so the UI doesn't break
        setBlogPosts([]);
        setNewsUpdates([]);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-[#ECE5DE] py-12">
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
          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800"></div>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
              <p className="text-red-600">{error}</p>
            </div>
          )}

          {!loading && !error && (
            <>
              {/* Blogs Tab */}
              {activeTab === 'blogs' && (
                <div>
                  <div className="mb-8">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4 border-b-2 border-gray-800 pb-2 inline-block">
                      Latest Legal Insights & Articles
                    </h2>
                  </div>

                  {blogPosts.length === 0 ? (
                    <div className="text-center py-12">
                      <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">No blog posts available yet. Check back soon!</p>
                    </div>
                  ) : (
                    <div className="grid lg:grid-cols-2 gap-8">
                      {blogPosts.map((post) => (
                        <article key={post._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                          <div className="h-48 bg-gray-100 flex items-center justify-center">
                            {post.featuredImage ? (
                              <Image
                                src={urlFor(post.featuredImage).width(400).height(200).url()}
                                alt={post.title}
                                width={400}
                                height={200}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <BookOpen className="w-16 h-16 text-gray-600" />
                            )}
                          </div>
                          
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-3">
                              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                                {post.category}
                              </span>
                              {post.readTime && (
                                <div className="flex items-center text-sm text-gray-500">
                                  <Clock className="w-4 h-4 mr-1" />
                                  {post.readTime}
                                </div>
                              )}
                            </div>
                            
                            <Link href={`/blog/${post.slug.current}`}>
                              <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-gray-900 transition-colors cursor-pointer border-b border-gray-800 pb-1 inline-block">
                                {post.title}
                              </h3>
                            </Link>
                            
                            <p className="text-gray-700 mb-4 line-clamp-3">
                              {post.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <User className="w-4 h-4 text-gray-400 mr-2" />
                                <span className="text-sm text-gray-600">{post.author}</span>
                                <span className="mx-2 text-gray-400">•</span>
                                <span className="text-sm text-gray-600">{formatDate(post.publishedAt)}</span>
                              </div>
                              
                              <Link 
                                href={`/blog/${post.slug.current}`}
                                className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                              >
                                Read More
                                <ChevronRight className="w-4 h-4 ml-1" />
                              </Link>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Latest News Tab */}
              {activeTab === 'news' && (
                <div>
                  <div className="mb-8">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4 border-b-2 border-gray-800 pb-2 inline-block">
                      Latest Legal News & Updates
                    </h2>
                  </div>

                  {newsUpdates.length === 0 ? (
                    <div className="text-center py-12">
                      <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600">No news updates available yet. Check back soon!</p>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      {newsUpdates.map((news) => (
                        <article key={news._id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center mb-3">
                                {news.urgent && (
                                  <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full mr-3">
                                    URGENT
                                  </span>
                                )}
                                <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                                  {news.category}
                                </span>
                              </div>
                              
                              <Link href={`/news/${news.slug.current}`}>
                                <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-gray-900 transition-colors cursor-pointer border-b border-gray-800 pb-1 inline-block">
                                  {news.title}
                                </h3>
                              </Link>
                              
                              <p className="text-gray-700 mb-4">
                                {news.excerpt}
                              </p>
                              
                              <div className="flex items-center text-sm text-gray-500">
                                <Calendar className="w-4 h-4 mr-2" />
                                <span>{formatDate(news.publishedAt)}</span>
                                <span className="mx-2">•</span>
                                <span>{news.source}</span>
                              </div>
                            </div>
                            
                            <Link 
                              href={`/news/${news.slug.current}`}
                              className="ml-6 flex items-center text-gray-700 hover:text-gray-900 transition-colors"
                            >
                              Read Full Update
                              <ChevronRight className="w-4 h-4 ml-1" />
                            </Link>
                          </div>
                        </article>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter Subscription - Updated Text */}
      <section className="bg-[#ECE5DE] py-16">
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
              <button className="px-6 py-3 bg-[#B39F96] text-white font-semibold rounded-md hover:bg-[#A08B80] transition-colors duration-200">
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