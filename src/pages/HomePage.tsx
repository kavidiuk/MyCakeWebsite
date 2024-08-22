import React from "react";
import { Box, Container, Grid, Typography, Grow, Button } from "@mui/material";
import ProductCard from "../components/ProductCard";
import Cake from "../services/Cake.json";
import ScrollToTopButton from "../assets/utils/Utils";
import heroImage from "../assets/images/6.png";
import { useNavigate } from "react-router-dom";
import "typeface-playfair-display";
const idsShow = [5, 26, 34, 40];
const mainProducts = Cake.filter((Cake) => idsShow.includes(Cake.id));

const customTitles = [
  "Compleanno",
  "Matrimonio",
  "Prima Comunione",
  "Speciale",
];
const custonDescriptions = [
  "Scopri le nostri torte per rendere unico ogni compleanno.",
  "Celebra il vostro matrimonio con una torta indimenticabile.",
  "Celebra la prima comunione con una torta indimenticabile.",
  "Torte speciali per momenti altrettanto speciali e memorabili.",
];
export default function HomePage() {
  // const theme = useTheme();
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const handlePage = () => {
    //navigate(`/products`);
    window.scrollTo({ top: 550, behavior: "smooth" });
  };

  const handleCategoryPage = (category: string) => navigate(`/${category}`);

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          height: "30rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <Box>
          <Typography
            variant="h2"
            gutterBottom
            sx={{ fontFamily: "Playfair Display, serif" }}
          >
            Eleganza in Ogni Fetta
          </Typography>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ fontFamily: "Playfair Display, serif" }}
          >
            Torte e pasticcini realizzati con passione
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{ mt: 2 }}
            onClick={handlePage}
          >
            Esplora Ora
          </Button>
        </Box>
      </Box>

      <Container>
        <Box my={4}>
          <Typography variant="h3" align="center" gutterBottom>
            Prodotti in Evidenza
          </Typography>
          <Grid container spacing={4}>
            {mainProducts.map((product, index) => (
              <Grow in={true} timeout={1000 + index * 500} key={product.id}>
                <Grid item xs={12} sm={6} md={4} sx={{ textAlign: "center" }}>
                  <ProductCard
                    title={customTitles[index]}
                    //description={product.description}
                    image={product.img}
                    id={product.id}
                    category={product.category}
                    navigationPath={() => handleCategoryPage(product.category)}
                    description={custonDescriptions[index]}
                  />
                </Grid>
              </Grow>
            ))}
          </Grid>
        </Box>
      </Container>
      <ScrollToTopButton />
    </>
  );
}
