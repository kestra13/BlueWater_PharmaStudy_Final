import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import FDAIcon from "../assets/fda-logo.jpeg";
import { createTheme } from '@mui/material/styles';
//0 / 124 / 186
const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
}); 
const FDANavbar = ({ onLogout }) => {
  return (
    <Box backgroundColor = "secondary" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <AppBar position="static">
      <Toolbar>
        <img src={FDAIcon} style={{ width: "200px", height: "120px" }} />
        <Button color="inherit">
          Patient View
        </Button>
        <Button color="inherit">
          Add Patient
        </Button>
        <Button color="inherit" onClick={onLogout}>
            Logout
          </Button>
      </Toolbar>
    </AppBar>
    </Box>
  );
};

export default FDANavbar;
