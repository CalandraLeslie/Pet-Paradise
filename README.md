# 🐾 Pet Paradise - Premium Pet Care Store

A comprehensive e-commerce platform for pet food, toys, and accessories built with Next.js 14, TypeScript, and Tailwind CSS.

## ✨ Features

- **Modern Design System**: Professional UI with pet-focused color psychology
- **Comprehensive Product Categories**: Support for dogs, cats, birds, fish, small pets, and reptiles
- **User Authentication**: Secure registration and login with toast notifications
- **Shopping Cart**: Full cart functionality with persistent storage
- **PayPal Integration**: Secure checkout with PayPal payment processing
- **Toast Notifications**: Real-time feedback for user actions
- **Accessibility First**: WCAG compliant with proper contrast ratios and screen reader support
- **Mobile Responsive**: Optimized for all device sizes
- **Performance Optimized**: Built with Next.js 14 for fast loading and SEO
- **TypeScript**: Full type safety throughout the application

## 🎨 Design Philosophy

### Color Psychology for Pet Stores
- **Soft Blues (#4A90E2)**: Calming and trustworthy for primary actions
- **Nature Greens (#7CB342)**: Health and wellness associations
- **Playful Orange (#FF8C00)**: Energy and excitement for highlights

### Category-Specific Colors
- 🐕 **Dogs** (#8B4513): Warm browns
- 🐱 **Cats** (#708090): Cool grays
- 🐦 **Birds** (#FFD700): Bright yellows
- 🐠 **Fish** (#00CED1): Aqua blues
- 🐰 **Small Pets** (#DDA0DD): Soft purples
- 🦎 **Reptiles** (#9ACD32): Yellow greens

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd pet-paradise
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Built With

- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[React Hook Form](https://react-hook-form.com/)** - Form handling and validation
- **[React Toastify](https://fkhadra.github.io/react-toastify/)** - Toast notifications
- **[PayPal SDK](https://developer.paypal.com/sdk/)** - Payment processing
- **[Yup](https://github.com/jquense/yup)** - Schema validation

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx          # Homepage with all sections
│   ├── checkout/         # Checkout page with PayPal integration
│   ├── dogs/             # Dog products category page
│   ├── cats/             # Cat products category page
│   ├── birds/            # Bird products category page
│   ├── fish/             # Fish products category page
│   ├── small-pets/       # Small pet products category page
│   ├── reptiles/         # Reptile products category page
│   ├── sale/             # Sale products page
│   └── new-arrivals/     # New arrivals page
├── components/
│   ├── Header.tsx         # Navigation with auth and cart
│   ├── Hero.tsx          # Main banner with CTA
│   ├── FeaturedCategories.tsx  # Pet category cards
│   ├── FeaturedProducts.tsx    # Product showcase with cart integration
│   ├── AboutSection.tsx        # Company story and features
│   ├── Footer.tsx             # Footer with links and newsletter
│   ├── AuthModal.tsx          # Login/register modal
│   ├── CartSidebar.tsx        # Shopping cart sidebar
│   └── SearchOverlay.tsx      # Search functionality
├── context/
│   └── AppContext.tsx     # Global state management
```

## 🎯 Key Features

### Header Component
- Responsive navigation with mobile menu
- Search functionality
- Shopping cart with item count
- Category-specific navigation with color coding

### Hero Section
- Gradient background with pet-themed elements
- Compelling value proposition
- Trust indicators and statistics
- Dual CTA buttons for different user intents

### Product Categories
- Visual category cards with high-quality images
- Color-coded by pet type for easy recognition
- Product count indicators
- Hover effects and smooth transitions

### Featured Products
- Product cards with ratings and reviews
- Quick action buttons (wishlist, quick view)
- Discount badges and sale indicators
- Category tags and brand information

### About Section
- Company story and mission
- Trust indicators and certifications
- Feature highlights with icons
- Customer testimonials area

### Footer
- Newsletter subscription
- Comprehensive link organization
- Social media integration
- Payment method display

## 🛒 E-commerce Features

### User Authentication
- **Registration & Login**: Secure user authentication with form validation
- **Toast Notifications**: Real-time feedback for all user actions
- **Session Management**: Persistent login with secure cookie storage
- **Profile Management**: User profile with address and contact information

### Shopping Cart
- **Add to Cart**: One-click product addition with quantity management
- **Cart Sidebar**: Slide-out cart with item management
- **Persistent Storage**: Cart contents saved across browser sessions
- **Order Summary**: Real-time totals with tax and shipping calculations
- **Free Shipping**: Automatic free shipping on orders over $50

### Checkout & Payments
- **PayPal Integration**: Secure payment processing with PayPal SDK
- **Order Forms**: Comprehensive shipping and billing information
- **Order Confirmation**: Professional order confirmation with email notifications
- **Tax Calculation**: Automatic tax calculation based on cart total
- **Shipping Options**: Free shipping threshold with standard rates

### Product Features
- **Smart Filtering**: Category, price, and feature-based filtering
- **Search Functionality**: Advanced product search with autocomplete
- **Product Reviews**: Star ratings and customer review integration
- **Wishlist**: Save favorite products for later purchase
- **Quick Actions**: Quick view, add to cart, and wishlist buttons

## 🎨 Customization

### Color Scheme
The color palette is defined in `tailwind.config.js` and can be customized:

```javascript
colors: {
  primary: {
    blue: '#4A90E2',
    green: '#7CB342',
    orange: '#FF8C00',
  },
  pet: {
    dog: '#8B4513',
    cat: '#708090',
    bird: '#FFD700',
    fish: '#00CED1',
    rabbit: '#DDA0DD',
    reptile: '#9ACD32',
  }
}
```

### Fonts
- **Inter**: Primary font for body text and UI elements
- **Poppins**: Display font for headings and emphasis

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px+

## ♿ Accessibility

- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader optimization
- High contrast ratios (4.5:1 for normal text, 3:1 for large text)
- Alternative text for all images

## 🚀 Deployment

### Build for Production
```bash
npm run build
npm start
```

### Deployment Options
- **Vercel** (Recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- **Docker**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support and questions:
- 📧 Email: hello@petparadise.com
- 📱 Phone: 1-800-PET-CARE (738-2273)
- 🌐 Website: [petparadise.com](https://petparadise.com)

---

Made with ❤️ for pet lovers everywhere 🐾
