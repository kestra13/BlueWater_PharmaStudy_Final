import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import TopBanner from "./components/TopBanner";
import AddPatient from "./components/AddPatient";
import useJaneHopkins from "./hooks/useJaneHopkins";
import PatientTable from "./components/PatientTable";
import { Button, Stack, Typography, Box } from "@mui/material";
import SideBanner from "./components/SideBanner";
import PatientDisplay from "./components/PatientDisplay";
import { ApolloProvider } from "@apollo/client";
import client from "./components/apolloClient";
import JaneHopkinsDoctor from "./pages/JaneHopkinsDoctor";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";

import Patients_Bavaria from './pages/Patients_Bavaria';
import View_Study from './pages/View_Study_Bavaria';
import Shipment_Page from './pages/Shipment_Page_Bavaria';
import BavariaHome from "./pages/BavariaHome";
import FDAHome from "./pages/FDAHome";


function App() {

  return (
    <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/FDAHome" element={<FDAHome />} />
          <Route path="/JaneHopkinsDoctor" element={<JaneHopkinsDoctor />} />
          
          <Route path="/BavariaHome" element={<BavariaHome />} />
          <Route path="/Patients_Bavaria" element={<Patients_Bavaria />} />
          <Route path="/View_Study" element={<View_Study />} />
          <Route path="/Shipment_Page" element={<Shipment_Page />} />
		  <Route path="/FDA/*" element={<FDAHome />} />
	
	  		

        </Routes>
    </div>
  );
}

export default App;