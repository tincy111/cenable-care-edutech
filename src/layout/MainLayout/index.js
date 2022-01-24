import Sidebar from "./Sidebar";
import { Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Dashboard from "../../views/dashboard/Default";
import Header from "../MainLayout/Header";
import { Route, Switch } from "react-router-dom";
import TestPackages from "../../views/test-packages";
import TestDetail from "../../views/test-packages/TestDetail";
import OrderConfirmation from "../../views/test-packages/OrderConfirmation";
import Checkout from "../../views/test-packages/Checkout";
// import TestCustomize from "../../views/test-packages/TestCustomize";

const usestyles = makeStyles({
  mainContainer: {
    height: "100vh",
    overflow: "hidden",
  },
  rightContainer: {
    margin: "10px",
  },
  leftContainer: {
    flex: 0,
  },
});

const Main = () => {
  const classes = usestyles();
  return (
    <Grid container spacing={2} className={classes.mainContainer}>
      <Grid item xs className={classes.leftContainer}>
        <Sidebar />
      </Grid>

      <Grid item xs className={classes.rightContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <Switch>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/test-packages/checkout">
                <Checkout />
              </Route>
              <Route path="/test-packages/orderconfirmation">
                <OrderConfirmation />
              </Route>
              <Route path="/test-packages" exact>
                <TestPackages />
              </Route>
              <Route path="/test-packages/:id">
                <TestDetail />
              </Route>
              <Route path="/my-test-packages">
                <TestPackages />
              </Route>
              <Route path="/my-schedule">
                <TestPackages />
              </Route>
            </Switch>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Main;
