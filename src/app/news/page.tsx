'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { getNewsUpdates, getNewsUpdate, NewsUpdate } from '../../../lib/sanity'
import { PortableText } from '@portabletext/react'
import { Calendar, User, ArrowLeft, Search, AlertCircle } from 'lucide-react'
import Link from 'next/link'

function NewsContent() {
  const [news, setNews] = useState<NewsUpdate[]>([])
  const [selectedNews, setSelectedNews] = useState<NewsUpdate | null>(null)
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  
  const searchParams = useSearchParams()
  const router = useRouter()
  const newsId = searchParams.get('news')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newsUpdates = await getNewsUpdates()
        setNews(newsUpdates)
        
        if (newsId) {
          const newsItem = newsUpdates.find(n => n._id === newsId)
          if (newsItem) {
            const fullNews = await getNewsUpdate(newsItem._id)
            setSelectedNews(fullNews)
          }
        }
      } catch (error) {
        console.error('Error fetching news data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [newsId])

  const handleNewsClick = async (newsItem: NewsUpdate) => {
    setLoading(true)
    try {
      const fullNews = await getNewsUpdate(newsItem._id)
      setSelectedNews(fullNews)
      router.push(`/news?news=${newsItem._id}`, { scroll: false })
    } catch (error) {
      console.error('Error fetching news:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleBackToList = () => {
    setSelectedNews(null)
    router.push('/news', { scroll: false })
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const categories = [...new Set(news.map(item => item.category))].filter(Boolean)

  const filteredNews = news.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === '' || item.category === selectedCategory
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

  // Individual News View
  if (selectedNews) {
    return (
      <div className="min-h-screen bg-[#ECE5DE] py-12">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          {/* Back Button */}
          <button 
            onClick={handleBackToList}
            className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News Updates
          </button>

          {/* News Header */}
          <header className="mb-8">
            <div className="mb-4 flex items-center gap-3">
              {selectedNews.urgent && (
                <span className="px-3 py-1 bg-red-100 text-red-600 text-sm font-medium rounded-full flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  URGENT
                </span>
              )}
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm font-medium rounded-full">
                {selectedNews.category}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              {selectedNews.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {selectedNews.excerpt}
            </p>

            {/* News Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 border-t border-gray-300 pt-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{selectedNews.source}</span>
              </div>
              
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{formatDate(selectedNews.publishedAt)}</span>
              </div>
            </div>
          </header>

          {/* News Content */}
          <article className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
              <PortableText 
                value={selectedNews.content}
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

          {/* CTA Section */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Need Legal Guidance on This Update?</h3>
            <p className="text-gray-600 mb-6">
              Our legal experts can help you understand the implications of these legal developments.
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

  // News List View
  return (
    <div className="min-h-screen bg-[#ECE5DE] py-12">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Legal News & Updates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest legal developments, regulatory changes, and important updates from courts and government agencies.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search news updates..."
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

        {/* News List */}
        {filteredNews.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No news updates found matching your criteria.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredNews.map((newsItem) => (
              <article key={newsItem._id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-3 gap-3">
                      {newsItem.urgent && (
                        <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-medium rounded-full flex items-center">
                          <AlertCircle className="w-3 h-3 mr-1" />
                          URGENT
                        </span>
                      )}
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                        {newsItem.category}
                      </span>
                    </div>
                    
                    <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-gray-900 transition-colors cursor-pointer"
                        onClick={() => handleNewsClick(newsItem)}>
                      {newsItem.title}
                    </h2>
                    
                    <p className="text-gray-700 mb-4">
                      {newsItem.excerpt}
                    </p>
                    
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{formatDate(newsItem.publishedAt)}</span>
                      <span className="mx-2">•</span>
                      <span>{newsItem.source}</span>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => handleNewsClick(newsItem)}
                    className="ml-6 px-4 py-2 bg-[#B39F96] text-white font-semibold rounded-md hover:bg-[#A08B80] transition-colors duration-200"
                  >
                    Read Update
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

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-[#ECE5DE] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  )
}

export default function NewsPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <NewsContent />
    </Suspense>
  )
} 