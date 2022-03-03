import React, {useContext, useState} from 'react'
import { StepperContext } from '../../contexts/StepperContext'
import  DtPicker  from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/index.css'
import './App.css'
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";


const PersonalInfo = () => {
  const {userData, setUserData} = useContext(StepperContext);
  const {selectedDay, setSelectedDay} = useContext(StepperContext);
  const [date, setDate] = useState(null)
  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData({...userData, [name]: value})
  }


  return (
    <div className='grid grid-cols-3 gap-2'>
      <div className='w-full mx-2 '>
      <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
        نام
      </div>
      <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
      <input onChange={handleChange}
      value={userData["name"] || ""}
      name="name"
      placeholder=''
      className='p-1 px2
       appearance-none outline-none w-full text-gray-800 ' />
      </div>
      </div>

      <div className='w-full mx-2 '>
      <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
        نام خانوادگی
      </div>
      <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
      <input onChange={handleChange}
      value={userData["lastname"] || ""}
      name="lastname"
      placeholder=''
      className='p-1 px2
       appearance-none outline-none w-full text-gray-800' />
      </div>
      </div>

      <div className='w-full mx-2 '>
      <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
        نام پدر
      </div>
      <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
      <input onChange={handleChange}
      value={userData["fathername"] || ""}
      name="fathername"
      placeholder=''
      className='p-1 px2
       appearance-none outline-none w-full text-gray-800' />
      </div>
      </div>
      <div className='w-full mx-2 '>
      <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
        تاریخ تولد
      </div>
      <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
       <DatePicker
      value={userData.birthday}
      onChange={(date) => {
        setUserData({...userData, ['birthday']: date})
      }}
      calendarPopperPosition="bottom"
      inputPlaceholder="انتخاب کنید"
      locale="fa"
      shouldHighlightWeekends
      inputClassName='my-custom-input responsive-calendar'
     
    />
      </div>
      </div>

      <div className='w-full mx-2 '>
      <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
        شماره شناسنامه
      </div>
      <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
      <input onChange={handleChange}
      value={userData["idnumber"] || ""}
      name="idnumber"
      placeholder=''
      className='p-1 px2
       appearance-none outline-none w-full text-gray-800' />
      </div>
      </div>


      <div className='w-full mx-2 '>
      <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
        محل صدور
      </div>
      <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
      <input onChange={handleChange}
      value={userData["issuance"] || ""}
      name="issuance"
      placeholder=''
      className='p-1 px2
       appearance-none outline-none w-full text-gray-800' />
      </div>
      </div>

      <div className='w-full mx-2 '>
      <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
        شماره ملی
      </div>
      <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
      <input onChange={handleChange}
      value={userData["idcardnumber"] || ""}
      name="idcardnumber"
      placeholder=''
      type='text'
     
      maxLength="10"
      className='p-1 px2
       appearance-none outline-none w-full text-gray-800' />
      </div>
      </div>

      <div className='w-full mx-2 '>
      <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
        شماره همراه
      </div>
      <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
      <input onChange={handleChange}
      value={userData["phonenumber"] || ""}
      name="phonenumber"
      placeholder=''
      maxLength="11"
      className='p-1 px2
       appearance-none outline-none w-full text-gray-800' />
      </div>
      </div>
      
      <div className='w-full mx-2 '>
      <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
         کد پستی
      </div>
      <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
      <input onChange={handleChange}
      value={userData["postcard"] || ""}
      name="postcard"
      placeholder=''
      maxLength="10"
      className='p-1 px2
       appearance-none outline-none w-full text-gray-800' />
      </div>
      </div>


      <div className='w-full mx-2 col-span-3'>
      <div className='font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase'>
         آدرس
      </div>
      <div className='bg-white my-2 p-1 flex border border-gray-200 rounded'>
      <input onChange={handleChange}
      value={userData["address"] || ""}
      name="address"
      placeholder=''
      className='p-1 px2
       appearance-none outline-none w-full text-gray-800' />
      </div>
      </div>


    </div>
  )
}

export default PersonalInfo