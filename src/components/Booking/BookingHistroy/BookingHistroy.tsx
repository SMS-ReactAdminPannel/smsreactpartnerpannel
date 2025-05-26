import React from "react";
//need to get data from bookingCom

type BookingStatus = "Pending" | "Viewed" | "Solved";

interface ServiceBooking {
  id: number;
  customerName: string;
  carModel: string;
  servicePurpose: string[];
  status: BookingStatus;
}
interface HistoryProps {
  bkings: ServiceBooking[];
}

const History: React.FC<HistoryProps> = ({ bkings }) => {
  const completedBookings = bkings.filter(
    (bking) => bking.status === "Solved"
  );


  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-[#9b111e]">Completed Bookings</h2>
      {completedBookings.length === 0 ? (
        <p>No completed bookings yet.</p>
      ) : (
        completedBookings.map((booking) => (
          <div
            key={booking.id}
            className="border p-4 mb-3 rounded-md shadow-sm bg-green-50"
          >
            <p><strong className="text-[#E6A895]">Customer:</strong> {booking.customerName}</p>
            <p><strong className="text-[#E6A895]">Car Model:</strong> {booking.carModel}</p>
            <p><strong className="text-[#E6A895]">Purpose:</strong> {booking.servicePurpose.join(", ")}</p>
            <p className="text-green-600"><strong>Status:</strong> {booking.status}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default History;
