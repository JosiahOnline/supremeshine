import { products } from "../../dataDetails";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import Image from "next/image";

import { useRouter } from "next/router";
import { Box, Button, Container, Typography } from "@mui/material";
import Link from "next/link";
import { Grid } from "@material-ui/core";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { responsiveFontSizes } from "@mui/material";

export default function Details() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  const { query } = useRouter();
  const id = query.id;

  return (
    <div>
      {products.map(
        (
          {
            name,
            image,
            description,
            features: [feature1, feature2, feature3, feature4, feature5],
            technical: [{ flow, head, temp, sizes, capacity }],
            applications: [
              application1,
              application2,
              application3,
              application4,
              application5,
            ],
            model: [mode1, mode2, mode3, mode4, mode5],
          },
          index
        ) => {
          if (name === id) {
            return (
              <Container
                maxWidth="md"
                key={index}
                sx={{ padding: { xs: "20px 15px", sm: "10px 15px"} }}
              >
                <ThemeProvider theme={theme}>
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      gap: "10px",
                      alignItems: "center",
                      marginBottom: { xs: "20px", sm: "20px" },
                    }}
                  >
                    <Link href="/#Featured Products">
                      <ArrowCircleLeftIcon
                        sx={{
                          color: "rgb(255,211,51)",
                          fontSize: "2rem",
                          cursor: "pointer",
                        }}
                      />
                    </Link>
                    <Link href="/#Featured Products">
                      <Typography variant="h5" sx={{ cursor: "pointer" }}>
                        Back
                      </Typography>
                    </Link>
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "50px",
                    }}
                  >
                    <Grid
                      container
                      direction="row"
                      justifyContent="space-around"
                      alignItems="flex-start"
                    >
                      <Grid item xs={12} sm={6} md={5}>
                        <Box
                          sx={{
                            border: 1,
                            borderRadius: "10px",
                            borderColor: "rgb(255,211,51)",
                            padding: "30px 90px",
                          }}
                        >
                          <Image
                            src={image}
                            alt={name}
                            width={200}
                            height={200}
                            layout="responsive"
                          />
                        </Box>
                        <Typography
                          variant="h5"
                          align="center"
                          sx={{ padding: { xs:"15px", sm: '20px'} }}
                        >
                          {name}
                        </Typography>
                        <Box
                          sx={{
                            borderRadius: "5px",
                            backgroundColor: "rgb(255,211,51)",
                          }}
                        >
                          <Typography
                            variant="h6"
                            align="center"
                            sx={{ padding: { xs:"15px", sm: '20px'} }}
                          >
                            {description}
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={5} md={5}>
                        <Box
                          sx={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            gap: "50px",
                          }}
                        >
                          <Box
                            sx={{
                              marginTop: { xs: "50px", sm: "10px"},
                              paddingLeft: "30px",
                            }}
                          >
                            <Typography variant="h5" gutterBottom>
                              Features
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                              - {feature1}
                              <br />- {feature2}
                              <br />- {feature3}
                              <br />- {feature4}
                              <br />- {feature5}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              border: 1,
                              borderRadius: "5px",
                              borderColor: "rgb(255,211,51)",
                              padding: "30px",
                            }}
                          >
                            <Typography variant="h5" gutterBottom>
                              Technical Data
                            </Typography>
                            <Box sx={{ flex: 1, display: "flex", gap: "10px" }}>
                              <Typography variant="h6" gutterBottom>
                                Flow (Q)
                                <br />
                                Head (H)
                                <br />
                                Working
                                <br />
                                Sizes
                                <br />
                                Solid Handling Capacity <br />
                              </Typography>
                              <Typography variant="h6" gutterBottom>
                                :<br />
                                :<br />
                                :<br />
                                :<br />
                                :<br />
                              </Typography>
                              <Typography variant="h6" gutterBottom>
                                {flow} <br />
                                {head} <br />
                                {temp} <br />
                                {sizes} <br />
                                {capacity} <br />
                              </Typography>
                            </Box>
                          </Box>
                          <Box sx={{ paddingLeft: "30px" }}>
                            <Typography variant="h5" gutterBottom>
                              Applications
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                              - {application1}
                              <br />- {application2}
                              <br />- {application3}
                              <br />- {application4}
                              <br />- {application5}
                            </Typography>
                          </Box>
                          <Box
                            sx={{
                              border: 1,
                              borderRadius: "5px",
                              borderColor: "rgb(255,211,51)",
                              padding: "30px",
                            }}
                          >
                            <Typography variant="h5" gutterBottom>
                              Model
                            </Typography>
                            <Typography variant="h6" gutterBottom>
                              - {mode1}
                              <br />- {mode2}
                              <br />- {mode3}
                              <br />- {mode4}
                              <br />- {mode5}
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </ThemeProvider>
              </Container>
            );
          }
        }
      )}
    </div>
  );
}

// product.categories[0].features[0]  get "Realiability"
