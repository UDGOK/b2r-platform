'use client';

import { useEffect, useRef } from 'react';
import { initializeAnimations } from './animations';

const navigationItems = [
  {
    title: 'Housing Management',
    description: 'Complete housing management solution for modern properties',
    features: [
      'Room Assignment & Inventory',
      'Maintenance & Inspections',
      'Contract Management',
      'Billing & Payments'
    ],
    videoSrc: '/videos/housing.mp4'
  },
  {
    title: 'Student Experience',
    description: 'Enhanced living experience for residents',
    features: [
      'Mobile App & Portal',
      'Event Management',
      'Communication Tools',
      'Community Engagement'
    ],
    videoSrc: '/videos/experience.mp4'
  },
  {
    title: 'Business Intelligence',
    description: 'Data-driven insights for informed decision making',
    features: [
      'Real-time Analytics',
      'Custom Reporting',
      'Occupancy Tracking',
      'Financial Forecasting'
    ],
    videoSrc: '/videos/analytics.mp4'
  }
];

export default function Home() {
  const videoRefs = {
    hero: useRef<HTMLVideoElement>(null),
    features: useRef<HTMLVideoElement>(null),
  };

  useEffect(() => {
    initializeAnimations();
  }, []);

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen">
        <video
          ref={videoRefs.hero}
          className="absolute inset-0 w-full h-full object-cover scale-105 transform transition-transform duration-[1.5s]"
          autoPlay
          muted
          loop
          playsInline
          src="/videos/hero.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="space-y-8 px-4">
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight fade-up">
              Modern Property
              <br />
              Management
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto fade-up">
              Transform your property management with our comprehensive solution
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Grid */}
      <section className="relative py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gray-900 p-8 hover:bg-gray-800 transition-all duration-500 fade-up"
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 mb-6">{item.description}</p>
                  <ul className="space-y-3">
                    {item.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center text-gray-300">
                        <svg
                          className="w-5 h-5 mr-3 text-blue-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    src={item.videoSrc}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="relative min-h-screen bg-black py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight fade-up">
              Comprehensive
              <br />
              Management Suite
            </h2>
            <p className="text-xl text-gray-400 mt-6 fade-up">
              Everything you need to manage your properties efficiently
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="fade-up">
                <h3 className="text-2xl font-bold text-white mb-4">Room Management</h3>
                <p className="text-gray-400">
                  Efficiently manage room assignments, transfers, and inventory tracking
                </p>
              </div>
              <div className="fade-up">
                <h3 className="text-2xl font-bold text-white mb-4">Maintenance</h3>
                <p className="text-gray-400">
                  Track and resolve maintenance requests with automated workflows
                </p>
              </div>
              <div className="fade-up">
                <h3 className="text-2xl font-bold text-white mb-4">Billing</h3>
                <p className="text-gray-400">
                  Streamline billing processes and payment collections
                </p>
              </div>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden fade-up">
              <video
                ref={videoRefs.features}
                className="absolute inset-0 w-full h-full object-cover scale-105"
                muted
                loop
                playsInline
                src="/videos/features.mp4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative min-h-screen bg-black flex items-center justify-center">
        <div className="text-center space-y-8 px-4">
          <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tight fade-up">
            Ready to Transform
            <br />
            Your Properties?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto fade-up">
            Join thousands of properties using our management platform
          </p>
          <div className="pt-8 fade-up">
            <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
