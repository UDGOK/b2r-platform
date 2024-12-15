import { motion } from 'framer-motion';

export default function BusinessIntelligence() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Business Intelligence</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Cards */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-lg p-6 backdrop-blur-lg bg-opacity-50"
          >
            <h3 className="text-xl font-semibold mb-4">Data Analytics</h3>
            <p className="text-gray-300">
              Advanced analytics tools to help you make data-driven decisions.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-lg p-6 backdrop-blur-lg bg-opacity-50"
          >
            <h3 className="text-xl font-semibold mb-4">Market Insights</h3>
            <p className="text-gray-300">
              Stay ahead with real-time market trends and competitive analysis.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-lg p-6 backdrop-blur-lg bg-opacity-50"
          >
            <h3 className="text-xl font-semibold mb-4">Performance Metrics</h3>
            <p className="text-gray-300">
              Track key performance indicators and optimize your operations.
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
          <h2 className="text-2xl font-semibold mb-6">Data-Driven Success</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Predictive Analytics</h3>
              <p className="text-gray-300">
                Use AI-powered predictions to anticipate market changes and optimize strategies.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Custom Reports</h3>
              <p className="text-gray-300">
                Generate customized reports tailored to your specific business needs.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
