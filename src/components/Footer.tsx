import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer: React.FC = () => {
  const contatti = {
    nome: "Nome Azienda",
    indirizzo: "Via Lorem Ipsum",
    tel: 123456789,
    email: "johndoe@gmail.com",
  };

  const link = {
    aboutUs: "About Us",
    contact: "Contact",
    homePage: "Home Page",
    productsPage: "Products Page",
  };

  const linkHref = {
    aboutUs: "/aboutUs",
    contact: "/contact",
    homePage: "/",
    productsPage: "/products",
  };

  const linkStyles = {
    textDecoration: "none",
    color: "inherit",
    display: "block",
    marginBottom: "8px",
  };

  const iconButtonStyles = {
    color: "white",
    transition: "color 0.3s",
    "&:hover": {
      color: "secondary.main",
    },
  };

  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", p: 4, mt: 4 }}>
      <Container>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold">
              Contatti
            </Typography>
            <Typography variant="body2">
              {contatti.nome} <br />
              {contatti.email} <br />
              {contatti.tel} <br />
              {contatti.indirizzo}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold">
              Link Utili
            </Typography>
            <Link href={linkHref.homePage} sx={linkStyles}>
              {link.homePage}
            </Link>
            <Link href={linkHref.productsPage} sx={linkStyles}>
              {link.productsPage}
            </Link>
            <Link href={linkHref.aboutUs} sx={linkStyles}>
              {link.aboutUs}
            </Link>
            <Link href={linkHref.contact} sx={linkStyles}>
              {link.contact}
            </Link>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold">
              Seguici
            </Typography>
            <Box>
              <IconButton
                href="https://www.instagram.com"
                sx={iconButtonStyles}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton href="https://www.facebook.com" sx={iconButtonStyles}>
                <FacebookIcon />
              </IconButton>
              <IconButton href="https://www.twitter.com" sx={iconButtonStyles}>
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Typography variant="body2" align="center" mt={4}>
        &copy; {new Date().getFullYear()} Kavidu francesco. Tutti i diritti
        riservati.
      </Typography>
    </Box>
  );
};

export default Footer;
