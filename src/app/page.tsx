"use client";

import { HeroSection } from "@/components/HeroSection";
import { GetStartedSection } from "@/components/GetStartedSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { TeamSection } from "@/components/TeamSection";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import CoreFeatures from "@/components/CoreFeatures";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white transition-colors duration-200">
      <main>
        <HeroSection />
        <GetStartedSection />
        <CoreFeatures />
        <ServicesSection />
        <ComparisonSection />
        <TestimonialsSection />
        <TeamSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
