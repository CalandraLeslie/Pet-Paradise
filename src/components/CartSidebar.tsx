'use client'

import React from 'react'
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useApp } from '@/context/AppContext'

interface CartSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { cart, cartTotal, cartCount, updateCartQuantity, removeFromCart, clearCart } = useApp()

  if (!isOpen) return null

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(id)
    } else {
      updateCartQuantity(id, newQuantity)
    }
  }

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
        onClick={onClose}
      />
      
      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-ui-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-primary-blue" />
            <h2 className="text-xl font-bold text-ui-text-primary">
              Shopping Cart ({cartCount})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-ui-background-subtle rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Content */}
        <div className="flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-8">
              <ShoppingBag className="w-16 h-16 text-ui-text-muted mb-4" />
              <h3 className="text-lg font-semibold text-ui-text-primary mb-2">
                Your cart is empty
              </h3>
              <p className="text-ui-text-secondary mb-6">
                Add some products to get started
              </p>
              <button
                onClick={onClose}
                className="bg-primary-blue text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="p-6">
              {/* Clear Cart Button */}
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="w-full mb-4 text-sm text-red-600 hover:text-red-700 hover:bg-red-50 py-2 px-3 rounded-lg transition-colors"
                >
                  Clear Cart
                </button>
              )}

              {/* Cart Items */}
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 bg-ui-background-subtle rounded-lg p-4">
                    {/* Product Image */}
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-ui-text-primary text-sm mb-1 line-clamp-2">
                        {item.name}
                      </h3>
                      <p className="text-xs text-ui-text-muted mb-2">{item.brand}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-ui-text-primary">
                          {formatPrice(item.price)}
                        </span>
                        <span className="text-xs text-ui-text-muted bg-ui-background px-2 py-1 rounded-full">
                          {item.category}
                        </span>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}

                {cart.map((item) => (
                  <div key={`quantity-${item.id}`} className="flex items-center justify-between bg-white rounded-lg p-3 border border-ui-border">
                    <span className="font-medium text-sm text-ui-text-primary truncate max-w-32">
                      {item.name}
                    </span>
                    
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-ui-background-subtle rounded-full transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      
                      <span className="font-semibold min-w-8 text-center">
                        {item.quantity}
                      </span>
                      
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-ui-background-subtle rounded-full transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <span className="font-bold text-sm min-w-16 text-right">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-ui-border p-6 bg-ui-background-subtle">
            {/* Order Summary */}
            <div className="space-y-3 mb-4">
              <div className="flex justify-between text-sm">
                <span className="text-ui-text-secondary">Subtotal</span>
                <span className="font-medium">{formatPrice(cartTotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-ui-text-secondary">Shipping</span>
                <span className="font-medium text-primary-green">
                  {cartTotal >= 50 ? 'Free' : formatPrice(9.99)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-ui-text-secondary">Tax</span>
                <span className="font-medium">{formatPrice(cartTotal * 0.08)}</span>
              </div>
              <hr className="border-ui-border" />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>{formatPrice(cartTotal + (cartTotal >= 50 ? 0 : 9.99) + (cartTotal * 0.08))}</span>
              </div>
            </div>

            {/* Free Shipping Notice */}
            {cartTotal < 50 && (
              <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  Add {formatPrice(50 - cartTotal)} more for free shipping!
                </p>
              </div>
            )}

            {/* Checkout Button */}
            <Link
              href="/checkout"
              onClick={onClose}
              className="w-full bg-primary-blue text-white py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors font-medium flex items-center justify-center gap-2"
            >
              Proceed to Checkout
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Continue Shopping */}
            <button
              onClick={onClose}
              className="w-full mt-3 text-ui-text-secondary hover:text-ui-text-primary py-2 px-4 rounded-lg hover:bg-ui-background transition-colors text-sm"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  )
}
