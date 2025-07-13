'use client'

import React, { useState } from 'react'
import { Sparkles, Calendar, Filter, Search, Grid, List, Heart, ShoppingCart, Eye, Star, Badge } from 'lucide-react'
import Image from 'next/image'

interface Product {
  id: number
  name: string
  price: number
  image: string
  rating: number
  reviews: number
  category: string
  brand: string
  inStock: boolean
  isNew: boolean
  addedDate: string
  features: string[]
}

const newProducts: Product[] = [
  {
    id: 1,
    name: "Smart Pet Feeder with App Control",
    price: 129.99,
    image: "https://images.pexels.com/photos/1390784/pexels-photo-1390784.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 12,
    category: "Dogs",
    brand: "TechPet",
    inStock: true,
    isNew: true,
    addedDate: "2025-07-10",
    features: ["WiFi Connected", "Portion Control", "Voice Recording"]
  },
  {
    id: 2,
    name: "Self-Cleaning Cat Litter Box",
    price: 199.99,
    image: "https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 8,
    category: "Cats",
    brand: "CleanPaws",
    inStock: true,
    isNew: true,
    addedDate: "2025-07-09",
    features: ["Auto-Cleaning", "Odor Control", "Health Monitoring"]
  },
  {
    id: 3,
    name: "Interactive Bird Training Perch",
    price: 45.99,
    image: "https://images.pexels.com/photos/7210734/pexels-photo-7210734.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.7,
    reviews: 15,
    category: "Birds",
    brand: "FlightPath",
    inStock: true,
    isNew: true,
    addedDate: "2025-07-08",
    features: ["Training Sounds", "Adjustable Height", "Natural Wood"]
  },
  {
    id: 4,
    name: "AI-Powered Aquarium Monitor",
    price: 89.99,
    image: "https://images.pexels.com/photos/1123982/pexels-photo-1123982.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.9,
    reviews: 6,
    category: "Fish",
    brand: "AquaIntel",
    inStock: true,
    isNew: true,
    addedDate: "2025-07-07",
    features: ["pH Monitoring", "Temperature Control", "Mobile Alerts"]
  },
  {
    id: 5,
    name: "Luxury Rabbit Habitat System",
    price: 159.99,
    image: "https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.6,
    reviews: 9,
    category: "Small Pets",
    brand: "BunnyLux",
    inStock: true,
    isNew: true,
    addedDate: "2025-07-06",
    features: ["Multi-Level", "Easy Assembly", "Escape-Proof"]
  },
  {
    id: 6,
    name: "Digital Terrarium Climate Controller",
    price: 74.99,
    image: "https://images.pexels.com/photos/6324998/pexels-photo-6324998.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8,
    reviews: 11,
    category: "Reptiles",
    brand: "ReptileControl",
    inStock: true,
    isNew: true,
    addedDate: "2025-07-05",
    features: ["Humidity Control", "Temperature Zones", "Night Mode"]
  },
  {
    id: 7,
    name: "GPS Dog Collar with Health Tracking",
    price: 99.99,
    image: "https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.7,
    reviews: 23,
    category: "Dogs",
    brand: "TrackPaw",
    inStock: true,
    isNew: true,
    addedDate: "2025-07-04",
    features: ["Real-time GPS", "Activity Tracking", "Waterproof"]
  },
  {
    id: 8,
    name: "Calming Anxiety Vest for Cats",
    price: 34.99,
    image: "https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.5,
    reviews: 18,
    category: "Cats",
    brand: "CalmKit",
    inStock: true,
    isNew: true,
    addedDate: "2025-07-03",
    features: ["Pressure Therapy", "Breathable Fabric", "Machine Washable"]
  }
]

const categories = ['All', 'Dogs', 'Cats', 'Birds', 'Fish', 'Small Pets', 'Reptiles']
const timeFrames = ['All Time', 'Last 7 Days', 'Last 30 Days']

