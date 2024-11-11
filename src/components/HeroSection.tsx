/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { ArrowDownToLine, Star, WalletCards } from "lucide-react";
import { FlipWords } from "./ui/flip-words";
import UsersReview from "./UsersReview";
import { Cover } from "./ui/cover";
import Link from "next/link";
import Image from "next/image";
import PeerList from "../assets/PeerListProductOfTheWeek.png";
import GG20 from "../assets/GitcoinGrants20.png";
import ETHOnline23 from "../assets/ETHOnline2023Winner.png";
import { useEffect } from "react";
import { useState } from "react";

export default function HeroSection() {
  const words = ["Simple", "Gasless", "Secure", "Gasless", "Fast", "Gasless"];

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
    <section className=" bg-gradient-to-b from-gray-50 to-gray-100  mx-auto px-4 min-h-[90vh] flex items-center justify-center dark:bg-slate-900">
      <div className="max-w-4xl mx-auto text-center py-16 md:py-24">
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 text-neutral-900 dark:text-white relative z-0">
          <span className=" overflow-hidden flex gap-2 ">
            <span className="ml-12">Experience</span>
            <div className="relative">
              <div className="absolute">
                <FlipWords words={words} duration={1000} />
              </div>
            </div>
          </span>
          <Cover>On-Chain Transactions</Cover>
        </h1>

        <p className="text-lg md:text-2xl mb-8 md:mb-12 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Unlock a seamless, fee-free blockchain experience with WalletX, a
          Chrome extension enabling gasless transactions.
        </p>

        <Button
          onClick={handleAction}
          size="lg"
          className="bg-primary text-white mb-12 md:mb-16 hover:bg-primary/90 dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white transition-colors px-8 py-6 text-lg relative z-20"
        >
          {isMobile ? (
            <>
              <WalletCards className="mr-2 h-9 w-9" /> Try WalletX Now
            </>
          ) : (
            <>
              <ArrowDownToLine className="mr-2 h-7 w-7" /> Download Now on
              Chrome Store
            </>
          )}
        </Button>

        <div className="flex flex-col-reverse  items-center gap-10 justify-between sm:flex-row  ">
          <div className="flex flex-col items-center space-y-6">
            <div className="flex   gap-7 items-center  justify-center">
              <UsersReview />
              <div className="flex justify-center items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    fill="gold"
                    className="w-7 h-7 md:w-7 md:h-7 text-yellow-400"
                  />
                ))}
              </div>
            </div>

            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
              Join over 300 happy users who are <br /> already enjoying seamless
              transactions!
            </p>
          </div>

          <div className=" flex flex-col ">
            <div className=" flex items-center justify-center gap-4 md:flex-row md:gap-8">
              <Link href={"https://peerlist.io/cryptorohittt/project/walletx"}>
                <Image
                  src={PeerList.src}
                  alt="ETHOnline23"
                  width={150}
                  height={150}
                />
              </Link>
              <Link href={"https://ethglobal.com/showcase/walletx-q8oxg"}>
                <Image
                  src={ETHOnline23.src}
                  alt="ETHOnline23"
                  width={150}
                  height={150}
                />
              </Link>
            </div>
            <div className="flex items-center justify-center gap-4 md:flex-row md:gap-8">
              <Link href={"https://explorer.gitcoin.co/#/round/42161/610/28"}>
                <Image
                  src={GG20.src}
                  alt="GitcoinGrants20"
                  width={150}
                  height={150}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
