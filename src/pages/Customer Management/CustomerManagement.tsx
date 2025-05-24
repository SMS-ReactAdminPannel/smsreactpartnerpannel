import React, { useState } from 'react';
import CustomerProfileDetails from './CustomerProfileDetails';
import { Diameter } from 'lucide-react';
import CustomerServiceDetails from './CustomerServiceDetails';


const CustomerManagement = () => {
	const [isClicked,setIsClicked] = useState<number>(0)

	const Display = (value: number) => {
		setIsClicked(value)
	}


	return <div>
		<div className='flex gap-5 mb-5'>
			<button onClick={()=>Display(0)}>Profile</button>
			<button  onClick={()=>Display(1)}>Services</button>
		</div>
		{isClicked === 0 && <CustomerProfileDetails />}
		{isClicked === 1 && <CustomerServiceDetails />} 
	</div>;
};

export default CustomerManagement;
