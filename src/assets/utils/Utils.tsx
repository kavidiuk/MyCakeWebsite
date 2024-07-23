import React from "react";
import { IconButton } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { styled } from "@mui/material/styles";

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  position: "fixed",
  bottom: 16,
  right: 16,
  zIndex: 1000,
  width: 56,
  height: 56,
  borderRadius: "50%",
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const ScrollToTopButton: React.FC = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StyledIconButton onClick={handleScrollToTop} color="inherit">
      <ArrowUpwardIcon />
    </StyledIconButton>
  );
};

export default ScrollToTopButton;

// export function getAbsoluteImagePath(imgPath: {
//   startWith: (arg0: string) => any;
//   replace: (arg0: string, arg1: string) => any;
// }) {
//   if (imgPath.startWith("http")) {
//     return imgPath;
//   }
//   return `${process.env.PUBLIC_URL}/${imgPath.replace("../", "")}`;
// }
