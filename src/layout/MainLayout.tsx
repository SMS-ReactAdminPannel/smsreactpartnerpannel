import { Outlet } from 'react-router-dom';
import SideBar from '../components/Sidebar/SideBar';
import Navbar from '../components/Navbar/Navbar';
import { COLORS } from '../constants/constants';

const MainLayout = () => {
	return (
		<div className='flex h-screen bg-gray-100'>
			{/* Sidebar takes up 1/9 of the width */}
			<div className='w-1/6'>
				<SideBar />
			</div>

			{/* Main content takes up the remaining 8/9 of the width */}
			<div className='flex-1 flex flex-col overflow-hidden'>
				<Navbar />
				<main className='flex-1 overflow-auto '>
					<div
						className='p-4 rounded shadow pl-8'
						style={{ backgroundColor: COLORS.bgColor }}
					>
						<Outlet />
					</div>
				</main>
			</div>
		</div>
	);
};

export default MainLayout;
