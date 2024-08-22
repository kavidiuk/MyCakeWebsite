import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  navigationPath: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  description,
  image,
  category,
  navigationPath,
}) => {
  const navigate = useNavigate();

  const handleProductDetail = () => navigate(`/products/${id}`);

  const handleClick = () => navigationPath();

  return (
    <Card onClick={handleClick}>
      <Grid height={400}>
        <LazyLoadImage
          alt={title}
          height={300}
          src={image}
          effect="blur"
          width="100%"
          style={{ objectFit: "cover" }}
          //onError={(e) => e.currentTarget.src = "path/to/fallback-image.jpg"}
        />
        {/* <CardMedia component="img" height="300" image={image} alt={title} /> */}
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
