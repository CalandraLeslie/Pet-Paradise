'use client'

import { useState } from 'react'
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
  category: string
}

const FloatingCart = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Premium Salmon Dog Food',
      price: 49.99,
      quantity: 1,
      image: 'https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'Dog'
    },
    {
      id: 2,
      name: 'Interactive Cat Puzzle',
      price: 29.99,
      quantity: 2,
      image: 'https://images.pexels.com/photos/1276553/pexels-photo-1276553.jpeg?auto=compress&cs=tinysrgb&w=100',
      category: 'Cat'
    }
  ])

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCartItems(cartItems.filter(item => item.id !== id))
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ))
    }
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <>
      {/* Floating Cart Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary-blue text-white p-4 rounded-full shadow-large hover:shadow-xl transition-all duration-300 z-40 group"
      >
        <ShoppingCart className="w-6 h-6" />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-primary-orange text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold animate-bounce">
            {totalItems}
          </span>
        )}
      </button>

      {/* Cart Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-ui-surface rounded-2xl shadow-2xl max-w-md w-full max-h-[80vh] overflow-hidden animate-slide-up">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-ui-border">
              <h3 className="text-xl font-bold text-ui-text-primary">Shopping Cart</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-ui-muted rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="max-h-96 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart className="w-12 h-12 text-ui-text-muted mx-auto mb-4" />
                  <p className="text-ui-text-secondary">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 p-4 rounded-lg border border-ui-border hover:shadow-soft transition-shadow">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-ui-text-primary">{item.name}</h4>
                        <p className="text-sm text-ui-text-muted">{item.category}</p>
                        <p className="font-bold text-primary-blue">${item.price}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-ui-muted rounded"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-ui-muted rounded"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-1 hover:bg-red-100 hover:text-red-600 rounded transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-6 border-t border-ui-border">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-semibold">Total:</span>
                  <span className="text-2xl font-bold text-primary-blue">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="space-y-3">
                  <button className="w-full btn-primary">
                    Checkout ({totalItems} items)
                  </button>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="w-full btn-secondary"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default FloatingCart
