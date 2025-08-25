import { Leaf, Recycle, Package, Truck, Award, Heart } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const SustainabilityPage = () => {
  const initiatives = [
    {
      icon: <Package className="w-8 h-8" />,
      title: "Eco-Friendly Packaging",
      description: "100% recyclable and biodegradable packaging materials",
      progress: 85,
      details: [
        "Eliminated single-use plastics",
        "Biodegradable packing peanuts",
        "Recycled cardboard boxes",
        "Minimal packaging design"
      ]
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Carbon-Neutral Shipping",
      description: "Offsetting 100% of shipping emissions through verified programs",
      progress: 92,
      details: [
        "Route optimization technology",
        "Electric delivery vehicles",
        "Carbon offset partnerships",
        "Local distribution centers"
      ]
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Product Lifecycle",
      description: "Partnering with brands committed to sustainable manufacturing",
      progress: 78,
      details: [
        "Sustainable sourcing standards",
        "Product take-back programs",
        "Recycled material products",
        "Biodegradable options"
      ]
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Green Operations",
      description: "Renewable energy and waste reduction in our facilities",
      progress: 95,
      details: [
        "100% renewable energy",
        "Zero waste to landfill",
        "Water conservation systems",
        "LEED certified buildings"
      ]
    }
  ]

  const certifications = [
    { name: "B Corp Certified", year: "2023" },
    { name: "Carbon Neutral Certified", year: "2022" },
    { name: "Green Business Certification", year: "2022" },
    { name: "Sustainable Packaging Coalition", year: "2021" }
  ]

  return (
    <div className="min-h-screen bg-ui-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-green to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm mb-4">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-white">Sustainability</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <Leaf className="inline w-12 h-12 mr-4" />
            Sustainability
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Caring for pets and our planet. Discover our commitment to environmental responsibility.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Our Commitment */}
        <div className="card p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-ui-text-primary mb-6">Our Environmental Commitment</h2>
              <p className="text-ui-text-secondary mb-4">
                At Pet Paradise, we believe that caring for pets means caring for the planet they call home. 
                Our sustainability initiatives are designed to minimize our environmental impact while 
                maintaining the highest quality products for your beloved companions.
              </p>
              <p className="text-ui-text-secondary mb-6">
                From carbon-neutral shipping to eco-friendly packaging, we're committed to making 
                responsible choices that benefit both pets and the environment.
              </p>
              <div className="bg-primary-green text-white p-4 rounded-lg">
                <h3 className="font-bold mb-2">Our 2030 Goal</h3>
                <p>Achieve net-zero carbon emissions across all operations and supply chain.</p>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&h=400&fit=crop"
                alt="Sustainable practices"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Sustainability Initiatives */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-ui-text-primary mb-8 text-center">Our Initiatives</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center mb-4">
                  <div className="text-primary-green mr-4">
                    {initiative.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-ui-text-primary">{initiative.title}</h3>
                    <p className="text-ui-text-secondary">{initiative.description}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{initiative.progress}%</span>
                  </div>
                  <div className="w-full bg-ui-muted rounded-full h-2">
                    <div 
                      className="bg-primary-green h-2 rounded-full transition-all duration-300"
                      style={{ width: `${initiative.progress}%` }}
                    ></div>
                  </div>
                </div>

                <ul className="space-y-2">
                  {initiative.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-ui-text-secondary">
                      <div className="w-2 h-2 bg-primary-green rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Environmental Impact */}
        <div className="card p-8 mb-12 bg-green-50">
          <h2 className="text-3xl font-bold text-ui-text-primary mb-8 text-center">Environmental Impact</h2>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-green mb-2">50,000</div>
              <div className="text-ui-text-secondary">Tons CO₂ Offset</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-green mb-2">1M+</div>
              <div className="text-ui-text-secondary">Plastic Items Eliminated</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-green mb-2">85%</div>
              <div className="text-ui-text-secondary">Waste Diverted from Landfills</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-green mb-2">100%</div>
              <div className="text-ui-text-secondary">Renewable Energy</div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="card p-8 mb-12">
          <h2 className="text-3xl font-bold text-ui-text-primary mb-8 text-center flex items-center justify-center">
            <Award className="w-8 h-8 mr-3 text-primary-green" />
            Certifications & Partnerships
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center p-4 border border-ui-border rounded-lg">
                <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-ui-text-primary mb-1">{cert.name}</h3>
                <p className="text-sm text-ui-text-secondary">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Get Involved */}
        <div className="card p-8 text-center bg-primary-green text-white">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Together, we can create a more sustainable future for pets and the planet. 
            Learn how you can get involved in our environmental initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-secondary bg-white text-primary-green hover:bg-gray-100">
              Sustainability Newsletter
            </button>
            <Link href="/contact" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary-green">
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SustainabilityPage
