import React from "react";
import JaneHopkinsDoctor from "./pages/JaneHopkinsDoctor";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";

import Patients_Bavaria from './pages/Patients_Bavaria';
import View_Study from './pages/View_Study_Bavaria';
import Shipment_Page from './pages/Shipment_Page_Bavaria';
import BavariaHome from "./pages/BavariaHome";
import FDAHome from "./pages/FDAHome";
import JHAddPatient from './pages/JaneHopkins_AddPatients';

function App() {

  return (
    <div>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/FDAHome" element={<FDAHome />} />
          <Route path="/FDA/*" element={<FDAHome />} />
          <Route path="/JaneHopkinsDoctor" element={<JaneHopkinsDoctor />} />
          <Route path="/JaneHopkins_AddPatients" element={<JHAddPatient />} />
          <Route path="/BavariaHome" element={<BavariaHome />} />
          <Route path="/Patients_Bavaria" element={<Patients_Bavaria />} />
          <Route path="/View_Study" element={<View_Study />} />
          <Route path="/Shipment_Page" element={<Shipment_Page />} />
        </Routes>
    </div>
  );
}

export default App;