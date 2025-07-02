'use client'

import { useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { getBlogPosts, getBlogPost, urlFor, BlogPost } from '../../../lib/sanity'
import { PortableText } from '@portabletext/react'
import { Calendar, Clock, User, ArrowLeft, Search } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  
  const searchParams = useSearchParams()
  const router = useRouter()
  const postId = searchParams.get('post')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const blogPosts = await getBlogPosts()
        setPosts(blogPosts)
        
        if (postId) {
          const post = blogPosts.find(p => p._id === postId)
          if (post) {
            const fullPost = await getBlogPost(post._id)
            setSelectedPost(fullPost)
          }
        }
      } catch (error) {
        console.error('Error fetching blog data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [postId])

  const handlePostClick = async (post: BlogPost) => {
    setLoading(true)
    try {
      const fullPost = await getBlogPost(post._id)
      setSelectedPost(fullPost)
      router.push(`/blog?post=${post._id}`, { scroll: false })
    } catch (error) {
      console.error('Error fetching post:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleBackToList = () => {
    setSelectedPost(null)
    router.push('/blog', { scroll: false })
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const categories = [...new Set(posts.map(post => post.category))].filter(Boolean)

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === '' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  if (loading) {
    return (
      <div className="min-h-screen bg-[#ECE5DE] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Individual Post View
  if (selectedPost) {
    return (
      <div className="min-h-screen bg-[#ECE5DE] py-12">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          {/* Back Button */}
          <button 
            onClick={handleBackToList}
            className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </button>

          {/* Article Header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm font-medium rounded-full">
                {selectedPost.category}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              {selectedPost.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {selectedPost.excerpt}
            </p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 border-t border-gray-300 pt-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{selectedPost.author}</span>
              </div>
              
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{formatDate(selectedPost.publishedAt)}</span>
              </div>
              
              {selectedPost.readTime && (
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{selectedPost.readTime}</span>
                </div>
              )}
            </div>
          </header>

          {/* Featured Image */}
          {selectedPost.featuredImage && (
            <div className="mb-8">
              <Image
                src={urlFor(selectedPost.featuredImage).width(800).height(400).url()}
                alt={selectedPost.title}
                width={800}
                height={400}
                className="w-full h-64 lg:h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          )}

          {/* Article Content */}
          <article className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
              <PortableText 
                value={selectedPost.content}
                components={{
                  block: {
                    normal: ({children}) => <p className="mb-6 text-gray-700 leading-relaxed">{children}</p>,
                    h1: ({children}) => <h1 className="text-3xl font-bold text-gray-800 mb-6 mt-8">{children}</h1>,
                    h2: ({children}) => <h2 className="text-2xl font-bold text-gray-800 mb-4 mt-6">{children}</h2>,
                    h3: ({children}) => <h3 className="text-xl font-bold text-gray-800 mb-3 mt-5">{children}</h3>,
                    blockquote: ({children}) => (
                      <blockquote className="border-l-4 border-gray-400 pl-6 my-6 italic text-gray-600">
                        {children}
                      </blockquote>
                    ),
                  },
                  list: {
                    bullet: ({children}) => <ul className="list-disc list-inside mb-6 text-gray-700">{children}</ul>,
                    number: ({children}) => <ol className="list-decimal list-inside mb-6 text-gray-700">{children}</ol>,
                  },
                  listItem: {
                    bullet: ({children}) => <li className="mb-2">{children}</li>,
                    number: ({children}) => <li className="mb-2">{children}</li>,
                  },
                  marks: {
                    strong: ({children}) => <strong className="font-bold text-gray-800">{children}</strong>,
                    em: ({children}) => <em className="italic">{children}</em>,
                    link: ({children, value}) => (
                      <a 
                        href={value.href} 
                        className="text-blue-600 hover:text-blue-800 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {children}
                      </a>
                    ),
                  },
                }}
              />
            </div>
          </article>

          {/* Author Info */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">About the Author</h3>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                <User className="w-8 h-8 text-gray-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">{selectedPost.author}</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Legal Assistance?</h3>
            <p className="text-gray-600 mb-6">
              Our expert legal team is here to help you navigate complex legal matters.
            </p>
            <Link 
              href="/contact" 
              className="inline-block px-6 py-3 bg-[#B39F96] text-white font-semibold rounded-md hover:bg-[#A08B80] transition-colors duration-200"
            >
              Get Legal Consultation
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // Blog List View
  return (
    <div className="min-h-screen bg-[#ECE5DE] py-12">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Legal Insights & Articles
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with our latest legal updates, insights, and expert analysis on various areas of law.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B39F96] focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B39F96] focus:border-transparent"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        {/* Articles Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No articles found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post._id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {post.featuredImage && (
                  <div className="aspect-video overflow-hidden">
                    <Image
                      src={urlFor(post.featuredImage).width(400).height(250).url()}
                      alt={post.title}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  <div className="mb-3">
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handlePostClick(post)}
                    className="w-full px-4 py-2 bg-[#B39F96] text-white font-semibold rounded-md hover:bg-[#A08B80] transition-colors duration-200"
                  >
                    Read Article
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 