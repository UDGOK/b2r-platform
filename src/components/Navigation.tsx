'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isLoading } = useUser();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

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

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on navigation
  const handleMobileNavigation = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-white hover:text-orange-500 transition-colors">
            B2R Platform
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Property Solutions Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('property')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium flex items-center space-x-1 group">
                <span>Property Solutions</span>
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                <div className="py-1 bg-black/90 backdrop-blur-sm rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
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
            </div>

            {/* Resources Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('resources')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium flex items-center space-x-1 group">
                <span>Resources</span>
                <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
                <div className="py-1 bg-black/90 backdrop-blur-sm rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
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
            </div>

            {/* Auth */}
            {!isLoading && (
              <div>
                {user ? (
                  <div className="flex items-center space-x-4">
                    <span className="text-gray-300 text-sm">Welcome, {user.name}</span>
                    <a
                      href="/api/auth/logout"
                      className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                    >
                      Logout
                    </a>
                  </div>
                ) : (
                  <a
                    href="/api/auth/login"
                    className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                  >
                    Login
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-md"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden transition-all duration-200 ease-in-out ${
            isMobileMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-gray-800">
            {/* Property Solutions Section */}
            <div className="py-2">
              <div className="text-gray-400 px-3 text-sm font-medium">Property Solutions</div>
              {propertyMenu.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                  onClick={handleMobileNavigation}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Resources Section */}
            <div className="py-2">
              <div className="text-gray-400 px-3 text-sm font-medium">Resources</div>
              {resourcesMenu.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800 rounded-md"
                  onClick={handleMobileNavigation}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Auth Section */}
            {!isLoading && (
              <div className="pt-4 pb-3 border-t border-gray-800">
                {user ? (
                  <div className="px-3 space-y-3">
                    <div className="text-gray-400 text-sm">Welcome, {user.name}</div>
                    <a
                      href="/api/auth/logout"
                      onClick={handleMobileNavigation}
                      className="block w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded text-center text-base font-medium transition-colors"
                    >
                      Logout
                    </a>
                  </div>
                ) : (
                  <div className="px-3">
                    <a
                      href="/api/auth/login"
                      onClick={handleMobileNavigation}
                      className="block w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded text-center text-base font-medium transition-colors"
                    >
                      Login
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
