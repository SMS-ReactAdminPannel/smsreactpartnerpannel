"use client"

import { useState } from "react"
import ServiceManagement from "./ServiceManagement"
import JobCardPage from "./job-card-page"

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

export default function App() {
  const [showJobCardForm, setShowJobCardForm] = useState(true)
  const [jobCards, setJobCards] = useState<JobCard[]>([
    {
      id: "1",
      customerName: "John Smith",
      phone: "+1 234-567-8900",
      vehicleInfo: "2020 Honda Civic",
      jobNumber: "JC-001",
      isEditing: false,
      address: "123 Main St, Downtown",
      email: "john.smith@email.com",
      vehicleNumber: "ABC-123",
      engineNumber: "ENG001",
      chassisNumber: "CHS001",
      makeModel: "Honda Civic 2020",
      color: "Blue",
      fuelLevel: "3/4 Full",
      complaint: "Engine making unusual noise",
      estimateLabour: "$150",
      estimateParts: "$200",
      totalEstimate: "$350",
      technicianName: "Mike Johnson",
      serviceAdvisor: "Sarah Wilson",
      promisedDeliveryDate: "2024-01-20",
      contactNumber: "+1 234-567-8900",
      createdDate: "2024-01-15",
    },
    {
      id: "2",
      customerName: "Sarah Johnson",
      phone: "+1 234-567-8901",
      vehicleInfo: "2019 Toyota Camry",
      jobNumber: "JC-002",
      isEditing: false,
      address: "456 Oak Ave, Uptown",
      email: "sarah.johnson@email.com",
      vehicleNumber: "XYZ-456",
      engineNumber: "ENG002",
      chassisNumber: "CHS002",
      makeModel: "Toyota Camry 2019",
      color: "White",
      fuelLevel: "1/2 Full",
      complaint: "Brake pads need replacement",
      estimateLabour: "$100",
      estimateParts: "$120",
      totalEstimate: "$220",
      technicianName: "David Brown",
      serviceAdvisor: "Lisa Davis",
      promisedDeliveryDate: "2024-01-18",
      contactNumber: "+1 234-567-8901",
      createdDate: "2024-01-14",
    },
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      {showJobCardForm ? (
        <ServiceManagement setstate={setShowJobCardForm} jobCards={jobCards} setJobCards={setJobCards} />
      ) : (
        <JobCardPage setstate={setShowJobCardForm} jobCards={jobCards} setJobCards={setJobCards} />
      )}
    </div>
  )
}
