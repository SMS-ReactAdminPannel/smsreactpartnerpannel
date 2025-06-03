import  { useEffect, useState } from "react";
import { COLORS, FONTS } from "../../constants/constants";

//getting file
import ServiceBookingPanel from "../../components/Booking/BookingCom";
import DashboardCard from "../../components/Booking/BookingDashCard/DashCardBooking";
import History from "../../components/Booking/BookingHistroy/BookingHistroy";

//icons
import { MdCollectionsBookmark } from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { GiIncomingRocket } from "react-icons/gi";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { getAllBookings } from "./services";


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
  const [bookings, setBookings] = useState<any[]>([]); 

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response: any = await getAllBookings('');
        console.log(response.data.data);
      } catch (error) {
        console.log("Error fetching bookings:", error);
      }
    };
    fetchBookings();
  }, []);

  return (
    <div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6 m-5">
        {/* Header Row */}
        <h2
          className="text-2xl font-semibold text-[#9b111e] ml-4"
          style={{ ...FONTS.header, color: COLORS.primary }}
        >
          Service Bookings
        </h2>

        {/* Toggle History View */}
        <button
          className="bg-[#9b111e] text-white px-4 py-2 rounded-lg shadow hover:bg-[#800f1a] transition font-medium mt-2 md:mt-0 "
          onClick={() => setShowHistory(!showHistory)}
        >
          {showHistory ? "Back" : "Completed Booking"}
        </button>
      </div>

      {showHistory ? (
        <History bkings={bookingsss}  />


      ) : (
        <div className="w-full flex justify-center m-3  ">
          <div className="w-full max-w-7xl px-4 py-2 ml-3  ">
            {/* Dashboard Section */}
            <div className="bg-[#eae5d9] rounded-xl shadow-md p-6 mb-6 md:p-3 mx-4 justify-center items-center px-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-10">
                <DashboardCard
                  icon={<GiIncomingRocket />}
                  title="In-Coming"
                  value={20}
                  per={10}
                  perColor="#facc15"
                  borderColor="rgba(234,179,8,0.8)"
                  backgroundColor="#facc15"
                  dataPoints={[1, 3, 2, 5, 4, 6, 5]}
                />
                <DashboardCard
                  icon={<IoCheckmarkDoneCircleOutline />}
                  title="Completed"
                  value={10}
                  per={5}
                  perColor="#f87171"
                  borderColor="rgba(248,113,113,0.8)"
                  backgroundColor="#f87171"
                  dataPoints={[2, 1, 4, 3, 5, 2, 1]}
                />
                <DashboardCard
                  icon={<AiOutlineLoading3Quarters />}
                  title="In-Process"
                  value={2}
                  per={50}
                  perColor="#3b82f6"
                  borderColor="rgba(59,130,246,0.8)"
                  backgroundColor="#3b82f6"
                  dataPoints={[1, 2, 1, 6, 4, 3, 6]}
                />
                <DashboardCard
                  icon={<MdCollectionsBookmark />}
                  title="Total-Booking"
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
            <div className="mb-6 p-4 bg-[#eae5d9] rounded-xl shadow-md mx-4 justify-center items-center px-1">
              <ServiceBookingPanel />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Bookings;
