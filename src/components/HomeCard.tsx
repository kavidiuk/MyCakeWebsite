import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import React from "react";

interface MainCard {
  title: string;
  description: string;
  image: string;
  price: string;
}

const HomeCard: React.FC<MainCard> = ({ title, description, image, price }) => {
  return (
    <Card>
      <CardMedia component="img" height="200" image={image} alt={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body1" color="text.primary">
          {price}
        </Typography>
      </CardContent>
      <Button size="small">button1</Button>
    </Card>
  );
};
export default HomeCard;
