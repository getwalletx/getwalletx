import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";

export function CTASection() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <h2 className="text-3xl font-bold mb-6">
        Experience the power of WalletX
      </h2>
      <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
        Join thousands of users already enjoying fee-free blockchain
        interactions with WalletX.
      </p>
      <Button size="lg" className="bg-primary text-white">
        <ArrowDownToLine className="mr-2 h-5 w-5" /> Download WalletX Now
      </Button>
    </section>
  );
}
