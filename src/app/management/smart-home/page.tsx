'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  KeyIcon,
  LockClosedIcon,
  LockOpenIcon,
  VideoCameraIcon,
  LightBulbIcon,
  HomeIcon,
  WifiIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline';

interface Device {
  id: number;
  name: string;
  type: 'lock' | 'camera' | 'thermostat' | 'light' | 'sensor';
  unit: string;
  status: 'online' | 'offline';
  lastUpdated: string;
  battery?: number;
  value?: string | number;
}

const DeviceCard = ({ device }: { device: Device }) => {
  const getIcon = () => {
    switch (device.type) {
      case 'lock':
        return device.value === 'locked' ? LockClosedIcon : LockOpenIcon;
      case 'camera':
        return VideoCameraIcon;
      case 'light':
        return LightBulbIcon;
      case 'sensor':
        return BeakerIcon;
      default:
        return HomeIcon;
    }
  };

  const Icon = getIcon();

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-800 rounded-xl p-6 border border-gray-700"
    >
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center space-x-2">
            <Icon className="h-6 w-6 text-blue-500" />
            <h3 className="text-lg font-semibold text-white">{device.name}</h3>
          </div>
          <p className="text-sm text-gray-400 mt-1">Unit {device.unit}</p>
          <div className="mt-4">
            <div className="flex items-center space-x-2">
              <div className={`h-2 w-2 rounded-full ${device.status === 'online' ? 'bg-green-500' : 'bg-red-500'}`} />
              <span className="text-sm text-gray-300">{device.status}</span>
            </div>
            {device.battery && (
              <div className="mt-2">
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      device.battery > 20 ? 'bg-green-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${device.battery}%` }}
                  />
                </div>
                <span className="text-xs text-gray-400 mt-1">{device.battery}% battery</span>
              </div>
            )}
          </div>
        </div>
        <div className="text-right">
          <button className="text-blue-500 hover:text-blue-400">Configure</button>
          <p className="text-xs text-gray-500 mt-2">
            Last updated: {new Date(device.lastUpdated).toLocaleTimeString()}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function SmartHome() {
  const { user, isLoading } = useUser();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/');
    }
  }, [isLoading, user, router]);

  const devices: Device[] = [
    {
      id: 1,
      name: 'Front Door Lock',
      type: 'lock',
      unit: 'A101',
      status: 'online',
      lastUpdated: new Date().toISOString(),
      battery: 85,
      value: 'locked',
    },
    {
      id: 2,
      name: 'Living Room Camera',
      type: 'camera',
      unit: 'A101',
      status: 'online',
      lastUpdated: new Date().toISOString(),
      battery: 92,
    },
    {
      id: 3,
      name: 'Smart Thermostat',
      type: 'thermostat',
      unit: 'A101',
      status: 'online',
      lastUpdated: new Date().toISOString(),
      value: '72°F',
    },
    {
      id: 4,
      name: 'CO2 Sensor',
      type: 'sensor',
      unit: 'A101',
      status: 'online',
      lastUpdated: new Date().toISOString(),
      battery: 65,
      value: '400ppm',
    },
    // Add more mock devices as needed
  ];

  const stats = [
    {
      title: 'Total Devices',
      value: devices.length,
      icon: WifiIcon,
    },
    {
      title: 'Online Devices',
      value: devices.filter(d => d.status === 'online').length,
      icon: HomeIcon,
    },
    {
      title: 'Low Battery',
      value: devices.filter(d => d.battery && d.battery < 20).length,
      icon: BeakerIcon,
    },
  ];

  const filteredDevices = devices.filter(device => {
    const matchesSearch = device.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         device.unit.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = activeTab === 'all' || device.type === activeTab;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Smart Home Integration</h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
          >
            Add Device
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
                <stat.icon className="h-12 w-12 text-blue-500 opacity-80" />
              </div>
            </div>
          ))}
        </div>

        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search devices..."
            className="flex-1 bg-gray-800 text-white rounded-lg px-4 py-2 border border-gray-700 focus:border-blue-500 focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex space-x-2">
            {['all', 'lock', 'camera', 'thermostat', 'light', 'sensor'].map((tab) => (
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredDevices.map((device) => (
            <DeviceCard key={device.id} device={device} />
          ))}
        </div>
      </div>
    </div>
  );
}
