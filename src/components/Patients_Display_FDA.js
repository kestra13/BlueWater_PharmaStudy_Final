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

  const [tableRowsPending, setTableRowsPending] = useState([]);
  const [tableRowsAccepted, setTableRowsAccepted] = useState([]);
  const [tableRowsRejected, setTableRowsRejected] = useState([]);
  const [tableRowsCompleted, setTableRowsCompleted] = useState([]);

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
  /*************************************************************** */
  const [showPending, setShowPending] = useState(false);
  const [showAccepted, setShowAccepted] = useState(false);
  const [showRejected, setShowRejected] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const handlePendingClick = () => {
    setShowPending(!showPending);
  };

  const handleAcceptedClick = () => {
    setShowAccepted(!showAccepted);
  };

  const handleRejectedClick = () => {
    setShowRejected(!showRejected);
  };

  const handleCompletedClick = () => {
    setShowCompleted(!showCompleted);
  };

  const handleAllClick = () => {
    setShowAll(!showAll);
  };


    /*************************************************************** */


/*************************************************************** */

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const drugResponse = await entities.drug.list();
        const drugResponseSize = await drugResponse.items.length;

        let evaluate = "";

        const rows = [

        ];

        const rowsPending = [

        ];

        const rowsAccepted = [

        ];

        const rowsRejected = [

        ];

        const rowsCompleted = [

        ];

        for (let i = 0; i < drugResponseSize; i++) {
          console.log(drugResponse.items[i]);

          if (drugResponse.items[i].studyStatus === "pending"){
            evaluate = "Accept/";
          }

          rows.push({
            evaluate: "",
            studyName: drugResponse.items[i].studyName,
            studyStatus: drugResponse.items[i].studyStatus,
            shipmentHistory: drugResponse.items[i].shipmentHistory,
            drugType: drugResponse.items[i].drugType,
            uuID: drugResponse.items[i].id,
            placebo: drugResponse.items[i].placebo,
            batchNumber: drugResponse.items[i].batchNumber
          });

          if (drugResponse.items[i].studyStatus === "pending"){
            rowsPending.push({
              evaluate: "",
              studyName: drugResponse.items[i].studyName,
              studyStatus: drugResponse.items[i].studyStatus,
              shipmentHistory: drugResponse.items[i].shipmentHistory,
              drugType: drugResponse.items[i].drugType,
              uuID: drugResponse.items[i].id,
              placebo: drugResponse.items[i].placebo,
              batchNumber: drugResponse.items[i].batchNumber
            });
          }

          if (drugResponse.items[i].studyStatus === "accepted"){
          rowsAccepted.push({
            evaluate: "",
            studyName: drugResponse.items[i].studyName,
            studyStatus: drugResponse.items[i].studyStatus,
            shipmentHistory: drugResponse.items[i].shipmentHistory,
            drugType: drugResponse.items[i].drugType,
            uuID: drugResponse.items[i].id,
            placebo: drugResponse.items[i].placebo,
            batchNumber: drugResponse.items[i].batchNumber
          });
        }

        if (drugResponse.items[i].studyStatus === "rejected"){

          rowsRejected.push({
            evaluate: "",
            studyName: drugResponse.items[i].studyName,
            studyStatus: drugResponse.items[i].studyStatus,
            shipmentHistory: drugResponse.items[i].shipmentHistory,
            drugType: drugResponse.items[i].drugType,
            uuID: drugResponse.items[i].id,
            placebo: drugResponse.items[i].placebo,
            batchNumber: drugResponse.items[i].batchNumber
          });
        }

        if (drugResponse.items[i].studyStatus === "completed"){
          rowsCompleted.push({
            evaluate: "",
            studyName: drugResponse.items[i].studyName,
            studyStatus: drugResponse.items[i].studyStatus,
            shipmentHistory: drugResponse.items[i].shipmentHistory,
            drugType: drugResponse.items[i].drugType,
            uuID: drugResponse.items[i].id,
            placebo: drugResponse.items[i].placebo,
            batchNumber: drugResponse.items[i].batchNumber
          });
        }
        }


        setTableRows(rows);

        setTableRowsPending(rowsPending);
        setTableRowsAccepted(rowsAccepted);
        setTableRowsRejected(rowsRejected);
        setTableRowsCompleted(rowsCompleted);

        console.log(rows);

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

            <p onClick={handlePendingClick}><p style={{fontSize: 30, textDecoration: 'underline'}}>Pending:</p></p>


            {showPending && (
          
              <div>

            
            <TableRow>
                <TableCell style={{fontSize: 30, textDecoration: 'underline'}}>Patient uuID  - Dosage information - Type of Drug</TableCell>
              </TableRow>

            {tableRowsPending.map((rowsPending, index) => (
              <div>
                <TableRow key={index}>

                <TableCell style={{ fontSize: 30}}>Patient uuID: {rowsPending.uuID}</TableCell>
                <TableCell style={{ fontSize: 30 }}>Dosage information: {rowsPending.placebo}</TableCell>
                <TableCell style={{ fontSize: 30 }}>Type of Drug: {rowsPending.batchNumber}</TableCell>

                <TableCell style={{ fontSize: 30 }}>Study Name: {rowsPending.studyName}</TableCell>
                <TableCell style={{ fontSize: 30 }}>Drug Name: {rowsPending.drugType}</TableCell>
                <TableCell style={{ fontSize: 30 }}>Shipment history: {rowsPending.shipmentHistory}</TableCell>
                <TableCell style={{ fontSize: 30 }}>Study Status: {rowsPending.studyStatus}</TableCell>
              </TableRow>


              <TableRow>
                  <TableCell style={{ fontSize: 30 }}><Button>Accept</Button></TableCell>
                  <TableCell style={{ fontSize: 30 }}><Button>Reject</Button></TableCell>
                </TableRow>
                </div>
            ))}
             </div>
            )}

          <p onClick={handleAcceptedClick}><p style={{fontSize: 30, textDecoration: 'underline'}}>Accepted:</p></p>


        {showAccepted && (

          <div>


        <TableRow>
            <TableCell style={{fontSize: 30, textDecoration: 'underline'}}>Patient uuID  - Dosage information - Type of Drug</TableCell>
          </TableRow>

        {tableRowsAccepted.map((rowsAccepted, index) => (
          <div>
          <TableRow key={index}>
            <TableCell style={{fontSize: 30}}>Patient uuID: {rowsAccepted.uuID}</TableCell>
            <TableCell style={{fontSize: 30}}>Dosage information: {rowsAccepted.placebo}</TableCell>
            <TableCell style={{fontSize: 30}}>Type of Drug: {rowsAccepted.batchNumber}</TableCell>

            <TableCell style={{fontSize: 30}}>Study Name: {rowsAccepted.studyName}</TableCell>
            <TableCell style={{fontSize: 30}}>Drug Name: {rowsAccepted.drugType}</TableCell>
            <TableCell style={{fontSize: 30}}>Shipment history: {rowsAccepted.shipmentHistory}</TableCell>
            <TableCell style={{fontSize: 30}}>Study Status: {rowsAccepted.studyStatus}</TableCell>

          </TableRow>

          <TableRow>
                  <TableCell style={{ fontSize: 30 }}><Button>Accept</Button></TableCell>
                  <TableCell style={{ fontSize: 30 }}><Button>Reject</Button></TableCell>
                </TableRow>
                </div>
        ))}
        </div>
        )}