export default function NewArrivalsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTimeFrame, setSelectedTimeFrame] = useState('All Time')
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('newest')

  const filteredProducts = newProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    
    const productDate = new Date(product.addedDate)
    const now = new Date()
    const matchesTimeFrame = selectedTimeFrame === 'All Time' ||
      (selectedTimeFrame === 'Last 7 Days' && (now.getTime() - productDate.getTime()) <= 7 * 24 * 60 * 60 * 1000) ||
      (selectedTimeFrame === 'Last 30 Days' && (now.getTime() - productDate.getTime()) <= 30 * 24 * 60 * 60 * 1000)
    
    return matchesCategory && matchesSearch && matchesTimeFrame
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return new Date(b.addedDate).getTime() - new Date(a.addedDate).getTime()
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'rating':
        return b.rating - a.rating
      default:
        return 0
    }
  })

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  return (
    <div className="min-h-screen bg-ui-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-blue to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">New Arrivals</h1>
          </div>
          <p className="text-xl md:text-2xl mb-6 opacity-90">
            Latest innovations in pet care and comfort
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>Fresh Weekly Drops</span>
            </div>
            <div className="flex items-center">
              <Badge className="w-5 h-5 mr-2" />
              <span>Exclusive Products</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border border-ui-border p-6 sticky top-4">
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2 text-primary-blue" />
                Filters
              </h3>
              
              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-ui-text-secondary mb-2">
                  Search Products
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search new arrivals..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 pl-10 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-ui-text-muted w-4 h-4" />
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-ui-text-secondary mb-2">
                  Category
                </label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <label key={category} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="mr-2 text-primary-blue focus:ring-primary-blue"
                      />
                      <span className="text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Time Frame Filter */}
              <div>
                <label className="block text-sm font-medium text-ui-text-secondary mb-2">
                  Added
                </label>
                <div className="space-y-2">
                  {timeFrames.map((timeFrame) => (
                    <label key={timeFrame} className="flex items-center">
                      <input
                        type="radio"
                        name="timeFrame"
                        value={timeFrame}
                        checked={selectedTimeFrame === timeFrame}
                        onChange={(e) => setSelectedTimeFrame(e.target.value)}
                        className="mr-2 text-primary-blue focus:ring-primary-blue"
                      />
                      <span className="text-sm">{timeFrame}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="lg:w-3/4">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-ui-text-primary">
                  New Arrivals ({sortedProducts.length})
                </h2>
                <p className="text-ui-text-secondary">
                  Latest products just added to our collection
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>

                {/* View Mode */}
                <div className="flex border border-ui-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-primary-blue text-white' : 'bg-white text-ui-text-secondary'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-primary-blue text-white' : 'bg-white text-ui-text-secondary'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'}>
              {sortedProducts.map((product) => (
                <div key={product.id} className={`bg-white rounded-xl shadow-sm border border-ui-border overflow-hidden hover:shadow-md transition-shadow ${viewMode === 'list' ? 'flex' : ''}`}>
                  <div className={`relative ${viewMode === 'list' ? 'w-48 h-48' : 'aspect-square'}`}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-primary-blue text-white px-2 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      NEW
                    </div>
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-ui-text-secondary">
                      {formatDate(product.addedDate)}
                    </div>
                    <div className="absolute bottom-3 right-3 flex flex-col gap-2">
                      <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                        <Heart className="w-4 h-4 text-ui-text-secondary" />
                      </button>
                      <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
                        <Eye className="w-4 h-4 text-ui-text-secondary" />
                      </button>
                    </div>
                  </div>
                  
                  <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="mb-2">
                      <span className="text-xs text-ui-text-muted bg-ui-background-subtle px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    
                    <h3 className="font-semibold text-ui-text-primary mb-1 line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <p className="text-sm text-ui-text-muted mb-2">{product.brand}</p>
                    
                    <div className="flex items-center mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-ui-text-muted ml-2">
                        ({product.reviews} reviews)
                      </span>
                    </div>

                    {/* Features */}
                    <div className="mb-3">
                      <div className="flex flex-wrap gap-1">
                        {product.features.slice(0, 2).map((feature, index) => (
                          <span key={index} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                        {product.features.length > 2 && (
                          <span className="text-xs text-ui-text-muted">
                            +{product.features.length - 2} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-bold text-ui-text-primary">
                        ${product.price}
                      </span>
                      <span className="text-sm text-primary-green font-medium">
                        In Stock
                      </span>
                    </div>
                    
                    <button className="w-full bg-primary-blue text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <Sparkles className="w-16 h-16 text-ui-text-muted mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-ui-text-primary mb-2">
                  No new arrivals found
                </h3>
                <p className="text-ui-text-secondary">
                  Try adjusting your filters to see more products
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
