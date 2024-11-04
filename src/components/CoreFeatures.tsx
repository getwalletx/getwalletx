import React from "react";
import { InfiniteSlider } from "@/components/motion-ui/InfiniteSlider";

const walletXFeatures = [
  {
    title: "1-Click Wallet Creation",
    description:
      "Simplifies onboarding with instant Web3 wallet creation in one click, allowing users to explore dApps, receive crypto & NFTs seamlessly.",
  },
  {
    title: "Gasless Transactions",
    description:
      "Enables no-gas transactions on major EVM chains by watching a short ad before confirming, ensuring a seamless experience.",
  },
  {
    title: "Batch Transactions",
    description:
      "Combines multiple blockchain actions into one, reducing individual transactions, saving gas fees, and simplifying user experience.",
  },
  {
    title: "Address Book",
    description:
      "Manages multiple addresses, allowing users to save and organize frequently used addresses with labels for quick, error-free access.",
  },
  {
    title: "Multi-Chain Support",
    description:
      "Allows asset management across networks like Ethereum, BSC, and Polygon, with easy network switching and reduced transaction costs.",
  },
  {
    title: "Passkey Implementation",
    description:
      "Offers secure login with passwords, fingerprints, or FaceID, ensuring convenient, multi-layered security.",
  },
  {
    title: "Non-Custodial Feature",
    description:
      "Gives users control over their private keys, ensuring secure, independent asset management without third-party reliance.",
  },
  {
    title: "EOA Wallet Support",
    description:
      "Supports Externally Owned Accounts (EOA), offering flexibility and secure transaction management across dApps.",
  },
  {
    title: "DApp Interaction via WalletConnect",
    description:
      "Securely connects WalletX with dApps, allowing easy transaction approvals directly within the wallet interface.",
  },
  {
    title: "View, Send, Receive NFTs",
    description:
      "Provides a gasless experience for NFT management, with easy integration to platforms like OpenSea for seamless transactions.",
  },
  {
    title: "Optional Gas Payment",
    description:
      "Allows users to choose between gasless transactions or paying gas fees, adding flexibility based on transaction needs.",
  },
  {
    title: "Gasless Swaps",
    description:
      "Facilitates no-fee token swaps, simplifying trading without gas costs for an improved experience.",
  },
  {
    title: "No-Faucet Development Mode",
    description:
      "Provides a developer mode for testnet access without ads, streamlining testing and development for a better workflow.",
  },
  {
    title: "Multiple Seed Phrase Management",
    description:
      "Allows secure management of multiple accounts with separate seed phrases, offering flexibility and safety for asset management.",
  },
  {
    title: "User Dashboard",
    description:
      "Rewards users for on-chain activity with gasless transactions, reclaimable gas fees, daily rewards, and additional earning features.",
  },
];

export default function CoreFeatures() {
  return (
    <div className="w-full py-8">
      <h2 className="text-3xl font-bold mb-12 text-center">Core Features</h2>
      <InfiniteSlider gap={24} duration={100} durationOnHover={500}>
        {walletXFeatures.map((feature, index) => (
          <div
            key={index}
            className="w-[280px] flex flex-col gap-3 bg-white/5 p-4 rounded-lg"
          >
            <div className="aspect-square w-full rounded-lg bg-gray-700" />
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-sm text-gray-400">{feature.description}</p>
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}
