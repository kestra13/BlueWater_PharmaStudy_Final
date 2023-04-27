import React from 'react';
import logoutImg from '../assets/logout.png';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleAddPatientClick = () => {
    navigate('/JaneHopkins_AddPatients');
  };

  const handlePatientViewClick = () => {
    navigate('/JaneHopkinsDoctor'); 
  };


  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
         Jane Hopkins
        </Typography>
        <Button color="inherit" onClick = {handlePatientViewClick}>
          Patient View
        </Button>
        <Button color="inherit" onClick={handleAddPatientClick}>
          Add Patient 
        </Button>
        <Button color="inherit" onClick={onLogout}>
            <img src={logoutImg} alt="Logout" style={{ width: '2em', height: '2em' }} />
          Logout
          </Button>
      </Toolbar>
    </AppBar>
    </Box>
  );
};

export default Navbar;
