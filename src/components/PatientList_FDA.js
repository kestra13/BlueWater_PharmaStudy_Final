import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import AddPatient from "./AddPatient";
import PatientTable from "./PatientTable";
import {
  Button,
  Stack,
  Typography,
  Box,
  CircularProgress,
} from "@mui/material";
import SideBanner_Bavaria from "./SideBanner_FDA";
import PatientDisplay from "./PatientDisplay";
import PatientPopout from "./PatientPopout";
import PatientPopout_Bavaria from "./PatientPopout_Bavaria";
import useBavaria from "../hooks/useBavaria";

const PatientList = () => {
  const { entities } = useBavaria();

  const [loading, setLoading] = useState(true);



  const [selectedPatient, setSelectedPatient] = useState(null);
  const [isPopoutOpen, setIsPopoutOpen] = useState(false);

  const [patients, setPatients] = useState([]);

  const handlePatientClick = (patient) => {
    setSelectedPatient(patient);
    setIsPopoutOpen(true);
  };

  const handlePopoutClose = () => {
    setIsPopoutOpen(false);
    setSelectedPatient(null);
  };

  useEffect(() => {
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

    fetchPatients();
  }, [entities]);

  return (
    <div>
      <Stack direction="row">
        <SideBanner_Bavaria />
        <Box></Box>
      </Stack>
      <h1>Patient List</h1>
      <Button>View Patients</Button>
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
          <PatientPopout_Bavaria
            isOpen={isPopoutOpen}
            handleClose={handlePopoutClose}
            patient={selectedPatient}
          />
        </>
      )}
    </div>
  );
};

export default PatientList;
