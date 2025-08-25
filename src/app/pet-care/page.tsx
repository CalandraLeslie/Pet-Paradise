'use client'

import { Heart, BookOpen, Stethoscope, Award, Lightbulb, Shield, Clock, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const PetCarePage = () => {
  const [activeTab, setActiveTab] = useState('dogs')

  const careGuides = {
    dogs: {
      emoji: "🐕",
      color: "pet-dog",
      bgColor: "amber-50",
      tips: [
        {
          title: "Daily Exercise Requirements",
          description: "Most dogs need 30 minutes to 2 hours of exercise daily, depending on breed, age, and health.",
          image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=200&fit=crop",
          details: [
            "Puppies: 5 minutes per month of age, twice daily",
            "Adult dogs: 30-120 minutes depending on breed",
            "Senior dogs: Gentle walks and low-impact activities",
            "High-energy breeds need more vigorous exercise"
          ]
        },
        {
          title: "Proper Nutrition Guidelines",
          description: "Feed high-quality protein-based food appropriate for your dog's life stage and activity level.",
          image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=200&fit=crop",
          details: [
            "Puppies: 3-4 meals daily with puppy-specific food",
            "Adults: 2 meals daily, consistent timing",
            "Seniors: Easily digestible food, may need special diet",
            "Always provide fresh water"
          ]
        },
        {
          title: "Grooming Essentials",
          description: "Regular grooming keeps your dog healthy, comfortable, and looking their best.",
          image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=400&h=200&fit=crop",
          details: [
            "Brush daily for long-haired breeds",
            "Nail trimming every 2-3 weeks",
            "Teeth brushing 2-3 times weekly",
            "Professional grooming every 6-8 weeks"
          ]
        }
      ]
    },
    cats: {
      emoji: "🐱",
      color: "pet-cat",
      bgColor: "slate-50",
      tips: [
        {
          title: "Litter Box Management",
          description: "Proper litter box maintenance is crucial for your cat's health and household hygiene.",
          image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=200&fit=crop",
          details: [
            "Scoop daily, change completely weekly",
            "One box per cat plus one extra",
            "Place in quiet, accessible locations",
            "Use unscented, clumping litter"
          ]
        },
        {
          title: "Indoor Enrichment",
          description: "Keep indoor cats mentally stimulated and physically active with proper environmental enrichment.",
          image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&h=200&fit=crop",
          details: [
            "Multiple scratching posts at different heights",
            "Interactive toys and puzzle feeders",
            "Cat trees and climbing structures",
            "Window perches for bird watching"
          ]
        },
        {
          title: "Health Monitoring",
          description: "Early detection of health issues is key to maintaining your cat's wellbeing.",
          image: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?w=400&h=200&fit=crop",
          details: [
            "Monitor eating and drinking habits",
            "Check litter box usage patterns",
            "Watch for changes in behavior",
            "Annual vet checkups, bi-annual for seniors"
          ]
        }
      ]
    },
    birds: {
      emoji: "🐦",
      color: "pet-bird",
      bgColor: "yellow-50",
      tips: [
        {
          title: "Proper Cage Setup",
          description: "Create a safe, comfortable, and stimulating environment for your feathered friend.",
          image: "https://images.unsplash.com/photo-1452857297128-d9c29adba80b?w=400&h=200&fit=crop",
          details: [
            "Largest cage possible with horizontal space",
            "Multiple perches of varying diameters",
            "Food and water dishes at different levels",
            "Toys rotated weekly for mental stimulation"
          ]
        },
        {
          title: "Social Interaction Needs",
          description: "Birds are highly social creatures requiring daily interaction and mental stimulation.",
          image: "https://images.unsplash.com/photo-1539367628448-4bc5c9dadfce?w=400&h=200&fit=crop",
          details: [
            "At least 2-3 hours of interaction daily",
            "Talk and sing to your bird regularly",
            "Training sessions for mental enrichment",
            "Safe out-of-cage time in bird-proofed areas"
          ]
        },
        {
          title: "Nutritional Variety",
          description: "A balanced diet with variety ensures optimal health and prevents nutritional deficiencies.",
          image: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=400&h=200&fit=crop",
          details: [
            "High-quality pellets as base diet (70-80%)",
            "Fresh fruits and vegetables daily (20-25%)",
            "Healthy seeds and nuts as treats (5-10%)",
            "Avoid avocado, chocolate, and caffeine"
          ]
        }
      ]
    },
    fish: {
      emoji: "🐠",
      color: "pet-fish",
      bgColor: "cyan-50",
      tips: [
        {
          title: "Water Quality Management",
          description: "Maintaining proper water parameters is essential for fish health and longevity.",
          image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=200&fit=crop",
          details: [
            "Test water weekly for pH, ammonia, nitrites",
            "Perform 25% water changes weekly",
            "Use water conditioner to remove chlorine",
            "Monitor temperature with reliable thermometer"
          ]
        },
        {
          title: "Proper Feeding Practices",
          description: "Correct feeding ensures health while preventing water quality issues from overfeeding.",
          image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=400&h=200&fit=crop",
          details: [
            "Feed small amounts 2-3 times daily",
            "Only what fish can consume in 2-3 minutes",
            "Vary diet with flakes, pellets, and frozen food",
            "Fast fish one day per week"
          ]
        },
        {
          title: "Tank Maintenance Schedule",
          description: "Regular maintenance prevents problems and keeps your aquarium ecosystem healthy.",
          image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=200&fit=crop",
          details: [
            "Clean glass and decorations weekly",
            "Vacuum substrate during water changes",
            "Replace filter media monthly (rinse, don't replace all at once)",
            "Trim live plants as needed"
          ]
        }
      ]
    },
    small: {
      emoji: "🐰",
      color: "pet-rabbit",
      bgColor: "purple-50",
      tips: [
        {
          title: "Habitat Requirements",
          description: "Small pets need spacious, secure environments with proper ventilation and enrichment.",
          image: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&h=200&fit=crop",
          details: [
            "Minimum cage size: 4x rabbit's length when stretched",
            "Solid flooring to prevent foot injuries",
            "Multiple levels for exercise",
            "Safe bedding changed 2-3 times weekly"
          ]
        },
        {
          title: "Diet and Nutrition",
          description: "Each species has specific dietary needs that must be met for optimal health.",
          image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=200&fit=crop",
          details: [
            "Rabbits: Unlimited timothy hay, pellets, fresh vegetables",
            "Guinea pigs: Vitamin C supplements essential",
            "Hamsters: Commercial mix with fresh additions",
            "Fresh water changed daily"
          ]
        },
        {
          title: "Exercise and Enrichment",
          description: "Mental and physical stimulation prevents boredom and promotes natural behaviors.",
          image: "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?w=400&h=200&fit=crop",
          details: [
            "Daily supervised exercise outside cage",
            "Tunnels and hiding places for security",
            "Chew toys for dental health",
            "Foraging opportunities to encourage natural behavior"
          ]
        }
      ]
    },
    reptiles: {
      emoji: "🦎",
      color: "pet-reptile",
      bgColor: "lime-50",
      tips: [
        {
          title: "Temperature and Lighting",
          description: "Proper thermal gradients and UV lighting are critical for reptile health and behavior.",
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop",
          details: [
            "Basking spot: 85-95°F for most species",
            "Cool side: 75-80°F",
            "UVB lighting 10-12 hours daily",
            "Night temperature drop of 5-10°F"
          ]
        },
        {
          title: "Humidity and Habitat",
          description: "Species-appropriate humidity levels and habitat design support natural behaviors.",
          image: "https://images.unsplash.com/photo-1520637736862-4d197d17c11a?w=400&h=200&fit=crop",
          details: [
            "Desert species: 30-40% humidity",
            "Tropical species: 60-80% humidity",
            "Provide hiding spots on both warm and cool sides",
            "Use appropriate substrate for burrowing species"
          ]
        },
        {
          title: "Feeding Guidelines",
          description: "Reptile feeding requirements vary greatly by species, age, and season.",
          image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400&h=200&fit=crop",
          details: [
            "Research species-specific diet requirements",
            "Juveniles eat more frequently than adults",
            "Dust insects with calcium and vitamins",
            "Some species require seasonal feeding adjustments"
          ]
        }
      ]
    }
  }

  const universalTips = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Regular Veterinary Care",
      description: "Schedule annual checkups and keep vaccinations current",
      tips: ["Annual wellness exams", "Vaccination schedules", "Dental care", "Preventive treatments"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Safety First",
      description: "Pet-proof your home and ensure proper identification",
      tips: ["Remove toxic plants", "Secure dangerous items", "Microchip identification", "Updated ID tags"]
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Mental Health",
      description: "Provide socialization and mental stimulation",
      tips: ["Social interaction", "Environmental enrichment", "Training activities", "Routine establishment"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Consistent Routine",
      description: "Maintain regular schedules for feeding and activities",
      tips: ["Regular meal times", "Consistent sleep schedule", "Exercise routine", "Grooming schedule"]
    }
  ]

  return (
    <div className="min-h-screen bg-ui-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary-green to-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm mb-4">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-white">Pet Care Tips</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <Heart className="inline w-12 h-12 mr-4" />
            Pet Care Tips
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Expert advice and essential tips to keep your beloved pets happy, healthy, and thriving.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="card p-8 mb-12 text-center">
          <Award className="w-16 h-16 text-primary-green mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-ui-text-primary mb-4">Expert Pet Care Guidance</h2>
          <p className="text-ui-text-secondary max-w-3xl mx-auto">
            Our veterinarians and pet care specialists have compiled these essential tips to help you provide 
            the best possible care for your furry, feathered, and scaled family members.
          </p>
        </div>

        {/* Pet Category Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {Object.entries(careGuides).map(([key, guide]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 ${
                  activeTab === key
                    ? `bg-${guide.color} text-white`
                    : 'bg-ui-muted text-ui-text-secondary hover:bg-ui-border'
                }`}
              >
                <span className="text-xl">{guide.emoji}</span>
                <span>{key === 'small' ? 'Small Pets' : key.charAt(0).toUpperCase() + key.slice(1)}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Pet Care Guide */}
        <div className={`card p-8 mb-12 bg-${careGuides[activeTab as keyof typeof careGuides].bgColor}`}>
          <h2 className={`text-3xl font-bold text-${careGuides[activeTab as keyof typeof careGuides].color} mb-8 flex items-center`}>
            <span className="text-4xl mr-4">{careGuides[activeTab as keyof typeof careGuides].emoji}</span>
            {activeTab === 'small' ? 'Small Pet' : activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Care Guide
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {careGuides[activeTab as keyof typeof careGuides].tips.map((tip, index) => (
              <div key={index} className="card p-0 overflow-hidden hover:scale-105 transition-transform">
                <div className="relative h-48">
                  <Image
                    src={tip.image}
                    alt={tip.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-ui-text-primary mb-3">{tip.title}</h3>
                  <p className="text-ui-text-secondary mb-4">{tip.description}</p>
                  <ul className="space-y-2">
                    {tip.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2">
                        <Star className="w-4 h-4 text-primary-green mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-ui-text-secondary">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Universal Pet Care Tips */}
        <div className="card p-8 mb-12">
          <h2 className="text-2xl font-bold text-ui-text-primary mb-6 flex items-center">
            <BookOpen className="w-8 h-8 mr-3 text-primary-blue" />
            Universal Pet Care Principles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {universalTips.map((tip, index) => (
              <div key={index} className="text-center p-4 border border-ui-border rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-primary-blue mb-4 flex justify-center">
                  {tip.icon}
                </div>
                <h3 className="font-semibold text-ui-text-primary mb-2">{tip.title}</h3>
                <p className="text-sm text-ui-text-secondary mb-3">{tip.description}</p>
                <ul className="text-xs text-ui-text-muted space-y-1">
                  {tip.tips.map((item, itemIndex) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency Preparedness */}
        <div className="card p-8 bg-red-50 border-l-4 border-red-500 mb-12">
          <h2 className="text-2xl font-bold text-red-700 mb-6 flex items-center">
            <Lightbulb className="w-8 h-8 mr-3" />
            Emergency Preparedness
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-red-600 mb-3">Emergency Contacts</h3>
              <ul className="text-sm space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-red-500">📞</span>
                  <span>Your regular veterinarian</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-red-500">🏥</span>
                  <span>Nearest emergency animal hospital</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-red-500">☠️</span>
                  <span>Pet poison control hotline: (888) 426-4435</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-red-500">🏠</span>
                  <span>Trusted pet sitter or boarding facility</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-red-600 mb-3">First Aid Kit Essentials</h3>
              <ul className="text-sm space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="text-red-500">🩹</span>
                  <span>Gauze pads and self-adhesive bandages</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-red-500">🧴</span>
                  <span>Antiseptic wipes and saline solution</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-red-500">🌡️</span>
                  <span>Digital thermometer (rectal for accuracy)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-red-500">💊</span>
                  <span>Any prescribed medications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Expert Consultation CTA */}
        <div className="card p-8 text-center bg-primary-green text-white">
          <Award className="w-16 h-16 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Need Personalized Advice?</h3>
          <p className="mb-6">Our pet care experts are available to help with specific questions about your pets needs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary bg-white text-primary-green hover:bg-gray-100">
              Contact Our Experts
            </Link>
            <a href="tel:1-800-738-2273" className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary-green">
              Call 1-800-PET-CARE
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PetCarePage
