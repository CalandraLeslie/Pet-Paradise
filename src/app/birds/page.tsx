import Image from 'next/image'
import { Star, ShoppingCart, Heart, Filter, Grid, List } from 'lucide-react'
import Link from 'next/link'

const BirdsPage = () => {
  const birdProducts = [
    {
      id: 1,
      name: 'Premium Seed Mix for Parrots',
      brand: 'FeatherFresh',
      price: 24.99,
      originalPrice: 29.99,
      rating: 4.8,
      reviews: 142,
      image: 'https://images.pexels.com/photos/7210734/pexels-photo-7210734.jpeg?auto=compress&cs=tinysrgb&w=500',
      badge: 'Best Seller',
      features: ['Vitamin Enriched', 'Natural Seeds', 'No Fillers'],
      category: 'Food'
    },
    {
      id: 2,
      name: 'Large Flight Cage',
      brand: 'AviaryMax',
      price: 189.99,
      originalPrice: 219.99,
      rating: 4.6,
      reviews: 89,
      image: 'https://images.pexels.com/photos/7210734/pexels-photo-7210734.jpeg?auto=compress&cs=tinysrgb&w=500',
      badge: 'Premium',
      features: ['Spacious Design', 'Easy Assembly', 'Multiple Perches'],
      category: 'Cages'
    },
    {
      id: 3,
      name: 'Natural Wood Perch Set',
      brand: 'BranchCraft',
      price: 34.99,
      originalPrice: null,
      rating: 4.7,
      reviews: 156,
      image: 'https://images.pexels.com/photos/4033325/pexels-photo-4033325.jpeg?auto=compress&cs=tinysrgb&w=500',
      badge: 'Natural',
      features: ['Real Wood', 'Varied Diameters', 'Easy Installation'],
      category: 'Perches'
    },
    {
      id: 4,
      name: 'Interactive Foraging Toy',
      brand: 'SmartBird',
      price: 19.99,
      originalPrice: null,
      rating: 4.5,
      reviews: 98,
      image: 'https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&w=500',
      badge: 'New',
      features: ['Mental Stimulation', 'Food Dispenser', 'Colorful Design'],
      category: 'Toys'
    },
    {
      id: 5,
      name: 'Mineral Block Supplement',
      brand: 'VitalBird',
      price: 8.99,
      originalPrice: null,
      rating: 4.9,
      reviews: 203,
      image: 'https://images.pexels.com/photos/5998930/pexels-photo-5998930.jpeg?auto=compress&cs=tinysrgb&w=500',
      badge: 'Essential',
      features: ['Calcium Rich', 'Natural Minerals', 'Beak Health'],
      category: 'Supplements'
    },
    {
      id: 6,
      name: 'Travel Carrier',
      brand: 'SafeFlight',
      price: 45.99,
      originalPrice: 52.99,
      rating: 4.4,
      reviews: 67,
      image: 'https://images.pexels.com/photos/7210705/pexels-photo-7210705.jpeg?auto=compress&cs=tinysrgb&w=500',
      badge: 'Travel',
      features: ['Airline Approved', 'Ventilated', 'Secure Latches'],
      category: 'Carriers'
    }
  ]

  const categories = [
    { name: 'All Products', count: birdProducts.length, active: true },
    { name: 'Food', count: 1, active: false },
    { name: 'Cages', count: 1, active: false },
    { name: 'Perches', count: 1, active: false },
    { name: 'Toys', count: 1, active: false },
    { name: 'Supplements', count: 1, active: false },
    { name: 'Carriers', count: 1, active: false }
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
                Colorful companions deserve vibrant care - premium seeds, spacious homes, and enriching activities.
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
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                      category.active
                        ? 'bg-pet-bird text-white'
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

              {/* Bird Type Filter */}
              <div className="mt-8">
                <h4 className="font-semibold text-ui-text-primary mb-4">Bird Type</h4>
                <div className="space-y-2">
                  {['Parrots', 'Canaries', 'Finches', 'Cockatiels', 'Budgies'].map((type) => (
                    <label key={type} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-ui-text-secondary">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Cage Size Filter */}
              <div className="mt-8">
                <h4 className="font-semibold text-ui-text-primary mb-4">Cage Size</h4>
                <div className="space-y-2">
                  {['Small (18")', 'Medium (24")', 'Large (36")', 'Extra Large (48"+)'].map((size) => (
                    <label key={size} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-ui-text-secondary">{size}</span>
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
                  {birdProducts.length} Products Found
                </h2>
                <p className="text-sm text-ui-text-secondary">
                  Everything for your feathered friends
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

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {birdProducts.map((product) => (
                <div key={product.id} className="card p-0 hover:scale-105 cursor-pointer overflow-hidden group">
                  {/* Image */}
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

                  {/* Content */}
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
                      <button className="bg-pet-bird text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition-colors flex items-center space-x-2">
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

export default BirdsPage
