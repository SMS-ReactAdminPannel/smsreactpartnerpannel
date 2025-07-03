import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { FONTS } from "../../constants/constants";
import toggleon from "../../assets/Toogle On.svg"
import toggleoff from "../../assets/Toogle Off.svg"
// import { IoArrowBackOutline } from "react-icons/io5";
type Category = { name: string; count: number };
type Service = {
  id: string;
  name: string;
  category: string;
  description: string;
  duration: string;
  price: number;
  status: string;
  imageUrl: string;
};

const initialCategories: Category[] = [
  { name: "All Services", count: 4 },
  { name: "engin", count: 2 },
  { name: "Interior", count: 1 },
  { name: "Exterior", count: 1 },
];

const initialServices: Service[] = [
  {
    id: "1",
    name: "spark plug",
    category: "engin",
    description: "desc",
    duration: "30 min",
    price: 1400,
    status: "Active",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShhawhHOk2n0ohd9-LdQc0-KIOI3JXAWTjfA&s",
  },
  {
    id: "2",
    name: "cleaning",
    category: "Interior",
    description: "deep clean car interior",
    duration: "1hr",
    price: 500,
    status: "Active",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrPpXfAZGdF-U04amMsIn1xqvLuUV0PeYSRg&s",
  },
  {
    id: "3",
    name: "basic washing",
    category: "Exterior",
    description: "basic water wash",
    duration: "30min",
    price: 250,
    status: "Active",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbsnkalcGaW_yCEpJNDoahkkWVwkAno6hFVA&s",
  },
];

