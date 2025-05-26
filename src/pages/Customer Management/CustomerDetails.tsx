import React, { useState } from 'react';
import { FaSearch, FaArrowUp } from 'react-icons/fa';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

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
    { label: 'Active', value: 50, color: '#800000' },
    { label: 'Inactive', value: 50, color: '#A05252' },
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
      className="relative p-4 h-36 w-full max-w-[240px] flex items-center gap-4 rounded-lg shadow-md border border-[#800000] hover:shadow-xl hover:scale-105 transform transition-transform duration-300"
    >
      <div className="space-y-1 text-sm text-gray-700 font-semibold">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#800000]" />
          Active: 50%
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#A05252]" />
          Inactive: 50%
        </div>
      </div>
      <svg width="100" height="100" viewBox="0 0 100 100">
        {renderSegments}
        <circle cx="50" cy="50" r="30" fill="white" />
        <text x="50" y="54" textAnchor="middle" fontSize="12" fill="#333">100%</text>
      </svg>
    </motion.div>
  );
};

type ProfileViewComponent ={
  onProfileView : ()=> void
}

const CustomerDetails: React.FC<ProfileViewComponent> = ({onProfileView}) => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredData = customerData.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase())
  );

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

  return (
    <div className="p-6 min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-6 mr-10 gap-6">
        {['Total Customers', 'Total Services', 'Total Orders'].map((title, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="relative p-5 max-w-[220px] h-36 w-full rounded-lg shadow-md border border-[#800000] hover:shadow-xl transform transition-transform duration-300 hover:scale-105"
          >
            <div className="absolute bottom-3 right-3 flex items-center space-x-1 bg-green-100 text-green-700 text-sm font-medium px-2 py-1 rounded-full w-fit">
              <FaArrowUp className="text-xs" />
              <span>{[15, 8, 12][i]}%</span>
            </div>
            <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
            <p className="absolute bottom-4 left-4 text-5xl text-black">
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
          </motion.div>
        ))}
        <SimpleDonutChart />
      </div>

      <div className="relative w-80 mb-6">
        <span className="absolute inset-y-0 left-3 flex items-center text-[#800000]">
          <FaSearch />
        </span>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          placeholder="Search customers..."
          className="pl-10 pr-4 py-2 w-full border border-[#800000] rounded-md text-base focus:outline-none focus:ring-2 focus:ring-[#800000]"
        />
      </div>

      <div className="overflow-x-auto">
        <div className="grid grid-cols-7 gap-6 text-[16px] font-bold text-gray-800 p-4 border-b text-left">
          <div className="pl-10">Name</div>
          <div className="pl-10">Email</div>
          <div className="pl-8">Services</div>
          <div className="pl-2">Orders</div>
          <div className="pl-6">Spec</div>
          <div className="pl-2">Status</div>
        </div>

        {paginatedData.length > 0 ? (
          paginatedData.map((customer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="grid grid-cols-7 gap-6 items-center text-[17px] py-4 px-4 border-b text-left shadow-md rounded-md mb-4 hover:shadow-lg transition-shadow duration-300 bg-white"
            >
              <div className="flex items-center gap-4 pr-1">
                <img
                  src={customer.image}
                  alt={customer.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="font-bold">{customer.name}</span>
              </div>
              <div className="pl-1">{customer.email}</div>
              <div className="pl-12">{customer.services}</div>
              <div className="pl-5">{customer.orders}</div>
              <div className="pr-5">{customer.spec}</div>
              <div className="pl-2 font-semibold">
                <span className={customer.status === 'Active' ? 'text-green-600' : 'text-red-600'}>
                  {customer.status}
                </span>
              </div>
              <div className="pl-2">
                <button onClick={onProfileView} className="relative overflow-hidden px-4 py-2 bg-[#800000] text-white rounded hover:bg-[#990000] transition">
                  <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition"></span>
                  View
                </button>
              </div>
            </motion.div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-base mt-6">No customers found.</p>
        )}
      </div>

      {filteredData.length > ITEMS_PER_PAGE && (
        <div className="flex justify-center mt-10 space-x-2 items-center">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-10 h-10 text-lg flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
          >
            &lt;
          </button>
          <span className="px-4 py-2 text-base text-gray-700">
            {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-10 h-10 text-lg flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 disabled:opacity-50"
          >
            &gt;
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomerDetails;
