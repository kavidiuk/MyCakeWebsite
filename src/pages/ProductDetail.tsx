import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cake from "../services/Cake.json";
import { Container, Grid, Button, Typography, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ScrollToTopButton from "../assets/utils/Utils";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const numericId = id ? parseInt(id, 10) : null;
  const product = Cake.find((cake) => numericId === cake.id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!product) {
    return (
      <Container sx={{ mt: 3, textAlign: "center" }}>
        <Typography variant="h4" color="error">
          No item found
        </Typography>
      </Container>
    );
  }

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
          Back
        </Button>
      </Container>
      <Container sx={{ textAlign: "center", mb: 3 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          {product.title}
        </Typography>
        <Box sx={{ maxWidth: "100%", mb: 3 }}>
          <img
            style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
            src={product.img}
            alt={product.title}
          />
        </Box>
        <Typography variant="h5" component="h3" gutterBottom>
          Description
        </Typography>
        <Typography variant="body1" paragraph>
          {product.description}
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body2" gutterBottom>
              <strong>Category:</strong> {product.category}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Difficulty:</strong> {product.difficulty}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Preparation Time:</strong> {product.preparationTime}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Servings:</strong> {product.servings}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <strong>Recipe:</strong> {product.recipes}
            </Typography>
          </Grid>
        </Grid>
        {product.video && (
          <Box sx={{ width: "100%", mt: 3 }}>
            <iframe
              width="100%"
              height="400"
              src={product.video}
              title={product["video-title"]}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </Box>
        )}
      </Container>
      <ScrollToTopButton />
    </>
  );
};

export default ProductDetail;
