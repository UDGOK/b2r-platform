'use client';

import { motion } from 'framer-motion';

export default function StudentExperience() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Student Experience</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Cards */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-lg p-6 backdrop-blur-lg bg-opacity-50"
          >
            <h3 className="text-xl font-semibold mb-4">Community Events</h3>
            <p className="text-gray-300">
              Engage with fellow students through organized community events and activities.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-lg p-6 backdrop-blur-lg bg-opacity-50"
          >
            <h3 className="text-xl font-semibold mb-4">Study Spaces</h3>
            <p className="text-gray-300">
              Access modern study spaces designed for both individual and group work.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-lg p-6 backdrop-blur-lg bg-opacity-50"
          >
            <h3 className="text-xl font-semibold mb-4">Wellness Programs</h3>
            <p className="text-gray-300">
              Participate in wellness programs designed to support your academic journey.
            </p>
          </motion.div>
        </div>

        {/* Additional Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-semibold mb-6">Enhancing Student Life</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Round-the-clock support to ensure you have the best living experience.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Smart Amenities</h3>
              <p className="text-gray-300">
                Modern amenities designed to make your student life comfortable and productive.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
