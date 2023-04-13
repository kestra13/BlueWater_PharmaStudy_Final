import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import logo from "../assets/bavarialogo.jpg";
import Patients_Bavaria from "../pages/Patients_Bavaria";
import View_Study from "../pages/View_Study_Bavaria";
import Shipment_Page from "../pages/Shipment_Page_Bavaria";
import { Route, Routes, Link } from "react-router-dom";

const Navbar_Bavaria = ({ onLogout }) => {
  return (
    <div>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <img style={{ width: '100px', height: '100px' }} src={logo} alt="Logo" />
          </Typography>

          <Button color="inherit"
          component={Link}
          to="/BavariaHome"
          >
            Patient View
          </Button>

          <Button color="inherit"
          component={Link}
          to="/View_Study">
            View Study
          </Button>

          <Button color="inherit"
          component={Link}
          to="/Shipment_Page"
          >
            Send Sample
          </Button>

          <Button color="inherit" onClick={onLogout}>
              Logout
          </Button>
        </Toolbar>
      </AppBar>
      </Box>

      <Routes>
        <Route path="/BavariaHome" element={<Patients_Bavaria />} />
        <Route path="/View_Study" element={<View_Study />} />
        <Route path="/Shipment_Page" element={<Shipment_Page />} />
      </Routes>
    </div>

  );
};

export default Navbar_Bavaria;