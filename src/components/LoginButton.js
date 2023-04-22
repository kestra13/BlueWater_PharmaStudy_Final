import React, { useState } from 'react';
import { Button } from "@mui/material";
import "./LoginModal.css";
import LoginModal from './LoginModal';

const LoginButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <Button
                sx={{ bgcolor: "#003987", color: "#fff" }}
                variant="contained"
                onClick={handleOpenModal}
            >
                Login
            </Button>
            {isModalOpen && <LoginModal onClose={handleCloseModal} />}
        </div>
  )
}

export default LoginButton;