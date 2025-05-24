import React, { useState } from 'react';

interface SparePart {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  images: string[];
  type: string;
  count: number; // quantity count
}

const initialPartsData: SparePart[] = [
  {
    id: 1,
    name: 'AC Vent Grille Clip Slider Set',
    price: 3500,
    inStock: true,
    images: ['https://m.media-amazon.com/images/I/61qH3XvY-BL.jpg'],
    type: 'Slider',
    count: 5,
  },
  {
    id: 2,
    name: 'Air Conditioning A/C Pressure ',
    price: 1500,
    inStock: false,
    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi67ZT0gklmtrW2cnDI_610wn2Zns2BDH7kw&s'],
    type: 'Sensor',
    count: 3,
  },
  {
    id: 3,
    name: 'Mercedes Engine Start Stop Button',
    price: 1200,
    inStock: true,
    images: ['https://m.media-amazon.com/images/I/61VgEhafLlL._AC_UF1000,1000_QL80_.jpg'],
    type: 'Switch & Buttons',
    count: 10,
  },
  {
    id: 4,
    name: 'Front Grille Body Kit for MG 5/6/ZS',
    price: 2000,
    inStock: true,
    images: ['https://www.shutterstock.com/image-illustration/car-brake-disk-red-caliper-600nw-2111526026.jpg'],
    type: 'Grille',
    count: 7,
  },
  {
    id: 5,
    name: 'Dashboard Switch Button',
    price: 1200,
    inStock: true,
    images: ['https://www.shutterstock.com/image-photo/car-headlight-switch-operating-vehicle-600nw-1782048353.jpg'],
    type: 'Switch & Buttons',
    count: 6,
  },
  {
    id: 6,
    name: 'Rearview Mirror for Toyota Corolla',
    price: 2200,
    inStock: false,
    images: ['https://image.made-in-china.com/202f0j00BpMoIvJnQHcS/All-Aftermarket-Spare-Auto-Part-Engine-Suspension-Electrical-Body-System-Car-Parts-with-Bom-One-Stop-Service.webp'],
    type: 'Mirror',
    count: 2,
  },
  {
    id: 7,
    name: 'Headlight Assembly for BMW X5',
    price: 5500,
    inStock: true,
    images: ['https://image.made-in-china.com/2f0j00FJbVaGrlOtqE/Good-Price-Auto-Components-Car-Engine-Parts-Cooling-Water-Pump-OEM-1300A066-MD979395-for-Mitsubishi-Outlander-Galant-Saloon-Grandis.webp'],
    type: 'Lighting',
    count: 4,
  },
  {
    id: 8,
    name: 'Radiator Fan Motor Honda Civic',
    price: 3000,
    inStock: true,
    images: ['https://image.made-in-china.com/202f0j00JhgkzEWKbUbB/Engine-Parts-371-Cylinder-Head-for-Chery-371-1003015mA.webp'],
    type: 'Cooling',
    count: 9,
  },
  {
    id: 9,
    name: 'Brake Pads for Hyundai i20',
    price: 1800,
    inStock: false,
    images: ['https://www.wagnerbrake.com/content/loc-na/loc-us/fmmp-wagner/en_US/technical/parts-matter/driver-education-and-vehicle-safety/how-the-brake-system-works/_jcr_content/article/article-par/image_1776083492.img.jpg/car-brake-pad-rotor-1738009820082.jpg'],
    type: 'Brakes',
    count: 3,
  },
  {
    id: 10,
    name: 'Spark Plug for Maruti Suzuki',
    price: 400,
    inStock: true,
    images: ['https://thumbs.dreamstime.com/b/hybrid-electric-car-interior-element-metal-gas-accelerate-brake-pedal-sport-automatic-gearbox-controls-329261803.jpg'],
    type: 'Engine',
    count: 15,
  },
];

// ToggleSwitch Component
const ToggleSwitch: React.FC<{ enabled: boolean; onToggle: () => void }> = ({
  enabled,
  onToggle,
}) => (
  <button
    onClick={onToggle}
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9b111e] ${
      enabled ? 'bg-[#9b111e]' : 'bg-gray-300'
    }`}
    aria-pressed={enabled}
  >
    <span
      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
        enabled ? 'translate-x-6' : 'translate-x-1'
      }`}
    />
  </button>
);

