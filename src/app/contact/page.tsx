'use client'

import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen bg-ui-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-blue to-primary-green text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm mb-4">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-white">Contact Us</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            We're here to help you and your pets. Get in touch with our friendly customer care team.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card p-8">
            <h2 className="text-2xl font-bold text-ui-text-primary mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-ui-text-secondary mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-ui-text-secondary mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-ui-text-secondary mb-2">
                  Subject *
                </label>
                <select
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                >
                  <option value="">Select a subject</option>
                  <option value="order">Order Inquiry</option>
                  <option value="product">Product Question</option>
                  <option value="shipping">Shipping Issue</option>
                  <option value="return">Return/Exchange</option>
                  <option value="complaint">Complaint</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-ui-text-secondary mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button type="submit" className="btn-primary w-full flex items-center justify-center">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-ui-text-primary mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary-blue mr-3" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-ui-text-secondary">1-800-PET-CARE (738-2273)</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary-blue mr-3" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-ui-text-secondary">hello@petparadise.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary-blue mr-3" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-ui-text-secondary">123 Pet Paradise Lane<br />Pet City, PC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-primary-blue mr-3" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-ui-text-secondary">Mon-Fri: 9AM-6PM<br />Sat-Sun: 10AM-4PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-ui-text-primary mb-4">Quick Links</h3>
              <div className="space-y-3">
                <Link href="/shipping" className="block text-primary-blue hover:underline">
                  📦 Shipping Information
                </Link>
                <Link href="/returns" className="block text-primary-blue hover:underline">
                  🔄 Returns & Exchanges
                </Link>
                <Link href="/faq" className="block text-primary-blue hover:underline">
                  ❓ Frequently Asked Questions
                </Link>
                <Link href="/size-guide" className="block text-primary-blue hover:underline">
                  📏 Size Guide
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage
