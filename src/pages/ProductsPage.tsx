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

const CakeList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const cakes = JSON.parse(JSON.stringify(Cake));
  const filteredCakes = filterCakes(cakes, searchTerm);

  return (
    <Container>
      <Box my={4}>
        <Typography variant="h3" align="center" gutterBottom>
          Lista delle Torte
        </Typography>
        <TextField
          label="Cerca"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Grid container spacing={4}>
          {filteredCakes.map(
            (cake: {
              id: React.Key | null | undefined;
              title: string;
              description: string;
              img: string;
              // price: number;
            }) => (
              <Grid item xs={12} sm={6} md={4} key={cake.id}>
                <ProductCard
                  title={cake.title}
                  description={cake.description}
                  image={cake.img}
                  id={cakes}
                />
              </Grid>
            )
          )}
        </Grid>
      </Box>
    </Container>
  );
};

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
            <Grid item xs={12} sm={6} md={4} key={cake.id}>
              <ProductCard
                title={cake.title}
                description={cake.description}
                image={cake.img}
                id={cake.id} // price={cake.id} // Assumendo che non ci sia una proprietà "price" in Cake.json
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductsPage;
