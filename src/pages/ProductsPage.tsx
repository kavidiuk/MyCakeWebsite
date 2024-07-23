import React, { useState } from "react";
import { Box, Container, Grid, Typography, TextField } from "@mui/material";
import ProductCard from "../components/ProductCard";
import Cake from "../services/Cake.json";

function filterCakes(cakes: any[], searchItem: string) {
  return cakes
    .filter(
      (cake: {
        id: { toString: () => string | any[] };
        title: string;
        description: string;
      }) =>
        cake.id.toString().includes(searchItem) ||
        cake.title.toLowerCase().includes(searchItem.toLowerCase()) ||
        cake.description.toLowerCase().includes(searchItem.toLowerCase())
    )
    .sort((a: { id: number }, b: { id: number }) => a.id - b.id);
}

const ProductsPage: React.FC = () => {
  const idsToShow = [1, 3, 5, 2];
  const filteredCakes = Cake.filter((cake) => idsToShow.includes(cake.id));

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" align="center" gutterBottom>
          Torte Selezionate
        </Typography>
        <Grid container spacing={4}>
          {filteredCakes.map((cake) => (
            <Grid item xs={12} sm={6} md={4} key={cake.id} sx={{ p: 2 }}>
              <ProductCard
                title={cake.title}
                description={cake.description}
                image={cake.img}
                id={cake.id}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductsPage;
