import React from "react";
import { COLORS, FONTS } from "../../../constants/constants";
import dummyimg from "../../../assets/SpareManagement/jk.webp";
import { AiOutlineArrowRight } from "react-icons/ai";


interface SpareMProps {
  onImageClick: (imgUrl: string) => void;
}

const SpareM: React.FC<SpareMProps> = ({ onImageClick }) => {
  const images = [dummyimg]; // replace with actual different images

  return (
    <div className="w-full  max-w-sm bg-#fdefe9  border border-gray-200 hover:bg-[#f9ccac] transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-90  rounded-lg shadow-sm" >
      <div className="overflow-x-auto flex space-x-2 p-4">
        {images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`thumb-${idx}`}
            className=" object-cover rounded-md cursor-pointer"
            onClick={() => onImageClick(img)}
          />
        ))}
      </div>
      <div className="px-5 pb-5">
        <h5
          className="text-xl font-semibold tracking-tight"
          style={{ ...FONTS.paragraph, color: COLORS.secondary }}
        >
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </h5>
      </div>
      <div className="flex items-center justify-between p-5" >
        <div className="flex text-lg">
          <p style={{color:COLORS.secondary}}>Stock:</p>
          <p style={{color:COLORS.primary}}> 599</p>
        </div>
        <div>
            {images.map((img, idx) => (
          <button className=" transition delay-10 duration-300 ease-in-out hover:-translate-x-1 hover:scale-270  text-xl hover:text-xl rounded-lg text-sm px- py-2.5 text-center" onClick={() => onImageClick(img)} ><AiOutlineArrowRight /> </button>
        ))}
        </div>
      </div>
    </div>
  );
};

export default SpareM;
