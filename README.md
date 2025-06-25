# 🎨 Contemporary Art Gallery

A beautiful, responsive React art gallery website built with TailwindCSS. Features dynamic image loading, modern design, and easy content management.

## ✨ Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Dynamic Content**: Automatically loads images from `public/paintings/` folder
- **Responsive**: Works perfectly on desktop, tablet, and mobile
- **Lightbox Gallery**: Click images to view in full-screen modal
- **Tutorials Section**: Loads markdown tutorials from `src/tutorials/`
- **Admin Panel**: Hidden admin page for content management
- **SEO Optimized**: Ready for search engines and social sharing

## 🚀 Quick Deploy

### Option 1: Vercel (Recommended)
1. **Create GitHub repository** and upload your code
2. **Go to [vercel.com](https://vercel.com)** and sign up with GitHub
3. **Import your repository** - Vercel auto-detects React apps
4. **Deploy** - Your site is live in 2 minutes!

### Option 2: Use the deployment script
```bash
./deploy.sh
```

## 📁 Project Structure

```
art-gallery/
├── public/
│   ├── paintings/          # Add your artwork images here
│   │   └── metadata.json   # Image descriptions and details
│   └── profile.jpg         # Your profile photo
├── src/
│   ├── tutorials/          # Add .md tutorial files here
│   ├── pages/              # React page components
│   ├── components/         # Reusable components
│   └── utils/              # Utility functions
└── DEPLOYMENT.md           # Detailed deployment guide
```

## 🎨 Adding Content

### Adding New Artwork
1. **Place image** in `public/paintings/` folder
2. **Add metadata** to `public/paintings/metadata.json`:
```json
{
  "filename.jpg": {
    "title": "Artwork Title",
    "artist": "Your Name",
    "year": "2024",
    "medium": "Oil on Canvas",
    "description": "Description of the artwork..."
  }
}
```

### Adding Tutorials
1. **Create .md file** in `src/tutorials/` folder
2. **Add frontmatter** at the top:
```markdown
---
title: Tutorial Title
description: Brief description
---

Your tutorial content here...
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run deployment script
./deploy.sh
```

## 🌐 Pages

- **Home** (`/`) - Featured artworks and hero section
- **Gallery** (`/gallery`) - Full artwork collection with lightbox
- **Tutorials** (`/tutorials`) - Art tutorials and guides
- **About** (`/about`) - Artist profile and information
- **Admin** (`/admin`) - Content management (hidden from nav)

## 📱 Responsive Design

- **Desktop**: Full-featured layout with hover effects
- **Tablet**: Optimized grid layouts
- **Mobile**: Touch-friendly navigation and image viewing

## 🎯 Performance

- **Optimized images** with lazy loading
- **Minimal bundle size** with code splitting
- **Fast loading** with optimized assets
- **SEO ready** with meta tags and structured data

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',    // Blue
      secondary: '#8B5CF6',  // Purple
      accent: '#10B981'      // Green
    }
  }
}
```

### Styling
- **TailwindCSS** for all styling
- **Custom CSS** in `src/index.css`
- **Component-specific** styles in each component

## 📊 Analytics (Optional)

Add Google Analytics to `public/index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🆘 Troubleshooting

### Common Issues
1. **Images not loading**: Check file paths in `public/paintings/`
2. **Build errors**: Run `npm run build` locally first
3. **Deployment issues**: Check `DEPLOYMENT.md` for platform-specific help

### Getting Help
- Check the browser console for errors
- Verify all file paths are correct
- Test locally before deploying

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Ready to share your art with the world?** 🌍✨

Follow the deployment guide in `DEPLOYMENT.md` to get your gallery online!
