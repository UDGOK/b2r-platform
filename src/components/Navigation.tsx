'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, isLoading } = useUser();

  return (
    <nav className="flex items-center justify-between h-20">
      <Link href="/" className="text-2xl font-bold text-white">
        B2R Platform
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center space-x-8">
        <div className="relative group">
          <button className="text-white hover:text-blue-500 transition-colors py-2">
            Property Management
          </button>
          <div className="absolute top-full left-0 hidden group-hover:block bg-black/90 backdrop-blur-lg rounded-lg p-4 w-64">
            <Link
              href="/property-management/lease"
              className="block px-4 py-2 text-white hover:text-blue-500 transition-colors"
            >
              Lease Management
            </Link>
            <Link
              href="/property-management/maintenance"
              className="block px-4 py-2 text-white hover:text-blue-500 transition-colors"
            >
              Maintenance
            </Link>
            <Link
              href="/property-management/analytics"
              className="block px-4 py-2 text-white hover:text-blue-500 transition-colors"
            >
              Analytics
            </Link>
          </div>
        </div>
        <Link
          href="/pricing"
          className="text-white hover:text-blue-500 transition-colors"
        >
          Pricing
        </Link>
        {!isLoading && (
          <>
            {user ? (
              <Link
                href="/api/auth/logout"
                className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              >
                Logout
              </Link>
            ) : (
              <Link
                href="/api/auth/login"
                className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              >
                Get Started
              </Link>
            )}
          </>
        )}
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-20 bg-black/90 backdrop-blur-lg transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <div className="font-semibold text-white px-4">
                Property Management
              </div>
              <Link
                href="/property-management/lease"
                className="block px-4 py-2 text-gray-300 hover:text-blue-500 transition-colors"
              >
                Lease Management
              </Link>
              <Link
                href="/property-management/maintenance"
                className="block px-4 py-2 text-gray-300 hover:text-blue-500 transition-colors"
              >
                Maintenance
              </Link>
              <Link
                href="/property-management/analytics"
                className="block px-4 py-2 text-gray-300 hover:text-blue-500 transition-colors"
              >
                Analytics
              </Link>
            </div>
            <Link
              href="/pricing"
              className="block px-4 py-2 text-gray-300 hover:text-blue-500 transition-colors"
            >
              Pricing
            </Link>
            <div className="px-4">
              {!isLoading && (
                <>
                  {user ? (
                    <Link
                      href="/api/auth/logout"
                      className="inline-block px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                    >
                      Logout
                    </Link>
                  ) : (
                    <Link
                      href="/api/auth/login"
                      className="inline-block px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                    >
                      Get Started
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
