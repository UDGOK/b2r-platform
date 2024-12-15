'use client';

import { useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import ManagementCard from '@/components/ManagementCard';
import {
  HomeIcon, UsersIcon, CreditCardIcon, WrenchIcon, 
  ChartBarIcon, CogIcon, KeyIcon, VideoCameraIcon,
  DocumentTextIcon, UserGroupIcon
} from '@heroicons/react/24/outline';

export default function ManagementPortal() {
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/');
    }
  }, [isLoading, user, router]);

  if (isLoading) return <div>Loading...</div>;

  const managementOptions = [
    {
      title: 'Dashboard',
      description: 'Real-time property statistics and overview',
      icon: HomeIcon,
      link: '/management/dashboard'
    },
    {
      title: 'Tenant Management',
      description: 'Add, remove, and manage tenant access',
      icon: UsersIcon,
      link: '/management/tenants'
    },
    {
      title: 'Digital Rent Payments',
      description: 'Stripe Pay and Blockchain payment management',
      icon: CreditCardIcon,
      link: '/management/payments'
    },
    {
      title: 'Maintenance Portal',
      description: 'Manage maintenance requests and staff',
      icon: WrenchIcon,
      link: '/management/maintenance'
    },
    {
      title: 'Smart Home Integration',
      description: 'Manage IoT devices and access control',
      icon: KeyIcon,
      link: '/management/smart-home'
    },
    {
      title: 'Utility Management',
      description: 'Monitor and manage utility usage',
      icon: ChartBarIcon,
      link: '/management/utilities'
    },
    {
      title: 'Reports & Analytics',
      description: 'View detailed property analytics',
      icon: DocumentTextIcon,
      link: '/management/reports'
    },
    {
      title: 'Settings',
      description: 'Configure system preferences',
      icon: CogIcon,
      link: '/management/settings'
    },
    {
      title: 'Amenity Management',
      description: 'Track and manage amenity reservations',
      icon: UserGroupIcon,
      link: '/management/amenities'
    },
    {
      title: 'AR Property Tours',
      description: 'Manage augmented reality property tours',
      icon: VideoCameraIcon,
      link: '/management/ar-tours'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 text-center">
          Management Portal
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {managementOptions.map((option, index) => (
            <ManagementCard
              key={index}
              title={option.title}
              description={option.description}
              icon={option.icon}
              link={option.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
