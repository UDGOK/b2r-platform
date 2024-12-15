'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface ManagementCardProps {
  title: string;
  description: string;
  icon: any;
  link: string;
}

export default function ManagementCard({ title, description, icon: Icon, link }: ManagementCardProps) {
  return (
    <Link href={link}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-6 cursor-pointer 
                   border border-gray-700 hover:border-gray-500 transition-all duration-300
                   hover:bg-opacity-70"
      >
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
            <Icon className="h-8 w-8 text-blue-400" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
            <p className="text-gray-300 text-sm">{description}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
