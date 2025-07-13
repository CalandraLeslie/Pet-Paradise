'use client'

import { useState } from 'react'
import { Search, Filter, X, SlidersHorizontal } from 'lucide-react'

interface SearchFilters {
  category: string
  priceRange: string
  brand: string
  rating: number
}

const SearchOverlay = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [filters, setFilters] = useState<SearchFilters>({
    category: '',
    priceRange: '',
    brand: '',
    rating: 0
  })

  const categories = ['Dogs', 'Cats', 'Birds', 'Fish', 'Small Pets', 'Reptiles']
  const priceRanges = ['Under $25', '$25-$50', '$50-$100', 'Over $100']
  const brands = ['PawNutrition', 'SmartPet', 'FeatherFresh', 'AquaGlow', 'ComfortHomes', 'ThermalCare']

  const handleSearch = () => {
    // Implementation for search functionality
    console.log('Searching for:', searchTerm, 'with filters:', filters)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
      <div className="bg-ui-surface rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[80vh] overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-ui-border">
          <h3 className="text-xl font-bold text-ui-text-primary">Search Products</h3>
          <button
            onClick={onClose}
            className="p-2 hover:bg-ui-muted rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input */}
        <div className="p-6">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search for pet food, toys, accessories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-12 pr-20 border border-ui-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent text-lg"
              autoFocus
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-ui-text-muted w-5 h-5" />
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`absolute right-12 top-1/2 transform -translate-y-1/2 p-2 rounded-lg transition-colors ${
                showFilters ? 'bg-primary-blue text-white' : 'text-ui-text-muted hover:bg-ui-muted'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
            <button
              onClick={handleSearch}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary-blue text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Go
            </button>
          </div>

          {/* Quick Search Suggestions */}
          <div className="mb-6">
            <p className="text-sm text-ui-text-muted mb-3">Popular searches:</p>
            <div className="flex flex-wrap gap-2">
              {['Dog food', 'Cat toys', 'Bird cage', 'Fish tank', 'Training treats'].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => setSearchTerm(suggestion)}
                  className="text-sm bg-ui-muted text-ui-text-secondary px-3 py-1 rounded-full hover:bg-primary-blue hover:text-white transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="space-y-6 border-t border-ui-border pt-6">
              <h4 className="font-semibold text-ui-text-primary flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </h4>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-ui-text-primary mb-2">Category</label>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters({ ...filters, category: e.target.value })}
                  className="w-full px-4 py-2 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                >
                  <option value="">All Categories</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-sm font-medium text-ui-text-primary mb-2">Price Range</label>
                <select
                  value={filters.priceRange}
                  onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
                  className="w-full px-4 py-2 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                >
                  <option value="">Any Price</option>
                  {priceRanges.map((range) => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              {/* Brand Filter */}
              <div>
                <label className="block text-sm font-medium text-ui-text-primary mb-2">Brand</label>
                <select
                  value={filters.brand}
                  onChange={(e) => setFilters({ ...filters, brand: e.target.value })}
                  className="w-full px-4 py-2 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue"
                >
                  <option value="">All Brands</option>
                  {brands.map((brand) => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>

              {/* Rating Filter */}
              <div>
                <label className="block text-sm font-medium text-ui-text-primary mb-2">Minimum Rating</label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => setFilters({ ...filters, rating })}
                      className={`px-3 py-2 rounded-lg border transition-colors ${
                        filters.rating === rating
                          ? 'bg-primary-blue text-white border-primary-blue'
                          : 'border-ui-border hover:border-primary-blue'
                      }`}
                    >
                      {rating}★+
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => setFilters({ category: '', priceRange: '', brand: '', rating: 0 })}
                className="text-sm text-primary-blue hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-6">
            <button
              onClick={handleSearch}
              className="flex-1 btn-primary"
            >
              Search Products
            </button>
            <button
              onClick={onClose}
              className="flex-1 btn-secondary"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchOverlay
