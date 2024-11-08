import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Rocket, Code, Sparkles } from "lucide-react";
import Image from "next/image";

export function GetStartedSection() {
  return (
    <section
      id="get-started"
      className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-24"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <span className="inline-block p-2 bg-blue-100 dark:bg-blue-900 rounded-lg mb-4">
            <Rocket className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </span>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            Let&apos;s get started
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg text-center max-w-2xl">
            Choose your path and start your crypto journey with WalletX
          </p>
        </div>

        <Tabs defaultValue="newbie" className="w-full max-w-5xl mx-auto">
          <TabsList className="flex w-full max-w-md mx-auto mb-12 py-6 px-2 bg-gray-200 dark:bg-gray-700/50 rounded-full">
            <TabsTrigger
              value="newbie"
              className="w-1/2 rounded-full px-8 py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-sm transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>I&apos;m New to Crypto</span>
            </TabsTrigger>
            <TabsTrigger
              value="degen"
              className="w-1/2 rounded-full px-8 py-2 data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800 data-[state=active]:shadow-sm transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Code className="w-4 h-4" />
              <span>I&apos;m a Crypto Degen</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="newbie">
            <div className="grid lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Install Extension",
                  description:
                    "Download and install the WalletX chrome extension from below.",
                  image: "chrome-store",
                },
                {
                  title: "Create Your Wallet",
                  description:
                    "Open the extension and create a new wallet with just one click.",
                  image: "wallet-connect",
                },
                {
                  title: "Backup Your Wallet",
                  description:
                    "Save your wallet's seed phrase from settings and keep it safe.",
                  image: "transactions",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 dark:bg-gray-800/50 dark:hover:bg-gray-800 border-gray-200 dark:border-gray-700"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-semibold">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {item.description}
                    </p>
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                      <Image
                        src={`/api/placeholder/400/225`}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        width={400}
                        height={225}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="degen">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Install Extension",
                  description:
                    "Download and install the WalletX chrome extension from below.",
                  image: "chrome-store",
                },
                {
                  title: "Import Your Old Wallet",
                  description:
                    "Import your old wallet's seed phrase and setup your new gasless wallet.",
                  image: "settings",
                },
                {
                  title: "Happy Degen-ing",
                  description:
                    "Enjoy gasless experience across 30+ EVM chains in the cryptoverse.",
                  image: "analytics",
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 dark:bg-gray-800/50 dark:hover:bg-gray-800 border-gray-200 dark:border-gray-700"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 font-semibold">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {item.description}
                    </p>
                    <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-300">
                      <Image
                        src={`/api/placeholder/400/225`}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        width={400}
                        height={225}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default GetStartedSection;
