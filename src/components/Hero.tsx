'use client'

import Image from 'next/image'
import { ArrowRight, Star } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-blue via-primary-green to-primary-orange min-h-[80vh] flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 text-white">🐕</div>
        <div className="absolute top-32 right-20 w-16 h-16 text-white">🐱</div>
        <div className="absolute bottom-20 left-20 w-12 h-12 text-white">🐦</div>
        <div className="absolute bottom-32 right-32 w-14 h-14 text-white">🐠</div>
        <div className="absolute top-1/2 left-1/4 w-10 h-10 text-white">🐰</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <Star className="w-4 h-4 text-yellow-300 fill-current" />
              <span className="text-sm font-medium">Trusted by 50,000+ Pet Parents</span>
            </div>

            {/* Main heading */}
            <div>
              <h1 className="font-display text-5xl lg:text-7xl font-bold leading-tight">
                Your Pet's
                <br />
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Paradise
                </span>
                <br />
                Awaits
              </h1>
              <p className="text-xl lg:text-2xl mt-6 text-white/90 max-w-2xl">
                Premium food, engaging toys, and essential accessories for every pet. 
                From puppies to senior pets, we have everything your furry, feathered, 
                or scaled friends need to thrive.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold">10,000+</div>
                <div className="text-white/80">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-white/80">Brands</div>
              </div>
              <div>
                <div className="text-3xl font-bold">24/7</div>
                <div className="text-white/80">Support</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="bg-white text-primary-blue font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-large flex items-center justify-center group">
                Shop Now
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-primary-blue transition-all duration-200 backdrop-blur-sm">
                Browse Categories
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:h-[600px] h-[400px] animate-fade-in">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl"></div>
            <div className="absolute inset-4 rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Happy pets with premium food and toys"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-primary-orange text-white p-4 rounded-full shadow-large animate-bounce-gentle">
              <span className="text-2xl">🏆</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary-green text-white p-4 rounded-full shadow-large animate-bounce-gentle" style={{ animationDelay: '1s' }}>
              <span className="text-2xl">💖</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
