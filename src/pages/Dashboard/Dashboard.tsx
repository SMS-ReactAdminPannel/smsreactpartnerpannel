import { RiUser6Line } from 'react-icons/ri';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { COLORS, FONTS } from '../../constants/constants';
import DashboardCard from '../../components/dashboard/DashboradCard/DashboradCard';
import { Card, CardContent } from '../../components/dashboard/ui/card';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	LineChart,
	Line,
	PieChart,
	Pie,
	Cell,
} from 'recharts';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
// import { useState, useEffect, useRef } from 'react';

const revenueData = [
	{ month: 'Jan', revenue: 4000 },
	{ month: 'Feb', revenue: 3000 },
	{ month: 'Mar', revenue: 5000 },
	{ month: 'Apr', revenue: 4000 },
	{ month: 'May', revenue: 6000 },
	{ month: 'Jun', revenue: 8000 },
];

const bookingData = [
	{ name: 'Service A', bookings: 240 },
	{ name: 'Service B', bookings: 130 },
	{ name: 'Service C', bookings: 90 },
	{ name: 'Service D', bookings: 25 },
	{ name: 'Service E', bookings: 50 },
];

const COLORS_01 = ['#8884d8', '#82ca9d', '#FFE99A', '#9EBC8A', '#F79B72'];

const Dashboard = () => {
	const navigate = useNavigate();
	// const location = useLocation();
	// const [highlight, setHighlight] = useState(true);
	// const bookingsRef = useRef<HTMLDivElement | null>(null);

	// useEffect(() => {
	// 	const scrollTimeout = setTimeout(() => {
	// 		if (bookingsRef.current) {
	// 			bookingsRef.current.scrollIntoView({
	// 				behavior: 'smooth',
	// 				block: 'center',
	// 			});
	// 		}
	// 	}, 100);

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
							icon={<RiUser6Line />}
							title='Active Services'
							value={10}
							per={10}
							perColor='#facc15'
							borderColor='rgba(234,179,8,0.8)'
							backgroundColor='#facc15'
							dataPoints={[1, 5, 1, 5]}
						/>
						<DashboardCard
							icon={<RiUser6Line />}
							title='Pending Services'
							value={2}
							per={-5}
							perColor='#f87171'
							borderColor='rgba(248,113,113,0.8)'
							backgroundColor='#f87171'
							dataPoints={[6, 5, 4, 4, 4, 4, 4.5, 1]}
						/>
						<DashboardCard
							icon={<RiUser6Line />}
							title='Completed Services'
							value={10}
							per={5}
							perColor='#3b82f6'
							borderColor='rgba(59,130,246,0.8)'
							backgroundColor='#3b82f6'
							dataPoints={[1, 4, 3, 3, 3, 3, 5]}
						/>
						<DashboardCard
							icon={<RiUser6Line />}
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

			<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-3'>
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
								Monthly Revenue
							</h2>
							<ResponsiveContainer width='100%' height={200}>
								<LineChart data={revenueData}>
									<XAxis dataKey='month' />
									<YAxis />
									<Tooltip />
									<Line
										type='monotone'
										dataKey='revenue'
										stroke='#F49BAB'
										strokeWidth={2}
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
							<ResponsiveContainer width='100%' height={200}>
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
								Booking Share
							</h2>
							<ResponsiveContainer width='100%' height={200}>
								<PieChart>
									<Pie
										data={bookingData}
										cx='50%'
										cy='50%'
										outerRadius={70}
										dataKey='bookings'
										label
									>
										{bookingData.map((_, index) => (
											<Cell
												key={`cell-${index}`}
												fill={COLORS_01[index % COLORS_01.length]}
											/>
										))}
									</Pie>
									<Tooltip />
								</PieChart>
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
