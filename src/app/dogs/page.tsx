'use client'

import Image from 'next/image'
import { Star, ShoppingCart, Heart, Filter, Grid, List } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useApp } from '@/context/AppContext'

const DogsPage = () => {
  const { addToCart } = useApp()
  
  const dogProducts = [
    {
      id: 1,
      name: 'Premium Salmon & Sweet Potato Dog Food',
      brand: 'PawNutrition',
      price: 49.99,
      originalPrice: 59.99,
      rating: 4.8,
      reviews: 324,
      image: 'https://get.musti.media/shops/mse/resources/ftp/productpage/b8/sams-field-salmon-potato-adult_41532-b8.jpg',
      badge: 'Best Seller',
      features: ['High Protein', 'Grain Free', 'Natural Ingredients'],
      category: 'Food'
    },
    {
      id: 2,
      name: 'Interactive Puzzle Ball Toy',
      brand: 'SmartPlay',
      price: 24.99,
      originalPrice: null,
      rating: 4.6,
      reviews: 189,
      image: 'https://get.musti.media/shops/mse/resources/ftp/productpage/86/nina-ottosson-treat-tumble-bla-105-cm-86.jpg',
      badge: 'New',
      features: ['Mental Stimulation', 'Durable', 'Easy Clean'],
      category: 'Toys'
    },
    {
      id: 3,
      name: 'Leather Training Collar',
      brand: 'CanineGear',
      price: 34.99,
      originalPrice: 39.99,
      rating: 4.7,
      reviews: 156,
      image: 'https://zoolyx.se/cdn/shop/files/alac-dressyrhalsband-dressyrstryp-lader-helstryp-rundsytt-svart-wpp1591796056362.png?v=1746779848&width=1380',
      badge: 'Sale',
      features: ['Genuine Leather', 'Adjustable', 'Comfort Padding'],
      category: 'Accessories'
    },
    {
      id: 4,
      name: 'Orthopedic Memory Foam Bed',
      brand: 'ComfortPaws',
      price: 89.99,
      originalPrice: 109.99,
      rating: 4.9,
      reviews: 267,
      image: 'https://media.zooplus.com/bilder/4/800/108332_pla_orthosofa_grau_fg_4820_4.jpg',
      badge: 'Premium',
      features: ['Memory Foam', 'Washable Cover', 'Joint Support'],
      category: 'Beds'
    },
    {
      id: 5,
      name: 'Natural Dental Chew Treats',
      brand: 'HealthyBites',
      price: 19.99,
      originalPrice: null,
      rating: 4.5,
      reviews: 98,
      image: 'https://get.musti.media/shops/mse/resources/ftp/productpage/5f/brit-care-functional-snack-dental-venison-150-g-5f.jpg',
      badge: 'Vet Approved',
      features: ['Natural Ingredients', 'Dental Health', 'No Artificial Colors'],
      category: 'Treats'
    },
    {
      id: 6,
      name: 'Waterproof Training Leash',
      brand: 'AdventurePup',
      price: 29.99,
      originalPrice: null,
      rating: 4.4,
      reviews: 142,
      image: 'https://get.musti.media/shops/mse/resources/ftp/productpage/36/basic-sweet-koppel-36.jpg',
      badge: 'Durable',
      features: ['Waterproof', 'Reflective Strip', '6ft Length'],
      category: 'Training'
    }
  ]

  const categories = [
    { name: 'All Products', count: dogProducts.length, active: true },
    { name: 'Food & Nutrition', count: 1, active: false },
    { name: 'Toys & Entertainment', count: 1, active: false },
    { name: 'Training & Behavior', count: 1, active: false },
    { name: 'Grooming & Care', count: 1, active: false },
    { name: 'Beds & Comfort', count: 1, active: false },
    { name: 'Collars & Leashes', count: 1, active: false },
    { name: 'Travel & Transport', count: 1, active: false },
    { name: 'Health & Supplements', count: 1, active: false },
    { name: 'Bowls & Feeding', count: 1, active: false },
    { name: 'Outdoor & Exercise', count: 1, active: false },
    { name: 'Puppy Supplies', count: 1, active: false },
    { name: 'Senior Dog Care', count: 1, active: false }
  ]

  return (
    <div className="min-h-screen bg-ui-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <nav className="flex items-center space-x-2 text-sm mb-4">
                <Link href="/" className="text-white/80 hover:text-white">Home</Link>
                <span className="text-white/60">/</span>
                <span className="text-white">Dogs</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                🐕 Dog Supplies
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Everything your loyal companion needs - from premium nutrition to engaging toys and comfortable accessories.
              </p>
            </div>
            <div className="hidden lg:block text-6xl opacity-20">
              🐕
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
                <Filter className="w-5 h-5 mr-2 text-pet-dog" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                      category.active
                        ? 'bg-pet-dog text-white'
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
                  {['Under $25', '$25 - $50', '$50 - $100', 'Over $100'].map((range) => (
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
                  {['PawNutrition', 'SmartPlay', 'CanineGear', 'ComfortPaws'].map((brand) => (
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
            {/* Filters and Sort */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <h2 className="text-xl font-semibold text-ui-text-primary">
                  {dogProducts.length} Products Found
                </h2>
                <p className="text-sm text-ui-text-secondary">
                  Premium dog supplies for every need
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <select className="px-4 py-2 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-pet-dog">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Customer Rating</option>
                  <option>Newest First</option>
                </select>
                <div className="flex border border-ui-border rounded-lg">
                  <button className="p-2 bg-pet-dog text-white rounded-l-lg">
                    <Grid className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-ui-text-secondary hover:bg-ui-muted rounded-r-lg">
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {dogProducts.map((product) => (
                <div key={product.id} className="card p-0 hover:scale-105 cursor-pointer overflow-hidden group">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-pet-dog text-white text-xs font-bold px-3 py-1 rounded-full">
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

                  {/* Content */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-ui-text-muted font-medium">{product.brand}</span>
                      <span className="text-xs font-medium text-pet-dog bg-amber-50 px-2 py-1 rounded">
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
                          category: 'Dogs',
                          brand: product.brand
                        })}
                        className="bg-pet-dog text-white py-2 px-4 rounded-lg hover:bg-amber-700 transition-colors flex items-center space-x-2"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
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

export default DogsPage
