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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerOpen = () => setDrawerOpen(true);
  const handleDrawerClose = () => setDrawerOpen(false);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            titolo1
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
            <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
              <List>
                <ListItem component={Link} to="/" onClick={handleDrawerClose}>
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem
                  component={Link}
                  to="/about"
                  onClick={handleDrawerClose}
                >
                  <ListItemText primary="About" />
                </ListItem>
                <ListItem
                  component={Link}
                  to="/products"
                  onClick={handleDrawerClose}
                >
                  <ListItemText primary="Products" />
                </ListItem>
                <ListItem
                  component={Link}
                  to="/contact"
                  onClick={handleDrawerClose}
                >
                  <ListItemText primary="Contact" />
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
            <Button color="inherit" component={Link} to="/products">
              Products
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
