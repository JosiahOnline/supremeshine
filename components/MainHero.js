import React from "react";
import CardMedia from "@mui/material/CardMedia";
import Hero from "../public/pic2.jpg";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";

export default function MediaCard() {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        padding: "0"
      }}
    >
      <CardMedia
        component="img"
        height="400px"
        image={Hero.src}
        alt="Professional"
      />
      <Typography
        variant="h4"
        sx={{
          padding: "20px 30px",
          fontWeight: 700,
          letterSpacing: ".1rem",
          color: "white",
          textDecoration: "none",
          backgroundColor: "rgb(255,211,51)",
          width: "100%",
          textAlign: "center",
          fontFamily: "Playfair Display, serif",
          borderBottomRightRadius: "5px",
          borderBottomLeftRadius: "5px",
        }}
      >
        Together We Help, We Grow, We Prosper!
      </Typography>
    </Container>
  );
}
