import React, { useState } from "react";
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
      "fuse change ",
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
//   const navigate = useNavigate();
  const [bookings, setBookings] = useState<ServiceBooking[]>(initialBookings);
  const [selectedBooking, setSelectedBooking] = useState<ServiceBooking | null>(
    null
  );
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const updateStatus = (id: number, newStatus: BookingStatus) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === id ? { ...booking, status: newStatus } : booking
      )
    );
  };

  return (
    <div className="p-2 lg:max-w-6xl mx-auto md:max-w-xl ">
      <div className="space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-[#FAF3EB] rounded-xl shadow p-6 flex flex-cols md:flex-row justify-between gap-4 items-start md:items-center transition transform hover:shadow-lg hover:scale-[1.02] cursor-pointer"
          >
            <div className="flex-1">
              <p className="font-semibold text-lg ">
                {booking.customerName} – {booking.carModel}
              </p>
              <p className="text-gray-500 words-clamp-2">
                {booking.servicePurpose.join(", ")}
              </p>
              <p className="text-sm text-gray-600">
                Scheduled: {formatDateTime(booking.serviceDateTime)}
              </p>
              <p
                className={`mt-1 text-sm font-medium ${
                  booking.status === "Solved"
                    ? "text-green-200"
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
        // overall modal
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center ">
          <div
            className=" p-10 rounded-xl max-w-5xl w-full h-3/4 shadow-lg grid lg:grid-cols-2 gap-2 md:grid-cols-1 md:overflow-auto "
            style={{ backgroundColor: COLORS.bgColor }}
          >
            {/* Left section - Service Details & Scrollable Content */}
            <div className="grid lg:grid-rows-2 md:grid-cols-1  p-4 overflow-auto bg-[#FBFBFB] rounded-xl shadow-xl">
              {/* Service Details */}
              <div className="cursor-default p-4">
                <h3 className="text-2xl font-bold mb-4 text-[#9b111e]">Service Details</h3>
                <p>
                  <strong className="text-[#E6A895] ">Customer:</strong> {selectedBooking.customerName}
                </p>
                <p>
                  <strong className="text-[#E6A895]" >Car Model:</strong> {selectedBooking.carModel}
                </p>

                <p>
                  <strong className="text-[#E6A895]">Date & Time:</strong>{" "}
                  {formatDateTime(selectedBooking.serviceDateTime)}
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

              {/* Scrollable Area */}
              <div className="p-4 flex-1 flex flex-col">
                <h4 className="font-semibold mb-2 cursor-default text-[#9b111e]">Services</h4>

                {/* Scrollable list only */}
                <div className="space-y-2 overflow-y-auto flex-1 pr-1 ">
                  {selectedBooking.servicePurpose.map((purpose, index) => (
                    <div
                      key={index}
                      className="bg-gray-100 rounded p-3 text-sm shadow-sm  "
                    >
                      <p onClick={() => setSelectedService(purpose)} className="cursor-pointer">
                        {purpose}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right section - Preview + Close Button */}
            <div className=" p-4 flex flex-col justify-between bg-white rounded-xl shadow-xl  ">
              <div >
                {selectedService ? (
                  <div className="cursor-default">
                    <h4 className="text-2xl font-bold text-[#9b111e] ">Service Preview</h4>
                    <p className="text-2xl mt-2 text-[#E6A895]">{selectedService}</p>
                    <div className=" mt-10">
                        <div className=" ">
                            <div className="flex flex-rows justify-between p-4">
                                <button className="bg-[#55ACEE] text-white w-32 px-4 py-2 rounded-lg shadow  hover:bg-[#0F7DC7] transition font-medium mt-2 md:mt-0 " >In-Process</button>
                                <textarea name="" id="" placeholder="Text...."></textarea>
                            </div>
                        </div>
                        <div>
                            <div className="flex flex-rows justify-between p-4">
                                <button className="bg-[#F2E394] text-white w-32 px-4 py-2 rounded-lg shadow hover:bg-[#FFBB00] transition font-medium mt-2 md:mt-0">Pending</button>
                                <textarea name="" id="" placeholder="Text...."></textarea>

                            </div>
                        </div>
                        <div>
                            <div className="flex flex-rows justify-between p-4">
                                <button className="bg-[#86AF49] text-white w-32 px-4 py-2 rounded-lg shadow hover:bg-[#34A853] transition font-medium mt-2 md:mt-0">Completed</button>
                                <textarea name="" id="" placeholder="Text...."></textarea>
                            </div>
                        </div>
                    </div>
                  </div>
                ) : (
                  <p>Select a service to preview...</p>

                )}
              </div>
              <div className="flex justify-end gap-2">
                {/* <button
                  onClick={() => navigate(-1)}
                  className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                >
                  Back
                </button> */}
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
