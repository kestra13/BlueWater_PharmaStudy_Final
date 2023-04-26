import React from "react";
import { Route, Routes } from "react-router-dom";
import RouteProtect from "./RoutingProtect";

// import your Bavaria pages/components
import BavariaHome from "../pages/BavariaHome";
import Patients_Bavaira from "../pages/Patients_Bavaria";
import Shipment_Page from "../pages/Shipment_Page_Bavaria";
import View_Study from "../pages/View_Study_Bavaria";
// ... other Bavaria pages/components here ...

// define the allowed domains for Bavaria
const allowedBavariaDomains = ["bavaria.com"];

const BavariaRoutes = () => {
//   return (
//     <Routes>
//       <RouteProtect
//         exact
//         path="/BavariaHome"
//         component={BavariaHome}
//         allowedDomains={allowedBavariaDomains}
//       />
//       <RouteProtect
//         exact
//         path="/Patients_Bavaria"
//         component={Patients_Bavaira}
//         allowedDomains={allowedBavariaDomains}
//       />
//       {/* ... other Bavaria routes here ... */}
//     </Routes>
//   );
};

export default BavariaRoutes;
