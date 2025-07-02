# Sanity CMS Setup Guide

## Overview
Your learners page has been successfully integrated with Sanity CMS! This allows you to manage blog posts and news updates through a user-friendly content management interface.

## Prerequisites
- A Sanity account (free at [sanity.io](https://sanity.io))

## Setup Steps

### 1. Create a Sanity Project
1. Visit [sanity.io](https://sanity.io) and sign up/log in
2. Create a new project
3. Choose a project name (e.g., "HRA Legal Website")
4. Select "Production" as your dataset name
5. Note down your **Project ID** (you'll need this)

### 2. Configure Environment Variables
Create a `.env.local` file in your project root with:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=mvclci23
NEXT_PUBLIC_SANITY_DATASET=production
```

Replace `your-actual-project-id` with the Project ID from step 1.

### 3. Update Sanity Config
Open `sanity.config.ts` and replace `'your-project-id'` with your actual Project ID.

### 4. Start Sanity Studio
Run the following command to start Sanity Studio:

```bash
npm run sanity
```

This will start Sanity Studio at `http://localhost:3333`

### 5. Deploy Sanity Studio (Optional)
To make Sanity Studio accessible online:

```bash
npx sanity deploy
```

Choose a unique studio hostname when prompted.

## Content Types

### Blog Posts
- **Title**: The main heading of the blog post
- **Excerpt**: Short description shown in the listing
- **Content**: Full blog post content (rich text)
- **Author**: Author name
- **Published Date**: When the post was published
- **Read Time**: Estimated reading time (e.g., "8 min read")
- **Category**: Legal category (Intellectual Property, Corporate Law, etc.)
- **Featured Image**: Optional header image
- **SEO**: Meta title and description for search engines

### News Updates
- **Title**: The main heading of the news update
- **Excerpt**: Short description shown in the listing
- **Content**: Full news content (rich text)
- **Published Date**: When the news was published
- **Source**: Source of the news (e.g., "Supreme Court of India")
- **Category**: Legal category
- **Urgent**: Mark as urgent (shows red "URGENT" badge)
- **SEO**: Meta title and description for search engines

## Usage

1. Access Sanity Studio at `http://localhost:3333` (or your deployed URL)
2. Create blog posts using the "Blog Post" content type
3. Create news updates using the "News Update" content type
4. Your content will automatically appear on the learners page
5. Changes are reflected in real-time on your website

## Features Added

✅ **Dynamic Content Loading**: Content is fetched from Sanity in real-time  
✅ **Loading States**: Shows spinner while content is loading  
✅ **Error Handling**: Displays user-friendly error messages  
✅ **Image Support**: Automatic image optimization for blog post featured images  
✅ **Empty States**: Shows helpful messages when no content is available  
✅ **Date Formatting**: Properly formatted publication dates  
✅ **Urgent Alerts**: Visual indicators for urgent news updates  
✅ **SEO Ready**: Built-in SEO fields for better search engine optimization  

## Next Steps

1. Complete the setup steps above
2. Add your first blog post and news update through Sanity Studio
3. Verify content appears correctly on your learners page
4. Consider adding authentication to Sanity Studio for production use

## Troubleshooting

**Issue**: Content not loading  
**Solution**: Check that your Project ID and dataset name are correct in both `sanity.config.ts` and `.env.local`

**Issue**: Sanity Studio won't start  
**Solution**: Make sure you've installed all dependencies with `npm install`

**Issue**: Images not displaying  
**Solution**: Ensure your Sanity project ID is correctly configured in the image URL builder

## Support

For Sanity-specific issues, refer to the [Sanity Documentation](https://www.sanity.io/docs). 