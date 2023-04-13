import React, { useState, useEffect } from "react";
import useBavaria from "../hooks/useBavaria";
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
  Stack,
  CircularProgress,
} from "@mui/material";




const Patients_Display = ({ isOpen, handleClose, patient }) => {
  const { entities } = useBavaria();

  const [viewMode, setViewMode] = useState("grid");

  const sendThisToPreviousVisits = patient?.name;  
  const [loading, setLoading] = useState(true);
  const [tableRows, setTableRows] = useState([]);
  const [patientName, setpatientName] = useState("David Upal"); // setPatientName when clicked on a name



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
        const drugResponse = await entities.drug.list();
        const drugResponseSize = await drugResponse.items.length;

        const rows = [

        ];

        for (let i = 0; i < drugResponseSize; i++) {
          console.log(drugResponse.items[i]);

          rows.push({
            uuID: drugResponse.items[i].id,
            placebo: drugResponse.items[i].placebo,
            batchNumber: drugResponse.items[i].batchNumber
          });
        }


        setTableRows(rows);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    };

    fetchPatients();
  }, [entities, patientName]);

  return (
    <div style={{ border: "1px solid black", padding: "20em, 40em, 20em, 20em" }}>

        <Table>
          <TableBody>

            <TableRow>
              <TableCell style={{fontSize: 50}}>Ongoing Trials: </TableCell>
            </TableRow>

            <TableRow>
            <TableCell ><Button style={{fontSize: 30}}>View Trials</Button></TableCell>
            </TableRow>

            <TableRow>
                <TableCell style={{fontSize: 30}}>Patient uuID  - Dosage information - Type of Drug</TableCell>
              </TableRow>

            {tableRows.map((row, index) => (
              <TableRow key={index}>
                <TableCell style={{fontSize: 30}}>Patient uuID: {row.uuID}</TableCell>
                <TableCell style={{fontSize: 30}}>Dosage information: {row.placebo}</TableCell>
                <TableCell style={{fontSize: 30}}>Type of Drug: {row.batchNumber}</TableCell>
              </TableRow>
            ))}
      
          </TableBody>
        </Table>
    
    </div>
  );
};

export default Patients_Display;