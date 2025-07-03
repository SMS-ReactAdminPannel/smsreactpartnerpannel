import React, { useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { FiHome, FiBell, FiSettings} from 'react-icons/fi';
// import { IoIosHelpCircleOutline } from 'react-icons/io';
// import { RiCustomerService2Fill } from 'react-icons/ri';
// import { Megaphone } from 'lucide-react';
import { RiMenu2Line, RiMenu3Line } from 'react-icons/ri';
// import { MdBuild } from 'react-icons/md';
// import { AiOutlineCalendar } from 'react-icons/ai';
// import { MdQuestionAnswer } from 'react-icons/md';
// import { FaCogs } from 'react-icons/fa';
// import { COLORS } from '../../constants/constants';
import Logo from '../../assets/sidebaricon/logo/Partner_sm_logo.png'
import Logo1 from '../../assets/sidebaricon/logo/Partner_lg_logo.png'
// import { BsCart4 } from 'react-icons/bs';
import  home from '../../assets/sidebaricon/Dashboard (1).svg'
import home1 from '../../assets/sidebaricon/Dashboard (1) (2).svg'
import notifications from '../../assets/sidebaricon/Notifications.svg'
import notifications1 from '../../assets/sidebaricon/whiteicon/Notifications (2).svg'
import spareparts from '../../assets/sidebaricon/Spare Parts (1) (2).svg'
import spareparts1 from '../../assets/sidebaricon/whiteicon/Spare Parts (4).svg';
import Bookings from '../../assets/sidebaricon/Booking (1).svg'
import Bookings1 from '../../assets/sidebaricon/whiteicon/Booking (4).svg'
import Service from '../../assets/sidebaricon/Service (1).svg'
import Service1 from '../../assets/sidebaricon/whiteicon/Service (4).svg'
import Announcement from '../../assets/sidebaricon/Announcement.svg'
import Announcement1 from '../../assets/sidebaricon/whiteicon/Announcement (2).svg'
import Settings from "../../assets/sidebaricon/Settings.svg"
import Settings1 from "../../assets/sidebaricon/whiteicon/Settings (3).svg"
import Help from '../../assets/sidebaricon/whiteicon/Enquiry Page (2).svg'
import Help1 from '../../assets/sidebaricon/Enquiry Page.svg'
import faq from '../../assets/sidebaricon/FAQs (1).svg';
import faq1 from '../../assets/sidebaricon/whiteicon/FAQs (2).svg'


import { FONTS } from '../../constants/constants';





const COLOR = {
	primary: '#7812A4',
	bgColor: '#faf3eb',
	secondary: '#E6A895',
};

const SideBar = ({
	isOpen,
	setIsOpen,
}: {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const handleLinkClick = () => {
		setIsOpen(false);
	};

	return (
		<div className='flex h-screen overflow-y-auto scrollbar-hide'>
			<div className='bg-white border-r shadow-md p-2 transition-all duration-300 fixed top-0 left-0 h-screen z-40 flex flex-col items-center'>
				<div className={`flex justify-center items-center h-20 transition-all duration-300 ${
					isOpen ? 'w-40' : 'w-12'
				}`}>
					<img
						src={isOpen ? Logo1 : Logo}
						alt='YES Mechanic Logo'
						className={`object-contain transition-all duration-300 ${
							isOpen ? 'w-15 h-10' : 'w-10 h-10'
						}`}
					/>
				</div>
				<div className='w-full flex justify-end px-2 mt-2'>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className='text-gray-600 hover:text-black p-2 rounded-md transition duration-200 hover:bg-gray-100'
						title='Toggle Sidebar'
					>
						{isOpen ? (
							<RiMenu3Line size={20} style={{ color: COLOR.primary }} />
						) : (
							<RiMenu2Line size={20} style={{ color: COLOR.primary }} />
						)}
					</button>
				</div>

				<nav className='flex flex-col gap-4 mt-4 w-full items-center overflow-auto scrollbar-hide'style={{...FONTS.cardSubHeader}}>
					<SidebarLink
						to='/'
						icon={[<img src={home} alt="home icon" style={{ width: 20, height: 20 }} />,<img src={home1} alt="active home icon" style={{ width: 20, height: 20 }} />]}

						label='Dashboard'
						isOpen={isOpen}
						onClick={handleLinkClick}
					/>
					<SidebarLink
						to='/notifications'
						// icon={<FiBell />}
				icon={[<img src={notifications1} alt="notifications icon" style={{ width: 20, height: 20 }} />,<img src={notifications} alt="active home icon" style={{ width: 20, height: 20 }} />]}

						label='Notifications'
						isOpen={isOpen}
						onClick={handleLinkClick}
					/>
					<SidebarLink
						to='/spare-parts'
						// icon={<FaCogs />}

					icon={[<img src={spareparts1} alt="home icon" style={{ width: 20, height: 20 }} />,<img src={spareparts} alt="active home icon" style={{ width: 20, height: 20 }} />]}
			
						label='Spare Parts Management'
						isOpen={isOpen}
						onClick={handleLinkClick}
					/>
					{/* <SidebarLink
						to='/spare-parts'
						icon={<FaTools />}
						label='Spare Parts'
						isOpen={isOpen}
						onClick={handleLinkClick}
					/> */}
					<SidebarLink
						to='/bookings'
						// icon={<AiOutlineCalendar />}
						
					icon={[<img src={Bookings1} alt="home icon" style={{ width: 20, height: 20 }} />,<img src={Bookings} alt="active home icon" style={{ width: 20, height: 20 }} />]}
			
						label='Bookings'
						isOpen={isOpen}
						onClick={handleLinkClick}
					/>
					<SidebarLink
						to='/service'
						// icon={<MdBuild />}
						
					icon={[<img src={Service1} alt="home icon" style={{ width: 20, height: 20 }} />,<img src={Service} alt="active home icon" style={{ width: 20, height: 20 }} />]}
			
						label='Service Management'
						isOpen={isOpen}
						onClick={handleLinkClick}
					/>
					{/* <SidebarLink
					to='/servicecatList'
					icon={<FaServicestack />}
					label='Service Catlog'
					isOpen={isOpen}
					onClick={handleLinkClick}
					/> */}

					<SidebarLink
						to='/settings'
						icon={[<img src={Settings1} alt="home icon" style={{ width: 20, height: 20 }} />,<img src={Settings} alt="active home icon" style={{ width: 20, height: 20 }} />]}
						label='Settings'
						isOpen={isOpen}
						onClick={handleLinkClick}
					/>
					<SidebarLink
						to='/customer'
						icon={[<img src={Bookings1} alt="home icon" style={{ width: 20, height: 20 }} />,<img src={Bookings} alt="active home icon" style={{ width: 20, height: 20 }} />]}
						label='Customer Management'
						isOpen={isOpen}
						onClick={handleLinkClick}
					/>
					<SidebarLink
						to='/announcement'
						icon={[<img src={Announcement1} alt="home icon" style={{ width: 20, height: 20 }} />,<img src={Announcement} alt="active home icon" style={{ width: 20, height: 20 }} />]}
						label='Announcement'
						isOpen={isOpen}
						onClick={handleLinkClick}
					/>
					<SidebarLink
						to='/help-center'
						icon={[<img src={Help} alt="home icon" style={{ width: 20, height: 20 }} />,<img src={Help1} alt="active home icon" style={{ width: 20, height: 20 }} />]}
						label='Help Center'
						isOpen={isOpen}
						onClick={handleLinkClick}
					/>
					
					
					<SidebarLink
						to='/faq'
						icon={[<img src={faq1} alt="home icon" style={{ width: 20, height: 20 }} />,<img src={faq} alt="active home icon" style={{ width: 20, height: 20 }} />]}
						label='FAQs'
						isOpen={isOpen}
						onClick={handleLinkClick}
					/>
					{/* <SidebarLink
					{/* <SidebarLink
						to='/order'
						icon={[<img src={Bookings1} alt="home icon" style={{ width: 20, height: 20 }} />,<img src={Bookings} alt="active home icon" style={{ width: 20, height: 20 }} />]}
						label='orders'
						isOpen={isOpen}
						onClick={handleLinkClick}
					/> */}
				</nav>
			</div>
			<div
				className={`transition-all duration-300 ${
					isOpen ? 'ml-48' : 'ml-16'
				} flex-1`}
			></div>
		</div>
	);
};

const SidebarLink = ({
  to,
  icon,
  label,
  isOpen,
  onClick,
}: {
  to: string;
  icon: any;
  label: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState(false);
  const isActive = location.pathname === to;

  const backgroundColor = isActive
    ? COLOR.primary
    : isHovered
      ? COLOR.bgColor
      : "transparent";

  const textColor = isActive ? COLOR.bgColor : COLOR.primary;

  return (
    <Link
      to={to}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ backgroundColor }}
      className={`flex items-center transition-all py-1 
        ${
          isOpen
            ? " justify-start gap-5  w-[200px] py-2.5 px-4"
            : "justify-center w-10 h-10 py-2"
        } 
        rounded-full
      `}
    >
      <div className="text-xl" style={{ color: textColor }}>
        {isActive ? icon[0]: icon[1]}
      </div>
      {isOpen && (
        <span style={{ ...FONTS.cardSubHeader, color: textColor }}>
          {label}
        </span>
      )}
    </Link>
  );
};


export default SideBar;
