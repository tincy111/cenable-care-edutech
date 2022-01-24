import React from "react";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import InputBase from "@material-ui/core/InputBase";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: "#fff",
  "&:hover": {
    backgroundColor: "#fff",
  },
  border:"1px solid #634699",
  marginLeft: 0,
  borderRadius: "5px",
  width: "98%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "98%",
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create("width"),
    width: "98%",
    [theme.breakpoints.up("sm")]: {
      width: "98%",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const TestPackageSearch = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
      <Search>
        <StyledInputBase
          placeholder="Search Courses"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      </Grid>
    </Grid>
  );
};

export default TestPackageSearch;
