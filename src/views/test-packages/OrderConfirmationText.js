import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const usestyles = makeStyles({
  card: {
    paddingTop: "25px",
    paddingBottom: "25px",
  },
});

const OrderConfirmationText = () => {
  const classes = usestyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h1" color="#634699">
              Almost there!
            </Typography>
            <Typography variant="h5">
              We are only one step away from your customized course just like
              you ordered !
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default OrderConfirmationText;
