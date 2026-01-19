# Mahima Shrivastava - UX Designer Portfolio

A modern, responsive portfolio website built with vanilla HTML, CSS, and JavaScript.

## 🚀 Features

- **Single-page layout** with smooth scrolling navigation
- **Dark theme** design matching Figma specifications
- **Fully responsive** for mobile, tablet, and desktop
- **Interactive elements** with hover effects and animations
- **Semantic HTML** for accessibility and SEO
- **No frameworks** - pure vanilla JavaScript

## 📁 Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styles and responsive design
├── script.js           # Interactive functionality
├── assets/             # Images and media files
└── README.md          # This file
```

## 🎨 Sections

1. **Header** - Navigation with logo and chat button
2. **Hero Section** - Introduction with name, role, and description
3. **Skills Bar** - Horizontal scrolling skills showcase
4. **Impact Section** - Key metrics and achievements
5. **Design Thinking** - Philosophy statement
6. **Projects Section** - IBM case studies and PULLED project
7. **Contact Section** - Call-to-action with LinkedIn link
8. **Footer** - Navigation and social links

## 🛠️ Local Development

1. **Clone or download** this repository
2. **Open** `index.html` in your web browser
   - Or use a local server for better development experience:
   
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```
3. **Navigate** to `http://localhost:8000` in your browser

## 📝 Customization

### Replacing Content

- **Text Content**: Edit `index.html` directly
- **Colors**: Modify CSS variables in `styles.css` (`:root` section)
- **Fonts**: Update `--font-primary` in `styles.css`
- **Images**: Replace placeholder divs in HTML with actual `<img>` tags

### Adding Images

Place your images in the `assets/` folder and update the HTML:

```html
<!-- Replace placeholder divs like this: -->
<div class="image-placeholder">
    <img src="assets/your-image.jpg" alt="Description">
</div>
```

### Updating Links

- **Social Links**: Update `href` attributes in footer and contact section
- **Email**: Update `mailto:` link in footer
- **Project Links**: Add navigation in `script.js` case study click handlers

## 🌐 Deployment

### Option 1: GitHub Pages (Free)

1. **Create a GitHub repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select source branch (usually `main`)
   - Select folder (`/root`)
   - Click Save

3. **Access your site**
   - Your site will be available at: `https://yourusername.github.io/portfolio`

### Option 2: Netlify (Free)

1. **Drag and Drop Method**
   - Go to [netlify.com](https://www.netlify.com)
   - Sign up/login
   - Drag your project folder to the deploy area
   - Your site is live instantly!

2. **Git Integration Method**
   - Connect your GitHub repository
   - Netlify will auto-deploy on every push
   - Custom domain support available

### Option 3: Vercel (Free)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** and your site will be live!

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance Tips

- Optimize images before adding to `assets/` folder
- Use WebP format for better compression
- Consider lazy loading for images below the fold
- Minify CSS and JS for production (optional)

## 📄 License

This project is open source and available for personal use.

## 👤 Author

**Mahima Shrivastava**
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn URL]
- Email: [Your Email]

## 🙏 Acknowledgments

- Design inspired by Figma mockups
- Built with vanilla web technologies
- Icons from inline SVG

---

**Note**: Remember to update all placeholder content, links, and images before deploying!
