import React, { useState, useEffect, Component } from "react";
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
import { Router, Routes, Route, Navigate } from "react-router-dom";
import { auth } from "./firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";

import Patients_Bavaria from './pages/Patients_Bavaria';
import View_Study from './pages/View_Study_Bavaria';
import Shipment_Page from './pages/Shipment_Page_Bavaria';
import BavariaHome from "./pages/BavariaHome";
import FDAHome from "./pages/FDAHome";
import JHAddPatient from './pages/JaneHopkins_AddPatients';
import RouteProtect from "./components/RoutingProtect";
import BavariaRoutes from "./components/BavariaRoutes";
import ProtectedFDAHome from "./pages/FDAHome";

function App() {
  const [user] = useAuthState(auth);

  return (
    <div>
        <Routes>
          {/* <Route
            exact
            path="/"
            render={() => {
              if (user) {
                const domain = user.email.split("@")[1];
                switch (domain) {
                  case "fda.com":
                    return <FDAHome />;
                  case "janehopkins.com":
                    return <JaneHopkinsDoctor />;
                  case "bavaria.com":
                    return <BavariaHome />;
                  default:
                    return <Navigate to="/" />;
                }
              } else {
                return <Navigate to="/" />;
              }
            }}
          /> */}
          <Route
            exact path="/"
            element={<HomePage />}
          />
          <Route
            path="/FDAHome"
            element={<FDAHome />}
            // element={<RouteProtect allowedDomains={["fda.com"]} Component={FDAHome} />}
            // component={RouteProtect(["fda.com"], FDAHome)}
          />
          <Route
            path="/FDA/*"
            element={<FDAHome />}
          />
          <Route
            path="/JaneHopkinsDoctor"
            element={<JaneHopkinsDoctor />}
            // component={RouteProtect(["janehopkins.com"], JaneHopkinsDoctor)}
          />
          <Route
            path="/JaneHopkins_AddPatients"
            element={<JHAddPatient />}
          />
          <Route
            path="/BavariaHome"
            element={<BavariaHome />}
            // component={RouteProtect(["bavaria.com"], BavariaHome)}
          />
          <Route path="/Patients_Bavaria" element={<Patients_Bavaria />} />
//        <Route path="/View_Study" element={<View_Study />} />
//        <Route path="/Shipment_Page" element={<Shipment_Page />} />
        </Routes>
    </div>
  );
}

export default App;


// function App({ userEmail }) {
  
//   const BavariaHomeProtected = RouteProtect(
//     ['bavaria.com'],
//     BavariaHome
//   );

//   return (
//     <div>
//       <Routes>
//         <Route exact path="/" element={<HomePage />} />
//         <Route path="/FDAHome" element={<FDAHome />} />
//         <Route path="/JaneHopkinsDoctor" element={<JaneHopkinsDoctor />} />

//         <Route path="/BavariaHome" element={<BavariaHomeProtected />} />
//         <Route path="/Patients_Bavaria" element={<Patients_Bavaria />} />
//         <Route path="/View_Study" element={<View_Study />} />
//         <Route path="/Shipment_Page" element={<Shipment_Page />} />
//         <Route path="/FDA/*" element={<FDAHome />} />
//         <Route path="/JaneHopkins_AddPatients" element={<JHAddPatient />} />
//       </Routes>
      {/* <Routes>
        <RouteProtect path="/" component={HomePage} />
          <RouteProtect path="/FDAHome" organization="fda"
            user={user} component={FDAHome} />
          <RouteProtect path="/JaneHopkinsDoctor" organization=
            "janehopkins" user="user@example.com" 
            component={JaneHopkinsDoctor} />
          <RouteProtect path="/BavariaHome" organization=
            "bavaria" user="user@example.com" component=
            {BavariaHome} />
          <Route path="/Patients_Bavaria" element={<RouteProtect organization=
            "bavaria" user="user@example.com" component=
            {Patients_Bavaria} />} />
          <RouteProtect path="/View_Study" organization="bavaria"
            user="user@example.com" component={View_Study} />
          <RouteProtect path="/Shipment_Page" organization=
            "bavaria" user="user@example.com" component=
            {Shipment_Page} />
          <RouteProtect path="/JaneHopkins_AddPatients" 
            organization="janehopkins" user="user@example.com"
            component={JHAddPatient} />
      </Routes> */}
      
      {/* <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/FDAHome" element={<FDAHome />} />
        <Route path="/JaneHopkinsDoctor" element={<JaneHopkinsDoctor />} />

        <Route path="/BavariaHome" element={<BavariaHome />} />
        <Route path="/Patients_Bavaria" element={<Patients_Bavaria />} />
        <Route path="/View_Study" element={<View_Study />} />
        <Route path="/Shipment_Page" element={<Shipment_Page />} />
        <Route path="/FDA/*" element={<FDAHome />} />
        <Route path="/JaneHopkins_AddPatients" element={<JHAddPatient />} />



      </Routes> */}
//     </div>
//   );
// }

// export default App;