// import React from 'react';

// ;

// const ServiceManagementPage: React.FC = () => {
//   return (
//     <>
//       <h1>Service Management</h1>
//       <JobCardDetailsPage />
//     </>
//   );
// }

// export default ServiceManagementPage;


import React, { useState } from "react";
import JobCardDetailsPage from "./JobCardDetailsPages";
import {
  Car,
  Wrench,
  Calendar,
  Clock,
  Phone,
  CheckCircle,
  AlertCircle,
  Plus,
  Filter,
  Search,
  Eye,
  Edit,
  Trash2,
  BarChart3,
  X,
  Save,
  MapPin,
  DollarSign,
} from "lucide-react";
import { MdHomeFilled } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { TbCertificate } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";

type JobCardView = {
  onView : () => void;
}

const ServiceManagementPage: React.FC<JobCardView> = ({onView}) => {
  const [serviceRequests, setServiceRequests] = useState([
    {
      id: "SR-001",
      customerName: "John Smith",
      phone: "+1 234-567-8900",
      vehicleInfo: "2020 Honda Civic",
      serviceType: "Oil Change",
      scheduledDate: "2024-01-15",
      scheduledTime: "10:00 AM",
      status: "pending",
      priority: "medium",
      location: "123 Main St, Downtown",
      estimatedCost: "$89",
      notes: "Customer prefers synthetic oil",
    },
    {
      id: "SR-002",
      customerName: "Sarah Johnson",
      phone: "+1 234-567-8901",
      vehicleInfo: "2019 Toyota Camry",
      serviceType: "Brake Inspection",
      scheduledDate: "2024-01-15",
      scheduledTime: "2:00 PM",
      status: "confirmed",
      priority: "high",
      location: "456 Oak Ave, Uptown",
      estimatedCost: "$150",
      notes: "Customer reported squeaking sounds",
    },
    {
      id: "SR-003",
      customerName: "Mike Wilson",
      phone: "+1 234-567-8902",
      vehicleInfo: "2021 Ford F-150",
      serviceType: "Tire Replacement",
      scheduledDate: "2024-01-16",
      scheduledTime: "9:00 AM",
      status: "in-progress",
      priority: "medium",
      location: "789 Pine St, Suburb",
      estimatedCost: "$320",
      notes: "All four tires need replacement",
    },
    {
      id: "SR-004",
      customerName: "Emily Davis",
      phone: "+1 234-567-8903",
      vehicleInfo: "2018 BMW X3",
      serviceType: "Engine Diagnostic",
      scheduledDate: "2024-01-14",
      scheduledTime: "11:00 AM",
      status: "completed",
      priority: "high",
      location: "321 Elm St, Central",
      estimatedCost: "$200",
      notes: "Check engine light is on",
    },
  ]);

  const [services, setServices] = useState([
    { id: 1, name: "Oil Change", price: "$89", duration: "30 min", description: "Complete oil and filter change" },
    { id: 2, name: "Brake Service", price: "$150-300", duration: "1-2 hours", description: "Brake inspection and repair" },
    { id: 3, name: "Tire Service", price: "$80-400", duration: "45 min", description: "Tire rotation, balancing, and replacement" },
    { id: 4, name: "Engine Diagnostic", price: "$120-250", duration: "1 hour", description: "Computer diagnostic scan" },
    { id: 5, name: "Battery Service", price: "$100-200", duration: "30 min", description: "Battery testing and replacement" },
    { id: 6, name: "AC Service", price: "$150-350", duration: "1-2 hours", description: "Air conditioning repair and maintenance" },
  ]);

  const [showServiceModal, setShowServiceModal] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [editingService, setEditingService] = useState<null | { id: number; name: string; price: string; duration: string; description: string }>(null);
  const [editingRequest, setEditingRequest] = useState<null | {
    id?: string;
    customerName: string;
    phone: string;
    vehicleInfo: string;
    serviceType: string;
    scheduledDate: string;
    scheduledTime: string;
    status: string;
    priority: string;
    location: string;
    estimatedCost: string;
    notes: string;
  }>(null);
  const [viewingRequest, setViewingRequest] = useState<null | {
    id: string;
    customerName: string;
    phone: string;
    vehicleInfo: string;
    serviceType: string;
    scheduledDate: string;
    scheduledTime: string;
    status: string;
    priority: string;
    location: string;
    estimatedCost: string;
    notes: string;
  }>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  const [newService, setNewService] = useState({
    name: "",
    price: "",
    duration: "",
    description: "",
  });

  const [newRequest, setNewRequest] = useState({
    customerName: "",
    phone: "",
    vehicleInfo: "",
    serviceType: "",
    scheduledDate: "",
    scheduledTime: "",
    status: "pending",
    priority: "medium",
    location: "",
    estimatedCost: "",
    notes: "",
  });

  const stats = [
    { label: "Total Requests", value: serviceRequests.length.toString(), change: "+12%", color: "blue" },
    { label: "Completed Today", value: serviceRequests.filter(r => r.status === "completed").length.toString(), change: "+8%", color: "green" },
    { label: "Pending", value: serviceRequests.filter(r => r.status === "pending").length.toString(), change: "-5%", color: "yellow" },
    { label: "Revenue", value: "$12,450", change: "+15%", color: "purple" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "confirmed":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "in-progress":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-600";
      case "medium":
        return "text-yellow-600";
      case "low":
        return "text-green-600";
      default:
        return "text-gray-600";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="w-4 h-4" />;
      case "confirmed":
        return <CheckCircle className="w-4 h-4" />;
      case "in-progress":
        return <AlertCircle className="w-4 h-4" />;
      case "completed":
        return <CheckCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const handleAddService = () => {
    if (newService.name && newService.price && newService.duration) {
      const service = {
        id: services.length + 1,
        ...newService,
      };
      setServices([...services, service]);
      setNewService({ name: "", price: "", duration: "", description: "" });
      setShowServiceModal(false);
    }
  };

  const handleEditService = (service: { id: number; name: string; price: string; duration: string; description: string }) => {
    setEditingService(service);
    setNewService({
      name: service.name,
      price: service.price,
      duration: service.duration,
      description: service.description,
    });
    setShowServiceModal(true);
  };

  const handleUpdateService = () => {
    if (editingService) {
      setServices(services.map(s => s.id === editingService.id ? { ...editingService, ...newService } : s));
      setEditingService(null);
      setNewService({ name: "", price: "", duration: "", description: "" });
      setShowServiceModal(false);
    }
  };

  const handleDeleteService = (serviceId: number) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      setServices(services.filter(s => s.id !== serviceId));
    }
  };

  const handleAddRequest = () => {
    if (newRequest.customerName && newRequest.vehicleInfo && newRequest.serviceType) {
      const request = {
        id: `SR-${String(serviceRequests.length + 1).padStart(3, '0')}`,
        ...newRequest,
      };
      setServiceRequests([...serviceRequests, request]);
      setNewRequest({
        customerName: "",
        phone: "",
        vehicleInfo: "",
        serviceType: "",
        scheduledDate: "",
        scheduledTime: "",
        status: "pending",
        priority: "medium",
        location: "",
        estimatedCost: "",
        notes: "",
      });
      setShowRequestModal(false);
    }
  };

// const navigate = useNavigate();
// const handleForm = () => {
//   navigate('/JobCardDetailsPage');
// }

  const handleViewRequest = (request: {
    id: string;
    customerName: string;
    phone: string;
    vehicleInfo: string;
    serviceType: string;
    scheduledDate: string;
    scheduledTime: string;
    status: string;
    priority: string;
    location: string;
    estimatedCost: string;
    notes: string;
  }) => {
    setViewingRequest(request);
    setShowViewModal(true);
  };

  const handleEditRequest = (request: { id?: string; customerName: string; phone: string; vehicleInfo: string; serviceType: string; scheduledDate: string; scheduledTime: string; status: string; priority: string; location: string; estimatedCost: string; notes: string; }) => {
    setEditingRequest(request);
    setNewRequest(request);
    setShowRequestModal(true);
  };

  const handleUpdateRequest = () => {
    if (editingRequest) {
      setServiceRequests(serviceRequests.map(r => r.id === editingRequest.id ? { ...editingRequest, ...newRequest, id: editingRequest.id! } : r));
      setEditingRequest(null);
      setNewRequest({
        customerName: "",
        phone: "",
        vehicleInfo: "",
        serviceType: "",
        scheduledDate: "",
        scheduledTime: "",
        status: "pending",
        priority: "medium",
        location: "",
        estimatedCost: "",
        notes: "",
      });
      setShowRequestModal(false);
    }
  };

  const handleDeleteRequest = (requestId: string) => {
    if (window.confirm("Are you sure you want to delete this service request?")) {
      setServiceRequests(serviceRequests.filter(r => r.id !== requestId));
    }
  };

  const filteredRequests = serviceRequests.filter(request => {
    const matchesSearch = request.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.vehicleInfo.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.serviceType.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         request.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === "all" || request.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div>
      {/* Stats Dashboard */}
      <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p
                  className={`text-sm ${
                    stat.change.startsWith("+")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {stat.change} from last week
                </p>
              </div>
              <div className={`p-3 bg-${stat.color}-100 rounded-lg`}>
                <BarChart3 className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Service Requests Section */}
      <div className="p-2">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="border-b border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Service Requests
                </h2>
                <p className="text-gray-600 mt-1">
                  Manage incoming service appointments
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="search"
                    placeholder="Search requests..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b111e] transition"
                  />
                </div>
                <div className="relative">
                  <button 
                    onClick={() => setShowFilterDropdown(!showFilterDropdown)}
                    className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <Filter className="w-4 h-4" />
                    <span>Filter</span>
                  </button>
                  {showFilterDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                      <div className="p-2">
                        {["all", "pending", "confirmed", "in-progress", "completed"].map((status) => (
                          <button
                            key={status}
                            onClick={() => {
                              setFilterStatus(status);
                              setShowFilterDropdown(false);
                            }}
                            className={`w-full text-left px-3 py-2 rounded hover:bg-gray-100 capitalize ${
                              filterStatus === status ? "bg-blue-50 text-blue-600" : ""
                            }`}
                          >
                            {status === "all" ? "All Status" : status.replace("-", " ")}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                <button 
                  onClick={() => setShowRequestModal(true)}
                  className="flex items-center space-x-2 px-4 py-2 bg-[#9b111e] text-white rounded-lg hover:bg-[#8a0e1a]"
                >
                  <Plus className="w-4 h-4" />
                  <span>New Request</span>
                </button>
              </div>
              <button 
                  onClick={onView}
                  className="flex items-center space-x-2 px-4 py-2 bg-[#9b111e] text-white rounded-lg hover:bg-[#8a0e1a]"
                >
                  <Plus className="w-4 h-4" />
                  New Form
                </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Request ID</th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Customer</th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Vehicle</th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Service</th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Schedule</th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Status</th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Priority</th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Cost</th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredRequests.map((request) => (
                  <tr key={request.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <span className="font-medium text-blue-600">{request.id}</span>
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium text-gray-900">{request.customerName}</p>
                        <p className="text-sm text-gray-600 flex items-center mt-1">
                          <Phone className="w-3 h-3 mr-1" />
                          {request.phone}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <Car className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-900">{request.vehicleInfo}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-medium text-gray-900">{request.serviceType}</span>
                      {request.notes && (
                        <p className="text-xs text-gray-600 mt-1">{request.notes}</p>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      <div className="text-sm">
                        <p className="text-gray-900 flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {request.scheduledDate}
                        </p>
                        <p className="text-gray-600 flex items-center mt-1">
                          <Clock className="w-3 h-3 mr-1" />
                          {request.scheduledTime}
                        </p>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(request.status)}`}>
                        {getStatusIcon(request.status)}
                        <span className="capitalize">{request.status.replace("-", " ")}</span>
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`text-sm font-medium capitalize ${getPriorityColor(request.priority)}`}>
                        {request.priority}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-medium text-gray-900">{request.estimatedCost}</span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => handleViewRequest(request)}
                          className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleEditRequest(request)}
                          className="p-1 text-gray-600 hover:bg-gray-50 rounded"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDeleteRequest(request.id)}
                          className="p-1 text-red-600 hover:bg-red-50 rounded"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Available Services Section */}
      <div className="p-2">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="border-b border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Available Services</h2>
                <p className="text-gray-600 mt-1">Manage your service offerings</p>
              </div>
              <button 
                onClick={() => setShowServiceModal(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-[#9b111e] text-white rounded-lg hover:bg-[#8a0e1a]"
              >
                <Plus className="w-4 h-4" />
                <span>Add Service</span>
              </button>
            </div>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Wrench className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex items-center space-x-1">
                    <button 
                      onClick={() => handleEditService(service)}
                      className="p-1 text-gray-600 hover:bg-gray-50 rounded"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDeleteService(service.id)}
                      className="p-1 text-red-600 hover:bg-red-50 rounded"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{service.name}</h3>
                {service.description && (
                  <p className="text-sm text-gray-600 mb-3">{service.description}</p>
                )}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Price:</span>
                    <span className="font-medium text-green-600">{service.price}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="text-gray-900">{service.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Modal */}
      {showServiceModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {editingService ? "Edit Service" : "Add New Service"}
              </h3>
              <button
                onClick={() => {
                  setShowServiceModal(false);
                  setEditingService(null);
                  setNewService({ name: "", price: "", duration: "", description: "" });
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Name</label>
                <input
                  type="text"
                  value={newService.name}
                  onChange={(e) => setNewService({ ...newService, name: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter service name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Price</label>
                <input
                  type="text"
                  value={newService.price}
                  onChange={(e) => setNewService({ ...newService, price: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., $89 or $150-300"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                <input
                  type="text"
                  value={newService.duration}
                  onChange={(e) => setNewService({ ...newService, duration: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 30 min or 1-2 hours"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description (Optional)</label>
                <textarea
                  value={newService.description}
                  onChange={(e) => setNewService({ ...newService, description: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Brief description of the service"
                  rows={3}
                />
              </div>
            </div>
            
            <div className="flex items-center justify-end space-x-3 mt-6">
              <button
                onClick={() => {
                  setShowServiceModal(false);
                  setEditingService(null);
                  setNewService({ name: "", price: "", duration: "", description: "" });
                }}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={editingService ? handleUpdateService : handleAddService}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Save className="w-4 h-4" />
                <span>{editingService ? "Update" : "Save"}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Request Modal */}
      {showRequestModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {editingRequest ? "Edit Service Request" : "Add New Service Request"}
              </h3>
              <button
                onClick={() => {
                  setShowRequestModal(false);
                  setEditingRequest(null);
                  setNewRequest({
                    customerName: "",
                    phone: "",
                    vehicleInfo: "",
                    serviceType: "",
                    scheduledDate: "",
                    scheduledTime: "",
                    status: "pending",
                    priority: "medium",
                    location: "",
                    estimatedCost: "",
                    notes: "",
                  });
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Customer Name</label>
                <input
                  type="text"
                  value={newRequest.customerName}
                  onChange={(e) => setNewRequest({ ...newRequest, customerName: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter customer name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  value={newRequest.phone}
                  onChange={(e) => setNewRequest({ ...newRequest, phone: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Info</label>
                <input
                  type="text"
                  value={newRequest.vehicleInfo}
                  onChange={(e) => setNewRequest({ ...newRequest, vehicleInfo: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 2020 Honda Civic"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Service Type</label>
                <select
                  value={newRequest.serviceType}
                  onChange={(e) => setNewRequest({ ...newRequest, serviceType: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select service type</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.name}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Scheduled Date</label>
                <input
                  type="date"
                  value={newRequest.scheduledDate}
                  onChange={(e) => setNewRequest({ ...newRequest, scheduledDate: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Scheduled Time</label>
                <input
                  type="time"
                  value={newRequest.scheduledTime}
                  onChange={(e) => setNewRequest({ ...newRequest, scheduledTime: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={newRequest.status}
                  onChange={(e) => setNewRequest({ ...newRequest, status: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                <select
                  value={newRequest.priority}
                  onChange={(e) => setNewRequest({ ...newRequest, priority: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  value={newRequest.location}
                  onChange={(e) => setNewRequest({ ...newRequest, location: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter service location"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Estimated Cost</label>
                <input
                  type="text"
                  value={newRequest.estimatedCost}
                  onChange={(e) => setNewRequest({ ...newRequest, estimatedCost: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., $89"
                />
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                <textarea
                  value={newRequest.notes}
                  onChange={(e) => setNewRequest({ ...newRequest, notes: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Additional notes or special requirements"
                  rows={3}
                />
              </div>
            </div>
            
            <div className="flex items-center justify-end space-x-3 mt-6">
              <button
                onClick={() => {
                  setShowRequestModal(false);
                  setEditingRequest(null);
                  setNewRequest({
                    customerName: "",
                    phone: "",
                    vehicleInfo: "",
                    serviceType: "",
                    scheduledDate: "",
                    scheduledTime: "",
                    status: "pending",
                    priority: "medium",
                    location: "",
                    estimatedCost: "",
                    notes: "",
                  });
                }}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={editingRequest ? handleUpdateRequest : handleAddRequest}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Save className="w-4 h-4" />
                <span>{editingRequest ? "Update" : "Save"}</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View Request Modal */}
      {showViewModal && viewingRequest && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Service Request Details</h3>
              <button
                onClick={() => setShowViewModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Customer Information</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">Name:</span>
                      <span className="text-sm font-medium">{viewingRequest.customerName}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-gray-500" />
                      <span className="text-sm">{viewingRequest.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-sm">{viewingRequest.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Service Information</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Wrench className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium">{viewingRequest.serviceType}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Car className="w-4 h-4 text-gray-500" />
                      <span className="text-sm">{viewingRequest.vehicleInfo}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-gray-500" />
                      <span className="text-sm font-medium text-green-600">{viewingRequest.estimatedCost}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Calendar className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Scheduled Date</p>
                  <p className="font-medium">{viewingRequest.scheduledDate}</p>
                </div>
                
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <Clock className="w-6 h-6 text-green-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Scheduled Time</p>
                  <p className="font-medium">{viewingRequest.scheduledTime}</p>
                </div>
                
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <AlertCircle className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Priority</p>
                  <p className={`font-medium capitalize ${getPriorityColor(viewingRequest.priority)}`}>
                    {viewingRequest.priority}
                  </p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-gray-900">Status</h4>
                  <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(viewingRequest.status)}`}>
                    {getStatusIcon(viewingRequest.status)}
                    <span className="capitalize">{viewingRequest.status.replace("-", " ")}</span>
                  </span>
                </div>
              </div>
              
              {viewingRequest.notes && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Notes</h4>
                  <p className="text-sm text-gray-700">{viewingRequest.notes}</p>
                </div>
              )}
            </div>
            
            <div className="flex items-center justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowViewModal(false)}
                className="px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setShowViewModal(false);
                  handleEditRequest(viewingRequest);
                }}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                <Edit className="w-4 h-4" />
                <span>Edit Request</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Statistics Section */}
      <div className="p-2">
        <h2 className="text-3xl font-bold text-center mt-16">
          Customised Care For All Your Needs
        </h2>
        <div className="flex rounded-lg mt-10 pl-32">
          <div className="border-r border-gray-600 pr-6 text-center">
            <div className="ml-20">
              <MdHomeFilled className="w-8 h-8" />
            </div>
            <p className="font-bold text-xl">4000+</p>
            <p>Authorized Service Centers</p>
          </div>
          <div className="border-r border-gray-600 pr-6 pl-6 text-center">
            <div className="ml-20">
              <FaLocationDot className="w-8 h-8" />
            </div>
            <p className="font-bold text-xl">3800+</p>
            <p>Cities Nationwise Connected</p>
          </div>
          <div className="border-r border-gray-600 pr-6 pl-6 text-center">
            <div className="ml-14">
              <TbCertificate className="w-8 h-8" />
            </div>
            <p className="font-bold text-xl">5000+</p>
            <p>Certified Technicians</p>
          </div>
          <div className="pl-6 text-center">
            <div className="ml-20">
              <RiCustomerService2Fill className="w-8 h-8" />
            </div>
            <p className="font-bold text-xl">10+ yrs</p>
            <p>Of Customer Care Expertise</p>
          </div>
        </div>
      </div>
      < JobCardDetailsPage />
    </div>
  );
};

export default ServiceManagementPage;



