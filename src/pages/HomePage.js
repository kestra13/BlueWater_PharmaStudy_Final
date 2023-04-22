import React from 'react';
import { Stack, Typography } from "@mui/material";
import TopBanner from '../components/TopBanner';
import LoginAndRegisterButtons from '../components/LoginAndRegisterButtons';

const HomePage = () => {
  return (
    <div style={{ height: "100vh" }} className="App">
      <TopBanner/>
        <Typography
          sx = {{
            pt: 10,
            fontFamily: "Raleway"
          }}
          align = "center"
          variant = "h4"
        >
          Welcome. Login or register below to get started.
        </Typography>
      <Stack sx={{ pt: 10 }}
        direction = "row"
        justifyContent= "center"
        spacing = {7.5}
      >
        <LoginAndRegisterButtons />
       
        {/* <OrganizationButtons name = "FDA" logo = {FDAIcon} />
        <OrganizationButtons name = "Jane Hopkins" logo = {JHIcon} />
        <OrganizationButtons name = "Bavaria" logo = {BavariaIcon} /> */}
        {/* <OrganizationButtons name = "Login" />
        <OrganizationButtons name = "Register" /> */}

      </Stack>
    </div>
  )
}

export default HomePage;

/*<AppBar position="static">
<Toolbar variant="dense">
<IconButton
  edge="start"
  color="inherit"
  aria-label="menu"
  sx={{ mr: 2 }}
></IconButton>
<Typography variant="h2" color="inherit" component="div">
  PharmaStudy
</Typography>
    {/* <div style={{ position: "relative", top: "120px", right: "350px" }}>
  <Button variant="contained" onClick={() => addPatient()}>
    Add Patient
  </Button>
</div> **}
</Toolbar>
</AppBar>
*/
