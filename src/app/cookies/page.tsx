import { Cookie, Settings, BarChart, Target } from 'lucide-react'
import Link from 'next/link'

const CookiesPage = () => {
  return (
    <div className="min-h-screen bg-ui-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-orange to-yellow-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm mb-4">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-white">Cookie Policy</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <Cookie className="inline w-12 h-12 mr-4" />
            Cookie Policy
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Learn about how we use cookies and similar technologies to improve your experience on our website.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Last Updated */}
        <div className="card p-6 mb-8 bg-primary-orange text-white">
          <p className="text-center">
            <strong>Last Updated:</strong> January 1, 2024
          </p>
        </div>

        {/* What are Cookies */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-ui-text-primary mb-4">What are Cookies?</h2>
          <p className="text-ui-text-secondary mb-4">
            Cookies are small text files that are stored on your device when you visit our website. They help us 
            provide you with a better browsing experience by remembering your preferences and analyzing how you use our site.
          </p>
          <div className="bg-ui-muted p-4 rounded-lg">
            <p className="text-sm text-ui-text-secondary">
              <strong>Note:</strong> Cookies do not contain personal information and cannot harm your device. 
              You can control cookie settings in your browser at any time.
            </p>
          </div>
        </div>

        {/* Types of Cookies */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-ui-text-primary mb-6">Types of Cookies We Use</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-ui-border rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Settings className="w-6 h-6 text-primary-blue mr-2" />
                <h3 className="font-semibold">Essential Cookies</h3>
              </div>
              <p className="text-sm text-ui-text-secondary mb-2">
                Required for basic website functionality. Cannot be disabled.
              </p>
              <ul className="text-xs text-ui-text-muted space-y-1">
                <li>• Shopping cart functionality</li>
                <li>• User authentication</li>
                <li>• Security features</li>
                <li>• Form submissions</li>
              </ul>
            </div>

            <div className="border border-ui-border rounded-lg p-4">
              <div className="flex items-center mb-3">
                <BarChart className="w-6 h-6 text-primary-green mr-2" />
                <h3 className="font-semibold">Analytics Cookies</h3>
              </div>
              <p className="text-sm text-ui-text-secondary mb-2">
                Help us understand how visitors interact with our website.
              </p>
              <ul className="text-xs text-ui-text-muted space-y-1">
                <li>• Page views and traffic sources</li>
                <li>• User behavior patterns</li>
                <li>• Performance metrics</li>
                <li>• Error tracking</li>
              </ul>
            </div>

            <div className="border border-ui-border rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Target className="w-6 h-6 text-primary-orange mr-2" />
                <h3 className="font-semibold">Marketing Cookies</h3>
              </div>
              <p className="text-sm text-ui-text-secondary mb-2">
                Used to deliver relevant advertisements and track campaign effectiveness.
              </p>
              <ul className="text-xs text-ui-text-muted space-y-1">
                <li>• Personalized ads</li>
                <li>• Retargeting campaigns</li>
                <li>• Social media integration</li>
                <li>• Conversion tracking</li>
              </ul>
            </div>

            <div className="border border-ui-border rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Cookie className="w-6 h-6 text-purple-600 mr-2" />
                <h3 className="font-semibold">Preference Cookies</h3>
              </div>
              <p className="text-sm text-ui-text-secondary mb-2">
                Remember your choices to provide a customized experience.
              </p>
              <ul className="text-xs text-ui-text-muted space-y-1">
                <li>• Language preferences</li>
                <li>• Display settings</li>
                <li>• Region/location settings</li>
                <li>• Accessibility options</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Third-Party Cookies */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-ui-text-primary mb-4">Third-Party Services</h2>
          <p className="text-ui-text-secondary mb-6">
            We use trusted third-party services that may set their own cookies. These services help us provide 
            better functionality and analyze our website performance.
          </p>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold">Google Analytics</h3>
              <p className="text-sm text-ui-text-secondary">Website traffic analysis and user behavior insights</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold">Payment Processors</h3>
              <p className="text-sm text-ui-text-secondary">Secure payment processing and fraud prevention</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold">Customer Support</h3>
              <p className="text-sm text-ui-text-secondary">Live chat functionality and support ticket management</p>
            </div>
            <div className="border-l-4 border-orange-500 pl-4">
              <h3 className="font-semibold">Social Media</h3>
              <p className="text-sm text-ui-text-secondary">Social sharing buttons and embedded content</p>
            </div>
          </div>
        </div>

        {/* Managing Cookies */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-ui-text-primary mb-6">Managing Your Cookie Preferences</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-ui-text-primary mb-3">Browser Settings</h3>
              <p className="text-ui-text-secondary mb-4">
                You can control cookies through your browser settings. Here's how to manage cookies in popular browsers:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-ui-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Chrome</h4>
                  <p className="text-sm">Settings → Privacy and Security → Cookies and other site data</p>
                </div>
                <div className="bg-ui-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Firefox</h4>
                  <p className="text-sm">Options → Privacy & Security → Cookies and Site Data</p>
                </div>
                <div className="bg-ui-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Safari</h4>
                  <p className="text-sm">Preferences → Privacy → Manage Website Data</p>
                </div>
                <div className="bg-ui-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Edge</h4>
                  <p className="text-sm">Settings → Cookies and site permissions → Cookies</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-ui-text-primary mb-3">Cookie Consent</h3>
              <p className="text-ui-text-secondary mb-4">
                When you first visit our website, you'll see a cookie consent banner. You can:
              </p>
              <ul className="list-disc list-inside text-ui-text-secondary space-y-1">
                <li>Accept all cookies for the full website experience</li>
                <li>Customize your preferences by cookie category</li>
                <li>Reject non-essential cookies (some features may be limited)</li>
                <li>Change your preferences at any time using our cookie settings</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Impact of Disabling Cookies */}
        <div className="card p-8 mb-8 bg-yellow-50 border-l-4 border-yellow-400">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">Impact of Disabling Cookies</h2>
          <p className="text-yellow-700 mb-4">
            While you can browse our website without cookies, disabling them may affect your experience:
          </p>
          <ul className="list-disc list-inside text-yellow-700 space-y-1">
            <li>Shopping cart may not function properly</li>
            <li>Unable to stay logged in to your account</li>
            <li>Personalized content and recommendations unavailable</li>
            <li>Some website features may not work correctly</li>
            <li>Analytics data to improve our website cannot be collected</li>
          </ul>
        </div>

        {/* Updates to Policy */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-ui-text-primary mb-4">Updates to This Policy</h2>
          <p className="text-ui-text-secondary mb-4">
            We may update this Cookie Policy from time to time to reflect changes in our practices or for legal reasons. 
            We will notify you of any significant changes by posting the updated policy on our website.
          </p>
        </div>

        {/* Contact Information */}
        <div className="card p-8">
          <h2 className="text-2xl font-bold text-ui-text-primary mb-4">Questions About Cookies?</h2>
          <p className="text-ui-text-secondary mb-4">
            If you have questions about our use of cookies, please contact us:
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

export default CookiesPage
