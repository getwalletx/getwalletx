"use client";

import HeroSection from "@/components/HeroSection";
import { GetStartedSection } from "@/components/GetStartedSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ComparisonSection } from "@/components/ComparisonSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import { TeamSection } from "@/components/TeamSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import CoreFeatures from "@/components/CoreFeatures";
import { MacbookScrollDemo } from "@/components/MacbookScrollDemo";
import { SVGMaskEffectDemo } from "../components/Test";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800 dark:text-white transition-colors duration-200 overflow-x-hidden">
      <main>
        <HeroSection />

        <MacbookScrollDemo />
        <GetStartedSection />
        <CoreFeatures />
        <ServicesSection />
        <ComparisonSection />
        <TestimonialsSection />
        <TeamSection />
        <FAQSection />
        <SVGMaskEffectDemo />
      </main>
      <Footer />
    </div>
  );
}
