import { RefreshCw, Shield, Clock, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const ReturnsPage = () => {
  return (
    <div className="min-h-screen bg-ui-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-orange to-primary-green text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm mb-4">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-white">Returns & Exchanges</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <RefreshCw className="inline w-12 h-12 mr-4" />
            Returns & Exchanges
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Your satisfaction is guaranteed. Easy returns and exchanges for happy pets and pet parents.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Guarantee Banner */}
        <div className="card bg-primary-green text-white p-6 mb-8 text-center">
          <Shield className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">100% Satisfaction Guarantee</h2>
          <p>If you're not completely satisfied, we'll make it right with a full refund or exchange.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Return Policy */}
          <div className="card p-6">
            <h3 className="text-xl font-bold text-ui-text-primary mb-4 flex items-center">
              <Clock className="w-6 h-6 mr-2 text-primary-blue" />
              Return Policy
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-primary-green">📅 30-Day Return Window</h4>
                <p className="text-sm text-ui-text-secondary">Return most items within 30 days of delivery</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-blue">📦 Original Condition</h4>
                <p className="text-sm text-ui-text-secondary">Items must be unused and in original packaging</p>
              </div>
              <div>
                <h4 className="font-semibold text-primary-orange">🧾 Proof of Purchase</h4>
                <p className="text-sm text-ui-text-secondary">Receipt or order confirmation required</p>
              </div>
            </div>
          </div>

          {/* How to Return */}
          <div className="card p-6">
            <h3 className="text-xl font-bold text-ui-text-primary mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 mr-2 text-primary-blue" />
              How to Return
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <span className="bg-primary-blue text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">1</span>
                <div>
                  <p className="font-medium">Contact Customer Service</p>
                  <p className="text-sm text-ui-text-secondary">Email or call us to initiate return</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <span className="bg-primary-blue text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">2</span>
                <div>
                  <p className="font-medium">Receive Return Label</p>
                  <p className="text-sm text-ui-text-secondary">We'll email you a prepaid shipping label</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <span className="bg-primary-blue text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">3</span>
                <div>
                  <p className="font-medium">Ship Your Return</p>
                  <p className="text-sm text-ui-text-secondary">Package securely and drop off at carrier</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Return Categories */}
        <div className="card p-8 mb-8">
          <h3 className="text-2xl font-bold text-ui-text-primary mb-6">Return Categories</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-primary-green mb-3">✅ Returnable Items</h4>
              <ul className="space-y-2 text-sm">
                <li>• Unopened food and treats</li>
                <li>• Unused toys and accessories</li>
                <li>• Cages and furniture (original packaging)</li>
                <li>• Unopened health products</li>
                <li>• Collars, leashes, and clothing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-red-500 mb-3">❌ Non-Returnable Items</h4>
              <ul className="space-y-2 text-sm">
                <li>• Opened food and treats</li>
                <li>• Used bedding and litter</li>
                <li>• Personalized or custom items</li>
                <li>• Opened medications</li>
                <li>• Live animals and plants</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Refund Information */}
        <div className="card p-8">
          <h3 className="text-2xl font-bold text-ui-text-primary mb-6">Refund Information</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 border border-ui-border rounded-lg">
              <div className="text-3xl mb-2">💳</div>
              <h4 className="font-semibold">Original Payment Method</h4>
              <p className="text-sm text-ui-text-secondary">Refunded to original payment within 5-7 business days</p>
            </div>
            <div className="text-center p-4 border border-ui-border rounded-lg">
              <div className="text-3xl mb-2">🔄</div>
              <h4 className="font-semibold">Exchange Process</h4>
              <p className="text-sm text-ui-text-secondary">New item ships once return is received</p>
            </div>
            <div className="text-center p-4 border border-ui-border rounded-lg">
              <div className="text-3xl mb-2">🆓</div>
              <h4 className="font-semibold">Free Return Shipping</h4>
              <p className="text-sm text-ui-text-secondary">On defective items and our errors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReturnsPage
