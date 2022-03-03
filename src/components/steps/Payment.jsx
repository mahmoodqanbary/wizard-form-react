import React, {useContext} from 'react'
import { StepperContext } from '../../contexts/StepperContext'


const Payment = () => {
  const {userData, setUserData} = useContext(StepperContext);
  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData({...userData, [name]: value})
  }
  return (
    <div className='grid grid-cols-2 gap-2'>
         <div className='w-full mx-2 col-span-3'>
      <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
        شماره کارت
      </div>
      <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
      <input onChange={handleChange}
      value={userData["cardnumber"] || ""}
      name="cardnumber"
      placeholder=''
      maxLength="16"
      
      className='p-1 px2
       appearance-none outline-none w-full text-gray-800 ' />
      </div>
      </div>

      <div className='w-full mx-2 '>
      <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
        ماه
      </div>
      <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
      <input onChange={handleChange}
      value={userData["month"] || ""}
      name="month"
      placeholder='xx'
      maxLength="2"
      className='p-1 px2
       appearance-none outline-none w-full text-gray-800 ' />
      </div>
      </div>

      <div className='w-full mx-2 '>
      <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
        سال
      </div>
      <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
      <input onChange={handleChange}
      value={userData["year"] || ""}
      name="year"
      placeholder='xx'
      maxLength="2"
      className='p-1 px2
       appearance-none outline-none w-full text-gray-800 ' />
      </div>
      </div>

      <div className='w-full mx-2 '>
      <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
        cvv2
      </div>
      <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
      <input onChange={handleChange}
      value={userData["cvv2"] || ""}
      name="cvv2"
      placeholder=''
      maxLength="4"
      className='p-1 px2
       appearance-none outline-none w-full text-gray-800 ' />
      </div>
      </div>

 
    </div>
  )
}

export default Payment