const ServiceCatList: React.FC = () => {
  const [services, setServices] = useState<Service[]>(initialServices);
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [selectedCategory, setSelectedCategory] = useState("All Services");
  const [showAddForm, setShowAddForm] = useState(false);
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingServiceId, setEditingServiceId] = useState<string | null>(null);
  const [editingCategoryIndex, setEditingCategoryIndex] = useState<number | null>(null);
  const [editedCategory, setEditedCategory] = useState<Category | null>(null);

  const [newService, setNewService] = useState<Service>({
    id: "",
    name: "",
    category: "",
    description: "",
    duration: "",
    price: 0,
    status: "Active",
    imageUrl: "",
  });

  const filteredServices =
    selectedCategory === "All Services"
      ? services
      : services.filter((s) => s.category === selectedCategory);

  const handleAddServiceClick = () => {
    setShowAddForm(true);
    setIsEditing(false);
    setNewService({
      id: "",
      name: "",
      category: "",
      description: "",
      duration: "",
      price: 0,
      status: "Active",
      imageUrl: "",
    });
  };

  const handleSaveService = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing && editingServiceId) {
      const updatedList = services.map((service) =>
        service.id === editingServiceId ? { ...newService, id: editingServiceId } : service
      );
      setServices(updatedList);
    } else {
      const newId = (services.length + 1).toString();
      const newEntry = { ...newService, id: newId };
      setServices([...services, newEntry]);
    }

    setShowAddForm(false);
    setIsEditing(false);
    setEditingServiceId(null);
    setNewService({
      id: "",
      name: "",
      category: "",
      description: "",
      duration: "",
      price: 0,
      status: "Active",
      imageUrl: "",
    });
  };

  const handleAddCategory = () => {
    if (newCategoryName.trim() !== "") {
      setCategories([...categories, { name: newCategoryName, count: 0 }]);
    }
    setNewCategoryName("");
    setShowCategoryForm(false);
  };

  const handleEditCategory = () => {
    if (editedCategory && editingCategoryIndex !== null) {
      const updated = [...categories];
      updated[editingCategoryIndex] = editedCategory;
      setCategories(updated);
      setEditedCategory(null);
      setEditingCategoryIndex(null);
    }
  };



  const handleDeleteService = (id: string) => {
    const confirmed = window.confirm("Are you sure you want to delete this service?");
    if (confirmed) {
      setServices(services.filter((service) => service.id !== id));
 }
    
 };

  const handleEditService = (service: Service) => {
    setNewService(service);
    setEditingServiceId(service.id);
    setIsEditing(true);
    setShowAddForm(true);
  };

  return (
    <div className="mt-5">
     <h2 className=" mb-1  ml-4" style={{ ...FONTS.header}}> 
       {/* <IoArrowBackOutline /> */}
       Service Catalog</h2>
      <div className="flex min-h-screen bg-gray-100">
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="" style={{ ...FONTS.header,fontSize:22}}>All Services</h1>
              <p className=" "style={{ ...FONTS.description,fontSize:18}}>{filteredServices.length} services found</p>
            </div>
            <div className="flex gap-2">
              <input type="text" placeholder="Search services..." className="border px-3 py-2 rounded-full" />
              <button onClick={handleAddServiceClick} className="bg-[#7812A4]  !text-white px-4 py-2 rounded-full"style={{ ...FONTS.cardheader,fontSize:16}}>
                + Add Service
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredServices.map((s) => (
              <div key={s.id} className="group relative bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 ">
                  <img src={s.imageUrl} className="w-full h-40 object-cover" />
                <div className="absolute top-2 right-2 flex gap-2">
                  <button className="bg-black text-white p-1 rounded-full" onClick={() => handleEditService(s)}>
                    <FaEdit size={14} />
                  </button>
                  <button className="bg-red-600 text-white p-1 rounded-full" onClick={() => handleDeleteService(s.id)}>
                    <FaTrash size={14} />
                  </button>
                </div>
                <div className="p-4"style={{ ...FONTS.subParagraph,fontSize:22}}>
                  <h3 className="">{s.name}</h3>
                  <p className="text-sm text-gray-500">{s.category.charAt(0).toUpperCase() + s.category.slice(1)}</p>
                  <p className="text-sm">{s.description.charAt(0).toUpperCase() + s.description.slice(1) }</p>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{s.duration}</span>
                    <span>₹{s.price}</span>
                  </div>
                  <div className="mt-4 text-green-600 text-sm w-12 h-12 font-semibold">
                    {s.status === 'Active' ?  <img src={toggleon}/> :  <img src={toggleoff}/>}
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        <aside className="w-64 bg-white p-4 border-r">
          <button
            className=" bg-[#7812A4]  !text-white w-full py-2 rounded-full mb-4"style={{ ...FONTS.cardheader,fontSize:16}}
            onClick={() => setShowCategoryForm(true)}
          >
            + Add Category
          </button>
          <h3 className=" mb-2"style={{ ...FONTS.cardheader,fontSize:16}}>CATEGORIES</h3>
          {categories.map((cat, index) => (
            <div
              key={cat.name}
              className={`group relative flex items-center justify-between cursor-pointer px-3 py-2 rounded-full mb-1 ${
                selectedCategory === cat.name ? "bg-[#7812A4] text-white" : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedCategory(cat.name)}
            >
              <span>{cat?.name?.charAt(0).toUpperCase() + cat?.name?.slice(1)} ({cat.count})</span>
              <MdModeEdit
                className="invisible group-hover:visible text-gray-500 hover:text-[#7812A4] ml-2"
                onClick={(e) => {
                  e.stopPropagation();
                  setEditingCategoryIndex(index);
                  setEditedCategory({ ...cat });
                }}
              />
            </div>
          ))}
        </aside>
      </div>

      
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="p-6 bg-white rounded shadow w-full max-w-xl">
            <h2 className="text-xl font-bold mb-4">{isEditing ? "Edit Service" : "Add New Service"}</h2>
            <form onSubmit={handleSaveService} className="grid gap-4">
              <input
                type="text"
                placeholder="Service Name"
                value={newService.name}
                onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Category"
                value={newService.category}
                onChange={(e) => setNewService({ ...newService, category: e.target.value })}
                className="border p-2 rounded"
              />
              <textarea
                placeholder="Description"
                value={newService.description}
                onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                className="border p-2 rounded"
              />
              <input
                type="text"
                placeholder="Duration"
                value={newService.duration}
                onChange={(e) => setNewService({ ...newService, duration: e.target.value })}
                className="border p-2 rounded"
              />
              <input
                type="number"
                placeholder="Price"
                value={newService.price}
                onChange={(e) => setNewService({ ...newService, price: Number(e.target.value) })}
                className="border p-2 rounded"
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const imageUrl = URL.createObjectURL(file);
                    setNewService({ ...newService, imageUrl });
                  }
                }}
                className="border p-2 rounded"
              />
              {newService.imageUrl && (
                <img src={newService.imageUrl} alt="Preview" className="h-32 object-cover rounded" />
              )}
              <select
                value={newService.status}
                onChange={(e) => setNewService({ ...newService, status: e.target.value })}
                className="border p-2 rounded"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <div className="flex justify-center gap-2">
                <button type="submit" className="bg-red-600 text-white py-2 px-4 rounded">
                  {isEditing ? "Update Service" : "Add Service"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowAddForm(false);
                    setIsEditing(false);
                    setEditingServiceId(null);
                  }}
                  className="bg-red-600 text-white py-2 px-4 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
        {showCategoryForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-center">Add New Category</h2>
            <input
              type="text"
              placeholder="Category Name"
              value={newCategoryName}
              onChange={(e) => setNewCategoryName(e.target.value)}
              className="border w-full p-2 rounded mb-4"
            />
            <div className="flex justify-center gap-4">
              <button
                onClick={handleAddCategory}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
              <button
                onClick={() => setShowCategoryForm(false)}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

     
      {editedCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-center">Edit Category</h2>
            <input
              type="text"
              placeholder="Category Name"
              value={editedCategory.name}
              onChange={(e) => setEditedCategory({ ...editedCategory, name: e.target.value })}
              className="border w-full p-2 rounded mb-4"
            />
            <input
              type="number"
              placeholder="Service Count"
              value={editedCategory.count}
              onChange={(e) => setEditedCategory({ ...editedCategory, count: parseInt(e.target.value) })}
              className="border w-full p-2 rounded mb-4"
            />
            <div className="flex justify-center gap-4">
              <button
                onClick={handleEditCategory}
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Save
              </button>
              <button
                onClick={() => {
                  setEditedCategory(null);
                  setEditingCategoryIndex(null);
                }}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCatList;
