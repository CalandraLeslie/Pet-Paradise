import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { AppProvider } from '@/context/AppContext'
import { ToastContainer } from 'react-toastify'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import 'react-toastify/dist/ReactToastify.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: {
    default: 'Pet Paradise - Premium Pet Food, Toys & Accessories',
    template: '%s | Pet Paradise'
  },
  description: 'Discover premium pet food, engaging toys, and essential accessories for dogs, cats, birds, fish, and more. Your pet\'s paradise awaits with 10,000+ products from 500+ trusted brands.',
  keywords: [
    'pet food',
    'dog food',
    'cat food',
    'pet toys',
    'pet accessories',
    'pet supplies',
    'premium pet products',
    'pet care',
    'dog toys',
    'cat toys',
    'bird supplies',
    'fish supplies',
    'pet store online'
  ],
  authors: [{ name: 'Pet Paradise Team' }],
  creator: 'Pet Paradise',
  publisher: 'Pet Paradise',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://pet-paradise.netlify.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pet-paradise.netlify.app',
    title: 'Pet Paradise - Premium Pet Food, Toys & Accessories',
    description: 'Discover premium pet food, engaging toys, and essential accessories for all your pets. Trusted by 50,000+ pet parents.',
    siteName: 'Pet Paradise',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Pet Paradise - Premium Pet Supplies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pet Paradise - Premium Pet Food, Toys & Accessories',
    description: 'Discover premium pet food, engaging toys, and essential accessories for all your pets.',
    images: ['/twitter-image.jpg'],
    creator: '@petparadise',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4A90E2" />
      </head>
      <body className="min-h-screen flex flex-col">
        <AppProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </AppProvider>
      </body>
    </html>
  )
}
