import React from "react";
import {
  Grid,
  Card,
  Typography,
  CardContent,
  CardHeader,
  Avatar,
  IconButton,
  Box,
  Divider,
  Button,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const OrderBill = () => {
  let history = useHistory();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card style={{ padding: "20px" }}>
          <Box
            component="span"
            m={3}
            display="flex"
            justifyContent="space-around"
          >
            <Typography variant="h4">
              Physics<span style={{ color: "#634699" }}>(10th)</span>
            </Typography>
            <Typography variant="h2" color="#634699">
              100 $
            </Typography>
          </Box>
          <Box
            component="span"
            m={1}
            display="flex"
            justifyContent="space-around"
          >
            <Typography variant="h4">
              Care
              <br />
              <span style={{ color: "#634699" }}>DISCOUNT</span>
            </Typography>
            <Typography variant="h2" color="#634699">
              20 $
            </Typography>
          </Box>
          <Divider variant="middle" sx={{ bgcolor: "#634699" }} />
          <Box
            component="span"
            m={1}
            display="flex"
            justifyContent="space-around"
          >
            <Typography variant="h4">Total</Typography>
            <Typography variant="h2" color="#634699">
              80 $
            </Typography>
          </Box>
        </Card>
        <Button
          component={Link}
          to="/test-packages/checkout"
          variant="contained"
          fullWidth
          sx={{
            marginTop: 1,
            backgroundColor: "#634699",
            "&:hover": { backgroundColor: "#634699" },
          }}
        >
          Checkout
        </Button>
        <Button
          onClick={() => history.goBack()}
          variant="outlined"
          fullWidth
          sx={{ marginTop: 1, borderColor: "#634699", color: "#634699" }}
        >
          Custmoize
        </Button>
      </Grid>
    </Grid>
  );
};

export default OrderBill;
