import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  cta: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  cta,
}: FeatureCardProps) {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md flex flex-col h-full">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
        {description}
      </p>
      <Button variant="outline" className="mt-auto">
        {cta}
      </Button>
    </div>
  );
}
