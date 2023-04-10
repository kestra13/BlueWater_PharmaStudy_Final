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
import PatientDisplay from "../components/PatientDisplay";
import { ApolloProvider } from "@apollo/client";
import client from "../components/apolloClient";
import { useNavigate } from "react-router-dom";
import PatientPopout from "../components/PatientPopout";
import PatientList from "../components/PatientList";

const JaneHopkinsDoctor = () => {
  const { entities } = useJaneHopkins();

  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div>
      <TopBanner />
      <Navbar onLogout={handleLogout} />




          <PatientList />



    </div>
  );
};

export default JaneHopkinsDoctor;