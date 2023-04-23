import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import TopBanner from "../components/TopBanner";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Stack,
  Box,
  TextField,
  Container,
  Typography,
  Grid,
  Paper,
} from "@mui/material";
import { signOut } from 'firebase/auth';
import { auth } from "../firebase-config";
import useJaneHopkins from "../hooks/useJaneHopkins";

const JHAddPatient = () => {
  const navigate = useNavigate();

  const { entities } = useJaneHopkins();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  function formatDate(dateString) {
    const date = new Date(dateString);
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const year = date.getFullYear();
    return month + '/' + day + '/' + year;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const firstName = e.target.elements.firstName.value;
  const lastName = e.target.elements.lastName.value;
  const address = e.target.elements.address.value;
  const dob = formatDate(e.target.elements.dob.value);
  const insuranceNumber = e.target.elements.insuranceNumber.value;
  const name = firstName + ' ' + lastName;

    try {
      const response = await entities.patient.add({
        name,address,insuranceNumber, dob, 
      });
      console.log("New Patient added:", response);

    } catch (error) {
      console.error("Error adding patient: ", error);
    }
  };




  return (
    <div>
      <TopBanner />
      <Navbar onLogout={handleLogout} />
      <Container maxWidth="md">
        <Paper elevation={3}>
          <Box p={4}>
            <Typography variant="h4" mb={4}>
              Add New Patient
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                  name = "firstName"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                  name = "lastName"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                  name = "address"
                    label="Address"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                  name = "dob"
                    label="Date of Birth"
                    type="date"
                    variant="outlined"
                    fullWidth
                    required
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                  name = "insuranceNumber"
                    label="Insurance Number"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
              </Grid>
              <Box mt={4}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  Add Patient
                </Button>
              </Box>
            </form>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default JHAddPatient;
