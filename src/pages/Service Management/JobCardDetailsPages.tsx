import React, { useState } from 'react';
import { Lock, Car, Wrench, Save, Edit3, Plus, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { HiXMark } from "react-icons/hi2";
import { IoArrowBack } from "react-icons/io5";

// Type definitions
interface ApiData {
  jobId: string;
  customerName: string;
  contact: string;
  vehicle: string;
  schedule: string;
  priority: 'high' | 'medium' | 'low';
}

interface VehicleInventory {
  jackAndTommy: boolean;
  mirrors: boolean;
  stepney: boolean;
  mudFlaps: boolean;
  toolKit: boolean;
  freshner: boolean;
  keyChain: boolean;
  mats: boolean;
  tapeRecorder: boolean;
  cdPlayer: boolean;
  serviceBooklet: boolean;
  battery: boolean;
  bodyDamages: boolean;
  wheelCovers: boolean;
  others: boolean;
}

interface ServiceItem {
  id: string;
  description: string;
  quantity: string;
  rate: string;
  amount: string;
}

interface FormData {
  inventory: VehicleInventory;
  fuelLevel: 'Empty' | '1/4' | '1/2' | '3/4' | 'Full';
  registrationNo: string;
  model: string;
  engineNo: string;
  mileage: string;
  color: string;
  chassisNo: string;
  insuranceCompany: string;
  insuranceRenewalDate: string;
  customerComplaint: string;
  actionToBeTaken: string;
  workDone: 'pending' | 'in-progress' | 'completed';
  serviceItems: ServiceItem[];
  totalAmount: string;
}

interface InventoryItem {
  key: keyof VehicleInventory;
  label: string;
}

interface JobCardDetailsPageProps {
  apiData?: ApiData;
  onClose?: () => void;
}

// Mock API data - in real app this would come from props
const defaultApiData: ApiData = {
  jobId: "JOB-2024-001",
  customerName: "John Smith",
  contact: "9876543210",
  vehicle: "KA-01-AB-1234",
  schedule: "2024-05-25 10:00 AM",
  priority: "high"
};

const JobCardDetailsPage: React.FC<JobCardDetailsPageProps> = ({ 
  apiData = defaultApiData, onClose
}) => {
  const [formData, setFormData] = useState<FormData>({
    // Vehicle Inventory
    inventory: {
      jackAndTommy: false,
      mirrors: false,
      stepney: false,
      mudFlaps: false,
      toolKit: false,
      freshner: false,
      keyChain: false,
      mats: false,
      tapeRecorder: false,
      cdPlayer: false,
      serviceBooklet: false,
      battery: false,
      bodyDamages: false,
      wheelCovers: false,
      others: false
    },
    fuelLevel: 'Empty',
    
    // Vehicle Information
    registrationNo: '',
    model: '',
    engineNo: '',
    mileage: '',
    color: '',
    chassisNo: '',
    insuranceCompany: '',
    insuranceRenewalDate: '',
    
    // Service Information
    customerComplaint: '',
    actionToBeTaken: '',
    workDone: 'pending',
    serviceItems: [
      { id: '1', description: '', quantity: '', rate: '', amount: '' }
    ],
    totalAmount: '0'
  });

  const handleInputChange = <K extends keyof FormData>(
    field: K, 
    value: FormData[K]
  ): void => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleInventoryChange = (item: keyof VehicleInventory): void => {
    setFormData(prev => ({
      ...prev,
      inventory: {
        ...prev.inventory,
        [item]: !prev.inventory[item]
      }
    }));
  };

  // Dynamic Service Items Functions
  const addServiceItem = (): void => {
    const newItem: ServiceItem = {
      id: Date.now().toString(),
      description: '',
      quantity: '',
      rate: '',
      amount: ''
    };
    setFormData(prev => ({
      ...prev,
      serviceItems: [...prev.serviceItems, newItem]
    }));
  };

  const removeServiceItem = (id: string): void => {
    if (formData.serviceItems.length > 1) {
      setFormData(prev => ({
        ...prev,
        serviceItems: prev.serviceItems.filter(item => item.id !== id)
      }));
      calculateTotalAmount();
    }
  };

  const updateServiceItem = (id: string, field: keyof ServiceItem, value: string): void => {
    setFormData(prev => {
      const updatedItems = prev.serviceItems.map(item => {
        if (item.id === id) {
          const updatedItem = { ...item, [field]: value };
          
          // Auto-calculate amount when quantity or rate changes
          if (field === 'quantity' || field === 'rate') {
            const quantity = parseFloat(field === 'quantity' ? value : updatedItem.quantity) || 0;
            const rate = parseFloat(field === 'rate' ? value : updatedItem.rate) || 0;
            updatedItem.amount = (quantity * rate).toFixed(2);
          }
          
          return updatedItem;
        }
        return item;
      });
      
      // Calculate total amount
      const total = updatedItems.reduce((sum, item) => {
        return sum + (parseFloat(item.amount) || 0);
      }, 0);
      
      return {
        ...prev,
        serviceItems: updatedItems,
        totalAmount: total.toFixed(2)
      };
    });
  };

  const calculateTotalAmount = (): void => {
    const total = formData.serviceItems.reduce((sum, item) => {
      return sum + (parseFloat(item.amount) || 0);
    }, 0);
    
    setFormData(prev => ({
      ...prev,
      totalAmount: total.toFixed(2)
    }));
  };

  const getPriorityColor = (priority: ApiData['priority']): string => {
    switch(priority) {
      case 'high': return 'bg-red-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const handleSave = (): void => {
    console.log('Form Data:', formData);
    // In real app, you would send this data to your API
    alert('Job card saved successfully!');
  };

  const navigate = useNavigate();

  const handleBack = (): void => {
    // Logic to navigate back, e.g., using history or navigate function
    navigate(-1); // Go back to the previous page
  };

  const inventoryItems: InventoryItem[] = [
    { key: 'jackAndTommy', label: 'JACK & TOMMY' },
    { key: 'mirrors', label: 'MIRRORS' },
    { key: 'stepney', label: 'STEPNEY' },
    { key: 'mudFlaps', label: 'MUD FLAPS' },
    { key: 'toolKit', label: 'TOOL KIT' },
    { key: 'freshner', label: 'FRESHNER' },
    { key: 'keyChain', label: 'KEY CHAIN' },
    { key: 'mats', label: 'MATS' },
    { key: 'tapeRecorder', label: 'TAPE RECORDER' },
    { key: 'cdPlayer', label: 'CD PLAYER' },
    { key: 'serviceBooklet', label: 'SERVICE BOOKLET' },
    { key: 'battery', label: 'BATTERY' },
    { key: 'bodyDamages', label: 'BODY DAMAGES' },
    { key: 'wheelCovers', label: 'WHEEL COVERS' },
    { key: 'others', label: 'OTHERS' }
  ];

  return (
    <div className=" bg-gradient-to-br from-gray-50 to-blue-50 p-2">
      <div className="flex justify-end w-full ">
        <HiXMark className="w-8 h-10 bg-white hover:from-red-700 hover:to-red-900 text-white rounded-lg " />
      </div>
      <div className=" mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-2">
            Job Card Details
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-8">
          {/* Job Information Section - Read Only */}
          <div className="bg-white rounded-2xl shadow-xl border border-red-100 overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-red-800 p-2">
              <div className="flex items-center gap-2 text-white">
                <Lock className="w-5 h-5" />
                <h2 className="text-lg font-semibold">Job Information (Read Only)</h2>
              </div>
            </div>
            <div className="p-6 bg-gray-50">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Job ID</label>
                  <div className="bg-white p-3 rounded-lg border-2 border-gray-200 text-gray-600 font-mono">
                    {apiData.jobId}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Customer Name</label>
                  <div className="bg-white p-3 rounded-lg border-2 border-gray-200 text-gray-600">
                    {apiData.customerName}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Contact No</label>
                  <div className="bg-white p-3 rounded-lg border-2 border-gray-200 text-gray-600">
                    {apiData.contact}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Vehicle No</label>
                  <div className="bg-white p-3 rounded-lg border-2 border-gray-200 text-gray-600 font-mono">
                    {apiData.vehicle}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Schedule</label>
                  <div className="bg-white p-3 rounded-lg border-2 border-gray-200 text-gray-600">
                    {apiData.schedule}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Priority</label>
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${getPriorityColor(apiData.priority)}`}></div>
                    <div className="bg-white p-3 rounded-lg border-2 border-gray-200 text-gray-600 capitalize flex-1">
                      {apiData.priority}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vehicle Inventory Section */}
          <div className="bg-white rounded-2xl shadow-xl border border-red-100 overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-red-800 p-2">
              <div className="flex items-center gap-2 text-white">
                <Car className="w-5 h-5" />
                <h2 className="text-lg font-semibold">Vehicle Inventory</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-6">
                {inventoryItems.map((item) => (
                  <label key={item.key} className="flex items-center space-x-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={formData.inventory[item.key]}
                      onChange={() => handleInventoryChange(item.key)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-blue-600 transition-colors">
                      {item.label}
                      <input type="file" />
                    </span>
                  </label>
                ))}
              </div>
              <div className="border-t pt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Fuel Level</label>
                <select
                  value={formData.fuelLevel}
                  onChange={(e) => handleInputChange('fuelLevel', e.target.value as FormData['fuelLevel'])}
                  className="w-full md:w-48 p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                >
                  <option value="Empty">Empty</option>
                  <option value="1/4">1/4</option>
                  <option value="1/2">1/2</option>
                  <option value="3/4">3/4</option>
                  <option value="Full">Full</option>
                </select>
              </div>
            </div>
          </div>

          {/* Vehicle Information Section */}
          <div className="bg-white rounded-2xl shadow-xl border border-red-100 overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-red-800 p-2">
              <div className="flex items-center gap-2 text-white">
                <Edit3 className="w-5 h-5" />
                <h2 className="text-lg font-semibold">Vehicle Information</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Registration No</label>
                  <input
                    type="text"
                    value={formData.registrationNo}
                    onChange={(e) => handleInputChange('registrationNo', e.target.value)}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                    placeholder="Enter registration number"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Model</label>
                  <input
                    type="text"
                    value={formData.model}
                    onChange={(e) => handleInputChange('model', e.target.value)}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                    placeholder="Enter vehicle model"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Engine No</label>
                  <input
                    type="text"
                    value={formData.engineNo}
                    onChange={(e) => handleInputChange('engineNo', e.target.value)}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                    placeholder="Enter engine number"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Mileage</label>
                  <input
                    type="text"
                    value={formData.mileage}
                    onChange={(e) => handleInputChange('mileage', e.target.value)}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                    placeholder="Enter mileage"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Color</label>
                  <input
                    type="text"
                    value={formData.color}
                    onChange={(e) => handleInputChange('color', e.target.value)}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                    placeholder="Enter vehicle color"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Chassis No</label>
                  <input
                    type="text"
                    value={formData.chassisNo}
                    onChange={(e) => handleInputChange('chassisNo', e.target.value)}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                    placeholder="Enter chassis number"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Insurance Company</label>
                  <input
                    type="text"
                    value={formData.insuranceCompany}
                    onChange={(e) => handleInputChange('insuranceCompany', e.target.value)}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                    placeholder="Enter insurance company"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Insurance Renewal Date</label>
                  <input
                    type="date"
                    value={formData.insuranceRenewalDate}
                    onChange={(e) => handleInputChange('insuranceRenewalDate', e.target.value)}
                    className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Service Information Section */}
          <div className="bg-white rounded-2xl shadow-xl border border-red-100 overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-red-800 p-2">
              <div className="flex items-center gap-2 text-white">
                <Wrench className="w-5 h-5" />
                <h2 className="text-lg font-semibold">Service Information</h2>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Customer Complaint</label>
                <textarea
                  value={formData.customerComplaint}
                  onChange={(e) => handleInputChange('customerComplaint', e.target.value)}
                  rows={4}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all resize-none"
                  placeholder="Describe the customer's complaint..."
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Action to be Taken</label>
                <textarea
                  value={formData.actionToBeTaken}
                  onChange={(e) => handleInputChange('actionToBeTaken', e.target.value)}
                  rows={4}
                  className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all resize-none"
                  placeholder="Describe the action to be taken..."
                />
              </div>
              
              {/* Dynamic Service Items */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-gray-700">Service Items</label>
                  <button
                    type="button"
                    onClick={addServiceItem}
                    className="bg-[#9b111e] text-white px-4 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-200 flex items-center gap-2"
                  >
                    <Plus className="w-4 h-4" />
                    Add Item
                  </button>
                </div>
                
                <div className="space-y-3">
                  {formData.serviceItems.map((item, index) => (
                    <div key={item.id} className="bg-gray-50 p-4 rounded-lg border-2 border-gray-200">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm font-medium text-gray-700">Item #{index + 1}</span>
                        {formData.serviceItems.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeServiceItem(item.id)}
                            className="text-red-600 hover:text-red-800 p-1 hover:bg-red-100 rounded transition-all"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="md:col-span-2">
                          <label className="block text-xs font-medium text-gray-600 mb-1">Description</label>
                          <input
                            type="text"
                            value={item.description}
                            onChange={(e) => updateServiceItem(item.id, 'description', e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md focus:border-purple-500 focus:ring-1 focus:ring-purple-200 transition-all"
                            placeholder="Service description"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Quantity</label>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateServiceItem(item.id, 'quantity', e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md focus:border-purple-500 focus:ring-1 focus:ring-purple-200 transition-all"
                            placeholder="Qty"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Rate (₹)</label>
                          <input
                            type="number"
                            value={item.rate}
                            onChange={(e) => updateServiceItem(item.id, 'rate', e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-md focus:border-purple-500 focus:ring-1 focus:ring-purple-200 transition-all"
                            placeholder="Rate"
                          />
                        </div>
                      </div>
                      <div className="mt-3 text-right">
                        <span className="text-sm font-medium text-gray-600">Amount: </span>
                        <span className="text-lg font-bold text-[#9b111e]">₹{item.amount || '0.00'}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Total Amount */}
                <div className="bg-purple-50 p-4 rounded-lg border-2 border-purple-200">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-[#9b111e]">Total Amount:</span>
                    <span className="text-2xl font-bold text-[#9b111e]">₹{formData.totalAmount}</span>
                  </div>
                </div>
              </div>

              {/* <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700">Work Status</label>
                <select
                  value={formData.workDone}
                  onChange={(e) => handleInputChange('workDone', e.target.value as FormData['workDone'])}
                  className="w-full m-3 md:w-48 p-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all"
                >
                  <option value="pending">Pending</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div> */}
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              type="button"
              onClick={handleSave}
              className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-4 h-[40px]  rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-200 "
            >
              {/* <Save className="w-5 h-5" /> */}
              Save 
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gradient-to-r from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 text-white px-4 h-[40px] rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCardDetailsPage;