import { Heart, Award, Users, Globe, Shield, Truck } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const AboutPage = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Pet Love First",
      description: "Every decision we make is driven by our love for pets and their wellbeing."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality & Safety",
      description: "We rigorously test and select only the highest quality, safest products."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Support",
      description: "Our team includes veterinarians and pet care specialists ready to help."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Sustainability",
      description: "We're committed to eco-friendly practices and sustainable packaging."
    }
  ]

  const milestones = [
    { year: "2018", event: "Pet Paradise founded with a small team of 5 pet lovers" },
    { year: "2019", event: "Reached 10,000+ happy customers across the country" },
    { year: "2020", event: "Launched our veterinarian consultation program" },
    { year: "2021", event: "Expanded to serve 500+ cities nationwide" },
    { year: "2022", event: "Introduced sustainable packaging initiative" },
    { year: "2023", event: "Opened our first physical store and distribution center" },
    { year: "2024", event: "Serving over 1 million pets and their families" }
  ]

  return (
    <div className="min-h-screen bg-ui-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-blue to-primary-green text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm mb-4">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-white">About Us</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Pet Paradise</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            We're on a mission to make pet care easier, more affordable, and more joyful for every pet parent.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Our Story */}
        <div className="card p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-ui-text-primary mb-6">Our Story</h2>
              <p className="text-ui-text-secondary mb-4">
                Pet Paradise was born from a simple observation: pet parents deserve better. Founded in 2018 by a group 
                of passionate pet lovers, we noticed that finding quality pet supplies often meant choosing between 
                convenience, price, and quality.
              </p>
              <p className="text-ui-text-secondary mb-4">
                We set out to change that. Starting with just five team members and a shared love for animals, 
                we've grown into a trusted destination for over one million pet families across the nation.
              </p>
              <p className="text-ui-text-secondary">
                Today, we're proud to offer the largest selection of premium pet products, expert veterinary guidance, 
                and exceptional customer service - all while maintaining our core belief that every pet deserves the very best.
              </p>
            </div>
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop"
                alt="Pet Paradise team with pets"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="card p-8 mb-12">
          <h2 className="text-3xl font-bold text-ui-text-primary mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 border border-ui-border rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-primary-blue mb-4 flex justify-center">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-ui-text-primary mb-3">{value.title}</h3>
                <p className="text-sm text-ui-text-secondary">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Journey */}
        <div className="card p-8 mb-12">
          <h2 className="text-3xl font-bold text-ui-text-primary mb-8 text-center">Our Journey</h2>
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-primary-blue text-white rounded-full w-16 h-16 flex items-center justify-center font-bold flex-shrink-0">
                  {milestone.year}
                </div>
                <div className="pt-3">
                  <p className="text-ui-text-secondary">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="card p-8 bg-primary-green text-white mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">By the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">1M+</div>
              <div className="text-white/90">Happy Pets Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-white/90">Products Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/90">Cities Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-white/90">Customer Support</div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="card p-8 text-center">
          <Award className="w-16 h-16 text-primary-blue mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-ui-text-primary mb-4">Our Mission</h2>
          <p className="text-xl text-ui-text-secondary max-w-4xl mx-auto">
            To enrich the lives of pets and their families by providing exceptional products, expert guidance, 
            and unparalleled service - making pet care a joyful experience for everyone involved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
