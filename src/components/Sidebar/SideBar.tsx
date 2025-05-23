import { useState, type JSX } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
	FiHome,
	FiBell,
	FiUsers,
	FiClipboard,
	FiMapPin,
	FiTruck,
	FiSettings,
	FiAlertTriangle,
	FiMenu,
} from 'react-icons/fi';
import { Megaphone } from 'lucide-react';
// import { COLORS } from '../../constants/constants';

const SideBar = () => {
	const handleLinkClick = () => {
		// setIsOpen(false);
	};

	return (
		<div className=''>
			<div className='bg-[#9b111e] p-5 transition-all duration-300 '>
				<nav className='flex flex-row w-full items-center justify-between'>
					<SidebarLink
						to='/'
						icon={<FiHome />}
						label='Dashboard'
						onClick={handleLinkClick}
					/>
					<SidebarLink
						to='/notifications'
						icon={<FiBell />}
						label='Notifications'
						onClick={handleLinkClick}
					/>
					<SidebarLink
						to='/spares-management'
						icon={<FiMapPin />}
						label='Spare Parts Management'
						onClick={handleLinkClick}
					/>
					<SidebarLink
						to='/bookings'
						icon={<FiTruck />}
						label='Bookings'
						onClick={handleLinkClick}
					/>
					<SidebarLink
						to='/service'
						icon={<Megaphone />}
						label='Service Management'
						onClick={handleLinkClick}
					/>
					<SidebarLink
						to='/settings'
						icon={<FiSettings />}
						label='Settings'
						onClick={handleLinkClick}
					/>
					<SidebarLink
						to='/customer'
						icon={<FiSettings />}
						label='Customer Management'
						onClick={handleLinkClick}
					/>
					<SidebarLink
						to='/announcement'
						icon={<Megaphone />}
						label='Announcement'
						onClick={handleLinkClick}
					/>
					<SidebarLink
						to='/help-center'
						icon={<FiAlertTriangle />}
						label='Help Center'
						onClick={handleLinkClick}
					/>
					<SidebarLink
						to='/faq'
						icon={<FiAlertTriangle />}
						label='FAQs'
						onClick={handleLinkClick}
					/>
				</nav>
			</div>
			{/* <div
				className={`transition-all duration-300 ${
					isOpen ? 'ml-48' : 'ml-16'
				} flex-1`}
			></div> */}
		</div>
	);
};

const SidebarLink = ({
	to,
	icon,
	label,
	onClick,
}: {
	to: string;
	icon: JSX.Element;
	label: string;
	onClick: () => void;
}) => {
	const location = useLocation();
	const [isHovered, setIsHovered] = useState(false);
	const isActive = location.pathname === to;
	return (
		<Link
			to={to}
			onClick={onClick}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			style={{
				backgroundColor: isHovered || isActive ? '#fdefe9' : '#9b111e',
			}}
			className={`flex items-center transition-all px-2 py-1 gap-1 
        ${isHovered || isActive ? 'bg-[#faf3eb] rounded-md' : 'rounded'}
    `}
		>
			<div
				className={`text-xl ${
					isHovered || isActive ? 'text-[#9b111e]' : 'text-[#fdefe9]'
				}`}
			>
				{icon}
			</div>
			<div
				className={`${
					isHovered || isActive ? 'text-[#9b111e]' : 'text-[#fdefe9]'
				}`}
			>
				{label}
			</div>
		</Link>
	);
};

export default SideBar;
