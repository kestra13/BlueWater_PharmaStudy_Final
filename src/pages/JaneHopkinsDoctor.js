import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import TopBanner from "../components/TopBanner";
import AddPatient from "../components/AddPatient";
import useJaneHopkins from "../hooks/useJaneHopkins";
import PatientTable from "../components/PatientTable";
import {
  Button,
  Stack,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import SideBanner from "../components/SideBanner";
import { useNavigate } from "react-router-dom";
import PatientPopout from "../components/PatientPopout";
import { signOut } from 'firebase/auth';
import { auth } from "../firebase-config";

const JaneHopkinsDoctor = () => {
  const { entities } = useJaneHopkins();

  const [loading, setLoading] = useState(true);



  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isPopoutOpen, setIsPopoutOpen] = useState(false);

  const [patients, setPatients] = useState([]);

  const fetchPatients = async () => {
    try {
      const response = await entities.patient.list();
      //console.log("Response:", response);
      setPatients(response.items);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching patients:", error);
    }
  };

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
    setIsPopoutOpen(true);
  };

  const handlePopoutClose = () => {
    setIsPopoutOpen(false);
    setSelectedPatient(null);
  };

  useEffect(() => {
    

    fetchPatients();
  }, [entities]);

  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div>
      <TopBanner />
      <Navbar onLogout={handleLogout} />
      <Stack direction="row">
        <SideBanner />
        <Box></Box>
      </Stack>
      <h1>Patient List</h1>
      
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="200px"
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <PatientTable
            patients={patients}
            onPatientClick={handlePatientClick}
          />
          <PatientPopout
            isOpen={isPopoutOpen}
            handleClose={handlePopoutClose}
            patient={selectedPatient}
            onUpdatePatient = {fetchPatients}
          />
        </>
      )}
    </div>
  );
};

export default JaneHopkinsDoctor;