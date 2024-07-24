import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Grow,
} from "@mui/material";
import ProductCard from "../components/ProductCard";
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
            <Grid spacing={6}>
              {mainProducts.map((product, index) => (
                <Grow in={true} timeout={1000 + index * 500} key={product.id}>
                  <Grid item xs={12} sm={6} md={4} sx={{ p: 2 }}>
                    <ProductCard
                      title={product.title}
                      description={product.description}
                      image={product.img}
                      id={product.id}
                    />
                  </Grid>
                </Grow>
              ))}
            </Grid>
          </Box>
        ) : (
          <Box my={4}>
            <Typography variant="h3" align="center" gutterBottom>
              lorem1
            </Typography>
            <Grid container spacing={4}>
              {mainProducts.map((product, index) => (
                <Grow in={true} timeout={1000 + index * 500} key={product.id}>
                  <Grid item xs={12} sm={6} md={4} sx={{ p: 2 }}>
                    <ProductCard
                      title={product.title}
                      description={product.description}
                      image={product.img}
                      id={product.id}
                    />
                  </Grid>
                </Grow>
              ))}
            </Grid>
          </Box>
        )}
      </Container>
      <ScrollToTopButton />
    </>
  );
}
