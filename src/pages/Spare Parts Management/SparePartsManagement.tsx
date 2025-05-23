import React, { useState } from "react";

import SpareM from "../../components/SparePartsManagement/SpareManagement/SpareM";
import SpareModal from "../../components/SparePartsManagement/SpareMPop/SpareModel";
import { COLORS, FONTS } from "../../constants/constants";

const SparePartsManagement: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imgUrl: string) => {
    setSelectedImage(imgUrl);
    setShowModal(true);
  };

  return (
    <div className="p-4">
		<div className='mb-4'>
			<p style={{...FONTS.header,color:COLORS.primary}} >Spare Management</p>
		</div>
		
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" >
        <SpareM onImageClick={handleImageClick} />
        <SpareM onImageClick={handleImageClick} />
		<SpareM onImageClick={handleImageClick} />
        <SpareM onImageClick={handleImageClick} />
		<SpareM onImageClick={handleImageClick} />
        <SpareM onImageClick={handleImageClick} />

      </div>

      <SpareModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        image={selectedImage}
      />
    </div>
  );
};

export default SparePartsManagement;
