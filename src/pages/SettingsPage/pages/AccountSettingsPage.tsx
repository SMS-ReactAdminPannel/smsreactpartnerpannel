import React from 'react';

const AccountSettingsPage: React.FC = () => {
  return (
    <div className="p-6 mx-auto bg-white shadow-lg rounded-xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Profile Settings</h1>
        <p className="text-gray-600 mt-2">
          Update your personal information, contact details, and preferences
        </p>
      </header>

      <form className="space-y-8">
        {/* Personal Information Section */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
            Personal Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block mb-2 font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                className="w-full px-4 py-2 border border-[#9b111e]/30 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#9b111e]/50 focus:border-transparent transition"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block mb-2 font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                className="w-full px-4 py-2 border border-[#9b111e]/30 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#9b111e]/50 focus:border-transparent transition"
              />
            </div>

            <div>
              <label htmlFor="dob" className="block mb-2 font-medium text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                className="w-full px-4 py-2 border border-[#9b111e]/30 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#9b111e]/50 focus:border-transparent transition"
              />
            </div>

            <div>
              <label htmlFor="gender" className="block mb-2 font-medium text-gray-700">
                Gender
              </label>
              <select
                id="gender"
                className="w-full px-4 py-2 border border-[#9b111e]/30 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#9b111e]/50 focus:border-transparent transition"
              >
                <option value="">Select gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
                <option>Prefer not to say</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="bio" className="block mb-2 font-medium text-gray-700">
              About You
            </label>
            <textarea
              id="bio"
              className="w-full px-4 py-2 border border-[#9b111e]/30 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#9b111e]/50 focus:border-transparent transition"
              rows={4}
              placeholder="Tell us about yourself..."
            />
          </div>

          <div>
            <label htmlFor="photo" className="block mb-2 font-medium text-gray-700">
              Profile Photo
            </label>
            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#9b111e]/30">
                <img 
                  src="https://via.placeholder.com/150" 
                  alt="Profile placeholder" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150"%3E%3Ccircle cx="75" cy="75" r="75" fill="%23e5e7eb"/%3E%3Ctext fill="%239b111e" font-family="sans-serif" font-size="16" dy=".3em" text-anchor="middle" x="75" y="75"%3EAdd Photo%3C/text%3E%3C/svg%3E';
                    target.className = 'w-full h-full object-contain';
                  }}
                />
              </div>
              <input
                type="file"
                id="photo"
                accept="image/*"
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-lg file:border-0
                  file:text-sm file:font-medium
                  file:bg-[#9b111e]/10 file:text-[#9b111e]
                  hover:file:bg-[#9b111e]/20"
              />
            </div>
          </div>
        </section>

        {/* Contact Information Section */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
            Contact Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-[#9b111e]/30 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#9b111e]/50 focus:border-transparent transition"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-[#9b111e]/30 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#9b111e]/50 focus:border-transparent transition"
              />
            </div>

            <div className="block mb-2 font-medium text-gray-700">
              <label htmlFor="address" className="block mb-2 font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="w-full px-4 py-2 border border-[#9b111e]/30 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#9b111e]/50 focus:border-transparent transition"
              />
            </div>

            <div>
              <label htmlFor="country" className="block mb-2 font-medium text-gray-700">
                Country
              </label>
              <select
                id="country"
                className="w-full px-4 py-2 border border-[#9b111e]/30 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#9b111e]/50 focus:border-transparent transition"
              >
                <option value="">Select country</option>
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
                <option>Australia</option>
                <option>Japan</option>
              </select>
            </div>
          </div>
        </section>

        {/* Professional Information Section */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
            Professional Information
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="companyName" className="block mb-2 font-medium text-gray-700">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                className="w-full px-4 py-2 border border-[#9b111e]/30 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#9b111e]/50 focus:border-transparent transition"
              />
            </div>

            <div>
              <label htmlFor="companyWebsite" className="block mb-2 font-medium text-gray-700">
                Company Website
              </label>
              <input
                type="url"
                id="companyWebsite"
                className="w-full px-4 py-2 border border-[#9b111e]/30 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#9b111e]/50 focus:border-transparent transition"
                placeholder="https://"
              />
            </div>
          </div>
        </section>

        {/* Social Media Section */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">
            Social Media
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="facebook" className="block mb-2 font-medium text-gray-700">
                Facebook Profile
              </label>
              <input
                type="url"
                id="facebook"
                className="w-full px-4 py-2 border border-[#9b111e]/30 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#9b111e]/50 focus:border-transparent transition"
                placeholder="https://facebook.com/username"
              />
            </div>

            <div>
              <label htmlFor="youtube" className="block mb-2 font-medium text-gray-700">
                YouTube Channel
              </label>
              <input
                type="url"
                id="youtube"
                className="w-full px-4 py-2 border border-[#9b111e]/30 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#9b111e]/50 focus:border-transparent transition"
                placeholder="https://youtube.com/username"
              />
            </div>
          </div>
        </section>

        {/* Form Actions */}
        <div className="flex justify-end gap-4 pt-4">
          <button
            type="button"
            className="px-6 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-[#9b111e] text-white rounded-lg font-medium hover:bg-[#9b111e]/90 transition focus:outline-none focus:ring-2 focus:ring-[#9b111e]/50 focus:ring-offset-2"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountSettingsPage;