import { Ruler, Dog, Cat } from 'lucide-react'
import Link from 'next/link'

const SizeGuidePage = () => {
  return (
    <div className="min-h-screen bg-ui-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-500 to-primary-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center space-x-2 text-sm mb-4">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="text-white/60">/</span>
            <span className="text-white">Size Guide</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <Ruler className="inline w-12 h-12 mr-4" />
            Size Guide
          </h1>
          <p className="text-xl text-white/90 max-w-2xl">
            Find the perfect fit for your pet with our comprehensive sizing charts and measurement tips.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Measurement Tips */}
        <div className="card p-8 mb-8">
          <h2 className="text-2xl font-bold text-ui-text-primary mb-6">How to Measure Your Pet</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Dog className="w-6 h-6 mr-2 text-pet-dog" />
                Dogs
              </h3>
              <div className="space-y-3">
                <p><strong>Neck:</strong> Measure around the base of the neck where collar sits</p>
                <p><strong>Chest:</strong> Measure around the widest part of the chest</p>
                <p><strong>Length:</strong> From base of neck to base of tail</p>
                <p><strong>Weight:</strong> Use a pet scale or vet measurement</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Cat className="w-6 h-6 mr-2 text-pet-cat" />
                Cats
              </h3>
              <div className="space-y-3">
                <p><strong>Neck:</strong> Measure loosely around neck for comfort</p>
                <p><strong>Chest:</strong> Behind front legs at widest point</p>
                <p><strong>Length:</strong> From neck to where tail begins</p>
                <p><strong>Weight:</strong> Accurate weight from vet visit</p>
              </div>
            </div>
          </div>
        </div>

        {/* Dog Sizes */}
        <div className="card p-8 mb-8">
          <h3 className="text-xl font-bold text-ui-text-primary mb-6">Dog Size Chart</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-ui-border">
              <thead>
                <tr className="bg-ui-muted">
                  <th className="border border-ui-border p-3 text-left">Size</th>
                  <th className="border border-ui-border p-3 text-left">Weight</th>
                  <th className="border border-ui-border p-3 text-left">Neck</th>
                  <th className="border border-ui-border p-3 text-left">Chest</th>
                  <th className="border border-ui-border p-3 text-left">Example Breeds</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-ui-border p-3 font-semibold">XS</td>
                  <td className="border border-ui-border p-3">2-6 lbs</td>
                  <td className="border border-ui-border p-3">6-9"</td>
                  <td className="border border-ui-border p-3">9-13"</td>
                  <td className="border border-ui-border p-3">Chihuahua, Yorkshire Terrier</td>
                </tr>
                <tr className="bg-ui-surface">
                  <td className="border border-ui-border p-3 font-semibold">S</td>
                  <td className="border border-ui-border p-3">6-14 lbs</td>
                  <td className="border border-ui-border p-3">8-12"</td>
                  <td className="border border-ui-border p-3">13-18"</td>
                  <td className="border border-ui-border p-3">Maltese, Pomeranian</td>
                </tr>
                <tr>
                  <td className="border border-ui-border p-3 font-semibold">M</td>
                  <td className="border border-ui-border p-3">14-35 lbs</td>
                  <td className="border border-ui-border p-3">12-16"</td>
                  <td className="border border-ui-border p-3">18-24"</td>
                  <td className="border border-ui-border p-3">Beagle, Cocker Spaniel</td>
                </tr>
                <tr className="bg-ui-surface">
                  <td className="border border-ui-border p-3 font-semibold">L</td>
                  <td className="border border-ui-border p-3">35-65 lbs</td>
                  <td className="border border-ui-border p-3">16-20"</td>
                  <td className="border border-ui-border p-3">24-30"</td>
                  <td className="border border-ui-border p-3">Labrador, Golden Retriever</td>
                </tr>
                <tr>
                  <td className="border border-ui-border p-3 font-semibold">XL</td>
                  <td className="border border-ui-border p-3">65-90 lbs</td>
                  <td className="border border-ui-border p-3">20-24"</td>
                  <td className="border border-ui-border p-3">30-36"</td>
                  <td className="border border-ui-border p-3">German Shepherd, Rottweiler</td>
                </tr>
                <tr className="bg-ui-surface">
                  <td className="border border-ui-border p-3 font-semibold">XXL</td>
                  <td className="border border-ui-border p-3">90+ lbs</td>
                  <td className="border border-ui-border p-3">24-28"</td>
                  <td className="border border-ui-border p-3">36-42"</td>
                  <td className="border border-ui-border p-3">Great Dane, Mastiff</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Cat Sizes */}
        <div className="card p-8 mb-8">
          <h3 className="text-xl font-bold text-ui-text-primary mb-6">Cat Size Chart</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-ui-border">
              <thead>
                <tr className="bg-ui-muted">
                  <th className="border border-ui-border p-3 text-left">Size</th>
                  <th className="border border-ui-border p-3 text-left">Weight</th>
                  <th className="border border-ui-border p-3 text-left">Neck</th>
                  <th className="border border-ui-border p-3 text-left">Chest</th>
                  <th className="border border-ui-border p-3 text-left">Example Breeds</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-ui-border p-3 font-semibold">XS</td>
                  <td className="border border-ui-border p-3">3-6 lbs</td>
                  <td className="border border-ui-border p-3">6-8"</td>
                  <td className="border border-ui-border p-3">10-14"</td>
                  <td className="border border-ui-border p-3">Singapura, Munchkin</td>
                </tr>
                <tr className="bg-ui-surface">
                  <td className="border border-ui-border p-3 font-semibold">S</td>
                  <td className="border border-ui-border p-3">6-10 lbs</td>
                  <td className="border border-ui-border p-3">8-10"</td>
                  <td className="border border-ui-border p-3">14-16"</td>
                  <td className="border border-ui-border p-3">Siamese, Abyssinian</td>
                </tr>
                <tr>
                  <td className="border border-ui-border p-3 font-semibold">M</td>
                  <td className="border border-ui-border p-3">10-14 lbs</td>
                  <td className="border border-ui-border p-3">10-12"</td>
                  <td className="border border-ui-border p-3">16-18"</td>
                  <td className="border border-ui-border p-3">American Shorthair, British Shorthair</td>
                </tr>
                <tr className="bg-ui-surface">
                  <td className="border border-ui-border p-3 font-semibold">L</td>
                  <td className="border border-ui-border p-3">14+ lbs</td>
                  <td className="border border-ui-border p-3">12-14"</td>
                  <td className="border border-ui-border p-3">18-22"</td>
                  <td className="border border-ui-border p-3">Maine Coon, Ragdoll</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Additional Tips */}
        <div className="card p-8">
          <h3 className="text-xl font-bold text-ui-text-primary mb-6">Sizing Tips</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-primary-green mb-3">✅ Perfect Fit Guidelines</h4>
              <ul className="space-y-2 text-sm">
                <li>• Collar should fit with 2 fingers underneath</li>
                <li>• Harness should be snug but not tight</li>
                <li>• Clothing should allow free movement</li>
                <li>• Measure when pet is standing naturally</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary-orange mb-3">⚠️ Common Mistakes</h4>
              <ul className="space-y-2 text-sm">
                <li>• Measuring when pet is lying down</li>
                <li>• Pulling tape measure too tight</li>
                <li>• Guessing based on breed alone</li>
                <li>• Not accounting for fur thickness</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SizeGuidePage
