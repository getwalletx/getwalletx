import { Button } from "@/components/ui/button";
import { ArrowDownToLine, Star } from "lucide-react";
import { FlipWords } from "./ui/flip-words";
import UsersReview from "./UsersReview";

export default function HeroSection() {
  const words = ["Simple", "Secure", "Gasless", "Fast"];

  return (
    <section className="container mx-auto px-4 min-h-[90vh] flex items-center justify-center dark:bg-slate-900">
      <div className="max-w-4xl mx-auto text-center py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 text-neutral-900 dark:text-white">
          <span className="block overflow-hidden">
            Experience <br />
            <FlipWords words={words} duration={1000} />{" "}
          </span>
          Blockchain Transactions
        </h1>

        <p className="text-xl md:text-2xl mb-8 md:mb-12 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Unlock a seamless, fee-free blockchain experience with WalletX, a
          Chrome extension enabling gasless transactions.
        </p>

        <Button
          size="lg"
          className="bg-primary text-white mb-12 md:mb-16 hover:bg-primary/90 dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white transition-colors px-8 py-6 text-lg"
        >
          <ArrowDownToLine className="mr-3 h-5 w-5 md:h-6 md:w-6" />
          Download Now on Chrome Store
        </Button>

        <div className="flex flex-col items-center space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <UsersReview />
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  fill="gold"
                  className="w-7 h-7 md:w-9 md:h-9 text-yellow-400"
                />
              ))}
            </div>
          </div>

          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
            Join over 300 happy users who are already enjoying seamless
            transactions!
          </p>
        </div>
      </div>
    </section>
  );
}
