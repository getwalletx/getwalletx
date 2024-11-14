import {
  IconBrandTelegram,
  IconBrandReddit,
  IconBrandInstagram,
  IconBrandMedium,
  IconBrandDiscord,
} from "@tabler/icons-react";
import { Twitter, Linkedin, Lightbulb } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">WalletX</h3>
            <p className="text-sm text-gray-400 mb-4">
              Unlock 100% Gasless Transactions Across Multiple Blockchains!
            </p>
            <Link
              href={"https://insigh.to/b/walletx"}
              className="bg-gray-700 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-600"
            >
              Suggest Features <Lightbulb className="inline-block ml-2 h-5" />
            </Link>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#comparison"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Our Products
                </a>
              </li>
              <li>
                <a
                  href="https://getwalletx.com/pitch"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Pitch Deck
                </a>
              </li>
              <li>
                <a
                  href="#testimonial"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="https://drive.google.com/drive/folders/1ROcyJdv1M4Uzh5_-WhBLsoWBYLrRkhoi?usp=drive_link
"
                  className="text-sm text-gray-400 hover:text-white"
                >
                  Brand Kit
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <a
              href="mailto:hello@getwalletx.com"
              className="text-sm text-gray-400 hover:text-white block mb-2"
            >
              hello@getwalletx.com
            </a>
            <a
              href="https://calendly.com/getwalletx"
              className="text-sm text-gray-400 hover:text-white block mb-4"
            >
              Schedule a call
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex flex-col justify-center gap-3">
              <div className="flex space-x-4">
                <a
                  href="https://x.com/getwalletx"
                  className="text-gray-400 hover:text-white"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://t.me/getwalletx"
                  className="text-gray-400 hover:text-white"
                >
                  <IconBrandTelegram className="h-5 w-5" />
                </a>
                <a
                  href="https://getwalletx.medium.com/"
                  className="text-gray-400 hover:text-white"
                >
                  <IconBrandMedium className="h-5 w-5" />
                </a>
                <a
                  href="https://discord.com/invite/getwalletx"
                  className="text-gray-400 hover:text-white"
                >
                  <IconBrandDiscord className="h-5 w-5" />
                </a>
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://www.linkedin.com/company/getwalletx"
                  className="text-gray-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.reddit.com/r/GaslessWeb3/"
                  className="text-gray-400 hover:text-white"
                >
                  <IconBrandReddit className="h-5 w-5" />
                </a>
                <a
                  href="https://www.reddit.com/r/GaslessWeb3/"
                  className="text-gray-400 hover:text-white"
                >
                  <IconBrandInstagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400 pb-10 md:pb0 ">
          © 2023 WalletX. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
