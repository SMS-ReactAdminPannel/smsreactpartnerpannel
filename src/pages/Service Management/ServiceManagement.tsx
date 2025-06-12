import type React from "react";
import { useState, useEffect } from "react";
import {
  Car,
  Wrench,
  Calendar,
  Clock,
  Phone,
  Plus,
  Filter,
  Search,
  Edit,
  Trash2,
  BarChart3,
  Eye,
  X,
  CheckCircle,
} from "lucide-react";
import { MdHomeFilled } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { TbCertificate } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import { deleteJobCards, getAllJobCards, getAllServiceRequests, updateJobCards } from "./Services";
import { data, useParams } from "react-router-dom";

// Mock MustCare component
const MustCare = () => (
  <div className="mt-8 p-4 bg-gray-100 rounded-lg text-center">
    MustCare Component
  </div>
);

// Mock COLORS constant
const COLORS = {
  bgColor: "#f8fafc",
};

interface JobCard {
  id: string;
  customerName: string;
  phone: string;
  vehicleInfo: {
    chassisNo:string;
    color:string;
    engineNo:string;
    model:string;
    registrationNo:string;
  },
  jobInfo:{
    ContactNo:string;
    VehicleNo:string;
    jobId:string;
    customerName:string;
  },
  customerInfo:{
    email:string;
    name:string;
    address:string;
    contactNo:string;
  },
  jobNumber: string;
  isEditing: boolean;
  address?: string;
  officeAddress?: string;
  email?: string;
  dob?: string;
  vehicleNumber?: string;
  engineNumber?: string;
  chassisNumber?: string;
  makeModel?: string;
  color?: string;
  fuelLevel?: string;
  complaint?: string;
  estimateLabour?: string;
  estimateParts?: string;
  totalEstimate?: string;
  technicianName?: string;
  serviceAdvisor?: string;
  promisedDeliveryDate?: string;
  contactNumber?: string;
  createdDate?: string;
}

interface ServiceManagementProps {
  onView: () => void;
}

