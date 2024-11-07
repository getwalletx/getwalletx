import {
  IconArrowsExchange,
  IconApps,
  IconDeviceMobile,
  IconGauge,
  IconShieldLock,
  IconWallet,
  IconBook,
  IconKey,
} from "@tabler/icons-react";
import Feature from "./ui/feature-card";

const CoreFeatures = () => {
  const features = [
    {
      title: "1-Click Wallet Creation",
      description:
        "Simplifies onboarding with instant Web3 wallet creation in one click, allowing users to explore dApps, receive crypto & NFTs seamlessly.",
      icon: <IconWallet className="w-6 h-6" />,
    },
    {
      title: "Gasless Transactions",
      description:
        "Enables no-gas transactions on major EVM chains by watching a short ad before confirming, ensuring a seamless experience.",
      icon: <IconGauge className="w-6 h-6" />,
    },
    {
      title: "Multi-Chain Support",
      description:
        "Allows asset management across networks like Ethereum, BSC, and Polygon, with easy network switching and reduced transaction costs.",
      icon: <IconApps className="w-6 h-6" />,
    },
    {
      title: "Passkey Implementation",
      description:
        "Offers secure login with passwords, fingerprints, or FaceID, ensuring convenient, multi-layered security.",
      icon: <IconShieldLock className="w-6 h-6" />,
    },
    {
      title: "Gasless Swaps",
      description:
        "Facilitates no-fee token swaps, simplifying trading without gas costs for an improved experience.",
      icon: <IconArrowsExchange className="w-6 h-6" />,
    },
    {
      title: "User Dashboard",
      description:
        "Rewards users for on-chain activity with gasless transactions, reclaimable gas fees, daily rewards, and additional earning features.",
      icon: <IconDeviceMobile className="w-6 h-6" />,
    },
    {
      title: "Address Book",
      description:
        "Manages multiple addresses, allowing users to save and organize frequently used addresses with labels for quick, error-free access.",
      icon: <IconBook className="w-6 h-6" />,
    },
    {
      title: "Non-Custodial Feature",
      description:
        "Gives users control over their private keys, ensuring secure, independent asset management without third-party reliance.",
      icon: <IconKey className="w-6 h-6" />,
    },
  ];

  return (
    <div id="features" className="w-full py-8 dark:bg-black">
      <h2 className="text-3xl font-bold mb-12 text-center">Core Features</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
};
export default CoreFeatures;
