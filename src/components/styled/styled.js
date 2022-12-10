import { Box, Link, styled } from "@mui/material";

export const FlexBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const LogoLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  cursor: "pointer",
  fontSize: "18px",
  color: theme.palette.primary.main,
  textTransform: "uppercase",
  fontWeight: "600",
}));