const ServiceManagement: React.FC<ServiceManagementProps> = ({ onView }) => {
  const [jobCards, setJobCards] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [serviceRequests, setServiceRequests] = useState<any[]>([]);
  const [selectedJobCard, setSelectedJobCard] = useState<JobCard | null>(null);
  const [showJobCardModal, setShowJobCardModal] = useState(false);
  const [isEditingModal, setIsEditingModal] = useState(false);
  const [editFormData, setEditFormData] = useState<JobCard | null>(null);
  const [updatedJobcards,setupdatedJobcards]= useState<JobCard | null>(null);

  const fetchupdatejobcards = async (params:any,data:any)=>{
    try {
    const response = await updateJobCards(params, data);

    if (response && response.data) {
      setupdatedJobcards(response.data); 
      console.log("Job card updated successfully:", response.data);
    }
  } catch (error) {
    console.error("Failed to update job card:", error);
    
  }
  }

  const fetchServiceRequests = async () => {
    try {
      const response: any = await getAllServiceRequests("");
      console.log("Fetched service requests:", response.data.data);
      setServiceRequests(response.data.data);
    } catch (error) {
      console.error("Error fetching service requests:", error);
    }
  };

  const fetchJobCards = async () => {
    try {
      const response: any = await getAllJobCards("");
      console.log("Fetched job cards:", response.data.data);
      setJobCards(response.data.data);
    } catch (error) {
      console.error("Error fetching job cards:", error);
    }
  };

  useEffect(() => {
    fetchServiceRequests();
    fetchJobCards();
  }, []);

  const stats = [
    { label: "Total Requests", value: "248", change: "+12%", color: "blue" },
    { label: "Completed Today", value: "23", change: "+8%", color: "green" },
    { label: "Pending", value: "15", change: "-5%", color: "yellow" },
    { label: "Revenue", value: " ₹12,450", change: "+15%", color: "purple" },
  ];

  const getPriorityColor = (Priority: string) => {
    switch (Priority) {
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

  const handleView = (jobCard: any) => {
    console.log(jobCard)
    setSelectedJobCard(jobCard);
    setShowJobCardModal(true);
  };

  const handleEditModal = () => {
    setIsEditingModal(true);
    setEditFormData(selectedJobCard);
  };

  const handleSaveEdit = () => {
    if (editFormData) {
      setJobCards(
        jobCards.map((card) =>
          card.id === editFormData.id ? editFormData : card
        )
      );
      setSelectedJobCard(editFormData);
      setIsEditingModal(false);
    }
    
    fetchupdatejobcards('',data);
  };

  const handleCancelEdit = () => {
    setIsEditingModal(false);
    setEditFormData(selectedJobCard);
  };

  const handleEditInputChange = (field: keyof JobCard, value: string) => {
    if (editFormData) {
      setEditFormData({
        ...editFormData,
        [field]: value,
      });
    }
  };

  const deleteJob = async (param:string) =>{
    try {
      const deleteCard = await deleteJobCards(param);
      console.log(deleteCard)
      setJobCards(jobCards.filter((c) => c.uuid !== param))
    } catch (error) {
      console.log("Job Cards Deleted ",error)
    }
  }

  return (
    <div className="p-4" style={{ background: COLORS.bgColor }}>
      {/* Stats Section */}
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
                    placeholder="Search request..."
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b111e] transition"
                  />
                </div>
                
                {/* <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </button> */}
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="max-h-96 overflow-y-auto"> 
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">
                    Request ID
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">
                    Customer
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">
                    Vehicle
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">
                    Schedule
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">
                    Priority
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">
                    Jobcard
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {Array.isArray(serviceRequests) &&
                  serviceRequests.map((request) => (
                    <tr key={request.id} className="hover:bg-gray-50">
                      <td className="py-4 px-6">
                        <span className="font-medium text-blue-600">
                          {request.requestId}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div>
                          <p className="font-medium text-gray-900">
                            {request.customerId.contact_info.phoneNumber}
                          </p>
                          <p className="text-sm text-gray-600 flex items-center mt-1">
                            <Phone className="w-3 h-3 mr-1" />
                            {request.phone}
                          </p>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center space-x-2">
                          <Car className="w-4 h-4 text-gray-500" />
                          <span className="text-gray-900">
                            {request.vechicle_info.name}
                          </span>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="text-sm">
                          <p className="text-gray-900 flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {request.schedule_date}
                          </p>
                          <p className="text-gray-600 flex items-center mt-1">
                            <Clock className="w-3 h-3 mr-1" />
                            {request.scheduledTime}
                          </p>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <span
                          className={`text-sm font-medium capitalize ${getPriorityColor(
                            request.priority
                          )}`}
                        >
                          {request.priority}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <button
                          onClick={onView}
                          className="flex items-center space-x-1 text-sm text-[#9b111e] font-medium hover:underline"
                        >
                          <Plus className="w-4 h-4" />
                          <span>Create</span>
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
              </div>
          </div>
        </div>
      </div>

      {/* Job Card Register Section */}
      <div className="p-2">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="border-b border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Job Card Register
                </h2>
                <p className="text-gray-600 mt-1">
                  Track and manage job card details
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="search"
                    placeholder="Search job cards..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b111e] transition"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobCards
              .filter((card) =>
                [
                  card.jobInfo?.customerName,
                  card.jobInfo?.ContactNo,
                  card.jobInfo?.jobId,
                  card.jobInfo?.VehicleNo,
                ]
                  .join(" ")
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              )
              .map((card,index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Wrench className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex items-center space-x-1">
                      <button
                        onClick={() => handleView(card)}
                        className="p-1 text-blue-600 hover:bg-blue-50 rounded"
                        title="View Job Card Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() =>deleteJob(card.uuid)}
                        className="p-1 text-red-600 hover:bg-red-50 rounded"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <h3 className="font-semibold text-gray-900 mb-2">
                    {card.jobInfo?.customerName}
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Vehicle:</span>
                      <span className="font-medium text-blue-600">
                        {card.jobInfo?.VehicleNo}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Job No:</span>
                      <span className="text-gray-900">
                        {card.jobInfo?.jobId}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Phone:</span>
                      <span className="text-gray-900">
                        {card.jobInfo?.ContactNo}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Job Card Details Modal */}
      {showJobCardModal && selectedJobCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-[#9b111e]">
                  Job Card Details
                </h2>
                <p className="text-gray-600">
                  Job Number: {selectedJobCard?.jobInfo?.jobId}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                {!isEditingModal ? (
                  <>
                    <button
                      onClick={handleEditModal}
                      className="flex items-center space-x-2 px-4 py-2 bg-[#9b111e] text-white rounded-lg hover:bg-red-800"
                    >
                      <Edit className="w-4 h-4" />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => setShowJobCardModal(false)}
                      className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </>
                ) : (
                  <div className="flex space-x-2">
                    <button
                      onClick={handleSaveEdit}
                      className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span>Save</span>
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="flex items-center space-x-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                    >
                      <X className="w-4 h-4" />
                      <span>Cancel</span>
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-[#9b111e] mb-4">
                  Customer Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Name:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.jobInfo?.customerName || ""}
                        onChange={(e) =>
                          handleEditInputChange("customerName", e.target.value)
                        }
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">
                        {selectedJobCard?.jobInfo?.customerName}
                      </p>
                    )}
                  </div>
                  <div>
                    <span className="text-gray-600">Phone:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.phone || ""}
                        onChange={(e) =>
                          handleEditInputChange("phone", e.target.value)
                        }
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">{selectedJobCard.jobInfo?.ContactNo}</p>
                    )}
                  </div>
                  <div>
                    <span className="text-gray-600">Email:</span>
                    {isEditingModal ? (
                      <input
                        type="email"
                        value={editFormData?.email || ""}
                        onChange={(e) =>
                          handleEditInputChange("email", e.target.value)
                        }
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">
                        {selectedJobCard?.customerInfo?.email || "N/A"}
                      </p>
                    )}
                  </div>
                  <div>
                    <span className="text-gray-600">Address:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.address || ""}
                        onChange={(e) =>
                          handleEditInputChange("address", e.target.value)
                        }
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">
                        {selectedJobCard.cutomerInfo?.address || "N/A"}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-[#9b111e] mb-4">
                  Vehicle Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Vehicle Number:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.jobInfo?.VehicleNo || ""}
                        onChange={(e) =>
                          handleEditInputChange("vehicleNumber", e.target.value)
                        }
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">
                        {selectedJobCard.jobInfo?.VehicleNo || "N/A"}
                      </p>
                    )}
                  </div>
                  <div>
                    <span className="text-gray-600">Make & Model:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.vehicleInfo?.model || ""}
                        onChange={(e) =>
                          handleEditInputChange("makeModel", e.target.value)
                        }
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">
                        {selectedJobCard?.vehicleInfo?.model ||
                          selectedJobCard.vehicleInfo.model}
                      </p>
                    )}
                  </div>
                  <div>
                    <span className="text-gray-600">Engine Number:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.vehicleInfo?.engineNo || ""}
                        onChange={(e) =>
                          handleEditInputChange("engineNumber", e.target.value)
                        }
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">
                        {selectedJobCard?.vehicleInfo?.engineNo || "N/A"}
                      </p>
                    )}
                  </div>
                  <div>
                    <span className="text-gray-600">Chassis Number:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.vehicleInfo?.chassisNo || ""}
                        onChange={(e) =>
                          handleEditInputChange("chassisNumber", e.target.value)
                        }
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">
                        {selectedJobCard.vehicleInfo?.chassisNo || "N/A"}
                      </p>
                    )}
                  </div>
                  <div>
                    <span className="text-gray-600">Color:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.vehicleInfo?.color || ""}
                        onChange={(e) =>
                          handleEditInputChange("color", e.target.value)
                        }
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">
                        {selectedJobCard.vehicleInfo?.color || "N/A"}
                      </p>
                    )}
                  </div>
                  <div>
                    <span className="text-gray-600">Fuel Level:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.vehicleInventory?.fuelLevel || ""}
                        onChange={(e) =>
                          handleEditInputChange("fuelLevel", e.target.value)
                        }
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">
                        {selectedJobCard?.vehicleInventory?.fuelLevel || "N/A"}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-[#9b111e] mb-4">
                  Complaint & Diagnosis
                </h3>
                {isEditingModal ? (
                  <textarea
                    value={editFormData?.complaint || ""}
                    onChange={(e) =>
                      handleEditInputChange("complaint", e.target.value)
                    }
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e] h-24"
                    placeholder="Enter complaint details..."
                  />
                ) : (
                  <p className="text-sm">
                    {selectedJobCard?.complaint || "No complaint specified"}
                  </p>
                )}
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-[#9b111e] mb-4">Estimate</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Labour:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.estimateLabour || ""}
                        onChange={(e) =>
                          handleEditInputChange(
                            "estimateLabour",
                            e.target.value
                          )
                        }
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">
                        {selectedJobCard?.estimateLabour || "N/A"}
                      </p>
                    )}
                  </div>
                  <div>
                    <span className="text-gray-600">Parts:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.estimateParts || ""}
                        onChange={(e) =>
                          handleEditInputChange("estimateParts", e.target.value)
                        }
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">
                        {selectedJobCard?.estimateParts || "N/A"}
                      </p>
                    )}
                  </div>
                  <div>
                    <span className="text-gray-600">Total:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.totalEstimate || ""}
                        onChange={(e) =>
                          handleEditInputChange("totalEstimate", e.target.value)
                        }
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium text-[#9b111e]">
                        {selectedJobCard?.totalEstimate || "N/A"}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-[#9b111e] mb-4">
                  Service Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Technician:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.technicianName || ""}
                        onChange={(e) =>
                          handleEditInputChange(
                            "technicianName",
                            e.target.value
                          )
                        }
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">
                        {selectedJobCard?.technicianName || "N/A"}
                      </p>
                    )}
                  </div>
                  <div>
                    <span className="text-gray-600">Service Advisor:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.serviceAdvisor || ""}
                        onChange={(e) =>
                          handleEditInputChange(
                            "serviceAdvisor",
                            e.target.value
                          )
                        }
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">
                        {selectedJobCard?.serviceAdvisor || "N/A"}
                      </p>
                    )}
                  </div>
                  <div>
                    <span className="text-gray-600">Promised Delivery:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.promisedDeliveryDate || ""}
                        onChange={(e) =>
                          handleEditInputChange(
                            "promisedDeliveryDate",
                            e.target.value
                          )
                        }
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">
                        {selectedJobCard?.promisedDeliveryDate || "N/A"}
                      </p>
                    )}
                  </div>
                  <div>
                    <span className="text-gray-600">Created Date:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.createdDate || ""}
                        onChange={(e) =>
                          handleEditInputChange("createdDate", e.target.value)
                        }
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">
                        {selectedJobCard?.createdDate || "N/A"}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center">
          Customised Care For All Your Needs
        </h2>
        <div className="flex justify-center mt-8 space-x-8">
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <MdHomeFilled className="w-8 h-8 text-[#9b111e]" />
            </div>
            <p className="font-bold text-xl">4000+</p>
            <p className="text-gray-600">Authorized Service Centers</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <FaLocationDot className="w-8 h-8 text-[#9b111e]" />
            </div>
            <p className="font-bold text-xl">3800+</p>
            <p className="text-gray-600">Cities Nationwide Connected</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <TbCertificate className="w-8 h-8 text-[#9b111e]" />
            </div>
            <p className="font-bold text-xl">5000+</p>
            <p className="text-gray-600">Certified Technicians</p>
          </div>
          <div className="text-center">
            <div className="flex justify-center mb-2">
              <RiCustomerService2Fill className="w-8 h-8 text-[#9b111e]" />
            </div>
            <p className="font-bold text-xl">10+ yrs</p>
            <p className="text-gray-600">Of Customer Care Expertise</p>
          </div>
        </div>
        <MustCare />
      </div>
    </div>
  );
};

export default ServiceManagement;
