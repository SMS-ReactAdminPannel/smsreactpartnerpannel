import { useState } from "react";
import { useForm } from "react-hook-form";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import LoginImage from "../../../src/assets/login-pg-img/login-video.mp4";
import { FONTS } from "../../constants/constants";

type FormData = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  // ✅ Add TypeScript types for form fields
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Login data:", data);
    // Handle login logic here
  };

  return (
    <div className="relative min-h-screen flex justify-end items-center font-sans bg-black">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={LoginImage} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Login Form */}
      <div className="relative z-20 w-full md:w-1/2 flex items-center justify-center px-6">
        <div className="w-full max-w-md shadow-2xl rounded-3xl p-10 border border-white/30 bg-white/25 backdrop-blur-md transition-all duration-300 hover:scale-[1.01]">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <h2 className="text-3xl font-bold text-white text-center drop-shadow-sm tracking-wide">
              Partner Login
            </h2>

            {/* Email Field */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold text-white">Email Address</label>
              <input
                type="email"
                placeholder="Enter your email address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Invalid email format",
                  },
                })}
                className={`w-full px-4 py-3 border text-[#7c0c0c] placeholder:text-[#9f3f3f] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b111e] bg-white/70 text-sm transition ${
                  errors.email ? "border-red-500" : "border-[#d77c7c]"
                }`}
              />
              {errors.email && (
                <span className="text-xs text-red-500"style={{...FONTS.paragraph, fontSize: "12px" }}>{errors.email.message}</span>
              )}
            </div>

            {/* Password Field */}
            <div className="flex flex-col space-y-2">
              <label className="text-sm font-semibold text-white">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message:
                        "Password must contain uppercase, lowercase, number, and special character",
                    },
                  })}
                  className={`w-full px-4 py-3 border text-[#7c0c0c] placeholder:text-[#9f3f3f] rounded-lg pr-10 focus:outline-none focus:ring-2 focus:ring-[#9b111e] bg-white/70 text-sm ${
                    errors.password ? "border-red-500" : "border-[#d77c7c]"
                  }`}
                />
                <span
                  className="absolute top-3 right-3 text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeIcon className="w-5 h-5 text-[#9b111e]" />
                  ) : (
                    <EyeSlashIcon className="w-5 h-5 text-[#9b111e]" />
                  )}
                </span>
              </div>
              {errors.password && (
                <span className="text-xs text-red-500" style={{...FONTS.paragraph, fontSize: "12px" }}>{errors.password.message}</span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 text-white font-semibold rounded-full shadow-md hover:shadow-xl transition-all duration-300 hover:brightness-110 text-sm bg-gradient-to-r from-[#9b111e] to-[#d23c3c]"
            >
              Login
            </button>

            {/* Forgot Password */}
            <div className="text-right mt-1">
              <Link to="/forgot-password" className="text-white hover:underline text-sm">
                Forgot Password?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
