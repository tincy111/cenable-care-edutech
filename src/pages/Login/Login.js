import React from 'react';
import classes from './Login.module.css';
import { Typography,TextField } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import  { Link } from 'react-router-dom';
import logo from '../../assets/cenablecare-logo.png';
import { useHistory } from 'react-router-dom';


const Login = () => {
  const history = useHistory();
    
  return (
    
          <div className={classes.container}>
              <div className={classes.left}>
                <div className={classes.formcontainer}>
                <Typography variant="h1">Welcome Back</Typography>
                <Typography className={classes.normal}>Enter your email and password to sign in</Typography>
                  <TextField className={classes.textField} label="Your Mail ID" variant="standard" fullWidth required InputProps={{disableUnderline: true}}/>
                  <TextField className={classes.textField} label="Your Password" type="password" variant="standard" fullWidth required InputProps={{disableUnderline: true}}/>
                  <FormControlLabel control={<Switch  value="remember" color="primary" />}  label={<Typography style={{color:'#FFFFFF'}}>Remember me</Typography>}/>
                  <Button style={{backgroundColor: '#FFFFFF', color: '#634699', fontSize:'24px',textTransform: 'none'}}type="submit" fullWidth variant="contained" className={classes.btnstyle}><b>Login</b></Button>
                  <Typography className={classes.regtext}>Don't have an account?
                      <Link to="/signup" style={{ textDecoration: 'none',color:"#FFFFFF" }}>Sign Up</Link>
                  </Typography>
                </div>
              </div>
              <div className={classes.logocontainer}>
                  
                  <img src={logo} alt="cenablecarelogo" className={classes.image}/>
                  <Button onClick={()=> history.push("/mocktest")}style={{backgroundColor: '#634699', color: '#FFFFFF'}}type="submit" fullWidth variant="contained" className={classes.btnstyle}><b>Take Test?</b></Button>
                  <Typography variant="p" align='center' className={classes.headp}><p>*Only for Cenable Care students</p></Typography>
                  <Typography variant="p" align='center'className={classes.headp}><p><b>Get Registered!</b></p></Typography>
                </div>
          </div>
        

          

































//import { Grid,Typography,TextField } from '@material-ui/core';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';
// import Button from '@material-ui/core/Button';
// import logo from '../../assets/cenablecare-logo.png';
// import  { Link } from 'react-router-dom';



    // <Grid  container spacing={6}>

    //   <Grid item className={classes.left}>

    //     <Grid item className={classes.content} align='left'>
    //       <Typography variant="h4" className={classes.headh4}>Welcome Back</Typography>
    //       <Typography variant="p" className={classes.headp}><p><b>Enter your email and password to sign in</b></p></Typography>
    //       <TextField className={classes.textField} label="Your Mail ID" variant="outlined" fullWidth required />
    //       <TextField className={classes.textField} label="Enter Password" type="password" variant="outlined" fullWidth required />
    //       <FormControlLabel
    //         control={<Switch  value="remember" color="primary" />}
    //         label="Remember me"
    //       />
    //       <Button type="submit" fullWidth variant="contained" className={classes.btnstyle}>Login</Button>
    //       <Typography>
    //         Don't have an account?
            
    //         <Link to="/signup">Sign Up</Link>
            
            
    //       </Typography>
    //     </Grid>
    //   </Grid>
    //   <Grid item className={classes.right}>
    //   <Grid item className={classes.content} align='right'>
    //   <img src={logo} alt="cenablecarelogo" className={classes.image}/>
    //   <Button type="submit" align='center'fullwidth variant="contained" className={classes.taketestbtn}><b>Take Test?</b></Button>
    //   <Typography variant="p" align='center' className={classes.headp}><p><b>Only for Cenable Care students</b></p></Typography>
    //   <Typography variant="p" align='center'className={classes.headp}><p><b>Get Registered!</b></p></Typography>
    //   </Grid>
    //   </Grid>

    // </Grid>
      

      
    
  )
}

export default Login
