import React from "react";
import {
  Grid,
  Box,
  Button
} from "@mui/material";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Progress from "../dashboard/Default/Progress";
import SelectedTests from "./SelectedTests"
import OrderConfirmationText from "./OrderConfirmationText";
import OrderBill from "./OrderBill";

const usestyles = makeStyles({
    OrderConfirmationContainer: {
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

const OrderConfirmation = () => {
  let history = useHistory();
  const classes = usestyles();
  return (
    <Box px={2}>
      <Grid item xs={12}>
        <Button sx={{color:"#634699",fontWeight:"bold"}} onClick={() => history.goBack()}>Back</Button>
      </Grid>
      <Grid
        container
        spacing={2}
        className={classes.OrderConfirmationContainer}
      >
        <Grid item xs={12} md={8}>
          <Grid container spacing={2} direction="column">
            <Grid item xs={12} md={8}>
              <OrderConfirmationText/>
            </Grid>
            <Grid item xs={12} md={8}>
              <SelectedTests/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={2} direction="column">
            <Grid item xs={12} md={4}>
              <OrderBill />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default OrderConfirmation;
