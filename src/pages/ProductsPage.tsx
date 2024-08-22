import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  useMediaQuery,
  useTheme,
  SelectChangeEvent,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import ProductCard from "../components/ProductCard";
import Cake from "../services/Cake.json";
import ScrollToTopButton from "../assets/utils/Utils";
import { useNavigate } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// function filterCakes(cakes: any[], searchItem: string) {
//   return cakes
//     .filter(
//       (cake: {
//         id: { toString: () => string | any[] };
//         title: string;
//         description: string;
//       }) =>
//         cake.id.toString().includes(searchItem) ||
//         cake.title.toLowerCase().includes(searchItem.toLowerCase()) ||
//         cake.description.toLowerCase().includes(searchItem.toLowerCase())
//     )
//     .sort((a: { id: number }, b: { id: number }) => a.id - b.id);
// }

const filterCakes = (cakes: any[], filters: any) => {
  return cakes
    .filter((cake) => {
      const { id, difficulty, servings, category, preparationTime } = filters;

      return (
        (id ? cake.id === id : true) &&
        (difficulty ? cake.difficulty === difficulty : true) &&
        (servings ? cake.servings === servings : true) &&
        (category ? cake.category === category : true) &&
        (preparationTime ? cake.preparationTime === preparationTime : true)
      );
    })
    .sort((a, b) => a.id - b.id);
};

const ProductsPage: React.FC = () => {
  const idsToShow = [45, 46, 47, 48, 49];
  const filteredCakes = Cake.filter((cake) => idsToShow.includes(cake.id));

  const [filters, setFilters] = useState({
    id: null,
    difficulty: "",
    servings: null,
    category: "",
    preparationTime: null,
  });

  const handleTextFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value
        ? name === "id" || name === "servings" || name === "preparationTime"
          ? parseInt(value, 10)
          : value
        : null,
    }));
  };

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value || "",
    }));
  };

  const navigate = useNavigate();

  const handleCategoryPage = (id: number) => {
    navigate(`/products/${id}`);
  };

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const filteredResults = filterCakes(filteredCakes, filters);

  return (
    <Container>
      <Box
        my={4}
        sx={{ display: "-ms-inline-flexbox", justifyContent: "center" }}
      >
        <Typography
          sx={{ display: "flex", justifyContent: "center" }}
          variant="h3"
          align="center"
          gutterBottom
        >
          Altro
        </Typography>

        {/* <Box
            mb={4}
            sx={{
              justifyContent: "center",
              display: isSmallScreen ? "" : "flex",
            }}
          >
            <FormControl fullWidth margin="normal">
              <InputLabel>Difficulty</InputLabel>
              <Select
                name="difficulty"
                value={filters.difficulty || ""}
                onChange={handleSelectChange}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Facile">Facile</MenuItem>
                <MenuItem value="Media">Media</MenuItem>
                <MenuItem value="Difficile">Difficolta</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth margin="normal">
              <InputLabel>Category</InputLabel>
              <Select
                name="category"
                value={filters.category || ""}
                onChange={handleSelectChange}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Dolci">Dolci</MenuItem>
              </Select>
            </FormControl>

            <TextField
              name="id"
              label="ID"
              type="number"
              value={filters.id || ""}
              onChange={handleTextFieldChange}
              fullWidth
              margin="normal"
            />

            <TextField
              name="servings"
              label="Servings"
              type="number"
              value={filters.servings || ""}
              onChange={handleTextFieldChange}
              fullWidth
              margin="normal"
            />

            <TextField
              name="preparationTime"
              label={"Preparation Time" || ""}
              onChange={handleTextFieldChange}
              fullWidth
              margin="normal"
            />
          </Box> */}

        <Grid
          container
          spacing={4}
          justifyContent={isSmallScreen ? "center" : "start"}
        >
          {filteredResults.map((cake) => (
            <Grid item xs={12} sm={6} md={4} key={cake.id}>
              <ProductCard
                title={cake.title}
                description={cake.description}
                image={cake.img}
                id={cake.id}
                category={""}
                navigationPath={() => handleCategoryPage(cake.id)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <ScrollToTopButton />
    </Container>
  );
};

export default ProductsPage;
