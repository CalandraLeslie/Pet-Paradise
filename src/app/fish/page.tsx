import Image from 'next/image'
import { Star, ShoppingCart, Heart, Filter, Grid, List } from 'lucide-react'
import Link from 'next/link'

const FishPage = () => {
  const fishProducts = [
    {
      id: 1,
      name: 'Tropical Fish Flakes',
      brand: 'AquaNutrition',
      price: 16.99,
      originalPrice: 19.99,
      rating: 4.7,
      reviews: 234,
      image: 'https://images.pexels.com/photos/1123982/pexels-photo-1123982.jpeg?auto=compress&cs=tinysrgb&w=500',
      badge: 'Best Seller',
      features: ['Complete Nutrition', 'Color Enhancing', 'Easy Digestion'],
      category: 'Food'
    },
    {
      id: 2,
      name: 'LED Aquarium Light System',
      brand: 'AquaGlow',
      price: 89.99,
      originalPrice: 109.99,
      rating: 4.8,
      reviews: 156,
      image: 'https://images.pexels.com/photos/6765025/pexels-photo-6765025.jpeg?auto=compress&cs=tinysrgb&w=500',
      badge: 'Premium',
      features: ['Full Spectrum', 'Remote Control', 'Energy Efficient'],
      category: 'Lighting'
    },
    {
      id: 3,
      name: '20 Gallon Aquarium Kit',
      brand: 'ClearView',
      price: 149.99,
      originalPrice: 179.99,
      rating: 4.6,
      reviews: 89,
      image: 'https://images.pexels.com/photos/6765026/pexels-photo-6765026.jpeg?auto=compress&cs=tinysrgb&w=500',
      badge: 'Complete Kit',
      features: ['Filter Included', 'LED Hood', 'Easy Setup'],
      category: 'Tanks'
    },
    {
      id: 4,
      name: 'Aquarium Heater 100W',
      brand: 'ThermoFish',
      price: 24.99,
      originalPrice: null,
      rating: 4.5,
      reviews: 198,
      image: 'https://images.pexels.com/photos/9656066/pexels-photo-9656066.jpeg?auto=compress&cs=tinysrgb&w=500',
      badge: 'Essential',
      features: ['Adjustable Temperature', 'Auto Shut-off', 'Suction Cups'],
      category: 'Heating'
    },
    {
      id: 5,
      name: 'Natural Aquarium Plants',
      brand: 'PlantLife',
      price: 12.99,
      originalPrice: null,
      rating: 4.9,
      reviews: 167,
      image: 'https://images.pexels.com/photos/1123982/pexels-photo-1123982.jpeg?auto=compress&cs=tinysrgb&w=500',
      badge: 'Live Plants',
      features: ['Oxygenating', 'Natural Habitat', 'Easy Care'],
      category: 'Plants'
    },
    {
      id: 6,
      name: 'Gravel Vacuum Cleaner',
      brand: 'AquaClean',
      price: 18.99,
      originalPrice: null,
      rating: 4.4,
      reviews: 143,
      image: 'https://images.pexels.com/photos/6765027/pexels-photo-6765027.jpeg?auto=compress&cs=tinysrgb&w=500',
      badge: 'Maintenance',
      features: ['Easy Operation', 'Debris Removal', 'Water Change'],
      category: 'Maintenance'
    }
  ]

  const categories = [
    { name: 'All Products', count: fishProducts.length, active: true },
    { name: 'Food', count: 1, active: false },
    { name: 'Tanks', count: 1, active: false },
    { name: 'Lighting', count: 1, active: false },
    { name: 'Heating', count: 1, active: false },
    { name: 'Plants', count: 1, active: false },
    { name: 'Maintenance', count: 1, active: false }
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
                <span className="text-white">Fish & Aquatic</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                🐠 Fish & Aquatic Supplies
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Create underwater worlds - premium nutrition, crystal-clear tanks, and aquatic ecosystems.
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
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                      category.active
                        ? 'bg-pet-fish text-white'
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

              {/* Fish Type Filter */}
              <div className="mt-8">
                <h4 className="font-semibold text-ui-text-primary mb-4">Fish Type</h4>
                <div className="space-y-2">
                  {['Tropical', 'Goldfish', 'Betta', 'Saltwater', 'Koi'].map((type) => (
                    <label key={type} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-ui-text-secondary">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Tank Size Filter */}
              <div className="mt-8">
                <h4 className="font-semibold text-ui-text-primary mb-4">Tank Size</h4>
                <div className="space-y-2">
                  {['5-10 Gallon', '20-30 Gallon', '40-55 Gallon', '75+ Gallon'].map((size) => (
                    <label key={size} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-ui-text-secondary">{size}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Water Type Filter */}
              <div className="mt-8">
                <h4 className="font-semibold text-ui-text-primary mb-4">Water Type</h4>
                <div className="space-y-2">
                  {['Freshwater', 'Saltwater', 'Both'].map((water) => (
                    <label key={water} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-ui-text-secondary">{water}</span>
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
                  {fishProducts.length} Products Found
                </h2>
                <p className="text-sm text-ui-text-secondary">
                  Complete aquatic solutions
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

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {fishProducts.map((product) => (
                <div key={product.id} className="card p-0 hover:scale-105 cursor-pointer overflow-hidden group">
                  {/* Image */}
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

                  {/* Content */}
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
                      <button className="bg-pet-fish text-white py-2 px-4 rounded-lg hover:bg-cyan-600 transition-colors flex items-center space-x-2">
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
