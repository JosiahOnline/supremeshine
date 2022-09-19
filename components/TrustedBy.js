import React from "react";
import { Box, Typography } from "@mui/material";
import IoIGroup from "../public/clients/ioiGroup.png";
import Ijm from "../public/clients/ijm.png";
import SimeDarby from "../public/clients/SimeDarby.png";
import Petron from "../public/clients/petron.png";
import SabahSoftwoods from "../public/clients/SabahSoftwoods.png";
import TianSiang from "../public/clients/TianSiang.png";
import Wilmar from "../public/clients/wilmar.png";
import Genting from "../public/clients/Genting.png";
import Bousted from "../public/clients/Bousted.png";
import { Grid, Grow, useScrollTrigger } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { responsiveFontSizes } from "@mui/material";

export default function TrustedBy(props) {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  const { threshold } = {
    threshold: 1000,
    ...props,
  };
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: threshold,
    target: props.window ? window() : undefined,
  });
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ width: "100%", margin: "30px 0", backgroundColor: "#f5f5f5", padding:"50px 0" }}>
      <Grid container direction="column" justifyContent="center" alignItems="center"
      >
        <Typography
          variant="h1"
          component="div"
          sx={{ color: "rgb(255,211,51)", fontWeight: "bold", textAlign:"center"}}
        >
          TRUSTED BY
        </Typography>
        <Typography
          variant="h3"
          component="div"
          sx={{ color: "#152934", fontWeight: "bold", textAlign:"center"}}
        >
          Happy clients since 2002!
        </Typography>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={6} md={4}>
          <Grow
            appear={true}
            direction="down"
            in={trigger}
            style={{ transformOrigin: "0 0 0" }}
            {...(trigger ? { timeout: 500 } : {})}
            mountOnEnter
            unmountOnExit
          >
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box
                component="img"
                sx={{
                  height: 200,
                  width: 200,
                }}
                alt="The IOIGROUP"
                src={IoIGroup.src}
              />
            </Box>
          </Grow>
        </Grid>
        <Grid item xs={6} md={4}>
          <Grow
            appear={true}
            direction="down"
            in={trigger}
            style={{ transformOrigin: "0 0 0" }}
            {...(trigger ? { timeout: 1000 } : {})}
            mountOnEnter
            unmountOnExit
          ><Box display="flex" justifyContent="center" alignItems="center">
            <Box
              component="img"
              sx={{
                height: 200,
                width: 200,
              }}
              alt="The IOIGROUP"
              src={Ijm.src}
            /></Box>
          </Grow>
        </Grid>
        <Grid item xs={6} md={4}>
          <Grow
            appear={true}
            direction="down"
            in={trigger}
            style={{ transformOrigin: "0 0 0" }}
            {...(trigger ? { timeout: 1500 } : {})}
            mountOnEnter
            unmountOnExit
          ><Box display="flex" justifyContent="center" alignItems="center">
            <Box
              component="img"
              sx={{
                height: 200,
                width: 200,
              }}
              alt="The IOIGROUP"
              src={SimeDarby.src}
            /></Box>
          </Grow>
        </Grid>
        <Grid item xs={6} md={4}>
          <Grow
            appear={true}
            direction="down"
            in={trigger}
            style={{ transformOrigin: "0 0 0" }}
            {...(trigger ? { timeout: 2000 } : {})}
            mountOnEnter
            unmountOnExit
          ><Box display="flex" justifyContent="center" alignItems="center">
            <Box
              component="img"
              sx={{
                height: 200,
                width: 200,
              }}
              alt="The IOIGROUP"
              src={Petron.src}
            /></Box>
          </Grow>
        </Grid>
        <Grid item xs={6} md={4}>
          <Grow
            appear={true}
            direction="down"
            in={trigger}
            style={{ transformOrigin: "0 0 0" }}
            {...(trigger ? { timeout: 2500 } : {})}
            mountOnEnter
            unmountOnExit
          ><Box display="flex" justifyContent="center" alignItems="center">
            <Box
              component="img"
              sx={{
                height: 200,
                width: 200,
              }}
              alt="The IOIGROUP"
              src={SabahSoftwoods.src}
            /></Box>
          </Grow>
        </Grid>
        <Grid item xs={6} md={4}>
          <Grow
            appear={true}
            direction="down"
            in={trigger}
            style={{ transformOrigin: "0 0 0" }}
            {...(trigger ? { timeout: 3000 } : {})}
            mountOnEnter
            unmountOnExit
          ><Box display="flex" justifyContent="center" alignItems="center">
            <Box
              component="img"
              sx={{
                height: 200,
                width: 200,
              }}
              alt="The IOIGROUP"
              src={TianSiang.src}
            /></Box>
          </Grow>
        </Grid>
        <Grid item xs={6} md={4}>
          <Grow
            appear={true}
            direction="down"
            in={trigger}
            style={{ transformOrigin: "0 0 0" }}
            {...(trigger ? { timeout: 3500 } : {})}
            mountOnEnter
            unmountOnExit
          ><Box display="flex" justifyContent="center" alignItems="center">
            <Box
              component="img"
              sx={{
                height: 200,
                width: 200,
              }}
              alt="The IOIGROUP"
              src={Wilmar.src}
            /></Box>
          </Grow>
        </Grid>
        <Grid item xs={6} md={4}>
          <Grow
            appear={true}
            direction="down"
            in={trigger}
            style={{ transformOrigin: "0 0 0" }}
            {...(trigger ? { timeout: 4000 } : {})}
            mountOnEnter
            unmountOnExit
          ><Box display="flex" justifyContent="center" alignItems="center">
            <Box
              component="img"
              sx={{
                height: 200,
                width: 200,
              }}
              alt="The IOIGROUP"
              src={Genting.src}
            /></Box>
          </Grow>
        </Grid>
        <Grid item xs={6} md={4}>
          <Grow
            appear={true}
            direction="down"
            in={trigger}
            style={{ transformOrigin: "0 0 0" }}
            {...(trigger ? { timeout: 4500 } : {})}
            mountOnEnter
            unmountOnExit
          ><Box display="flex" justifyContent="center" alignItems="center">
            <Box
              component="img"
              sx={{
                height: 200,
                width: 200,
              }}
              alt="The IOIGROUP"
              src={Bousted.src}
            /></Box>
          </Grow>
        </Grid>
      </Grid>
    </Box></ThemeProvider>
  );
}
