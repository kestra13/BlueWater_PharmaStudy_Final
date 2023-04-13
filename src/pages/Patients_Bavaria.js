import React from 'react';
import Navbar_Bavaria from "../components/Navbar_Bavaria";
import { useNavigate } from "react-router-dom";
import TopBanner from "../components/TopBanner";
import PatientList from "../components/PatientList_Bavaria";
//import Patients_Bavaria from "./Patients_Bavaria";



const Patients_Bavaria = () => {
  const navigate = useNavigate();

const handleLogout = () => {
  navigate("/");
};

  return (

    <div>
      
      <TopBanner/>

      <Navbar_Bavaria onLogout={handleLogout} />


      <div>
        <PatientList/>
      </div>

      <div>
      </div>

    </div>
  )
}

export default Patients_Bavaria;