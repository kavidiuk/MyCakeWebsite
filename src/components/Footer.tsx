import React from "react";
import { Box, Typography } from "@mui/material";
const Footer: React.FC = () => {
  return (
    <Box sx={{ bgcolor: "primary.main", color: "white", p: 2, mt: 4 }}>
      <Typography variant="body2" align="center">
        &copy;
        {new Date().getFullYear()} paragraf1.
      </Typography>
    </Box>
  );
};

export default Footer;
