import  { useState } from "react";
import ServiceBookingPanel from "../../components/Booking/BookingCom";
import { RiUser6Line } from "react-icons/ri";
import DashboardCard from "../../components/Booking/BookingDashCard/DashCardBooking";
import { COLORS, FONTS } from "../../constants/constants";
import History from "../../components/Booking/BookingHistroy/BookingHistroy";

// Dummy values
const bookingsss = [
  {
    id: 1,
    customerName: "Abishek",
    carModel: "Maruti Suzuki",
    servicePurpose: ["Oil Change", "Brake Check"],
    status: "Solved" as const,
  },
  {
    id: 2,
    customerName: "John",
    carModel: "Hyundai i20",
    servicePurpose: ["Engine Repair"],
    status: "Pending" as const,
  },
];

const Bookings = () => {
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
        {/* Header Row */}
        <h2
          className="text-2xl font-semibold text-[#9b111e]"
          style={{ ...FONTS.header, color: COLORS.primary }}
        >
          Service Bookings
        </h2>

        {/* Toggle History View */}
        <button
          className="bg-[#9b111e] text-white px-4 py-2 rounded-lg shadow hover:bg-[#800f1a] transition font-medium mt-2 md:mt-0"
          onClick={() => setShowHistory(!showHistory)}
        >
          {showHistory ? "Hide History" : "Show History"}
        </button>
      </div>

      {showHistory ? (
        <History bkings={bookingsss} />


      ) : (
        <div className="w-full flex justify-center">
          <div className="w-full max-w-6xl px-1 py-2">
            {/* Dashboard Section */}
            <div className="bg-[#eae5d9] rounded-xl shadow-md p-6 mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
                <DashboardCard
                  icon={<RiUser6Line />}
                  title="Schedule Request"
                  value={20}
                  per={10}
                  perColor="#facc15"
                  borderColor="rgba(234,179,8,0.8)"
                  backgroundColor="#facc15"
                  dataPoints={[1, 3, 2, 5, 4, 6, 5]}
                />
                <DashboardCard
                  icon={<RiUser6Line />}
                  title="Emergency Service"
                  value={10}
                  per={5}
                  perColor="#f87171"
                  borderColor="rgba(248,113,113,0.8)"
                  backgroundColor="#f87171"
                  dataPoints={[2, 1, 4, 3, 5, 2, 1]}
                />
                <DashboardCard
                  icon={<RiUser6Line />}
                  title="Service Requests"
                  value={2}
                  per={5}
                  perColor="#3b82f6"
                  borderColor="rgba(59,130,246,0.8)"
                  backgroundColor="#3b82f6"
                  dataPoints={[1, 2, 1, 6, 4, 3, 6]}
                />
                <DashboardCard
                  icon={<RiUser6Line />}
                  title="Total Transactions"
                  value={22}
                  per={15}
                  perColor="#10b981"
                  borderColor="rgba(16,185,129,0.8)"
                  backgroundColor="#10b981"
                  dataPoints={[1, 5, 2, 4, 3, 5, 6]}
                />
              </div>
            </div>

            {/* Booking Panel */}
            <div className="mb-6 p-4 bg-[#eae5d9] rounded-xl shadow-md">
              <ServiceBookingPanel />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookings;
