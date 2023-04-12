'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import appLogo from '@/assets/app-logo.png';
import NavigationLinks from '@/components/layout/navbar/navigation-links/navigation-links';
import { navigationLinks } from '@/configurations/navigation-links';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center mr-8">
              <Link href="/">
                <Image alt="lmd" className="h-10 w-auto" src={appLogo} />
              </Link>
            </div>
            <NavigationLinks links={navigationLinks} platform="desktop" />
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              aria-expanded="false"
              aria-label="Main menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900
              hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-900 transition duration-150 ease-in-out"
              onClick={toggleMobileMenu}
              type="button"
            >
              <svg
                className={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <NavigationLinks links={navigationLinks} platform="mobile" />
      </div>
    </nav>
  );
}
