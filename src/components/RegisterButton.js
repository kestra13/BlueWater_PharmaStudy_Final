import React, { useState } from 'react';
import { Button } from "@mui/material";
import "./LoginModal.css";
import RegisterModal from './RegisterModal';

const RegisterButton = () => {
    // const [open, setOpen] = useState(false);

    // const handleOpen = () => setOpen(true);
    // const handleClose = () => {
    //     setOpen(false);
    // };
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
                Register
            </Button>
            {isModalOpen && <RegisterModal onClose={handleCloseModal} />}
        </div>
        // <div>
        //     <Button
        //         sx={{ bgcolor: "#003987", color: "#fff" }}
        //         variant="contained"
        //         onClick={handleOpen}
        //     >
        //         Register
        //         <Modal
        //             open={open} onClose={handleClose}
        //             onClick={(e) => e.stopPropagation()}
        //         >
        //             <div>
        //                 Register
        //             </div>
        //         </Modal>
        //     </Button>
        // </div>
    )
}

export default RegisterButton