'use client'

import { useState } from 'react'
import { ShoppingCart, Search, Menu, X, Heart, User } from 'lucide-react'
import SearchOverlay from './SearchOverlay'
import AuthModal from './AuthModal'
import CartSidebar from './CartSidebar'
import Link from 'next/link'
import { useApp } from '@/context/AppContext'
import { usePathname } from 'next/navigation'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { cartCount, isAuthenticated, user, logout } = useApp()
  const pathname = usePathname()

  const categories = [
    { name: 'Dogs', color: 'text-pet-dog', href: '/dogs' },
    { name: 'Cats', color: 'text-pet-cat', href: '/cats' },
    { name: 'Birds', color: 'text-pet-bird', href: '/birds' },
    { name: 'Fish', color: 'text-pet-fish', href: '/fish' },
    { name: 'Small Pets', color: 'text-pet-rabbit', href: '/small-pets' },
    { name: 'Reptiles', color: 'text-pet-reptile', href: '/reptiles' },
  ]

  return (
    <header className="bg-ui-surface shadow-soft sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary-blue text-white py-2">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm font-medium">
            🎉 Free shipping on orders over $50! Use code: PARADISE50
          </p>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-blue to-primary-green rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">🐾</span>
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold text-ui-text-primary">
                Pet Paradise
              </h1>
              <p className="text-xs text-ui-text-secondary">Premium Pet Care</p>
            </div>
          </div>

          {/* Search bar - Desktop */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for pet food, toys, accessories..."
                onClick={() => setIsSearchOpen(true)}
                readOnly
                className="w-full px-4 py-3 pl-12 pr-4 border border-ui-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent cursor-pointer"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-ui-text-muted w-5 h-5" />
            </div>
          </div>

          {/* Header actions */}
          <div className="flex items-center space-x-4">
            {/* User account */}
            {isAuthenticated ? (
              <div className="hidden md:flex items-center space-x-2">
                <button 
                  className="flex items-center space-x-2 text-ui-text-secondary hover:text-primary-blue transition-colors"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <User className="w-5 h-5" />
                  <span className="text-sm font-medium">Hi, {user?.firstName}</span>
                </button>
                <button
                  onClick={logout}
                  className="text-sm text-ui-text-muted hover:text-red-600 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <button 
                className="hidden md:flex items-center space-x-2 text-ui-text-secondary hover:text-primary-blue transition-colors"
                onClick={() => setIsAuthModalOpen(true)}
              >
                <User className="w-5 h-5" />
                <span className="text-sm font-medium">Sign In</span>
              </button>
            )}

            {/* Wishlist */}
            <button className="relative p-2 text-ui-text-secondary hover:text-primary-blue transition-colors">
              <Heart className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 bg-primary-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>

            {/* Cart */}
            <button 
              className="relative p-2 text-ui-text-secondary hover:text-primary-blue transition-colors"
              onClick={() => setIsCartOpen(true)}
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-ui-text-secondary hover:text-primary-blue transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              onClick={() => setIsSearchOpen(true)}
              readOnly
              className="w-full px-4 py-3 pl-12 pr-4 border border-ui-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent cursor-pointer"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-ui-text-muted w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="border-t border-ui-border">
        <div className="max-w-7xl mx-auto px-4">
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center justify-center space-x-8 py-4">
            <Link
              href="/"
              className={`font-medium transition-colors ${
                pathname === '/' 
                  ? 'text-primary-blue border-b-2 border-primary-blue' 
                  : 'text-ui-text-secondary hover:text-primary-blue'
              }`}
            >
              Home
            </Link>
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className={`font-medium transition-colors ${
                  pathname === category.href 
                    ? `${category.color} border-b-2 border-ui-text-primary` 
                    : 'text-ui-text-secondary hover:${category.color}'
                }`}
              >
                {category.name}
              </Link>
            ))}
            <Link href="/sale" className={`font-medium transition-colors ${pathname === '/sale' ? 'text-red-500 border-b-2 border-red-500' : 'text-red-500 hover:text-red-600'}`}>
              Sale
            </Link>
            <Link href="/new-arrivals" className={`font-medium transition-colors ${pathname === '/new-arrivals' ? 'text-orange-500 border-b-2 border-orange-500' : 'text-orange-500 hover:text-orange-600'}`}>
              New Arrivals
            </Link>
          </div>

          {/* Mobile navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-4 animate-slide-up">
              <Link
                href="/"
                className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                  pathname === '/' 
                    ? 'bg-primary-blue text-white' 
                    : 'text-ui-text-secondary hover:bg-ui-muted'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className={`block w-full text-left font-medium ${category.color} py-2`}
                >
                  {category.name}
                </Link>
              ))}
              <Link href="/sale" className="block w-full text-left font-medium text-ui-text-secondary py-2">
                Sale
              </Link>
              <Link href="/new-arrivals" className="block w-full text-left font-medium text-ui-text-secondary py-2">
                New Arrivals
              </Link>
              <hr className="border-ui-border" />
              {isAuthenticated ? (
                <div className="space-y-2">
                  <button className="block w-full text-left font-medium text-ui-text-secondary py-2">
                    My Account
                  </button>
                  <button 
                    onClick={logout}
                    className="block w-full text-left font-medium text-red-600 py-2"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => setIsAuthModalOpen(true)}
                  className="block w-full text-left font-medium text-ui-text-secondary py-2"
                >
                  Sign In
                </button>
              )}
            </div>
          )}
        </div>
      </nav>
      
      {/* Overlays and Modals */}
      <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  )
}

export default Header
