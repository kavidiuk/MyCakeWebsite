import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Divider,
  Card,
  CardContent,
  CardActions,
  Button,
  Grow,
  styled,
  IconButton,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Contact: React.FC = () => {
  const mainContact = {
    describe: "Main Contact",
    name: "John",
    lastName: "Doe",
    number: 123456789,
    it: "+39",
    location: "Via Lorem Ipsum",
  };

  const link = {
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com",
    twitter: "https://www.google.com",
  };

  const fullPhoneNumber = `${mainContact.it}${mainContact.number}`;

  const SocialGrid = styled(Grid)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    marginTop: theme.spacing(1),
  }));

  const linkStyles = {
    textDecoration: "none",
    color: "inherit",
  };

  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" fontWeight="bold">
          Contact Us
        </Typography>
        <Typography mt={2} variant="h6" color="textSecondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid non.
        </Typography>
        <Divider sx={{ mt: 2, mb: 2 }} />
      </Box>
      <Grid container justifyContent="center">
        <Grid item lg={8} md={10} sm={12}>
          <Grow in={true} timeout={1000}>
            <Card sx={{ mb: 4, boxShadow: 3 }}>
              <CardContent>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  sx={{ textAlign: "center", mb: 2 }}
                >
                  {mainContact.describe}
                </Typography>
                <Typography variant="h6" sx={{ textAlign: "left", mb: 2 }}>
                  <strong>Name:</strong> {mainContact.name}{" "}
                  {mainContact.lastName}
                </Typography>
                <Typography variant="h6" sx={{ textAlign: "left", mb: 2 }}>
                  <strong>Phone:</strong> {mainContact.it} {mainContact.number}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Typography variant="h6">
                    <strong>Find a Location:</strong> {mainContact.location}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button
                  href={`tel:${fullPhoneNumber}`}
                  variant="contained"
                  color="primary"
                >
                  Call Us
                </Button>
              </CardActions>
            </Card>
          </Grow>
          <Typography
            variant="h4"
            color="initial"
            display="flex"
            justifyContent="center"
            fontWeight="bold"
          >
            Our social network
          </Typography>
          <SocialGrid>
            <IconButton color="primary" href={link.instagram}>
              <InstagramIcon fontSize="large" />
            </IconButton>
            <Typography variant="h6" fontWeight="bold">
              <a
                style={linkStyles}
                href={link.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                : profileName
              </a>
            </Typography>
          </SocialGrid>
          <SocialGrid>
            <IconButton color="primary" href={link.facebook}>
              <FacebookIcon fontSize="large" />
            </IconButton>
            <Typography variant="h6" fontWeight="bold">
              <a
                style={linkStyles}
                href={link.facebook}
                target="_blank"
                rel="noopener noreferrer"
              >
                : profileName
              </a>
            </Typography>
          </SocialGrid>
          <SocialGrid>
            <IconButton color="primary" href={link.twitter}>
              <TwitterIcon fontSize="large" />
            </IconButton>
            <Typography variant="h6" fontWeight="bold">
              <a
                style={linkStyles}
                href={link.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                : profileName
              </a>
            </Typography>
          </SocialGrid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
