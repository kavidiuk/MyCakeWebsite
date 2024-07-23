import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import Cake from "../services/Cake.json";
import ScrollToTopButton from "../assets/utils/Utils";

const idsShow = [1, 2, 3, 4];
const mainProducts = Cake.filter((Cake) => idsShow.includes(Cake.id));

export default function HomePage() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Container>
        {isSmallScreen ? (
          <Box my={4}>
            <Typography variant="h3" align="center" gutterBottom>
              lorem1
            </Typography>
            {/* width="15rem" */}
            <Grid spacing={6}>
              <Grid item xs={12} sm={6} md={4} sx={{ p: 2 }}>
                <ProductCard
                  title={mainProducts[0].title}
                  description={mainProducts[0].description}
                  image={mainProducts[0].img}
                  id={mainProducts[0].id}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} sx={{ p: 2 }}>
                <ProductCard
                  title={mainProducts[1].title}
                  description={mainProducts[1].description}
                  image={mainProducts[1].img}
                  id={mainProducts[1].id}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} sx={{ p: 2 }}>
                <ProductCard
                  title={mainProducts[2].title}
                  description={mainProducts[2].description}
                  image={mainProducts[2].img}
                  id={mainProducts[2].id}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} sx={{ p: 2 }}>
                <ProductCard
                  title={mainProducts[3].title}
                  description={mainProducts[3].description}
                  image={mainProducts[3].img}
                  id={mainProducts[3].id}
                />
              </Grid>
            </Grid>
          </Box>
        ) : (
          <Box my={4}>
            <Typography variant="h3" align="center" gutterBottom>
              lorem1
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4} sx={{ p: 2 }}>
                <ProductCard
                  title={mainProducts[0].title}
                  description={mainProducts[0].description}
                  image={mainProducts[0].img}
                  id={mainProducts[0].id}
                />
              </Grid>
              {/* <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              >
              <Box sx={style}>
              <img src={mainProducts[1].img} alt="" />
              </Box>
              </Modal> */}
              <Grid item xs={12} sm={6} md={4} sx={{ p: 2 }}>
                <ProductCard
                  title={mainProducts[1].title}
                  description={mainProducts[1].description}
                  image={mainProducts[1].img}
                  id={mainProducts[1].id}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} sx={{ p: 2 }}>
                <ProductCard
                  title={mainProducts[2].title}
                  description={mainProducts[2].description}
                  image={mainProducts[2].img}
                  id={mainProducts[2].id}
                />
              </Grid>
              <Grid item xs={12} sm={6} md={4} sx={{ p: 2 }}>
                <ProductCard
                  title={mainProducts[3].title}
                  description={mainProducts[3].description}
                  image={mainProducts[3].img}
                  id={mainProducts[3].id}
                />
              </Grid>
            </Grid>
          </Box>
        )}
      </Container>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}
