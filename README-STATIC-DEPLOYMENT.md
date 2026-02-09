# Static Deployment Guide

This portfolio website has been optimized for static deployment. Here's what you need to know:

## Build Process

### Option 1: Using Current Setup (Recommended)
```bash
npm run build
```
This builds the static files to `dist/public/` directory.

### Option 2: Pure Static Build
```bash
# Use the static configuration
npx vite build --config vite.static.config.ts
```
This builds to `dist/` directory with optimized chunks.

## Deployment Platforms

### Replit Static Deployment
1. Select "Static" when deploying
2. Use the `dist/public/` directory as the build output
3. The site will be served directly from CDN

### Other Static Hosting Options
- **Netlify**: Drag & drop the `dist/public/` folder
- **Vercel**: Import the project and set build command to `npm run build`
- **GitHub Pages**: Use the `dist/public/` folder contents
- **Surge.sh**: Deploy with `surge dist/public/`

## Contact Form Setup

The contact form is configured for static deployment and requires an external service:

### Recommended Form Services
1. **Formspree** (formspree.io)
   - Easy setup
   - Free tier available
   - Just update the form action URL

2. **Netlify Forms** (if using Netlify)
   - Built-in form handling
   - Add `netlify` attribute to form

3. **Emailjs** (emailjs.com)
   - Client-side email sending
   - No server required

### Updating Contact Form
Edit `client/src/components/Contact.tsx` and replace the current `onSubmit` function with your chosen service integration.

## Files Removed/Modified for Static Deployment

- Contact form now shows deployment message instead of server call
- API client simplified for static deployment
- Server dependencies can be removed for pure static build

## Performance Optimizations

- Code splitting with manual chunks
- Vendor libraries separated
- Optimized bundle size
- CDN-ready static assets

## SEO Considerations

- All pages are pre-rendered
- Meta tags are properly configured
- Fast loading from CDN
- Mobile-optimized responsive design

## Development vs Production

- **Development**: Use `npm run dev` (current server setup)
- **Production**: Use static build with `npm run build`

The site will work perfectly as a static website with all animations, routing, and interactivity preserved.