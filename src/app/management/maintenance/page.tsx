'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  WrenchIcon,
  ClockIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';

interface MaintenanceRequest {
  id: number;
  tenant: string;
  unit: string;
  issue: string;
  priority: 'high' | 'medium' | 'low';
  status: 'open' | 'in-progress' | 'completed';
  date: string;
  assignedTo?: string;
}

const PriorityBadge = ({ priority }: { priority: string }) => {
  const colors = {
    high: 'bg-red-500',
    medium: 'bg-yellow-500',
    low: 'bg-green-500',
  };

  return (
    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${colors[priority as keyof typeof colors]} text-white`}>
      {priority}
    </span>
  );
};

const StatusBadge = ({ status }: { status: string }) => {
  const colors = {
    'open': 'bg-blue-500',
    'in-progress': 'bg-yellow-500',
    'completed': 'bg-green-500',
  };

  return (
    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${colors[status as keyof typeof colors]} text-white`}>
      {status}
    </span>
  );
};

export default function MaintenancePortal() {
  const { user, isLoading } = useUser();
  const router = useRouter();
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/');
    }
  }, [isLoading, user, router]);

  const maintenanceRequests: MaintenanceRequest[] = [
    {
      id: 1,
      tenant: 'John Doe',
      unit: 'A101',
      issue: 'Leaking faucet in kitchen',
      priority: 'medium',
      status: 'open',
      date: '2023-12-15',
      assignedTo: 'Mike Tech',
    },
    {
      id: 2,
      tenant: 'Jane Smith',
      unit: 'B205',
      issue: 'AC not cooling',
      priority: 'high',
      status: 'in-progress',
      date: '2023-12-14',
      assignedTo: 'Sarah Fix',
    },
    // Add more mock data as needed
  ];

  const stats = [
    {
      title: 'Open Requests',
      value: '12',
      icon: ExclamationCircleIcon,
      color: 'text-red-500',
    },
    {
      title: 'In Progress',
      value: '8',
      icon: ClockIcon,
      color: 'text-yellow-500',
    },
    {
      title: 'Completed Today',
      value: '5',
      icon: CheckCircleIcon,
      color: 'text-green-500',
    },
  ];

  const filteredRequests = maintenanceRequests.filter(request => {
    const matchesSearch = 
      request.tenant.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.unit.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.issue.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || request.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Maintenance Portal</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Create Request
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">{stat.title}</p>
                  <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                </div>
                <stat.icon className={`h-12 w-12 ${stat.color} opacity-80`} />
              </div>
            </div>
          ))}
        </div>

        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search requests..."
            className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 border border-gray-700 focus:border-blue-500 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="bg-gray-800 text-white rounded-lg px-4 py-2 border border-gray-700 focus:border-blue-500 focus:outline-none"
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="open">Open</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Tenant</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Unit</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Issue</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Priority</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Assigned To</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {filteredRequests.map((request) => (
                  <motion.tr
                    key={request.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="hover:bg-gray-700"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{request.tenant}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{request.unit}</td>
                    <td className="px-6 py-4 text-sm text-white">{request.issue}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <PriorityBadge priority={request.priority} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={request.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{request.assignedTo}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-400">
                      <button className="text-blue-500 hover:text-blue-400 mr-3">Update</button>
                      <button className="text-green-500 hover:text-green-400">Complete</button>
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
