import React, { useState } from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SparePart {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  images: string[];
  type: string;
}

const partsData: SparePart[] = [
  {
    id: 1,
    name: 'AC Vent Grille Clip Slider Set For Porsche Cayenne 958 SUV (2010–2017) (2 pcs)',
    price: 3500,
    inStock: true,
    images: [
      'https://m.media-amazon.com/images/I/61qH3XvY-BL.jpg',
      'https://m.media-amazon.com/images/I/61qH3XvY-BL.jpg',
      'https://m.media-amazon.com/images/I/61qH3XvY-BL.jpg',
      'https://m.media-amazon.com/images/I/61qH3XvY-BL.jpg',
    ],
    type: 'Slider',
  },
  {
    id: 2,
    name: 'Air Conditioning A/C Pressure Switch Sensor For Audi A3 8V Sedan (2012–2016)',
    price: 1500,
    inStock: false,
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi67ZT0gklmtrW2cnDI_610wn2Zns2BDH7kw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi67ZT0gklmtrW2cnDI_610wn2Zns2BDH7kw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi67ZT0gklmtrW2cnDI_610wn2Zns2BDH7kw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi67ZT0gklmtrW2cnDI_610wn2Zns2BDH7kw&s',
    ],
    type: 'Sensor',
  },
  {
    id: 3,
    name: 'All Class Mercedes Benz Engine Start And Stop Push Button',
    price: 1200,
    inStock: true,
    images: [
      'https://m.media-amazon.com/images/I/61VgEhafLlL._AC_UF1000,1000_QL80_.jpg',
      'https://m.media-amazon.com/images/I/61VgEhafLlL._AC_UF1000,1000_QL80_.jpg',
      'https://m.media-amazon.com/images/I/61VgEhafLlL._AC_UF1000,1000_QL80_.jpg',
      'https://m.media-amazon.com/images/I/61VgEhafLlL._AC_UF1000,1000_QL80_.jpg',
    ],
    type: 'Switch & Buttons',
  },
  {
    id: 4,
    name: 'Front Grille Body Kit for MG 5/6/ZS',
    price: 2000,
    inStock: true,
    images: [
      'https://www.shutterstock.com/image-illustration/car-brake-disk-red-caliper-600nw-2111526026.jpg',
      'https://www.shutterstock.com/image-illustration/car-brake-disk-red-caliper-600nw-2111526026.jpg',
      'https://www.shutterstock.com/image-illustration/car-brake-disk-red-caliper-600nw-2111526026.jpg',
      'https://www.shutterstock.com/image-illustration/car-brake-disk-red-caliper-600nw-2111526026.jpg',
    ],
    type: 'Grille',
  },
  {
    id: 55,
    name: 'Dashboard Switch Button for Mercedes',
    price: 1200,
    inStock: true,
    images: [
      'https://www.shutterstock.com/image-photo/car-headlight-switch-operating-vehicle-600nw-1782048353.jpg',
      'https://www.shutterstock.com/image-photo/car-headlight-switch-operating-vehicle-600nw-1782048353.jpg',
      'https://www.shutterstock.com/image-photo/car-headlight-switch-operating-vehicle-600nw-1782048353.jpg',
      'https://www.shutterstock.com/image-photo/car-headlight-switch-operating-vehicle-600nw-1782048353.jpg',
    ],
    type: 'Switch & Buttons',
  },
  {
    id: 6,
    name: 'Steering Wheel Interior Trim',
    price: 2200,
    inStock: true,
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDTySYdVRIC4Gv0tW-bk17WanFzM-f3i-EFw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDTySYdVRIC4Gv0tW-bk17WanFzM-f3i-EFw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDTySYdVRIC4Gv0tW-bk17WanFzM-f3i-EFw&s',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDTySYdVRIC4Gv0tW-bk17WanFzM-f3i-EFw&s',
    ],
    type: 'Interior',
  },
];

const NextArrow = ({ onClick }: any) => (
  <div
    className="absolute top-1/2 right-2 transform -translate-y-1/2 z-20 text-[#9b111e] hover:text-indigo-700 cursor-pointer"
    onClick={onClick}
  >
    <FaArrowRight size={24} />
  </div>
);

const PrevArrow = ({ onClick }: any) => (
  <div
    className="absolute top-1/2 left-2 transform -translate-y-1/2 z-20 text-[#9b111e] hover:text-indigo-700 cursor-pointer"
    onClick={onClick}
  >
    <FaArrowLeft size={24} />
  </div>
);

const SpareParts: React.FC = () => {
  const [selectedPart, setSelectedPart] = useState<SparePart | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredParts = partsData.filter((part) =>
    part.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="p-6">
      {/* Search Bar */}
     <div className="mb-6 w-full max-w-sm relative">
  <label className="block text-2xl font-semibold text-[#9b111e] mb-3">
    Spare Parts
  </label>
  <input
    type="text"
    placeholder="Search by product name..."
    className="w-full border border-gray-300 rounded-full px-5 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  <button
    onClick={() => setSearchTerm('')}
    className="absolute right-3 top-[53px] text-2xl text-gray-500 hover:text-gray-800 text-lg disabled:opacity-50"
    aria-label="Clear search"
    disabled={!searchTerm}
  >
    &times;
  </button>
</div>


      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredParts.map((part) => (
          <div
            key={part.id}
            className="group relative border rounded-lg overflow-hidden shadow transition-all duration-300 cursor-pointer h-[300px] bg-white"
            onClick={() => setSelectedPart(part)}
          >
            <div className="h-[300px] overflow-hidden transition-all duration-300 group-hover:h-[200px] flex justify-center items-center">
              <img
                src={part.images[0]}
                alt={part.name}
                className="w-[200px] h-[200px] object-contain transition-all duration-300"
              />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-95 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="font-semibold text-sm mb-1 line-clamp-2">{part.name}</div>
              <div className="text-xs text-gray-600">{part.type}</div>
              <div className="mt-2 flex justify-between items-center">
                <div className="text-lg font-bold text-[#9b111e]">
                  ₹{part.price.toLocaleString()}
                </div>
                <div
                  className={`text-sm ml-2 ${
                    part.inStock ? 'text-green-600' : 'text-red-500'
                  }`}
                >
                  {part.inStock ? 'In Stock' : 'Sold Out'}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
            <button
              onClick={() => setSelectedPart(null)}
              className="absolute top-2 right-2 text-3xl font-bold text-gray-600 hover:text-red-600"
              aria-label="Close modal"
            >
              &times;
            </button>

            <Slider {...sliderSettings}>
              {selectedPart.images.map((img, idx) => (
                <div key={idx} className="flex justify-center items-center h-56">
                  <img
                    src={img}
                    alt={`${selectedPart.name} view ${idx + 1}`}
                    className="h-[180px] object-contain mx-auto"
                  />
                </div>
              ))}
            </Slider>

            <h2 className="text-lg font-bold mt-4">{selectedPart.name}</h2>
            <p className="text-sm text-gray-600 mb-2">Type: {selectedPart.type}</p>
            <p className="text-lg text-[#9b111e] font-semibold mb-1">
              ₹{selectedPart.price.toLocaleString()}
            </p>
            <p className={selectedPart.inStock ? 'text-green-600' : 'text-red-500'}>
              {selectedPart.inStock ? 'In Stock' : 'Sold Out'}
            </p>

            <button
              onClick={() => setSelectedPart(null)}
              className="mt-4 w-full bg-[#9b111e] text-white py-2 rounded hover:bg-red-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpareParts;
