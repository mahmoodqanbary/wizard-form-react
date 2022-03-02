import React, { useContext, useRef} from "react";
import ReactToPrint from 'react-to-print';
import { StepperContext } from "../../contexts/StepperContext";
import "./App.css";


const PrintInfo = () => {
  const componentRef = useRef();
  const { userData, setUserData } = useContext(StepperContext);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <>
      
     <div ref={componentRef}>
     <div className="bg-img" >
        <div className="w-full mt-52">
          <div className="font-info">
            <span className="info-1">{userData.name} {userData.lastname}</span>
            <span className="info-2">{userData.fathername}</span>
            <span className="info-3">{userData.birthday}</span>
            <span className="info-4">{userData.issuance}</span>
            <span className="info-5">{userData.idnumber}</span>
            <span className="info-6">{userData.idcardnumber}</span>
            <span className="info-7">{userData.postcard}</span>
            <span className="info-8">{userData.address}</span>
          </div>
        </div>
      </div>
     </div>

      <div className="bg-orange-500 text-center w-52 btn-center mt-4 rounded-xl text-white cursor-pointer  hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out">
      <ReactToPrint
        trigger={() => <button>گرفتن پرینت</button>}
        content={() => componentRef.current}
      />
      </div>
    </>
  );
};

export default PrintInfo;
