import React from "react";
import { Box, Typography, responsiveFontSizes } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

export default function Footer() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (

      <Box
        id="Contact Us"
        sx={{
          backgroundColor: "rgb(255,211,51)",
          textAlign: "center",
          padding: "30px 30px 70px 30px",
          marginTop: "80px",
          paddingTop: "50px",
        }}
      >
        <Typography variant="h2" component="div">
          Contact Us
        </Typography>
        <Box>
          <Box
            sx={{
              width: "70%",
              marginLeft: "15%",
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "row",
              marginTop: "30px",
              marginBottom: "15px",
            }}
          >
            <LocationOnIcon sx={{ fontSize: "2.2rem" }} />
            <Typography
              variant="h4"
              component="div"
              sx={{ textAlign: "left", paddingLeft: "10px" }}
            >
              90000, Jalan Lintas Sibuga, lintas indsutrial park, 90000
              Sandakan, Sabah.
            </Typography>
          </Box>
          <Box
            sx={{
              width: "70%",
              marginLeft: "15%",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              marginBottom: "15px",
            }}
          >
            <PhoneIphoneIcon sx={{ fontSize: "2.2rem" }} />
            <Typography
              variant="h4"
              component="div"
              sx={{ textAlign: "left", paddingLeft: "10px" }}
            >
              Phone: +6013-883-0602
            </Typography>
          </Box>
          <Box
            sx={{
              width: "70%",
              marginLeft: "15%",
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              marginBottom: "15px",
            }}
          >
            <EmailIcon sx={{ fontSize: "2.2rem" }} />
            <Typography
              variant="h4"
              component="div"
              sx={{ textAlign: "left", paddingLeft: "10px" }}
            >
              sales-supreme-evershine@gmail.com
            </Typography>
          </Box>
        </Box>
      </Box>
  
  );
}
