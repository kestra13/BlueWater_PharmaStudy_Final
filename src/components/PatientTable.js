import React from "react";
import "./PatientTable.css";
import { Button } from "@mui/material";

const PatientTable = ({ patients, onPatientClick }) => {
  if (!Array.isArray(patients)) {
    return <div>No patient data available.</div>;
  }

  return (
    <table className="patient-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Date of Birth</th>
          <th>Insurance Number</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient) => (
          <tr key={patient.id}>
            <td>
              <Button onClick={() => onPatientClick(patient)}>
                {patient.name}
              </Button>
            </td>
            <td>{patient.dob}</td>
            <td>{patient.insuranceNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PatientTable;
