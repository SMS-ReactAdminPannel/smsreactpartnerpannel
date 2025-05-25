import React, { useState } from "react";
import { AiOutlineClose, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { COLORS, FONTS } from "../../../constants/constants";
import InvoicePopup from "../../SparePartsManagement/SpareInvoice/SpareInvoice.tsx";

// import { useNavigate } from "react-router-dom";

interface SpareModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
}

const SpareModal: React.FC<SpareModalProps> = ({ isOpen, onClose, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showInvoicePopup, setShowInvoicePopup] = useState(false);

  if (!isOpen) return null;

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center"
      // click on backdrop closes modal
    >
      <div
        className="relative bg-white w-11/12 max-w-6xl rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden border-gray-300"
        onClick={(e) => e.stopPropagation()} // prevent closing on inner content click
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{ backgroundColor: COLORS.bgColor }}
          className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center rounded-full text-xl text-gray-700 hover:text-black shadow"
        >
          <AiOutlineClose />
        </button>

        {/* Left: Sliding Images */}
        <div className="w-full md:w-1/2 relative bg-gray-100 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product ${index + 1}`}
                className="w-full object-contain h-96 flex-shrink-0"
              />
            ))}
          </div>

          {/* Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white text-black rounded-full p-2 shadow hover:bg-gray-200"
              >
                <AiOutlineLeft size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white text-black rounded-full p-2 shadow hover:bg-gray-200"
              >
                <AiOutlineRight size={20} />
              </button>
            </>
          )}
        </div>

        {/* Right: Details */}
        <div className="w-full md:w-1/2 p-6 flex flex-col overflow-y-auto justify-between">
          <div>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: COLORS.primary, ...FONTS.header }}
            >
              Product Details
            </h2>
            <div style={{ ...FONTS.paragraph, color: COLORS.secondary }}>
              <p className="mb-2">Name: Apple Watch Series 7</p>
              <p className="mb-2">Stock: 599</p>
              <p className="mb-2">Color: Starlight</p>
              <p className="mb-2">Type: GPS, Aluminium Case</p>
              <p className="mb-2">Price: ₹ 1,960/Piece</p>
            </div>
          </div>

          <div className="mt-6">
            <button
              className="w-full py-3 bg-[#9b211e] text-white font-semibold rounded-md hover:bg-[#7c1a19] transition-transform transform hover:scale-95"
              onClick={() => setShowInvoicePopup(true)}
            >
              Invoice
            </button>
          </div>
        </div>
      </div>

      {/* Nested Invoice Popup */}
      {showInvoicePopup && (
        <InvoicePopup
          onClose={() => setShowInvoicePopup(false)}
          onDownload={() => {
            setShowInvoicePopup(false);
            console.log("Invoice download triggered!");
          }}
        />
      )}
    </div>
  );
};

export default SpareModal;
