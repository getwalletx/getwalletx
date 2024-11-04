import { Button } from "@/components/ui/button"
import { ArrowDownToLine, Star } from "lucide-react"

export function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-20 flex items-center">
      <div className="w-1/2 pr-8">
        <h1 className="text-5xl font-bold mb-6">Experience Gasless Blockchain Transactions Effortlessly</h1>
        <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">Unlock a seamless, fee-free blockchain experience with WalletX, a Chrome extension enabling gasless transactions.</p>
        <Button size="lg" className="bg-primary text-white mb-8">
          <ArrowDownToLine className="mr-2 h-5 w-5" /> Download Now on Chrome Store
        </Button>
        <div className="flex items-center">
          <div className="flex -space-x-2 mr-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-primary border-2 border-white dark:border-gray-800" />
            ))}
          </div>
          <div className="flex mr-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400" />
            ))}
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">Join over 300 happy users who are already enjoying seamless transactions!</p>
        </div>
      </div>
      <div className="w-1/2">
        <div className="aspect-video bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <span className="text-gray-600 dark:text-gray-300">Hero Image Placeholder</span>
        </div>
      </div>
    </section>
  )
} 