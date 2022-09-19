import React from "react";
import FeaturedCard from "../components/FeaturedCard.js";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {
  Container,
  ThemeProvider,
  Typography,
} from "@mui/material";
import styles from "../styles/General.module.css";

import products from "../src/data.json";

import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          "&.MuiTab-root": {
            border: 0,
            "&:hover": {
              borderBottom: "1px solid",
              color: "rgb(255,211,51)",
            },
          },
          "&.MuiTab-textColorPrimary": {
            color: "black",
            fontSize:  "1.5rem",
            marginRight: "20px",
            "&.Mui-selected": {
              color: "rgb(255,211,51)",
              border: "1px solid",
              borderRadius: "15px",
            },
          },
        },
      },
    },
  },
});

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container
      id="Featured Products"
      maxWidth="lg"
      sx={{
        marginTop: "40px",
        marginBottom: "40px",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          border: 0,
          borderColor: "rgb(255,211,51)",
          borderRadius: "15px",
          padding: "20px",
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
        }}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{ padding: "40px 20px 20px 40px" }}
          className={styles.Heading}
        >
          Featured Products
        </Typography>

        <Box
          sx={{
            width: "100%",
            typography: "body1",
          }}
        >
          <TabContext value={value}>
            <Box>
              <ThemeProvider theme={theme}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  variant="scrollable"
                  scrollButtons
                  allowScrollButtonsMobile
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  <Tab label="SK PUMP" value="1" />
                  <Tab label="SE-TECH" value="2" />
                  {/* <Tab label="Butterfly Valve" value="3" />
                  <Tab label="SEW Euro Drive" value="4" />
                  <Tab label="Category Five" value="5" />
                  <Tab label="Category Six" value="6" />
                  <Tab label="Category Seven" value="7" /> */}
                </TabList>
              </ThemeProvider>
            </Box>
            {products.map((product, index) => (
              <TabPanel value={product.id} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    gap: "20px",
                    flexWrap: "wrap",
                  }}
                >
                  {product.categories.map((category, index) => (
                    <FeaturedCard category={category} key={index} />
                  ))}
                </Box>
              </TabPanel>
            ))}
          </TabContext>
        </Box>
      </Box>
    </Container>
  );
}
