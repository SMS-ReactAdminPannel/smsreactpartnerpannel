
import { AiOutlineCopyrightCircle, AiOutlineDashboard } from 'react-icons/ai';
import { COLORS, FONTS } from '../../constants/constants';
import DashboardCard from '../../components/dashboard/DashboradCard/DashboradCard';
import { Card, CardContent } from '../../components/dashboard/ui/card';
import {
   AiOutlineThunderbolt, 
  AiOutlineClockCircle, 
  AiFillCheckCircle,        
  AiOutlineUser,    
} from 'react-icons/ai';


import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	LineChart,
	Line,
} from 'recharts';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
// import { useState, useEffect, useRef } from 'react';


const dailyRevenueData = [
  { day: 'Mon', revenue: 500 },
  { day: 'Tue', revenue: 700 },
  { day: 'Wed', revenue: 600 },
  { day: 'Thu', revenue: 800 },
  { day: 'Fri', revenue: 750 },
  { day: 'Sat', revenue: 900 },
  { day: 'Sun', revenue: 650 },
];

const weeklyRevenueData = [
  { week: 'Week 1', revenue: 3500 },
  { week: 'Week 2', revenue: 4200 },
  { week: 'Week 3', revenue: 3900 },
  { week: 'Week 4', revenue: 4800 },
  { week: 'Week 5', revenue: 5300 },
  { week: 'Week 6', revenue: 6000 },
];

const monthlyRevenueData = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 5000 },
  { month: 'Apr', revenue: 4000 },
  { month: 'May', revenue: 6000 },
  { month: 'Jun', revenue: 8000 },
];

//  spare parts revenue data
const dailySparePartsRevenueData = [
  { day: 'Mon', sparePartsRevenue: 200 },
  { day: 'Tue', sparePartsRevenue: 300 },
  { day: 'Wed', sparePartsRevenue: 250 },
  { day: 'Thu', sparePartsRevenue: 350 },
  { day: 'Fri', sparePartsRevenue: 300 },
  { day: 'Sat', sparePartsRevenue: 400 },
  { day: 'Sun', sparePartsRevenue: 320 },
];

const weeklySparePartsRevenueData = [
  { week: 'Week 1', sparePartsRevenue: 1500 },
  { week: 'Week 2', sparePartsRevenue: 1700 },
  { week: 'Week 3', sparePartsRevenue: 1600 },
  { week: 'Week 4', sparePartsRevenue: 1800 },
  { week: 'Week 5', sparePartsRevenue: 2100 },
  { week: 'Week 6', sparePartsRevenue: 2300 },
];

const monthlySparePartsRevenueData = [
  { month: 'Jan', sparePartsRevenue: 1600 },
  { month: 'Feb', sparePartsRevenue: 1400 },
  { month: 'Mar', sparePartsRevenue: 2000 },
  { month: 'Apr', sparePartsRevenue: 1800 },
  { month: 'May', sparePartsRevenue: 2200 },
  { month: 'Jun', sparePartsRevenue: 2700 },
];

const bookingData = [
	{ name: 'Service A', bookings: 240 },
	{ name: 'Service B', bookings: 130 },
	{ name: 'Service C', bookings: 90 },
	{ name: 'Service D', bookings: 25 },
	{ name: 'Service E', bookings: 50 },
];



