import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import cake from "../services/Cake.json";
import ProductCard from "../components/ProductCard";
import { Box, Button, Container, Grid, Grow, Typography } from "@mui/material";
import ScrollToTopButton from "../assets/utils/Utils";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const GeneralPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const location = useLocation();
  const pathname = location.pathname;
  const navigate = useNavigate();

  const category = pathname.split("/").pop() || "";

  const filteredProducts = cake.filter((cake) => cake.category === category);

  const handleDetailPage = (id: number) => {
    navigate(`/products/${id}`);
  };

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <Container sx={{ mt: 3 }}>
        <Button
          onClick={handleBackClick}
          startIcon={<ArrowBackIcon />}
          variant="outlined"
          sx={{ mb: 3 }}
        >
          Indietro
        </Button>
      </Container>

      <Container sx={{ textAlign: "center", mb: 3 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          {category}
        </Typography>

        <Grid container spacing={4}>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((cake) => (
              <Grow in={true} timeout={1000} key={cake.id}>
                <Grid item xs={12} sm={6} md={4}>
                  <ProductCard
                    key={cake.id}
                    id={cake.id}
                    title={cake.title}
                    description={cake.description}
                    image={cake.img}
                    category={cake.category}
                    navigationPath={() => handleDetailPage(cake.id)}
                    // navigationPath={function (): void {
                    //   throw new Error("Function not implemented.");
                    // }}
                  />
                </Grid>
              </Grow>
            ))
          ) : (
            <p>No products found for this category.</p>
          )}
        </Grid>

        <ScrollToTopButton />
      </Container>
    </>
  );
};
export default GeneralPage;
