import classes from './Login.module.css';
import { Typography,TextField } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import  { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import MainLayout from '../../../../layout/MainLayout';
import { useHistory } from 'react-router-dom';

const LoginForm = () =>{
    const history = useHistory();
    return(
        <>
        <Typography variant="h1">Welcome Back</Typography>
                <Typography className={classes.normal}>Enter your email and password to sign in</Typography>
                  <TextField className={classes.textField} label="Your Mail ID" variant="standard" fullWidth required InputProps={{disableUnderline: true}}/>
                  <TextField className={classes.textField} label="Your Password" type="password" variant="standard" fullWidth required InputProps={{disableUnderline: true}}/>
                  <FormControlLabel control={<Switch  value="remember" color="primary" />}  label={<Typography style={{color:'#FFFFFF'}}>Remember me</Typography>}/>
                  <Button onClick ={()=> history.push("/dashboard")} style={{backgroundColor: '#FFFFFF', color: '#634699', fontSize:'24px',textTransform: 'none'}}type="submit" fullWidth variant="contained" className={classes.btnstyle}><b>Login</b></Button>
                  <Typography className={classes.regtext}>Don't have an account?
                  <Link to="/signup" style={{ textDecoration: 'none',color:"#FFFFFF" }}>Sign Up</Link>
        </Typography>
        
        </>
    )

}
export default LoginForm;