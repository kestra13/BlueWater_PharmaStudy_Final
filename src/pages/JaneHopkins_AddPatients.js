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
import { Route, Routes, Navigate } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';

const RouteProtect = (allowedDomains, Component) => {
  const GuardedComponent = ({ ...props }) => {
    const [user] = useAuthState(auth);

    if (!user) {
      return <Navigate to="/" />;
    }

    const domain = user.email.split("@")[1];

    if (!allowedDomains.includes(domain)) {
      return <Navigate to="/" />;
    }

    return <Component {...props} />;
  };

  return GuardedComponent;
};

const JHAddPatient = () => {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
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
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Phone"
                    type="tel"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Address"
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

export default RouteProtect(["janehopkins.com"], JHAddPatient);
