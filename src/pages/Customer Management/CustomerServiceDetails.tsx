import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX } from 'react-icons/fi';

interface Service {
  id: number;
  name: string;
  description: string;
  wash: string;
  duration: string;
  status: 'Completed' | 'In Progress' | 'Pending';
}

const CustomerServiceDetails = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services: Service[] = [
    {
      id: 1,
      name: "Engine Repair",
      description: "Complete engine diagnostics and repair service including oil change, filter replacement, and tune-up.",
      wash: "foam",
      duration: "3-4 hours",
      status: "Completed"
    },
    {
      id: 2,
      name: "Washing",
      description: "Premium car wash service with interior cleaning, waxing, and polishing.",
      wash: "foam",
      duration: "1 hour",
      status: "In Progress"
    },
    {
      id: 3,
      name: "Air Check",
      description: "Complete AC system check including gas refill, compressor inspection, and cooling efficiency test.",
      wash: "foam",
      duration: "2 hours",
      status: "Pending"
    },
    {
      id: 4,
      name: "Tyre Check",
      description: "Complete AC system check including gas refill, compressor inspection, and cooling efficiency test.",
      wash: "foam",
      duration: "2 hours",
      status: "Pending"
    },
    {
      id: 5,
      name: "Bannet",
      description: "Complete AC system check including gas refill, compressor inspection, and cooling efficiency test.",
      wash: "foam",
      duration: "2 hours",
      status: "Pending"
    },
    {
      id: 6,
      name: "Seat Repair",
      description: "Complete AC system check including gas refill, compressor inspection, and cooling efficiency test.",
      wash: "foam",
      duration: "2 hours",
      status: "Pending"
    },
    {
      id: 7,
      name: "Sun Roof",
      description: "Complete AC system check including gas refill, compressor inspection, and cooling efficiency test.",
      wash: "foam",
      duration: "2 hours",
      status: "Pending"
    }
  ];

  const handleViewClick = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className='grid grid-cols-2 gap-5'>
    <div className="w-full p-4 bg-transparent dark:text-black border border-gray-200 rounded-lg shadow-sm sm:p-6 ">
      <h2 className="text-xl font-bold mb-4  dark:text-black">Service History</h2>
      
      <ul className="my-4 space-y-3">
        {services.map((service) => (
          <motion.li 
            key={service.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center p-3 text-base font-bold dark:text-black rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-white dark:hover:bg-gray-200 dark:text-white transition-all duration-200">
              <span className="flex-1 ms-3 whitespace-nowrap">{service.name}</span>
              <motion.button 
                onClick={() => handleViewClick(service)}
                className="ml-4 bg-amber-100 hover:bg-amber-200 text-amber-800 rounded-lg px-3 py-1 text-sm font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View
              </motion.button>
            </div>
          </motion.li>
        ))}
      </ul>

      {/* Service Details Modal */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 dark:bg-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedService.name}</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
                >
                  <FiX size={24} />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{selectedService.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Price</p>
                    <p className="font-medium text-gray-900 dark:text-white">{selectedService.wash}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                    <p className="font-medium text-gray-900 dark:text-white">{selectedService.duration}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Status</p>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(selectedService.status)}`}>
                    {selectedService.status}
                  </span>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                  <button
                    onClick={closeModal}
                    className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

 <div className="w-full p-4 bg-transparent dark:text-black border border-gray-200 rounded-lg shadow-sm sm:p-6 ">
      <h2 className="text-xl font-bold mb-4  dark:text-black">Service History</h2>
      
      <ul className="my-4 space-y-3">
        {services.map((service) => (
          <motion.li 
            key={service.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center p-3 text-base font-bold dark:text-black rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-white dark:hover:bg-gray-200 dark:text-white transition-all duration-200">
              <span className="flex-1 ms-3 whitespace-nowrap">{service.name}</span>
              <motion.button 
                onClick={() => handleViewClick(service)}
                className="ml-4 bg-amber-100 hover:bg-amber-200 text-amber-800 rounded-lg px-3 py-1 text-sm font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View
              </motion.button>
            </div>
          </motion.li>
        ))}
      </ul>

      {/* Service Details Modal */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 dark:bg-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{selectedService.name}</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
                >
                  <FiX size={24} />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{selectedService.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Price</p>
                    <p className="font-medium text-gray-900 dark:text-white">{selectedService.wash}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Duration</p>
                    <p className="font-medium text-gray-900 dark:text-white">{selectedService.duration}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Status</p>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(selectedService.status)}`}>
                    {selectedService.status}
                  </span>
                </div>

                <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                  <button
                    onClick={closeModal}
                    className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

    </div>
  );
};


export default CustomerServiceDetails