import React from "react";
import classes from "./Login.module.css";
import { Typography, TextField } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import logo from "../../../../assets/cenablecare-logo.png";
import { useHistory } from "react-router-dom";
import LoginForm from "./LoginForm";
import Logo from "../../../../ui-component/Logo";
import { useState } from "react";
import MockTest from "./MockTest.js";
import MockTestForm from "./MockTestForm";
import { Grid } from "@mui/material";

const Login = () => {
  const history = useHistory();
  const [takeTest, setTakeTest] = useState(false);
  const taketestHandler = () => {
    setTakeTest(true);
    console.log(takeTest);
  };

  return (
    <Grid container className={classes.Container}>
      <Grid item xs>
        <Grid container className={classes.left}>
          <Grid item xs className={classes.formcontainer}>
            {!takeTest && <LoginForm />}
            {takeTest && <MockTestForm />}
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs className={classes.logocontainer}>
        <Logo width="300px" />
        <Button
          onClick={taketestHandler}
          style={{ backgroundColor: "#634699", color: "#FFFFFF" }}
          type="submit"
          fullWidth
          variant="contained"
          className={classes.btnstyle}
        >
          <b>Take Test?</b>
        </Button>
        <Typography variant="p" align="center" className={classes.headp}>
          <p>*Only for Cenable Care students</p>
        </Typography>
        <Typography variant="p" align="center" className={classes.headp}>
          <p>
            <b>Get Registered!</b>
          </p>
        </Typography>
      </Grid>
    </Grid>

    // <div className={classes.container}>
    //     <div className={classes.left}>
    //       <div className={classes.formcontainer}>
    //         {!takeTest && <LoginForm/> }
    //         {takeTest && <MockTestForm/>}

    //       </div>
    //     </div>
    //     <div className={classes.logocontainer}>
    //        {/* <img src={logo} alt="cenablecarelogo" className={classes.image}/> */}
    //        <Logo width='300px'/>
    //         <Button onClick={taketestHandler}style={{backgroundColor: '#634699', color: '#FFFFFF'}}type="submit" fullWidth variant="contained" className={classes.btnstyle}><b>Take Test?</b></Button>
    //         <Typography variant="p" align='center' className={classes.headp}><p>*Only for Cenable Care students</p></Typography>
    //         <Typography variant="p" align='center'className={classes.headp}><p><b>Get Registered!</b></p></Typography>
    //       </div>
    // </div>
  );
};

export default Login;
