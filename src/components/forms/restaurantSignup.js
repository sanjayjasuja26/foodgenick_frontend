

import React, { useState } from 'react'

import { Step, StepLabel, Stepper } from '@mui/material'
import UserDetail from './UserDetail';
import OwnerDetail from './OwnerDetail';
import AddressDetail from './AddressDetail';
function _renderStepContent(step,_handleBack,_handlSubmit,userdata,Ownerdata) {
  switch (step) {
    case 0:
      return <UserDetail step={step} _handleBack={_handleBack} _handlSubmit={_handlSubmit} userdata={userdata}  />;
    case 1:
      return <OwnerDetail step={step} _handleBack={_handleBack}  _handlSubmit={_handlSubmit} userdata={userdata} Ownerdata={Ownerdata} />;
    case 2:
      return <AddressDetail step={step} _handleBack={_handleBack} _handlSubmit={_handlSubmit} Ownerdata={Ownerdata} />;
  }
}

const RestaurantSignup = () => {

  const [activeStep, setActiveStep] = useState(0);
  const [userdata, setUserdata] = useState(null);
  const [Ownerdata, setOwnerdata] = useState(null);
  const steps =["User Details","Owner Details","Address Details",]

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }
  function _handlSubmit(values,type) {
    if(values && type === "user"){
      setUserdata(values)
      setActiveStep(activeStep + 1);
    }else{
      setOwnerdata(values)
      setActiveStep(activeStep + 1);
    }
  }
  return (
    <div> <div>
    <Stepper activeStep={activeStep}>
    {steps && steps.length > 0 && steps.map((label,index) => (
        <Step className='step-indicator' key={index}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>

    <div>
      {_renderStepContent(activeStep,_handleBack,_handlSubmit,userdata,Ownerdata)}

      </div>
</div></div>
  )
}

export default RestaurantSignup