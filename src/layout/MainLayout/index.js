import Sidebar from "./Sidebar";
import { Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import Dashboard from "../../views/dashboard/Default";
import Header from "../MainLayout/Header";
import { Box } from "@mui/material";

const usestyles = makeStyles({
    mainContainer:{
        height:'100vh',
        overflow:'hidden'
    },
    rightContainer:{
        margin:'10px'
    }
});

const Main = () => {
  const classes = usestyles();
  return (
    <Grid container spacing={2} className={classes.mainContainer}>
      <Grid item xs flex={0}>
        <Sidebar />
      </Grid>

      <Grid item xs flex={1} className={classes.rightContainer}>
        <Grid container spacing={2}>
          <Grid item xs={12} >
            <Header />
          </Grid>
          <Grid item xs={12} >
            <Dashboard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Main;
