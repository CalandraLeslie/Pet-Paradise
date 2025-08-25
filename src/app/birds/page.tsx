'use client'

import Image from 'next/image'
import { Star, ShoppingCart, Heart, Filter, Grid, List } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useApp } from '@/context/AppContext'

const BirdsPage = () => {
  const { addToCart } = useApp()
  const [activeCategory, setActiveCategory] = useState('All Products')
  
  const birdProducts = [
    {
      id: 1,
      name: 'Premium Seed Mix for Parrots',
      brand: 'AvianNutrition',
      price: 32.99,
      originalPrice: 39.99,
      rating: 4.8,
      reviews: 156,
      image: 'https://get.musti.media/shops/mse/resources/ftp/productpage/8d/versele-laga-prestige-loro-parque-amazon-parrot-mix-1kg-8d.jpg',
      badge: 'Best Seller',
      features: ['Sunflower Seeds', 'Nuts & Fruits', 'Vitamin Enriched'],
      category: 'Food'
    },
    {
      id: 2,
      name: 'Large Flight Cage',
      brand: 'BirdHomes',
      price: 189.99,
      originalPrice: 229.99,
      rating: 4.7,
      reviews: 89,
      image: 'https://m.media-amazon.com/images/I/7192poH7vqL._AC_SX679_.jpg',
      badge: 'Sale',
      features: ['Spacious Design', 'Easy Clean', 'Multiple Perches'],
      category: 'Cages'
    },
    {
      id: 3,
      name: 'Natural Wood Perch Set',
      brand: 'NaturePerch',
      price: 24.99,
      originalPrice: null,
      rating: 4.6,
      reviews: 234,
      image: 'https://media.zooplus.com/bilder/4/400/49948_PLA_Trixie_sandgestrahlte_Weinreben_4.jpg',
      badge: 'Natural',
      features: ['Apple Wood', 'Various Sizes', 'Foot Health'],
      category: 'Perches'
    },
    {
      id: 4,
      name: 'Interactive Puzzle Toy',
      brand: 'BirdBrain',
      price: 29.99,
      originalPrice: null,
      rating: 4.9,
      reviews: 67,
      image: 'https://get.musti.media/shops/mse/resources/ftp/productpage/9a/fagellekpark-9a.jpg',
      badge: 'New',
      features: ['Mental Stimulation', 'Foraging Fun', 'Durable'],
      category: 'Toys'
    },
    {
      id: 5,
      name: 'Cuttlebone & Mineral Block',
      brand: 'HealthyBeak',
      price: 8.99,
      originalPrice: null,
      rating: 4.5,
      reviews: 198,
      image: 'https://images.zoo.se/5cf4c49e-33f5-495e-bbb4-a012da5307c1?auto=format&q=80&f=webp&w=1050',
      badge: 'Essential',
      features: ['Calcium Source', 'Beak Health', 'Natural'],
      category: 'Health'
    },
    {
      id: 6,
      name: 'Stainless Steel Food Bowls',
      brand: 'CleanFeeding',
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.4,
      reviews: 123,
      image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQnhK8DGkYZLP2PTH86P45qdNZY1pB1iBrz2JF5JEG-aPc1qPA_FIMt5XwkCcQTpVEKHhG1LqgxHS2DECN7BmmbOtKIzBOTVVDkiWY2tJqUNG0L04zdw2Sr',
      badge: 'Hygienic',
      features: ['Easy Clean', 'Rust Resistant', 'Dishwasher Safe'],
      category: 'Accessories'
    }
  ]

  // Filter products based on active category
  const filteredProducts = activeCategory === 'All Products' 
    ? birdProducts 
    : birdProducts.filter(product => product.category === activeCategory)

  const categories = [
    { name: 'All Products', count: birdProducts.length },
    { name: 'Food & Seeds', count: birdProducts.filter(p => p.category === 'Food').length },
    { name: 'Cages & Aviaries', count: birdProducts.filter(p => p.category === 'Cages').length },
    { name: 'Perches & Stands', count: birdProducts.filter(p => p.category === 'Perches').length },
    { name: 'Toys & Enrichment', count: birdProducts.filter(p => p.category === 'Toys').length },
    { name: 'Health & Supplements', count: birdProducts.filter(p => p.category === 'Health').length },
    { name: 'Feeding Accessories', count: birdProducts.filter(p => p.category === 'Accessories').length },
    { name: 'Nesting & Breeding', count: 0 },
    { name: 'Grooming & Care', count: 0 },
    { name: 'Travel & Transport', count: 0 },
    { name: 'Cleaning & Maintenance', count: 0 },
    { name: 'Training & Behavior', count: 0 }
  ]

  return (
    <div className="min-h-screen bg-ui-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <nav className="flex items-center space-x-2 text-sm mb-4">
                <Link href="/" className="text-white/80 hover:text-white">Home</Link>
                <span className="text-white/60">/</span>
                <span className="text-white">Birds</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                🐦 Bird Supplies
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Everything your feathered friends need - from nutritious seeds to spacious cages and engaging toys.
              </p>
            </div>
            <div className="hidden lg:block text-6xl opacity-20">
              🐦
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
                <Filter className="w-5 h-5 mr-2 text-pet-bird" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                      activeCategory === category.name
                        ? 'bg-pet-bird text-white'
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

              {/* Price Filter */}
              <div className="mt-8">
                <h4 className="font-semibold text-ui-text-primary mb-4">Price Range</h4>
                <div className="space-y-2">
                  {['Under $15', '$15 - $30', '$30 - $100', 'Over $100'].map((range) => (
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
                  {['AvianNutrition', 'BirdHomes', 'NaturePerch', 'BirdBrain'].map((brand) => (
                    <label key={brand} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-ui-text-secondary">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Same structure as dogs page but with bird-specific styling */}
          <div className="lg:col-span-3">
            {/* Products Grid - Same as dogs but with pet-bird color scheme */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div>
                <h2 className="text-xl font-semibold text-ui-text-primary">
                  {filteredProducts.length} Products Found
                </h2>
                <p className="text-sm text-ui-text-secondary">
                  {activeCategory === 'All Products' ? 'Premium bird supplies for every species' : `${activeCategory} products`}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <select className="px-4 py-2 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-pet-bird">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Customer Rating</option>
                  <option>Newest First</option>
                </select>
                <div className="flex border border-ui-border rounded-lg">
                  <button className="p-2 bg-pet-bird text-white rounded-l-lg">
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
                    <div className="absolute top-4 left-4 bg-pet-bird text-white text-xs font-bold px-3 py-1 rounded-full">
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
                      <span className="text-xs font-medium text-pet-bird bg-yellow-50 px-2 py-1 rounded">
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
                          category: 'Birds',
                          brand: product.brand
                        })}
                        className="bg-pet-bird text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors flex items-center space-x-2"
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

export default BirdsPage
