import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { COLORS, FONTS } from "../../../constants/constants";

interface SpareModalProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
}

const SpareModal: React.FC<SpareModalProps> = ({ isOpen, onClose, image }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div className="relative bg-white w-11/12 max-w-6xl rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden  border-gray-300">
        {/*  Close Button Top Right */}
        <button
          onClick={onClose}
          style={{ backgroundColor: COLORS.bgColor }}
          className="absolute top-2 right-2 w-10 h-10 flex items-center justify-center rounded-full text-xl text-gray-700 hover:text-black shadow"
        >
          <AiOutlineClose />
        </button>

        {/*  Left: Image Section */}
        <div className="w-full md:w-1/2 p-6 bg-gray-100 flex items-center justify-center">
          <img
            src={image}
            alt="Selected Product"
            className="max-h-96 object-contain"
          />
        </div>

        {/*  Right: Details Section */}
        <div className="w-full md:w-1/2 p-6 flex flex-col overflow-y-auto justify-between">
          <div>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: COLORS.primary, ...FONTS.header }}
            >
              Product Details
            </h2>
            <div style={{...FONTS.paragraph,color:COLORS.secondary}}>
              <p className="mb-2">Name: Apple Watch Series 7</p>
              <p className="mb-2">Stock: 599</p>
              <p className="mb-2">Color: Starlight</p>
              <p className="mb-2">Type: GPS, Aluminium Case</p>
            </div>
          </div>

          {/*  Invoice Button at Bottom */}
          <div className="mt-6">
            <button
              className="w-full py-3 text-center  text-white font-semibold rounded-md  transition"
              style={{
                color: COLORS.primary,
                backgroundColor: COLORS.secondary,
              }}
            >
              Invoice
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpareModal;
