import { ComparisonChart } from "./ComparisonChart";

export function ComparisonSection() {
  return (
    <section
      id="comparison"
      className="bg-gradient-to-b from-gray-50 to-gray-100 dark:bg-gray-800 py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          WalletX vs Other Wallets
        </h2>
        <ComparisonChart />
        <div className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
          <p>✓ - Feature available | ✗ - Feature not available</p>
        </div>
      </div>
    </section>
  );
}
