import React from "react";
import {
  Grid,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  formcontrol: {
    "& .MuiOutlinedInput-notchedOutline": {
      borderStyle: "none",
    },
    "& .MuiInputLabel-formControl": {
      color: "#634699",
      fontWeight: "bold",
    },
    "& .MuiSvgIcon-root": {
      fill: "#634699",
      fontSize: "2rem",
    },
    "& .MuiInputBase-formControl": {
      padding: "8px",
      textAlign: "center",
      color: "#634699",
      backgroundColor: "#fff",
    },
  },
}));

const TestPackagesTitle = () => {
  const classes = useStyles();
  return (
    <Grid container direction="column">
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant="h1" sx={{ color: "#634699" }}>
              Test Packages
            </Typography>
          </Grid>

          <Grid item xs={6} md={6}>
            <Grid
              container
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Grid item>
                <FormControl
                  sx={{ m: 1, minWidth: 120 }}
                  className={classes.formcontrol}
                >
                  <InputLabel htmlFor="select">Grade</InputLabel>
                  <Select defaultValue="" id="select" label="selectoption">
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                  </Select>
                </FormControl>
                <FormControl
                  sx={{ m: 1, minWidth: 120 }}
                  className={classes.formcontrol}
                >
                  <InputLabel htmlFor="grouped-select">Subject</InputLabel>
                  <Select defaultValue="" id="grouped-select" label="Grouping">
                    <MenuItem value={1}>Physics</MenuItem>
                    <MenuItem value={2}>Chemistry</MenuItem>
                    <MenuItem value={3}>Biology</MenuItem>
                    <MenuItem value={4}>English</MenuItem>
                    <MenuItem value={5}>Mathematics</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TestPackagesTitle;
