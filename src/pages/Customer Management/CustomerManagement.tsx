import React, { useState } from 'react';
import CustomerProfileDetails from './CustomerProfileDetails';
import CustomerDetails from './CustomerDetails';


const CustomerManagement = () => {
	const [activeStep , setActiveStep] = useState (0);
	return <div>
		{activeStep === 0 && (
          <CustomerDetails onProfileView={() => setActiveStep(1)} />
        )}
        {activeStep === 1 && (
          <CustomerProfileDetails />
        )}
	</div>;
};

export default CustomerManagement;
