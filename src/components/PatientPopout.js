import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { grey } from '@mui/material/colors';


const PatientPopout = ({ isOpen, handleClose, patient }) => {
  const [viewMode, setViewMode] = useState("grid");

  console.log("PatientPopout: " + patient);

  if (!patient) {
    return null;
  }

  const handleGridView = () => {
    setViewMode("grid");
  };

  const handleListView = () => {
    setViewMode("list");
  };

  const renderPatientData = () => {
    if (viewMode === "grid") {
      return (
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
      );
    } else if (viewMode === "list") {
      return (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>Insurance Number</TableCell>
              <TableCell>Height</TableCell>
              <TableCell>Weight</TableCell>
              <TableCell>Blood Pressure</TableCell>
              <TableCell>Temperature</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{patient.name}</TableCell>
              <TableCell>{patient.dob}</TableCell>
              <TableCell>{patient.insuranceNumber}</TableCell>
              <TableCell>{patient.height}</TableCell>
              <TableCell>{patient.weight}</TableCell>
              <TableCell>{patient.bloodPressure}</TableCell>
              <TableCell>{patient.temperature}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
    }
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
        <Box sx={{ mb: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleGridView}
            sx={{
              mr: 1,
              borderColor: viewMode === "grid" ? "primary.main" : grey[500],
              backgroundColor:
                viewMode === "grid" ? "primary.main" : "transparent",
              color: viewMode === "grid" ? "white" : "primary.main",
            }}
          >
            Grid View
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleListView}
            sx={{
              borderColor: viewMode === "list" ? "primary.main" : grey[500],
              backgroundColor:
                viewMode === "list" ? "primary.main" : "transparent",
              color: viewMode === "list" ? "white" : "primary.main",
            }}
          >
            List View
          </Button>
        </Box>
        {renderPatientData()}
      </Box>
    </Modal>
  );
};

export default PatientPopout;
