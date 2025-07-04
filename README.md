# 🎸 Crimson Throne - Heavy Metal Band Website

A powerful, dark-themed single-page React application designed for heavy metal bands. This website provides a complete digital presence with band information, music streaming, merchandise store, tour dates, and community engagement features.

![Metal Band Website Preview](https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=600&fit=crop)

## ✨ Features

### 🏠 Core Sections
- **Hero Section**: Dramatic full-screen landing with latest album promotion
- **About Section**: Band biography, member profiles, and social media links
- **Music Section**: Album/EP showcase with streaming platform integration
- **Tour Section**: Upcoming shows with ticket purchasing links
- **Merchandise Store**: Full e-commerce functionality with cart management
- **Community Hub**: News feed, fan submissions, and engagement features
- **Contact Form**: Multi-purpose inquiry form with validation

### 🛒 E-commerce Features
- Shopping cart with localStorage persistence
- Product filtering by category
- Size selection for apparel
- Quick view modals
- Cart management (add, remove, update quantities)
- Mock checkout integration

### 📱 User Experience
- Fully responsive design (mobile-first approach)
- Smooth scroll navigation
- Dark theme with gothic aesthetic
- Custom animations and transitions
- Accessibility compliance (WCAG 2.1 AA)
- SEO optimized

## 🚀 Tech Stack

### Frontend Framework
- **React 19.1.0** - Modern UI library with latest features
- **TypeScript** - Type-safe development
- **React Hooks** - State management and lifecycle handling

### Styling & Design
- **Tailwind CSS 3.4.0** - Utility-first CSS framework
- **Custom Design System** - Consistent colors, typography, and spacing
- **Google Fonts** - Bebas Neue (headings) + Inter (body text)
- **Lucide React** - Modern icon library

### State Management
- **React Context API** - Global cart state management
- **useReducer** - Complex state logic handling
- **localStorage** - Cart persistence across sessions

### Development Tools
- **Create React App** - Zero-config build setup
- **ESLint** - Code quality and consistency
- **TypeScript** - Static type checking
- **PostCSS** - CSS processing pipeline

### Performance & Optimization
- **Code Splitting** - Lazy loading components
- **Image Optimization** - WebP format support via Unsplash
- **Bundle Optimization** - Tree shaking and minification

## 📦 Project Structure

```
metal-band-website/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx
│   │   ├── CommunitySection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── LoadingSpinner.tsx
│   │   ├── MerchandiseSection.tsx
│   │   ├── Modal.tsx
│   │   ├── MusicSection.tsx
│   │   ├── ShoppingCart.tsx
│   │   └── TourSection.tsx
│   ├── contexts/
│   │   └── CartContext.tsx
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── mockData.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## 🛠 Installation & Setup

### Prerequisites
- **Node.js** (v16.0.0 or higher)
- **npm** (v7.0.0 or higher)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd metal-band-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   The application will open at `http://localhost:3000`

4. **Build for production**
   ```bash
   npm run build
   ```

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App (⚠️ irreversible)

## 🎨 Customization Guide

### Design System Configuration

The website uses a custom design system defined in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    accent: '#E63946',    // Red accent color
    secondary: '#F1C40F', // Yellow highlight
    neutral: '#1A1A1A',   // Dark gray background
    dark: '#0D0D0D',      // Pure dark background
    light: '#FFFFFF',     // White text
    gray: '#CCCCCC',      // Light gray text
  }
}
```

### Changing Band Information

1. **Band Details**: Edit `src/utils/mockData.ts` - `mockBandInfo` object
2. **Band Name**: Update in multiple components (Header, Footer, Hero)
3. **Logo**: Replace logo initials in Header and Footer components

### Updating Content

#### Products/Merchandise
Edit the `mockProducts` array in `src/utils/mockData.ts`:
```javascript
{
  id: '1',
  name: 'Your Product Name',
  price: 25.99,
  image: 'https://your-image-url.com',
  description: 'Product description',
  category: 'apparel', // 'apparel', 'music', 'accessories', 'collectibles'
  sizes: ['S', 'M', 'L', 'XL'], // Optional for apparel
  inStock: true,
  featured: true // Shows in featured section
}
```

#### Music Releases
Update the `mockReleases` array with your albums/EPs:
```javascript
{
  id: '1',
  title: 'Your Album Name',
  type: 'album', // 'album', 'ep', 'single'
  releaseDate: '2024-01-15',
  coverArt: 'https://your-cover-art-url.com',
  streamingLinks: {
    spotify: 'https://open.spotify.com/album/your-album',
    apple: 'https://music.apple.com/album/your-album',
    // ... other platforms
  },
  tracks: ['Track 1', 'Track 2', ...] // Optional
}
```

#### Tour Dates
Modify the `mockTourDates` array:
```javascript
{
  id: '1',
  date: '2024-03-15',
  venue: 'Your Venue Name',
  city: 'Your City',
  country: 'Your Country',
  ticketUrl: 'https://tickets.com/your-show',
  soldOut: false
}
```

### Styling Customization

#### Color Scheme
1. Update colors in `tailwind.config.js`
2. Modify CSS custom properties in `src/index.css`
3. Update component-specific color classes

#### Typography
1. Change font imports in `src/index.css`
2. Update font family definitions in `tailwind.config.js`
3. Modify heading and text classes throughout components

#### Layout & Spacing
- Adjust spacing values in `tailwind.config.js`
- Modify component padding/margins using Tailwind classes
- Update responsive breakpoint behaviors

## 🚀 Deployment Options

### Static Hosting (Recommended)

#### Netlify
1. Build the project: `npm run build`
2. Upload the `build` folder to Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build`

#### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in project root
3. Follow deployment prompts

#### GitHub Pages
1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/yourrepository",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

### Traditional Web Hosting
1. Build the project: `npm run build`
2. Upload the contents of the `build` folder to your web server
3. Configure your server to serve the `index.html` for all routes

### Docker Deployment
```dockerfile
FROM node:16-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🔧 Configuration Options

### Environment Variables
Create a `.env` file in the root directory:
```env
REACT_APP_BAND_NAME=Your Band Name
REACT_APP_CONTACT_EMAIL=contact@yourband.com
REACT_APP_API_URL=https://your-api-endpoint.com
```

### API Integration
Replace mock data with real API calls:
1. Update `src/utils/mockData.ts` functions
2. Add environment variables for API endpoints
3. Implement error handling and loading states

### Social Media Integration
Update social media links in:
- `src/utils/mockData.ts` - `mockBandInfo.socialMedia`
- `src/components/Footer.tsx` - `socialLinks` array

## 🔄 Possible Upgrades

### Immediate Enhancements
- **Real Backend Integration**: Replace mock data with actual API
- **Payment Processing**: Integrate Stripe/PayPal for real transactions
- **User Authentication**: Add user accounts and login functionality
- **Content Management**: Add CMS integration (Strapi, Contentful)
- **Email Marketing**: Integrate with Mailchimp/ConvertKit

### Advanced Features
- **Progressive Web App**: Add PWA capabilities for mobile app-like experience
- **Internationalization**: Multi-language support
- **Analytics**: Google Analytics/Tag Manager integration
- **SEO Enhancement**: Add meta tags, structured data, sitemap
- **Performance Monitoring**: Implement error tracking (Sentry)

### E-commerce Expansion
- **Inventory Management**: Real-time stock tracking
- **Order Management**: Order history and tracking
- **Product Reviews**: Customer review system
- **Wishlist**: Save favorite products
- **Discount Codes**: Promotional code system

### Community Features
- **Fan Forum**: Discussion boards and user-generated content
- **Live Chat**: Real-time customer support
- **Event Calendar**: Comprehensive event management
- **Music Player**: Embedded audio player with playlists
- **Photo Gallery**: Band and fan photo submissions

## 🐛 Troubleshooting

### Common Issues

#### Build Errors
- Ensure Node.js version compatibility (v16+)
- Clear npm cache: `npm cache clean --force`
- Delete node_modules and reinstall: `rm -rf node_modules && npm install`

#### Styling Issues
- Verify Tailwind CSS is properly configured
- Check that custom CSS classes are defined in `index.css`
- Ensure PostCSS configuration is correct

#### Image Loading
- Verify image URLs are accessible
- Check for CORS issues with external image sources
- Use optimized image formats (WebP when possible)

## 📝 Contributing

### Development Workflow
1. Create feature branch: `git checkout -b feature/your-feature`
2. Make changes and test thoroughly
3. Follow TypeScript best practices
4. Ensure responsive design works on all devices
5. Update documentation if needed
6. Submit pull request

### Code Style
- Use TypeScript for all new code
- Follow React best practices and hooks patterns
- Use functional components with hooks
- Implement proper error boundaries
- Add loading states for async operations

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

## 🤘 Support

For support, customization requests, or questions:
- Create an issue in the repository
- Contact the development team
- Check the troubleshooting section above

---

**Built with 🤘 for metal bands everywhere**

*This is a demo project showcasing modern React development practices with a heavy metal theme. Perfect for bands looking to establish a strong digital presence.*
