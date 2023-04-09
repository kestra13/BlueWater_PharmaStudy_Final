import React, { useState } from "react";
import {
  Button,
  Stack,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

// const data = [
//   { id: 1, name: 'FDA' },
//   { id: 2, name: 'Jane Hopkins' },
//   { id: 3, name: 'Bavaria' },
// ];

const LoginModal = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {
    if (props.name === "Jane Hopkins") {
      navigate("/JaneHopkinsDoctor");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    if (props.name === "Jane Hopkins") {
      event.preventDefault();
      navigate("/JaneHopkinsDoctor");
    } else if (props.name === "Bavaria") {
      event.preventDefault();
      navigate("/BavariaHome");
    } else if (props.name === "FDA") {
      event.preventDefault();
      navigate("/FDAHome");
    }
  };

  return (
    <div className="modal">
      <IconButton
        edge="end"
        color="inherit"
        aria-label="close"
        onClick={() => {
          props.onClose();
        }}
        sx={{ position: "absolute", top: "10px", right: "10px", color: "#fff" }}
      >
        <CloseIcon />
      </IconButton>
      <Typography align="center" sx={{ color: "#fff" }} variant="h1">
        {props.name}
      </Typography>
      <Typography align="center" sx={{ color: "#fff" }} variant="h2">
        Login
      </Typography>
      <Stack spacing={4}>
        <TextField
          sx={{
            input: {
              fontWeight: "500",
              border: "none",
              borderRadius: "4px",
            },
            width: "400px",
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          //value={search}
          //onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="E-mail Address"
          type="text"
        />
        <TextField
          sx={{
            input: {
              fontWeight: "500",
              border: "none",
              borderRadius: "4px",
            },
            width: "400px",
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          //value={search}
          //onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Password"
          type="text"
        />
        <Button
          sx={{
            bgcolor: "#004000",
            width: "100px",
          }}
          variant="contained"
          onClick={handleSubmit}
        >
          Submit
        </Button>
        <Button
          sx={{
            bgcolor: "#004000",
            width: "100px",
          }}
          variant="contained"
        >
          Register
        </Button>
      </Stack>
    </div>
  );
};

export default LoginModal;
