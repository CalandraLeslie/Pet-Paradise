import { Truck, Clock, Package, MapPin } from 'lucide-react'
import Link from 'next/link'

const ShippingPage = () => {
  return (
    <div className="min-h-screen bg-ui-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-green to-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm mb-4">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-white">Shipping Info</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <Truck className="inline w-12 h-12 mr-4" />
            Shipping Information
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Fast, reliable shipping to get your pet supplies delivered safely to your door.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Free Shipping Banner */}
        <div className="card bg-primary-green text-white p-6 mb-8 text-center">
          <h2 className="text-2xl font-bold mb-2">🚚 FREE SHIPPING on orders over $50!</h2>
          <p>No minimum weight. No membership required. Just great savings on pet supplies.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Shipping Options */}
          <div className="card p-6">
            <h3 className="text-xl font-bold text-ui-text-primary mb-4 flex items-center">
              <Clock className="w-6 h-6 mr-2 text-primary-blue" />
              Shipping Options
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-primary-green pl-4">
                <h4 className="font-semibold">Standard Shipping (Free over $50)</h4>
                <p className="text-sm text-ui-text-secondary">5-7 business days • $5.99 under $50</p>
              </div>
              <div className="border-l-4 border-primary-blue pl-4">
                <h4 className="font-semibold">Express Shipping</h4>
                <p className="text-sm text-ui-text-secondary">2-3 business days • $12.99</p>
              </div>
              <div className="border-l-4 border-primary-orange pl-4">
                <h4 className="font-semibold">Next Day Delivery</h4>
                <p className="text-sm text-ui-text-secondary">1 business day • $24.99</p>
              </div>
            </div>
          </div>

          {/* Processing Time */}
          <div className="card p-6">
            <h3 className="text-xl font-bold text-ui-text-primary mb-4 flex items-center">
              <Package className="w-6 h-6 mr-2 text-primary-blue" />
              Processing Time
            </h3>
            <div className="space-y-3">
              <p>📦 <strong>In-Stock Items:</strong> 1-2 business days</p>
              <p>🏭 <strong>Special Orders:</strong> 3-5 business days</p>
              <p>🥫 <strong>Perishable Items:</strong> Same day processing</p>
              <p>🎁 <strong>Gift Items:</strong> 1-2 business days</p>
            </div>
          </div>
        </div>

        {/* Shipping Zones */}
        <div className="card p-8 mb-8">
          <h3 className="text-2xl font-bold text-ui-text-primary mb-6 flex items-center">
            <MapPin className="w-6 h-6 mr-2 text-primary-blue" />
            Shipping Zones
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 border border-ui-border rounded-lg">
              <div className="text-2xl mb-2">🇺🇸</div>
              <h4 className="font-semibold">United States</h4>
              <p className="text-sm text-ui-text-secondary">All 50 states + DC</p>
            </div>
            <div className="text-center p-4 border border-ui-border rounded-lg">
              <div className="text-2xl mb-2">🇨🇦</div>
              <h4 className="font-semibold">Canada</h4>
              <p className="text-sm text-ui-text-secondary">All provinces</p>
            </div>
            <div className="text-center p-4 border border-ui-border rounded-lg">
              <div className="text-2xl mb-2">🌍</div>
              <h4 className="font-semibold">International</h4>
              <p className="text-sm text-ui-text-secondary">Select countries</p>
            </div>
          </div>
        </div>

        {/* Special Items */}
        <div className="card p-8">
          <h3 className="text-2xl font-bold text-ui-text-primary mb-6">Special Shipping Items</h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🥫</span>
              <div>
                <h4 className="font-semibold">Wet Food & Treats</h4>
                <p className="text-ui-text-secondary">Climate-controlled shipping to ensure freshness. May require expedited shipping in extreme weather.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🏠</span>
              <div>
                <h4 className="font-semibold">Large Items (Cages, Furniture)</h4>
                <p className="text-ui-text-secondary">White glove delivery available. Freight shipping for oversized items. Additional fees may apply.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-2xl">🐠</span>
              <div>
                <h4 className="font-semibold">Live Items & Aquarium Supplies</h4>
                <p className="text-ui-text-secondary">Special handling and overnight shipping required. Available in select regions only.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShippingPage
