# Shayan Ahmed Abbasi - Portfolio Website

A modern, responsive portfolio website built with HTML5, Tailwind CSS, and Vanilla JavaScript. Features a dark/light theme toggle, animated particles background, project filtering, and a fully accessible design.

## 🚀 Features

- **Modern Design**: Dark theme by default with light mode toggle
- **Responsive**: Mobile-first design that works on all devices
- **Accessible**: WCAG compliant with keyboard navigation support
- **Fast**: Optimized for performance with lazy loading and efficient animations
- **Interactive**: Smooth scrolling, project filtering, and micro-interactions
- **SEO Optimized**: Structured data, meta tags, and semantic HTML

## 🛠️ Tech Stack

- **HTML5**: Semantic markup with proper accessibility attributes
- **Tailwind CSS**: Utility-first CSS framework via CDN
- **Vanilla JavaScript**: Modern ES6+ features, no external dependencies
- **Canvas API**: Animated particles background
- **Intersection Observer**: Scroll-triggered animations
- **Local Storage**: Theme preference persistence

## 📁 Project Structure

```
├── index.html              # Main HTML file
├── js/
│   └── scripts.js          # All JavaScript functionality
├── assets/
│   ├── profile.jpg         # Your profile photo (TODO: Add actual image)
│   ├── logos/              # Company/project logos
│   └── thumbs/             # Project thumbnails
└── README.md
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#3b82f6 to #2563eb)
- **Accent**: Purple gradient (#8b5cf6 to #7c3aed)
- **Background**: White/Gray-900 (light/dark mode)
- **Text**: Gray-900/White (light/dark mode)

### Typography
- **Headings**: Bold, gradient text effects
- **Body**: Clean, readable font stack
- **Code**: Monospace for technical content

### Components
- Cards with subtle shadows and hover effects
- Gradient buttons with hover animations
- Skill tags with category-based colors
- Timeline design for experience section

## 🚀 Getting Started

1. **Clone or download** the project files
2. **Add your assets**:
   - Replace `assets/profile.jpg` with your professional headshot
   - Add company logos to `assets/logos/`
   - Add project thumbnails to `assets/thumbs/`
3. **Update content**:
   - Replace placeholder links with actual URLs
   - Update social media links in footer
   - Add your actual email and calendar booking link
4. **Deploy**: Upload to any web server or static hosting service

## 📝 Content Customization

### Personal Information
All personal information is extracted from your resume and integrated into:
- Hero section headline and description
- About section bio and stats
- Skills categorized by expertise area
- Experience timeline with achievements
- Projects showcase with real and spotlight projects

### Projects Included
**From Resume:**
- TripTalk Chatbot + Voicebot
- Custom Knowledge Retrieval System
- Generative Art Application
- Visual Quality Inspector

**Spotlight Projects:**
- AI Lost & Found on GCP
- AI Voice Lead Qualifier
- Multi-Tenant Rewards SaaS
- Healthtech "Doctor AI"
- AI Travel Guide

### TODO Items
Search for "TODO" comments in the code to find items that need your attention:
- [x] Download CV buttons removed completely
- [x] Profile image updated to profile_picture.JPG
- [x] Favicon added with "SA" initials

### Contact & Communication
- **Email**: Direct mailto link with pre-filled subject and body for project inquiries
- **WhatsApp**: Direct chat link to +92 334 1555745 with welcome message
- **LinkedIn**: Active link to professional profile
- **Contact Form**: Removed - replaced with direct communication buttons

### External Links Removed
All external project links, GitHub links, and social media links (except LinkedIn and WhatsApp) have been removed:
- Project cards now show descriptive labels instead of "Live Demo", "GitHub", and "Case Study" buttons
- Download CV buttons removed completely from hero and about sections
- Twitter/X icon removed from footer
- Social media icons in footer are grayed out (except LinkedIn which remains active)
- Contact form replaced with direct email and WhatsApp buttons

## 🎯 Performance Targets

- **Lighthouse Performance**: ≥ 95
- **Accessibility**: ≥ 95
- **Best Practices**: ≥ 95
- **SEO**: ≥ 95

## 🔧 Features Breakdown

### Theme System
- Dark mode by default (modern AI/tech aesthetic)
- Light mode toggle with smooth transitions
- Preference saved in localStorage
- System preference detection

### Navigation
- Sticky header with scroll progress bar
- Smooth scrolling to sections
- Active section highlighting
- Mobile-responsive hamburger menu

### Animations
- Intersection Observer for scroll-triggered animations
- Particle system background (Canvas API)
- Micro-interactions on hover/focus
- Respects `prefers-reduced-motion`

### Project Filtering
- Category-based filtering with smooth animations
- Keyboard accessible filter buttons
- Real-time search and display

### Contact Section
- Direct email button with pre-filled subject and body
- WhatsApp chat button with pre-filled message
- Clean contact information display
- No form handling needed - direct communication links

### Accessibility
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader announcements
- Focus management
- Color contrast compliance

## 🌐 Browser Support

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Static Hosting Options
- **Netlify**: Drag and drop deployment with form handling
- **Vercel**: Git-based deployment with automatic builds
- **GitHub Pages**: Free hosting for public repositories
- **AWS S3**: Scalable static website hosting

### Netlify Forms Setup
The contact form is ready for Netlify Forms:
1. Deploy to Netlify
2. Forms will automatically work with the `data-netlify="true"` attribute
3. Check your Netlify dashboard for form submissions

## 🔍 SEO Features

- Structured data (JSON-LD Person schema)
- Open Graph and Twitter Card meta tags
- Semantic HTML with proper heading hierarchy
- Descriptive alt text for images
- Clean URL structure with anchor links

## 🎨 Customization

### Colors
Update the Tailwind config in the `<script>` tag to change the color scheme:

```javascript
colors: {
    primary: {
        // Your primary color shades
    },
    accent: {
        // Your accent color shades
    }
}
```

### Content
- Update personal information in the HTML
- Modify project data and categories
- Adjust skill categories and technologies
- Customize the about section bio

## 📞 Support

For questions about implementation or customization, refer to:
- Tailwind CSS documentation
- MDN Web Docs for vanilla JavaScript
- Web Accessibility Guidelines (WCAG)

---

**Built with ❤️ by Shayan Ahmed Abbasi**  
*Full Stack Developer | AI & Machine Learning Specialist*