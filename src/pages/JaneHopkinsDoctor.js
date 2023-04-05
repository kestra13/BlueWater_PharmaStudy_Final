import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import TopBanner from "../components/TopBanner";
import AddPatient from "../components/AddPatient";
import useJaneHopkins from "../hooks/useJaneHopkins";
import PatientTable from "../components/PatientTable";
import { Button, Stack, Typography, Box } from "@mui/material";
import SideBanner from "../components/SideBanner";
import PatientDisplay from "../components/PatientDisplay";
import { ApolloProvider } from "@apollo/client";
import client from "../components/apolloClient";
import { useNavigate } from "react-router-dom";


const JaneHopkinsDoctor = () => {
    const { entities } = useJaneHopkins();

    console.log("Entities in App:", entities);
    console.log("Patient entity:", entities.patient);
  
  
    const [patients, setPatients] = useState([]);

    useEffect(() => {
      const fetchPatients = async () => {
        try {
          const response = await entities.patient.list();
          console.log("Response:", response);
          setPatients(response.items);
        } catch (error) {
          console.error("Error fetching patients:", error);
        }
      };
  
      fetchPatients();
    }, [entities]);
  
   
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  }
   

  return (
    <div>
      
    <TopBanner />
    <Navbar onLogout={handleLogout} />
    <Stack direction="row">
      <SideBanner />
      <Box>
     
     
      </Box>
    </Stack>
    <h1>Patient List</h1>
    <Button>View Patients</Button>
    <PatientTable patients={patients} />
    <ApolloProvider client = {client}>
    <PatientDisplay />
    </ApolloProvider>
  </div>
  )
}

export default JaneHopkinsDoctor;