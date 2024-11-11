import { ComparisonChart } from "./ComparisonChart";

export function ComparisonSection() {
  return (
    <section
      id="comparison"
      className="bg-gradient-to-b from-gray-50 to-gray-100 dark:bg-gray-800 py-10  "
    >
      <div className="max-w-[1000px] mx-auto px-4">
        <h2 className="text-3xl  sm:text-4xl font-bold mb-12 text-center">
          <i className="text-base sm:text-lg font-normal">
            How our wallet differentiate&apos;s from others
          </i>
          <br />
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
