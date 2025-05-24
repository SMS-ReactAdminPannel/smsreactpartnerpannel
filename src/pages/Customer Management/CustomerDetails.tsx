import React, { useState } from 'react';
import { FaSearch, FaArrowUp, FaChevronRight, FaChevronLeft, FaFilter } from 'react-icons/fa';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { FaUsers, FaTools, FaShoppingCart,} from 'react-icons/fa';


const customerData = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    services: '6',
    orders: 3,
    spec: 'Toyota Camry',
    status: 'Active',
    image: 'https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg',
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    services: '8',
    orders: 5,
    spec: 'Honda Civic',
    status: 'Inactive',
    image: 'https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg',
  },
  {
    name: 'Sam Wilson',
    email: 'sam@example.com',
    services: '3',
    orders: 2,
    spec: 'Ford Explorer',
    status: 'Active',
    image: 'https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg',
  },
  {
    name: 'Emily Johnson',
    email: 'emily@example.com',
    services: '7',
    orders: 4,
    spec: 'Nissan Altima',
    status: 'Inactive',
    image: 'https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg',
  },
  {
    name: 'Michael Brown',
    email: 'michael@example.com',
    services: '5',
    orders: 1,
    spec: 'BMW 3 Series',
    status: 'Active',
    image: 'https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg',
  },
  {
    name: 'Emily Johnson',
    email: 'emily@example.com',
    services: '7',
    orders: 4,
    spec: 'Nissan Altima',
    status: 'Inactive',
    image: 'https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg',
  },
  {
    name: 'Michael Brown',
    email: 'michael@example.com',
    services: '5',
    orders: 1,
    spec: 'BMW 3 Series',
    status: 'Active',
    image: 'https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg',
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    services: '6',
    orders: 3,
    spec: 'Toyota Camry',
    status: 'Active',
    image: 'https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg',
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    services: '8',
    orders: 5,
    spec: 'Honda Civic',
    status: 'Inactive',
    image: 'https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg',
  },
  {
    name: 'Sam Wilson',
    email: 'sam@example.com',
    services: '3',
    orders: 2,
    spec: 'Ford Explorer',
    status: 'Active',
    image: 'https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg',
  },
];

const ITEMS_PER_PAGE = 5;

const SimpleDonutChart = () => {
  const radius = 40;
  const stroke = 10;
  const circumference = 2 * Math.PI * radius;

  const data = [
    { label: 'Active', value: 50, color: '#3B82F6' },
    { label: 'Inactive', value: 50, color: '#EC4899' },
  ];

  let cumulativePercent = 0;

  const renderSegments = data.map((slice, index) => {
    const offset = circumference * cumulativePercent;
    const dash = (slice.value / 100) * circumference;
    cumulativePercent += slice.value / 100;

    return (
      <circle
        key={index}
        r={radius}
        cx="50"
        cy="50"
        fill="transparent"
        stroke={slice.color}
        strokeWidth={stroke}
        strokeDasharray={`${dash} ${circumference - dash}`}
        strokeDashoffset={-offset}
        transform="rotate(-90 50 50)"
      />
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative p-6 h-full w-full flex flex-col sm:flex-row items-center justify-between gap-4 rounded-xl bg-white shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
    >
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-[#800000] pb-5">Customer Status</h3>
        <div className="space-y-2">
          {data.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm font-medium">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-gray-700">{item.label}:</span>
              <span className="text-gray-900">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <svg width="100" height="100" viewBox="0 0 100 100">
          {renderSegments}
          <circle cx="50" cy="50" r="30" fill="white" />
          <text
            x="50"
            y="54"
            textAnchor="middle"
            fontSize="14"
            fontWeight="600"
            fill="#800000"
          >
            100%
          </text>
        </svg>
      </div>
    </motion.div>
  );
};

type ProfileViewComponent = {
  onProfileView: () => void;
};

const CustomerDetails: React.FC<ProfileViewComponent> = ({ onProfileView }) => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);

  const filteredData = customerData.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(search.toLowerCase()) ||
      customer.email.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter ? customer.status === statusFilter : true;

    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const handleFilterClick = () => {
    setShowFilters(!showFilters);
  };

  const handleStatusFilter = (status: string | null) => {
    setStatusFilter(status);
    setCurrentPage(1);
  };

  return (

    <div className="p-3 min-h-screen" style={{ backgroundColor: '#fbeaea' }}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {['Total Customers', 'Total Services', 'Total Orders'].map((title, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 relative h-40"
          >
            {/* Percentage in top right corner */}
            <div className="absolute top-3 right-3 flex items-center space-x-1 bg-green-50 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
              <FaArrowUp className="text-xs" />
              <span>{[15, 8, 12][i]}%</span>
            </div>

            <div className="flex flex-col h-full justify-between">
              <div>
                <p className="text-sm font-medium text-[#800000]">{title}</p>
                <p className="mt-12 text-5xl  text-gray-800">
                  <CountUp
                    end={
                      i === 0
                        ? customerData.length
                        : i === 1
                          ? customerData.reduce((acc, c) => acc + Number(c.services), 0)
                          : customerData.reduce((acc, c) => acc + c.orders, 0)
                    }
                    duration={2}
                  />
                </p>
              </div>

              {/* Icon in bottom right corner */}
              <div className="flex justify-end ">
                <div className=" -mt-12 mr-2 text-[#b94747]">
                  {i === 0 ? (
                    <FaUsers className="text-3xl"/>
                  ) : i === 1 ? (
                    <FaTools className="text-3xl"/>
                  ) : (
                    <FaShoppingCart className="text-3xl"/>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Donut Chart Card with Icon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300 relative h-40"
        >
          <SimpleDonutChart />
          {/* Icon in bottom right corner */}
          
        </motion.div>
      </div>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="relative w-full sm:w-80">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <FaSearch />
            </div>
            <input
              type="text"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search by name or email..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-[#800000] focus:border-transparent"
            />
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            {showFilters && (
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => handleStatusFilter(null)}
                  className={`px-3 py-1 text-sm rounded-md ${!statusFilter ? 'bg-white shadow-sm' : 'hover:bg-gray-50'}`}
                >
                  All
                </button>
                <button
                  onClick={() => handleStatusFilter('Active')}
                  className={`px-3 py-1 text-sm rounded-md ${statusFilter === 'Active' ? 'bg-green-100 text-green-800' : 'hover:bg-gray-50'}`}
                >
                  Active
                </button>
                <button
                  onClick={() => handleStatusFilter('Inactive')}
                  className={`px-3 py-1 text-sm rounded-md ${statusFilter === 'Inactive' ? 'bg-red-100 text-red-800' : 'hover:bg-gray-50'}`}
                >
                  Inactive
                </button>
              </div>
            )}

            <button
              onClick={handleFilterClick}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${showFilters ? 'bg-[#800000] text-white border-[#800000]' : 'border-gray-300 hover:bg-gray-100'}`}
            >
              <FaFilter className="text-sm" />
              <span className="text-sm"></span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-full">
            <div className="grid grid-cols-7 gap-4 text-sm font-semibold text-gray-600 p-4 bg-gray-50 border-b border-gray-200">
              <div className="pl-6">Customer</div>
              <div className="pl-2">Email</div>
              <div className="pl-2 text-center">Services</div>
              <div className="pl-2 text-center">Orders</div>
              <div className="pl-2">Vehicle</div>
              <div className="pl-2 text-center">Status</div>
              <div className="pl-2">Action</div>
            </div>

            <div className="divide-y divide-gray-200">
              {paginatedData.length > 0 ? (
                paginatedData.map((customer, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="grid grid-cols-7 gap-4 items-center text-sm p-4 hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-3 pl-2">
                      <img
                        src={customer.image}
                        alt={customer.name}
                        className="w-10 h-10 rounded-full object-cover border border-gray-200"
                      />
                      <span className="font-medium text-gray-800">{customer.name}</span>
                    </div>
                    <div className="text-gray-600 truncate pr-2">{customer.email}</div>
                    <div className="text-center text-gray-700">{customer.services}</div>
                    <div className="text-center text-gray-700">{customer.orders}</div> 
                    <div className="text-gray-600 truncate pr-2">{customer.spec}</div>
                    <div className="flex justify-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${customer.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                        }`}>
                        {customer.status}
                      </span>
                    </div>
                    <div>
                      <button
                        onClick={onProfileView}
                        className="text-[#800000] hover:text-[#990000] font-medium text-sm flex items-center gap-1"
                      >
                        View <FaChevronRight className="text-xs" />
                      </button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <div className="p-8 text-center">
                  <p className="text-gray-500">No customers found matching your search</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {filteredData.length > ITEMS_PER_PAGE && (
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg border border-gray-300 flex items-center gap-2 ${currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'
                }`}
            >
              <FaChevronLeft className="text-xs" />
              Previous
            </button>
            <div className="text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </div>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg border border-gray-300 flex items-center gap-2 ${currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'
                }`}
            >
              Next
              <FaChevronRight className="text-xs" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerDetails;
