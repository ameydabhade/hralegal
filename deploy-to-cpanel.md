# 🚀 Quick cPanel Deployment Instructions

## ✅ Your site is ready to deploy!

### What you have:
- ✅ **34 static pages** successfully generated
- ✅ **Sanity credentials** configured and working
- ✅ **All assets** optimized for static hosting
- ✅ **SEO metadata** included for all pages

### 📁 Files to upload:
Upload **everything inside** the `out` folder to your cPanel's `public_html` directory.

### 🎯 Quick Steps for Existing cPanel:

1. **Open cPanel File Manager**
   - Go to your cPanel dashboard
   - Click "File Manager"
   - Navigate to `public_html` folder

2. **Handle existing files** ⚠️ **IMPORTANT**
   - **KEEP the `cgi-bin` folder** - DO NOT DELETE IT (needed for server functions)
   - **Backup existing `index.html`** - rename it to `index_backup.html` (just in case)
   - **You can delete other default files** like:
     - Default cPanel landing pages
     - Any placeholder HTML files
     - Old website files (after backing up)

3. **Upload your site**
   - Go to the `out` folder in your project
   - Select ALL files and folders inside `out`
   - Upload them to `public_html`
   - **Allow overwrite** when prompted for `index.html`

4. **Final structure should look like:**
   ```
   public_html/
   ├── cgi-bin/            # Keep this (cPanel system folder)
   ├── _next/              # Your Next.js assets
   ├── fonts/              # Your custom fonts
   ├── Logos/              # Your logos
   ├── about/              # Your pages
   ├── contact/
   ├── practice-areas/
   ├── blog/
   ├── news/
   ├── [all other folders from out/]
   ├── index.html          # Your new homepage (replaces old one)
   ├── 404.html
   ├── favicon.ico
   ├── hero1.jpeg
   └── hero2.jpeg
   ```

5. **Verify deployment**
   - Visit your domain
   - Check that the HRA Legal homepage loads (not the old default page)
   - Test a few internal links

### 📋 File structure in your `out` folder:
```
out/
├── _next/              # Next.js optimized assets
├── fonts/              # Your custom Kohinoor fonts
├── Logos/              # Company logos
├── about/              # About page
├── contact/            # Contact page
├── practice-areas/     # All practice area pages
├── blog/               # Blog pages (with your Sanity content)
├── news/               # News pages (with your Sanity content)
├── sectors/            # Sectors page
├── careers/            # Careers page
├── admin/              # Admin page
├── learners-page/      # Learners/articles page
├── disclaimer/         # Disclaimer page
├── privacy-policy/     # Privacy policy
├── terms-of-use/       # Terms of use
├── test-sanity/        # Sanity test page
├── 404/                # 404 error page
├── index.html          # Homepage (will replace existing one)
├── 404.html            # Error page
├── favicon.ico         # Site icon
├── hero1.jpeg          # Hero images
└── hero2.jpeg
```

### ⚠️ Critical Points:
- **NEVER delete `cgi-bin`** - it's essential for cPanel functionality
- **Backup the old `index.html`** before replacing (rename to `index_backup.html`)
- **Your new `index.html`** will replace the default cPanel landing page
- **All other files and folders** from `out/` should be uploaded to `public_html`

### 🔧 After deployment:
1. Enable SSL/HTTPS in cPanel
2. Test that your HRA Legal site loads (not the old default page)
3. Check mobile responsiveness
4. Verify all internal links work
5. Test contact forms (if any)

### 🔄 Future updates:
When you need to update content:
1. Run `npm run build` locally
2. Upload new `out` folder contents to cPanel (keeping `cgi-bin` untouched)
3. Clear any caches if needed

### 🚨 Troubleshooting:
- **Still seeing old default page?** Clear browser cache or try incognito mode
- **404 errors?** Check that all folders uploaded correctly
- **Images not loading?** Verify the `fonts/` and `Logos/` folders uploaded

## ✨ Your HRA Legal site will be live once uploaded! 