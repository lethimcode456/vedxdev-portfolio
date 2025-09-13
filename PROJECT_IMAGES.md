# Project Images Setup

## Current Setup
The project cards are currently using Unsplash placeholder images. To add your own project images:

## Option 1: Use Local Images (Recommended)
1. Add your project screenshots to the `public/` folder:
   - `public/nebula-ui-preview.jpg`
   - `public/pulse-analytics-preview.jpg` 
   - `public/orbit-portfolio-preview.jpg`

2. Update the image paths in `src/components/Projects.tsx`:
```javascript
image: "/nebula-ui-preview.jpg",
```

## Option 2: Use External Images
The current setup uses Unsplash images. The `next.config.ts` is already configured to allow Unsplash images.

## Fallback System
If images fail to load, the cards will show:
- A beautiful gradient background
- A project-specific icon (🎨, 📊, 🚀)
- The project title
- "Project Preview" text

## Image Specifications
- **Recommended size**: 400x300px or similar aspect ratio
- **Format**: JPG, PNG, or WebP
- **File size**: Keep under 500KB for optimal performance

## Current Project Icons
- Nebula UI: 🎨 (Design system)
- Pulse Analytics: 📊 (Dashboard)
- Orbit Portfolio: 🚀 (Portfolio)

You can change these icons in the `projects` array in `src/components/Projects.tsx`.

## Card Design
The project cards now have a clean, minimal design with:
- Simple border styling
- No hover animations
- Clean typography
- Professional layout
