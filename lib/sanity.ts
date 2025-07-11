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

// Job posting type
export interface JobPosting {
  _id: string
  title: string
  type: string
  location: string
  experience: string
  summary: string
  description: PortableTextBlock[]
  responsibilities: string[]
  qualifications: string[]
  skills?: string[]
  postedAt: string
  applicationDeadline?: string
  isActive: boolean
  applicationInstructions?: string
  contactEmail?: string
}

// GROQ queries - Updated to handle category references
export const blogPostsQuery = `
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    excerpt,
    author,
    publishedAt,
    readTime,
    "category": category->title,
    featuredImage,
    seo
  }
`

export const newsUpdatesQuery = `
  *[_type == "newsUpdate"] | order(publishedAt desc) {
    _id,
    title,
    excerpt,
    publishedAt,
    source,
    "category": category->title,
    urgent,
    seo
  }
`

export const jobPostingsQuery = `
  *[_type == "jobPosting" && isActive == true] | order(postedAt desc) {
    _id,
    title,
    type,
    location,
    experience,
    summary,
    postedAt,
    applicationDeadline,
    isActive
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

export async function getJobPostings(): Promise<JobPosting[]> {
  try {
    const result = await client.fetch(jobPostingsQuery)
    return Array.isArray(result) ? result : []
  } catch (error) {
    console.error('Error fetching job postings:', error)
    return []
  }
}

export async function getBlogPost(id: string): Promise<BlogPost> {
  return await client.fetch(
    `*[_type == "blogPost" && _id == $id][0] {
      _id,
      title,
      excerpt,
      content,
      author,
      publishedAt,
      readTime,
      "category": category->title,
      featuredImage,
      seo
    }`,
    { id }
  )
}

export async function getNewsUpdate(id: string): Promise<NewsUpdate> {
  return await client.fetch(
    `*[_type == "newsUpdate" && _id == $id][0] {
      _id,
      title,
      excerpt,
      content,
      publishedAt,
      source,
      "category": category->title,
      urgent,
      seo
    }`,
    { id }
  )
}

export async function getJobPosting(id: string): Promise<JobPosting> {
  return await client.fetch(
    `*[_type == "jobPosting" && _id == $id][0] {
      _id,
      title,
      type,
      location,
      experience,
      summary,
      description,
      responsibilities,
      qualifications,
      skills,
      postedAt,
      applicationDeadline,
      isActive,
      applicationInstructions,
      contactEmail
    }`,
    { id }
  )
} 