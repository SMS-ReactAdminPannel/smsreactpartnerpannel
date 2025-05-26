import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import carImage from '../../assets/login-pg-img/porshe.webp';
import { useAuth } from './authContext';
import { FONTS } from '../../constants/constants';

type LoginData = {
	email: string;
	password: string;
};

const LoginPage1 = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginData>();
	const [showPassword, setShowPassword] = useState(false);
	const navigate = useNavigate();
	const { login } = useAuth();

	const onSubmit = (data: LoginData) => {
		if (data?.email && data?.password) {
			login();
			navigate('/');
		}
	};

	const text = 'YM PARTNER';

	return (
		<>
			<style>{`
        .glow-border {
            box-shadow: 0 0 15px rgba(155, 17, 30, 0.5);
            transition: box-shadow 0.3s ease-in-out;
        }

        body {
            overflow-x: hidden;
        }

        html {
            scrollbar-width: none; /* Firefox */
        }

        /* Hide scrollbar across browsers */
        ::-webkit-scrollbar {
            width: 0px;
            background: transparent;
        }

        .glow-border:hover {
            box-shadow: 0 0 25px rgba(155, 17, 30, 0.8);
        }

        .marquee-container {
            position: fixed;
            bottom: 0;
            width: 100%;
            background: #9b111e;
            color: white;
            font-weight: 500;
            padding: 8px 0;
            overflow: hidden;
            white-space: nowrap;
        }

        .marquee-text {
            display: inline-block;
            animation: marquee 20s linear infinite;
        }

        @keyframes marquee {
            from { transform: translateX(100%); }
            to { transform: translateX(-100%); }
        }
        `}</style>

			<div className='min-h-screen flex flex-col md:flex-row relative bg-gradient-to-r from-[#fff] to-[#ffffff] overflow-y-hidden'>
				{/* Animated Title */}
				<motion.div
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
					className='hidden md:block absolute top-6 left-4 md:top-16 md:left-20 z-10'
				>
					<h1 className='text-4xl font-bold tracking-wide drop-shadow-lg select-none'>
						{text.split('').map((char, index) => (
							<motion.span
								key={index}
								className='inline-block text-[#f9f9f6] font-mono italic uppercase tracking-widest shadow-2xs transition-all duration-300 glow-border'
								style={{
									animationDelay: `${index * 0.1}s`,
									...FONTS.header,
									fontSize: '56px',
									fontWeight: 600,
								}}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.08, duration: 0.4 }}
							>
								{char === ' ' ? '\u00A0' : char}
							</motion.span>
						))}
					</h1>
				</motion.div>

				{/* Left Image */}
				<motion.div
					initial={{ x: -100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 1.2 }}
					className='hidden md:block w-full md:w-3/5 h-64 md:h-screen relative'
				>
					<div className='bg-gradient-to-r from-[#9b111e] to-red-600 h-full w-[90%]'>
						<img
							src={carImage}
							alt='Login illustration'
							className='object-cover rounded-none md:rounded-l-xl'
							style={{
								position: 'absolute',
								top: '-5px',
								left: '55px',
								width: '95%',
								height: 'auto',
							}}
						/>
					</div>
				</motion.div>

				{/* Right Login Form */}
				<motion.div
					initial={{ x: 100, opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{ duration: 1.2 }}
					className='w-full md:w-2/5 flex items-center justify-center bg-white px-6 sm:px-8 md:px-12 py-12 md:py-0'
				>
					<div className='w-full max-w-md bg-white shadow-2xl glow-border rounded-xl p-8 border border-gray-200'>
						<form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
							<h2 className='text-2xl font-bold text-[#9b111e] text-center'>
								YM LOGIN
							</h2>

							{/* Email */}
							<div className='flex flex-col space-y-2'>
								<label className='text-sm font-medium text-[#9b111e]'>
									Email
								</label>
								<input
									type='email'
									{...register('email', { required: 'Email is required' })}
									placeholder='Enter your email'
									className='w-full px-4 py-2 border border-[#E6A895] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9b111e] placeholder-[#c18383]'
								/>
								{errors.email && (
									<span className='text-red-500 text-sm'>
										{errors.email.message}
									</span>
								)}
							</div>

							{/* Password */}
							<div className='flex flex-col space-y-2'>
								<label className='text-sm font-medium text-[#9b111e]'>
									Password
								</label>
								<div className='relative'>
									<input
										type={showPassword ? 'text' : 'password'}
										{...register('password', {
											required: 'Password is required',
										})}
										placeholder='Enter your password'
										className='w-full px-4 py-2 border border-[#E6A895] rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-[#9b111e] placeholder-[#c18383]'
									/>
									<span
										className='absolute top-2.5 right-3 text-gray-500 cursor-pointer'
										onClick={() => setShowPassword(!showPassword)}
									>
										{showPassword ? (
											<EyeSlashIcon className='w-5 h-5 text-[#9b111e]' />
										) : (
											<EyeIcon className='w-5 h-5 text-[#9b111e]' />
										)}
									</span>
								</div>
								{errors.password && (
									<span className='text-red-500 text-sm'>
										{errors.password.message}
									</span>
								)}
							</div>

							{/* Submit */}
							<button
								type='submit'
								className='w-full text-white font-semibold py-2 rounded-full transition duration-300 hover:brightness-110'
								style={{
									backgroundImage:
										'linear-gradient(44.99deg, #700808 11%, #d23c3c 102.34%)',
								}}
							>
								Login
							</button>

							<div className='text-right mt-1'>
								<Link
									to='/forgot-password'
									className='text-[#9b111e] hover:underline text-sm'
								>
									Forgot Password?
								</Link>
							</div>
						</form>
					</div>
				</motion.div>

				{/* Marquee Announcement */}
				<div className='marquee-container'>
					<div className='marquee-text' style={{ ...FONTS.paragraph }}>
						🚗 Free pickup & drop | 🏆 Winner of Best Car Service 2023 | 💰 Upto
						30% Off on Periodic Maintenance | 📣 New partner bonus now live! |
						🚘 AI diagnostics now available in select cities |
					</div>
				</div>
			</div>
		</>
	);
};

export default LoginPage1;
