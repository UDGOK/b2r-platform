'use client';

import { useEffect, useState } from 'react';
import { initializeAnimations } from '../animations';

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small properties',
    price: '4',
    unit: 'per unit/month',
    features: [
      'Property Management',
      'Work Orders',
      'Online Payments',
      'Resident Portal',
      'Mobile App',
      'Basic Reporting'
    ],
    highlighted: false,
    cta: 'Get Started'
  },
  {
    name: 'Professional',
    description: 'Ideal for growing portfolios',
    price: '6',
    unit: 'per unit/month',
    features: [
      'Everything in Starter, plus:',
      'Advanced Analytics',
      'Custom Workflows',
      'API Access',
      'Priority Support',
      'Automated Marketing'
    ],
    highlighted: true,
    cta: 'Start Free Trial'
  },
  {
    name: 'Enterprise',
    description: 'For large-scale operations',
    price: 'Custom',
    unit: 'tailored pricing',
    features: [
      'Everything in Professional, plus:',
      'White-label Solution',
      'Dedicated Account Manager',
      'Custom Integrations',
      'SLA Guarantee',
      'Advanced Security'
    ],
    highlighted: false,
    cta: 'Contact Sales'
  }
];

const features = [
  {
    category: 'Core Features',
    items: [
      { name: 'Property Management', starter: true, professional: true, enterprise: true },
      { name: 'Work Orders', starter: true, professional: true, enterprise: true },
      { name: 'Online Payments', starter: true, professional: true, enterprise: true },
      { name: 'Resident Portal', starter: true, professional: true, enterprise: true }
    ]
  },
  {
    category: 'Advanced Features',
    items: [
      { name: 'Custom Workflows', starter: false, professional: true, enterprise: true },
      { name: 'API Access', starter: false, professional: true, enterprise: true },
      { name: 'White-label Solution', starter: false, professional: false, enterprise: true },
      { name: 'Advanced Analytics', starter: false, professional: true, enterprise: true }
    ]
  },
  {
    category: 'Support',
    items: [
      { name: 'Email Support', starter: true, professional: true, enterprise: true },
      { name: 'Priority Support', starter: false, professional: true, enterprise: true },
      { name: 'Dedicated Account Manager', starter: false, professional: false, enterprise: true },
      { name: 'SLA Guarantee', starter: false, professional: false, enterprise: true }
    ]
  }
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [showFeatureComparison, setShowFeatureComparison] = useState(false);

  useEffect(() => {
    initializeAnimations();
  }, []);

  return (
    <main className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-black to-black" />
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight fade-up mb-8">
              Simple, Transparent
              <br />
              Pricing
            </h1>
            <p className="text-xl text-gray-300 fade-up mb-12">
              Choose the perfect plan for your property management needs
            </p>
            
            {/* Pricing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-16 fade-up">
              <span className={`text-lg ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative w-16 h-8 rounded-full bg-blue-900/30 p-1 transition-colors"
              >
                <div
                  className={`w-6 h-6 rounded-full bg-blue-500 transition-transform ${
                    isAnnual ? 'translate-x-8' : ''
                  }`}
                />
              </button>
              <span className={`text-lg ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
                Annual
                <span className="ml-2 text-blue-500 text-sm">Save 20%</span>
              </span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 ${
                  plan.highlighted
                    ? 'bg-blue-900/30 border border-blue-500/30'
                    : 'bg-gray-900/50'
                } backdrop-blur-xl transition-transform hover:scale-105 fade-up`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-500 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400">{plan.description}</p>
                </div>
                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-white">$</span>
                    <span className="text-6xl font-bold text-white mx-1">
                      {isAnnual ? String(Number(plan.price) * 0.8) : plan.price}
                    </span>
                    <span className="text-gray-400">{plan.unit}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
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
                <button
                  className={`w-full py-4 rounded-xl font-semibold transition-colors ${
                    plan.highlighted
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-gray-800 text-white hover:bg-gray-700'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          {/* Feature Comparison Toggle */}
          <div className="text-center mt-16">
            <button
              onClick={() => setShowFeatureComparison(!showFeatureComparison)}
              className="text-blue-500 hover:text-blue-400 transition-colors"
            >
              {showFeatureComparison ? 'Hide' : 'Show'} Feature Comparison
              <svg
                className={`inline-block ml-2 w-4 h-4 transition-transform ${
                  showFeatureComparison ? 'rotate-180' : ''
                }`}
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
          </div>

          {/* Feature Comparison Table */}
          {showFeatureComparison && (
            <div className="mt-16 fade-up">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-800">
                      <th className="text-left py-4 px-6 text-gray-400">Features</th>
                      <th className="text-center py-4 px-6 text-white">Starter</th>
                      <th className="text-center py-4 px-6 text-white">Professional</th>
                      <th className="text-center py-4 px-6 text-white">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((category, cIndex) => (
                      <>
                        <tr key={`category-${cIndex}`} className="border-b border-gray-800">
                          <td
                            colSpan={4}
                            className="py-4 px-6 text-lg font-semibold text-white"
                          >
                            {category.category}
                          </td>
                        </tr>
                        {category.items.map((item, iIndex) => (
                          <tr
                            key={`feature-${cIndex}-${iIndex}`}
                            className="border-b border-gray-800"
                          >
                            <td className="py-4 px-6 text-gray-300">{item.name}</td>
                            <td className="text-center py-4 px-6">
                              {item.starter ? (
                                <svg
                                  className="w-6 h-6 mx-auto text-blue-500"
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
                              ) : (
                                <span className="text-gray-600">—</span>
                              )}
                            </td>
                            <td className="text-center py-4 px-6">
                              {item.professional ? (
                                <svg
                                  className="w-6 h-6 mx-auto text-blue-500"
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
                              ) : (
                                <span className="text-gray-600">—</span>
                              )}
                            </td>
                            <td className="text-center py-4 px-6">
                              {item.enterprise ? (
                                <svg
                                  className="w-6 h-6 mx-auto text-blue-500"
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
                              ) : (
                                <span className="text-gray-600">—</span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-12 text-center fade-up">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              <div className="fade-up">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Can I switch plans later?
                </h3>
                <p className="text-gray-400">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be
                  reflected in your next billing cycle.
                </p>
              </div>
              <div className="fade-up">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Is there a free trial?
                </h3>
                <p className="text-gray-400">
                  Yes, we offer a 14-day free trial for our Professional plan, no credit
                  card required.
                </p>
              </div>
              <div className="fade-up">
                <h3 className="text-xl font-semibold text-white mb-4">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-400">
                  We accept all major credit cards, ACH payments, and wire transfers for
                  enterprise customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
