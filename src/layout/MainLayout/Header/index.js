import React from "react";
import { styled, alpha } from "@mui/material/styles";
import accountIcon from "../../../assets/sign-in.png";

import {
  createStyles,
  fade,
  Theme,
  makeStyles,
} from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import InputBase from "@material-ui/core/InputBase";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import {
  Toolbar,
  AppBar,
  Box,
  Typography,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Grid
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "../../../assets/dashboard-bg.png";

const useStyles = makeStyles((theme) =>
  createStyles({
    appbar: {
      // position:'absolute',
      height:'38vh',
      backgroundColor: "#634699",
      backgroundImage: `url(${Image})`,
      backgroundRepeat: "no-repeat",
      borderRadius: "15px",
    },
    link: {
      color: "#fff",
      display: "flex",
      textDecoration: "none",
      fontSize: 18,
      left: "5px",
    },
    image: {
      fontSize: 18,
    },
    profile:{
      marginBottom:'20px',
      marginTop:'-80px'
    },
    card: {
      
      marginRight:'15px',
      marginLeft:'15px',
      padding:'20px',
      borderRadius: "20px",
      height: "113px",
      background: "rgba(255,255,255,0.8)",
    },
    cardHeader: {
      padding: "14px",
    },
  })
);

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#fff",
  "&:hover": {
    backgroundColor: "#fff",
  },
  marginLeft: 0,
  borderRadius: "10px",
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
  color: "gray",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <Grid Container>
        <Grid item>
          <AppBar position="static" className={classes.appbar}>
            <Toolbar>
              <Typography
                style={{ color: "#fff" }}
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                Change background
              </Typography>
              {/* <Box sx={{ flexGrow: 1 }} /> */}
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Type here…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton size="large" color="inherit">
                  <img
                    src={accountIcon}
                    alt="account"
                    className={classes.image}
                  />
                  <Link to="/login" className={classes.link}>
                    Sign in
                  </Link>
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid item className={classes.profile}>
      <Card  elevation ={5} className={classes.card}>
      <CardHeader className={classes.cardHeader}
        avatar={
          <Avatar alt="Evelyn Sharma" src="/static/images/avatar/1.jpg"></Avatar>
        }
        titleTypographyProps={{variant:'h1' }}
        title="Evelyn Sharma"
        subheader="evelyn@gmail.com"
      />
      </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
