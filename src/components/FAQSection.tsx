import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const accordionData = [
  {
    value: "gasless-transactions",
    title: "How does WalletX allow gasless transactions?",
    content:
      "WalletX enables gasless transactions by allowing users to watch a short ad before confirming transactions. This innovative approach covers the gas fees, making transactions free for users.",
  },
  {
    value: "data-security",
    title: "Is my data secure with WalletX?",
    content:
      "WalletX uses a non-custodial model, meaning you hold your private keys. We employ industry-standard encryption and security measures to ensure the safety of your assets and personal information.",
  },
  {
    value: "multiple-wallets",
    title: "Can I manage multiple wallets?",
    content:
      "Yes! WalletX allows you to manage multiple seed phrases easily. You can create and switch between different wallets within the same interface, making it convenient to manage various accounts or separate personal and business transactions.",
  },
  {
    value: "supported-blockchains",
    title: "Which blockchains does WalletX support?",
    content:
      "WalletX supports major EVM-compatible chains including Ethereum, Binance Smart Chain, Polygon, Avalanche, and more. We're constantly working on adding support for additional blockchains to provide a comprehensive multi-chain experience.",
  },
  {
    value: "walletx-dashboard",
    title: "How does the WalletX Dashboard work?",
    content:
      "The WalletX Dashboard provides an overview of your assets across different chains, transaction history, and analytics. It also allows you to reclaim gas fees from previous wallets and earn rewards for your on-chain activity, enhancing your overall crypto experience.",
  },
  {
    value: "developer-friendly",
    title: "Is WalletX suitable for developers?",
    content:
      "WalletX includes a developer-friendly mode that's ideal for testing on testnets without interruptions. It provides seamless integration with development environments and supports interactions with smart contracts, making it a valuable tool for blockchain developers.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="container mx-auto px-4 py-20 max-w-[1000px]">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {accordionData.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
