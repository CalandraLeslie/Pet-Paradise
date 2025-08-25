'use client'

import { Star, Quote, ThumbsUp, Filter } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

const ReviewsPage = () => {
  const [filterRating, setFilterRating] = useState('all')
  const [filterCategory, setFilterCategory] = useState('all')

  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      location: "California",
      rating: 5,
      date: "March 2024",
      category: "Dogs",
      product: "Premium Salmon Dog Food",
      review: "My golden retriever absolutely loves this food! I've noticed his coat is shinier and he has more energy. The delivery was super fast too.",
      verified: true,
      helpful: 24
    },
    {
      id: 2,
      name: "Mike R.",
      location: "Texas",
      rating: 5,
      date: "March 2024",
      category: "Cats",
      product: "Interactive Cat Puzzle Feeder",
      review: "This puzzle feeder has been a game-changer for my cat who was eating too fast. Great quality and my cat is much more engaged during meals.",
      verified: true,
      helpful: 18
    },
    {
      id: 3,
      name: "Jennifer L.",
      location: "New York",
      rating: 4,
      date: "February 2024",
      category: "Birds",
      product: "Large Flight Cage",
      review: "Excellent cage with plenty of space for my parrots. Assembly was straightforward and the build quality is impressive. Would recommend!",
      verified: true,
      helpful: 15
    },
    {
      id: 4,
      name: "David K.",
      location: "Florida",
      rating: 5,
      date: "February 2024",
      category: "Fish",
      product: "20 Gallon Aquarium Kit",
      review: "Perfect starter kit! Everything I needed was included and the instructions were clear. My fish are thriving in their new home.",
      verified: true,
      helpful: 32
    },
    {
      id: 5,
      name: "Lisa P.",
      location: "Oregon",
      rating: 5,
      date: "January 2024",
      category: "Small Pets",
      product: "Rabbit Hutch",
      review: "Amazing quality hutch for my rabbits. It's spacious, well-ventilated, and weather-resistant. Customer service was also excellent.",
      verified: true,
      helpful: 21
    },
    {
      id: 6,
      name: "Robert T.",
      location: "Colorado",
      rating: 4,
      date: "January 2024",
      category: "Reptiles",
      product: "Reptile Heat Lamp",
      review: "Good heat lamp that maintains consistent temperature. My bearded dragon seems much more comfortable now. Fast shipping!",
      verified: true,
      helpful: 12
    }
  ]

  const filteredReviews = reviews.filter(review => {
    const ratingMatch = filterRating === 'all' || review.rating.toString() === filterRating
    const categoryMatch = filterCategory === 'all' || review.category === filterCategory
    return ratingMatch && categoryMatch
  })

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  const ratingDistribution = [5, 4, 3, 2, 1].map(star => 
    reviews.filter(review => review.rating === star).length
  )

  return (
    <div className="min-h-screen bg-ui-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-primary-orange text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm mb-4">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-white">Reviews</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <Star className="inline w-12 h-12 mr-4" />
            Customer Reviews
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            See what pet parents are saying about their Pet Paradise experience.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Review Summary */}
        <div className="card p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-6xl font-bold text-primary-orange mb-2">
                {averageRating.toFixed(1)}
              </div>
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-6 h-6 ${
                      i < Math.floor(averageRating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-ui-text-secondary">Based on {reviews.length} reviews</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Rating Distribution</h3>
              {ratingDistribution.map((count, index) => (
                <div key={index} className="flex items-center mb-2">
                  <span className="w-8 text-sm">{5 - index}★</span>
                  <div className="flex-1 bg-ui-muted rounded-full h-2 mx-3">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{ width: `${(count / reviews.length) * 100}%` }}
                    ></div>
                  </div>
                  <span className="w-8 text-sm text-ui-text-secondary">{count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="card p-6 mb-8">
          <div className="flex flex-wrap gap-4 items-center">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-ui-text-secondary" />
              <span className="font-medium">Filter by:</span>
            </div>
            <select
              value={filterRating}
              onChange={(e) => setFilterRating(e.target.value)}
              className="px-3 py-2 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange"
            >
              <option value="all">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
              <option value="2">2 Stars</option>
              <option value="1">1 Star</option>
            </select>
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-3 py-2 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-orange"
            >
              <option value="all">All Categories</option>
              <option value="Dogs">Dogs</option>
              <option value="Cats">Cats</option>
              <option value="Birds">Birds</option>
              <option value="Fish">Fish</option>
              <option value="Small Pets">Small Pets</option>
              <option value="Reptiles">Reptiles</option>
            </select>
          </div>
        </div>

        {/* Reviews */}
        <div className="space-y-6">
          {filteredReviews.map((review) => (
            <div key={review.id} className="card p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-semibold text-ui-text-primary">{review.name}</h3>
                    {review.verified && (
                      <span className="bg-primary-green text-white text-xs px-2 py-1 rounded">
                        Verified Purchase
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-ui-text-secondary">
                    <span>{review.location}</span>
                    <span>{review.date}</span>
                    <span className="bg-ui-muted px-2 py-1 rounded">{review.category}</span>
                  </div>
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className="font-medium text-ui-text-primary mb-2">{review.product}</p>
                <div className="flex items-start space-x-3">
                  <Quote className="w-5 h-5 text-ui-text-muted mt-1 flex-shrink-0" />
                  <p className="text-ui-text-secondary">{review.review}</p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-ui-border">
                <button className="flex items-center space-x-2 text-ui-text-secondary hover:text-primary-orange">
                  <ThumbsUp className="w-4 h-4" />
                  <span>Helpful ({review.helpful})</span>
                </button>
                <span className="text-sm text-ui-text-muted">
                  Verified purchase on {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Write Review CTA */}
        <div className="card p-8 text-center bg-primary-orange text-white mt-12">
          <h3 className="text-2xl font-bold mb-4">Share Your Experience</h3>
          <p className="mb-6">Help other pet parents by sharing your review of Pet Paradise products.</p>
          <button className="btn-secondary bg-white text-primary-orange hover:bg-gray-100">
            Write a Review
          </button>
        </div>
      </div>
    </div>
  )
}

export default ReviewsPage
