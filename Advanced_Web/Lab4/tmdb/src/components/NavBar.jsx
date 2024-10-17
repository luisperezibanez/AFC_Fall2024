import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Icon from "../assets/images/icon.png";
import Theme from './ui/Theme';

const pages = ["Home", "Now Playing"];

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar(props) {
  const { handleChange, isVisible } = props;

  return (
    <Theme>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Link to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{
                mr: 2,
                backgroundSize: "cover",
                width: 60, // Set a width
                height: 60, // Set a height
                "&:hover": {
                  backgroundColor: "transparent", // Remove background color on hover
                },
              }}
            >
              <img src={Icon} alt="" height="100%" />
            </IconButton>
          </Link>
          <Box
            sx={{
              display: "flex",
              justifyContent: "left",
              alignItems: "left",
              flexGrow: 1,
            }}
          >
            <Link to="/results" style={{ textDecoration: 'none' }}>
            <Box sx={{
                color:"black",
                '&:hover': {
                    textDecoration: 'none', // Ensure no underline on hover
                },
            }}>
                <MenuItem>
                    <Typography sx={{ textAlign: "center" }} >
                        Now Playing
                    </Typography>
                </MenuItem>
            </Box>
        </Link>
          </Box>
          <Link
            to="/results"
            style={{ textDecoration: "none" }} // Remove underline
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "white", // Text area background
                borderRadius: "4px", // Optional: rounded corners
                padding: "3px",
              }}
            >
              <Box sx={{ color: "gray", mr: 1 }}>
                <SearchIcon />
              </Box>
              <InputBase
                onChange={handleChange}
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                sx={{
                  color: "black", // User text color
                  "&::placeholder": {
                    color: "gray", // Placeholder color
                  },
                }}
              />
            </Box>
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
    </Theme>
  );
}
