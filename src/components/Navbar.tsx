// Navbar.js
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/27.png";
import "@fontsource/great-vibes";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  const navLinks = [
    { text: "Home", path: "/" },
    { text: "Chi Siamo", path: "/aboutUs" },
    { text: "Prodotti", path: "/products" },
    { text: "Contatti", path: "/contact" },
  ];

  const renderNavLinks = () =>
    navLinks.map((link) => (
      <Button
        key={link.text}
        color="inherit"
        component={Link}
        to={link.path}
        sx={{
          ...(location.pathname === link.path && {
            borderBottom: `2px solid ${theme.palette.primary.main}`,
          }),
        }}
      >
        {link.text}
      </Button>
    ));

  const renderDrawerList = () =>
    navLinks.map((link) => (
      <ListItem
        button
        key={link.text}
        component={Link}
        to={link.path}
        onClick={handleDrawerClose}
      >
        <ListItemText primary={link.text} />
      </ListItem>
    ));

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                height: 60,
                verticalAlign: "middle",
                display: {
                  xs: "none",
                  sm: "none",
                  md: "inline-flex",
                  lg: "inline-flex",
                  xl: "inline-flex",
                },
              }}
            />
            <span
              style={{
                fontFamily: "Great Vibes, cursive",
                fontSize: "1.4rem",
                display: "inline",
                // marginLeft: "-3rem",
              }}
            >
              Kavidu's Cake Boutique
            </span>
          </Link>
        </Typography>

        {isSmallScreen ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={handleDrawerClose}
              sx={{
                "& .MuiDrawer-paper": {
                  width: 250,
                  animation: "slide-in 0.3s ease-out",
                },
              }}
            >
              <List>{renderDrawerList()}</List>
            </Drawer>
          </>
        ) : (
          <div>{renderNavLinks()}</div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
