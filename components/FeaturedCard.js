import React from "react";
import {Card, CardMedia, Typography } from "@mui/material";
import Link from 'next/link';
import styles from '../styles/General.module.css'

export default function FeaturedCard({ category }) {
  return (
    <Card
      sx={{
        maxWidth: "250px",
        padding: "0",
        borderRadius: "15px",
        boxShadow: 0,
        border: 1,
        borderColor: "rgb(255,211,51)",
        textAlign: "center",
      }}
    >
      <CardMedia
        component="img"
        image={category.image}
        alt={category.alt}
        sx={{ padding: "25px" }}
      />
      <Typography
        variant="h6"
        height="80px"
        component="div"
        backgroundColor="rgb(255,211,51)"
        padding="10px"
        fontWeight="bold"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Link href={`/products/` + category.name}>
            <a className={styles.buttonLink}>{category.name}</a>
        </Link>
      </Typography>
    </Card>
  );
}
