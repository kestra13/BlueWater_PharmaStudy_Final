import React from 'react';
import { Typography, Box } from '@mui/material';
import BlueWater_TopBanner_bg from '../assets/BlueWater_TopBanner_bg.jpeg'
import BlueWater_logo from '../assets/blueWater_Logo.png'
const TopBanner = () => {
  return (
    <div>
    
    <Box sx={{ display: 'flex', alignItems: 'center', height: '100px', justifyContent: 'center' ,gap: 4, backgroundImage: `url(${BlueWater_TopBanner_bg})`, backgroundSize: '100% 100%'  }}>
    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
        <img src={BlueWater_logo} alt="Pharma Study Logo" width="100" height="100" />
      </Box>
      <Typography variant="h4" align="center" sx={{ fontFamily: 'Raleway', fontWeight: 500, color: "#191970", flexGrow: 1 }}>Blue Water Study</Typography>
      <Box sx={{ flexGrow: 1 }} />
      </Box>
    </div>
  );
};

export default TopBanner;