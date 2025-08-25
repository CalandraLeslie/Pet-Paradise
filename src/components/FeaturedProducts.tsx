'use client'

import Image from 'next/image'
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react'
import { useState } from 'react'
import { useApp } from '@/context/AppContext'

const FeaturedProducts = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)
  const { addToCart } = useApp()

  const products = [
    {
      id: 1,
      name: 'Premium Salmon Dog Food',
      brand: 'PawNutrition',
      price: 49.99,
      originalPrice: 59.99,
      rating: 4.8,
      reviews: 324,
      category: 'dog',
      categoryColor: 'text-pet-dog',
      badge: 'Best Seller',
      badgeColor: 'bg-primary-orange',
      image: 'https://get.musti.media/shops/mse/resources/ftp/productpage/6d/canagan-scottish-salmon-6d.jpg',
      features: ['High Protein', 'Grain Free', 'Natural Ingredients']
    },
    {
      id: 2,
      name: 'Interactive Cat Puzzle Feeder',
      brand: 'SmartPet',
      price: 29.99,
      originalPrice: null,
      rating: 4.6,
      reviews: 156,
      category: 'cat',
      categoryColor: 'text-pet-cat',
      badge: 'New',
      badgeColor: 'bg-primary-green',
      image: 'https://get.musti.media/shops/mse/resources/ftp/productpage/07/catit-senses-20-digger-07.jpg',
      features: ['Mental Stimulation', 'Slow Feeding', 'Easy Clean']
    },
    {
      id: 3,
      name: 'Premium Bird Seed Mix',
      brand: 'FeatherFresh',
      price: 19.99,
      originalPrice: 24.99,
      rating: 4.9,
      reviews: 89,
      category: 'bird',
      categoryColor: 'text-pet-bird',
      badge: 'Sale',
      badgeColor: 'bg-status-error',
      image: 'https://images.oda.com/prod/local_products/58cdcbf2-a320-425e-a710-c752c4bc05f6.jpg?fit=bounds&format=auto&optimize=medium&width=604&s=0x14f22acc6a1090e4c7459dcc6f838eaf9c877c48',
      features: ['Vitamin Enriched', 'All Natural', '5lb Bag']
    },
    {
      id: 4,
      name: 'Aquarium LED Light System',
      brand: 'AquaGlow',
      price: 89.99,
      originalPrice: 109.99,
      rating: 4.7,
      reviews: 234,
      category: 'fish',
      categoryColor: 'text-pet-fish',
      badge: 'Premium',
      badgeColor: 'bg-primary-blue',
      image: 'https://m.media-amazon.com/images/I/71mcQryH1fL._AC_SX466_.jpg',
      features: ['Full Spectrum', 'Remote Control', 'Energy Efficient']
    },
    {
      id: 5,
      name: 'Luxury Rabbit Hutch',
      brand: 'ComfortHomes',
      price: 149.99,
      originalPrice: 179.99,
      rating: 4.5,
      reviews: 67,
      category: 'rabbit',
      categoryColor: 'text-pet-rabbit',
      badge: 'Featured',
      badgeColor: 'bg-purple-600',
      image: 'https://www.teddytassen.se/webbshop/kanin/kaninburar--kaninhus/utomhus/large/rabbit-royal-kaninfort-med-isolerad-bodel-119cm-15621.jpg',
      features: ['Weather Resistant', 'Easy Assembly', 'Multi-Level']
    },
    {
      id: 6,
      name: 'Reptile Heat Lamp Kit',
      brand: 'ThermalCare',
      price: 39.99,
      originalPrice: null,
      rating: 4.4,
      reviews: 112,
      category: 'reptile',
      categoryColor: 'text-pet-reptile',
      badge: 'Essential',
      badgeColor: 'bg-green-600',
      image: 'https://m.media-amazon.com/images/I/61eAanBpY-S._AC_SY445_SX342_QL70_ML2_.jpg',
      features: ['UVB/UVA', 'Adjustable', 'Safe Design']
    }
  ]

  return (
    <section className="py-20 bg-ui-surface">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            Featured Products
          </h2>
          <p className="section-subtitle mx-auto">
            Hand-picked premium products that pet parents love and pets adore
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group card p-0 hover:scale-105 cursor-pointer overflow-hidden"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              {/* Image section */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                
                {/* Badge */}
                <div className={`absolute top-4 left-4 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {product.badge}
                </div>

                {/* Quick actions */}
                <div className={`absolute top-4 right-4 flex flex-col space-y-2 transition-all duration-300 ${
                  hoveredProduct === product.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}>
                  <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                    <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
                  </button>
                  <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                    <Eye className="w-4 h-4 text-gray-600 hover:text-primary-blue" />
                  </button>
                </div>

                {/* Discount badge */}
                {product.originalPrice && (
                  <div className="absolute bottom-4 left-4 bg-status-error text-white text-xs font-bold px-2 py-1 rounded">
                    {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                  </div>
                )}
              </div>

              {/* Content section */}
              <div className="p-6">
                {/* Brand and category */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-ui-text-muted font-medium">{product.brand}</span>
                  <span className={`text-xs font-medium ${product.categoryColor} uppercase tracking-wide`}>
                    {product.category}
                  </span>
                </div>

                {/* Product name */}
                <h3 className="text-lg font-semibold text-ui-text-primary mb-2 line-clamp-2">
                  {product.name}
                </h3>

                {/* Features */}
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.features.map((feature, index) => (
                    <span
                      key={index}
                      className="text-xs bg-ui-muted text-ui-text-secondary px-2 py-1 rounded"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Rating */}
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

                {/* Price and action */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-ui-text-primary">
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
                      category: product.category,
                      brand: product.brand
                    })}
                    className="btn-primary py-2 px-4 text-sm flex items-center space-x-2 hover:bg-blue-600 transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <button className="btn-secondary mr-4">
            View All Products
          </button>
          <button className="btn-primary">
            Shop by Category
          </button>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
