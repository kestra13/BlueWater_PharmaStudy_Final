import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Button } from "@mui/material";

import Patients_Bavaria from "./Patients_Bavaria";
import View_Study from "./View_Study_Bavaria";
import Shipment_Page from "./Shipment_Page_Bavaria";
import TopBanner from "../components/TopBanner";

const BavariaHome = () => {
  return (
    <div>
      <TopBanner/>
    <nav>
        <Button
          component={Link}
          to="/Patients_Bavaria"
          variant="contained"
          color="primary"
          style={{ marginRight: "10px" }}
        >
          Patients
        </Button>
        <Button
          component={Link}
          to="/View_Study"
          variant="contained"
          color="primary"
          style={{ marginRight: "10px" }}
        >
          View Study
        </Button>
        <Button
          component={Link}
          to="/Shipment_Page"
          variant="contained"
          color="primary"
        >
          Shipment Page
        </Button>
      </nav>
    <Routes>
      <Route path="/Patients_Bavaria" element={<Patients_Bavaria />} />
      <Route path="/View_Study" element={<View_Study />} />
      <Route path="/Shipment_Page" element={<Shipment_Page />} />
    </Routes>
    </div>
  );
};

export default BavariaHome;
