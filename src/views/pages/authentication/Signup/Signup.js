import React from 'react';
import classes from './Signup.module.css';
import { Typography,Grid, Paper,TextField} from '@material-ui/core';
import { useTheme } from '@mui/material/styles';

// import FacebookIcon from "@material-ui/icons/Facebook";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import AppleIcon from '@mui/icons-material/Apple';
import Button from '@material-ui/core/Button';
import  { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';



function Signup() {
  const theme = useTheme();
  const history = useHistory();
  // const matchDownSM = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <div className={classes.container}>
      <div className={classes.top}>
          <div className={classes.welcome}>
            <Typography variant="h1">Welcome!</Typography>
            <Typography className="normal">Use these awesome forms to login or create new account in your project for free.</Typography>
            <Grid>
              <Paper elevation={20} className={classes.paper}>
                <Typography variant="caption" style={{color:'#634699'}}><b>Register with</b></Typography>
                <Grid  className={classes.signupicons}>
                <FacebookRoundedIcon style={{ fontSize:"40",fill: '#634699',border:'1px solid #D3D3D3', borderRadius:'5px' ,padding:'3px',margin:'5px'}}/>
                <AppleIcon style={{ fontSize:"40",fill: '#634699',border:'1px solid #D3D3D3', borderRadius:'5px' ,padding:'3px',margin:'5px'}}/>
                <FacebookRoundedIcon style={{ fontSize:"40",fill: '#634699',border:'1px solid #D3D3D3', borderRadius:'5px' ,padding:'3px',margin:'5px'}}/>
                </Grid>
                <Typography variant="caption" style={{color:'#634699'}}><b>or</b></Typography>
                  
                <form>
                            <Grid>
                                {/* <TextField
                                    fullWidth
                                    variant="contained"
                                    label="Your Full Name"
                                    margin="normal"
                                    name="fullname"
                                    type="text"
                                    defaultValue=""
                                    sx={{ ...theme.typography.customInput }}
                                /> */}
                                <TextField className={classes.signupfield} label="Your Full Name" variant="outlined" type="text" fullwidth />
                                <TextField className={classes.signupfield} label="Your Email" variant="outlined" type="text" fullwidth />
                                <TextField className={classes.signupfield} label="Your Grade" variant="outlined" type="text" fullwidth />
                                <TextField className={classes.signupfield}label="Your Password" variant="outlined" type="text" fullwidth />
                                <Button onClick={()=> history.push("/dashboard")} style={{backgroundColor: '#634699', color: '#FFFFFF'}}type="submit" fullWidth variant="contained" className={classes.btnstyle}><b>Sign up</b></Button>
                                <Typography className={classes.regtext}>Already have an account
                      <Link to="/login" style={{ textDecoration: 'none',color:"#634699" }}>Sign in</Link>
                  </Typography>
                                {/* <FormControlLabel control={<Switch  value="remember" color="primary" />}  label={<Typography>Remember me</Typography>}/> */}
                            </Grid>
                  
                        </form>
                  
               
              </Paper>
            </Grid>
          </div>
      </div>
    </div>
  )
}

export default Signup