<p onClick={handleRejectedClick}><p style={{fontSize: 30, textDecoration: 'underline'}}>Rejected:</p></p>


      {showRejected && (

        <div>


        <TableRow>
            <TableCell style={{fontSize: 30, textDecoration: 'underline'}}>Patient uuID  - Dosage information - Type of Drug</TableCell>
          </TableRow>

        {tableRowsRejected.map((rowsRejected, index) => (
          <div>
          <TableRow key={index}>
            <TableCell style={{fontSize: 30}}>Patient uuID: {rowsRejected.uuID}</TableCell>
            <TableCell style={{fontSize: 30}}>Dosage information: {rowsRejected.placebo}</TableCell>
            <TableCell style={{fontSize: 30}}>Type of Drug: {rowsRejected.batchNumber}</TableCell>

            <TableCell style={{fontSize: 30}}>Study Name: {rowsRejected.studyName}</TableCell>
            <TableCell style={{fontSize: 30}}>Drug Name: {rowsRejected.drugType}</TableCell>
            <TableCell style={{fontSize: 30}}>Shipment history: {rowsRejected.shipmentHistory}</TableCell>
            <TableCell style={{fontSize: 30}}>Study Status: {rowsRejected.studyStatus}</TableCell>

          </TableRow>

          <TableRow>
                  <TableCell style={{ fontSize: 30 }}><Button>Accept</Button></TableCell>
                  <TableCell style={{ fontSize: 30 }}><Button>Reject</Button></TableCell>
                </TableRow>

                </div>
        ))}
        </div>
        )}

