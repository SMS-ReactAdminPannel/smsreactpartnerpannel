import React from "react";
import { COLORS, FONTS } from "../../../constants/constants";
import dummyimg from "../../../assets/SpareManagement/jk.webp";
import { AiOutlineArrowRight } from "react-icons/ai";

interface SpareMProps {
  onImageClick: (imgUrls: string[]) => void;
  onArrowClick: (imgUrls: string[]) => void;
}
const SpareM: React.FC<SpareMProps> = ({ onImageClick, onArrowClick }) => {
  const images = [
    dummyimg,
    dummyimg,
    dummyimg


  ]; // Replace with actual images

  return (
    <div className="w-full max-w-sm bg-[#fdefe9] border border-gray-200 rounded-lg shadow-sm hover:bg-[#f9ccac] transition-transform duration-300 hover:-translate-y-1 hover:scale-90 shadow-xl " 
    style={{transition: 'box-shadow 0.3s ease',
         boxShadow:
          '0 8px 20px rgba(155, 17, 30, 0.15), 0 4px 8px rgba(230, 168, 149, 0.2)',}}>
      <div className="relative w-full h-34">
        <img
          src={images[0]}
          alt="thumbnail"
          className="object-cover rounded-md cursor-pointer"
          onClick={() => onImageClick(images)}
        />
      </div>


      {/* Product Info */}
      <div className="px-5 pb-5">
        <h5
          className="text-xl font-semibold tracking-tight"
          style={{ ...FONTS.paragraph, color: COLORS.secondary }}
        >
          NTK Car Engine Ignition Knock Detonation Sensor
        </h5>
      </div>

      {/* Stock and Arrow Button */}
      <div className="flex items-center justify-between p-5">
        <div className="flex text-lg space-x-1">
          <p style={{ color: COLORS.secondary }}>Stock:</p>
          <p style={{ color: COLORS.primary }}>599</p>
        </div>

        {/* Arrow Button for First Image or all */}
        <button
          onClick={() => onArrowClick}
          className="hover:text-red-600 text-xl transition-transform hover:scale-110"
        >
          <AiOutlineArrowRight />
        </button>
      </div>
    </div>
  );
};

export default SpareM;
