import { MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FONTS } from "../../constants/constants";
import { FaCar } from "react-icons/fa";
import { motion } from 'framer-motion';
import CustomerServiceDetails from "./CustomerServiceDetails";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";

type ReactComponent = {
  handleBack: ()=> void;
}
const CustomerProfileDetails:React.FC<ReactComponent> = ({handleBack}) => {

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Profile Section - Left Side */}
      <div className="w-full md:w-2/3 lg:w-1/4 p-2">
        <div className="bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500 h-full">
          <div 
            className="flex flex-col items-center py-8 px-4 bg-gradient-to-b from-amber-50 to-white"
            style={{ fontFamily: FONTS.header.fontFamily }}
          >
            <button className="p-2 " onClick={handleBack}><IoArrowBack className="text-2xl"/></button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-28 h-28 mb-4 rounded-full shadow-xl border-2 border-amber-200 hover:border-amber-400 transition-all duration-300"
              src="data:image/jpeg;base64,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" 
              alt="Chris Bumstead"
              whileHover={{ scale: 1.05 }}
            />
            
            <motion.h5 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-2xl font-bold text-[#9b111e]"
            >
              Chris Bumstead
            </motion.h5>
            
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
              { icon: <MdCall className="text-[#9b111e]"/>, label: "Phone", value: "+1 234 567 6789" },
              { icon: <MdEmail className="text-[#9b111e]"/>, label: "Email", value: "Cbum@gmail.com" },
              { icon: <FaCar className="text-[#9b111e]"/>, label: "Vehicles", value: "PORSCHE 911 GT3 , Nissan GTR,  Ford 1978 F150 Lariat edition, 1969 Chevrolet Camaro" },
              { icon: <FaLocationDot className="text-[#9b111e]"/>, label: "Address", value: "3512 Carlson Road, Prince George, British Columbia, Canada" }
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
      <CustomerServiceDetails />
    </div>
  );
};

export default CustomerProfileDetails;