const Dashboard = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [highlight, setHighlight] = useState(true);
	const bookingsRef = useRef<HTMLDivElement | null>(null);
	const [period, setPeriod] = useState<'daily' | 'weekly' | 'monthly'>('daily');


	useEffect(() => {
		const scrollTimeout = setTimeout(() => {
			if (bookingsRef.current) {
				bookingsRef.current.scrollIntoView({
					behavior: 'smooth',
					block: 'center',
				});
			}
		}, 100);

	// 	const resetTimeout = setTimeout(() => {
	// 		setHighlight(false);

	// 		setTimeout(() => {
	// 			window.scrollTo({ top: -10, behavior: 'smooth' });
	// 		}, 100);
	// 	}, 3000);

	// 	return () => {
	// 		clearTimeout(scrollTimeout);
	// 		clearTimeout(resetTimeout);
	// 	};
	// }, [location.key]);

  

  // Combine revenue and spare parts revenue data for the selected period
  let data = [];
  let xDataKey = '';

  if (period === 'daily') {
    data = dailyRevenueData.map((item, index) => ({
      ...item,
      sparePartsRevenue: dailySparePartsRevenueData[index]?.sparePartsRevenue || 0,
    }));
    xDataKey = 'day';
  } else if (period === 'weekly') {
    data = weeklyRevenueData.map((item, idx) => ({
      ...item,
      sparePartsRevenue: weeklySparePartsRevenueData[idx]?.sparePartsRevenue || 0,
    }));
    xDataKey = 'week';
  } else {
    data = monthlyRevenueData.map((item, idx) => ({
      ...item,
      sparePartsRevenue: monthlySparePartsRevenueData[idx]?.sparePartsRevenue || 0,
    }));
    xDataKey = 'month';
  }
	return (
		<div className='w-full px-4 py-6 -mt-6 dashboard'>
			{/* Header */}
			<div className='rounded-xl shadow-md bg-white pb-4 mb-4'>
				<p
					className='text-xl font-semibold pl-6 py-3 '
					style={{ ...FONTS.header, color: COLORS.primary, fontWeight: 600 }}
				>
					Overview of our services
				</p>
				<p
					className='text-gray-500 text-sm pb-5 pl-7'
					style={{ ...FONTS.paragraph, color: COLORS.secondary }}
				>
					Get your Service details latest update for the last 7 days
				</p>

				{/* Dashboard Cards */}
				<div className='mx-1 justify-center items-center px-2'>
					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-10'>
						<DashboardCard
							icon={< AiOutlineThunderbolt  />}
							title='Active Services'
							value={10}
							per={10}
							perColor='#facc15'
							borderColor='rgba(234,179,8,0.8)'
							backgroundColor='#facc15'
							dataPoints={[1, 5, 1, 5]}
						/>
						<DashboardCard
							icon={< AiOutlineClockCircle />}
							title='Pending Services'
							value={2}
							per={-5}
							perColor='#f87171'
							borderColor='rgba(248,113,113,0.8)'
							backgroundColor='#f87171'
							dataPoints={[6, 5, 4, 4, 4, 4, 4.5, 1]}
						/>
						<DashboardCard
							icon={<AiFillCheckCircle />}
							title='Completed Services'
							value={10}
							per={5}
							perColor='#3b82f6'
							borderColor='rgba(59,130,246,0.8)'
							backgroundColor='#3b82f6'
							dataPoints={[1, 4, 3, 3, 3, 3, 5]}
							
						/>
						<DashboardCard
							icon={<AiOutlineDashboard  />}
							title='Overall Services'
							value={22}
							per={15}
							perColor='#10b981'
							borderColor='rgba(16,185,129,0.8)'
							backgroundColor='#10b981'
							dataPoints={[1, 5, 2, 4, 3, 5, 6]}
						/>
					</div>
				</div>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 my-3'>
				  <motion.div whileHover={{ scale: 1.02 }}>
      <Card className="rounded-2xl shadow-lg">
        <CardContent>
          <div className="flex justify-between items-center mb-4">
            <h2
              style={{
                ...FONTS.paragraph,
                fontSize: '18px',
                color: COLORS.primary,
                fontWeight: 500,
              }}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)} Revenue
            </h2>
            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value as 'daily' | 'weekly' | 'monthly')}
              className="border rounded px-2 py-1"
              aria-label="Select period"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </div>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <XAxis dataKey={xDataKey} />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#F49BAB"
                strokeWidth={2}
                name="Revenue"
              />
              <Line
                type="monotone"
                dataKey="sparePartsRevenue"
                stroke="#4CAF50"
                strokeWidth={2}
                name="Spare Parts Revenue"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>

				<motion.div whileHover={{ scale: 1.02 }}>
					<Card className='rounded-2xl shadow-lg'>
						<CardContent>
							<h2
								className='mb-4'
								style={{
									...FONTS.paragraph,
									fontSize: '18px',
									color: COLORS.primary,
									fontWeight: 500,
								}}
							>
								Service Bookings
							</h2>
							<ResponsiveContainer width='100%' height={250}>
								<BarChart data={bookingData}>
									<XAxis dataKey='name' />
									<YAxis />
									<Tooltip />
									<Bar dataKey='bookings' fill='#FFDBDB' />
								</BarChart>
							</ResponsiveContainer>
						</CardContent>
					</Card>
				</motion.div>

			

				<motion.div
					whileHover={{}}
					className='md:col-span-2 xl:col-span-3'
					// ref={bookingsRef}
				>
					<Card
						className={`transition-all duration-500 p-4 rounded-xl
							${NaN ? 'ring-4 ring-yellow-400 bg-yellow-100' : ''}
						`}
					>
						<CardContent>
							<h2
								className='mb-4'
								style={{
									...FONTS.paragraph,
									fontSize: '18px',
									color: COLORS.primary,
									fontWeight: 500,
								}}
							>
								Recent Bookings
							</h2>
							<div className='overflow-x-auto'>
								<table className='table-auto w-full min-w-max border-collapse'>
									<thead>
										<tr className='bg-gray-100 text-left'>
											<th
												className='p-2'
												style={{
													...FONTS.paragraph,
													fontSize: '16px',
													color: COLORS.primary,
												}}
											>
												Customer
											</th>
											<th
												className='p-2 relative'
												style={{
													...FONTS.paragraph,
													fontSize: '16px',
													color: COLORS.primary,
												}}
											>
												Service
												<span className='absolute top-1 bg-green-100 text-green-600 text-[10px] font-semibold px-2 py-1 rounded-full shadow-sm ml-1'>
													New Bookings
												</span>
											</th>
											<th
												className='p-2'
												style={{
													...FONTS.paragraph,
													fontSize: '16px',
													color: COLORS.primary,
												}}
											>
												Date
											</th>
											<th
												className='p-2'
												style={{
													...FONTS.paragraph,
													fontSize: '16px',
													color: COLORS.primary,
												}}
											>
												Time
											</th>
											<th
												className=''
												style={{
													...FONTS.paragraph,
													fontSize: '16px',
													color: COLORS.primary,
												}}
											>
												Details
											</th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td className='p-2'>John Doe</td>
											<td className='p-2'>Oil Change</td>
											<td className='p-2'>2025-05-20</td>
											<td className='p-2'>9:30 am</td>
											<td>
												<button
													className='bg-[#9b111e] px-2 py-1 rounded'
													onClick={() => navigate('/service')}
													style={{ ...FONTS.paragraph, color: COLORS.white }}
												>
													View
												</button>
											</td>
										</tr>
										<tr>
											<td className='p-2'>Jane Smith</td>
											<td className='p-2'>Brake Inspection</td>
											<td className='p-2'>2025-05-22</td>
											<td className='p-2'>1:45 am</td>
											<td>
												<button
													className='bg-[#9b111e] px-2 py-1 rounded'
													style={{ ...FONTS.paragraph, color: COLORS.white }}
													onClick={() => navigate('/service')}
												>
													View
												</button>
											</td>
										</tr>
										<tr>
											<td className='p-2'>Bob Johnson</td>
											<td className='p-2'>Tire Rotation</td>
											<td className='p-2'>2025-05-23</td>
											<td className='p-2'>8:10 pm</td>
											<td>
												<button
													className='bg-[#9b111e] px-2 py-1 rounded'
													onClick={() => navigate('/service')}
													style={{ ...FONTS.paragraph, color: COLORS.white }}
												>
													View
												</button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</CardContent>
					</Card>
				</motion.div>
			</div>

			{/* Footer */}
			<footer className='bg-white shadow-md rounded-xl p-4 w-full text-center my-6 -mb-8'>
				<div>
					<div className='flex items-center justify-center space-x-1'>
						<AiOutlineCopyrightCircle color={COLORS.primary} size={18} />
						<span style={{ color: COLORS.primary }}>YesMechanic Partner</span>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Dashboard;
