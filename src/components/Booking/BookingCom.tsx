import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { COLORS } from "../../constants/constants";

type BookingStatus = "Pending" | "Viewed" | "Solved";

interface ServiceBooking {
  id: number;
  customerName: string;
  carModel: string;
  servicePurpose: string[];
  serviceDateTime: string;
  status: BookingStatus;
}

const initialBookings: ServiceBooking[] = [
  {
    id: 1,
    customerName: "John Doe",
    carModel: "Toyota Camry",
    servicePurpose: [
      "Engine oil",
      "tyre",
      "headlight",
      "fuse change",
      "full normal check up",
    ],
    serviceDateTime: "2025-05-24T10:30",
    status: "Pending",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    carModel: "Honda Civic",
    servicePurpose: ["Oil Change", "water Wash", "tyre check-up"],
    serviceDateTime: "2025-05-25T14:30",
    status: "Viewed",
  },
  {
    id: 3,
    customerName: "Alice Brown",
    carModel: "BMW X5",
    servicePurpose: ["Brake Repair", "full wash", "inside cleaing"],
    serviceDateTime: "2025-05-26T09:00",
    status: "Solved",
  },
  {
    id: 4,
    customerName: "Berlin",
    carModel: "Audi A4",
    servicePurpose: ["Car Service"],
    serviceDateTime: "2025-05-26T02:00",
    status: "Solved",
  },
];

const formatDateTime = (dateTime: string) => {
  const date = new Date(dateTime);
  return date.toLocaleString();
};

const ServiceBookingPanel: React.FC = () => {
  const [bookings, setBookings] = useState<ServiceBooking[]>(initialBookings);
  const [selectedBooking, setSelectedBooking] = useState<ServiceBooking | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  // const navigate=useNavigate();
  const handleClick = () => {
    setIsVisible(true);
  };

  const updateStatus = (id: number, newStatus: BookingStatus) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === id ? { ...booking, status: newStatus } : booking
      )
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Backspace" && selectedBooking) {
        setSelectedBooking(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedBooking]);

  return (
    <div className="p-2 lg:max-w-6xl mx-auto md:max-w-full">
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-[#9b111e]" style={{color:COLORS.primary}}>Slot Bookings</h2>
        </div>
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-[#FAF3EB] rounded-xl shadow p-6 flex flex-col md:flex-row justify-between gap-4 items-start md:items-center hover:shadow-lg hover:scale-[1.02] transition cursor-pointer"
          >
            <div className="flex-1">
              <p className="font-semibold text-lg text-[#9b111e]">
                {booking.customerName} – {booking.carModel}
              </p>
              <p className="text-[#E6A895]">{booking.servicePurpose.join(", ")}</p>
              <p className="text-sm text-[#E6A895]">
                Scheduled: {formatDateTime(booking.serviceDateTime)}
              </p>
              <p
                className={`mt-1 text-sm font-medium ${
                  booking.status === "Solved"
                    ? "text-green-600"
                    : booking.status === "Viewed"
                    ? "text-yellow-600"
                    : "text-red-500"
                }`}
              >
                Status: {booking.status}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedBooking(booking)}
                className="bg-[#55ACEE] text-white px-3 py-1 rounded hover:bg-[#0F7DC7] transition text-sm"
              >
                Open Service
              </button>
              <button
                onClick={() => updateStatus(booking.id, "Viewed")}
                className="bg-[#F2E394] text-white px-3 py-1 rounded hover:bg-[#FFBB00] transition text-sm"
              >
                Mark as Viewed
              </button>
              <button
                onClick={() => updateStatus(booking.id, "Solved")}
                className="bg-[#86AF49] text-white px-3 py-1 rounded hover:bg-[#34A853] transition text-sm"
              >
                Completed
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedBooking && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center md:overflow-auto"
          onClick={() => setSelectedBooking(null)}
        >
          <div
            className="p-6 rounded-xl max-w-5xl w-full h-3/4 shadow-lg grid lg:grid-cols-2 md:grid-cols-2 gap-4 overflow-y-auto md:max-h-[90vh] md:m-10"
            onClick={(e) => e.stopPropagation()}
            style={{ backgroundColor: COLORS.bgColor }}
          >
            {/* Left Column */}
            <div className="grid lg:grid-rows-2 md:grid-cols-1 p-4 overflow-auto bg-[#FBFBFB] rounded-xl shadow-xl ">
              <div className="cursor-default p-4">
                <h3 className="text-2xl font-bold mb-4 text-[#9b111e]">Service Details</h3>
                <p>
                  <strong className="text-[#E6A895]">Customer:</strong> {selectedBooking.customerName}
                </p>
                <p>
                  <strong className="text-[#E6A895]">Car Model:</strong> {selectedBooking.carModel}
                </p>
                <p>
                  <strong className="text-[#E6A895]">Date & Time:</strong> {formatDateTime(selectedBooking.serviceDateTime)}
                </p>
                <p>
                  <strong className="text-[#E6A895]">Status:</strong>{" "}
                  <span
                    className={`font-medium ${
                      selectedBooking.status === "Solved"
                        ? "text-green-600"
                        : selectedBooking.status === "Viewed"
                        ? "text-yellow-600"
                        : "text-red-500"
                    }`}
                  >
                    {selectedBooking.status}
                  </span>
                </p>
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <h4 className="font-semibold mb-2 text-[#9b111e]">Services</h4>
                <div className="space-y-2 overflow-y-auto flex-1 pr-1 max-h-64">
                  {selectedBooking.servicePurpose.map((purpose, index) => (
                    <div key={index} className="bg-gray-100 hover:scale-[1.022] rounded p-3 text-sm shadow-sm">
                      <p
                        onClick={() => {
                          setSelectedService(purpose);
                          handleClick();
                        }}
                        className="cursor-pointer"
                      >
                        {purpose}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="p-4 flex flex-col justify-between bg-[#FBFBFB] rounded-xl shadow-xl  overflow-auto">
              <div className=" ">
                {selectedService && isVisible ? (
                  <div className="cursor-default">
                    <h4 className="text-2xl font-bold text-[#9b111e] ">Service Preview</h4>
                    <p className="text-xl mt-2 text-[#E6A895]">{selectedService}</p>
                    <div className="mt-8 space-y-4">
                      {["In-Process", "Pending", "Completed"].map((label, i) => (
                        <div key={i} className="flex flex-col md:flex-row justify-between p-4 gap-3 md:h-20 ">
                          <button
                            className={`${
                              label === "In-Process"
                                ? "bg-[#55ACEE] hover:bg-[#0F7DC7]"
                                : label === "Pending"
                                ? "bg-[#F2E394] hover:bg-[#FFBB00]"
                                : "bg-[#86AF49] hover:bg-[#34A853]"
                            } text-white w-32 px-3 py-2 rounded-lg shadow transition font-medium md:text-sm`}
                          >
                            {label}
                          </button>
                          <textarea
                            placeholder="Text..."
                            className="w-full border p-2 rounded resize-none"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p>Select a service to preview...</p>
                )}
              </div>
              <div className="flex justify-end  gap-3">
                <button
                  // onClick={() => setSelectedBooking(null)}
                  className=" text-white px-4 py-2 rounded hover:bg-red-900 transition bg-[#C5172E]"
                >
                  Save
                </button>
                <button
                  onClick={() => setSelectedBooking(null)}
                  className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceBookingPanel;
