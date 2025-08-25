import { FileText, AlertTriangle, Scale, ShoppingCart } from 'lucide-react'
import Link from 'next/link'

const TermsPage = () => {
  return (
    <div className="min-h-screen bg-ui-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-600 to-slate-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm mb-4">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-white">Terms of Service</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <FileText className="inline w-12 h-12 mr-4" />
            Terms of Service
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Please read these terms carefully before using our website and services.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Last Updated */}
        <div className="card p-6 mb-8 bg-slate-600 text-white">
          <p className="text-center">
            <strong>Last Updated:</strong> January 1, 2024
          </p>
        </div>

        {/* Agreement */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-ui-text-primary mb-4">Agreement to Terms</h2>
          <p className="text-ui-text-secondary mb-4">
            By accessing and using Pet Paradise's website and services, you accept and agree to be bound by the terms 
            and provision of this agreement. These Terms of Service ("Terms") govern your use of our website, products, and services.
          </p>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex items-start">
              <AlertTriangle className="w-5 h-5 text-yellow-400 mt-0.5 mr-2" />
              <p className="text-yellow-800 text-sm">
                If you do not agree to these terms, please do not use our website or services.
              </p>
            </div>
          </div>
        </div>

        {/* Use of Website */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-ui-text-primary mb-6">Use of Website</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-ui-text-primary mb-2">Permitted Use</h3>
              <ul className="list-disc list-inside text-ui-text-secondary space-y-1">
                <li>Browse and purchase pet products</li>
                <li>Create and manage your account</li>
                <li>Access pet care information and resources</li>
                <li>Contact customer support</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-ui-text-primary mb-2">Prohibited Activities</h3>
              <ul className="list-disc list-inside text-ui-text-secondary space-y-1">
                <li>Violating any laws or regulations</li>
                <li>Impersonating others or providing false information</li>
                <li>Interfering with website security or functionality</li>
                <li>Using automated systems to access the website</li>
                <li>Copying or distributing our content without permission</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Orders and Purchases */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-ui-text-primary mb-6 flex items-center">
            <ShoppingCart className="w-6 h-6 mr-2" />
            Orders and Purchases
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-primary-blue mb-3">Order Process</h3>
              <ul className="text-sm text-ui-text-secondary space-y-1">
                <li>• All orders subject to availability</li>
                <li>• Prices may change without notice</li>
                <li>• Order confirmation via email</li>
                <li>• Right to refuse or cancel orders</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-primary-green mb-3">Payment Terms</h3>
              <ul className="text-sm text-ui-text-secondary space-y-1">
                <li>• Payment required at time of order</li>
                <li>• Accepted payment methods listed at checkout</li>
                <li>• All prices in USD unless specified</li>
                <li>• Taxes and shipping calculated at checkout</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Shipping and Returns */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-ui-text-primary mb-4">Shipping and Returns</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-primary-blue pl-4">
              <h3 className="font-semibold">Shipping</h3>
              <p className="text-sm text-ui-text-secondary">Delivery times are estimates and not guaranteed. Risk of loss transfers upon delivery to carrier.</p>
            </div>
            <div className="border-l-4 border-primary-green pl-4">
              <h3 className="font-semibold">Returns</h3>
              <p className="text-sm text-ui-text-secondary">30-day return policy for most items. See our Returns & Exchanges page for full details.</p>
            </div>
            <div className="border-l-4 border-primary-orange pl-4">
              <h3 className="font-semibold">Damaged Items</h3>
              <p className="text-sm text-ui-text-secondary">Report damaged or defective items within 48 hours of delivery for replacement or refund.</p>
            </div>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-ui-text-primary mb-4">Intellectual Property</h2>
          <p className="text-ui-text-secondary mb-4">
            All content on this website, including text, graphics, logos, images, and software, is the property of 
            Pet Paradise or its content suppliers and is protected by copyright and other intellectual property laws.
          </p>
          <div className="bg-ui-muted p-4 rounded-lg">
            <h3 className="font-semibold mb-2">You may not:</h3>
            <ul className="text-sm space-y-1">
              <li>• Reproduce, distribute, or display our content</li>
              <li>• Create derivative works based on our content</li>
              <li>• Use our trademarks or logos without permission</li>
              <li>• Reverse engineer our software or systems</li>
            </ul>
          </div>
        </div>

        {/* Disclaimers */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-ui-text-primary mb-6 flex items-center">
            <Scale className="w-6 h-6 mr-2" />
            Disclaimers and Limitations
          </h2>
          <div className="space-y-4">
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
              <h3 className="font-semibold text-red-800 mb-2">Disclaimer of Warranties</h3>
              <p className="text-red-700 text-sm">
                Our website and services are provided "as is" without warranties of any kind, either express or implied.
              </p>
            </div>
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <h3 className="font-semibold text-yellow-800 mb-2">Limitation of Liability</h3>
              <p className="text-yellow-700 text-sm">
                Pet Paradise shall not be liable for any indirect, incidental, special, or consequential damages.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy and Data */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-ui-text-primary mb-4">Privacy and Data Protection</h2>
          <p className="text-ui-text-secondary mb-4">
            Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy.
          </p>
          <Link href="/privacy" className="text-primary-blue hover:underline font-medium">
            Read our Privacy Policy →
          </Link>
        </div>

        {/* Changes to Terms */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-ui-text-primary mb-4">Changes to Terms</h2>
          <p className="text-ui-text-secondary mb-4">
            We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. 
            Your continued use of our website constitutes acceptance of the modified Terms.
          </p>
        </div>

        {/* Contact Information */}
        <div className="card p-8">
          <h2 className="text-2xl font-bold text-ui-text-primary mb-4">Contact Information</h2>
          <p className="text-ui-text-secondary mb-4">
            Questions about these Terms of Service? Contact us:
          </p>
          <div className="bg-ui-muted p-4 rounded-lg">
            <p><strong>Email:</strong> legal@petparadise.com</p>
            <p><strong>Phone:</strong> 1-800-PET-CARE (738-2273)</p>
            <p><strong>Mail:</strong> Pet Paradise Legal Department<br />123 Pet Paradise Lane<br />Pet City, PC 12345</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsPage
