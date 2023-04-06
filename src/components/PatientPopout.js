import React, {useState} from "react";
import { Modal, Box, Typography, Grid, Paper, TextField, Button, List, ListItem } from "@mui/material";

const PatientPopout = ({ isOpen, handleClose, patient }) => {

  console.log("PatientPopout: " + patient)

  if (!patient)
  {
    return null
  };
 



  return (
    <Modal open={isOpen} onClose={handleClose}>
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "background.paper",
        boxShadow: 24,
        p: 4,
        borderRadius: 2,
        maxHeight: "80vh",
        overflowY: "auto",
        maxWidth: "80vw",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Patient Data
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle1">Name</Typography>
            <Typography variant="body2">{patient.name}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle1">Date of Birth</Typography>
            <Typography variant="body2">{patient.dob}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle1">Insurance Number</Typography>
            <Typography variant="body2">{patient.insuranceNumber}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle1">Height</Typography>
            <Typography variant="body2">{patient.height}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle1">Weight</Typography>
            <Typography variant="body2">{patient.weight}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle1">Blood Pressure</Typography>
            <Typography variant="body2">{patient.bloodPressure}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="subtitle1">Temperature</Typography>
            <Typography variant="body2">{patient.temperature}</Typography>
          </Paper>
        </Grid>

        

      </Grid>
    </Box>
  </Modal>

 
  );
};

export default PatientPopout;

/*
  <Modal open={isOpen} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          maxHeight: "80vh",
          overflowY: "auto",
          maxWidth: "80vw",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Patient Data
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle1">Name</Typography>
              <Typography variant="body2">{patient.name}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle1">Date of Birth</Typography>
              <Typography variant="body2">{patient.dob}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle1">Insurance Number</Typography>
              <Typography variant="body2">{patient.insuranceNumber}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle1">Height</Typography>
              <Typography variant="body2">{patient.height}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle1">Weight</Typography>
              <Typography variant="body2">{patient.weight}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle1">Blood Pressure</Typography>
              <Typography variant="body2">{patient.bloodPressure}</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="subtitle1">Temperature</Typography>
              <Typography variant="body2">{patient.temperature}</Typography>
            </Paper>
          </Grid>


        </Grid>
      </Box>
    </Modal>
*/


