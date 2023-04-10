import React from 'react';
import { ThemeProvider, AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import FDAIcon from "../assets/fda-logo.jpeg";
import FDAtheme from "../themes/FDAtheme";
import {Link} from 'react-router-dom';
const FDANavbar = ({ onLogout }) => {
  return (
	<ThemeProvider theme = {FDAtheme}>
    <Box backgroundColor = "primary" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <AppBar position="static">
      <Toolbar>
		  <img src={FDAIcon} style={{ width: "200px", height: "120px" }} />
		<Button component={Link} to = "/FDA/Patients" color="inherit">
          Patients
	  </Button>
		<Button component={Link} to = "/FDA/Drugs" color="inherit">
         Assign Drugs 
	  </Button>
		<Button component={Link} to = "/FDA/Study" color="inherit">
         View Study
	  </Button>
        <Button color="inherit" onClick={onLogout}>
            Logout
          </Button>
      </Toolbar>
    </AppBar>
    </Box>
	</ThemeProvider>
  );
};

export default FDANavbar;
