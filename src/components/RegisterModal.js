import React, { useState, useEffect } from "react";
import { Box, Modal, Stack, IconButton } from "@mui/material";
import "./LoginModal.css";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from "../firebase-config";

const RegisterModal = (props) => {

    const navigate = useNavigate();

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    // const [loginEmail, setLoginEmail] = useState("");
    // const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        });

    }, []);

    const register = async () => {
        try {
        const user = await createUserWithEmailAndPassword(
            auth,
            registerEmail,
            registerPassword
        );
        console.log(user);
        } catch (error) {
        console.log(error.message);
        }
    };

    // const login = async () => {
    //     try {
    //     const user = await signInWithEmailAndPassword(
    //         auth,
    //         loginEmail,
    //         loginPassword
    //     );
    //     console.log(user);
    //     } catch (error) {
    //     console.log(error.message);
    //     }

    //     if (user && props.name === "FDA") {
    //     navigate("/FDAHome");
    //     }

    //     if (user && props.name === "Jane Hopkins") {
    //     navigate("/JaneHopkinsDoctor");
    //     }

    //     if (user && props.name === "Bavaria") {
    //     navigate("/BavariaHome");
    //     }
        
    //     // else if (props.name === "FDA") {
    //     //   event.preventDefault();
    //         // navigate("/FDA/Patients");
    //     // }
    // };

    // const logout = async () => {
    //     await signOut(auth);
    // };

    // const handleSubmit = (event) => {
    //   if (props.name === "Jane Hopkins") {
    //     event.preventDefault();
    //     navigate("/JaneHopkinsDoctor");
    //   } else if (props.name === "Bavaria") {
    //     event.preventDefault();
    //     navigate("/BavariaHome");
    //   }
    // };

    const { onClose } = props;

    return (
        <div className="modal">
        <Modal
        open = {true} onClose = {onClose}
        sx={{
          color:"white"
        }}
      >
        <Box
          align = "center"
          sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              // height: '50vh', // Sets the height of the Box to 100% of the viewport height
              width: '100vw',
              borderStyle: "solid",
              borderColor: "#003987",
              backgroundColor: "blue",
            }}
        >
          <IconButton
            edge="end"
            color="inherit"
            aria-label="close"
            onClick={onClose}
            sx={{ position: "absolute",
                  top: "10px",
                  right: "10px",
                  color: "#fff"
                }}
          >
            <CloseIcon />
          </IconButton>
          <Stack
            spacing={2}
          >
            <Stack>
                <div>
                    <h2> Register User </h2>
                    <input
                        placeholder="Email..."
                        onChange={(event) => {
                        setRegisterEmail(event.target.value);
                        }}
                    />
                    <input
                        placeholder="Password..."
                        onChange={(event) => {
                        setRegisterPassword(event.target.value);
                        }}
                    />

                    <button onClick={register}> Create User</button>
                </div>

                {/* <h4> Register a user above. </h4> */}
                <h4>{user ? "User created. Go to login window and login."  : "Register a user above."}</h4>

              {/* <div>
                <h2> Login </h2>
                <input
                  placeholder="Email..."
                  onChange={(event) => {
                    setLoginEmail(event.target.value);
                  }}
                />
                <input
                  placeholder="Password..."
                  type="password"
                  onChange={(event) => {
                    setLoginPassword(event.target.value);
                  }}
                />

                <button onClick={login}> Login</button>
              </div>

              <h4>Current User Logged In: </h4>
              {user ? user.email : "Not Logged In"}

              <button onClick={logout}> Sign Out </button> */}
            </Stack>
          </Stack>
        </Box>   
      </Modal>
        
        </div>
  );
}

export default RegisterModal