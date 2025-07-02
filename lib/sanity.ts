import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { PortableTextBlock } from '@portabletext/types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'mvclci23',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2023-05-03',
});

const builder = imageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Blog post type
export interface BlogPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  content: PortableTextBlock[]
  author: string
  publishedAt: string
  readTime?: string
  category: string
  featuredImage?: SanityImageSource
  seo?: {
    title?: string
    description?: string
  }
}

// News update type
export interface NewsUpdate {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt: string
  content: PortableTextBlock[]
  publishedAt: string
  source: string
  category: string
  urgent: boolean
  seo?: {
    title?: string
    description?: string
  }
}

// GROQ queries
export const blogPostsQuery = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    author,
    publishedAt,
    readTime,
    category,
    featuredImage,
    seo
  }
`

export const newsUpdatesQuery = `
  *[_type == "newsUpdate"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    source,
    category,
    urgent,
    seo
  }
`

// Fetch functions
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const result = await client.fetch(blogPostsQuery)
    return Array.isArray(result) ? result : []
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export async function getNewsUpdates(): Promise<NewsUpdate[]> {
  try {
    const result = await client.fetch(newsUpdatesQuery)
    return Array.isArray(result) ? result : []
  } catch (error) {
    console.error('Error fetching news updates:', error)
    return []
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  return await client.fetch(
    `*[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      content,
      author,
      publishedAt,
      readTime,
      category,
      featuredImage,
      seo
    }`,
    { slug }
  )
}

export async function getNewsUpdate(slug: string): Promise<NewsUpdate> {
  return await client.fetch(
    `*[_type == "newsUpdate" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      content,
      publishedAt,
      source,
      category,
      urgent,
      seo
    }`,
    { slug }
  )
} 