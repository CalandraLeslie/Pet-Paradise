'use client'

import Image from 'next/image'
import { Star, ShoppingCart, Heart, Filter, Grid, List } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useApp } from '@/context/AppContext'

const ReptilesPage = () => {
  const { addToCart } = useApp()
  const [activeCategory, setActiveCategory] = useState('All Products')
  
  const reptileProducts = [
    {
      id: 1,
      name: 'Reptile Heat Lamp Kit',
      brand: 'ThermoReptile',
      price: 45.99,
      originalPrice: 54.99,
      rating: 4.8,
      reviews: 156,
      image: 'https://ledmegastore.se/210966-large_defaultWH/reptil-varmelampe-uva-uvb-50w-klipsholder.jpg',
      badge: 'Best Seller',
      features: ['UVB/UVA', 'Temperature Control', 'Timer Function'],
      category: 'Heating'
    },
    {
      id: 2,
      name: '40 Gallon Glass Terrarium',
      brand: 'ReptiHome',
      price: 199.99,
      originalPrice: 229.99,
      rating: 4.7,
      reviews: 89,
      image: 'https://aosom.eu/cdn/shop/files/IxOJ2c9O_14veP2gsdYn6gaosomDHxABDCbxJ2CDXwrZ3mCbw.jpg?v=1752755722&width=1240',
      badge: 'Sale',
      features: ['Front Ventilation', 'Easy Access', 'Secure Lock'],
      category: 'Terrariums'
    },
    {
      id: 3,
      name: 'Premium Reptile Food Mix',
      brand: 'NutriReptile',
      price: 28.99,
      originalPrice: null,
      rating: 4.6,
      reviews: 234,
      image: 'https://images.zoo.se/3208103f-9aac-4610-8758-c93cd9cf90d3?auto=format&q=80&f=webp&w=1050',
      badge: 'Natural',
      features: ['All Natural', 'Vitamin Enriched', 'Species Specific'],
      category: 'Food'
    },
    {
      id: 4,
      name: 'Desert Substrate Mix',
      brand: 'HabitatPlus',
      price: 19.99,
      originalPrice: null,
      rating: 4.5,
      reviews: 167,
      image: 'https://images.zoo.se/966cc231-ca70-494c-a922-b57d6ba0c468?auto=format&q=80&f=webp&w=1050',
      badge: 'Essential',
      features: ['Dust Free', 'Natural Color', 'Easy Clean'],
      category: 'Substrate'
    },
    {
      id: 5,
      name: 'Reptile Humidity Controller',
      brand: 'ClimateControl',
      price: 89.99,
      originalPrice: null,
      rating: 4.9,
      reviews: 67,
      image: 'https://images.zoo.se/92d35704-832f-4a7f-9a5e-ee3256d89e6a?auto=format&q=80&f=webp&w=1050',
      badge: 'High-Tech',
      features: ['Digital Display', 'Auto Adjust', 'Misting System'],
      category: 'Equipment'
    },
    {
      id: 6,
      name: 'Natural Rock Hide Cave',
      brand: 'WildDecor',
      price: 34.99,
      originalPrice: 39.99,
      rating: 4.4,
      reviews: 198,
      image: 'https://image.dogman.com/preset:sharp/resize:fit:1000:0:0/width:2000/quality:100/gravity:sm/plain/https://api.dogman.com/storage/products-images/988218/988218_main_0_988218.jpg',
      badge: 'Naturalistic',
      features: ['Realistic Look', 'Easy Clean', 'Multiple Sizes'],
      category: 'Decorations'
    }
  ]

  const filteredProducts = activeCategory === 'All Products' 
    ? reptileProducts 
    : reptileProducts.filter(product => product.category === activeCategory)

  const categories = [
    { name: 'All Products', count: reptileProducts.length },
    { name: 'Heating & Lighting', count: reptileProducts.filter(p => p.category === 'Heating').length },
    { name: 'Terrariums & Habitats', count: reptileProducts.filter(p => p.category === 'Terrariums').length },
    { name: 'Food & Nutrition', count: reptileProducts.filter(p => p.category === 'Food').length },
    { name: 'Substrate & Bedding', count: reptileProducts.filter(p => p.category === 'Substrate').length },
    { name: 'Climate Control', count: reptileProducts.filter(p => p.category === 'Equipment').length },
    { name: 'Decorations & Hides', count: reptileProducts.filter(p => p.category === 'Decorations').length },
    { name: 'Health & Supplements', count: 0 },
    { name: 'Water & Humidity', count: 0 },
    { name: 'Cleaning & Maintenance', count: 0 },
    { name: 'Feeding Accessories', count: 0 },
    { name: 'Monitoring Equipment', count: 0 },
    { name: 'Transport & Travel', count: 0 }
  ]

  return (
    <div className="min-h-screen bg-ui-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-lime-500 to-lime-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <nav className="flex items-center space-x-2 text-sm mb-4">
                <Link href="/" className="text-white/80 hover:text-white">Home</Link>
                <span className="text-white/60">/</span>
                <span className="text-white">Reptiles</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                🦎 Reptile Supplies
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Complete habitat solutions for your scaly friends - from heating systems to natural decorations.
              </p>
            </div>
            <div className="hidden lg:block text-6xl opacity-20">
              🦎
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
                <Filter className="w-5 h-5 mr-2 text-pet-reptile" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                      activeCategory === category.name
                        ? 'bg-pet-reptile text-white'
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
                  {filteredProducts.length} Products Found
                </h2>
                <p className="text-sm text-ui-text-secondary">
                  Premium reptile habitat supplies
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <select className="px-4 py-2 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-pet-reptile">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Customer Rating</option>
                </select>
                <div className="flex border border-ui-border rounded-lg">
                  <button className="p-2 bg-pet-reptile text-white rounded-l-lg">
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
                    <div className="absolute top-4 left-4 bg-pet-reptile text-white text-xs font-bold px-3 py-1 rounded-full">
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
                      <span className="text-xs font-medium text-pet-reptile bg-lime-50 px-2 py-1 rounded">
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
                          category: 'Reptiles',
                          brand: product.brand
                        })}
                        className="bg-pet-reptile text-white py-2 px-4 rounded-lg hover:bg-lime-600 transition-colors flex items-center space-x-2"
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

export default ReptilesPage
