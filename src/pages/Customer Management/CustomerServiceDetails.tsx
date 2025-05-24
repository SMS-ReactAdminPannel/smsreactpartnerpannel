import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSearch, FiFilter, FiClock, FiCheckCircle, FiRotateCw } from 'react-icons/fi';

interface Service {
  id: number;
  name: string;
  description: string;
  wash: string;
  duration: string;
  status: 'Completed' | 'In Progress' | 'Pending';
  price: string;
  date: string;
}

const CustomerServiceDetails = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Completed' | 'In Progress' | 'Pending'>('All');
  const [showSearch, setShowSearch] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const services: Service[] = [
    {
      id: 1,
      name: "Engine Repair",
      description: "Complete engine diagnostics and repair service including oil change, filter replacement, and tune-up.",
      wash: "Foam Wash",
      duration: "3-4 hours",
      status: "Completed",
      price: "Rs. 12,500",
      date: "May 15, 2023"
    },
    {
      id: 2,
      name: "Premium Wash",
      description: "Premium car wash service with interior cleaning, waxing, and polishing.",
      wash: "Foam Wash",
      duration: "1 hour",
      status: "In Progress",
      price: "Rs. 2,500",
      date: "June 2, 2023"
    },
    {
      id: 3,
      name: "AC Service",
      description: "Complete AC system check including gas refill, compressor inspection, and cooling efficiency test.",
      wash: "Basic Wash",
      duration: "2 hours",
      status: "Pending",
      price: "Rs. 5,800",
      date: "June 10, 2023"
    },
    {
      id: 4,
      name: "Tyre Alignment",
      description: "Professional wheel alignment service to ensure proper vehicle handling and tire wear.",
      wash: "Basic Wash",
      duration: "1.5 hours",
      status: "Pending",
      price: "Rs. 3,200",
      date: "June 12, 2023"
    },
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || service.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleViewClick = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    setShowFilter(false);
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
    setShowSearch(false);
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <FiCheckCircle className="text-green-500" />;
      case 'In Progress':
        return <FiRotateCw className="text-blue-500 animate-spin" />;
      case 'Pending':
        return <FiClock className="text-yellow-500" />;
      default:
        return <FiClock className="text-gray-500" />;
    }
  };

  return (
    <div className="p-4">
      {/* Header with Search and Filter */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Service History</h2>
        <div className="flex gap-3">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleSearch}
            className="p-2 rounded-full bg-white border border-gray-300 shadow-sm hover:bg-gray-100 transition-colors"
          >
            {showSearch ? <FiX size={20} /> : <FiSearch size={20} />}
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleFilter}
            className="p-2 rounded-full bg-white border border-gray-300 shadow-sm hover:bg-gray-100 transition-colors"
          >
            <FiFilter size={20} />
          </motion.button>
        </div>
      </div>

      {/* Search Bar */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-4 overflow-hidden"
          >
            <input
              type="text"
              placeholder="Search services..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Filter Dropdown */}
      <AnimatePresence>
        {showFilter && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-4 overflow-hidden"
          >
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm"
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as any)}
            >
              <option value="All">All Statuses</option>
              <option value="Completed">Completed</option>
              <option value="In Progress">In Progress</option>
              <option value="Pending">Pending</option>
            </select>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{service.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{service.date}</p>
                  </div>
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(service.status)}`}>
                    {service.status}
                  </span>
                </div>

                <p className="text-gray-600 mt-3 text-sm">{service.description}</p>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500">Wash Type</p>
                    <p className="font-medium text-gray-800">{service.wash}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Duration</p>
                    <p className="font-medium text-gray-800">{service.duration}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Price</p>
                    <p className="font-medium text-gray-800">{service.price}</p>
                  </div>
                </div>

                <div className="mt-5">
                  <motion.button
                    onClick={() => handleViewClick(service)}
                    className="w-full py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="col-span-2 py-10 text-center"
          >
            <p className="text-gray-500 text-lg">No services found matching your criteria</p>
          </motion.div>
        )}
      </div>

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
              className="bg-white rounded-xl shadow-xl max-w-md w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedService.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{selectedService.date}</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
                >
                  <FiX size={24} />
                </button>
              </div>

              <div className="space-y-5">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">{selectedService.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500">Service Type</p>
                    <p className="font-medium text-gray-900">{selectedService.wash}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500">Duration</p>
                    <p className="font-medium text-gray-900">{selectedService.duration}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500">Price</p>
                    <p className="font-medium text-gray-900">{selectedService.price}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500">Status</p>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(selectedService.status)}
                      <span className="font-medium text-gray-900">{selectedService.status}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <motion.button
                    onClick={closeModal}
                    className="w-full px-4 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Close Details
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomerServiceDetails;