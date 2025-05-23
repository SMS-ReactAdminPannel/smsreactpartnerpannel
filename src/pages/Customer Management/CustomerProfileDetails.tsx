import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FONTS } from "../../constants/constants";
import { FaCar } from "react-icons/fa";
import { useRef, useState } from "react";
import { FiSearch, FiFilter, FiX, FiTruck, FiClock, FiCheckCircle, FiXCircle } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import CustomerServiceDetails from "./CustomerServiceDetails";

interface Product {
  id: number;
  title: string;
  deliveryDate: string;
  price: string;
  status: 'Delivered' | 'Shipping' | 'Processing' | 'Cancelled';
  image: string;
  orderDate: string;
  trackingNumber?: string;
  estimatedDelivery?: string;
}

const CustomerProfileDetails = () => {
  const initialProducts: Product[] = [
    {
      id: 1,
      title: "Car Engine Booster Power",
      deliveryDate: "Delivered on Apr 17",
      price: "Rs. 45,000",
      status: "Delivered",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFSVE71PJTF_Um1WlZoJHhd3jLxaAKyY1noQ&s",
      orderDate: "Apr 10, 2023",
      trackingNumber: "TRK123456789",
      estimatedDelivery: "Apr 15-17, 2023"
    },
    {
      id: 2,
      title: "Echo Engine Booster Power",
      deliveryDate: "Delivered on Apr 17",
      price: "Rs. 45,000",
      status: "Delivered",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFSVE71PJTF_Um1WlZoJHhd3jLxaAKyY1noQ&s",
      orderDate: "Apr 10, 2023",
      trackingNumber: "TRK123456789",
      estimatedDelivery: "Apr 15-17, 2023"
    },
    {
      id: 3,
      title: "Boost Engine Booster Power",
      deliveryDate: "Delivered on Apr 17",
      price: "Rs. 45,000",
      status: "Delivered",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFSVE71PJTF_Um1WlZoJHhd3jLxaAKyY1noQ&s",
      orderDate: "Apr 10, 2023",
      trackingNumber: "TRK123456789",
      estimatedDelivery: "Apr 15-17, 2023"
    },
    {
      id: 4,
      title: "Hyper Engine Booster Power",
      deliveryDate: "Delivered on Apr 17",
      price: "Rs. 45,000",
      status: "Delivered",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFSVE71PJTF_Um1WlZoJHhd3jLxaAKyY1noQ&s",
      orderDate: "Apr 10, 2023",
      trackingNumber: "TRK123456789",
      estimatedDelivery: "Apr 15-17, 2023"
    },
  ];

  const [products] = useState<Product[]>(initialProducts);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeTab, setActiveTab] = useState<'orders' | 'services'>('orders');
  const searchRef = useRef<HTMLInputElement>(null);

  const filteredProducts = products.filter((product: Product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || product.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const statusOptions: string[] = ['All', 'Delivered', 'Shipping', 'Processing', 'Cancelled'];

  const handleViewClick = (product: Product): void => {
    setSelectedProduct(product);
  };

  const closeModal = (): void => {
    setSelectedProduct(null);
  };

  const toggleSearch = (): void => {
    setShowSearch(!showSearch);
    setShowFilter(false);
    if (!showSearch) {
      setTimeout(() => searchRef.current?.focus(), 100);
    }
  };

  const toggleFilter = (): void => {
    setShowFilter(!showFilter);
    setShowSearch(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Delivered':
        return <FiCheckCircle className="text-green-500" />;
      case 'Shipping':
        return <FiTruck className="text-blue-500" />;
      case 'Processing':
        return <FiClock className="text-yellow-500" />;
      case 'Cancelled':
        return <FiXCircle className="text-red-500" />;
      default:
        return <FiClock className="text-gray-500" />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Profile Section - Left Side */}
      <div className="w-full md:w-2/3 lg:w-1/4 p-4">
        <div className="bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500 h-full">
          <div 
            className="flex flex-col items-center py-8 px-4 bg-gradient-to-b from-amber-50 to-white"
            style={{ fontFamily: FONTS.header.fontFamily }}
          >
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-28 h-28 mb-4 rounded-full shadow-xl border-2 border-amber-200 hover:border-amber-400 transition-all duration-300"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHg3QFYNZtEesRLwEZxf_GMDBJGqZopdg01A&s" 
              alt="Chris Bumstead"
              whileHover={{ scale: 1.05 }}
            />
            
            <motion.h5 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-2xl font-bold text-gray-800"
            >
              Chris Bumstead
            </motion.h5>
            
            <motion.span 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-sm text-amber-600 font-medium"
            >
              Professional Athlete
            </motion.span>
            
            <motion.div 
              className="flex gap-5 mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.a 
                href="#" 
                className="p-2 bg-green-100 rounded-full hover:bg-green-200 transition"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src="https://www.svgrepo.com/show/475692/whatsapp-color.svg" alt="WhatsApp" className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition"
                whileHover={{ scale: 1.1, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src="https://www.svgrepo.com/show/398466/telephone-receiver.svg" alt="Phone" className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="#" 
                className="p-2 bg-red-100 rounded-full hover:bg-red-200 transition"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <img src="https://www.svgrepo.com/show/485253/email-opened.svg" alt="Email" className="w-5 h-5" />
              </motion.a>
            </motion.div>
            
            <motion.div 
              className="mt-5 px-4 py-1 bg-amber-100 rounded-full flex items-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-sm font-medium text-amber-800">Premium Membership</span>
              <motion.svg 
                className="w-4 h-4 text-amber-500 ml-1" 
                aria-hidden="true" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="currentColor" 
                viewBox="0 0 22 20"
                animate={{ rotate: 360 }}
                transition={{ delay: 0.6, duration: 1 }}
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </motion.svg>
            </motion.div>
          </div>
          
          <motion.div 
            className="px-6 py-4 border-t border-gray-100"
            style={{ fontFamily: FONTS.paragraph.fontFamily }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {[
              { icon: <MdCall />, label: "Phone", value: "+1 234 567 6789" },
              { icon: <MdEmail />, label: "Email", value: "Cbum@gmail.com" },
              { icon: <FaCar />, label: "Vehicles", value: "Rolls Royce Ghost" },
              { icon: <FaLocationDot />, label: "Address", value: "3512 Carlson Road, Prince George, British Columbia, Canada" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-start mb-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                whileHover={{ x: 5 }}
              >
                <div className="text-amber-600 mt-1 mr-3">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500">{item.label}</p>
                  <p className="text-gray-700 font-medium pt-1 pb-1">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="px-6 py-4 bg-gray-50 flex flex-wrap gap-3"
            style={{ fontFamily: FONTS.paragraph.fontFamily }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {["6+ Years Experience", "Premium Member", "#1 Customer"].map((badge, index) => (
              <motion.span 
                key={index}
                className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full flex items-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.1 + index * 0.1, type: "spring", stiffness: 300 }}
                whileHover={{ scale: 1.05, backgroundColor: "#FDE68A", color: "#92400E" }}
              >
                {badge}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Content Section - Right Side */}
      <div className="w-full md:w-2/3 lg:w-3/4 p-4">
        {/* Tab Navigation */}
        <div className="flex mb-4 border-b">
          <button 
            className={`pb-2 px-4 ${activeTab === 'orders' ? 'border-b-2 border-amber-500 font-medium text-amber-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('orders')}
          >
            Orders
          </button>
          <button 
            className={`pb-2 px-4 ${activeTab === 'services' ? 'border-b-2 border-amber-500 font-medium text-amber-600' : 'text-gray-500 hover:text-gray-700'}`}
            onClick={() => setActiveTab('services')}
          >
            Services
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'services' ? (
          <CustomerServiceDetails />
        ) : (
          <div className="p-4 rounded-lg shadow-sm">
            {/* Search and Filter Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
              <h2 className="text-xl font-bold text-gray-800" style={{ fontFamily: FONTS.header.fontFamily }}>
                Order History
              </h2>
              <div className="flex gap-2">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleSearch}
                  className="p-2 rounded-full bg-white border border-gray-300 shadow-sm hover:bg-gray-100"
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
                    ref={searchRef}
                    type="text"
                    placeholder="Search orders..."
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
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    {statusOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Products Grid */}
            <div className="mt-4">
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                  {filteredProducts.map((product: Product) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ scale: 1.01 }}
                      className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/4 p-4 flex justify-center">
                          <img 
                            className="object-cover w-full h-40 md:h-32 rounded-lg" 
                            src={product.image} 
                            alt={product.title}
                          />
                        </div>
                        <div className="md:w-3/4 p-4">
                          <div className="flex flex-col h-full justify-between">
                            <div>
                              <h5 className="text-lg font-bold text-gray-900">
                                {product.title}
                              </h5>
                              <p className="text-gray-600 mt-1">{product.deliveryDate}</p>
                              <p className="text-gray-800 font-semibold mt-2">{product.price}</p>
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4 gap-2">
                              <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                                product.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                                product.status === 'Shipping' ? 'bg-blue-100 text-blue-800' :
                                product.status === 'Processing' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {product.status}
                              </span>
                              <button
                                onClick={() => handleViewClick(product)}
                                className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg font-medium transition-colors"
                              >
                                View Details
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="py-10 text-center"
                >
                  <p className="text-gray-500 text-lg">No orders found matching your criteria</p>
                </motion.div>
              )}
            </div>

            {/* Order Details Modal */}
            <AnimatePresence>
              {selectedProduct && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
                  >
                    <div className="p-6">
                      <div className="flex justify-between items-start">
                        <h3 className="text-2xl font-bold text-gray-900">
                          Order Details
                        </h3>
                        <button
                          onClick={closeModal}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <FiX size={24} />
                        </button>
                      </div>

                      <div className="mt-6">
                        <div className="flex items-center gap-4">
                          <img 
                            className="w-20 h-20 object-cover rounded-lg"
                            src={selectedProduct.image} 
                            alt={selectedProduct.title}
                          />
                          <div>
                            <h4 className="text-lg font-semibold">{selectedProduct.title}</h4>
                            <p className="text-gray-600">{selectedProduct.price}</p>
                          </div>
                        </div>

                        <div className="mt-6 space-y-4">
                          <div className="flex items-center gap-3">
                            {getStatusIcon(selectedProduct.status)}
                            <div>
                              <p className="text-sm text-gray-500">Status</p>
                              <p className="font-medium">{selectedProduct.status}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <FiClock className="text-gray-500" />
                            <div>
                              <p className="text-sm text-gray-500">Order Date</p>
                              <p className="font-medium">{selectedProduct.orderDate}</p>
                            </div>
                          </div>

                          {selectedProduct.trackingNumber && (
                            <div className="flex items-center gap-3">
                              <FiTruck className="text-gray-500" />
                              <div>
                                <p className="text-sm text-gray-500">Tracking Number</p>
                                <p className="font-medium">{selectedProduct.trackingNumber}</p>
                              </div>
                            </div>
                          )}

                          {selectedProduct.estimatedDelivery && (
                            <div className="flex items-center gap-3">
                              <FiCheckCircle className="text-gray-500" />
                              <div>
                                <p className="text-sm text-gray-500">Estimated Delivery</p>
                                <p className="font-medium">{selectedProduct.estimatedDelivery}</p>
                              </div>
                            </div>
                          )}

                          <div className="pt-4 border-t border-gray-200">
                            <p className="text-sm text-gray-500">Delivery Date</p>
                            <p className="font-medium">{selectedProduct.deliveryDate}</p>
                          </div>
                        </div>

                        <div className="mt-6 flex justify-end">
                          <button
                            onClick={closeModal}
                            className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg transition-colors"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerProfileDetails;