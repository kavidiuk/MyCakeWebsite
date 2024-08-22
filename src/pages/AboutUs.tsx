import React from "react";
import Typography from "@mui/material/Typography";
import { Grid, Box, Fade, Grow, Zoom } from "@mui/material";
import { Container } from "@mui/system";
import { styled } from "@mui/material/styles";

const StyledImage = styled("img")({
  width: "100%",
  height: "auto",
  maxWidth: "100%",
  maxHeight: "300px",
  objectFit: "cover",
  borderRadius: "3%",
});

const Section = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up("md")]: {
    display: "flex",
    alignItems: "center",
    "&:nth-of-type(even)": {
      flexDirection: "row-reverse",
    },
  },
}));

const AboutUs: React.FC = () => {
  const image =
    "https://images.unsplash.com/photo-1721332153289-0c46dc38981b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8";
  const title = "Chi Siamo";

  return (
    <Container sx={{ pt: 3 }}>
      <Zoom in={true} timeout={1000}>
        <Typography
          variant="h4"
          color="textPrimary"
          fontWeight="bold"
          sx={{ mb: 2, textAlign: "center" }}
        >
          {title}
        </Typography>
      </Zoom>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Fade in={true} timeout={1500}>
            <Typography variant="h6" color="textSecondary" sx={{ p: 2, pt: 3 }}>
              La nostra missione è addolcire ogni momento speciale con torte
              artigianali di altissima qualità. Usiamo solo ingredienti freschi
              e genuini, selezionati con cura per garantire sapori autentici e
              indimenticabili. Ogni torta che creiamo è un’opera d’arte, pensata
              per portare gioia e dolcezza nelle vostre vite.
            </Typography>
          </Fade>
        </Grid>
        <Grid item xs={12} md={4} container justifyContent="center">
          <Grow in={true} timeout={2000}>
            <StyledImage src={image} alt={title} />
          </Grow>
        </Grid>
      </Grid>

      <Section container spacing={4}>
        <Grid item xs={12} md={6}>
          <Zoom in={true} timeout={1500}>
            <Box>
              <Typography variant="h5" color="textPrimary" sx={{ mb: 2 }}>
                La Nostra Storia
              </Typography>
              <Typography variant="body1" color="textSecondary">
                La nostra storia inizia con una passione senza tempo per la
                pasticceria. Da una piccola cucina di casa, siamo cresciuti fino
                a diventare un punto di riferimento per chi cerca torte uniche e
                deliziose. Ogni nostra creazione racconta un pezzo della nostra
                storia, fatta di amore per i dolci, dedizione e cura per ogni
                dettaglio.
              </Typography>
            </Box>
          </Zoom>
        </Grid>
        <Grid item xs={12} md={6} container justifyContent="center">
          <Fade in={true} timeout={2000}>
            <StyledImage src={image} alt="Mission Image" />
          </Fade>
        </Grid>
      </Section>

      <Section
        container
        spacing={4}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid item xs={12} md={6}>
          <Grow in={true} timeout={2000}>
            <Box>
              <Typography variant="h5" color="textPrimary" sx={{ mb: 2 }}>
                I Nostri Valori
              </Typography>
              <Typography variant="body1" color="textSecondary">
                I nostri valori sono il segreto del nostro successo. Crediamo
                nella qualità, nella tradizione e nell’innovazione. Ogni torta è
                preparata con passione, rispettando ricette classiche ma con un
                tocco di originalità. La soddisfazione dei nostri clienti è la
                nostra priorità, e lavoriamo ogni giorno per superare le loro
                aspettative, rendendo ogni momento davvero speciale.
              </Typography>
            </Box>
          </Grow>
        </Grid>
      </Section>
    </Container>
  );
};

export default AboutUs;
