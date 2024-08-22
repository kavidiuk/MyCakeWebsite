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
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Contact: React.FC = () => {
  const linkStyles = {
    textDecoration: "none",
    color: "inherit",
  };

  const mainContact = {
    describe: "Contatto Principale",
    name: "Kavidu",
    lastName: "Francesco",
    number: "3713837952",
    it: "+39",
    location: "Via Leonardo Da Vinci",
  };

  const link = {
    instagram: "https://www.instagram.com",
    facebook: "https://www.facebook.com",
    whatsapp: `https://wa.me/${mainContact.it}${mainContact.number.replace(
      /\s+/g,
      ""
    )}`,
  };

  const fullPhoneNumber = `${mainContact.it}${mainContact.number.replace(
    /\s+/g,
    ""
  )}`;

  const SocialGrid = styled(Grid)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(1),
    marginTop: theme.spacing(1),
  }));

  return (
    <Container sx={{ mt: 4 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" fontWeight="bold">
          Contattaci
        </Typography>
        <Typography mt={2} variant="h6" color="textSecondary">
          Siamo qui per aiutarti! Se hai domande o richieste, non esitare a
          contattarci.
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
                  <strong>Nome:</strong> {mainContact.name}{" "}
                  {mainContact.lastName}
                </Typography>
                <Typography variant="h6" sx={{ textAlign: "left", mb: 2 }}>
                  <strong>Telefono:</strong> {fullPhoneNumber}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Typography variant="h6">
                    <strong>Indirizzo:</strong> {mainContact.location}
                  </Typography>
                </Box>
              </CardContent>
              <CardActions sx={{ justifyContent: "center" }}>
                <Button
                  href={`tel:${fullPhoneNumber}`}
                  variant="contained"
                  color="primary"
                >
                  Chiamaci
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
            sx={{ mb: 2 }}
          >
            Seguici sui Social
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
                : nomeProfilo
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
                : nomeProfilo
              </a>
            </Typography>
          </SocialGrid>

          <SocialGrid>
            <IconButton color="primary" href={link.whatsapp}>
              <WhatsAppIcon fontSize="large" />
            </IconButton>
            <Typography variant="h6" fontWeight="bold">
              <a
                style={linkStyles}
                href={link.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                : Kavidu
              </a>
            </Typography>
          </SocialGrid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
