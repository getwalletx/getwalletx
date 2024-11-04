import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function GetStartedSection() {
  return (
    <section id="get-started" className="bg-gray-100 dark:bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Get Started with WalletX
        </h2>
        <Tabs defaultValue="newbie" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="newbie">Newbie</TabsTrigger>
            <TabsTrigger value="degen">Degen</TabsTrigger>
          </TabsList>
          <TabsContent value="newbie">
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Install Extension
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Download and install the WalletX Chrome extension to get
                    started.
                  </p>
                  <div className="aspect-video bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 dark:text-gray-300">
                      Image Placeholder
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Connect Wallet</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Link your existing Web3 wallet to WalletX for seamless
                    integration.
                  </p>
                  <div className="aspect-video bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 dark:text-gray-300">
                      Image Placeholder
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Enjoy Gasless Transactions
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Start making transactions without worrying about gas fees!
                  </p>
                  <div className="aspect-video bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 dark:text-gray-300">
                      Image Placeholder
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="degen">
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">Integrate SDK</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Implement WalletX SDK into your dApp for gasless
                    transactions.
                  </p>
                  <div className="aspect-video bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 dark:text-gray-300">
                      Image Placeholder
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Configure Ad Settings
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Set up your preferred ad display options for gas fee
                    coverage.
                  </p>
                  <div className="aspect-video bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 dark:text-gray-300">
                      Image Placeholder
                    </span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Monitor Analytics
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Track user engagement and transaction metrics in real-time.
                  </p>
                  <div className="aspect-video bg-gray-300 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <span className="text-gray-600 dark:text-gray-300">
                      Image Placeholder
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
