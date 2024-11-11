import { Button } from "@/components/ui/button";
import { ArrowDownToLine, WalletCards } from "lucide-react";
import { useEffect } from "react";
import { useState } from "react";

export function CTASection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleAction = () => {
    const url = isMobile
      ? "https://app.getwalletx.com/"
      : "https://chromewebstore.google.com/detail/walletx-a-gasless-smart-w/mdjjoodeandllhefapdpnffjolechflh";
    window.location.href = url;
  };
  return (
    <section className="container bg-gradient-to-b from-gray-50 to-gray-100 mx-auto px-4 pt-24 pb-56 text-center h-full w-full">
      <h2 className="text-3xl  sm:text-6xl font-bold mb-6 ">
        Experience What&apos;s Under the Hood
      </h2>
      <p className="text-lg sm:text-xl mb-8 text-\ray-600 dark:text-gray-300">
        Join the ones who have the secret from the future.
      </p>
      <Button
        onClick={handleAction}
        size="xl"
        className=" text-xl relative bg-primary text-white z-50 mt-10 "
      >
        {isMobile ? (
          <>
            <WalletCards className="mr-2 h-9 w-9" /> Try WalletX
          </>
        ) : (
          <>
            <ArrowDownToLine className="mr-2 h-7 w-7" /> Download WalletX Now
          </>
        )}
      </Button>
    </section>
  );
}
