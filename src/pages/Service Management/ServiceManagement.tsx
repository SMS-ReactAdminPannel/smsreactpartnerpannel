import type React from "react"
import { useState } from "react"
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
} from "lucide-react"
import { MdHomeFilled } from "react-icons/md"
import { FaLocationDot } from "react-icons/fa6"
import { TbCertificate } from "react-icons/tb"
import { RiCustomerService2Fill } from "react-icons/ri"

// Mock MustCare component
const MustCare = () => <div className="mt-8 p-4 bg-gray-100 rounded-lg text-center">MustCare Component</div>

// Mock COLORS constant
const COLORS = {
  bgColor: "#f8fafc",
}

interface JobCard {
  id: string
  customerName: string
  phone: string
  vehicleInfo: string
  jobNumber: string
  isEditing: boolean
  address?: string
  officeAddress?: string
  email?: string
  dob?: string
  vehicleNumber?: string
  engineNumber?: string
  chassisNumber?: string
  makeModel?: string
  color?: string
  fuelLevel?: string
  complaint?: string
  estimateLabour?: string
  estimateParts?: string
  totalEstimate?: string
  technicianName?: string
  serviceAdvisor?: string
  promisedDeliveryDate?: string
  contactNumber?: string
  createdDate?: string
}

interface ServiceManagementProps {
  onView: () => void
}

