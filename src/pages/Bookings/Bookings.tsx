import React from "react";
import { motion } from "framer-motion";

const Bookings: React.FC = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center px-6 py-12"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')", // Maroon car image
      }}
    >
      {/* Layout container */}
      <div className="flex justify-between items-center min-h-screen">
        {/* Left: Description with animation */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl text-white pl-6 pr-4"
        >
          <p className="text-2xl md:text-3xl font-semibold drop-shadow-lg">
            Schedule your vehicle's service quickly and easily. Choose a service, your preferred date, and a convenient location.
          </p>
        </motion.div>

        {/* Right: Form with animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="w-full max-w-xl bg-white bg-opacity-90 rounded-lg shadow-xl p-8 mr-6"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Book a Service Appointment
          </h2>

          <form className="flex flex-col gap-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input type="text" placeholder="Your Name" className="flex-1 border border-gray-300 rounded-md px-4 py-2" />
              <input type="email" placeholder="Email" className="flex-1 border border-gray-300 rounded-md px-4 py-2" />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input type="tel" placeholder="Phone" className="flex-1 border border-gray-300 rounded-md px-4 py-2" />
              <select className="flex-1 border border-gray-300 rounded-md px-4 py-2">
                <option value="">-- Select Service --</option>
                <option value="oil-change">Oil Change</option>
                <option value="ac-service">AC Service</option>
                <option value="brake-check">Brake Check</option>
              </select>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <input type="date" className="flex-1 border border-gray-300 rounded-md px-4 py-2" />
              <input type="text" placeholder="Registration No" className="flex-1 border border-gray-300 rounded-md px-4 py-2" />
            </div>

            <select className="w-full border border-gray-300 rounded-md px-4 py-2">
              <option value="">-- Preferred Service Location --</option>
              <option value="omr">OMR</option>
              <option value="velachery">Velachery</option>
              <option value="tambaram">Tambaram</option>
            </select>

            <textarea
              placeholder="Your Message..."
              className="w-full border border-gray-300 rounded-md px-4 py-2"
              rows={3}
            ></textarea>

            <button
              type="submit"
              className="w-full bg-[#9b111e] text-white py-2 rounded-md hover:bg-[#b01a2b] transition"
            >
              BOOK NOW
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Bookings;
