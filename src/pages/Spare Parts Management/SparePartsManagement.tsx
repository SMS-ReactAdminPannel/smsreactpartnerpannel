import React, { useState } from "react";

import SpareM from "../../components/SparePartsManagement/SpareManagement/SpareM";
import SpareModal from "../../components/SparePartsManagement/SpareMPop/SpareModel";
import { COLORS, FONTS } from "../../constants/constants";
import { } from "../../components/SparePartsManagement/SpareInvoice/SpareInvoice";

const SparePartsManagement: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const handleImageClick = (imgUrls: string[]) => {
    setSelectedImages(imgUrls);
    setShowModal(true);
  };

  const handleArrowClick = (imgUrls: string[]) => {
    setSelectedImages(imgUrls);
    setShowModal(true);
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <p style={{ ...FONTS.header, color: COLORS.primary }}>
          Spare Management
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <SpareM
          onImageClick={handleImageClick}
          onArrowClick={handleArrowClick}
        />
        <SpareM
          onImageClick={handleImageClick}
          onArrowClick={handleArrowClick}
        />
        <SpareM
          onImageClick={handleImageClick}
          onArrowClick={handleArrowClick}
        />
        <SpareM
          onImageClick={handleImageClick}
          onArrowClick={handleArrowClick}
        />
        <SpareM
          onImageClick={handleImageClick}
          onArrowClick={handleArrowClick}
        />
        <SpareM
          onImageClick={handleImageClick}
          onArrowClick={handleArrowClick}
        />
        <SpareM
          onImageClick={handleImageClick}
          onArrowClick={handleArrowClick}
        />
        <SpareM
          onImageClick={handleImageClick}
          onArrowClick={handleArrowClick}
        />
        <SpareM
          onImageClick={handleImageClick}
          onArrowClick={handleArrowClick}
        />
        <SpareM
          onImageClick={handleImageClick}
          onArrowClick={handleArrowClick}
        />
        <SpareM
          onImageClick={handleImageClick}
          onArrowClick={handleArrowClick}
        />
        <SpareM
          onImageClick={handleImageClick}
          onArrowClick={handleArrowClick}
        />
      </div>

      <SpareModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        images={selectedImages}
      />
	  
    </div>
	
	
  );
};

export default SparePartsManagement;
