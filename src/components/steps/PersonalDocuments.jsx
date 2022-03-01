import React, {useContext} from 'react'
import { StepperContext } from '../../contexts/StepperContext'
import DropFileInput from '../drop-file-input/DropFileInput';
import './App.css'

const PersonalDocuments = () => {
  const {userData, setUserData} = useContext(StepperContext);
  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData({...userData, [name]: value})
  }

  const onFileChange = (files) => {
    console.log(files);
}

  return (
    <div className='flex flex-col'>
      
      <div className="box w-full">
            <h2 className="header">
                مدارک مالک خودرو بترتیب بارگذاری شود
            </h2>
            <DropFileInput
                onFileChange={(files) => onFileChange(files)}
            />
        </div>

        <div>
          <p className='text-center'>صفحات شناسنامه، کارت ملی و گواهینامه بارگذاری شود</p>
        </div>
  
    </div>
  )
}

export default PersonalDocuments