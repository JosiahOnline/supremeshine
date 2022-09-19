import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import eBrochure from "../public/eBrochure.png";
import { Button, responsiveFontSizes } from "@mui/material";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";


let theme = createTheme()
theme = responsiveFontSizes(theme);
export default function Brochure() {
  return (
    <Container maxWidth="lg">
      <ThemeProvider theme={theme}>
        <Box
          container
          id="e-Brochure"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            border: 2,
            borderColor: "rgb(255,211,51)",
            borderRadius: "15px",
            padding: "25px"
          }}
        >
          <Grid>
            <Box
              sx={{
                position: "relative",
              }}
            >
              <Box
                variant="h2"
                sx={{
                  fontSize: "2rem",
                  fontWeight: "700",
                  backgroundColor: "white",
                  padding: "0 15px",
                  position: "absolute",
                  top: -55,
                  left: "3.5%",
                  zIndex: "tooltip",
                }}
              >
                e-Brochure
              </Box>
            </Box>
          </Grid>
          <Box sx={{
            display: 'flex',
            justifyContent: "center",
            alignItems: 'center',
            gap: "10px"
          }}>
          <Grid container justifyContent="center" xs={6} md={3} >
            <Grid
              item
              xs={9}
              component="img"
              alt="e-Brochure"
              rel="noopener"
              src={eBrochure.src}
              sx={{
                borderRadius: "15px"
              }}
            />
          </Grid>
          <Grid container xs={6} md={9}>
            <Typography component="div" align="left" variant="h4">
              Our e-Brochure Product Catalogue 2022 is out! Click below and get
              a copy!
            </Typography>
            <Button
              variant="contained"
              href={eBrochure.src}
              target="_blank"
              color="secondary" 
              sx={{
                my: 2,
                p: 2,
              }}
            >
              Click Here
            </Button>
          </Grid>
          </Box>
        </Box>
      </ThemeProvider>
    </Container>
  );
}

{
  /* <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: 1,
            borderColor: "rgb(255,211,51)",
            borderRadius: "15px",
            position: "relative",
          }}
        >
          <Box
            variant="h2"
            sx={{
              fontSize: "2rem",
              fontWeight: "700",
              backgroundColor: "white",
              padding: "0 15px",
              position: "absolute",
              top: -30,
              left: "3.5%",
              zIndex: "tooltip",
            }}
          >
            e-Brochure
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Box
              component="img"
              sx={{
                height: 360,
                width: 300,
                padding: "10px",
                margin: "20px",
                borderRadius: "15px",
              }}
              alt="e-Brochure"
              rel="noopener"
              src={eBrochure.src}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                paddingRight: "30px",
                gap: "30px",
              }}
            >
              <Typography variant="h3" component="div">
                Our e-Brochure Product Catalogue 2022 is out! Click below and
                get a copy!
              </Typography>
              <Button
                variant="contained"
                href={eBrochure.src}
                target="_blank"
                sx={{ maxWidth: "250px", fontSize: "1.5rem" }}
              >
                Click Here
              </Button>
            </Box> */
}
