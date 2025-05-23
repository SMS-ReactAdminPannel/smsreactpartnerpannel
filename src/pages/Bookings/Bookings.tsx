import React, { useState } from 'react';

type BookingStatus = 'Pending' | 'Viewed' | 'Solved';

interface ServiceBooking {
  id: number;
  customerName: string;
  carModel: string;
  servicePurpose: string;
  serviceDateTime: string;
  status: BookingStatus;
}

const initialBookings: ServiceBooking[] = [
  {
    id: 1,
    customerName: 'John Doe',
    carModel: 'Toyota Camry',
    servicePurpose: 'Engine Check',
    serviceDateTime: '2025-05-24T10:00',
    status: 'Pending',
  },
  {
    id: 2,
    customerName: 'Jane Smith',
    carModel: 'Honda Civic',
    servicePurpose: 'Oil Change',
    serviceDateTime: '2025-05-25T14:30',
    status: 'Viewed',
  },
  {
    id: 3,
    customerName: 'Alice Brown',
    carModel: 'BMW X5',
    servicePurpose: 'Brake Repair',
    serviceDateTime: '2025-05-26T09:00',
    status: 'Solved',
  },

   {
    id: 4,
    customerName: 'berlin',
    carModel: 'Audi A4',
    servicePurpose: 'car service',
    serviceDateTime: '2025-05-6T02:00',
    status: 'Solved',
  },
];

const formatDateTime = (dateTime: string) => {
  const date = new Date(dateTime);
  return date.toLocaleString();
};

const ServiceBookingPanel: React.FC = () => {
  const [bookings, setBookings] = useState<ServiceBooking[]>(initialBookings);
  const [selectedBooking, setSelectedBooking] = useState<ServiceBooking | null>(null);

  const updateStatus = (id: number, newStatus: BookingStatus) => {
    setBookings((prev) =>
      prev.map((booking) =>
        booking.id === id ? { ...booking, status: newStatus } : booking
      )
    );
  };

  return (
    <div className="p-2 max-w-6xl mx-auto">
      <h2 className="text-2xl  font-bold text-[#9b111e] mb-4">Service Bookings</h2>

      <div className="space-y-4">
        {bookings.map((booking) => (
          <div
            key={booking.id}
            className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row justify-between gap-4 items-start md:items-center transition transform hover:shadow-lg hover:scale-[1.02] cursor-pointer"

          >
            <div className="flex-1">
              <p className="font-semibold text-lg">
                {booking.customerName} – {booking.carModel}
              </p>
              <p className="text-gray-500">{booking.servicePurpose}</p>
              <p className="text-sm text-gray-600">
                Scheduled: {formatDateTime(booking.serviceDateTime)}
              </p>
              <p
                className={`mt-1 text-sm font-medium ${
                  booking.status === 'Solved'
                    ? 'text-green-600'
                    : booking.status === 'Viewed'
                    ? 'text-yellow-600'
                    : 'text-red-500'
                }`}
              >
                Status: {booking.status}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedBooking(booking)}
                className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 transition text-sm"
              >
                Open Service
              </button>
              <button
                onClick={() => updateStatus(booking.id, 'Viewed')}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition text-sm"
              >
                Mark as Viewed
              </button>
              <button
                onClick={() => updateStatus(booking.id, 'Solved')}
                className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition text-sm"
              >
                Mark as Solved
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl max-w-md w-full shadow-lg">
            <h3 className="text-xl font-bold mb-4">Service Details</h3>
            <p><strong>Customer:</strong> {selectedBooking.customerName}</p>
            <p><strong>Car Model:</strong> {selectedBooking.carModel}</p>
            <p><strong>Purpose:</strong> {selectedBooking.servicePurpose}</p>
            <p><strong>Date & Time:</strong> {formatDateTime(selectedBooking.serviceDateTime)}</p>
            <p>
              <strong>Status:</strong>{' '}
              <span
                className={`font-medium ${
                  selectedBooking.status === 'Solved'
                    ? 'text-green-600'
                    : selectedBooking.status === 'Viewed'
                    ? 'text-yellow-600'
                    : 'text-red-500'
                }`}
              >
                {selectedBooking.status}
              </span>
            </p>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setSelectedBooking(null)}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceBookingPanel;
