import { ArrowDownToLine, Code, PieChart, LucideIcon } from "lucide-react";
import testImg from "../assets/longTest.jpg";
import DisclosureCard from "./DisclosureCard";
// New type for service data
type ServiceData = {
  icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
  link: string;
};

// Array of services
const services: ServiceData[] = [
  {
    icon: ArrowDownToLine,
    title: "WalletX Extension",
    description:
      "Simplify your Web3 transactions by downloading WalletX. Once installed, you can instantly enjoy gasless blockchain interactions—no additional setup needed!",
    cta: "Download Now",
    link: "https://getwalletx.com",
  },
  {
    icon: Code,
    title: "WalletX SDK - Coming Soon!",
    description:
      "Enable gasless transactions within your decentralized application or Web3 wallet with the upcoming WalletX SDK. Users watch a short ad to cover gas fees, keeping transactions free.",
    cta: "Join the Waitlist",
    link: "https://waitlister.me/p/walletx",
  },
  {
    icon: PieChart,
    title: "Advertiser Dashboard",
    description:
      "Reach Web3 users with WalletX's ad network. The advertiser dashboard enables targeted promotions by allowing gas sponsorship in exchange for ad engagement.",
    cta: "Contact Us",
    link: "https://getwalletx.com",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">Our Products</h2>
      <div className="flex gap-10 justify-center items-center flex-col md:flex-row row-span-2 ">
        {services.map((service, index) => (
          <DisclosureCard
            key={index}
            image={testImg}
            title={service.title}
            description={service.description}
            cta={service.cta}
            link={service.link}
          />
        ))}
      </div>
    </section>
  );
}
