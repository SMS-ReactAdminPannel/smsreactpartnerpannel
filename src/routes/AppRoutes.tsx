import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../pages/auth/authContext';
import LoginPage from '../pages/auth/LoginPage';
import MainLayout from '../layout/MainLayout';
import Dashboard from '../pages/Dashboard/Dashboard';
import NotificationsPage from '../pages/Notifications/NotificationsPage';
import ServiceManagement from '../pages/Service Management/ServiceManagement';
import ProfileManagement from '../pages/Profile Management/ProfileManagement';
import Bookings from '../pages/Bookings/Bookings';
import CustomerManagement from '../pages/Customer Management/CustomerManagement';
import SpareParts from '../pages/Spare Parts/SpareParts';
import SparePartsManagement from '../pages/Spare Parts Management/SparePartsManagement';
import HelpCenter from '../pages/Help Center/HelpCenter';
import FaqPage from '../pages/FAQ/FaqPage';
import AnnouncementPage from '../pages/Announcement/AnnouncementPage';

const AppRoutes = () => {
	// const { isAuthenticated } = true;
	const isAuthenticated = true;

	const AuthRoutes = () => (
		<Routes>
			<Route path='/login' element={<LoginPage />} />
			<Route path='*' element={<Navigate to='/login' />} />
		</Routes>
	);

	const AdminRoutes = () => (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route index element={<Dashboard />} />
				<Route path='notifications' element={<NotificationsPage />} />
				<Route path='service' element={<ServiceManagement />} />
				<Route path='profile' element={<ProfileManagement />} />
				<Route path='bookings' element={<Bookings />} />
				<Route path='customer' element={<CustomerManagement />} />
				<Route path='spare-parts' element={<SpareParts />} />
				<Route path='spares-management' element={<SparePartsManagement />} />
				<Route path='help-center' element={<HelpCenter />} />
				<Route path='faq' element={<FaqPage />} />
				<Route path='announcement' element={<AnnouncementPage />} />
		        <Route  path='mustcare' element={<ServiceManagement />} />
				<Route path='*' element={<Navigate to='/' />} />
			</Route>
		</Routes>
	);

	return isAuthenticated ? <AdminRoutes /> : <AuthRoutes />;
};

export default AppRoutes;
