import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { Box } from "@mui/system";
import eBrochure from "../public/eBrochure.png";
import { Button, responsiveFontSizes } from "@mui/material";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);
export default function Brochure() {
  return (
    <Container maxWidth="md"  id="e-Brochure">
      <ThemeProvider theme={theme}>
        <Box
         
          sx={{
            display: "flex",
            flexDirection: "column",
            border: 2,
            borderColor: "rgb(255,211,51)",
            borderRadius: "15px",
            padding: { xs: "30px 0px", md: "25px"},
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
                  top: {xs: -60, md: -55},
                  left: {xs: 15, md: 0},
                }}
              >
                e-Brochure
              </Box>
            </Box>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            <Grid
              item
              xs={10}
              md={3}
              component="img"
              alt="e-Brochure"
              rel="noopener"
              src={eBrochure.src}
            />

            <Grid item xs={10} md={9}>
              <Typography component="div" align="left" variant="h6">
                Our e-Brochure Product Catalogue 2022 is out! Find out more
                about our products and what we offer in our latest e-Brochure. 
                Simply click below download button and fill out your details.
              </Typography>
              <Button
                size='small'
                variant="contained"
                href="https://forms.gle/wPacsBn4KE2n1QyB9"
                target="_blank"
                color="secondary"
                sx={{
                  my: 2,
                  p: 1.5,
                }}
              >
                Download
              </Button>
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </Container>
  );
}
