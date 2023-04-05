import React from 'react';
import { Modal, Box, Typography } from '@mui/material';

const PatientPopout = ({ isOpen, handleClose, patient }) => {
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          maxHeight: '80vh',
          overflowY: 'auto',
          maxWidth: '80vw',
        }}
      >
        <Typography variant="h6" gutterBottom>
          Patient Data
        </Typography>
        {patient && (
          <>
            <Typography variant="subtitle1">{patient.name}</Typography>
            <Typography variant="body2">{`DOB: ${patient.dob}`}</Typography>
            <Typography variant="body2">{`Insurance Number: ${patient.insuranceNumber}`}</Typography>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default PatientPopout;
