import React from "react";
import { Box, Typography, Avatar, Stack } from "@mui/material";
import DocProfilePic from "../assets/Harold.jpg";

const SideBanner_Bavaria = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "relative",
        background: "#82b5e0",
        top: 0,
        justifyContent: "space-between",
        overflowY: "auto",
        height: {sx: 'auto', md: '100%'},
        flexDirection: {md: 'column'},
      }}
    >
      
      <div style={{ padding: 50 }}>
        <Avatar    sx={{ width: 150, height: 150 }} alt="Doctor" src={DocProfilePic} />
        <Typography variant = "h6">Dr. Harold Bavaria</Typography>
        <Typography>Sacramento, California</Typography>
      </div>
    
    </Stack>
  );
};

export default SideBanner_Bavaria;