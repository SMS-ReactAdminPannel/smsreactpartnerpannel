import React, { useState } from "react";
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
} from "lucide-react";
import { MdHomeFilled } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { TbCertificate } from "react-icons/tb";
import { RiCustomerService2Fill } from "react-icons/ri";
import MustCare from "./MustCare";

const TermsConditionsPage: React.FC = () => {
  const [services, setServices] = useState([
    { id: 1, name: "Oil Change", price: "$89", duration: "30 min", isEditing: false },
    { id: 2, name: "Brake Service", price: "$150-300", duration: "1-2 hours", isEditing: false },
    { id: 3, name: "Tire Service", price: "$80-400", duration: "45 min", isEditing: false },
    { id: 4, name: "Engine Diagnostic", price: "$120-250", duration: "1 hour", isEditing: false },
    { id: 5, name: "Battery Service", price: "$100-200", duration: "30 min", isEditing: false },
    { id: 6, name: "AC Service", price: "$150-350", duration: "1-2 hours", isEditing: false },
  ]);

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
  ];

  const stats = [
    { label: "Total Requests", value: "248", change: "+12%", color: "blue" },
    { label: "Completed Today", value: "23", change: "+8%", color: "green" },
    { label: "Pending", value: "15", change: "-5%", color: "yellow" },
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
  return (
    <div>
      <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
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
          {/* Section Header */}
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
                    className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b111e] transition"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-[#9b111e] text-white rounded-lg ">
                  <Plus className="w-4 h-4" />
                  <span>New Request</span>
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto">
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
                    Service
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">
                    Schedule
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">
                    Status
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">
                    Priority
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">
                    Cost
                  </th>
                  <th className="text-left py-3 px-6 text-sm font-medium text-gray-900">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {serviceRequests.map((request) => (
                  <tr key={request.id} className="hover:bg-gray-50">
                    <td className="py-4 px-6">
                      <span className="font-medium text-blue-600">
                        {request.id}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div>
                        <p className="font-medium text-gray-900">
                          {request.customerName}
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
                          {request.vehicleInfo}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="font-medium text-gray-900">
                        {request.serviceType}
                      </span>
                      {request.notes && (
                        <p className="text-xs text-gray-600 mt-1">
                          {request.notes}
                        </p>
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
                      <span
                        className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                          request.status
                        )}`}
                      >
                        {getStatusIcon(request.status)}
                        <span className="capitalize">
                          {request.status.replace("-", " ")}
                        </span>
                      </span>
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
                      <span className="font-medium text-gray-900">
                        {request.estimatedCost}
                      </span>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-2">
                        <button className="p-1 text-blue-600 hover:bg-blue-50 rounded">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-gray-600 hover:bg-gray-50 rounded">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-1 text-red-600 hover:bg-red-50 rounded">
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
      <div className="p-2">
        {/* Available Services Panel */}
<div className="p-2">
  <div className="bg-white rounded-lg shadow-sm border border-gray-200">
    <div className="border-b border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Available Services</h2>
          <p className="text-gray-600 mt-1">Manage your service offerings</p>
        </div>
        <button
          onClick={() =>
            setServices([
              ...services,
              {
                id: services.length ? services[services.length - 1].id + 1 : 1,
                name: "",
                price: "",
                duration: "",
                isEditing: true,
              },
            ])
          }
          className="flex items-center space-x-2 px-4 py-2 bg-[#9b111e] text-white rounded-lg"
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
                onClick={() =>
                  setServices(
                    services.map((s) =>
                      s.id === service.id
                        ? { ...s, isEditing: !s.isEditing }
                        : s
                    )
                  )
                }
                className="p-1 text-gray-600 hover:bg-gray-50 rounded"
              >
                <Edit className="w-4 h-4" />
              </button>
              <button
                onClick={() =>
                  setServices(
                    services.map((s) =>
                      s.id === service.id
                        ? { ...s, price: "", duration: "" }
                        : s
                    )
                  )
                }
                className="p-1 text-red-600 hover:bg-red-50 rounded"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {service.isEditing ? (
            <div className="space-y-2">
              <input
                type="text"
                placeholder="Service Name"
                className="w-full border p-2 rounded"
                value={service.name}
                onChange={(e) =>
                  setServices(
                    services.map((s) =>
                      s.id === service.id
                        ? { ...s, name: e.target.value }
                        : s
                    )
                  )
                }
              />
              <input
                type="text"
                placeholder="Price"
                className="w-full border p-2 rounded"
                value={service.price}
                onChange={(e) =>
                  setServices(
                    services.map((s) =>
                      s.id === service.id
                        ? { ...s, price: e.target.value }
                        : s
                    )
                  )
                }
              />
              <input
                type="text"
                placeholder="Duration"
                className="w-full border p-2 rounded"
                value={service.duration}
                onChange={(e) =>
                  setServices(
                    services.map((s) =>
                      s.id === service.id
                        ? { ...s, duration: e.target.value }
                        : s
                    )
                  )
                }
              />
            </div>
          ) : (
            <>
              <h3 className="font-semibold text-gray-900 mb-2">
                {service.name}
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Price:</span>
                  <span className="font-medium text-green-600">
                    {service.price || "-"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="text-gray-900">
                    {service.duration || "-"}
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  </div>
</div>

        <h2 className="text-3xl font-bold text-center mt-16">
          Customised Care For All Your Needs
        </h2>
        <div className="flex rounded-lg mt-10 pl-32">
          <div className="border-r border-gray-600 pr-6 text-center">
            <div className="ml-20">
              <MdHomeFilled />
            </div>
            <p className="font-bold text-xl">4000+</p>
            <p>Authorized Service Centers</p>
          </div>
          <div className="border-r border-gray-600 pr-6 pl-6 text-center">
            <div className="ml-20">
              <FaLocationDot />
            </div>
            <p className="font-bold text-xl">3800+</p>
            <p>Cities Nationwise Connected</p>
          </div>
          <div className="border-r border-gray-600 pr-6 pl-6 text-center">
            <div className="ml-14">
              <TbCertificate />
            </div>
            <p className="font-bold text-xl">5000+</p>
            <p>Certified Technicians</p>
          </div>
          <div className="pl-6 text-center">
            <div className="ml-20">
              <RiCustomerService2Fill />
            </div>
            <p className="font-bold text-xl">10+ yrs</p>
            <p>Of Customer Care Expertise</p>
          </div>
        </div>
        <div>
          <MustCare />
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;
