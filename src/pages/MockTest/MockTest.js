import React from 'react';
import classes from '../Login/Login.module.css';
import { Typography,TextField } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import  { Link } from 'react-router-dom';
import logo from '../../assets/cenablecare-logo.png';
import { useHistory } from 'react-router-dom';

function MockTest() {
    const history = useHistory();
  return (
    <div className={classes.container}>
              <div className={classes.left}>
                <div className={classes.formcontainer}>
                <Typography variant="h1">Test Entry</Typography>
                <Typography className={classes.normal}>Enter your email and password to sign in</Typography>
                  <TextField className={classes.textField} label="Your Email Address" variant="standard" fullWidth required InputProps={{disableUnderline: true}}/>
                  <TextField className={classes.textField} label="Phone Number" variant="standard" fullWidth required InputProps={{disableUnderline: true}}/>
                  <TextField className={classes.textField} label="Parent's Contact Number" variant="standard" fullWidth required InputProps={{disableUnderline: true}}/>
                  <FormControlLabel control={<Switch  value="remember" color="primary" />}  label={<Typography style={{color:'#FFFFFF'}}>Remember me</Typography>}/>
                  <Button style={{backgroundColor: '#FFFFFF', color: '#634699', fontSize:'24px',textTransform: 'none'}}type="submit" fullWidth variant="contained" className={classes.btnstyle}><b>Next</b></Button>
                  <Typography className={classes.regtext}>Don't have an account?
                      <Link to="/signup" style={{ textDecoration: 'none',color:"#FFFFFF" }}>Sign Up</Link>
                  </Typography>
                </div>
              </div>
              <div className={classes.logocontainer}>
                  
                  <img src={logo} alt="cenablecarelogo" className={classes.image}/>
                  <Button disabled style={{backgroundColor: '#634699', color: '#FFFFFF'}}type="submit" fullWidth variant="contained" className={classes.btnstyle}><b>Take Test?</b></Button>
                  <Typography variant="p" align='center' className={classes.headp}><p>*Only for Cenable Care students</p></Typography>
                  <Typography variant="p" align='center'className={classes.headp}><p><b>Get Registered!</b></p></Typography>
                </div>
          </div>
  )
}

export default MockTest
