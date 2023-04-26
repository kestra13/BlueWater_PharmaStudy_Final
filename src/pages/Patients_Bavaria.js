import React from 'react';
import Navbar_Bavaria from "../components/Navbar_Bavaria";
import { useNavigate } from "react-router-dom";
import TopBanner from "../components/TopBanner";
import PatientList from "../components/PatientList_Bavaria";
import { signOut } from 'firebase/auth';
import { auth } from "../firebase-config";
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';

const RouteProtect = (allowedDomains, Component) => {
  const GuardedComponent = ({ ...props }) => {
    const [user] = useAuthState(auth);

    if (!user) {
      return <Navigate to="/" />;
    }

    const domain = user.email.split("@")[1];

    if (!allowedDomains.includes(domain)) {
      return <Navigate to="/" />;
    }

    return <Component {...props} />;
  };

  return GuardedComponent;
};

const Patients_Bavaria = () => {
  const navigate = useNavigate();

const handleLogout = async () => {
  await signOut(auth);
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

export default RouteProtect(["bavaria.com"], Patients_Bavaria);