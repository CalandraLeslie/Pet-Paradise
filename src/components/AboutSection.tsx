'use client'

import Image from 'next/image'
import { Shield, Truck, Phone, Award, Heart, Leaf } from 'lucide-react'

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: 'All products are vet-approved and meet the highest safety standards',
      color: 'text-primary-blue'
    },
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Free shipping on orders over $50, delivered within 2-3 business days',
      color: 'text-primary-green'
    },
    {
      icon: Phone,
      title: '24/7 Support',
      description: 'Our pet care experts are available around the clock to help you',
      color: 'text-primary-orange'
    },
    {
      icon: Award,
      title: 'Premium Brands',
      description: 'We partner with the most trusted and respected pet care brands',
      color: 'text-pet-dog'
    },
    {
      icon: Heart,
      title: 'Pet Welfare',
      description: '5% of profits donated to local animal shelters and rescue organizations',
      color: 'text-status-error'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Sustainable packaging and environmentally conscious product selection',
      color: 'text-pet-reptile'
    }
  ]

  const stats = [
    { number: '50,000+', label: 'Happy Pet Parents' },
    { number: '10,000+', label: 'Products Available' },
    { number: '500+', label: 'Trusted Brands' },
    { number: '99.8%', label: 'Customer Satisfaction' }
  ]

  return (
    <section className="py-20 bg-ui-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text content */}
          <div className="space-y-8">
            <div>
              <h2 className="section-title">
                Why Pet Parents Choose
                <span className="bg-gradient-to-r from-primary-blue to-primary-green bg-clip-text text-transparent"> Pet Paradise</span>
              </h2>
              <p className="section-subtitle">
                We're more than just a pet store – we're your partner in providing the best care for your beloved companions. 
                With years of expertise and genuine love for animals, we curate only the finest products.
              </p>
            </div>

            {/* Story */}
            <div className="bg-ui-surface p-6 rounded-xl border-l-4 border-primary-blue">
              <p className="text-ui-text-secondary italic mb-4">
                "Founded by veterinarians and passionate pet owners, Pet Paradise was born from the simple belief 
                that every pet deserves the highest quality nutrition, the most engaging toys, and the safest accessories."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-primary-green rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">🐾</span>
                </div>
                <div>
                  <p className="font-semibold text-ui-text-primary">Dr. Sarah Chen</p>
                  <p className="text-sm text-ui-text-muted">Founder & Chief Veterinarian</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-primary-blue mb-1">{stat.number}</div>
                  <div className="text-sm text-ui-text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-large">
              <Image
                src="https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Happy pets with their owners"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating card */}
            <div className="absolute -bottom-8 -left-8 bg-ui-surface p-6 rounded-xl shadow-large border border-ui-border">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-orange to-yellow-500 rounded-full flex items-center justify-center text-2xl">
                  🏆
                </div>
                <div>
                  <p className="font-bold text-ui-text-primary">Award Winner</p>
                  <p className="text-sm text-ui-text-secondary">Best Pet Retailer 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className={`w-16 h-16 mx-auto mb-4 ${feature.color} bg-ui-surface rounded-full flex items-center justify-center shadow-soft group-hover:shadow-medium transition-shadow`}>
                <feature.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-ui-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-ui-text-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-blue to-primary-green rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Spoil Your Pet?</h3>
            <p className="text-xl mb-6 text-white/90">
              Join thousands of happy pet parents who trust Pet Paradise for their furry family members
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-blue font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Start Shopping
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-primary-blue transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
