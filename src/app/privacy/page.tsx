import { Shield, Eye, Lock, Users } from 'lucide-react'
import Link from 'next/link'

const PrivacyPage = () => {
  return (
    <div className="min-h-screen bg-ui-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-blue to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm mb-4">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-white">Privacy Policy</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <Shield className="inline w-12 h-12 mr-4" />
            Privacy Policy
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Your privacy is important to us. Learn how we collect, use, and protect your personal information.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Last Updated */}
        <div className="card p-6 mb-8 bg-primary-blue text-white">
          <p className="text-center">
            <strong>Last Updated:</strong> January 1, 2024
          </p>
        </div>

        {/* Introduction */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-ui-text-primary mb-4">Introduction</h2>
          <p className="text-ui-text-secondary mb-4">
            Pet Paradise ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
            how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
          </p>
          <p className="text-ui-text-secondary">
            By using our website, you consent to the data practices described in this policy.
          </p>
        </div>

        {/* Information We Collect */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-ui-text-primary mb-6 flex items-center">
            <Eye className="w-6 h-6 mr-2" />
            Information We Collect
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-ui-text-primary mb-3">Personal Information</h3>
              <ul className="list-disc list-inside text-ui-text-secondary space-y-1">
                <li>Name, email address, phone number</li>
                <li>Billing and shipping addresses</li>
                <li>Payment information (processed securely by third-party providers)</li>
                <li>Account credentials and preferences</li>
                <li>Pet information (names, breeds, ages) when provided</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-ui-text-primary mb-3">Automatically Collected Information</h3>
              <ul className="list-disc list-inside text-ui-text-secondary space-y-1">
                <li>IP address and browser information</li>
                <li>Device type and operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring websites and search terms</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How We Use Information */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-ui-text-primary mb-6">How We Use Your Information</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-primary-green mb-3">Service Delivery</h3>
              <ul className="text-sm text-ui-text-secondary space-y-1">
                <li>• Process and fulfill orders</li>
                <li>• Provide customer support</li>
                <li>• Send order confirmations and updates</li>
                <li>• Handle returns and exchanges</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-primary-blue mb-3">Communication</h3>
              <ul className="text-sm text-ui-text-secondary space-y-1">
                <li>• Send promotional emails (with consent)</li>
                <li>• Provide pet care tips and advice</li>
                <li>• Notify about new products and offers</li>
                <li>• Respond to inquiries and feedback</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Information Sharing */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-ui-text-primary mb-6 flex items-center">
            <Users className="w-6 h-6 mr-2" />
            Information Sharing
          </h2>
          <p className="text-ui-text-secondary mb-4">
            We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-primary-blue pl-4">
              <h3 className="font-semibold">Service Providers</h3>
              <p className="text-sm text-ui-text-secondary">Trusted partners who help us operate our business (payment processors, shipping companies, email services)</p>
            </div>
            <div className="border-l-4 border-primary-green pl-4">
              <h3 className="font-semibold">Legal Requirements</h3>
              <p className="text-sm text-ui-text-secondary">When required by law, regulation, or legal process</p>
            </div>
            <div className="border-l-4 border-primary-orange pl-4">
              <h3 className="font-semibold">Business Transfers</h3>
              <p className="text-sm text-ui-text-secondary">In connection with a merger, acquisition, or sale of assets</p>
            </div>
          </div>
        </div>

        {/* Data Security */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-ui-text-primary mb-6 flex items-center">
            <Lock className="w-6 h-6 mr-2" />
            Data Security
          </h2>
          <p className="text-ui-text-secondary mb-4">
            We implement appropriate security measures to protect your personal information:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-ui-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Technical Safeguards</h3>
              <ul className="text-sm space-y-1">
                <li>• SSL encryption for data transmission</li>
                <li>• Secure servers and databases</li>
                <li>• Regular security audits</li>
              </ul>
            </div>
            <div className="bg-ui-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Access Controls</h3>
              <ul className="text-sm space-y-1">
                <li>• Limited employee access</li>
                <li>• Strong authentication requirements</li>
                <li>• Regular access reviews</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-ui-text-primary mb-6">Your Privacy Rights</h2>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="bg-primary-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
              <div>
                <h3 className="font-semibold">Access and Portability</h3>
                <p className="text-sm text-ui-text-secondary">Request a copy of your personal information</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="bg-primary-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
              <div>
                <h3 className="font-semibold">Correction and Updates</h3>
                <p className="text-sm text-ui-text-secondary">Update or correct inaccurate information</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="bg-primary-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
              <div>
                <h3 className="font-semibold">Deletion</h3>
                <p className="text-sm text-ui-text-secondary">Request deletion of your personal information</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="bg-primary-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
              <div>
                <h3 className="font-semibold">Opt-Out</h3>
                <p className="text-sm text-ui-text-secondary">Unsubscribe from marketing communications</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="card p-8">
          <h2 className="text-2xl font-bold text-ui-text-primary mb-4">Contact Us</h2>
          <p className="text-ui-text-secondary mb-4">
            If you have questions about this Privacy Policy or our data practices, please contact us:
          </p>
          <div className="bg-ui-muted p-4 rounded-lg">
            <p><strong>Email:</strong> privacy@petparadise.com</p>
            <p><strong>Phone:</strong> 1-800-PET-CARE (738-2273)</p>
            <p><strong>Mail:</strong> Pet Paradise Privacy Office<br />123 Pet Paradise Lane<br />Pet City, PC 12345</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPage
