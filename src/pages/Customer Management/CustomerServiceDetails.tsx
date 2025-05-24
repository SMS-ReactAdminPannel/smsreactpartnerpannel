import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiSearch, FiFilter, FiClock, FiCheckCircle, FiRotateCw } from 'react-icons/fi';
import { FONTS } from '../../constants/constants';

interface Service {
  id: number;
  name: string;
  description: string;
  wash: string;
  duration: string;
  status: 'Completed' | 'In Progress' | 'Pending';
  price: string;
  date: string;
  orderID: string;
  vehicleNo: string;
  modalImg: string;
}

type Product = {
  id: number;
  date: string,
  name: string;
  vehicle: string;
  vehicleNo: string;
  price: string;
  serviceDetails?: Service; // Added service details to product
};

const CustomerServiceDetails = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  // Added service details to each product
  const productsData: Product[] = [
    { 
      id: 1, 
      date: "Apr 14, 2026", 
      name: "Engine Repair",
      vehicle: 'BMW', 
      vehicleNo: 'TN 69 L 8743', 
      price: '$2999',
      serviceDetails: {
        id: 1,
        name: "Engine Repair",
        description: "Complete engine diagnostics and repair service including oil change, filter replacement, and tune-up.",
        wash: "Foam Wash",
        duration: "3-4 hours",
        status: "Completed",
        price: "$2999",
        date: "May 15, 2023",
        orderID: "#123",
        vehicleNo: "TN 69 L 8743",
        modalImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF5U1exPRb8nYGzOkh9Vb7FLMoG_ufwMUW0w&s"
      }
    },
    { 
      id: 2, 
      date: "Mar 07, 2026",
      name: 'Oil Service', 
      vehicle: 'Benz', 
      vehicleNo: 'TN 69 L 2343', 
      price: '$1999',
      serviceDetails: {
        id: 2,
        name: "Oil Service",
        description: "Complete oil change with premium synthetic oil and filter replacement.",
        wash: "Basic Wash",
        duration: "1 hour",
        status: "Completed",
        price: "$1999",
        date: "June 2, 2023",
        orderID: "#124",
        vehicleNo: "TN 69 L 9123",
        modalImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn0m-bnN72wqG0IKyt_EpEzubRR0HbLRDrJQ&s"
      }
    },
    { 
      id: 3, 
      date: "Jun 19, 2026",
      name: 'Seat Change', 
      vehicle: 'Rolls Royce', 
      vehicleNo: 'TN 69 L 9123', 
      price: '$99',
      serviceDetails: {
        id: 3,
        name: "Seat Change",
        description: "Replacement of driver and passenger seats with new premium leather seats.",
        wash: "None",
        duration: "2 hours",
        status: "Completed",
        price: "$99",
        date: "June 10, 2023",
        orderID: "#124",
        vehicleNo: "TN 69 L 9123",
        modalImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPbWFlVL5ha1bX46zgwq76giio-GpX3HWatQ&s"
      }
    },
     { 
      id: 4, 
      date: "Apr 07, 2026",
      name: 'Engine Service', 
      vehicle: 'BMW', 
      vehicleNo: 'TN 69 L 9099', 
      price: '$2999',
      serviceDetails: {
        id: 4,
        name: "Engine Repair",
        description: "Complete engine diagnostics and repair service including oil change, filter replacement, and tune-up.",
        wash: "Foam Wash",
        duration: "3-4 hours",
        status: "Completed",
        price: "$2999",
        date: "May 15, 2023",
        orderID: "#125",
        vehicleNo: 'TN 69 L 9099',
        modalImg: "https://img.etimg.com/thumb/width-420,height-315,imgsize-416137,resizemode-75,msid-115343296/industry/auto/tyres/no-brakes-on-tyre-price-hikes-likely-for-now/tyres-bccl.jpg"
      }
    },
     { 
      id: 5, 
      date: "Jan 01, 2026",
      name: 'Engine Service', 
      vehicle: 'BMW', 
      vehicleNo: 'TN 69 L 8345', 
      price: '$2999',
      serviceDetails: {
        id: 5,
        name: "Engine Repair",
        description: "Complete engine diagnostics and repair service including oil change, filter replacement, and tune-up.",
        wash: "Foam Wash",
        duration: "3-4 hours",
        status: "Completed",
        price: "$2999",
        date: "May 15, 2023",
        orderID: "#126",
        vehicleNo: 'TN 69 L 8345', 
        modalImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2gVe2BnWWyTjcBDuV58IRxv0JFBAm5IA4TQ&s"
      }
    },
     { 
      id: 6, 
      date: "May 28, 2026",
      name: 'Engine Service', 
      vehicle: 'BMW', 
      vehicleNo: 'TN 69 L 9837', 
      price: '$2999',
      serviceDetails: {
        id: 6,
        name: "Engine Repair",
        description: "Complete engine diagnostics and repair service including oil change, filter replacement, and tune-up.",
        wash: "Foam Wash",
        duration: "3-4 hours",
        status: "Completed",
        price: "$2999",
        date: "May 15, 2023",
        orderID: "#127",
        vehicleNo: 'TN 69 L 9837',
        modalImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF5U1exPRb8nYGzOkh9Vb7FLMoG_ufwMUW0w&s"
      }
    },
     { 
      id: 7, 
      date: "Jun 01, 2026",
      name: 'Engine Service', 
      vehicle: 'BMW', 
      vehicleNo: 'TN 69 L 9873', 
      price: '$2999',
      serviceDetails: {
        id: 7,
        name: "Engine Repair",
        description: "Complete engine diagnostics and repair service including oil change, filter replacement, and tune-up.",
        wash: "Foam Wash",
        duration: "3-4 hours",
        status: "Completed",
        price: "$2999",
        date: "May 15, 2023",
        orderID: "#128",
        vehicleNo: 'TN 69 L 9873',
         modalImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPbWFlVL5ha1bX46zgwq76giio-GpX3HWatQ&s"
      }
    },
     { 
      id: 8, 
      date: "May 01, 2026",
      name: 'Engine Service', 
      vehicle: 'BMW', 
      vehicleNo: 'TN 69 L 1029', 
      price: '$2999',
      serviceDetails: {
        id: 8,
        name: "Engine Repair",
        description: "Complete engine diagnostics and repair service including oil change, filter replacement, and tune-up.",
        wash: "Foam Wash",
        duration: "3-4 hours",
        status: "Completed",
        price: "$2999",
        date: "May 15, 2023",
        orderID: "#129",
        vehicleNo: 'TN 69 L 1029',
         modalImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF5U1exPRb8nYGzOkh9Vb7FLMoG_ufwMUW0w&s"
      }
    },
     { 
      id: 9, 
      date: "May 17, 2026",
      name: 'Engine Service', 
      vehicle: 'BMW', 
      vehicleNo: 'TN 69 L 8744', 
      price: '$2999',
      serviceDetails: {
        id: 9,
        name: "Engine Repair",
        description: "Complete engine diagnostics and repair service including oil change, filter replacement, and tune-up.",
        wash: "Foam Wash",
        duration: "3-4 hours",
        status: "Completed",
        price: "$2999",
        date: "May 15, 2023",
        orderID: "#130",
        vehicleNo: 'TN 69 L 8744',
         modalImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2gVe2BnWWyTjcBDuV58IRxv0JFBAm5IA4TQ&s"
      }
    },
     { 
      id: 10, 
      date: "May 19,2026",
      name: 'Engine Service', 
      vehicle: 'BMW', 
      vehicleNo: 'TN 69 L 7243', 
      price: '$2999',
      serviceDetails: {
        id: 10,
        name: "Engine Repair",
        description: "Complete engine diagnostics and repair service including oil change, filter replacement, and tune-up.",
        wash: "Foam Wash",
        duration: "3-4 hours",
        status: "Completed",
        price: "$2999",
        date: "May 15, 2023",
        orderID: "#131",
        vehicleNo: 'TN 69 L 7243',
        modalImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF5U1exPRb8nYGzOkh9Vb7FLMoG_ufwMUW0w&s"
      }
    },

   
  ];

  // Filter products based on search term (vehicle name or number)
  const filteredProducts = productsData.filter(product => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      product.vehicle.toLowerCase().includes(searchTermLower) ||
      product.vehicleNo.toLowerCase().includes(searchTermLower)||
      product.name.toLowerCase().includes(searchTermLower)
    );
  });

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(7);
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);

  // Calculate pagination for filtered products
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const handleViewClick = (product: Product) => {
    if (product.serviceDetails) {
      setSelectedService(product.serviceDetails);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    setShowFilter(false);
    if (!showSearch) {
      setSearchTerm(''); // Reset search term when opening search
    }
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
    <div className="p-4" style={{fontFamily: FONTS.header.fontFamily}}>
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
              placeholder="Search by vehicle name or number..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1); // Reset to first page when searching
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Services Grid */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg border-black dark:border-black">
        <table className="w-full text-left rtl:text-right dark:text-black pt-5">
          <thead className="text-xs uppercase bg-gray-50 dark:bg-white border-b-2 dark:text-black">
            <tr className='text-lg'>
              <th scope="col" className="p-4 dark:text-black text-2xl">
                <div className="flex items-center dark:text-black">
                  <label htmlFor="checkbox-all-search" className="sr-only">Select all</label>
                </div>
              </th>
               <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Service Name
              </th>
              <th scope="col" className="px-6 py-3">
                Vehicle Name
              </th>
              <th scope="col" className="px-6 py-3">
                Vehicle No
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((product) => (
                <tr 
                  key={product.id} 
                  className="bg-white border-b dark:bg-white  hover:bg-gray-50" style={{fontFamily: FONTS.paragraph.fontFamily}}
                >
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <label htmlFor={`checkbox-table-search-${product.id}`} className="sr-only">Select</label>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    {product.date}
                  </td>
                  <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap dark:text-black">
                    {product.name}
                  </th>
                  <td className="px-6 py-4">
                    {product.vehicle}
                  </td>
                  <td className="px-6 py-4">
                    {product.vehicleNo}
                  </td>
                  <td className="px-6 py-4">
                    {product.price}
                  </td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleViewClick(product)}
                      className="font-medium text-blue-600 dark:text-white bg-orange-600 rounded-lg p-2 text-white dark:text-white hover:underline"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="px-6 py-4 text-center text-gray-500">
                  No matching services found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        
        {/* Pagination */}
        {filteredProducts.length > 0 && (
          <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between p-4" aria-label="Table navigation">
            <span className="text-sm font-normal pl-3.5 text-black dark:text-black mb-4 md:mb-0 block w-full md:inline md:w-auto">
               <span className="font-semibold text-gray-900 dark:text-black">
                {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredProducts.length)}
              </span> of <span className="font-semibold text-gray-900 dark:text-black">
                {filteredProducts.length}
              </span>
            </span>
            
            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
              <li className='pr-3'>
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-black bg-white border-gray-300  hover:bg-gray-100 hover:text-gray-700 dark:bg-white dark:border-gray-700 dark:text-black  dark:hover:text-black disabled:opacity-50"
                >
                  Previous
                </button>
              </li>
              
              {/* {getPageNumbers().map(number => (
                <li key={number}>
                  <button
                    onClick={() => setCurrentPage(number)}
                    className={`flex items-center justify-center px-3 h-8 leading-tight ${
                      currentPage === number
                        ? 'text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700  dark:bg-white dark:text-black'
                        : 'text-gray-500 bg-white border border-gray-300 hover:bg-white hover:text-gray-700 dark:bg-white dark:border-white dark:text-black dark:hover:bg-white '
                    }`}
                  >
                    {number}
                  </button>
                </li>
              ))} */}
              
              <li>
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100  dark:bg-white  dark:text-black  disabled:opacity-50"
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        )}
      </div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <img src={selectedService.modalImg} alt="Spare Products" className='w-1/4'/>
                  <h3 className="text-2xl font-bold text-black pr-12 pt-5">{selectedService.name}</h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-500"
                  >
                    <FiX size={24} />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-black">Description</h4>
                    <p className="text-black">{selectedService.description}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-black font-bold">Wash Type</h4>
                      <p className="text-black">{selectedService.wash}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-black font-bold">Duration</h4>
                      <p className="text-black">{selectedService.duration}</p>
                    </div>
                     <div>
                      <h4 className="font-medium text-black font-bold">OrderId</h4>
                      <p className="text-black">{selectedService.orderID}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-black font-bold">Vehicle No</h4>
                      <p className="text-black">{selectedService.vehicleNo}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-black font-bold">Status</h4>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(selectedService.status)}`}>
                          {selectedService.status}
                        </span>
                        {getStatusIcon(selectedService.status)}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-black font-bold">Price</h4>
                      <p className="text-black">{selectedService.price}</p>
                    </div>

                  </div>

                  <div>
                    <h4 className="font-medium text-black font-bold">Service Date</h4>
                    <p className="text-black">{selectedService.date}</p>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  {/* <button
                    onClick={closeModal}
                    className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    Close
                  </button> */}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CustomerServiceDetails;