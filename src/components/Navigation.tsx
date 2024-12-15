'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isLoading } = useUser();

  return (
    <div className="relative">
      <nav className="flex items-center justify-between h-20 px-6 bg-white">
        <Link href="/" className="text-2xl font-bold text-black">
          B2R Platform
        </Link>

        {/* Menu Button */}
        <button
          className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="text-sm font-medium">Menu</span>
          <svg
            className={`w-4 h-4 transform transition-transform ${isMenuOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </nav>

      {/* Dropdown Menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white shadow-lg z-50">
          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Column 1 */}
              <div>
                <h3 className="text-black font-semibold mb-4 text-lg">Property Solutions</h3>
                <div className="space-y-3">
                  <Link 
                    href="/property-management" 
                    className="block text-gray-600 hover:text-black transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Property Management
                  </Link>
                  <Link 
                    href="/student-experience" 
                    className="block text-gray-600 hover:text-black transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Student Experience
                  </Link>
                  <Link 
                    href="/business-intelligence" 
                    className="block text-gray-600 hover:text-black transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Business Intelligence
                  </Link>
                </div>
              </div>

              {/* Column 2 */}
              <div>
                <h3 className="text-black font-semibold mb-4 text-lg">Resources</h3>
                <div className="space-y-3">
                  {user && (
                    <Link 
                      href="/management" 
                      className="block text-gray-600 hover:text-black transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Management Portal
                    </Link>
                  )}
                  <Link 
                    href="/about" 
                    className="block text-gray-600 hover:text-black transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block text-gray-600 hover:text-black transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </div>

              {/* Column 3 - Auth */}
              <div>
                <h3 className="text-black font-semibold mb-4 text-lg">Account</h3>
                <div className="space-y-3">
                  {!isLoading && (
                    <>
                      {user ? (
                        <>
                          <span className="block text-gray-600">Welcome, {user.name}</span>
                          <a
                            href="/api/auth/logout"
                            className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Logout
                          </a>
                        </>
                      ) : (
                        <a
                          href="/api/auth/login"
                          className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Login
                        </a>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
}
