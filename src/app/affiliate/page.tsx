import { DollarSign, Users, TrendingUp, Gift, Star, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const AffiliatePage = () => {
  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Competitive Commissions",
      description: "Earn up to 10% commission on every sale you refer"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Dedicated Support",
      description: "Get help from our affiliate success team whenever you need it"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Real-Time Tracking",
      description: "Monitor your performance with our advanced analytics dashboard"
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Exclusive Promotions",
      description: "Access special offers and early product launches for your audience"
    }
  ]

  const commissionTiers = [
    { sales: "$0 - $1,000", commission: "5%", color: "bg-gray-100" },
    { sales: "$1,001 - $5,000", commission: "7%", color: "bg-blue-100" },
    { sales: "$5,001 - $10,000", commission: "8%", color: "bg-green-100" },
    { sales: "$10,001+", commission: "10%", color: "bg-primary-orange text-white" }
  ]

  const requirements = [
    "Active website, blog, or social media presence with pet-related content",
    "Minimum 1,000 followers or monthly website visitors",
    "Commitment to promoting only high-quality pet products",
    "No promotion of competing pet stores"
  ]

  const tools = [
    { name: "Banner Ads", description: "High-converting display ads in multiple sizes" },
    { name: "Product Links", description: "Direct links to specific products with tracking" },
    { name: "Coupon Codes", description: "Exclusive discount codes for your audience" },
    { name: "Content Assets", description: "Product images, videos, and descriptions" }
  ]

  return (
    <div className="min-h-screen bg-ui-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-orange to-yellow-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm mb-4">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-white">Affiliate Program</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <Star className="inline w-12 h-12 mr-4" />
            Affiliate Program
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Join thousands of pet influencers and earn commissions by promoting products you love.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Program Overview */}
        <div className="card p-8 mb-12 text-center">
          <h2 className="text-3xl font-bold text-ui-text-primary mb-6">Why Join Our Affiliate Program?</h2>
          <p className="text-lg text-ui-text-secondary max-w-3xl mx-auto mb-8">
            Partner with Pet Paradise and earn money while helping pet parents find the best products for their companions. 
            Our affiliate program offers competitive commissions, marketing support, and exclusive perks.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-4 border border-ui-border rounded-lg">
                <div className="text-primary-orange mb-4 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-ui-text-primary mb-2">{benefit.title}</h3>
                <p className="text-sm text-ui-text-secondary">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Commission Structure */}
        <div className="card p-8 mb-12">
          <h2 className="text-3xl font-bold text-ui-text-primary mb-8 text-center">Commission Structure</h2>
          <p className="text-center text-ui-text-secondary mb-8">
            Earn more as you sell more with our tiered commission structure
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            {commissionTiers.map((tier, index) => (
              <div key={index} className={`p-6 rounded-lg text-center ${tier.color}`}>
                <div className="text-2xl font-bold mb-2">{tier.commission}</div>
                <div className="text-sm">{tier.sales}</div>
                <div className="text-xs mt-2 opacity-75">Monthly Sales</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-sm text-ui-text-secondary">
              * Commissions are calculated monthly and paid within 30 days
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div className="card p-8 mb-12">
          <h2 className="text-3xl font-bold text-ui-text-primary mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary-orange text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Apply & Get Approved</h3>
              <p className="text-sm text-ui-text-secondary">Submit your application and get approved within 48 hours</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-orange text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Get Your Links</h3>
              <p className="text-sm text-ui-text-secondary">Access your unique affiliate links and marketing materials</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-orange text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Promote Products</h3>
              <p className="text-sm text-ui-text-secondary">Share products with your audience using your affiliate links</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-orange text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Earn Commissions</h3>
              <p className="text-sm text-ui-text-secondary">Get paid monthly for every sale you generate</p>
            </div>
          </div>
        </div>

        {/* Marketing Tools */}
        <div className="card p-8 mb-12">
          <h2 className="text-3xl font-bold text-ui-text-primary mb-8 text-center">Marketing Tools & Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {tools.map((tool, index) => (
              <div key={index} className="border border-ui-border rounded-lg p-6">
                <h3 className="font-semibold text-ui-text-primary mb-2">{tool.name}</h3>
                <p className="text-ui-text-secondary">{tool.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-ui-text-secondary mb-4">
              Plus: Dedicated affiliate manager, monthly newsletters, and exclusive webinars
            </p>
          </div>
        </div>

        {/* Requirements */}
        <div className="card p-8 mb-12">
          <h2 className="text-3xl font-bold text-ui-text-primary mb-8 text-center">Application Requirements</h2>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-4">
              {requirements.map((requirement, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-primary-green mt-0.5 flex-shrink-0" />
                  <span className="text-ui-text-secondary">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Success Stories */}
        <div className="card p-8 mb-12 bg-primary-orange text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">$50K+</div>
              <div className="text-white/90">Top Affiliate Earnings</div>
              <div className="text-sm text-white/75 mt-1">per year</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2,500+</div>
              <div className="text-white/90">Active Affiliates</div>
              <div className="text-sm text-white/75 mt-1">worldwide</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-white/90">Satisfaction Rate</div>
              <div className="text-sm text-white/75 mt-1">among affiliates</div>
            </div>
          </div>
        </div>

        {/* Application CTA */}
        <div className="card p-8 text-center">
          <h3 className="text-2xl font-bold text-ui-text-primary mb-4">Ready to Get Started?</h3>
          <p className="text-ui-text-secondary mb-6 max-w-2xl mx-auto">
            Join our affiliate program today and start earning commissions while helping pet parents find the best products for their companions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Apply Now
            </button>
            <Link href="/contact" className="btn-secondary">
              Have Questions?
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AffiliatePage
