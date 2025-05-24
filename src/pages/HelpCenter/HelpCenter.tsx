import React, { useState } from 'react';
import {
  FaUser,
  FaCogs,
} from 'react-icons/fa';
import {
  MdEventAvailable,
  MdPayment,
} from 'react-icons/md';

import { FaSearch } from 'react-icons/fa';
import { SiGooglecloudspanner } from "react-icons/si";
import { FaBoxOpen } from "react-icons/fa";

const helpCards = [
  {
    title: "My account",
    description: "Create and manage your account",
    icon: <FaUser size={32} className="text-green-600" />,
  },
  {
    title: "Bookings",
    description: "Manage your bookings and appointments",
    icon: <MdEventAvailable size={32} className="text-green-600" />,
  },
  {
    title: "Services",
    description: "Explore and manage our available services",
    icon: <SiGooglecloudspanner size={32} className="text-green-600" />,
  },
  {
    title: "Spare spots",
    description: "View and reserve available time slots",
    icon: <FaBoxOpen size={32} className="text-green-600" />,
  },
  {
    title: "Payment Issues",
    description: "Get help with billing and payment problems",
    icon: <MdPayment size={32} className="text-green-600" />,
  },
  {
    title: "Settings",
    description: "Customize your experience and preferences",
    icon: <FaCogs size={32} className="text-green-600" />,
  },
];

const HelpCenter: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState(helpCards);

  const handleSearch = () => {
    const filtered = helpCards.filter(
      (card) =>
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="h-screen bg-green-50 flex flex-col items-center px-4 py-12">
      <header className="w-full max-w-4xl text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">How can we help</h1>
        <div className="mt-4 flex items-center justify-center gap-2 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={handleSearch}
            className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 focus:outline-none"
          >
            <FaSearch />
          </button>
        </div>
      </header>

      {results.length === 0 ? (
        <p className="text-gray-600 mt-4">No results found.</p>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
          {results.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-md p-6 flex flex-col items-center text-center transition duration-300"
            >
              <div className="mb-3">{card.icon}</div>
              <h2 className="text-lg font-semibold text-gray-800">{card.title}</h2>
              <p className="text-sm text-gray-600">{card.description}</p>
            </div>
          ))}
        </section>
		
      )}
    </div>
  );
};

export default HelpCenter;
