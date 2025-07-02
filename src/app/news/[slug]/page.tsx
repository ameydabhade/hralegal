import { getNewsUpdate, getNewsUpdates } from '../../../../lib/sanity';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import { Calendar, User, ArrowLeft, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

interface NewsUpdatePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function NewsUpdatePage({ params }: NewsUpdatePageProps) {
  try {
    const { slug } = await params;
    const news = await getNewsUpdate(slug);

    if (!news) {
      notFound();
    }

    const formatDate = (dateString: string) => {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    };

    return (
      <div className="min-h-screen bg-[#ECE5DE] py-12">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          {/* Back Button */}
          <Link 
            href="/learners-page" 
            className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News Updates
          </Link>

          {/* News Header */}
          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              {news.urgent && (
                <span className="inline-flex items-center px-3 py-1 bg-red-100 text-red-600 text-sm font-medium rounded-full">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  URGENT
                </span>
              )}
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm font-medium rounded-full">
                {news.category}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              {news.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {news.excerpt}
            </p>

            {/* News Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 border-t border-gray-300 pt-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{news.source}</span>
              </div>
              
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{formatDate(news.publishedAt)}</span>
              </div>
            </div>
          </header>

          {/* News Content */}
          <article className="prose prose-lg max-w-none">
            <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
              <PortableText 
                value={news.content}
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

          {/* Source Info */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Source Information</h3>
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                <User className="w-8 h-8 text-gray-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-800">{news.source}</p>
                <p className="text-sm text-gray-500 mt-1">Published on {formatDate(news.publishedAt)}</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Impact on Your Business?</h3>
            <p className="text-gray-600 mb-6">
              Our legal experts can help you understand how this development affects your business.
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
    );
  } catch {
    console.error('Error fetching news update');
    notFound();
  }
}

// Enable ISR (Incremental Static Regeneration)
// Pages will be generated on-demand and cached for 60 seconds
export const revalidate = 60;

// For ISR, we can optionally pre-generate some popular news updates
export async function generateStaticParams() {
  try {
    console.log('🔍 Pre-generating popular news updates for ISR...');
    const newsUpdates = await getNewsUpdates();
    
    // Pre-generate only the first few news updates, others will be generated on-demand
    const popularNews = newsUpdates.slice(0, 5);
    console.log(`✅ Pre-generating ${popularNews.length} popular news updates:`, popularNews.map(n => n.slug.current));
    
    return popularNews.map((news) => ({
      slug: news.slug.current,
    }));
  } catch (error) {
    console.error('❌ Error pre-generating news updates:', error);
    // For ISR, we can return empty array - pages will still be generated on-demand
    console.log('⚠️ No news pre-generated, but ISR will generate them on-demand');
    return [];
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: NewsUpdatePageProps) {
  try {
    const { slug } = await params;
    const news = await getNewsUpdate(slug);
    
    if (!news) {
      return {
        title: 'News Update Not Found',
      };
    }

    return {
      title: news.seo?.title || news.title,
      description: news.seo?.description || news.excerpt,
      openGraph: {
        title: news.seo?.title || news.title,
        description: news.seo?.description || news.excerpt,
      },
    };
  } catch {
    return {
      title: 'News Update Not Found',
    };
  }
} 