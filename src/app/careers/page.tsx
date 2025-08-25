import { Briefcase, Heart, Users, Trophy, Coffee, MapPin } from 'lucide-react'
import Link from 'next/link'

const CareersPage = () => {
  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Comprehensive Health Benefits",
      description: "Medical, dental, vision, and pet insurance coverage"
    },
    {
      icon: <Coffee className="w-6 h-6" />,
      title: "Flexible Work Environment",
      description: "Remote work options and flexible scheduling"
    },
    {
      icon: <Trophy className="w-6 h-6" />,
      title: "Professional Development",
      description: "Learning stipends and career advancement opportunities"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Culture",
      description: "Pet-friendly office and team building events"
    }
  ]

  const openPositions = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Remote / San Francisco, CA",
      type: "Full-time",
      description: "Join our engineering team to build the future of pet e-commerce."
    },
    {
      title: "Veterinary Consultant",
      department: "Customer Success",
      location: "Remote",
      type: "Part-time",
      description: "Provide expert pet care advice to our customers."
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "New York, NY",
      type: "Full-time",
      description: "Lead our digital marketing efforts and brand strategy."
    },
    {
      title: "Customer Service Representative",
      department: "Support",
      location: "Remote",
      type: "Full-time",
      description: "Help pet parents find the perfect products for their companions."
    },
    {
      title: "Supply Chain Coordinator",
      department: "Operations",
      location: "Austin, TX",
      type: "Full-time",
      description: "Optimize our logistics and inventory management."
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote / Los Angeles, CA",
      type: "Full-time",
      description: "Create beautiful, intuitive experiences for pet parents."
    }
  ]

  return (
    <div className="min-h-screen bg-ui-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-orange to-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm mb-4">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-white">Careers</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <Briefcase className="inline w-12 h-12 mr-4" />
            Join Our Pack
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Build your career while making a difference in the lives of pets and their families.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Why Work Here */}
        <div className="card p-8 mb-12 text-center">
          <h2 className="text-3xl font-bold text-ui-text-primary mb-6">Why Pet Paradise?</h2>
          <p className="text-lg text-ui-text-secondary max-w-3xl mx-auto mb-8">
            We're not just a company - we're a community of pet lovers working together to make pet care better for everyone. 
            Join us in our mission to enrich the lives of pets and their families.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-4 border border-ui-border rounded-lg">
                <div className="text-primary-blue mb-3 flex justify-center">
                  {benefit.icon}
                </div>
                <h3 className="font-semibold text-ui-text-primary mb-2">{benefit.title}</h3>
                <p className="text-sm text-ui-text-secondary">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="card p-8 mb-12">
          <h2 className="text-3xl font-bold text-ui-text-primary mb-8">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="border border-ui-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-ui-text-primary mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-ui-text-secondary">
                      <span className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {position.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {position.location}
                      </span>
                      <span className="bg-primary-blue text-white px-2 py-1 rounded text-xs">
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <button className="btn-primary mt-4 md:mt-0">
                    Apply Now
                  </button>
                </div>
                <p className="text-ui-text-secondary">{position.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="card p-8 mb-12">
          <h2 className="text-3xl font-bold text-ui-text-primary mb-8 text-center">Our Hiring Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Apply Online</h3>
              <p className="text-sm text-ui-text-secondary">Submit your application and resume through our careers portal</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Phone Screening</h3>
              <p className="text-sm text-ui-text-secondary">Initial conversation with our recruiting team</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Team Interview</h3>
              <p className="text-sm text-ui-text-secondary">Meet with hiring managers and potential teammates</p>
            </div>
            <div className="text-center">
              <div className="bg-primary-blue text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Welcome Aboard</h3>
              <p className="text-sm text-ui-text-secondary">Join our pack and start making a difference!</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="card p-8 text-center bg-primary-green text-white">
          <h3 className="text-2xl font-bold mb-4">Don't see the perfect role?</h3>
          <p className="mb-6">We're always looking for talented, passionate people to join our team.</p>
          <button className="btn-secondary bg-white text-primary-green hover:bg-gray-100">
            Send Us Your Resume
          </button>
        </div>
      </div>
    </div>
  )
}

export default CareersPage
