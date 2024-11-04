import { ArrowDownToLine, Code, PieChart, LucideIcon } from "lucide-react";
import { FeatureCard } from "./FeatureCard";

// New type for service data
type ServiceData = {
  icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
};

// Array of services
const services: ServiceData[] = [
  {
    icon: ArrowDownToLine,
    title: "WalletX Extension",
    description: "Simplify your Web3 transactions by downloading WalletX. Once installed, you can instantly enjoy gasless blockchain interactions—no additional setup needed!",
    cta: "Download Now",
  },
  {
    icon: Code,
    title: "WalletX SDK - Coming Soon!",
    description: "Enable gasless transactions within your decentralized application or Web3 wallet with the upcoming WalletX SDK. Users watch a short ad to cover gas fees, keeping transactions free.",
    cta: "Join the Waitlist",
  },
  {
    icon: PieChart,
    title: "Advertiser Dashboard",
    description: "Reach Web3 users with WalletX's ad network. The advertiser dashboard enables targeted promotions by allowing gas sponsorship in exchange for ad engagement.",
    cta: "Contact Us",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <FeatureCard
            key={index}
            icon={<service.icon className="h-12 w-12 text-primary" />}
            title={service.title}
            description={service.description}
            cta={service.cta}
          />
        ))}
      </div>
    </section>
  );
}
