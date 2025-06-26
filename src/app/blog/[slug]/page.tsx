import { getBlogPost, urlFor } from '../../../../lib/sanity';
import { PortableText } from '@portabletext/react';
import { notFound } from 'next/navigation';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  try {
    const { slug } = await params;
    const post = await getBlogPost(slug);

    if (!post) {
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
            Back to Articles
          </Link>

          {/* Article Header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm font-medium rounded-full">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 border-t border-gray-300 pt-6">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span>{post.author}</span>
              </div>
              
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>{formatDate(post.publishedAt)}</span>
              </div>
              
              {post.readTime && (
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{post.readTime}</span>
                </div>
              )}
            </div>
          </header>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="mb-8">
              <Image
                src={urlFor(post.featuredImage).width(800).height(400).url()}
                alt={post.title}
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
                value={post.content}
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
                <p className="font-semibold text-gray-800">{post.author}</p>
         
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
    );
  } catch {
    console.error('Error fetching blog post');
    notFound();
  }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps) {
  try {
    const { slug } = await params;
    const post = await getBlogPost(slug);
    
    if (!post) {
      return {
        title: 'Blog Post Not Found',
      };
    }

    return {
      title: post.seo?.title || post.title,
      description: post.seo?.description || post.excerpt,
      openGraph: {
        title: post.seo?.title || post.title,
        description: post.seo?.description || post.excerpt,
        images: post.featuredImage ? [urlFor(post.featuredImage).width(1200).height(630).url()] : [],
      },
    };
  } catch {
    return {
      title: 'Blog Post Not Found',
    };
  }
} 