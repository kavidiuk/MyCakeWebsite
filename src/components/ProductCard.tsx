import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  description,
  image,
}) => {
  const navigate = useNavigate();

  const handleProductDetail = () => {
    navigate(`/products/${id}`);
  };

  return (
    <Card onClick={handleProductDetail}>
      {/* messo un'altezza fissa, non va bene cambiala */}
      <Grid height={300}>
        <CardMedia component="img" height="200" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Grid>
    </Card>
  );
};

export default ProductCard;
