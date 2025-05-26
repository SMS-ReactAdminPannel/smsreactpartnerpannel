// import { Card, CardContent } from '../ui/card';
// import { motion } from 'framer-motion';
//  import { ChartCard } from '../LineChart/LineChart';

// interface AltDashboardCardProps {
//   title: string;
//   value: number;
//   icon: React.ReactNode;
//   per: number;
//   perColor: string; // e.g., "green" or "red"
//   borderColor: string;
//   backgroundColor: string;
//   progressValue?: number; // Optional, from 0 to 100
// }

// const AltDashboardCard: React.FC<AltDashboardCardProps> = ({
//   title,
//   value,
//   icon,
//   per,
//   perColor,
//   borderColor,
//   backgroundColor,
//   progressValue = 70,
// }) => {
//   // Determine the text color for the percentage based on perColor string
//   const percentColorClass = perColor === 'green' ? 'text-green-600' : 'text-red-600';

//   return (
//     <motion.div whileHover={{ scale: 1.02 }}>
//       <Card
//         className="rounded-xl shadow-md overflow-hidden"
//         style={{ border: `2px solid ${borderColor}` }}
//       >
//         <CardContent className="p-4">
//           {/* Icon and percentage at top */}
//           <div className="flex items-center justify-between">
//             <div
//               className="p-3 rounded-full text-white"
//               style={{ backgroundColor }}
//             >
//               {icon}
//             </div>
//             <div className={`text-sm font-semibold ${percentColorClass}`}>
//               {per > 0 ? `+${per}%` : `${per}%`}
//             </div>
//           </div>

//           {/* Title and value */}
//           <div className="mt-4">
//             <h3 className="text-md text-gray-500 font-medium">{title}</h3>
//             <p className="text-xl font-bold text-gray-800">{value}</p>
//           </div>

//           {/* Progress bar */}
//           <div className="mt-4">
//             <div className="w-full h-2 bg-gray-200 rounded-full">
//               <div
//                 className="h-full rounded-full transition-all duration-500"
//                 style={{
//                   width: `${progressValue}%`,
//                   backgroundColor,
//                 }}
//               ></div>
//             </div>
//             <p className="text-xs text-gray-400 mt-1">{progressValue}% completed</p>
//           </div>
//         </CardContent>
//       </Card>
//     </motion.div>
//   );
// };

// export default AltDashboardCard;
