import React, {useContext} from 'react'
import { StepperContext } from '../../contexts/StepperContext'

const PrintInfo = () => {
  const {userData, setUserData} = useContext(StepperContext);
  const handleChange = (e) => {
    const {name, value} = e.target;
    setUserData({...userData, [name]: value})
  }
  return (
    <div className='flex flex-col'>
      
    </div>
  )
}

export default PrintInfo