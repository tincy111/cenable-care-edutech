import React from "react";
import { Grid, Box } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import TestPackagesTitle from "./TestPackagesTitle";
import TestPackageSearch from "./TestPackageSearch";
import TestPackageList from "./TestPackageList";
import Schedule from "../dashboard/Default/Schedule";
import Progress from "../dashboard/Default/Progress";

const usestyles = makeStyles({
  testPackageContainer: {
    overflow: "hidden",
    overflowY: "auto",
    paddingBottom: "100px",
    marginTop: "5px",
    height: "calc(100vh - 42vh)",
    "&::-webkit-scrollbar": {
      width: "0.4em",
      borderRadius: "10px",
      padding: "5px",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#634699",
    },
  },
});
const TestPackages = () => {
  const classes = usestyles();
  return (
    <Box px={2}>
      <Grid container spacing={2} className={classes.testPackageContainer}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2} direction="column">
            <Grid item xs={12} md={8}>
              <TestPackagesTitle />
            </Grid>
            <Grid item xs={12} md={8}>
              <TestPackageSearch />
            </Grid>
            <Grid item xs={12} md={8}>
              <TestPackageList />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={2} direction="column">
            <Grid item xs={12} md={4}>
              <Progress />
            </Grid>
            <Grid item xs={12} md={4}>
              <Schedule />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TestPackages;
