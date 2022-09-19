import React from "react";
import { Box, Typography, responsiveFontSizes, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

export default function Footer() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center" direction="column" alignItems="center"
        id="Contact Us"
        sx={{
          backgroundColor: "rgb(255,211,51)",
          padding: "30px 30px 70px 30px",
          marginTop: "80px",
          paddingTop: "50px",
        }}
      >
        <Typography variant="h2" component="div">
          Contact Us
        </Typography>
        <Box>
          <Grid container 
            sx={{
              marginTop: "30px",
              marginBottom: "15px",
            }}
          >
            
            <Typography
              variant="h4"
              component="div"
              sx={{ textAlign: "left", paddingLeft: "10px" }}
            ><span><LocationOnIcon sx={{ fontSize: "2.2rem" }} /></span>
              90000, Jalan Lintas Sibuga, lintas indsutrial park, 90000
              Sandakan, Sabah.
            </Typography>
          </Grid>
          <Grid container
            sx={{
              marginBottom: "15px",
            }}
          >
            
            <Typography
              variant="h4"
              component="div"
              sx={{ textAlign: "left", paddingLeft: "10px" }}
            ><span><PhoneIphoneIcon sx={{ fontSize: "2.2rem" }} /></span>
              Phone: +6013-883-0602
            </Typography>
          </Grid>
          <Grid container
            sx={{
              marginBottom: "15px"
            }}
          >
            
            <Typography
              variant="h4"
              component="div"
              sx={{ textAlign: "left", paddingLeft: "10px" }}
            ><span><EmailIcon sx={{ fontSize: "2.2rem" }} /></span>
              sales-supreme-evershine@gmail.com
            </Typography>
          </Grid>
        </Box>
      </Grid>
      </ThemeProvider>
  );
}
