import { motion } from 'framer-motion';

export default function PropertyManagement() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Property Management</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Cards */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-lg p-6 backdrop-blur-lg bg-opacity-50"
          >
            <h3 className="text-xl font-semibold mb-4">Lease Management</h3>
            <p className="text-gray-300">
              Streamline your lease operations with our comprehensive management tools.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-lg p-6 backdrop-blur-lg bg-opacity-50"
          >
            <h3 className="text-xl font-semibold mb-4">Maintenance Tracking</h3>
            <p className="text-gray-300">
              Keep track of maintenance requests and schedule repairs efficiently.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-lg p-6 backdrop-blur-lg bg-opacity-50"
          >
            <h3 className="text-xl font-semibold mb-4">Financial Reports</h3>
            <p className="text-gray-300">
              Generate detailed financial reports and track your property performance.
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
          <h2 className="text-2xl font-semibold mb-6">Why Choose Our Platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Automated Workflows</h3>
              <p className="text-gray-300">
                Automate routine tasks and focus on what matters most - growing your business.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Real-time Analytics</h3>
              <p className="text-gray-300">
                Get instant insights into your property performance with real-time analytics.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
