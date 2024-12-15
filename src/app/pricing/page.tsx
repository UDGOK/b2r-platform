'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Feature {
  name: string;
  starter: boolean | string;
  growth: boolean | string;
  business: boolean | string;
}

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const features: Feature[] = [
    { name: 'Number of Units', starter: '75', growth: '150', business: 'Unlimited' },
    { name: 'Online Rent Collection', starter: true, growth: true, business: true },
    { name: 'Tenant Screening', starter: true, growth: true, business: true },
    { name: 'Maintenance Management', starter: true, growth: true, business: true },
    { name: 'Lease Management', starter: true, growth: true, business: true },
    { name: 'Tenant Portal', starter: true, growth: true, business: true },
    { name: 'Owner Portal', starter: false, growth: true, business: true },
    { name: 'Marketing Website', starter: false, growth: true, business: true },
    { name: 'API Access', starter: false, growth: false, business: true },
    { name: 'Custom Reports', starter: false, growth: false, business: true },
    { name: 'Priority Support', starter: false, growth: false, business: true },
  ];

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: 12,
      annualPrice: 10,
      description: 'Perfect for small landlords and property managers',
      features: features.map(f => ({ name: f.name, included: f.starter })),
      color: 'orange',
    },
    {
      name: 'Growth',
      monthlyPrice: 40,
      annualPrice: 35,
      description: 'Ideal for growing property management businesses',
      features: features.map(f => ({ name: f.name, included: f.growth })),
      color: 'blue',
      popular: true,
    },
    {
      name: 'Business',
      monthlyPrice: 200,
      annualPrice: 180,
      description: 'For established property management companies',
      features: features.map(f => ({ name: f.name, included: f.business })),
      color: 'purple',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-20">
      {/* Header */}
      <div className="text-center mb-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Simple, Transparent Pricing
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-300 max-w-2xl mx-auto px-4"
        >
          Choose the perfect plan for your property management needs
        </motion.p>

        {/* Billing Toggle */}
        <div className="mt-8 flex items-center justify-center space-x-4">
          <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-gray-400'}`}>Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                isAnnual ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
          <span className={`text-sm ${isAnnual ? 'text-white' : 'text-gray-400'}`}>
            Annual <span className="text-orange-500">(Save 15%)</span>
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`relative bg-gray-900/50 rounded-lg p-8 ${
              plan.popular ? 'border-2 border-orange-500' : 'border border-gray-800'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-400 mb-4">{plan.description}</p>
              <div className="text-4xl font-bold text-white mb-2">
                ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                <span className="text-lg text-gray-400">/mo</span>
              </div>
              {isAnnual && (
                <p className="text-sm text-orange-500">
                  Save ${(plan.monthlyPrice - plan.annualPrice) * 12}/year
                </p>
              )}
            </div>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start">
                  <span className="mr-2">
                    {typeof feature.included === 'boolean' ? (
                      feature.included ? (
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )
                    ) : (
                      <span className="text-orange-500 font-medium">{feature.included}</span>
                    )}
                  </span>
                  <span className={`text-sm ${typeof feature.included === 'string' ? 'text-white' : 'text-gray-300'}`}>
                    {feature.name}
                  </span>
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 px-4 rounded-lg font-medium transition-colors
              ${plan.popular
                ? 'bg-orange-500 hover:bg-orange-600 text-white'
                : 'bg-gray-800 hover:bg-gray-700 text-white'
              }`}
            >
              Get Started
            </button>
          </motion.div>
        ))}
      </div>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-white text-center mb-12"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="grid gap-8">
          {[
            {
              question: 'Can I switch plans later?',
              answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
            },
            {
              question: 'Is there a free trial?',
              answer: 'Yes, we offer a 14-day free trial on all plans. No credit card required.'
            },
            {
              question: 'What payment methods do you accept?',
              answer: 'We accept all major credit cards, ACH payments, and wire transfers for annual plans.'
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold text-white mb-2">{faq.question}</h3>
              <p className="text-gray-300">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
