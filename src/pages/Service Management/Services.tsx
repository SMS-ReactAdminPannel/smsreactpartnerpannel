import { useState } from "react";
import JobCardDetailsPage from "./JobCardDetailsPages";
import Service from "./Service";

const Services = () => { 
    const [activeStep, setActiveStep] = useState(0);
  return <div>
      {activeStep === 0 && <Service/>}
      {activeStep === 1 && <JobCardDetailsPage /> } 
    </div>
}


export default Services