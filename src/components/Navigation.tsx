'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { user, isLoading } = useUser();

  const propertyMenu = [
    { name: 'Property Management', href: '/property-management' },
    { name: 'Student Experience', href: '/student-experience' },
    { name: 'Business Intelligence', href: '/business-intelligence' },
  ];

  const resourcesMenu = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  if (user) {
    resourcesMenu.unshift({ name: 'Management Portal', href: '/management' });
  }

  return (
    <nav className="bg-black/90 backdrop-blur-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white hover:text-orange-500 transition-colors">
            B2R Platform
          </Link>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Property Solutions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('property')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium flex items-center space-x-1">
                <span>Property Solutions</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeDropdown === 'property' && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-black/90 backdrop-blur-sm ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu">
                    {propertyMenu.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium flex items-center space-x-1">
                <span>Resources</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeDropdown === 'resources' && (
                <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-black/90 backdrop-blur-sm ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu">
                    {resourcesMenu.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-800"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Auth */}
            {!isLoading && (
              <div>
                {user ? (
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-300 text-sm">Welcome, {user.name}</span>
                    <a
                      href="/api/auth/logout"
                      className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded text-sm font-medium"
                    >
                      Logout
                    </a>
                  </div>
                ) : (
                  <a
                    href="/api/auth/login"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded text-sm font-medium"
                  >
                    Login
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setActiveDropdown(activeDropdown ? null : 'mobile')}
              className="text-gray-300 hover:text-white"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {activeDropdown === 'mobile' ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {activeDropdown === 'mobile' && (
        <div className="md:hidden bg-black/90 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {propertyMenu.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
              >
                {item.name}
              </Link>
            ))}
            {resourcesMenu.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
              >
                {item.name}
              </Link>
            ))}
            {!isLoading && (
              <div className="px-3 py-2">
                {user ? (
                  <div className="space-y-2">
                    <span className="block text-gray-300">Welcome, {user.name}</span>
                    <a
                      href="/api/auth/logout"
                      className="block w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded text-center"
                    >
                      Logout
                    </a>
                  </div>
                ) : (
                  <a
                    href="/api/auth/login"
                    className="block w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded text-center"
                  >
                    Login
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
