'use client'

import Image from 'next/image'
import { Star, ShoppingCart, Heart, Filter, Grid, List, Clock } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useApp } from '@/context/AppContext'

const NewArrivalsPage = () => {
  const { addToCart } = useApp()
  const [activeCategory, setActiveCategory] = useState('All Products')
  
  const newProducts = [
    {
      id: 101,
      name: 'Smart Automatic Feeder',
      brand: 'TechPet',
      price: 89.99,
      originalPrice: null,
      rating: 4.8,
      reviews: 45,
      image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ6p72BCf3YM0NKacouNBsihV8VAHqqTHX9K31Jvf7oehBGszMKjKpRyhUoUMy4JyE_yFegcAOkbhGSQEKeOGGPV4qxxhTTjUCmFdjA3NDvWL4qN9Lry05a',
      badge: 'New',
      features: ['WiFi Connected', 'Voice Control', 'Portion Control'],
      category: 'Technology'
    },
    {
      id: 102,
      name: 'Orthopedic Memory Foam Bed',
      brand: 'ComfortPet',
      price: 124.99,
      originalPrice: null,
      rating: 4.9,
      reviews: 23,
      image: 'https://m.media-amazon.com/images/I/61H6z17RCEL._AC_SY300_SX300_QL70_ML2_.jpg',
      badge: 'Premium',
      features: ['Memory Foam', 'Washable Cover', 'Joint Support'],
      category: 'Beds'
    },
    {
      id: 103,
      name: 'Interactive Laser Toy',
      brand: 'PlayTime',
      price: 34.99,
      originalPrice: null,
      rating: 4.7,
      reviews: 67,
      image: 'https://images.zoo.se/a796ad32-38ca-491c-9e84-6bb8da6a60a1?auto=format&q=80&f=webp&w=1050',
      badge: 'Trending',
      features: ['Motion Sensor', 'Auto Timer', 'Safe Laser'],
      category: 'Toys'
    }
  ]

  const filteredProducts = activeCategory === 'All Products' 
    ? newProducts 
    : newProducts.filter(product => product.category === activeCategory)

  const categories = [
    { name: 'All Products', count: newProducts.length },
    { name: 'Technology', count: newProducts.filter(p => p.category === 'Technology').length },
    { name: 'Beds', count: newProducts.filter(p => p.category === 'Beds').length },
    { name: 'Toys', count: newProducts.filter(p => p.category === 'Toys').length }
  ]

  return (
    <div className="min-h-screen bg-ui-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <nav className="flex items-center space-x-2 text-sm mb-4">
                <Link href="/" className="text-white/80 hover:text-white">Home</Link>
                <span className="text-white/60">/</span>
                <span className="text-white">New Arrivals</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center">
                <Clock className="w-12 h-12 mr-4" />
                New Arrivals
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Discover the latest and greatest products for your beloved pets. Fresh arrivals weekly!
              </p>
            </div>
            <div className="hidden lg:block text-6xl opacity-20">
              ✨
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
                <Filter className="w-5 h-5 mr-2 text-orange-500" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                      activeCategory === category.name
                        ? 'bg-orange-500 text-white'
                        : 'text-ui-text-secondary hover:bg-ui-muted'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      activeCategory === category.name ? 'bg-white/20' : 'bg-ui-muted'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <h2 className="text-xl font-semibold text-ui-text-primary">
                  {filteredProducts.length} New Products
                </h2>
                <p className="text-sm text-ui-text-secondary">
                  Latest products across all categories
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <select className="px-4 py-2 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option>Sort by: Newest First</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Customer Rating</option>
                </select>
                <div className="flex border border-ui-border rounded-lg">
                  <button className="p-2 bg-orange-500 text-white rounded-l-lg">
                    <Grid className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-ui-text-secondary hover:bg-ui-muted rounded-r-lg">
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div key={product.id} className="card p-0 hover:scale-105 cursor-pointer overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {product.badge}
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white">
                        <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                      </button>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-ui-text-muted font-medium">{product.brand}</span>
                      <span className="text-xs font-medium text-orange-500 bg-orange-50 px-2 py-1 rounded">
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
                      </div>
                      <button 
                        onClick={() => addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          image: product.image,
                          category: 'New Arrivals',
                          brand: product.brand
                        })}
                        className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-2"
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

export default NewArrivalsPage
