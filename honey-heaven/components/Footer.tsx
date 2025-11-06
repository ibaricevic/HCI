import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaGithub, FaYoutube } from "react-icons/fa";
import { RxTwitterLogo } from "react-icons/rx";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        {/* Navigation Links */}
        <div className="flex justify-center gap-5 flex-wrap">
          <Link
            href="/shop"
            className="text-white hover:text-indigo-500 font-medium">
            Shop
          </Link>
          <Link
            href="/blog"
            className="text-white hover:text-indigo-500 font-medium">
            Blog
          </Link>
          <Link
            href="/our-story"
            className="text-white hover:text-indigo-500 font-medium">
            Our Story
          </Link>
          <Link
            href="/learn-&-visit"
            className="text-white hover:text-indigo-500 font-medium">
            Learn & Visit
          </Link>
          <Link
            href="/contact-and-community"
            className="text-white hover:text-indigo-500 font-medium">
            Contact & Community
          </Link>
        </div>

        <p className="mt-6 text-center text-sm text-gray-400 dark:text-gray-500">
          © 2025 Honey Heaven, Inc. All rights reserved.
        </p>

        <div className="flex justify-center gap-6 mt-6 text-xl">
          <Link
            href="#"
            className="hover:text-gray-900 dark:hover:text-white transition">
            <FaFacebookF />
          </Link>
          <Link
            href="#"
            className="hover:text-gray-900 dark:hover:text-white transition">
            <FaInstagram />
          </Link>
          <Link
            href="#"
            className="hover:text-gray-900 dark:hover:text-white transition">
            <RxTwitterLogo />
          </Link>
          <Link
            href="#"
            className="hover:text-gray-900 dark:hover:text-white transition">
            <FaGithub />
          </Link>
          <Link
            href="#"
            className="hover:text-gray-900 dark:hover:text-white transition">
            <FaYoutube />
          </Link>
        </div>
      </div>
    </footer>
  );
}
