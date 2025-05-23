import { Outlet } from 'react-router-dom';
import SideBar from '../components/Sidebar/SideBar';
import Navbar from '../components/Navbar/Navbar';
import { COLORS } from '../constants/constants';

const MainLayout = () => {
	return (
		<div className=' h-screen bg-gray-100 relative'>
			{/* Main content takes up the remaining 8/9 of the width */}
			<div className='flex-1 flex flex-col overflow-hidden'>
				<Navbar />

				{/* Sidebar takes up 1/9 of the width */}
				<div className=''>
					<SideBar />
				</div>
				<main className='flex-1 overflow-auto '>
					<div
						className='h-[100vh]'
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
