'use client'

import Image from 'next/image'
import { Star, ShoppingCart, Heart, Filter, Grid, List } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { useApp } from '@/context/AppContext'

const FishPage = () => {
  const { addToCart } = useApp()
  const [activeCategory, setActiveCategory] = useState('All Products')
  
  const fishProducts = [
    {
      id: 1,
      name: 'Tropical Fish Flakes',
      brand: 'AquaNutrition',
      price: 18.99,
      originalPrice: 22.99,
      rating: 4.7,
      reviews: 342,
      image: 'https://m.media-amazon.com/images/I/616f2mjXAoL._AC_SY300_SX300_QL70_ML2_.jpg',
      badge: 'Best Seller',
      features: ['Color Enhancing', 'High Protein', 'Easy Digest'],
      category: 'Food'
    },
    {
      id: 2,
      name: '20 Gallon Glass Aquarium',
      brand: 'ClearWater',
      price: 129.99,
      originalPrice: 149.99,
      rating: 4.8,
      reviews: 156,
      image: 'https://images.zoo.se/882acfab-495d-470a-838e-b9423815521c?auto=format&q=80&f=webp&w=1050',
      badge: 'Sale',
      features: ['Crystal Clear', 'Complete Kit', 'LED Lighting'],
      category: 'Tanks'
    },
    {
      id: 3,
      name: 'Canister Filter System',
      brand: 'AquaClear',
      price: 89.99,
      originalPrice: null,
      rating: 4.9,
      reviews: 89,
      image: 'https://m.media-amazon.com/images/I/61gx8-bEbOL._AC_SY300_SX300_QL70_ML2_.jpg',
      badge: 'Premium',
      features: ['Multi-Stage', 'Quiet Operation', 'Easy Maintenance'],
      category: 'Filters'
    },
    {
      id: 4,
      name: 'Artificial Coral Decorations',
      brand: 'ReefDecor',
      price: 34.99,
      originalPrice: null,
      rating: 4.6,
      reviews: 198,
      image: 'https://m.media-amazon.com/images/I/71e-NeC9WCL._AC_SX569_.jpg',
      badge: 'Colorful',
      features: ['Safe Materials', 'Realistic Look', 'Easy Clean'],
      category: 'Decorations'
    },
    {
      id: 5,
      name: 'Adjustable Aquarium Heater',
      brand: 'ThermoAqua',
      price: 24.99,
      originalPrice: 29.99,
      rating: 4.5,
      reviews: 234,
      image: 'https://m.media-amazon.com/images/I/61WaCD5LgzL._AC_SY879_.jpg',
      badge: 'Essential',
      features: ['Temperature Control', 'Auto Shut-off', 'Submersible'],
      category: 'Equipment'
    },
    {
      id: 6,
      name: 'Live Plant Starter Pack',
      brand: 'GreenAqua',
      price: 39.99,
      originalPrice: null,
      rating: 4.4,
      reviews: 167,
      image: 'https://m.media-amazon.com/images/I/81XT1kWysqL._AC_SX569_.jpg',
      badge: 'Natural',
      features: ['Oxygen Producing', 'Low Maintenance', 'Fish Safe'],
      category: 'Plants'
    }
  ]

  // Filter products based on active category
  const filteredProducts = activeCategory === 'All Products' 
    ? fishProducts 
    : fishProducts.filter(product => product.category === activeCategory)

  const categories = [
    { name: 'All Products', count: fishProducts.length },
    { name: 'Fish Food', count: fishProducts.filter(p => p.category === 'Food').length },
    { name: 'Aquariums & Tanks', count: fishProducts.filter(p => p.category === 'Tanks').length },
    { name: 'Filtration Systems', count: fishProducts.filter(p => p.category === 'Filters').length },
    { name: 'Heating & Lighting', count: fishProducts.filter(p => p.category === 'Equipment').length },
    { name: 'Decorations & Ornaments', count: fishProducts.filter(p => p.category === 'Decorations').length },
    { name: 'Live Plants', count: fishProducts.filter(p => p.category === 'Plants').length },
    { name: 'Water Treatment', count: 0 },
    { name: 'Substrate & Gravel', count: 0 },
    { name: 'Air Pumps & Accessories', count: 0 },
    { name: 'Testing & Monitoring', count: 0 },
    { name: 'Cleaning & Maintenance', count: 0 },
    { name: 'Marine & Saltwater', count: 0 }
  ]

  return (
    <div className="min-h-screen bg-ui-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-500 to-cyan-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <nav className="flex items-center space-x-2 text-sm mb-4">
                <Link href="/" className="text-white/80 hover:text-white">Home</Link>
                <span className="text-white/60">/</span>
                <span className="text-white">Fish</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                🐠 Fish Supplies
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Everything for your aquatic friends - from premium food to complete tank setups and beautiful decorations.
              </p>
            </div>
            <div className="hidden lg:block text-6xl opacity-20">
              🐠
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
                <Filter className="w-5 h-5 mr-2 text-pet-fish" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                      activeCategory === category.name
                        ? 'bg-pet-fish text-white'
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
                  {['AquaNutrition', 'ClearWater', 'AquaClear', 'ReefDecor'].map((brand) => (
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
                  {filteredProducts.length} Products Found
                </h2>
                <p className="text-sm text-ui-text-secondary">
                  {activeCategory === 'All Products' ? 'Premium aquarium supplies for healthy fish' : `${activeCategory} products`}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <select className="px-4 py-2 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-pet-fish">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Customer Rating</option>
                  <option>Newest First</option>
                </select>
                <div className="flex border border-ui-border rounded-lg">
                  <button className="p-2 bg-pet-fish text-white rounded-l-lg">
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
                    <div className="absolute top-4 left-4 bg-pet-fish text-white text-xs font-bold px-3 py-1 rounded-full">
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
                      <span className="text-xs font-medium text-pet-fish bg-cyan-50 px-2 py-1 rounded">
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
                          category: 'Fish',
                          brand: product.brand
                        })}
                        className="bg-pet-fish text-white py-2 px-4 rounded-lg hover:bg-cyan-600 transition-colors flex items-center space-x-2"
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

export default FishPage
