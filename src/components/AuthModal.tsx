'use client'

import React, { useState } from 'react'
import { X, User, Mail, Lock, Phone, Eye, EyeOff } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useApp } from '@/context/AppContext'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  initialMode?: 'login' | 'register'
}

// Validation schemas
const loginSchema = yup.object({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
})

const registerSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().optional(),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Please confirm your password')
})

type LoginFormData = yup.InferType<typeof loginSchema>
type RegisterFormData = yup.InferType<typeof registerSchema>

export default function AuthModal({ isOpen, onClose, initialMode = 'login' }: AuthModalProps) {
  const [mode, setMode] = useState<'login' | 'register'>(initialMode)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { login, register } = useApp()

  const loginForm = useForm<LoginFormData>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const registerForm = useForm<RegisterFormData>({
    resolver: yupResolver(registerSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: ''
    }
  })

  if (!isOpen) return null

  const handleLogin = async (data: LoginFormData) => {
    setIsLoading(true)
    try {
      const success = await login(data.email, data.password)
      if (success) {
        onClose()
        loginForm.reset()
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleRegister = async (data: RegisterFormData) => {
    setIsLoading(true)
    try {
      const success = await register({
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone
      })
      if (success) {
        onClose()
        registerForm.reset()
      }
    } finally {
      setIsLoading(false)
    }
  }

  const switchMode = () => {
    setMode(mode === 'login' ? 'register' : 'login')
    loginForm.reset()
    registerForm.reset()
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-ui-border">
          <h2 className="text-2xl font-bold text-ui-text-primary">
            {mode === 'login' ? 'Welcome Back' : 'Create Account'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-ui-background-subtle rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {mode === 'login' ? (
            <form onSubmit={loginForm.handleSubmit(handleLogin)} className="space-y-4">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-ui-text-secondary mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    {...loginForm.register('email')}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 pl-12 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  />
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-ui-text-muted w-5 h-5" />
                </div>
                {loginForm.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{loginForm.formState.errors.email.message}</p>
                )}
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-ui-text-secondary mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    {...loginForm.register('password')}
                    placeholder="Enter your password"
                    className="w-full px-4 py-3 pl-12 pr-12 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  />
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-ui-text-muted w-5 h-5" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-ui-text-muted hover:text-ui-text-secondary"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {loginForm.formState.errors.password && (
                  <p className="text-red-500 text-sm mt-1">{loginForm.formState.errors.password.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary-blue text-white py-3 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </button>
            </form>
          ) : (
            <form onSubmit={registerForm.handleSubmit(handleRegister)} className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-ui-text-secondary mb-2">
                    First Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      {...registerForm.register('firstName')}
                      placeholder="First name"
                      className="w-full px-4 py-3 pl-12 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                    />
                    <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-ui-text-muted w-5 h-5" />
                  </div>
                  {registerForm.formState.errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{registerForm.formState.errors.firstName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-ui-text-secondary mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    {...registerForm.register('lastName')}
                    placeholder="Last name"
                    className="w-full px-4 py-3 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  />
                  {registerForm.formState.errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{registerForm.formState.errors.lastName.message}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-ui-text-secondary mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    {...registerForm.register('email')}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 pl-12 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  />
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-ui-text-muted w-5 h-5" />
                </div>
                {registerForm.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">{registerForm.formState.errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-ui-text-secondary mb-2">
                  Phone Number (Optional)
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    {...registerForm.register('phone')}
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3 pl-12 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  />
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-ui-text-muted w-5 h-5" />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-ui-text-secondary mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    {...registerForm.register('password')}
                    placeholder="Create a password"
                    className="w-full px-4 py-3 pl-12 pr-12 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  />
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-ui-text-muted w-5 h-5" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-ui-text-muted hover:text-ui-text-secondary"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                {registerForm.formState.errors.password && (
                  <p className="text-red-500 text-sm mt-1">{registerForm.formState.errors.password.message}</p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium text-ui-text-secondary mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    {...registerForm.register('confirmPassword')}
                    placeholder="Confirm your password"
                    className="w-full px-4 py-3 pl-12 border border-ui-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent"
                  />
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-ui-text-muted w-5 h-5" />
                </div>
                {registerForm.formState.errors.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">{registerForm.formState.errors.confirmPassword.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary-blue text-white py-3 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>
          )}

          {/* Mode Switch */}
          <div className="mt-6 text-center">
            <p className="text-ui-text-secondary">
              {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}
              <button
                onClick={switchMode}
                className="ml-2 text-primary-blue hover:text-blue-600 font-medium"
              >
                {mode === 'login' ? 'Sign Up' : 'Sign In'}
              </button>
            </p>
          </div>

          {/* Demo Credentials */}
          {mode === 'login' && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-700 font-medium mb-1">Demo Credentials:</p>
              <p className="text-xs text-blue-600">Email: demo@petparadise.com</p>
              <p className="text-xs text-blue-600">Password: demo123</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
