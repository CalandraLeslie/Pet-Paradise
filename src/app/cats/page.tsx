import Image from 'next/image'
import { Star, ShoppingCart, Heart, Filter, Grid, List } from 'lucide-react'
import Link from 'next/link'

const CatsPage = () => {
  const catProducts = [
    {
      id: 1,
      name: 'Premium Indoor Cat Food',
      brand: 'FelineNutrition',
      price: 39.99,
      originalPrice: 44.99,
      rating: 4.7,
      reviews: 289,
      image: 'https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&w=500',
      badge: 'Best Seller',
      features: ['Indoor Formula', 'Hairball Control', 'Natural Ingredients'],
      category: 'Food'
    },
    {
      id: 2,
      name: 'Interactive Puzzle Feeder',
      brand: 'SmartCat',
      price: 29.99,
      originalPrice: null,
      rating: 4.6,
      reviews: 156,
      image: 'https://images.pexels.com/photos/1571076/pexels-photo-1571076.jpeg?auto=compress&cs=tinysrgb&w=500',
      badge: 'New',
      features: ['Mental Stimulation', 'Slow Feeding', 'Easy Clean'],
      category: 'Toys'
    },
    {
      id: 3,
      name: 'Self-Cleaning Litter Box',
      brand: 'AutoClean',
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.8,
      reviews: 78,
      image: 'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=500',
      badge: 'Premium',
      features: ['Automatic Cleaning', 'Odor Control', 'App Connected'],
      category: 'Litter'
    },
    {
      id: 4,
      name: 'Multi-Level Cat Tree',
      brand: 'ClimbMax',
      price: 149.99,
      originalPrice: 179.99,
      rating: 4.5,
      reviews: 234,
      image: 'https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&w=500',
      badge: 'Sale',
      features: ['5 Levels', 'Scratching Posts', 'Cozy Hideouts'],
      category: 'Furniture'
    },
    {
      id: 5,
      name: 'Catnip Organic Treats',
      brand: 'NaturalMeow',
      price: 12.99,
      originalPrice: null,
      rating: 4.9,
      reviews: 167,
      image: 'https://images.pexels.com/photos/7720706/pexels-photo-7720706.jpeg?auto=compress&cs=tinysrgb&w=500',
      badge: 'Organic',
      features: ['100% Organic', 'Premium Catnip', 'Resealable Bag'],
      category: 'Treats'
    },
    {
      id: 6,
      name: 'Feather Wand Toy Set',
      brand: 'PlayTime',
      price: 18.99,
      originalPrice: null,
      rating: 4.4,
      reviews: 203,
      image: 'https://images.pexels.com/photos/7720707/pexels-photo-7720707.jpeg?auto=compress&cs=tinysrgb&w=500',
      badge: 'Popular',
      features: ['Interactive Play', 'Natural Feathers', 'Replaceable Tips'],
      category: 'Toys'
    }
  ]

  const categories = [
    { name: 'All Products', count: catProducts.length, active: true },
    { name: 'Food', count: 1, active: false },
    { name: 'Toys', count: 2, active: false },
    { name: 'Litter', count: 1, active: false },
    { name: 'Furniture', count: 1, active: false },
    { name: 'Treats', count: 1, active: false }
  ]

  return (
    <div className="min-h-screen bg-ui-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-600 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <nav className="flex items-center space-x-2 text-sm mb-4">
                <Link href="/" className="text-white/80 hover:text-white">Home</Link>
                <span className="text-white/60">/</span>
                <span className="text-white">Cats</span>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                🐱 Cat Supplies
              </h1>
              <p className="text-xl text-white/90 max-w-2xl">
                Independent spirits deserve the finest - premium nutrition, engaging entertainment, and luxurious comfort.
              </p>
            </div>
            <div className="hidden lg:block text-6xl opacity-20">
              🐱
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
                <Filter className="w-5 h-5 mr-2 text-pet-cat" />
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center justify-between ${
                      category.active
                        ? 'bg-pet-cat text-white'
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

              {/* Age Filter */}
              <div className="mt-8">
                <h4 className="font-semibold text-ui-text-primary mb-4">Age Group</h4>
                <div className="space-y-2">
                  {['Kitten', 'Adult', 'Senior', 'All Ages'].map((age) => (
                    <label key={age} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-ui-text-secondary">{age}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Special Features */}
              <div className="mt-8">
                <h4 className="font-semibold text-ui-text-primary mb-4">Special Features</h4>
                <div className="space-y-2">
                  {['Grain Free', 'Hairball Control', 'Indoor Formula', 'Organic'].map((feature) => (
                    <label key={feature} className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-ui-text-secondary">{feature}</span>
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
                  {catProducts.length} Products Found
                </h2>
                <p className="text-sm text-ui-text-secondary">
                  Everything for your feline friend
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <select className="px-4 py-2 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-pet-cat">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Customer Rating</option>
                  <option>Newest First</option>
                </select>
                <div className="flex border border-ui-border rounded-lg">
                  <button className="p-2 bg-pet-cat text-white rounded-l-lg">
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
              {catProducts.map((product) => (
                <div key={product.id} className="card p-0 hover:scale-105 cursor-pointer overflow-hidden group">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-pet-cat text-white text-xs font-bold px-3 py-1 rounded-full">
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
                      <span className="text-xs font-medium text-pet-cat bg-slate-50 px-2 py-1 rounded">
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
                      <button className="bg-pet-cat text-white py-2 px-4 rounded-lg hover:bg-slate-700 transition-colors flex items-center space-x-2">
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

export default CatsPage
