'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const FeaturedCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Dogs',
      description: 'Premium food, toys & accessories',
      productCount: '2,500+ products',
      color: 'from-amber-600 to-amber-800',
      textColor: 'text-pet-dog',
      bgColor: 'bg-amber-50',
      image: 'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: '🐕',
      href: '/dogs'
    },
    {
      id: 2,
      name: 'Cats',
      description: 'Nutrition & entertainment essentials',
      productCount: '1,800+ products',
      color: 'from-slate-600 to-slate-800',
      textColor: 'text-pet-cat',
      bgColor: 'bg-slate-50',
      image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: '🐱',
      href: '/cats'
    },
    {
      id: 3,
      name: 'Birds',
      description: 'Seeds, cages & enrichment',
      productCount: '900+ products',
      color: 'from-yellow-500 to-yellow-700',
      textColor: 'text-pet-bird',
      bgColor: 'bg-yellow-50',
      image: 'https://images.pexels.com/photos/349758/hummingbird-bird-birds-349758.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: '🐦',
      href: '/birds'
    },
    {
      id: 4,
      name: 'Fish & Aquatic',
      description: 'Tanks, food & water care',
      productCount: '1,200+ products',
      color: 'from-cyan-500 to-cyan-700',
      textColor: 'text-pet-fish',
      bgColor: 'bg-cyan-50',
      image: 'https://images.pexels.com/photos/1166644/pexels-photo-1166644.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: '🐠',
      href: '/fish'
    },
    {
      id: 5,
      name: 'Small Pets',
      description: 'Rabbits, guinea pigs & more',
      productCount: '750+ products',
      color: 'from-purple-500 to-purple-700',
      textColor: 'text-pet-rabbit',
      bgColor: 'bg-purple-50',
      image: 'https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: '🐰',
      href: '/small-pets'
    },
    {
      id: 6,
      name: 'Reptiles',
      description: 'Habitats, heating & nutrition',
      productCount: '600+ products',
      color: 'from-green-600 to-green-800',
      textColor: 'text-pet-reptile',
      bgColor: 'bg-green-50',
      image: 'https://images.pexels.com/photos/7720705/pexels-photo-7720705.jpeg?auto=compress&cs=tinysrgb&w=500',
      icon: '🦎',
      href: '/reptiles'
    }
  ]

  return (
    <section className="py-20 bg-ui-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Shop by Pet Category
          </h2>
          <p className="section-subtitle mx-auto">
            Find everything your beloved companion needs, tailored specifically for their species and lifestyle
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.href}
              className="group card p-0 hover:scale-105 cursor-pointer overflow-hidden"
            >
              {/* Image section */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={category.image}
                  alt={`${category.name} products`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60`}></div>
                
                {/* Icon overlay */}
                <div className="absolute top-4 right-4 text-4xl bg-white/20 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center">
                  {category.icon}
                </div>
                
                {/* Product count badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-medium text-gray-800">{category.productCount}</span>
                </div>
              </div>

              {/* Content section */}
              <div className={`p-6 ${category.bgColor}`}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`text-2xl font-bold ${category.textColor}`}>
                    {category.name}
                  </h3>
                  <ArrowRight className={`w-5 h-5 ${category.textColor} group-hover:translate-x-1 transition-transform`} />
                </div>
                <p className="text-ui-text-secondary mb-4">
                  {category.description}
                </p>
                
                {/* Quick links */}
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs bg-white/70 rounded-full px-3 py-1 text-gray-700">Food</span>
                  <span className="text-xs bg-white/70 rounded-full px-3 py-1 text-gray-700">Toys</span>
                  <span className="text-xs bg-white/70 rounded-full px-3 py-1 text-gray-700">Accessories</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="btn-primary">
            View All Categories
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCategories
