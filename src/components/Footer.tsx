'use client'

import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'Shop Categories': [
      { name: 'Dog Supplies', href: '/dogs' },
      { name: 'Cat Supplies', href: '/cats' },
      { name: 'Bird Supplies', href: '/birds' },
      { name: 'Fish & Aquatic', href: '/fish' },
      { name: 'Small Pets', href: '/small-pets' },
      { name: 'Reptile Supplies', href: '/reptiles' }
    ],
    'Customer Care': [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Shipping Info', href: '/shipping' },
      { name: 'Returns & Exchanges', href: '/returns' },
      { name: 'Size Guide', href: '/size-guide' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Pet Care Tips', href: '/care-tips' }
    ],
    'Company': [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Press', href: '/press' },
      { name: 'Sustainability', href: '/sustainability' },
      { name: 'Reviews', href: '/reviews' },
      { name: 'Affiliate Program', href: '/affiliate' }
    ],
    'Legal': [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Cookie Policy', href: '/cookies' },
      { name: 'Accessibility', href: '/accessibility' }
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Instagram, href: '#', name: 'Instagram', color: 'hover:text-pink-600' },
    { icon: Twitter, href: '#', name: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Youtube, href: '#', name: 'YouTube', color: 'hover:text-red-600' }
  ]

  const paymentMethods = [
    '💳', '🏧', '💰', '📱'
  ]

  return (
    <footer className="bg-ui-text-primary text-white">
      {/* Newsletter section */}
      <div className="bg-gradient-to-r from-primary-blue to-primary-green py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Pet Paradise</h3>
          <p className="text-lg mb-6 text-white/90">
            Get exclusive deals, pet care tips, and new product announcements delivered to your inbox
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-primary-blue font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-sm mt-3 text-white/70">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>

      {/* Main footer content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Company info */}
            <div className="lg:col-span-2">
              {/* Logo */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-blue to-primary-green rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">🐾</span>
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold">Pet Paradise</h3>
                  <p className="text-sm text-gray-400">Premium Pet Care</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Your trusted partner in pet care since 2020. We're committed to providing the highest quality 
                products and expert advice to keep your pets happy and healthy.
              </p>

              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-primary-blue" />
                  <span className="text-gray-300">1-800-PET-CARE (738-2273)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-primary-green" />
                  <span className="text-gray-300">hello@petparadise.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary-orange" />
                  <span className="text-gray-300">123 Pet Street, Animal City, AC 12345</span>
                </div>
              </div>
            </div>

            {/* Footer links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="lg:col-span-1">
                <h4 className="font-semibold text-white mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} Pet Paradise. All rights reserved. Made with ❤️ for pet lovers.
            </div>

            {/* Social links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm hidden sm:block">Follow us:</span>
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-colors`}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Payment methods */}
            <div className="flex items-center space-x-2">
              <span className="text-gray-400 text-sm hidden sm:block">We accept:</span>
              {paymentMethods.map((method, index) => (
                <span key={index} className="text-2xl">{method}</span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap justify-center items-center space-x-6 mt-6 pt-6 border-t border-gray-700">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span className="text-green-500">✓</span>
              <span>Vet Approved Products</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span className="text-green-500">✓</span>
              <span>Secure Checkout</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span className="text-green-500">✓</span>
              <span>Fast Shipping</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span className="text-green-500">✓</span>
              <span>Money Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