const SpareParts: React.FC = () => {
  const [partsData, setPartsData] = useState<SparePart[]>(initialPartsData);
  const [selectedPart, setSelectedPart] = useState<SparePart | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredParts = partsData.filter((part) =>
    part.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const updatePart = (updatedPart: SparePart) => {
    setPartsData((prev) =>
      prev.map((part) => (part.id === updatedPart.id ? updatedPart : part))
    );
  };

  return (
    <div className="p-6">
      {/* Search Bar */}
      <div className="mb-6 relative w-full max-w-md">
        <input
          type="text"
          placeholder="Search by product name..."
          className="border border-gray-300 rounded-full px-5 py-2 pr-10 w-full focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className={`absolute right-3 top-[42%] -translate-y-1/2 text-3xl text-[#9b111e] hover:text-red-600 transition-transform hover:scale-125`}
          onClick={() => setSearchTerm('')}
          aria-label="Clear search"
        >
          &times;
        </button>
      </div>

      {/* Hero Card */}
      <div className="mb-8 w-full bg-gray-100 rounded-xl shadow p-6 flex flex-col lg:flex-row items-center gap-6">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#9b111e] mb-4">
            Welcome to Auto Spare Hub
          </h2>
          <p className="text-gray-700 mb-3">
            Discover top-quality auto spare parts. We offer genuine and aftermarket
            components with fast delivery and customer satisfaction guaranteed.
          </p>
          <button className="mt-4 bg-[#9b111e] text-white px-5 py-2 rounded hover:bg-red-700 transition">
            Check here
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <img
            src="https://t4.ftcdn.net/jpg/05/21/93/17/360_F_521931702_TXOHZBa3tLVISome894Zc061ceab4Txm.jpg"
            alt="Spare Parts Overview"
            className="rounded-lg max-h-[250px] w-full object-cover shadow"
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredParts.map((part) => (
          <div
            key={part.id}
            className="group relative border rounded-lg overflow-hidden shadow transition-ease duration-200 cursor-pointer h-[260px] bg-[#efe7d0] hover:scale-100 hover:shadow-[0_0_10px_rgba(155,17,30,0.5)]"
            onClick={() => setSelectedPart(part)}
          >
            <div className="h-[180px] flex justify-center items-center overflow-hidden">
              <img
                src={part.images[0]}
                alt={part.name}
                className="w-[160px] h-[160px] object-cover transition-transform duration-300  rounded-md"
              />
            </div>
            <div className="p-3">
              <div className="text-xs font-semibold line-clamp-2 mb-1">{part.name}</div>
              <div className="text-xs text-gray-600 mb-1">{part.type}</div>
              <div className="text-sm font-bold text-[#9b111e]">
                ₹{part.price.toLocaleString()}
              </div>
              <div className="text-xs font-medium mt-1">
                Quantity: {part.count}
              </div>
              <div
                className={`mt-1 text-xs font-semibold ${
                  part.inStock ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {part.inStock ? 'In Stock' : 'Out of Stock'}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setSelectedPart(null)}
              className="absolute top-2 right-2 text-3xl font-bold text-gray-600 hover:text-red-600"
              aria-label="Close modal"
            >
              &times;
            </button>

            <h2 className="text-lg font-bold mb-2">{selectedPart.name}</h2>
            <p className="text-sm text-gray-600 mb-1">Type: {selectedPart.type}</p>

            {/* Editable price */}
            <label
              htmlFor="price"
              className="block text-sm font-medium mb-1 text-gray-700 mt-4"
            >
              Price (₹)
            </label>
            <input
              id="price"
              type="number"
              min={0}
              value={selectedPart.price}
              onChange={(e) =>
                setSelectedPart({
                  ...selectedPart,
                  price: Number(e.target.value),
                })
              }
              className="w-full border border-gray-300 rounded p-2 mb-4"
            />

            {/* Quantity controls */}
            <label className="block text-sm font-medium mb-1 text-gray-700">
              Quantity
            </label>
            <div className="flex items-center gap-3 mb-4">
              <button
                onClick={() =>
                  setSelectedPart((prev) =>
                    prev
                      ? { ...prev, count: Math.max(prev.count - 1, 0) }
                      : null
                  )
                }
                className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
              >
                -
              </button>
              <div className="text-lg font-semibold w-10 text-center">
                {selectedPart.count}
              </div>
              <button
                onClick={() =>
                  setSelectedPart((prev) =>
                    prev ? { ...prev, count: prev.count + 1 } : null
                  )
                }
                className="px-3 py-1 bg-gray-300 rounded hover:bg-gray-400"
              >
                +
              </button>
            </div>

            {/* Stock toggle */}
            <div className="flex items-center gap-3 mb-4">
              <ToggleSwitch
                enabled={selectedPart.inStock}
                onToggle={() =>
                  setSelectedPart((prev) =>
                    prev ? { ...prev, inStock: !prev.inStock } : null
                  )
                }
              />
              <span className="text-sm font-medium">
                {selectedPart.inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            <button
              onClick={() => {
                if (selectedPart) updatePart(selectedPart);
                setSelectedPart(null);
              }}
              className="mt-6 w-full bg-[#9b111e] text-white py-2 rounded hover:bg-red-700 transition"
            >
              Save & Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpareParts;
