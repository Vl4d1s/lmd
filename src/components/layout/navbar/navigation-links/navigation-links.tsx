'use client';

import Link from 'next/link';
import { NavigationLink } from '@/configurations/navigation-links';
import { useState } from 'react';

export type NavigationLinksProps = {
  links: NavigationLink[];
  platform: 'desktop' | 'mobile';
};

const NavigationLinks = ({ links, platform }: NavigationLinksProps) => {
  const [activeLink, setActiveLink] = useState(links[0].href);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return platform === 'mobile' ? (
    <div className="pt-2 pb-3">
      {links.map(link => (
        <Link
          className={`${
            activeLink === link.href
              ? 'border-indigo-600 text-indigo-600 font-bold border-l-4'
              : 'border-transparent text-gray-500'
          } block hover:text-indigo-600 pl-3 pr-4 py-2 text-lg border-indigo-600 font-medium focus:outline-none focus:bg-gray-50 focus:text-indigo-600`}
          href={link.href}
          key={link.name}
          onClick={() => handleLinkClick(link.href)}
        >
          {link.name}
        </Link>
      ))}
    </div>
  ) : (
    <div className="hidden sm:-my-px sm:ml-6 sm:flex items-center">
      {links.map((link, index) => (
        <Link
          className={`inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 ${
            activeLink === link.href
              ? 'border-indigo-600 text-indigo-600 font-bold hover:border-gray-300 focus:outline-none focus:border-gray-300 transition duration-150 ease-in-out'
              : 'border-transparent text-gray-500 hover:text-indigo-600 focus:outline-none focus:text-indigo-600 transition duration-150 ease-in-out'
          } ${index > 0 ? 'ml-6' : ''}`}
          href={link.href}
          key={link.name}
          onClick={() => handleLinkClick(link.href)}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default NavigationLinks;
