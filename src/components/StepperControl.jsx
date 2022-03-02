import React from 'react'

const StepperControl = ({handleClick, currentStep, steps}) => {
  return (
    <div className='container flex justify-around mt-4'>
      {/* back btn */}
      <button onClick={()=> handleClick()} className={`bg-white text-slate-400 py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-300 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${currentStep === 1 ? "opacity-50 cursor-not-allowed " : ""}`}>مرحله قبل</button>
      {/* next btn */}
      <button onClick={()=> handleClick("next")} className='bg-green-500 text-white py-2 px-4 rounded-xl font-semibold cursor-pointer  hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out'>{currentStep === steps.lenght -1 ? "Confirm" : "مرحله بعد"}</button>
    </div>
  )
}

export default StepperControl