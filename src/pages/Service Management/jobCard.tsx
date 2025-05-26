import React from "react";

// type JobCardModalProps = {
//   isOpen: boolean;
//   onClose: () => void;
// };

const JobCard: React.FC = () => {
//   if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 overflow-auto">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-5xl p-6 relative">
        <button
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600"
        
        >
          
        </button>

        <h2 className="text-xl font-bold text-center mb-4">Create Job Card</h2>

        <form className="space-y-6">
          {/* Customer Information */}
          <fieldset className="border p-4 rounded">
            <legend className="font-semibold">Customer Information</legend>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Customer Name" className="input" />
              <input type="text" placeholder="Address" className="input" />
              <input type="text" placeholder="Office Address" className="input" />
              <input type="text" placeholder="Phone No." className="input" />
              <input type="text" placeholder="Email ID" className="input" />
              <input type="date" placeholder="DOB" className="input" />
            </div>
          </fieldset>

          {/* Vehicle Information */}
          <fieldset className="border p-4 rounded">
            <legend className="font-semibold">Vehicle Information</legend>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Vehicle No." className="input" />
              <input type="text" placeholder="Engine No." className="input" />
              <input type="text" placeholder="Chassis No." className="input" />
              <input type="text" placeholder="Make & Model" className="input" />
              <input type="text" placeholder="Color" className="input" />
              <input type="text" placeholder="Fuel Level" className="input" />
            </div>
          </fieldset>

          {/* Vehicle Inventory Checklist */}
          <fieldset className="border p-4 rounded">
            <legend className="font-semibold">Vehicle Inventory</legend>
            <div className="grid grid-cols-3 gap-2">
              {[
                "Jack & Tommy", "Mirrors", "Stepney", "Mud Flap",
                "Tool Kit", "Freshner", "Key Chain", "Tapes",
                "CD Recorder", "CD Player", "Service Booklet", "Mats",
                "Body Damages", "Dent", "Others"
              ].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input type="checkbox" />
                  {item}
                </label>
              ))}
            </div>
          </fieldset>

          {/* Customer Complaint & Diagnosis */}
          <fieldset className="border p-4 rounded">
            <legend className="font-semibold">Complaints & Diagnosis</legend>
            <textarea
              placeholder="Customer Complaint / Diagnosis / Action to be taken"
              className="input h-24"
            />
          </fieldset>

          {/* Estimate Section */}
          <fieldset className="border p-4 rounded">
            <legend className="font-semibold">Estimate</legend>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Estimate Labour" className="input" />
              <input type="text" placeholder="Estimate Parts" className="input" />
              <input type="text" placeholder="Total Estimate" className="input" />
            </div>
          </fieldset>

          {/* Delivery Details */}
          <fieldset className="border p-4 rounded">
            <legend className="font-semibold">Technician / Delivery Info</legend>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="Technician Name" className="input" />
              <input type="text" placeholder="Service Advisor" className="input" />
              <input type="text" placeholder="Promised Delivery Date" className="input" />
              <input type="text" placeholder="Revised Delivery Date" className="input" />
              <input type="text" placeholder="Contact No." className="input" />
              <input type="text" placeholder="Revised Estimate" className="input" />
            </div>
          </fieldset>

          {/* Signature Fields */}
          <div className="flex justify-between mt-6 text-sm italic text-gray-600">
            <div>🖋 Authorized Signature</div>
            <div>🖋 Signature of Customer</div>
          </div>

          {/* Submit Button */}
          <div className="text-right mt-6">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Create Job Card
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobCard;