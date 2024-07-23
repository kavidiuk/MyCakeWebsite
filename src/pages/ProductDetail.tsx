import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Cake from "../services/Cake.json";
import ProductsPage from "./ProductsPage";
import { Container, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { auto, main } from "@popperjs/core";
import { Margin } from "@mui/icons-material";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const numericId = id ? parseInt(id, 10) : null;
  const mainId = Cake.filter((cake) => numericId === cake.id);
  //const idShow = [id];
  //const mainId = Cake.filter((Cake) => id?.includes(Cake.id));
  if (!mainId) {
    return <p>No item found</p>;
  }
  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <Container sx={{ margin: 0, marginTop: 3 }}>
        <button onClick={handleBackClick}>
          <ArrowBackIcon />
        </button>
        {/* startIcon={<ArrowBackIcon />} */}
      </Container>
      <Container sx={{ textAlign: "center", width: 800 }}>
        <h2>Item ID: {id}</h2>
        {/* <p>Current Path: {location.pathname}</p> */}

        {mainId.length > 0 ? (
          <Grid
            direction="column"
            alignItems="center"
            sx={{ minHeight: "100vh" }}
          >
            <h2>{mainId[0].title}</h2>

            <img
              style={{ height: 300, width: 400 }}
              src={mainId[0].img}
              alt={mainId[0].title}
            />
            <h3>Description: {mainId[0].description}</h3>
            <hr />
            <h5>Categoria: {mainId[0].category}</h5>
            <h5>Difficoltà: {mainId[0].difficulty}</h5>
            <h5>Prepazione: {mainId[0].preparationTime}</h5>
            <h5>Numero di persone: {mainId[0].servings}</h5>
            <h5>Ricetta: {mainId[0].recipes}</h5>
            <iframe
              width="800"
              height="400"
              src={mainId[0].video}
              title={mainId[0]["video-title"]}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <Grid item xs={12} sm={6} md={4}></Grid>
          </Grid>
        ) : (
          <p>No item found</p>
        )}

        {/* <ProductCard id={} /> */}
        {/* <ProductCard title={mainId[1].img} id={0} description={""} image={""} /> */}
      </Container>
    </>
  );
};

export default ProductDetail;

// const arr = [
//   {
//     id,
//   },
// ];

{
  /* title={mainId[0].title}
    <h2>{mainId[0].title}</h2>
    id={mainId[0].id}
    <h3>main id: {mainId[0].id}</h3>
    description={mainId[0].description}
    <h5>Descrizione: {mainId[0].description}</h5>
    image={mainId[0].img}
    <img src={mainId[0].img} alt="" /> */
}
