import { Button } from "@/components/ui/button";
import { ArrowDownToLine } from "lucide-react";

export function CTASection() {
  return (
    <section className="container bg-gradient-to-b from-gray-50 to-gray-100 mx-auto px-4 pt-24 pb-56 text-center h-full w-full">
      <h2 className="text-6xl font-bold mb-6">
        Experience What&apos;s Under the Hood
      </h2>
      <p className="text-xl mb-8 text-\ray-600 dark:text-gray-300">
        Join the ones who have the secret from the future. 
      </p>
      <Button
        size="xl"
        className=" text-xl relative bg-primary text-white z-50 mt-10"
      >
        <ArrowDownToLine className="mr-2 h-7 w-7" /> Download WalletX Now
      </Button>
    </section>
  );
}