const ServiceManagement: React.FC<ServiceManagementProps> = ({ onView }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedJobCard, setSelectedJobCard] = useState<JobCard | null>(null)
  const [showJobCardModal, setShowJobCardModal] = useState(false)
  const [isEditingModal, setIsEditingModal] = useState(false)
  const [editFormData, setEditFormData] = useState<JobCard | null>(null)

  // Sample job cards data
  const [jobCards, setJobCards] = useState<JobCard[]>([
    {
      id: "JC-001",
      customerName: "Rajesh Kumar",
      phone: "+91 98765 43210",
      vehicleInfo: "2020 Maruti Swift",
      jobNumber: "JOB-2024-001",
      isEditing: false,
      address: "123 MG Road, Bangalore, Karnataka 560001",
      email: "rajesh.kumar@email.com",
      dob: "1985-03-15",
      vehicleNumber: "KA-01-AB-1234",
      engineNumber: "K12M-1234567",
      chassisNumber: "MA3ERLF1S00123456",
      makeModel: "Maruti Suzuki Swift VXI",
      color: "Pearl White",
      fuelLevel: "3/4 Full",
      complaint: "Engine making unusual noise during acceleration. AC not cooling properly. Brake pedal feels spongy.",
      estimateLabour: "₹2,500",
      estimateParts: "₹8,500",
      totalEstimate: "₹11,000",
      technicianName: "Suresh Mechanic",
      serviceAdvisor: "Priya Sharma",
      promisedDeliveryDate: "2024-01-18",
      createdDate: "2024-01-15",
    },
    {
      id: "JC-002",
      customerName: "Anita Desai",
      phone: "+91 87654 32109",
      vehicleInfo: "2019 Hyundai i20",
      jobNumber: "JOB-2024-002",
      isEditing: false,
      address: "456 Park Street, Mumbai, Maharashtra 400001",
      email: "anita.desai@email.com",
      dob: "1990-07-22",
      vehicleNumber: "MH-02-CD-5678",
      engineNumber: "G4FA-2345678",
      chassisNumber: "KMHCT41BAPU123456",
      makeModel: "Hyundai i20 Sportz",
      color: "Fiery Red",
      fuelLevel: "1/2 Full",
      complaint: "Steering wheel vibration at high speeds. Front brake pads need replacement. Oil change due.",
      estimateLabour: "₹1,800",
      estimateParts: "₹4,200",
      totalEstimate: "₹6,000",
      technicianName: "Ramesh Technician",
      serviceAdvisor: "Amit Patel",
      promisedDeliveryDate: "2024-01-17",
      createdDate: "2024-01-14",
    },
    {
      id: "JC-003",
      customerName: "Mohammed Ali",
      phone: "+91 76543 21098",
      vehicleInfo: "2021 Tata Nexon",
      jobNumber: "JOB-2024-003",
      isEditing: false,
      address: "789 Commercial Street, Chennai, Tamil Nadu 600001",
      email: "mohammed.ali@email.com",
      dob: "1988-11-10",
      vehicleNumber: "TN-09-EF-9012",
      engineNumber: "REVOTRON-3456789",
      chassisNumber: "MAT622DPXM1123456",
      makeModel: "Tata Nexon XZ Plus",
      color: "Flame Orange",
      fuelLevel: "Full",
      complaint:
        "Transmission jerking during gear shifts. Dashboard warning lights intermittent. Tire rotation needed.",
      estimateLabour: "₹3,200",
      estimateParts: "₹12,800",
      totalEstimate: "₹16,000",
      technicianName: "Venkat Specialist",
      serviceAdvisor: "Lakshmi Iyer",
      promisedDeliveryDate: "2024-01-20",
      createdDate: "2024-01-16",
    },
    {
      id: "JC-004",
      customerName: "Priya Nair",
      phone: "+91 65432 10987",
      vehicleInfo: "2018 Honda City",
      jobNumber: "JOB-2024-004",
      isEditing: false,
      address: "321 Brigade Road, Kochi, Kerala 682001",
      email: "priya.nair@email.com",
      dob: "1992-05-18",
      vehicleNumber: "KL-07-GH-3456",
      engineNumber: "i-VTEC-4567890",
      chassisNumber: "MRHFB16518S123456",
      makeModel: "Honda City VX CVT",
      color: "Platinum White Pearl",
      fuelLevel: "1/4 Full",
      complaint: "CVT transmission slipping. Headlight alignment required. General service and oil change.",
      estimateLabour: "₹2,000",
      estimateParts: "₹6,500",
      totalEstimate: "₹8,500",
      technicianName: "Krishnan Expert",
      serviceAdvisor: "Deepak Kumar",
      promisedDeliveryDate: "2024-01-19",
      createdDate: "2024-01-15",
    },
    {
      id: "JC-005",
      customerName: "Vikram Singh",
      phone: "+91 54321 09876",
      vehicleInfo: "2022 Mahindra XUV700",
      jobNumber: "JOB-2024-005",
      isEditing: false,
      address: "654 Sector 15, Gurgaon, Haryana 122001",
      email: "vikram.singh@email.com",
      dob: "1986-09-25",
      vehicleNumber: "HR-26-IJ-7890",
      engineNumber: "mStallion-5678901",
      chassisNumber: "MA1TA2MKXN2123456",
      makeModel: "Mahindra XUV700 AX7",
      color: "Dazzling Silver",
      fuelLevel: "Nearly Empty",
      complaint: "Suspension noise from rear. Infotainment system freezing. First free service due.",
      estimateLabour: "₹1,500",
      estimateParts: "₹3,000",
      totalEstimate: "₹4,500",
      technicianName: "Harpreet Mechanic",
      serviceAdvisor: "Neha Gupta",
      promisedDeliveryDate: "2024-01-17",
      createdDate: "2024-01-16",
    },
    {
      id: "JC-006",
      customerName: "Sunita Reddy",
      phone: "+91 43210 98765",
      vehicleInfo: "2020 Kia Seltos",
      jobNumber: "JOB-2024-006",
      isEditing: false,
      address: "987 Jubilee Hills, Hyderabad, Telangana 500033",
      email: "sunita.reddy@email.com",
      dob: "1989-12-03",
      vehicleNumber: "TS-08-KL-2345",
      engineNumber: "SMARTSTREAM-6789012",
      chassisNumber: "KNAP341GBLK123456",
      makeModel: "Kia Seltos HTX Plus",
      color: "Gravity Grey",
      fuelLevel: "3/4 Full",
      complaint: "Clutch pedal hard to press. Air filter replacement needed. Wheel alignment and balancing required.",
      estimateLabour: "₹2,800",
      estimateParts: "₹7,200",
      totalEstimate: "₹10,000",
      technicianName: "Ravi Technician",
      serviceAdvisor: "Sanjay Reddy",
      promisedDeliveryDate: "2024-01-21",
      createdDate: "2024-01-17",
    },
  ])

  const serviceRequests = [
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
      estimatedCost: " ₹89",
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
      estimatedCost: " ₹150",
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
      estimatedCost: " ₹320",
      notes: "All four tires need replacement",
    },
    {
      id: "SR-004",
      customerName: "Mike Wilson",
      phone: "+1 234-567-8902",
      vehicleInfo: "2021 Ford F-150",
      serviceType: "Tire Replacement",
      scheduledDate: "2024-01-16",
      scheduledTime: "9:00 AM",
      status: "in-progress",
      priority: "medium",
      location: "789 Pine St, Suburb",
      estimatedCost: " ₹320",
      notes: "All four tires need replacement",
    },
    {
      id: "SR-005",
      customerName: "Sarah Johnson",
      phone: "+1 234-567-8901",
      vehicleInfo: "2019 Toyota Camry",
      serviceType: "Brake Inspection",
      scheduledDate: "2024-01-15",
      scheduledTime: "2:00 PM",
      status: "confirmed",
      priority: "high",
      location: "456 Oak Ave, Uptown",
      estimatedCost: " ₹150",
      notes: "Customer reported squeaking sounds",
    },
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
      estimatedCost: " ₹89",
      notes: "Customer prefers synthetic oil",
    },
  ]

  const stats = [
    { label: "Total Requests", value: "248", change: "+12%", color: "blue" },
    { label: "Completed Today", value: "23", change: "+8%", color: "green" },
    { label: "Pending", value: "15", change: "-5%", color: "yellow" },
    { label: "Revenue", value: " ₹12,450", change: "+15%", color: "purple" },
  ]

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-600"
      case "medium":
        return "text-yellow-600"
      case "low":
        return "text-green-600"
      default:
        return "text-gray-600"
    }
  }

  const handleView = (jobCard: JobCard) => {
    setSelectedJobCard(jobCard)
    setShowJobCardModal(true)
  }

  const handleEditModal = () => {
    setIsEditingModal(true)
    setEditFormData(selectedJobCard)
  }

  const handleSaveEdit = () => {
    if (editFormData) {
      setJobCards(jobCards.map((card) => (card.id === editFormData.id ? editFormData : card)))
      setSelectedJobCard(editFormData)
      setIsEditingModal(false)
    }
  }

  const handleCancelEdit = () => {
    setIsEditingModal(false)
    setEditFormData(selectedJobCard)
  }

  const handleEditInputChange = (field: keyof JobCard, value: string) => {
    if (editFormData) {
      setEditFormData({
        ...editFormData,
        [field]: value,
      })
    }
  }

  return (
    <div className="p-4" style={{ background: COLORS.bgColor }}>
      {/* Stats Section */}
      <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className={`text-sm ${stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
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
                <h2 className="text-xl font-bold text-gray-900">Service Requests</h2>
                <p className="text-gray-600 mt-1">Manage incoming service appointments</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                  <input
                    type="search"
                    placeholder="Search requests..."
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b111e] transition"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Request ID</th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Customer</th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Vehicle</th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Schedule</th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Priority</th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">Jobcard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {serviceRequests.map((request) => (
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
                      <span className={`text-sm font-medium capitalize ${getPriorityColor(request.priority)}`}>
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

      {/* Job Card Register Section */}
      <div className="p-2">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="border-b border-gray-200 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Job Card Register</h2>
                <p className="text-gray-600 mt-1">Track and manage job card details</p>
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
                [card.customerName, card.vehicleNumber, card.jobNumber]
                  .join(" ")
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase()),
              )
              .map((card) => (
                <div key={card.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
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
                        onClick={() => setJobCards(jobCards.filter((c) => c.id !== card.id))}
                        className="p-1 text-red-600 hover:bg-red-50 rounded"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <h3 className="font-semibold text-gray-900 mb-2">{card.customerName}</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Vehicle:</span>
                      <span className="font-medium text-blue-600">{card.vehicleInfo}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Job No:</span>
                      <span className="text-gray-900">{card.jobNumber}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Phone:</span>
                      <span className="text-gray-900">{card.phone}</span>
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
                <h2 className="text-2xl font-bold text-[#9b111e]">Job Card Details</h2>
                <p className="text-gray-600">Job Number: {selectedJobCard.jobNumber}</p>
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
              {/* Customer Information */}
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-[#9b111e] mb-4">Customer Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Name:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.customerName || ""}
                        onChange={(e) => handleEditInputChange("customerName", e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">{selectedJobCard.customerName}</p>
                    )}
                  </div>
                  <div>
                    <span className="text-gray-600">Phone:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.phone || ""}
                        onChange={(e) => handleEditInputChange("phone", e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">{selectedJobCard.phone}</p>
                    )}
                  </div>
                  <div>
                    <span className="text-gray-600">Email:</span>
                    {isEditingModal ? (
                      <input
                        type="email"
                        value={editFormData?.email || ""}
                        onChange={(e) => handleEditInputChange("email", e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">{selectedJobCard.email || "N/A"}</p>
                    )}
                  </div>
                  <div>
                    <span className="text-gray-600">Address:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.address || ""}
                        onChange={(e) => handleEditInputChange("address", e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">{selectedJobCard.address || "N/A"}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Vehicle Information */}
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-[#9b111e] mb-4">Vehicle Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Vehicle Number:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.vehicleNumber || ""}
                        onChange={(e) => handleEditInputChange("vehicleNumber", e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">{selectedJobCard.vehicleNumber || "N/A"}</p>
                    )}
                  </div>
                  <div>
                    <span className="text-gray-600">Make & Model:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.makeModel || ""}
                        onChange={(e) => handleEditInputChange("makeModel", e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">{selectedJobCard.makeModel || selectedJobCard.vehicleInfo}</p>
                    )}
                  </div>
                  <div>
                    <span className="text-gray-600">Engine Number:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.engineNumber || ""}
                        onChange={(e) => handleEditInputChange("engineNumber", e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">{selectedJobCard.engineNumber || "N/A"}</p>
                    )}
                  </div>
                  <div>
                    <span className="text-gray-600">Chassis Number:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.chassisNumber || ""}
                        onChange={(e) => handleEditInputChange("chassisNumber", e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">{selectedJobCard.chassisNumber || "N/A"}</p>
                    )}
                  </div>
                  <div>
                    <span className="text-gray-600">Color:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.color || ""}
                        onChange={(e) => handleEditInputChange("color", e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">{selectedJobCard.color || "N/A"}</p>
                    )}
                  </div>
                  <div>
                    <span className="text-gray-600">Fuel Level:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.fuelLevel || ""}
                        onChange={(e) => handleEditInputChange("fuelLevel", e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">{selectedJobCard.fuelLevel || "N/A"}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Complaint & Diagnosis */}
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-[#9b111e] mb-4">Complaint & Diagnosis</h3>
                {isEditingModal ? (
                  <textarea
                    value={editFormData?.complaint || ""}
                    onChange={(e) => handleEditInputChange("complaint", e.target.value)}
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e] h-24"
                    placeholder="Enter complaint details..."
                  />
                ) : (
                  <p className="text-sm">{selectedJobCard.complaint || "No complaint specified"}</p>
                )}
              </div>

              {/* Estimate */}
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-[#9b111e] mb-4">Estimate</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Labour:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.estimateLabour || ""}
                        onChange={(e) => handleEditInputChange("estimateLabour", e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">{selectedJobCard.estimateLabour || "N/A"}</p>
                    )}
                  </div>
                  <div>
                    <span className="text-gray-600">Parts:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.estimateParts || ""}
                        onChange={(e) => handleEditInputChange("estimateParts", e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">{selectedJobCard.estimateParts || "N/A"}</p>
                    )}
                  </div>
                  <div>
                    <span className="text-gray-600">Total:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.totalEstimate || ""}
                        onChange={(e) => handleEditInputChange("totalEstimate", e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium text-[#9b111e]">{selectedJobCard.totalEstimate || "N/A"}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div className="border rounded-lg p-4">
                <h3 className="font-semibold text-[#9b111e] mb-4">Service Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Technician:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.technicianName || ""}
                        onChange={(e) => handleEditInputChange("technicianName", e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">{selectedJobCard.technicianName || "N/A"}</p>
                    )}
                  </div>
                  <div>
                    <span className="text-gray-600">Service Advisor:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.serviceAdvisor || ""}
                        onChange={(e) => handleEditInputChange("serviceAdvisor", e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">{selectedJobCard.serviceAdvisor || "N/A"}</p>
                    )}
                  </div>
                  <div>
                    <span className="text-gray-600">Promised Delivery:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.promisedDeliveryDate || ""}
                        onChange={(e) => handleEditInputChange("promisedDeliveryDate", e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">{selectedJobCard.promisedDeliveryDate || "N/A"}</p>
                    )}
                  </div>
                  <div>
                    <span className="text-gray-600">Created Date:</span>
                    {isEditingModal ? (
                      <input
                        type="text"
                        value={editFormData?.createdDate || ""}
                        onChange={(e) => handleEditInputChange("createdDate", e.target.value)}
                        className="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e]"
                      />
                    ) : (
                      <p className="font-medium">{selectedJobCard.createdDate || "N/A"}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center">Customised Care For All Your Needs</h2>
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
  )
}

export default ServiceManagement