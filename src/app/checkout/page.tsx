'use client'

import React, { useState } from 'react'
import { ArrowLeft, CreditCard, MapPin, Phone, Mail, Lock, CheckCircle } from 'lucide-react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useApp } from '@/context/AppContext'
import { toast } from 'react-toastify'

// Form validation schema
const checkoutSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  address: yup.string().required('Address is required'),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  zipCode: yup.string().required('ZIP code is required'),
  phone: yup.string().required('Phone number is required'),
})

// Define a form input type with required fields to match the validation schema
type CheckoutFormData = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
}

export default function CheckoutPage() {
  const router = useRouter()
  const { cart, cartTotal, cartCount, clearCart, user, isAuthenticated } = useApp()
  const [paymentMethod, setPaymentMethod] = useState<'paypal' | 'card'>('paypal')
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)

  const form = useForm<CheckoutFormData>({
    resolver: yupResolver(checkoutSchema),
    defaultValues: {
      email: user?.email || '',
      firstName: user?.firstName || '',
      lastName: user?.lastName || '',
      address: user?.address?.street || '',
      city: user?.address?.city || '',
      state: user?.address?.state || '',
      zipCode: user?.address?.zipCode || '',
      phone: user?.phone || '',
    }
  })

  // Calculate totals
  const subtotal = cartTotal
  const shipping = cartTotal >= 50 ? 0 : 9.99
  const tax = cartTotal * 0.08
  const total = subtotal + shipping + tax

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price)
  }

  // Redirect if cart is empty
  if (cart.length === 0 && !orderComplete) {
    return (
      <div className="min-h-screen bg-ui-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-ui-text-primary mb-4">Your cart is empty</h1>
          <Link
            href="/"
            className="bg-primary-blue text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  // PayPal order creation
  const createOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: total.toFixed(2),
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: subtotal.toFixed(2)
              },
              shipping: {
                currency_code: 'USD',
                value: shipping.toFixed(2)
              },
              tax_total: {
                currency_code: 'USD',
                value: tax.toFixed(2)
              }
            }
          },
          items: cart.map(item => ({
            name: item.name,
            unit_amount: {
              currency_code: 'USD',
              value: item.price.toFixed(2)
            },
            quantity: item.quantity.toString(),
            category: 'PHYSICAL_GOODS'
          }))
        }
      ]
    })
  }

  // PayPal order approval
  const onApprove = async (data: any, actions: any) => {
    setIsProcessing(true)
    try {
      const order = await actions.order.capture()
      console.log('Order captured:', order)
      
      // Simulate order processing
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      clearCart()
      setOrderComplete(true)
      
      toast.success('Order placed successfully! Check your email for confirmation.', {
        position: 'top-right',
        autoClose: 5000,
      })
    } catch (error) {
      console.error('Error capturing order:', error)
      toast.error('Payment failed. Please try again.', {
        position: 'top-right',
        autoClose: 5000,
      })
    } finally {
      setIsProcessing(false)
    }
  }

  // PayPal error handler
  const onError = (err: any) => {
    console.error('PayPal error:', err)
    toast.error('Payment failed. Please try again.', {
      position: 'top-right',
      autoClose: 5000,
    })
  }

  // Order complete screen
  if (orderComplete) {
    return (
      <div className="min-h-screen bg-ui-background">
        <div className="max-w-2xl mx-auto px-4 py-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <CheckCircle className="w-16 h-16 text-primary-green mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-ui-text-primary mb-4">
              Order Confirmed!
            </h1>
            <p className="text-ui-text-secondary mb-8">
              Thank you for your purchase. Your order has been confirmed and will be shipped within 2-3 business days.
            </p>
            <div className="space-y-3">
              <Link
                href="/"
                className="block w-full bg-primary-blue text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors"
              >
                Continue Shopping
              </Link>
              <Link
                href="/orders"
                className="block w-full text-primary-blue hover:text-blue-600 py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Order Status
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <PayPalScriptProvider
      options={{
        clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || 'demo-client-id',
        currency: 'USD',
        intent: 'capture'
      }}
    >
      <div className="min-h-screen bg-ui-background">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Link
              href="/"
              className="p-2 hover:bg-ui-background-subtle rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="text-3xl font-bold text-ui-text-primary">Checkout</h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Checkout Form */}
            <div className="space-y-6">
              {/* Contact Information */}
              <div className="bg-white rounded-xl shadow-sm border border-ui-border p-6">
                <h2 className="text-xl font-semibold text-ui-text-primary mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary-blue" />
                  Contact Information
                </h2>
                
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-ui-text-secondary mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      {...form.register('email')}
                      className="w-full px-4 py-3 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      placeholder="Enter your email"
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                </form>
              </div>

              {/* Shipping Address */}
              <div className="bg-white rounded-xl shadow-sm border border-ui-border p-6">
                <h2 className="text-xl font-semibold text-ui-text-primary mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary-blue" />
                  Shipping Address
                </h2>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-ui-text-secondary mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      {...form.register('firstName')}
                      className="w-full px-4 py-3 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      placeholder="First name"
                    />
                    {form.formState.errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.firstName.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-ui-text-secondary mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      {...form.register('lastName')}
                      className="w-full px-4 py-3 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      placeholder="Last name"
                    />
                    {form.formState.errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-ui-text-secondary mb-2">
                    Address
                  </label>
                  <input
                    type="text"
                    {...form.register('address')}
                    className="w-full px-4 py-3 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    placeholder="Street address"
                  />
                  {form.formState.errors.address && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.address.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div>
                    <label className="block text-sm font-medium text-ui-text-secondary mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      {...form.register('city')}
                      className="w-full px-4 py-3 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      placeholder="City"
                    />
                    {form.formState.errors.city && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.city.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-ui-text-secondary mb-2">
                      State
                    </label>
                    <input
                      type="text"
                      {...form.register('state')}
                      className="w-full px-4 py-3 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      placeholder="State"
                    />
                    {form.formState.errors.state && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.state.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-ui-text-secondary mb-2">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      {...form.register('zipCode')}
                      className="w-full px-4 py-3 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                      placeholder="ZIP"
                    />
                    {form.formState.errors.zipCode && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.zipCode.message}</p>
                    )}
                  </div>
                </div>

                <div className="mt-4">
                  <label className="block text-sm font-medium text-ui-text-secondary mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    {...form.register('phone')}
                    className="w-full px-4 py-3 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    placeholder="Phone number"
                  />
                  {form.formState.errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
                  )}
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-xl shadow-sm border border-ui-border p-6">
                <h2 className="text-xl font-semibold text-ui-text-primary mb-4 flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-primary-blue" />
                  Payment Method
                </h2>

                {/* Payment Options */}
                <div className="space-y-3 mb-6">
                  <label className="flex items-center p-4 border border-ui-border rounded-lg cursor-pointer hover:bg-ui-background-subtle transition-colors">
                    <input
                      type="radio"
                      name="payment"
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={(e) => setPaymentMethod(e.target.value as 'paypal')}
                      className="mr-3"
                    />
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold text-sm">
                        PayPal
                      </div>
                      <span className="font-medium">PayPal</span>
                    </div>
                  </label>

                  <label className="flex items-center p-4 border border-ui-border rounded-lg cursor-pointer hover:bg-ui-background-subtle transition-colors opacity-50">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      disabled
                      className="mr-3"
                    />
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-6 h-6 text-ui-text-muted" />
                      <span className="font-medium text-ui-text-muted">Credit Card (Coming Soon)</span>
                    </div>
                  </label>
                </div>

                {/* PayPal Payment */}
                {paymentMethod === 'paypal' && (
                  <div className="border border-ui-border rounded-lg p-4">
                    <PayPalButtons
                      createOrder={createOrder}
                      onApprove={onApprove}
                      onError={onError}
                      style={{
                        layout: 'vertical',
                        color: 'blue',
                        shape: 'rect',
                        label: 'paypal'
                      }}
                      disabled={isProcessing}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:sticky lg:top-4">
              <div className="bg-white rounded-xl shadow-sm border border-ui-border p-6">
                <h2 className="text-xl font-semibold text-ui-text-primary mb-4">
                  Order Summary ({cartCount} items)
                </h2>

                {/* Cart Items */}
                <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-3">
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm text-ui-text-primary line-clamp-1">
                          {item.name}
                        </h3>
                        <p className="text-xs text-ui-text-muted">{item.brand}</p>
                        <div className="flex items-center justify-between mt-1">
                          <span className="text-xs text-ui-text-secondary">
                            Qty: {item.quantity}
                          </span>
                          <span className="font-semibold text-sm">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Order Totals */}
                <div className="space-y-3 border-t border-ui-border pt-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-ui-text-secondary">Subtotal</span>
                    <span className="font-medium">{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-ui-text-secondary">Shipping</span>
                    <span className="font-medium text-primary-green">
                      {shipping === 0 ? 'Free' : formatPrice(shipping)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-ui-text-secondary">Tax</span>
                    <span className="font-medium">{formatPrice(tax)}</span>
                  </div>
                  <hr className="border-ui-border" />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>

                {/* Security Notice */}
                <div className="mt-6 p-3 bg-green-50 rounded-lg flex items-center gap-2">
                  <Lock className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-700">
                    Your payment information is secure and encrypted
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PayPalScriptProvider>
  )
}
