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
import { Grow, useScrollTrigger } from "@material-ui/core";

export default function TrustedBy(props) {

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
    <Box sx={{ width: "100%", margin: "30px 0", backgroundColor: "#f5f5f5" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          padding: "30px",
        }}
      >
        <Typography
          variant="h1"
          component="div"
          sx={{ color: "rgb(255,211,51)", fontWeight: "bold" }}
        >
          TRUSTED BY
        </Typography>
        <Typography
          variant="h3"
          component="div"
          sx={{ color: "#152934", fontWeight: "bold" }}
        >
          Happy clients since 2002!
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          minHeight: "300px",
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
          width: "70%",
          marginLeft: "15%",
        }}
      >
        <Grow 
          appear={true}
          direction="down"
          in={trigger}
          style={{ transformOrigin: "0 0 0" }}
          {...(trigger ? { timeout: 500 } : {})}
          mountOnEnter
          unmountOnExit
        >
          <Box
            className="triggerBox"
            component="img"
            sx={{
              height: 200,
              width: 200,
            }}
            alt="The IOIGROUP"
            src={IoIGroup.src}
          />
        </Grow>
        <Grow
          appear={true}
          direction="down"
          in={trigger}
          style={{ transformOrigin: "0 0 0" }}
          {...(trigger ? { timeout: 1000 } : {})}
          mountOnEnter
          unmountOnExit
        >
          <Box 
            component="img"
            sx={{
              height: 200,
              width: 200,
            }}
            alt="The IOIGROUP"
            src={Ijm.src}
          />
        </Grow>
        <Grow
          appear={true}
          direction="down"
          in={trigger}
          style={{ transformOrigin: "0 0 0" }}
          {...(trigger ? { timeout: 1500 } : {})}
          mountOnEnter
          unmountOnExit
        >
          <Box 
            component="img"
            sx={{
              height: 200,
              width: 200,
            }}
            alt="The IOIGROUP"
            src={SimeDarby.src}
          />
        </Grow>
        <Grow
          appear={true}
          direction="down"
          in={trigger}
          style={{ transformOrigin: "0 0 0" }}
          {...(trigger ? { timeout: 2000 } : {})}
          mountOnEnter
          unmountOnExit
        >
          <Box 
            component="img"
            sx={{
              height: 200,
              width: 200,
            }}
            alt="The IOIGROUP"
            src={Petron.src}
          />
        </Grow>
        <Grow
          appear={true}
          direction="down"
          in={trigger}
          style={{ transformOrigin: "0 0 0" }}
          {...(trigger ? { timeout: 2500 } : {})}
          mountOnEnter
          unmountOnExit
        >
          <Box 
            component="img"
            sx={{
              height: 200,
              width: 200,
            }}
            alt="The IOIGROUP"
            src={SabahSoftwoods.src}
          />
        </Grow>
        <Grow
          appear={true}
          direction="down"
          in={trigger}
          style={{ transformOrigin: "0 0 0" }}
          {...(trigger ? { timeout: 3000 } : {})}
          mountOnEnter
          unmountOnExit
        >
          <Box 
            component="img"
            sx={{
              height: 200,
              width: 200,
            }}
            alt="The IOIGROUP"
            src={TianSiang.src}
          />
        </Grow>
        <Grow
          appear={true}
          direction="down"
          in={trigger}
          style={{ transformOrigin: "0 0 0" }}
          {...(trigger ? { timeout: 3500 } : {})}
          mountOnEnter
          unmountOnExit
        >
          <Box 
            component="img"
            sx={{
              height: 200,
              width: 200,
            }}
            alt="The IOIGROUP"
            src={Wilmar.src}
          />
        </Grow>
        <Grow
          appear={true}
          direction="down"
          in={trigger}
          style={{ transformOrigin: "0 0 0" }}
          {...(trigger ? { timeout: 4000 } : {})}
          mountOnEnter
          unmountOnExit
        >
          <Box 
            component="img"
            sx={{
              height: 200,
              width: 200,
            }}
            alt="The IOIGROUP"
            src={Genting.src}
          />
        </Grow>
        <Grow
          appear={true}
          direction="down"
          in={trigger}
          style={{ transformOrigin: "0 0 0" }}
          {...(trigger ? { timeout: 4500 } : {})}
          mountOnEnter
          unmountOnExit
        >
          <Box 
            component="img"
            sx={{
              height: 200,
              width: 200,
            }}
            alt="The IOIGROUP"
            src={Bousted.src}
          />
        </Grow>
      </Box>
    </Box>
  );
}
