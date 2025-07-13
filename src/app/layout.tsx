import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
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
  metadataBase: new URL('http://localhost:3000'),
  title: 'Pet Paradise - Premium Pet Food, Toys & Accessories',
  description: 'Discover the best selection of premium pet food, toys, and accessories for dogs, cats, birds, fish, and all your beloved pets. Quality products for every pet\'s needs.',
  keywords: 'pet food, dog food, cat food, pet toys, pet accessories, bird supplies, fish tanks, pet care',
  openGraph: {
    title: 'Pet Paradise - Premium Pet Food, Toys & Accessories',
    description: 'Quality products for every pet\'s needs',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
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
