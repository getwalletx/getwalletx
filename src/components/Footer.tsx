import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">WalletX</h3>
            <p className="text-sm text-gray-400">
              Experience gasless blockchain transactions effortlessly.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#get-started"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Get Started
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#comparison"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Comparison
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  For Users
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  For Developers
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-white">
                  For Advertisers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-400 mb-2">
              Email: support@walletx.com
            </p>
            <p className="text-sm text-gray-400 mb-4">
              Phone: +1 (123) 456-7890
            </p>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          © 2024 WalletX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
