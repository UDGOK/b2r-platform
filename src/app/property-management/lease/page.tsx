'use client';

import { useEffect, useRef } from 'react';
import { initializeAnimations } from '../../animations';

const features = [
  {
    title: 'Automated Lease Operations',
    description: 'Streamline your lease management with intelligent automation',
    details: [
      'Automated rent reviews and increases',
      'Lease renewal reminders and workflows',
      'Document generation and e-signatures',
      'Critical date notifications'
    ],
    videoSrc: '/videos/automation.mp4'
  },
  {
    title: 'Financial Management',
    description: 'Comprehensive financial tracking and reporting',
    details: [
      'Real-time rent collection tracking',
      'Operating expense reconciliation',
      'Automated invoicing and payments',
      'Financial performance analytics'
    ],
    videoSrc: '/videos/financial.mp4'
  },
  {
    title: 'Document Management',
    description: 'Centralized document storage and processing',
    details: [
      'Digital lease document storage',
      'Version control and audit trail',
      'Secure document sharing',
      'Template management'
    ],
    videoSrc: '/videos/documents.mp4'
  }
];

const metrics = [
  {
    value: '85%',
    label: 'Time Saved on Lease Admin',
    description: 'Reduce manual lease management tasks'
  },
  {
    value: '99%',
    label: 'Accuracy Rate',
    description: 'In lease data and calculations'
  },
  {
    value: '60%',
    label: 'Faster Lease Processing',
    description: 'From draft to signature'
  }
];

export default function LeaseManagement() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    initializeAnimations();
  }, []);

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover scale-105 transform transition-transform duration-[1.5s]"
          autoPlay
          muted
          loop
          playsInline
          src="/videos/lease-hero.mp4"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="space-y-8 px-4">
            <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight fade-up">
              Intelligent Lease
              <br />
              Management
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto fade-up">
              Transform your lease operations with AI-powered automation
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gray-900/50 backdrop-blur-xl p-8 hover:bg-gray-800/50 transition-all duration-500 fade-up"
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.details.map((detail, dIndex) => (
                      <li key={dIndex} className="flex items-center text-gray-300">
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
                        {detail}
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
                    src={feature.videoSrc}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="relative py-24 bg-black/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="text-center fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-6xl font-bold text-blue-500 mb-4">{metric.value}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{metric.label}</h3>
                <p className="text-gray-400">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="relative py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight fade-up">
              Streamlined
              <br />
              Lease Workflow
            </h2>
            <p className="text-xl text-gray-400 mt-6 fade-up">
              Automate your entire lease lifecycle from start to finish
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="fade-up">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Lease Creation & Approval
                </h3>
                <p className="text-gray-400">
                  Generate lease documents automatically with smart templates and approval
                  workflows
                </p>
              </div>
              <div className="fade-up">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Digital Signatures & Storage
                </h3>
                <p className="text-gray-400">
                  Secure e-signature collection and centralized document storage
                </p>
              </div>
              <div className="fade-up">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Automated Renewals
                </h3>
                <p className="text-gray-400">
                  Streamline lease renewals with automated notifications and workflows
                </p>
              </div>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden fade-up">
              <video
                className="absolute inset-0 w-full h-full object-cover scale-105"
                autoPlay
                muted
                loop
                playsInline
                src="/videos/workflow.mp4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-t from-black to-blue-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 fade-up">
              Ready to Transform Your
              <br />
              Lease Management?
            </h2>
            <p className="text-xl text-gray-300 mb-12 fade-up">
              Join thousands of properties using our intelligent lease management platform
            </p>
            <button className="px-8 py-4 bg-blue-500 text-white rounded-full text-lg font-semibold hover:bg-blue-600 transition-colors fade-up">
              Schedule a Demo
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
