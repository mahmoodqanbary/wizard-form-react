import React, { useState } from 'react'
import Stepper from './components/Stepper'
import StepperControl from './components/StepperControl'
import PersonalInfo from './components/steps/PersonalInfo'
import PersonalDocuments from './components/steps/PersonalDocuments'
import Payment from './components/steps/Payment'
import PrintInfo from './components/steps/PrintInfo'
import CarDocuments from './components/steps/CarDocuments'
import { StepperContext } from './contexts/StepperContext'

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);

  const steps = [
    "مشخصات مالک خودرو",
    "بارگذاری مدارک مالک خودرو",
    "بارگذاری مدارک خودرو",
    " فرم پرداخت",
    " پرینت",
  ];

  const displayStep = (step)=>{
    switch(step){
      case 1: 
        return <PersonalInfo />
      case 2: 
        return <PersonalDocuments/>
      case 3: 
        return <CarDocuments />
      case 4: 
        return <Payment />  
      case 5: 
        return <PrintInfo /> 
        
      default:  
    }
  }

  const handleClick = (direction)=>{
    let newStep = currentStep;

    direction === "next"? newStep++ : newStep--;

    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  }
  
  return (
    <div className='md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white '>
      {/* Stepper */}
      <div className='container horizontal mt-5 mx-4' >
        <Stepper 
          steps ={steps}
          currentStep = {currentStep}
        />

      {/* Display Components */}

      <div className='my-10 p-10 '>
        <StepperContext.Provider value={{
          userData,
          setUserData,
          finalData,
          setFinalData,
          
        }}>
          {displayStep(currentStep)}
        </StepperContext.Provider>
      </div>
      </div>
      {/* Navigation Contains */}

      <StepperControl 
        handleClick={handleClick}
        currentStep={currentStep}
        steps={steps}
      />
    </div>
  
  )
}

export default App