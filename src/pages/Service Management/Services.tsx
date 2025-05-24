import { useState } from "react";
import ServiceManagementPage from "./ServiceManagement";
import JobCardDetailsPage from "./JobCardDetailsPages";

const Services = () => { 
    const [activeStep, setActiveStep] = useState(0);
  return <div>
      {activeStep === 0 && <ServiceManagementPage onView={() => setActiveStep(1)} />}
      {activeStep === 1 && <JobCardDetailsPage /> } 
    </div>
}


export default Services