import React, { useEffect, useState } from "react";
import {
  createSparePart,
  deleteSpareParts,
  getAllSpareParts,
} from "./Services";

interface SparePart {
  id: string;
  price: string;
  productName: string;
  brand: string;
  image: string[];
  stock: string;
  inStock: boolean;
  category: string;
  slug: string;
}

const partTypes = [
  "Engine",
  "Brakes",
  "Lighting",
  "Cooling",
  "Sensor",
  "Switch & Buttons",
  "Grille",
  "Mirror",
  "Slider",
  "Suspension",
  "Electrical",
  "Body Parts",
  "Interior",
];

// ToggleSwitch Component
const ToggleSwitch: React.FC<{ enabled: boolean; onToggle: () => void }> = ({
  enabled,
  onToggle,
}) => (
  <button
    onClick={onToggle}
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9b111e] ${
      enabled ? "bg-[#9b111e]" : "bg-gray-300"
    }`}
    aria-pressed={enabled}
  >
    <span
      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
        enabled ? "translate-x-6" : "translate-x-1"
      }`}
    />
  </button>
);

const SpareParts: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [partsData, setPartsData] = useState<SparePart[]>([]);
  const [selectedPart, setSelectedPart] = useState<SparePart | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newPart, setNewPart] = useState<Omit<SparePart, "id">>({
    productName: "",
    price: "0",
    inStock: true,
    image: [""],
    stock: "12",
    slug: "Engine",
    category: "spare",
    brand: "new",
  });

  useEffect(() => {
    const fetchParts = async () => {
      try {
        const response: any = await getAllSpareParts("");
        console.log("Fetched spare parts:", response.data.data);
        setPartsData(response.data.data);
      } catch (error) {
        console.error("Error fetching spare parts:", error);
      }
    };

    fetchParts();
  }, []);

  const addNewPart = async () => {
    try {
      console.log(newPart);
      const response: any = await createSparePart(newPart);
      console.log(response);
      const createdPart = response.data.data;
      setPartsData((prev) => [...prev, createdPart]);
      resetAddForm();
      // if (newPart.productName.trim() && newPart.image[0].trim()) {
      //   // const id = Math.max(...partsData.map(p => p._i;
      //   const partToAdd: SparePart = {
      //     ...newPart,
      //   };
      //   setPartsData((prev) => [...prev, newPart]);
      //   setShowAddForm(false);
      //   setNewPart(null);
      // }
    } catch (error) {
      console.error("Error creating spare part:", error);
    }
    //  setShowAddForm(false);
  };

  const deletePart = async (partId: string) => {
    try {
      const response = await deleteSpareParts(partId);
      setPartsData((prev) => prev.filter((part) => part._id !== partId));
      setShowDeleteConfirm(false);
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  const filteredParts = partsData.filter((part) => part.productName);

  const updatePart = (updatedPart: SparePart) => {
    setPartsData((prev) =>
      prev.map((part) => (part.id === updatedPart.id ? updatedPart : part))
    );
  };

  // const addNewPart = () => {

  // };

  const resetAddForm = () => {
    setNewPart({
      productName: "",
      price: "0",
      inStock: true,
      image: [""],
      slug: "Engine",
      brand: "new",
      category: "Engine",
      stock: "12",
    });
    setShowAddForm(false);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <h1 className="text-4xl font-bold text-[#9b111e] text-left">
          Spare Parts
        </h1>
        {/* Search Bar */}
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search by product name..."
            className="border border-gray-300 rounded-full px-5 py-2 pr-10 w-full focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="absolute right-3 top-[42%] -translate-y-1/2 text-3xl text-[#9b111e] hover:text-red-600 transition-transform hover:scale-125"
            onClick={() => setSearchTerm("")}
            aria-label="Clear search"
          >
            &times;
          </button>
        </div>
      </div>

      {/* Hero Card */}
      <div className="mb-8 w-full bg-gray-100 rounded-xl shadow p-6 flex flex-col lg:flex-row items-center gap-6 hover:shadow-lg hover:scale-[1.01] transition-transform duration-300 ease-in-out">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-[#9b111e] mb-4">
            Welcome to Auto Spare Hub
          </h2>
          <p className="text-gray-700 mb-3">
            Discover top-quality auto spare parts. We offer genuine and
            aftermarket components with fast delivery and customer satisfaction
            guaranteed.
          </p>
          <button
            onClick={() => setShowAddForm(true)}
            className="mt-4 bg-[#9b111e] text-white px-6 py-3 rounded-lg hover:bg-red-700 transition font-medium flex items-center gap-2"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            Add New Product
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

      <div className="flex  justify-between mb-6">
        <h2 className="text-3xl ml-6 font-bold text-[#9b111e] text-left">
          Products
        </h2>
        {/* <button
    className="bg-[#9b111e] text-white px-5 py-2 rounded-full text-sm hover:bg-red-700 transition"
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
  >
    View All Products
  </button> */}
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8 px-2">
        {filteredParts.map((part, index) => (
          <div
            key={index}
            className="group relative border rounded-lg overflow-hidden shadow transition-transform duration-300 cursor-pointer bg-[#efe7d0] hover:scale-105 hover:shadow-[0_0_10px_rgba(155,17,30,0.5)]"
            onClick={() => setSelectedPart(part)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{ minHeight: "260px" }} // ensures min height but allows vertical flexibility
          >
            <div className="h-[180px] flex justify-center items-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt={part.productName}
                className="max-w-[160px] max-h-[160px] w-auto h-auto object-cover transition-all duration-300 ease-in-out rounded-md"
              />
            </div>
            <div className="p-3">
              <div className="text-xs font-semibold line-clamp-2 mb-1">
                {part.productName}
              </div>
              <div className="text-xs text-gray-600 mb-1">{part.slug}</div>
              <div className="text-sm font-bold text-[#9b111e]">
                ₹{part.price?.toLocaleString() ?? "0"}
              </div>
              <div
                className={`mt-1 text-xs font-semibold ${
                  part.inStock ? "text-green-600" : "text-red-600"
                }`}
              >
                {part.inStock ? "In Stock" : "Out of Stock"}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-full px-4 md:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-[#9b111e] mb-8 text-center md:text-left">
          BY CATEGORIES
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Category Card */}
          {[
            {
              title: "Wheels and Tires",
              image:
                "https://img.freepik.com/free-vector/realistic-complete-set-car-wheels_1284-29765.jpg?ga=GA1.1.1244886688.1725532511&semt=ais_hybrid&w=740",
              items: [
                "Bearings & Hubs",
                "Chrome Rims",
                "Hybrid Tyres",
                "Seasonal Tyres",
                "Wheel Bolts",
              ],
            },
            {
              title: "Body Parts",
              image:
                "https://img.freepik.com/premium-photo/two-metal-pistons-white_241146-682.jpg?ga=GA1.1.1244886688.1725532511&semt=ais_hybrid&w=740",
              items: [
                "Headlights",
                "Accelerator",
                "Bumpers",
                "Clutch",
                "Washers",
              ],
            },
            {
              title: "Performance Parts",
              image:
                "https://img.freepik.com/free-psd/3d-style-mechanical-item-isolated-transparent-background_191095-13746.jpg?ga=GA1.1.1244886688.1725532511&semt=ais_hybrid&w=740",
              items: [
                "Drive Belts",
                "Engine Gasket",
                "Fuel Pumps",
                "Head Bolts",
                "Piston Rings",
              ],
            },
            {
              title: "Maintenance",
              image:
                "https://img.freepik.com/free-vector/engine-pistons-system-composition-with-realistic-image-assembled-metal-engine-elements-isolated_1284-53969.jpg?ga=GA1.1.1244886688.1725532511&semt=ais_hybrid&w=740",
              items: [
                "Cleaners",
                "Antifreeze",
                "Engine Oil",
                "Repair Kits",
                "Bodypaint",
              ],
            },
          ].map(({ title, image, items }) => (
            <div className="flex flex-col gap-4 p-6 border  rounded-xl shadow-md">
              <div className="flex justify-between items-center">
                <h2 className="text-md font-bold uppercase text-[#9b111e]">
                  {title}
                </h2>
                <img
                  src={image}
                  alt={title}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <ul className="space-y-1 text-sm">
                {items.map((item, idx) => (
                  <li key={idx} className="hover:underline cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
              <span className="text-sm font-semibold text-red-700 cursor-pointer hover:underline mt-1">
                ALL CATEGORIES →
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Full Width Section */}
      <div className="w-full py-12 px-6 flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1 max-w-2xl lg:order-1">
          <h2 className="text-4xl font-bold text-[#9b111e] mb-6">
            Professional Auto Service & Support
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Need help installing your spare parts? Our certified technicians
            provide expert installation services and comprehensive support. We
            ensure your vehicle gets the best care with genuine parts and
            professional service.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="bg-white px-4 py-2 rounded-full text-sm border shadow-sm">
              ✓ Expert Installation
            </div>
            <div className="bg-white px-4 py-2 rounded-full text-sm border shadow-sm">
              ✓ Quality Guarantee
            </div>
            <div className="bg-white px-4 py-2 rounded-full text-sm border shadow-sm">
              ✓ 24/7 Support
            </div>
          </div>
          {/* <button className="bg-[#9b111e] text-white px-8 py-4 rounded-lg hover:bg-red-700 transition font-medium text-lg">
      Book Service
    </button> */}
        </div>
        <div className="flex-1 lg:order-2">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Professional Auto Service"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Add Product Modal */}
      {showAddForm && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
          onClick={() => resetAddForm()}
        >
          <div
            className="bg-white rounded-xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => resetAddForm()}
              className="absolute top-2 right-2 text-3xl font-bold text-gray-600 hover:text-red-600"
              aria-label="Close modal"
            >
              &times;
            </button>

            <h2 className="text-xl font-bold mb-6 text-[#9b111e]">
              Add New Product
            </h2>

            <div className="space-y-4">
              {/* Product Name */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Product Name *
                </label>
                <input
                  type="text"
                  value={newPart.productName}
                  onChange={(e) =>
                    setNewPart({ ...newPart, productName: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                  placeholder="Enter product name"
                />
              </div>

              {/* Product Type */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Product Type *
                </label>
                <select
                  value={newPart.slug}
                  onChange={(e) =>
                    setNewPart({ ...newPart, slug: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                >
                  {partTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Price (₹) *
                </label>
                <input
                  type="text"
                  min="0"
                  value={newPart.price}
                  onChange={(e) =>
                    setNewPart({ ...newPart, price: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                  placeholder="Enter price"
                />
              </div>

              {/* Image URL */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">
                  Upload Image *
                </label>

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      const imageUrl = URL.createObjectURL(file);
                      setNewPart({ ...newPart, image: [imageUrl] });
                    }
                  }}
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                />

                {newPart.image[0] && (
                  <div className="mt-2 flex justify-center">
                    <img
                      src={newPart.image[0]}
                      alt="Preview"
                      className="w-32 h-32 object-cover rounded border"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>
                )}
              </div>

              {/* Stock Status */}
            </div>

            <div className="flex justify-between gap-3 mt-8">
              <button
                onClick={() => resetAddForm()}
                className="px-6 py-2 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
              >
                Cancel
              </button>
              <button
                onClick={addNewPart}
                disabled={
                  !newPart.productName.trim() || !newPart.image[0].trim()
                }
                className="px-6 py-2 bg-[#9b111e] text-white rounded-lg hover:bg-red-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                Add Product
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Product Modal */}
      {selectedPart && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4"
          onClick={() => setSelectedPart(null)}
        >
          <div
            className="bg-white rounded-xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPart(null)}
              className="absolute top-2 right-2 text-3xl font-bold text-gray-600 hover:text-red-600"
              aria-label="Close modal"
            >
              &times;
            </button>

            {/* Product Image */}
            <div className="mb-4 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt={selectedPart.productName}
                className="w-48 h-48 object-cover rounded-lg shadow-md"
              />
            </div>

            <label
              htmlFor="name"
              className="block text-sm font-medium mb-1 text-gray-700"
            >
              Product Name
              <input
                type="text"
                value={selectedPart.productName}
                onChange={(e) =>
                  setSelectedPart({
                    ...selectedPart,
                    productName: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded p-2 mb-4 mt-2"
              />
            </label>

            <label
              htmlFor="name"
              className="block text-sm font-medium mb-1 text-gray-700"
            >
              Product Type
              <input
                type="text"
                value={selectedPart.slug}
                onChange={(e) =>
                  setSelectedPart({
                    ...selectedPart,
                    slug: e.target.value,
                  })
                }
                className="w-full border border-gray-300 rounded p-2 mb-4 mt-2"
              />
            </label>

            {/* Editable price */}
            <label
              htmlFor="price"
              className="block text-sm font-medium mb-1 text-gray-700"
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
                  price: e.target.value,
                })
              }
              className="w-full border border-gray-300 rounded p-2 mb-4"
            />

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
                {selectedPart.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            <div className="flex justify-between gap-2 mt-6">
              <button
                onClick={() => {
                  if (selectedPart) updatePart(selectedPart);
                  setSelectedPart(null);
                }}
                className="bg-[#9b111e] text-white py-2 px-3 rounded hover:bg-red-700 transition text-xs"
              >
                Save & Close
              </button>

              <button
                onClick={() => setShowDeleteConfirm(true)}
                className="bg-red-600 text-white py-2 px-3 rounded hover:bg-red-700 transition text-xs"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Toast */}
      {showDeleteConfirm && selectedPart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-4 h-4 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.082 16.5c-.77.833.192 2.5 1.732 2.5z"
                  ></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Delete Product
              </h3>
            </div>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete "
              <span className="font-medium">{selectedPart.productName}</span>"?
              This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 text-gray-600 bg-gray-100 rounded hover:bg-gray-200 transition text-sm"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (selectedPart) deletePart(selectedPart._id);
                  setSelectedPart(null);
                }}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition text-sm"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpareParts;
