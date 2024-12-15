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
        {user && (
          <Link 
            href="/management" 
            className="text-white hover:text-blue-500 transition-colors"
          >
            Management Portal
          </Link>
        )}
        {!isLoading && (
          <>
            {user ? (
              <a
                href="/api/auth/logout"
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Logout
              </a>
            ) : (
              <a
                href="/api/auth/login"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Login
              </a>
            )}
          </>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-gray-900 py-4 px-6 space-y-4">
          {user && (
            <Link 
              href="/management"
              className="block text-white hover:text-blue-500 transition-colors"
            >
              Management Portal
            </Link>
          )}
          {!isLoading && (
            <>
              {user ? (
                <a
                  href="/api/auth/logout"
                  className="block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors text-center"
                >
                  Logout
                </a>
              ) : (
                <a
                  href="/api/auth/login"
                  className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-center"
                >
                  Login
                </a>
              )}
            </>
          )}
        </div>
      )}
    </nav>
  );
}
