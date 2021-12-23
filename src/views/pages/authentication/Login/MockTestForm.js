import React, { useState } from 'react';
import classes from './Login.module.css';
import { Typography,TextField } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import  { Link } from 'react-router-dom';
import TestCode from './TestCode';
 

import { useHistory } from 'react-router-dom';

function MockTestForm(props) {
    const history = useHistory();
    const[nextValue,setNextValue]=useState(false);
    const nextClickHandler=()=>{
        setNextValue(true);
    }
  return (
    
         <>
         <Typography variant="h1">Test Entry</Typography>
                <Typography className={classes.normal}>Enter your email and password to sign in</Typography>
                  <TextField className={classes.textField} label="Your Email Address" variant="standard" fullWidth required InputProps={{disableUnderline: true}}/>
                  <TextField className={classes.textField} label="Phone Number" variant="standard" fullWidth required InputProps={{disableUnderline: true}}/>
                  <TextField className={classes.textField} label="Parent's Contact Number" variant="standard" fullWidth required InputProps={{disableUnderline: true}}/>
                  <FormControlLabel control={<Switch  value="remember" color="primary" />}  label={<Typography style={{color:'#FFFFFF'}}>Remember me</Typography>}/>
                  <Button onClick ={nextClickHandler} style={{backgroundColor: '#FFFFFF', color: '#634699', fontSize:'24px',textTransform: 'none'}}type="submit" fullWidth variant="contained" className={classes.btnstyle}><b>Next</b></Button>
                  <Typography className={classes.regtext}>Don't have an account?
                      <Link to="/signup" style={{ textDecoration: 'none',color:"#FFFFFF" }}>Sign Up</Link>
                  </Typography>
                  {nextValue && <TestCode/>}
                  </>
                
                  
              
  )
}

export default MockTestForm;
