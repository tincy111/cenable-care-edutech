import {
  Button,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import TestPackageSearch from "./TestPackageSearch";
import TestDetailCard from "./TestDetailCard";
import TestCustomize from "./TestCustomize";
import TestList from "./TestList";
import CustomizeGrid from "./CustomizeGrid";
import { Route, Switch } from "react-router-dom";

const usestyles = makeStyles({
  testDetailContainer: {
    overflow: "hidden",
    overflowY: "auto",
    paddingBottom: "100px",
    marginTop: "5px",
    height: "calc(100vh - 46vh)",
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

const TestDetail = () => {
  let history = useHistory();
  const classes = usestyles();
  return (
    <Box px={2}>
      <Grid item xs={12}>
        <Button
          sx={{ color: "#634699", fontWeight: "bold" }}
          onClick={() => history.goBack()}
        >
          Back
        </Button>
      </Grid>
      <Grid container spacing={2} className={classes.testDetailContainer}>
        <Grid item xs={12}>
          <TestDetailCard />
        </Grid>
        {/* <Grid item xs={12} md={6}>
          <TestPackageSearch />
        </Grid> */}
        <Grid item xs={12}>
          {/* <TestCustomize/> */}

          {/* <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TestList/>
            </Grid>
            <Grid item xs={12} md={6}>
              <CustomizeGrid />
            </Grid>
          </Grid> */}

          <Switch>
            <Route path="/test-packages/customize">
              <TestCustomize />
            </Route>
            <Route path="/test-packages/:id">
              <Box px={2}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TestPackageSearch />
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={6}>
                    <TestList />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <CustomizeGrid />
                  </Grid>
                </Grid>
              </Grid>
              </Box>
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TestDetail;
