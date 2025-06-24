import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'yrzpw3be',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2024-01-01',
})

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
  content: any[]
  author: string
  publishedAt: string
  readTime?: string
  category: string
  featuredImage?: any
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
  content: any[]
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
  return await client.fetch(blogPostsQuery)
}

export async function getNewsUpdates(): Promise<NewsUpdate[]> {
  return await client.fetch(newsUpdatesQuery)
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