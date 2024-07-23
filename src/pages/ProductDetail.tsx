import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Cake from "../services/Cake.json";
import { Container, Grid, Button, Typography, Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ScrollToTopButton from "../assets/utils/Utils";
const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const numericId = id ? parseInt(id, 10) : null;
  const mainId = Cake.find((cake) => numericId === cake.id);

  if (!mainId) {
    return <p>No item found</p>;
  }

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <Container sx={{ margin: 0, marginTop: 3 }}>
        <Button
          onClick={handleBackClick}
          startIcon={<ArrowBackIcon />}
          variant="outlined"
        >
          Back
        </Button>
      </Container>
      <Container sx={{ textAlign: "center", mt: 3, mb: 3 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Item ID: {id}
        </Typography>
        <Box sx={{ maxWidth: "100%", mb: 3 }}>
          <img
            style={{ maxWidth: "100%", height: "auto" }}
            src={mainId.img}
            alt={mainId.title}
          />
        </Box>
        <Typography variant="h5" component="h3" gutterBottom>
          {mainId.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {mainId.description}
        </Typography>
        <Typography variant="body2" gutterBottom>
          Categoria: {mainId.category}
        </Typography>
        <Typography variant="body2" gutterBottom>
          Difficoltà: {mainId.difficulty}
        </Typography>
        <Typography variant="body2" gutterBottom>
          Preparazione: {mainId.preparationTime}
        </Typography>
        <Typography variant="body2" gutterBottom>
          Numero di persone: {mainId.servings}
        </Typography>
        <Typography variant="body2" gutterBottom>
          Ricetta: {mainId.recipes}
        </Typography>
        <Box sx={{ width: "100%", mt: 3 }}>
          <iframe
            width="100%"
            height="400"
            src={mainId.video}
            title={mainId["video-title"]}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </Box>
      </Container>
      <ScrollToTopButton />
    </>
  );
};

export default ProductDetail;
