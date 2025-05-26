import React, { useState } from 'react'
import JobCard from './jobCard';
import ServiceManagement from './ServiceManagement';

const Service:React.FC = () => {
    // const [activeStep, setActiveStep] = useState<boolean>(true);
    const [state, setstate] = useState<boolean>(true)

    console.log("state", state);
  return (

      <div>
        {/* {activeStep ? <TermsConditionsPage setActiveStep={setActiveStep} /> : <JobCard />} */}
        {state ? <ServiceManagement setstate={setstate} /> : <JobCard />}
        

    </div>
  )
}

export default Service
