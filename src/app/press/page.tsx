import { Newspaper, Download, Calendar, Award } from 'lucide-react'
import Link from 'next/link'

const PressPage = () => {
  const pressReleases = [
    {
      date: "March 15, 2024",
      title: "Pet Paradise Launches Revolutionary AI-Powered Pet Health Monitoring",
      excerpt: "New technology helps pet parents track their companion's health metrics in real-time."
    },
    {
      date: "February 8, 2024",
      title: "Pet Paradise Reaches 1 Million Customers Milestone",
      excerpt: "Company celebrates serving over one million pets and their families nationwide."
    },
    {
      date: "January 22, 2024",
      title: "Pet Paradise Partners with Local Animal Shelters for Adoption Initiative",
      excerpt: "New program provides essential supplies to newly adopted pets across 50 cities."
    },
    {
      date: "December 12, 2023",
      title: "Pet Paradise Wins 'Best E-commerce Platform' at Pet Industry Awards",
      excerpt: "Recognition for outstanding customer service and product innovation."
    }
  ]

  const mediaKit = [
    { name: "Company Logos", type: "ZIP", size: "2.3 MB" },
    { name: "Executive Photos", type: "ZIP", size: "8.7 MB" },
    { name: "Product Images", type: "ZIP", size: "15.2 MB" },
    { name: "Company Fact Sheet", type: "PDF", size: "1.1 MB" }
  ]

  const awards = [
    {
      year: "2024",
      award: "Best Pet E-commerce Platform",
      organization: "Pet Industry Association"
    },
    {
      year: "2023",
      award: "Excellence in Customer Service",
      organization: "National Retail Federation"
    },
    {
      year: "2023",
      award: "Sustainable Business of the Year",
      organization: "Green Commerce Awards"
    },
    {
      year: "2022",
      award: "Startup of the Year",
      organization: "Tech Innovation Awards"
    }
  ]

  return (
    <div className="min-h-screen bg-ui-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm mb-4">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-white">Press</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <Newspaper className="inline w-12 h-12 mr-4" />
            Press & Media
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Stay updated with Pet Paradise news, announcements, and media resources.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Media Contact */}
        <div className="card p-8 mb-12">
          <h2 className="text-3xl font-bold text-ui-text-primary mb-6">Media Contact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Press Inquiries</h3>
              <p className="text-ui-text-secondary mb-2">
                <strong>Sarah Johnson</strong><br />
                Director of Communications<br />
                Pet Paradise
              </p>
              <p className="text-ui-text-secondary">
                📧 press@petparadise.com<br />
                📞 (555) 123-4567<br />
                🕒 Available Mon-Fri, 9 AM - 6 PM EST
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Partnership Inquiries</h3>
              <p className="text-ui-text-secondary mb-2">
                <strong>Mike Chen</strong><br />
                Business Development Manager<br />
                Pet Paradise
              </p>
              <p className="text-ui-text-secondary">
                📧 partnerships@petparadise.com<br />
                📞 (555) 987-6543<br />
                🕒 Available Mon-Fri, 8 AM - 5 PM EST
              </p>
            </div>
          </div>
        </div>

        {/* Recent Press Releases */}
        <div className="card p-8 mb-12">
          <h2 className="text-3xl font-bold text-ui-text-primary mb-8">Recent Press Releases</h2>
          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <div key={index} className="border-l-4 border-primary-blue pl-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="w-4 h-4 text-ui-text-muted" />
                  <span className="text-sm text-ui-text-muted">{release.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-ui-text-primary mb-2">{release.title}</h3>
                <p className="text-ui-text-secondary mb-3">{release.excerpt}</p>
                <button className="text-primary-blue hover:underline font-medium">
                  Read Full Release →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Media Kit */}
        <div className="card p-8 mb-12">
          <h2 className="text-3xl font-bold text-ui-text-primary mb-8">Media Kit</h2>
          <p className="text-ui-text-secondary mb-6">
            Download our media kit for logos, images, and company information.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {mediaKit.map((item, index) => (
              <div key={index} className="border border-ui-border rounded-lg p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <Download className="w-6 h-6 text-primary-blue" />
                  <span className="text-xs bg-ui-muted px-2 py-1 rounded">{item.type}</span>
                </div>
                <h3 className="font-semibold text-ui-text-primary mb-1">{item.name}</h3>
                <p className="text-sm text-ui-text-muted mb-3">{item.size}</p>
                <button className="btn-primary w-full text-sm">
                  Download
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="card p-8 mb-12">
          <h2 className="text-3xl font-bold text-ui-text-primary mb-8 flex items-center">
            <Award className="w-8 h-8 mr-3 text-primary-blue" />
            Awards & Recognition
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 border border-ui-border rounded-lg">
                <div className="bg-primary-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                  {award.year}
                </div>
                <div>
                  <h3 className="font-semibold text-ui-text-primary mb-1">{award.award}</h3>
                  <p className="text-sm text-ui-text-secondary">{award.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Facts */}
        <div className="card p-8 bg-primary-blue text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Quick Company Facts</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold mb-2">Founded</div>
              <div className="text-white/90">2018 in San Francisco, CA</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Employees</div>
              <div className="text-white/90">500+ team members</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">Revenue</div>
              <div className="text-white/90">$100M+ annually</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PressPage
