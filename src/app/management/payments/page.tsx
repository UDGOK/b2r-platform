'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  CreditCardIcon,
  CurrencyDollarIcon,
  ArrowPathIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

interface Payment {
  id: number;
  tenant: string;
  amount: number;
  date: string;
  status: 'completed' | 'pending' | 'failed';
  method: 'stripe' | 'blockchain' | 'bank';
}

const PaymentCard = ({ title, value, icon: Icon, subtext }: any) => (
  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-400 text-sm">{title}</p>
        <p className="text-2xl font-bold text-white mt-1">{value}</p>
        <p className="text-sm text-gray-500 mt-1">{subtext}</p>
      </div>
      <Icon className="h-12 w-12 text-blue-500 opacity-80" />
    </div>
  </div>
);

export default function PaymentsManagement() {
  const { user, isLoading } = useUser();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/');
    }
  }, [isLoading, user, router]);

  const payments: Payment[] = [
    { id: 1, tenant: 'John Doe', amount: 1500, date: '2023-12-15', status: 'completed', method: 'stripe' },
    { id: 2, tenant: 'Jane Smith', amount: 1800, date: '2023-12-14', status: 'pending', method: 'blockchain' },
    { id: 3, tenant: 'Mike Johnson', amount: 2000, date: '2023-12-13', status: 'failed', method: 'bank' },
    // Add more mock data as needed
  ];

  const stats = [
    {
      title: 'Total Collected',
      value: '$45,250',
      icon: CurrencyDollarIcon,
      subtext: 'This month',
    },
    {
      title: 'Pending Payments',
      value: '8',
      icon: ArrowPathIcon,
      subtext: '$12,400 total',
    },
    {
      title: 'Success Rate',
      value: '94%',
      icon: ChartBarIcon,
      subtext: '2% increase',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500';
      case 'pending': return 'bg-yellow-500';
      case 'failed': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const filteredPayments = payments.filter(payment => 
    activeTab === 'all' || payment.method === activeTab
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Digital Payments</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Process Payment
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <PaymentCard key={index} {...stat} />
          ))}
        </div>

        <div className="mb-6">
          <div className="flex space-x-4">
            {['all', 'stripe', 'blockchain', 'bank'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Tenant</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Method</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {filteredPayments.map((payment) => (
                  <motion.tr
                    key={payment.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hover:bg-gray-700"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{payment.tenant}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">${payment.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{payment.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                      <div className="flex items-center">
                        <CreditCardIcon className="h-4 w-4 mr-2 text-blue-500" />
                        {payment.method}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(payment.status)} text-white`}>
                        {payment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                      <button className="text-blue-500 hover:text-blue-400 mr-3">View</button>
                      <button className="text-gray-500 hover:text-gray-400">Receipt</button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
