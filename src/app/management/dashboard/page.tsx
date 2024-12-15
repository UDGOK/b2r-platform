'use client';

import { useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import {
  HomeIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  WrenchIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

interface StatCardProps {
  title: string;
  value: string;
  icon: any;
  change?: string;
  isPositive?: boolean;
}

const StatCard = ({ title, value, icon: Icon, change, isPositive }: StatCardProps) => (
  <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-400 text-sm">{title}</p>
        <p className="text-2xl font-bold text-white mt-1">{value}</p>
        {change && (
          <p className={`text-sm mt-1 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? '↑' : '↓'} {change}
          </p>
        )}
      </div>
      <Icon className="h-12 w-12 text-blue-500 opacity-80" />
    </div>
  </div>
);

export default function Dashboard() {
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/');
    }
  }, [isLoading, user, router]);

  if (isLoading) return <div>Loading...</div>;

  const stats = [
    {
      title: 'Total Properties',
      value: '24',
      icon: HomeIcon,
      change: '8%',
      isPositive: true,
    },
    {
      title: 'Active Tenants',
      value: '156',
      icon: UserGroupIcon,
      change: '12%',
      isPositive: true,
    },
    {
      title: 'Monthly Revenue',
      value: '$284,500',
      icon: CurrencyDollarIcon,
      change: '23%',
      isPositive: true,
    },
    {
      title: 'Maintenance Requests',
      value: '8',
      icon: WrenchIcon,
      change: '5%',
      isPositive: false,
    },
    {
      title: 'Occupancy Rate',
      value: '94%',
      icon: ChartBarIcon,
      change: '3%',
      isPositive: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <div className="text-sm text-gray-400">
            Last updated: {new Date().toLocaleString()}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4">Recent Activities</h2>
            <div className="space-y-4">
              {[
                'New tenant check-in at Property #12',
                'Maintenance request completed at Property #8',
                'Rent payment received from Unit 156',
                'Smart lock code updated for Unit 203',
                'New lease agreement signed for Property #15',
              ].map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-gray-300 text-sm"
                >
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <p>{activity}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold text-white mb-4">Upcoming Tasks</h2>
            <div className="space-y-4">
              {[
                'Property inspection scheduled for tomorrow',
                'Lease renewal meeting with tenant',
                'HVAC maintenance for Building A',
                'Update security system firmware',
                'Monthly financial report preparation',
              ].map((task, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="text-gray-300">{task}</span>
                  <span className="text-gray-500">Due in {index + 1} days</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
