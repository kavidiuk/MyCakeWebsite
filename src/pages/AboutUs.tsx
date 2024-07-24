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
  const title = "About Us";

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              dicta accusamus illum tempora. Alias sed similique vel ab odio
              distinctio ducimus, culpa, fugit ipsum nobis, corrupti minima ea?
              Necessitatibus, nesciunt.
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
                Our Mission
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
                cupiditate eligendi. Explicabo vero molestias nihil nulla
                molestiae inventore enim ut est eius possimus consequuntur
                aperiam tempora reprehenderit, at doloremque. Maiores?
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
                Our Story
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
                cupiditate eligendi. Explicabo vero molestias nihil nulla
                molestiae inventore enim ut est eius possimus consequuntur
                aperiam tempora reprehenderit, at doloremque. Maiores?
              </Typography>
            </Box>
          </Grow>
        </Grid>
      </Section>
    </Container>
  );
};

export default AboutUs;
