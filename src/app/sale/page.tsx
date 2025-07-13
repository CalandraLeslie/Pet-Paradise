'use client'

import React, { useState } from 'react'
import { Percent, Tag, Filter, Search, Grid, List, Heart, ShoppingCart, Eye, Star } from 'lucide-react'
import Image from 'next/image'

interface Product {
  id: number
  name: string
  originalPrice: number
  salePrice: number
  discount: number
  image: string
  rating: number
  reviews: number
  category: string
  brand: string
  inStock: boolean
}

const saleProducts: Product[] = [
  {
    id: 1,
    name: "Premium Dog Food - Chicken & Rice",
    originalPrice: 49.99,
    salePrice: 34.99,
    discount: 30,
    image: "https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 234,
    category: "Dogs",
    brand: "PetNutrition Pro",
    inStock: true
  },
  {
    id: 2,
    name: "Interactive Cat Laser Toy",
    originalPrice: 24.99,
    salePrice: 14.99,
    discount: 40,
    image: "https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 187,
    category: "Cats",
    brand: "PlayTime",
    inStock: true
  },
  {
    id: 3,
    name: "Bird Seed Mix - Premium Blend",
    originalPrice: 19.99,
    salePrice: 12.99,
    discount: 35,
    image: "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 156,
    category: "Birds",
    brand: "Feathered Friends",
    inStock: true
  },
  {
    id: 4,
    name: "Aquarium LED Light System",
    originalPrice: 89.99,
    salePrice: 59.99,
    discount: 33,
    image: "https://images.pexels.com/photos/1166644/pexels-photo-1166644.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 89,
    category: "Fish",
    brand: "AquaTech",
    inStock: true
  },
  {
    id: 5,
    name: "Rabbit Pellet Food - Organic",
    originalPrice: 16.99,
    salePrice: 10.99,
    discount: 35,
    image: "https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.5,
    reviews: 92,
    category: "Small Pets",
    brand: "Bunny Best",
    inStock: true
  },
  {
    id: 6,
    name: "Reptile Heat Lamp - 75W",
    originalPrice: 32.99,
    salePrice: 22.99,
    discount: 30,
    image: "https://images.pexels.com/photos/6324998/pexels-photo-6324998.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.4,
    reviews: 67,
    category: "Reptiles",
    brand: "ReptileZone",
    inStock: true
  },
  {
    id: 7,
    name: "Dog Chew Toy Set - 5 Pack",
    originalPrice: 29.99,
    salePrice: 17.99,
    discount: 40,
    image: "https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.7,
    reviews: 298,
    category: "Dogs",
    brand: "ChewMaster",
    inStock: true
  },
  {
    id: 8,
    name: "Cat Scratching Post Tower",
    originalPrice: 79.99,
    salePrice: 54.99,
    discount: 31,
    image: "https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8,
    reviews: 156,
    category: "Cats",
    brand: "ScratchLife",
    inStock: true
  }
]

const categories = ['All', 'Dogs', 'Cats', 'Birds', 'Fish', 'Small Pets', 'Reptiles']
const discountRanges = ['All', '20-30%', '30-40%', '40%+']

export default function SalePage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedDiscount, setSelectedDiscount] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('discount')

  const filteredProducts = saleProducts.filter(product => {
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDiscount = selectedDiscount === 'All' || 
      (selectedDiscount === '20-30%' && product.discount >= 20 && product.discount < 30) ||
      (selectedDiscount === '30-40%' && product.discount >= 30 && product.discount < 40) ||
      (selectedDiscount === '40%+' && product.discount >= 40)
    
    return matchesCategory && matchesSearch && matchesDiscount
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'discount':
        return b.discount - a.discount
      case 'price-low':
        return a.salePrice - b.salePrice
      case 'price-high':
        return b.salePrice - a.salePrice
      case 'rating':
        return b.rating - a.rating
      default:
        return 0
    }
  })

  return (
    <div className="min-h-screen bg-ui-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary-orange to-red-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center mb-4">
            <Percent className="w-8 h-8 mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold">Big Sale Event</h1>
          </div>
          <p className="text-xl md:text-2xl mb-6 opacity-90">
            Save up to 40% on premium pet supplies
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-lg">
            <div className="flex items-center">
              <Tag className="w-5 h-5 mr-2" />
              <span>Free Shipping on $50+</span>
            </div>
            <div className="flex items-center">
              <Star className="w-5 h-5 mr-2" />
              <span>Top Rated Products</span>
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
                <Filter className="w-5 h-5 mr-2 text-primary-orange" />
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
                    placeholder="Search sale items..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-2 pl-10 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange focus:border-transparent"
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
                        className="mr-2 text-primary-orange focus:ring-primary-orange"
                      />
                      <span className="text-sm">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Discount Filter */}
              <div>
                <label className="block text-sm font-medium text-ui-text-secondary mb-2">
                  Discount Range
                </label>
                <div className="space-y-2">
                  {discountRanges.map((range) => (
                    <label key={range} className="flex items-center">
                      <input
                        type="radio"
                        name="discount"
                        value={range}
                        checked={selectedDiscount === range}
                        onChange={(e) => setSelectedDiscount(e.target.value)}
                        className="mr-2 text-primary-orange focus:ring-primary-orange"
                      />
                      <span className="text-sm">{range}</span>
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
                  Sale Products ({sortedProducts.length})
                </h2>
                <p className="text-ui-text-secondary">
                  Limited time offers on quality pet supplies
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                {/* Sort */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange"
                >
                  <option value="discount">Highest Discount</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>

                {/* View Mode */}
                <div className="flex border border-ui-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-primary-orange text-white' : 'bg-white text-ui-text-secondary'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-primary-orange text-white' : 'bg-white text-ui-text-secondary'}`}
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
                    <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                      {product.discount}% OFF
                    </div>
                    <div className="absolute top-3 right-3 flex flex-col gap-2">
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
                        ({product.reviews})
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="text-lg font-bold text-ui-text-primary">
                          ${product.salePrice}
                        </span>
                        <span className="text-sm text-ui-text-muted line-through ml-2">
                          ${product.originalPrice}
                        </span>
                      </div>
                      <span className="text-sm text-primary-green font-medium">
                        Save ${(product.originalPrice - product.salePrice).toFixed(2)}
                      </span>
                    </div>
                    
                    <button className="w-full bg-primary-orange text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2">
                      <ShoppingCart className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <Percent className="w-16 h-16 text-ui-text-muted mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-ui-text-primary mb-2">
                  No sale items found
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
