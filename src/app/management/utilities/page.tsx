'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  BoltIcon,
  FireIcon,
  WaterIcon,
  ArrowTrendingUpIcon,
  ArrowTrendingDownIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

interface UtilityReading {
  id: number;
  unit: string;
  type: 'electricity' | 'water' | 'gas';
  reading: number;
  date: string;
  cost: number;
  change: number;
}

const UtilityCard = ({ title, value, icon: Icon, change }: any) => (
  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-400 text-sm">{title}</p>
        <p className="text-2xl font-bold text-white mt-1">{value}</p>
        {change && (
          <div className="flex items-center mt-2">
            {change > 0 ? (
              <ArrowTrendingUpIcon className="h-4 w-4 text-red-500 mr-1" />
            ) : (
              <ArrowTrendingDownIcon className="h-4 w-4 text-green-500 mr-1" />
            )}
            <span className={`text-sm ${change > 0 ? 'text-red-500' : 'text-green-500'}`}>
              {Math.abs(change)}% vs last month
            </span>
          </div>
        )}
      </div>
      <Icon className="h-12 w-12 text-blue-500 opacity-80" />
    </div>
  </div>
);

export default function UtilityManagement() {
  const { user, isLoading } = useUser();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('all');
  const [selectedUnit, setSelectedUnit] = useState('all');

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/');
    }
  }, [isLoading, user, router]);

  const utilityReadings: UtilityReading[] = [
    {
      id: 1,
      unit: 'A101',
      type: 'electricity',
      reading: 450,
      date: '2023-12-15',
      cost: 125.50,
      change: 5,
    },
    {
      id: 2,
      unit: 'A101',
      type: 'water',
      reading: 250,
      date: '2023-12-15',
      cost: 45.75,
      change: -2,
    },
    {
      id: 3,
      unit: 'A101',
      type: 'gas',
      reading: 150,
      date: '2023-12-15',
      cost: 65.25,
      change: 3,
    },
    // Add more mock data as needed
  ];

  const stats = [
    {
      title: 'Total Electricity Usage',
      value: '12,450 kWh',
      icon: BoltIcon,
      change: 5,
    },
    {
      title: 'Total Water Usage',
      value: '8,250 Gal',
      icon: WaterIcon,
      change: -2,
    },
    {
      title: 'Total Gas Usage',
      value: '4,150 CCF',
      icon: FireIcon,
      change: 3,
    },
  ];

  const getUtilityIcon = (type: string) => {
    switch (type) {
      case 'electricity':
        return BoltIcon;
      case 'water':
        return WaterIcon;
      case 'gas':
        return FireIcon;
      default:
        return ChartBarIcon;
    }
  };

  const filteredReadings = utilityReadings.filter(reading => {
    const matchesType = activeTab === 'all' || reading.type === activeTab;
    const matchesUnit = selectedUnit === 'all' || reading.unit === selectedUnit;
    return matchesType && matchesUnit;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Utility Management</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Add Reading
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <UtilityCard key={index} {...stat} />
          ))}
        </div>

        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <select
            className="bg-gray-800 text-white rounded-lg px-4 py-2 border border-gray-700 focus:border-blue-500 focus:outline-none"
            value={selectedUnit}
            onChange={(e) => setSelectedUnit(e.target.value)}
          >
            <option value="all">All Units</option>
            <option value="A101">Unit A101</option>
            <option value="A102">Unit A102</option>
            <option value="A103">Unit A103</option>
          </select>
          <div className="flex space-x-2">
            {['all', 'electricity', 'water', 'gas'].map((tab) => (
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
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Unit</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Type</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Reading</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Cost</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Change</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {filteredReadings.map((reading) => {
                  const Icon = getUtilityIcon(reading.type);
                  return (
                    <motion.tr
                      key={reading.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="hover:bg-gray-700"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{reading.unit}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <Icon className="h-5 w-5 text-blue-500 mr-2" />
                          <span className="text-sm text-white">{reading.type}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{reading.reading}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{reading.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-white">${reading.cost.toFixed(2)}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          {reading.change > 0 ? (
                            <ArrowTrendingUpIcon className="h-4 w-4 text-red-500 mr-1" />
                          ) : (
                            <ArrowTrendingDownIcon className="h-4 w-4 text-green-500 mr-1" />
                          )}
                          <span className={`text-sm ${reading.change > 0 ? 'text-red-500' : 'text-green-500'}`}>
                            {Math.abs(reading.change)}%
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                        <button className="text-blue-500 hover:text-blue-400 mr-3">Edit</button>
                        <button className="text-red-500 hover:text-red-400">Delete</button>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
