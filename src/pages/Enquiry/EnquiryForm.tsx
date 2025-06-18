

import {  useState } from 'react';
import { FONTS } from '../../constants/constants';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
  // email: '',
    phoneNumber: '',
    // carModel: '',
    // serviceType: 'general',
    enquiry: '',
    date: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({
      fullName: '',
     // email: '',
      phoneNumber: '',
      // carModel: '',
      // serviceType: 'general',
      enquiry: '',
      date: '',
    });
  };

  // useEffect (()=>{
     
  // })
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2  style={{...FONTS.cardheader}}> Enquiry Form</h2>

      {submitted && (
        <div className="bg-green-100 text-green-800 p-3 rounded text-sm">
          Enquiry submitted successfully!
        </div>
      )}

      <div className="grid grid-cols-1   gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter your name"
          />
        </div>

        
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline focus:ring-2 focus:ring-red-500"
            placeholder="Enter phone number"
            required
          />
        </div>
         {/* <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border  focus:ring-2 focus:ring-red-500"
            placeholder="Enter your email"
          />
        </div> */}

        {/* <div>
          <label className="block text-sm font-medium text-gray-700">Car Model</label>
          <input
            name="carModel"
            value={formData.carModel}
            onChange={handleChange}
            required
            className="mt-1 block  rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Eg: Honda City"
          />
        </div> */}

        {/* <div>
          <label className="block text-sm font-medium text-gray-700">Service Type</label>
          <select
            name="serviceType"
            value={formData.serviceType}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="general">General Service</option>
            <option value="oil">Oil Change</option>
            <option value="ac">AC Repair</option>
            <option value="brakes">Brake Repair</option>
            <option value="battery">Battery Check</option>
            <option value="other">Other</option>
          </select>
        </div> */}

        <div>
          <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Your Enquiry</label>
        <textarea
          name="enquiry"
          value={formData.enquiry}
          onChange={handleChange}
          required
          rows={4}
          className="mt-1 block w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          placeholder="Describe your issue or question..."
        />
      </div>

      <button
        type="submit"
        className="w-full md:w-auto px-6 py-2 text-white bg-red-900 hover:bg-red-700 rounded-md transition-all"
      >
        Submit 
      </button>
     
    </form>
  );
};

export default EnquiryForm;
