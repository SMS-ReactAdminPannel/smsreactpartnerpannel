/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { MdModeEdit } from "react-icons/md";
import { IoArrowBackOutline } from "react-icons/io5";
import {
  CreateCategory,
  createService,
  deleteService,
  getallServices,
  GetCatgeory,
  updateServices,
} from "./services/servicecatlog";

type Category = { name: string; count: number };
type Service = {
  uuid: string;
  service_name: string;
  category_id: string;
  description: string;
  duration: string;
  price: number;
  is_active: boolean;
  imageUrl?: string;
};

const ServiceCatList: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All Services");
  const [showAddForm, setShowAddForm] = useState(false);
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingServiceId, setEditingServiceId] = useState<string | null>(null);
  const [editingCategoryIndex, setEditingCategoryIndex] = useState<number | null>(null);
  const [editedCategory, setEditedCategory] = useState<Category | null>(null);

  const Partner_id = localStorage.getItem("PartnerId")

  const [newService, setNewService] = useState<Service>({
    uuid: "",
    service_name: "",
    category_id: "",
    description: "",
    duration: "",
    price: 0,
    is_active: true,
    imageUrl: "",
  });

  const fetchData = async () => {
    try {
      const cats = await GetCatgeory()
      console.log(cats.data,"get all cate")
      // setCategories(cats.data)
      setCategories(cats.data)

      const response:any = await getallServices('');
      if (response?.data && Array.isArray(response.data)) {
        const fetchedServices = response.data;
        setServices(fetchedServices);

        // const categoryMap: { [key: string]: number } = {};
        // fetchedServices.forEach((s) => {
        //   categoryMap[s.category_id] = (categoryMap[s.category_id] || 0) + 1;
        // });

        // const updatedCategories = [
        //   { name: "All Services", count: fetchedServices.length },
        //   ...Object.entries(categoryMap).map(([name, count]) => ({ name, count })),
        // ];

        // setCategories(updatedCategories);
      }
      console.log(response.data,"servicess")
    } catch (error) {
      console.error("Failed to fetch services", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredServices =
    selectedCategory === "All Services"
      ? services
      : services.filter((s) => s.category_id === selectedCategory);

  const handleAddServiceClick = () => {
    setShowAddForm(true);
    setIsEditing(false);
    resetNewService();
  };

  const resetNewService = () => {
    setNewService({
      uuid: "",
      service_name: "",
      category_id: "",
      description: "",
      duration: "",
      price: 0,
      is_active: true,
      imageUrl: "",
    });
  };

  const handleSaveService = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (isEditing && editingServiceId) {
        await updateServices(editingServiceId, newService);
      } else {
        const data:any = newService
        data.partnerId = Partner_id
        const response:any = await createService(data);
        if (!response?.data?.uuid) return;
      }

      await fetchData();
      setShowAddForm(false);
      setIsEditing(false);
      setEditingServiceId(null);
      resetNewService();
    } catch (error) {
      console.error("Error saving service:", error);
    }
  };

  const handleDeleteService = async (uuid: string) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      try {
        await deleteService(uuid);
        await fetchData();
      } catch (error) {
        console.error("Error deleting service:", error);
      }
    }
  };

  const handleEditService = (service: Service) => {
    setNewService(service);
    setEditingServiceId(service.uuid);
    setIsEditing(true);
    setShowAddForm(true);
  };

  const handleAddCategory = async() => {
    if (newCategoryName.trim()) {
      setCategories([...categories, { name: newCategoryName, count: 0 }]);
    }
    const data = {partnerId:Partner_id,category_name:newCategoryName,slug:newCategoryName}
    await CreateCategory(data)
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

  return (
    <div>
      <h2 className="text-3xl text-[#9b111e] font-bold mb-1">
        <IoArrowBackOutline /> Service Catalog
      </h2>
      <div className="flex min-h-screen bg-gray-100">
        <main className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-bold">All Services</h1>
              <p className="text-sm text-gray-500">{filteredServices.length} services found</p>
            </div>
            <div className="flex gap-2">
              <input type="text" placeholder="Search services..." className="border px-3 py-2 rounded" />
              <button onClick={handleAddServiceClick} className="bg-red-700 text-white px-4 py-2 rounded">
                + Add Service
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredServices.map((s) => (
              <div key={s.uuid} className="group relative bg-white rounded-lg shadow-md overflow-hidden transition transform hover:scale-105 hover:bg-red-100">
                <img src={s.imageUrl} className="w-full h-40 object-cover" />
                <div className="absolute top-2 right-2 flex gap-2">
                  <button className="bg-black text-white p-1 rounded-full" onClick={() => handleEditService(s)}>
                    <FaEdit size={14} />
                  </button>
                  <button className="bg-red-600 text-white p-1 rounded-full" onClick={() => handleDeleteService(s.uuid)}>
                    <FaTrash size={14} />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold">{s.service_name}</h3>
                  <p className="text-sm text-gray-500">{s.category_id}</p>
                  <p className="text-sm mb-1">{s.description}</p>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{s.duration}</span>
                    <span>₹{s.price}</span>
                  </div>
                  <div className={`mt-2 text-sm font-semibold ${s.is_active ? "text-green-600" : "text-red-600"}`}>
                    {s.is_active ? "Active" : "Inactive"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>

        <aside className="w-64 bg-white p-4 border-r">
          <button
            className="bg-red-700 text-white w-full py-2 rounded mb-4"
            onClick={() => setShowCategoryForm(true)}
          >
            + Add Category
          </button>
          <h3 className="text-xl text-black font-bold mb-2">CATEGORIES</h3>
          {categories.map((cat, index) => (
            <div
              key={cat.category_name}
              className={`group relative flex items-center justify-between cursor-pointer px-3 py-2 rounded mb-1 bg-gray-100 ${
                selectedCategory === cat.category_name ? "bg-red-100 text-red-700" : "hover:bg-gray-100"
              }`}
              onClick={() => setSelectedCategory(cat.name)}
            >
              <span>{cat.category_name} ({cat.services.length})</span>
              <MdModeEdit
                className="invisible group-hover:visible text-gray-500 hover:text-red-700 ml-2"
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

      {/* Modal for Add/Edit Service */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded shadow w-full max-w-xl max-h-[90vh] overflow-y-auto p-6">
            <h2 className="text-xl font-bold mb-4">{isEditing ? "Edit Service" : "Add New Service"}</h2>
            <form onSubmit={handleSaveService} className="grid gap-4">
              <input type="text" placeholder="Service Name" value={newService.service_name} onChange={(e) => setNewService({ ...newService, service_name: e.target.value })} className="border p-2 rounded" />
              <input type="text" placeholder="Category ID" value={newService.category_id} onChange={(e) => setNewService({ ...newService, category_id: e.target.value })} className="border p-2 rounded" />
              <textarea placeholder="Description" value={newService.description} onChange={(e) => setNewService({ ...newService, description: e.target.value })} className="border p-2 rounded" />
              <input type="text" placeholder="Duration" value={newService.duration} onChange={(e) => setNewService({ ...newService, duration: e.target.value })} className="border p-2 rounded" />
              <input type="number" placeholder="Price" value={newService.price} onChange={(e) => setNewService({ ...newService, price: Number(e.target.value) })} className="border p-2 rounded" />
              <input type="file" accept="image/*" onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const imageUrl = URL.createObjectURL(file);
                  setNewService({ ...newService, imageUrl });
                }
              }} className="border p-2 rounded" />
              {newService.imageUrl && <img src={newService.imageUrl} alt="Preview" className="h-32 object-cover rounded" />}
              <select value={newService.is_active ? "Active" : "Inactive"} onChange={(e) => setNewService({ ...newService, is_active: e.target.value === "Active" })} className="border p-2 rounded">
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              <div className="flex justify-center gap-2">
                <button type="submit" className="bg-red-600 text-white py-2 px-4 rounded">
                  {isEditing ? "Update Service" : "Add Service"}
                </button>
                <button type="button" onClick={() => {
                  setShowAddForm(false);
                  setIsEditing(false);
                  setEditingServiceId(null);
                  resetNewService();
                }} className="bg-gray-500 text-white py-2 px-4 rounded">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Category Modals (Add/Edit) */}
      {showCategoryForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-center">Add New Category</h2>
            <input type="text" placeholder="Category Name" value={newCategoryName} onChange={(e) => setNewCategoryName(e.target.value)} className="border w-full p-2 rounded mb-4" />
            <div className="flex justify-center gap-4">
              <button onClick={handleAddCategory} className="bg-red-600 text-white px-4 py-2 rounded">Save</button>
              <button onClick={() => setShowCategoryForm(false)} className="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {editedCategory && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4 text-center">Edit Category</h2>
            <input type="text" value={editedCategory.name} onChange={(e) => setEditedCategory({ ...editedCategory, name: e.target.value })} className="border w-full p-2 rounded mb-4" />
            <input type="number" value={editedCategory.count} onChange={(e) => setEditedCategory({ ...editedCategory, count: parseInt(e.target.value) })} className="border w-full p-2 rounded mb-4" />
            <div className="flex justify-center gap-4">
              <button onClick={handleEditCategory} className="bg-red-600 text-white px-4 py-2 rounded">Save</button>
              <button onClick={() => {
                setEditedCategory(null);
                setEditingCategoryIndex(null);
              }} className="bg-gray-400 text-white px-4 py-2 rounded">Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCatList;
