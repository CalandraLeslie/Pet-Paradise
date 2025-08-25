import { Eye, Ear, MousePointer, Keyboard, Heart, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const AccessibilityPage = () => {
  return (
    <div className="min-h-screen bg-ui-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-green to-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm mb-4">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-white">Accessibility</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <Heart className="inline w-12 h-12 mr-4" />
            Accessibility Statement
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            We're committed to making Pet Paradise accessible to everyone, regardless of ability or technology.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Our Commitment */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-ui-text-primary mb-4">Our Commitment to Accessibility</h2>
          <p className="text-ui-text-secondary mb-4">
            Pet Paradise is committed to ensuring digital accessibility for people with disabilities. We continually 
            improve the user experience for everyone and apply relevant accessibility standards to make our website 
            usable by all visitors.
          </p>
          <div className="bg-primary-green text-white p-4 rounded-lg">
            <p className="font-semibold">
              We believe that caring for pets should be accessible to everyone, and that includes accessing 
              information and services on our website.
            </p>
          </div>
        </div>

        {/* Standards */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-ui-text-primary mb-6">Accessibility Standards</h2>
          <p className="text-ui-text-secondary mb-6">
            Our website aims to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards. 
            These guidelines explain how to make web content more accessible for people with disabilities.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-ui-border rounded-lg p-4">
              <h3 className="font-semibold text-primary-blue mb-3">WCAG 2.1 Level AA</h3>
              <ul className="text-sm text-ui-text-secondary space-y-1">
                <li>• Perceivable content</li>
                <li>• Operable interface</li>
                <li>• Understandable information</li>
                <li>• Robust technical implementation</li>
              </ul>
            </div>
            <div className="border border-ui-border rounded-lg p-4">
              <h3 className="font-semibold text-primary-green mb-3">Additional Standards</h3>
              <ul className="text-sm text-ui-text-secondary space-y-1">
                <li>• Section 508 compliance</li>
                <li>• ADA guidelines consideration</li>
                <li>• Mobile accessibility</li>
                <li>• Assistive technology support</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Accessibility Features */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-ui-text-primary mb-6">Accessibility Features</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Eye className="w-6 h-6 text-primary-blue mt-1" />
                <div>
                  <h3 className="font-semibold">Visual Accessibility</h3>
                  <ul className="text-sm text-ui-text-secondary space-y-1">
                    <li>• High contrast color schemes</li>
                    <li>• Scalable text and images</li>
                    <li>• Alternative text for images</li>
                    <li>• Clear visual focus indicators</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Keyboard className="w-6 h-6 text-primary-green mt-1" />
                <div>
                  <h3 className="font-semibold">Keyboard Navigation</h3>
                  <ul className="text-sm text-ui-text-secondary space-y-1">
                    <li>• Full keyboard accessibility</li>
                    <li>• Logical tab order</li>
                    <li>• Skip navigation links</li>
                    <li>• Keyboard shortcuts</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MousePointer className="w-6 h-6 text-primary-orange mt-1" />
                <div>
                  <h3 className="font-semibold">Motor Accessibility</h3>
                  <ul className="text-sm text-ui-text-secondary space-y-1">
                    <li>• Large click targets</li>
                    <li>• Drag and drop alternatives</li>
                    <li>• Timeout extensions</li>
                    <li>• Error prevention and correction</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Ear className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Hearing Accessibility</h3>
                  <ul className="text-sm text-ui-text-secondary space-y-1">
                    <li>• Captions for video content</li>
                    <li>• Visual alerts and notifications</li>
                    <li>• Text alternatives for audio</li>
                    <li>• Sign language interpretation (when available)</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold">Cognitive Accessibility</h3>
                  <ul className="text-sm text-ui-text-secondary space-y-1">
                    <li>• Clear and simple language</li>
                    <li>• Consistent navigation</li>
                    <li>• Helpful error messages</li>
                    <li>• Multiple ways to find content</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Heart className="w-6 h-6 text-red-500 mt-1" />
                <div>
                  <h3 className="font-semibold">Assistive Technology</h3>
                  <ul className="text-sm text-ui-text-secondary space-y-1">
                    <li>• Screen reader compatibility</li>
                    <li>• Voice recognition software support</li>
                    <li>• Magnification tool compatibility</li>
                    <li>• Switch navigation support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Keyboard Shortcuts */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-ui-text-primary mb-6">Keyboard Shortcuts</h2>
          <p className="text-ui-text-secondary mb-4">
            Use these keyboard shortcuts to navigate our website more efficiently:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-ui-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Navigation</h3>
              <ul className="text-sm space-y-1">
                <li><kbd className="bg-white px-2 py-1 rounded text-xs">Tab</kbd> - Move to next element</li>
                <li><kbd className="bg-white px-2 py-1 rounded text-xs">Shift + Tab</kbd> - Move to previous element</li>
                <li><kbd className="bg-white px-2 py-1 rounded text-xs">Enter</kbd> - Activate links and buttons</li>
                <li><kbd className="bg-white px-2 py-1 rounded text-xs">Space</kbd> - Scroll down, check boxes</li>
              </ul>
            </div>
            <div className="bg-ui-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Page Navigation</h3>
              <ul className="text-sm space-y-1">
                <li><kbd className="bg-white px-2 py-1 rounded text-xs">Alt + 1</kbd> - Skip to main content</li>
                <li><kbd className="bg-white px-2 py-1 rounded text-xs">Alt + 2</kbd> - Skip to navigation</li>
                <li><kbd className="bg-white px-2 py-1 rounded text-xs">Alt + 3</kbd> - Skip to search</li>
                <li><kbd className="bg-white px-2 py-1 rounded text-xs">Esc</kbd> - Close modals and menus</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Testing and Feedback */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-ui-text-primary mb-4">Testing and Continuous Improvement</h2>
          <p className="text-ui-text-secondary mb-4">
            We regularly test our website using various methods to ensure accessibility:
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-primary-green" />
              <span>Automated accessibility testing tools</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-primary-green" />
              <span>Manual testing with assistive technologies</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-primary-green" />
              <span>User testing with people with disabilities</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-primary-green" />
              <span>Regular accessibility audits by third-party experts</span>
            </div>
          </div>
        </div>

        {/* Known Issues */}
        <div className="card p-8 mb-8 bg-yellow-50 border-l-4 border-yellow-400">
          <h2 className="text-2xl font-bold text-yellow-800 mb-4">Known Accessibility Issues</h2>
          <p className="text-yellow-700 mb-4">
            We're aware of some accessibility issues and are working to resolve them:
          </p>
          <ul className="text-yellow-700 space-y-2">
            <li>• Some third-party payment forms may have limited accessibility</li>
            <li>• Certain interactive product images may not be fully accessible to screen readers</li>
            <li>• Some older PDF documents may not meet current accessibility standards</li>
          </ul>
          <p className="text-yellow-700 mt-4">
            <strong>Expected resolution:</strong> We aim to address these issues in our next major website update.
          </p>
        </div>

        {/* Feedback and Contact */}
        <div className="card p-8">
          <h2 className="text-2xl font-bold text-ui-text-primary mb-4">Accessibility Feedback</h2>
          <p className="text-ui-text-secondary mb-4">
            We welcome your feedback on the accessibility of Pet Paradise. If you encounter accessibility barriers 
            or have suggestions for improvement, please contact us:
          </p>
          <div className="bg-ui-muted p-4 rounded-lg mb-4">
            <p><strong>Accessibility Coordinator:</strong></p>
            <p><strong>Email:</strong> accessibility@petparadise.com</p>
            <p><strong>Phone:</strong> 1-800-PET-CARE (738-2273)</p>
            <p><strong>Mail:</strong> Pet Paradise Accessibility Team<br />123 Pet Paradise Lane<br />Pet City, PC 12345</p>
          </div>
          <p className="text-ui-text-secondary text-sm">
            We aim to respond to accessibility feedback within 2 business days and will work with you to 
            resolve any issues as quickly as possible.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AccessibilityPage
