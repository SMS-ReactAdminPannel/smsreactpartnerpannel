import React from 'react';




// import { TiUserAddOutline } from "react-icons/ti"; // add services
// import { IoCart } from "react-icons/io5"; // total car
// import { MdOutlineLocalCarWash } from "react-icons/md"; //pending
<link href="https://cdn.jsdelivr.net/npm/flowbite@3.1.2/dist/flowbite.min.css" rel="stylesheet" />
import { FaCar } from "react-icons/fa";
import DashboardCard from '../../components/defaultgraph/graph';
import { RiUser6Line } from 'react-icons/ri';


const Dashboard = () => {

	return (

		<div >
			<p className='font-semibold text-4xl text-red-700  '>Dashboard</p>


			{/*  HEADING START */}
			<div className='flex space-x-3.5 pt-5 px-1 shadow-2xl  ' >
				<div >
					<div className='border-2   bg-white text-red-700 w-64 h-21 text-center  
					      hover:scale-105 shadow-xl rounded-2xl '>Active Services
						{/* GRAPH START */}


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

						{/* GRAPH END */}


					</div>
				</div>
				<div>
					<div className='border  bg-white text-red-700  w-64 h-20 text-center rounded-2xl hover:scale-105 shadow-xl'>Pending Services</div>
				</div>
				<div>
					<div className='border  bg-white text-red-700  w-64 h-20 text-center rounded-2xl hover:scale-105 shadow-xl'>Completed Services</div>
				</div>
				<div>
					<div className='border bg-white   text-red-700  w-64 h-20  text-center rounded-2xl hover:scale-105 shadow-xl'>Overall Services</div>
				</div>

			</div>
			{/*  HEADING END */}


			<div >
				<div className="relative overflow-x-auto shadow-5xl sm:rounded-lg  ">
					<table className="w-8/1  text-left rtl:text-right
				 text-red-400  rounded-lg  my-4 ">


						<thead className="text-sm text-red-700 uppercase 
						  bg-white ">
							<tr >
								<th scope="col" className="px-6 py-3 hover:bg-red-900  hover:text-white ">
									Customer
								</th>
								<th scope="col" className="px-6 py-3 hover:bg-red-900 hover:text-white ">
									Location
								</th>
								<th scope="col" className="px-6 py-3 hover:bg-red-900 hover:text-white ">
									Service Details
								</th>
								<th scope="col" className="px-6 py-3 hover:bg-red-900 hover:text-white ">
									Service cost
								</th>
								<th scope="col" className="px-6 py-3 hover:bg-red-900 hover:text-white">
									Service Status
								</th>
							</tr>
						</thead>
						<tbody>
							<tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700
							 border-gray-200 hover:bg-red-100   hover:scale-95 shadow-2xl ">
								<th scope="row" className="px-6 py-4 font-medium text-red-700 whitespace-nowrap dark:text-white  ">
									varun
								</th>
								<td className="px-6 py-4 ">
									chennai
								</td>
								<td className="px-6 py-4 text-sm">
									<p className='text-left'>order id #656755</p>
									<div className='flex flex-row gap-x-3 '>
										<div>
											<FaCar className='text-left w-6 h-6' />
										</div>
										<div className='text-center'>
											<p >Body dent </p>
											<p >1.5k</p>
										</div>

									</div>

								</td>
								<td className="px-6 py-4">
									$2999
								</td>
								<td className="px-6 py-4">
									<button type="button" className="text-white bg-gradient-to-r from-red-600 via-red-500
									 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
									  focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg 
									  dark:shadow-red-800/80 font-medium rounded-lg text-sm px-0.5 py-1 text-center me-2 mb-2">VIEW</button>

								</td>
							</tr>
							<tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b
							 dark:border-gray-700 border-gray-200 hover:bg-red-100 hover:scale-95 shadow-2xl">
								<th scope="row" className="px-6 py-4 font-medium text-red-700 whitespace-nowrap dark:text-white">
									lokesh
								</th>
								<td className="px-6 py-4">
									coimbatore
								</td>
								<td className="px-6 py-4 text-sm">
									<p className='text-left'>order id #656755</p>
									<div className='flex flex-row gap-x-3 '>
										<div>
											<FaCar className='text-left w-6 h-6' />
										</div>
										<div className='text-center'>
											<p >Body dent </p>
											<p >1.5k</p>
										</div>

									</div>

								</td>
								<td className="px-6 py-4">
									$1999
								</td>
								<td className="px-6 py-4">
									<button type="button" className="text-white bg-gradient-to-r from-red-600 via-red-500
									 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
									  focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg 
									  dark:shadow-red-800/80 font-medium rounded-lg text-sm px-0.5 py-1 text-center me-2 mb-2">VIEW</button>

								</td>
							</tr>
							<tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b
							 dark:border-gray-700 border-gray-200 hover:bg-red-100 hover:scale-95 shadow-2xl">
								<th scope="row" className="px-6 py-4 font-medium text-red-700 whitespace-nowrap dark:text-white">
									Magic Mouse 2
								</th>
								<td className="px-6 py-4">
									bangalore
								</td>
								<td className="px-6 py-4 text-sm">
									<p className='text-left'>order id #656755</p>
									<div className='flex flex-row gap-x-3 '>
										<div>
											<FaCar className='text-left w-6 h-6' />
										</div>
										<div className='text-center'>
											<p >Body dent </p>
											<p >1.5k</p>
										</div>

									</div>

								</td>
								<td className="px-6 py-4">
									$99
								</td>
								<td className="px-6 py-4">
									<button type="button" className="text-white bg-gradient-to-r from-red-600 via-red-500
									 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
									  focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg 
									  dark:shadow-red-800/80 font-medium rounded-lg text-sm px-0.5 py-1 text-center me-2 mb-2">VIEW</button>

								</td>
							</tr>
							<tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b
							 dark:border-gray-700 border-gray-200 hover:bg-red-100 hover:scale-95 shadow-2xl">
								<th scope="row" className="px-6 py-4 font-medium text-red-700 whitespace-nowrap dark:text-white">
									Apple Watch 5
								</th>
								<td className="px-6 py-4">
									coimbatore
								</td>
								<td className="px-6 py-4 text-sm">
									<p className='text-left'>order id #656755</p>
									<div className='flex flex-row gap-x-3 '>
										<div>
											<FaCar className='text-left w-6 h-6' />
										</div>
										<div className='text-center'>
											<p >Body dent </p>
											<p >1.5k</p>
										</div>

									</div>

								</td>
								<td className="px-6 py-4">
									$999
								</td>
								<td className="px-6 py-4">

									<button type="button" className="text-white bg-gradient-to-r from-red-600 via-red-500
									 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
									  focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg 
									  dark:shadow-red-800/80 font-medium rounded-lg text-sm px-0.5 py-1 text-center me-2 mb-2">VIEW</button>
								</td>
							</tr>

							<tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b
							 hover:scale-95 shadow-2xl dark:border-gray-700 border-gray-200 hover:bg-red-100">
								<th scope="row" className="px-6 py-4 font-medium text-red-700 whitespace-nowrap dark:text-white">
									Google Pixel Phone
								</th>
								<td className="px-6 py-4">
									pondycherry
								</td>
								<td className="px-6 py-4 text-sm">
									<p className='text-left'>order id #656755</p>
									<div className='flex flex-row gap-x-3 '>
										<div>
											<FaCar className='text-left w-6 h-6' />
										</div>
										<div className='text-center'>
											<p >Body dent </p>
											<p >1.5k</p>
										</div>

									</div>

								</td>
								<td className="px-6 py-4">
									$799
								</td>
								<td className="px-6 py-4">

									<button type="button" className="text-white bg-gradient-to-r from-red-600 via-red-500
									 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none
									  focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg 
									  dark:shadow-red-800/80 font-medium rounded-lg text-sm px-0.5 py-1 text-center me-2 mb-2">VIEW</button>


								</td>
							</tr>
						</tbody>
					</table>
				</div>


			</div>

		</div>
	);
};

export default Dashboard;
