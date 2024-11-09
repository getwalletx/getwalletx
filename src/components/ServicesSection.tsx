import { ArrowDownToLine, Code, PieChart, LucideIcon } from "lucide-react";
import DisclosureCard from "./DisclosureCard";
import walletXExtension from "../assets/ourProducts/walletXBrowserExtension.svg";
import walletXSDK from "../assets/ourProducts/walletXSDK.svg";
import walletXAdSolution from "../assets/ourProducts/walletXAdSolutions.svg";
import { StaticImageData } from "next/image";

// New type for service data
type ServiceData = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  cta: string;
  link: string;
  image: StaticImageData;
};

// Array of services
const services: ServiceData[] = [
  {
    icon: ArrowDownToLine,
    title: "WalletX Browser Extension",
    subtitle: "Our Flagship Product 🏁",
    description:
      "Thoughtfully designed for the next generation of web3 users. Also available as Telegram Mini App & on Mobile Browser.",
    cta: "Download WalletX",
    link: "https://chromewebstore.google.com/detail/walletx-a-gasless-smart-w/mdjjoodeandllhefapdpnffjolechflh",
    image: walletXExtension,
  },
  {
    icon: Code,
    title: "WalletX SDK",
    subtitle: "The Invisible Wallet ⛰",
    description:
      "Allowing DApps to provide their users with state-of-the-art invisible wallet solution under the hood. Few.",
    cta: "Building a DApp? Apply now",
    link: "https://waitlister.me/p/walletx",
    image: walletXSDK,
  },
  {
    icon: PieChart,
    title: "Native Web3 AdTech Solution",
    subtitle: "Reach Millions of Onchain Users 💻",
    description:
      "First-of-its-kind advertisement solution for web3 companies to reach onchain users where they truly are.",
    cta: "Watch Demo",
    link: "https://www.youtube.com/watch?v=hYZWZlkx7ds",
    image: walletXAdSolution,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-gray-100  mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">
        <i className="text-base font-normal">Get to know all</i> <br />
        Our Products
      </h2>
      <div className="flex gap-10 justify-center items-center flex-col md:flex-row row-span-2 ">
        {services.map((service, index) => (
          <DisclosureCard
            key={index}
            image={service.image}
            title={service.title}
            subtitle={service.subtitle}
            description={service.description}
            cta={service.cta}
            link={service.link}
          />
        ))}
      </div>
    </section>
  );
}
