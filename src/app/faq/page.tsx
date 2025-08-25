'use client'

import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const FAQPage = () => {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const faqCategories = [
    {
      title: "Orders & Shipping",
      questions: [
        {
          q: "How long does shipping take?",
          a: "Standard shipping takes 5-7 business days. Express shipping (2-3 days) and next-day delivery are also available. Free shipping on orders over $50!"
        },
        {
          q: "Can I track my order?",
          a: "Yes! You'll receive a tracking number via email once your order ships. You can also track orders in your account dashboard."
        },
        {
          q: "Do you ship internationally?",
          a: "We currently ship to the US, Canada, and select international destinations. Shipping costs and times vary by location."
        }
      ]
    },
    {
      title: "Returns & Exchanges",
      questions: [
        {
          q: "What is your return policy?",
          a: "We offer a 30-day return policy on most items. Items must be unused and in original packaging. Some restrictions apply to food and health products."
        },
        {
          q: "How do I return an item?",
          a: "Contact our customer service team to initiate a return. We'll provide a prepaid shipping label for eligible returns."
        },
        {
          q: "How long do refunds take?",
          a: "Refunds are processed within 5-7 business days after we receive your return. The refund will appear on your original payment method."
        }
      ]
    },
    {
      title: "Products & Sizing",
      questions: [
        {
          q: "How do I know what size to order?",
          a: "Check our detailed size guide for measurements and sizing charts. When in doubt, contact us for personalized sizing help!"
        },
        {
          q: "Are your products safe for pets?",
          a: "Absolutely! All products are tested for safety and meet or exceed industry standards. Look for our safety certifications on product pages."
        },
        {
          q: "Do you offer organic or natural options?",
          a: "Yes! We carry a wide selection of organic, natural, and eco-friendly products. Use our filters to find these options easily."
        }
      ]
    },
    {
      title: "Account & Payment",
      questions: [
        {
          q: "Do I need an account to place an order?",
          a: "No, you can checkout as a guest. However, creating an account lets you track orders, save favorites, and speed up future purchases."
        },
        {
          q: "What payment methods do you accept?",
          a: "We accept all major credit cards, PayPal, Apple Pay, and Google Pay. All transactions are secure and encrypted."
        },
        {
          q: "Can I change or cancel my order?",
          a: "You can modify or cancel orders within 1 hour of placement. After that, contact customer service and we'll do our best to help."
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-ui-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-blue to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm mb-4">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-white">FAQ</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <HelpCircle className="inline w-12 h-12 mr-4" />
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Find quick answers to common questions about ordering, shipping, returns, and more.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {faqCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-8">
            <h2 className="text-2xl font-bold text-ui-text-primary mb-6">{category.title}</h2>
            <div className="space-y-4">
              {category.questions.map((item, itemIndex) => {
                const globalIndex = categoryIndex * 100 + itemIndex
                const isOpen = openItems.includes(globalIndex)
                
                return (
                  <div key={itemIndex} className="card p-0 overflow-hidden">
                    <button
                      onClick={() => toggleItem(globalIndex)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-ui-muted transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-ui-text-primary pr-4">
                        {item.q}
                      </h3>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-primary-blue flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-primary-blue flex-shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6">
                        <p className="text-ui-text-secondary leading-relaxed">
                          {item.a}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}

        {/* Contact CTA */}
        <div className="card p-8 text-center bg-primary-blue text-white mt-12">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="mb-6">Our friendly customer service team is here to help!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary bg-white text-primary-blue hover:bg-gray-100">
              Contact Us
            </Link>
            <a href="tel:1-800-738-2273" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary-blue">
              Call 1-800-PET-CARE
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQPage
