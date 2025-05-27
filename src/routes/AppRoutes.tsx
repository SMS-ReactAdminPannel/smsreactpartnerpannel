import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../pages/auth/authContext';
import MainLayout from '../layout/MainLayout';
import Dashboard from '../pages/Dashboard/Dashboard';
import NotificationsPage from '../pages/Notificationspages/NotificationsPage';
import ProfileManagement from '../pages/Profile Management/ProfileManagement';
import Bookings from '../pages/Bookings/Bookings';
import CustomerManagement from '../pages/Customer Management/CustomerManagement';
import SpareParts from '../pages/Spare Parts/SpareParts';
import SettingsPage from '../pages/SettingsPage/SettingsPage';
import HelpCenter from '../pages/HelpCenter/HelpCenter';
import FaqPage from '../pages/FAQpages/FaqPages';
import AnnouncementPage from '../pages//Announcements/Announcementspages';
import ResetPassword from '../pages/auth/ResetPassword';
import LoginPage1 from '../pages/auth/LoginPage1';
import Service from '../pages/Service Management/Service';
import Order from '../pages/Orders/order';



const AppRoutes = () => {
	const { isAuthenticated } = useAuth();

	const AuthRoutes = () => (
		<Routes>
			<Route path='/login' element={<LoginPage1 />} />
			<Route path='/reset-password' element={<ResetPassword />} />
			<Route path='*' element={<Navigate to='/login' />} />
		</Routes>
	);

	const AdminRoutes = () => (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route index element={<Dashboard />} />
				<Route path='notifications' element={<NotificationsPage />} />
				<Route path='service' element={<Service/>} />
				<Route path='profile' element={<ProfileManagement />} />
				<Route path='bookings' element={<Bookings />} />
				<Route path='customer' element={<CustomerManagement />} />
				<Route path='spare-parts' element={<SpareParts />} />
				<Route path='settings' element={<SettingsPage />} />
				<Route path='help-center' element={<HelpCenter />} />
				<Route path='faq' element={<FaqPage />} />
				<Route path='announcement' element={<AnnouncementPage />} />
				<Route path='*' element={<Navigate to='/' />} />
				<Route path='order' element={<Order />} />
			</Route>
		</Routes>
	);

	return isAuthenticated ? <AdminRoutes /> : <AuthRoutes />;
};

export default AppRoutes;