<p onClick={handleCompletedClick}><p style={{fontSize: 30, textDecoration: 'underline'}}>Completed:</p></p>


{showCompleted && (

  <div>


<TableRow>
    <TableCell style={{fontSize: 30, textDecoration: 'underline'}}>Patient uuID  - Dosage information - Type of Drug</TableCell>
  </TableRow>

{tableRowsCompleted.map((rowsCompleted, index) => (
  <div>
  <TableRow key={index}>
    <TableCell style={{fontSize: 30}}>Patient uuID: {rowsCompleted.uuID}</TableCell>
    <TableCell style={{fontSize: 30}}>Dosage information: {rowsCompleted.placebo}</TableCell>
    <TableCell style={{fontSize: 30}}>Type of Drug: {rowsCompleted.batchNumber}</TableCell>

    <TableCell style={{fontSize: 30}}>Study Name: {rowsCompleted.studyName}</TableCell>
    <TableCell style={{fontSize: 30}}>Drug Name: {rowsCompleted.drugType}</TableCell>
    <TableCell style={{fontSize: 30}}>Shipment history: {rowsCompleted.shipmentHistory}</TableCell>
    <TableCell style={{fontSize: 30}}>Study Status: {rowsCompleted.studyStatus}</TableCell>

  </TableRow>

  <TableRow>
                  <TableCell style={{ fontSize: 30 }}><Button>Accept</Button></TableCell>
                  <TableCell style={{ fontSize: 30 }}><Button>Reject</Button></TableCell>
                </TableRow>

                </div>
))}
 </div>
)}

<p onClick={handleAllClick}><p style={{fontSize: 30, textDecoration: 'underline'}}>ALL:</p></p>


      {showAll && (

        <div>


        <TableRow>
            <TableCell style={{fontSize: 30, textDecoration: 'underline'}}>Patient uuID  - Dosage information - Type of Drug</TableCell>
          </TableRow>

        {tableRows.map((row, index) => (
          <div>
          <TableRow key={index}>
            <TableCell style={{fontSize: 30}}>Patient uuID: {row.uuID}</TableCell>
            <TableCell style={{fontSize: 30}}>Dosage information: {row.placebo}</TableCell>
            <TableCell style={{fontSize: 30}}>Type of Drug: {row.batchNumber}</TableCell>

            <TableCell style={{fontSize: 30}}>Study Name: {row.studyName}</TableCell>
            <TableCell style={{fontSize: 30}}>Drug Name: {row.drugType}</TableCell>
            <TableCell style={{fontSize: 30}}>Shipment history: {row.shipmentHistory}</TableCell>
            <TableCell style={{fontSize: 30}}>Study Status: {row.studyStatus}</TableCell>

          </TableRow>

                </div>
        ))}
        </div>
        )}
          </TableBody>
        </Table>
    





    </div>
  );
};

export default Patients_Display;