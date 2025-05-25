import React from "react";
import { COLORS } from "../../../constants/constants";

interface InvoicePopupProps {
  onClose: () => void;
  onDownload: () => void;
}

const InvoicePopup: React.FC<InvoicePopupProps> = ({ onClose, onDownload }) => {
  return (
    <div
      className="fixed inset-0 z-60 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={onClose} // Close when backdrop is clicked
    >
      <div
        className="bg-white p-6 rounded-md shadow-lg w-96 text-center"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        <h2 className="text-xl font-bold mb-4 text-gray-800">Invoice Ready</h2>
        <p className="mb-4 text-gray-600">Click below to download your invoice.</p>

        <div className="flex justify-center space-x-4 mt-4">
          <button
            style={{ backgroundColor: COLORS.primary }}
            className="px-4 py-2 text-white rounded hover:bg-green-700"
            onClick={onDownload}
          >
            Download
          </button>
          <button
            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoicePopup;
