'use client'

import React, { createContext, useContext, useReducer, useEffect } from 'react'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'

// Types
interface User {
  id: string
  email: string
  firstName: string
  lastName: string
  phone?: string
  address?: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
}

interface CartItem {
  id: number
  name: string
  price: number
  image: string
  category: string
  brand: string
  quantity: number
}

interface AppState {
  user: User | null
  isAuthenticated: boolean
  cart: CartItem[]
  cartTotal: number
  cartCount: number
}

interface AppContextType extends AppState {
  login: (email: string, password: string) => Promise<boolean>
  register: (userData: RegisterData) => Promise<boolean>
  logout: () => void
  addToCart: (product: Omit<CartItem, 'quantity'>, quantity?: number) => void
  removeFromCart: (productId: number) => void
  updateCartQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
}

interface RegisterData {
  email: string
  password: string
  firstName: string
  lastName: string
  phone?: string
}

// Action types
type AppAction =
  | { type: 'SET_USER'; payload: User }
  | { type: 'CLEAR_USER' }
  | { type: 'ADD_TO_CART'; payload: { product: Omit<CartItem, 'quantity'>; quantity: number } }
  | { type: 'REMOVE_FROM_CART'; payload: number }
  | { type: 'UPDATE_CART_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] }

// Initial state
const initialState: AppState = {
  user: null,
  isAuthenticated: false,
  cart: [],
  cartTotal: 0,
  cartCount: 0
}

// Reducer
function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true
      }
    
    case 'CLEAR_USER':
      return {
        ...state,
        user: null,
        isAuthenticated: false
      }
    
    case 'ADD_TO_CART':
      const existingItem = state.cart.find(item => item.id === action.payload.product.id)
      let newCart: CartItem[]
      
      if (existingItem) {
        newCart = state.cart.map(item =>
          item.id === action.payload.product.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        )
      } else {
        newCart = [...state.cart, { ...action.payload.product, quantity: action.payload.quantity }]
      }
      
      return {
        ...state,
        cart: newCart,
        cartTotal: newCart.reduce((total, item) => total + (item.price * item.quantity), 0),
        cartCount: newCart.reduce((count, item) => count + item.quantity, 0)
      }
    
    case 'REMOVE_FROM_CART':
      const filteredCart = state.cart.filter(item => item.id !== action.payload)
      return {
        ...state,
        cart: filteredCart,
        cartTotal: filteredCart.reduce((total, item) => total + (item.price * item.quantity), 0),
        cartCount: filteredCart.reduce((count, item) => count + item.quantity, 0)
      }
    
    case 'UPDATE_CART_QUANTITY':
      const updatedCart = state.cart.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      ).filter(item => item.quantity > 0)
      
      return {
        ...state,
        cart: updatedCart,
        cartTotal: updatedCart.reduce((total, item) => total + (item.price * item.quantity), 0),
        cartCount: updatedCart.reduce((count, item) => count + item.quantity, 0)
      }
    
    case 'CLEAR_CART':
      return {
        ...state,
        cart: [],
        cartTotal: 0,
        cartCount: 0
      }
    
    case 'LOAD_CART':
      return {
        ...state,
        cart: action.payload,
        cartTotal: action.payload.reduce((total, item) => total + (item.price * item.quantity), 0),
        cartCount: action.payload.reduce((count, item) => count + item.quantity, 0)
      }
    
    default:
      return state
  }
}

// Context
const AppContext = createContext<AppContextType | undefined>(undefined)

// Provider
export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  // Load user and cart from localStorage on mount
  useEffect(() => {
    const savedUser = Cookies.get('petparadise_user')
    const savedCart = localStorage.getItem('petparadise_cart')
    
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser)
        dispatch({ type: 'SET_USER', payload: user })
      } catch (error) {
        console.error('Error parsing saved user:', error)
        Cookies.remove('petparadise_user')
      }
    }
    
    if (savedCart) {
      try {
        const cart = JSON.parse(savedCart)
        dispatch({ type: 'LOAD_CART', payload: cart })
      } catch (error) {
        console.error('Error parsing saved cart:', error)
        localStorage.removeItem('petparadise_cart')
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('petparadise_cart', JSON.stringify(state.cart))
  }, [state.cart])

  // Auth functions
  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock user data - in real app, this would come from API
      const user: User = {
        id: '1',
        email,
        firstName: 'John',
        lastName: 'Doe',
        phone: '+1 (555) 123-4567',
        address: {
          street: '123 Pet Street',
          city: 'Pet City',
          state: 'PC',
          zipCode: '12345',
          country: 'USA'
        }
      }
      
      dispatch({ type: 'SET_USER', payload: user })
      Cookies.set('petparadise_user', JSON.stringify(user), { expires: 7 })
      
      toast.success('Welcome back! You have been successfully logged in.', {
        position: 'top-right',
        autoClose: 3000,
      })
      
      return true
    } catch (error) {
      toast.error('Login failed. Please check your credentials.', {
        position: 'top-right',
        autoClose: 3000,
      })
      return false
    }
  }

  const register = async (userData: RegisterData): Promise<boolean> => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock user creation - in real app, this would create user via API
      const user: User = {
        id: Math.random().toString(36).substr(2, 9),
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        phone: userData.phone
      }
      
      dispatch({ type: 'SET_USER', payload: user })
      Cookies.set('petparadise_user', JSON.stringify(user), { expires: 7 })
      
      toast.success('Account created successfully! Welcome to Pet Paradise!', {
        position: 'top-right',
        autoClose: 3000,
      })
      
      return true
    } catch (error) {
      toast.error('Registration failed. Please try again.', {
        position: 'top-right',
        autoClose: 3000,
      })
      return false
    }
  }

  const logout = () => {
    dispatch({ type: 'CLEAR_USER' })
    Cookies.remove('petparadise_user')
    
    toast.info('You have been logged out successfully.', {
      position: 'top-right',
      autoClose: 3000,
    })
  }

  // Cart functions
  const addToCart = (product: Omit<CartItem, 'quantity'>, quantity: number = 1) => {
    dispatch({ type: 'ADD_TO_CART', payload: { product, quantity } })
    
    toast.success(`${product.name} added to cart!`, {
      position: 'top-right',
      autoClose: 2000,
    })
  }

  const removeFromCart = (productId: number) => {
    const item = state.cart.find(item => item.id === productId)
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId })
    
    if (item) {
      toast.info(`${item.name} removed from cart`, {
        position: 'top-right',
        autoClose: 2000,
      })
    }
  }

  const updateCartQuantity = (productId: number, quantity: number) => {
    dispatch({ type: 'UPDATE_CART_QUANTITY', payload: { id: productId, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
    toast.info('Cart cleared', {
      position: 'top-right',
      autoClose: 2000,
    })
  }

  const contextValue: AppContextType = {
    ...state,
    login,
    register,
    logout,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart
  }

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}

// Hook to use the context
export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider')
  }
  return context
}
