'use client'

import Image from 'next/image'
import { Star, ShoppingCart, Heart, Filter, Grid, List } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useApp } from '@/context/AppContext'

const RabbitsPage = () => {
  const { addToCart } = useApp()
  
  const rabbitProducts = [
    {
      id: 1,
      name: 'Timothy Hay Pellets',
      brand: 'SmallPetNutrition',
      price: 26.99,
      originalPrice: 31.99,
      rating: 4.8,
      reviews: 189,
      image: 'https://via.placeholder.com/500x500/DDA0DD/FFFFFF?text=Rabbit+Food',
      badge: 'Best Seller',
      features: ['High Fiber', 'Timothy Hay', 'No Added Sugar'],
      category: 'Food'
    },
    {
      id: 2,
      name: 'Multi-Level Rabbit Hutch',
      brand: 'BunnyHomes',
      price: 149.99,
      originalPrice: 179.99,
      rating: 4.7,
      reviews: 76,
      image: 'https://via.placeholder.com/500x500/8B4513/FFFFFF?text=Hutch',
      badge: 'Sale',
      features: ['Weather Resistant', 'Easy Access', 'Spacious'],
      category: 'Housing'
    },
    {
      id: 3,
      name: 'Natural Willow Chew Toys',
      brand: 'NatureChew',
      price: 14.99,
      originalPrice: null,
      rating: 4.6,
      reviews: 234,
      image: 'https://via.placeholder.com/500x500/8B4513/FFFFFF?text=Chew+Toys',
      badge: 'Natural',
      features: ['Dental Health', 'Safe Materials', 'Entertaining'],
      category: 'Toys'
    },
    {
      id: 4,
      name: 'Soft Paper Bedding',
      brand: 'ComfortNest',
      price: 19.99,
      originalPrice: null,
      rating: 4.5,
      reviews: 156,
      image: 'https://via.placeholder.com/500x500/F5F5F5/000000?text=Bedding',
      badge: 'Absorbent',
      features: ['Dust Free', 'Odor Control', 'Biodegradable'],
      category: 'Bedding'
    },
    {
      id: 5,
      name: 'Ceramic Food & Water Bowls',
      brand: 'BunnyFeeding',
      price: 22.99,
      originalPrice: 27.99,
      rating: 4.4,
      reviews: 98,
      image: 'https://via.placeholder.com/500x500/4A90E2/FFFFFF?text=Bowls',
      badge: 'Durable',
      features: ['Heavy Base', 'Easy Clean', 'Chew Resistant'],
      category: 'Accessories'
    },
    {
      id: 6,
      name: 'Vitamin C Treats',
      brand: 'HealthyTreats',
      price: 12.99,
      originalPrice: null,
      rating: 4.7,
      reviews: 167,
      image: 'https://via.placeholder.com/500x500/7CB342/FFFFFF?text=Treats',
      badge: 'Healthy',
      features: ['Vitamin Enriched', 'Natural Fruits', 'No Preservatives'],
      category: 'Treats'
    }
  ]

  const categories = [
    { name: 'All Products', count: rabbitProducts.length, active: true },
    { name: 'Food & Hay', count: 1, active: false },
    { name: 'Hutches & Housing', count: 1, active: false },
    { name: 'Bedding & Litter', count: 1, active: false },
    { name: 'Toys & Chews', count: 1, active: false },
    { name: 'Exercise & Play', count: 1, active: false },
    { name: 'Grooming & Care', count: 1, active: false },
    { name: 'Health & Supplements', count: 1, active: false },
    { name: 'Feeding Accessories', count: 1, active: false },
    { name: 'Travel & Transport', count: 1, active: false },
    { name: 'Outdoor & Garden', count: 1, active: false },
    { name: 'Cleaning & Maintenance', count: 1, active: false }
  ]

  return (
    <div className="min-h-screen bg-ui-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-400 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <nav className="flex items-center space-x-2 text-sm mb-4">
                <Link href="/" className="text-white/80 hover:text-white">Home</Link>
                <span className="text-white/60">/</span>
                <span className="text-white">Rabbits</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                🐰 Rabbit Supplies
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Everything your bunny needs - from nutritious pellets to cozy hutches and engaging chew toys.
              </p>
            </div>
            <div className="hidden lg:block text-6xl opacity-20">
              🐰
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-4">
              <h3 className="font-semibold text-ui-text-primary mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2 text-pet-rabbit" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                      category.active
                        ? 'bg-pet-rabbit text-white'
                        : 'text-ui-text-secondary hover:bg-ui-muted'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      category.active ? 'bg-white/20' : 'bg-ui-muted'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>

              {/* Price Filter */}
              <div className="mt-8">
                <h4 className="font-semibold text-ui-text-primary mb-4">Price Range</h4>
                <div className="space-y-2">
                  {['Under $20', '$20 - $40', '$40 - $80', 'Over $80'].map((range) => (
                    <label key={range} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-ui-text-secondary">{range}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div className="mt-8">
                <h4 className="font-semibold text-ui-text-primary mb-4">Brand</h4>
                <div className="space-y-2">
                  {['SmallPetNutrition', 'BunnyHomes', 'NatureChew', 'ComfortNest'].map((brand) => (
                    <label key={brand} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-ui-text-secondary">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <h2 className="text-xl font-semibold text-ui-text-primary">
                  {rabbitProducts.length} Products Found
                </h2>
                <p className="text-sm text-ui-text-secondary">
                  Premium rabbit supplies for happy bunnies
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <select className="px-4 py-2 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-pet-rabbit">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Customer Rating</option>
                  <option>Newest First</option>
                </select>
                <div className="flex border border-ui-border rounded-lg">
                  <button className="p-2 bg-pet-rabbit text-white rounded-l-lg">
                    <Grid className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-ui-text-secondary hover:bg-ui-muted rounded-r-lg">
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {rabbitProducts.map((product) => (
                <div key={product.id} className="card p-0 hover:scale-105 cursor-pointer overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-pet-rabbit text-white text-xs font-bold px-3 py-1 rounded-full">
                      {product.badge}
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white">
                        <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                      </button>
                    </div>
                    {product.originalPrice && (
                      <div className="absolute bottom-4 left-4 bg-status-error text-white text-xs font-bold px-2 py-1 rounded">
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                      </div>
                    )}
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-ui-text-muted font-medium">{product.brand}</span>
                      <span className="text-xs font-medium text-pet-rabbit bg-purple-50 px-2 py-1 rounded">
                        {product.category}
                      </span>
                    </div>
                    
                    <h3 className="font-semibold text-ui-text-primary mb-2 line-clamp-2">
                      {product.name}
                    </h3>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.features.slice(0, 2).map((feature, index) => (
                        <span key={index} className="text-xs bg-ui-muted text-ui-text-secondary px-2 py-1 rounded">
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center space-x-2 mb-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium">{product.rating}</span>
                      <span className="text-sm text-ui-text-muted">({product.reviews})</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-ui-text-primary">
                          ${product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-ui-text-muted line-through">
                            ${product.originalPrice}
                          </span>
                        )}
                      </div>
                      <button 
                        onClick={() => addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                          category: 'Rabbits',
                          brand: product.brand
                        })}
                        className="bg-pet-rabbit text-white py-2 px-4 rounded-lg hover:bg-purple-500 transition-colors flex items-center space-x-2"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="btn-secondary">
                Load More Products
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RabbitsPage
