import { useState ,useEffect} from 'react';
import {Card,CardHeader,Typography,CardContent,Grid} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import {
    CircularProgressbar
  } from "react-circular-progressbar";


const usestyles = makeStyles({
    card: {
        maxWidth: 617,
        height:360,
        margin: "auto",
       textAlign:'center',
        borderRadius:'5px',
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        alignItems:'center',
        "&:hover": {
          boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
      },

      circleprogress:{
        color:'#634699',
        marginTop:'40px'
        
    },
    cardHeader: {
        backgroundColor: "#d8e2f3",
        MuiTypography: {
            fontVariant: "h4"
        }
    }
     
      
      
})
const percentage = 66;
const Progress =()=>{
    
    const classes = usestyles();
    // const [progress, setProgress] = useState(0);
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //       setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    //     }, 800);
    
    //     return () => {
    //       clearInterval(timer);
    //     };
    //   }, []);
    return(
       
        <Grid container spacing={3} direction="row">
            <Grid item xs={12}>
            
                <Card className={classes.card} sx={{ maxWidth: 417 }}>
                <Typography variant='h4' style={{color:'#634699',padding:'20px',textAlign:'left'}}>Progress</Typography>
                    <Box  sx={{ position: 'relative', display: 'inline-flex' }}>
                    {/* <CircularProgressbar className={classes.circleprogress} value={percentage} text={`${percentage}%`} /> */}
                     <CircularProgress className={classes.circleprogress} variant="determinate" value={76} size={100} thickness={7} /> 
                        
                    <Box sx={{
                                top: 40,
                                left: 0,
                                bottom: 0,
                                right: 0,
                                position: 'absolute',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                    }}>
                        
                     <Typography variant="h3" component="div" color="#000">
                        {`76%`}
                    </Typography> 
                    </Box>
                    </Box>

                
                    
                    {/* <CircularProgress variant="determinate" color="secondary" value={76}/> */}
                    
                    
        
      

                </Card>
            </Grid>
        </Grid>
        
       
    )

}
export default Progress;



// import * as React from 'react';
// import PropTypes from 'prop-types';
// import CircularProgress from '@mui/material/CircularProgress';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// function CircularProgressWithLabel(props) {
//   return (
//     <Box sx={{ position: 'relative', display: 'inline-flex' }}>
//       <CircularProgress variant="determinate" {...props} />
//       <Box
//         sx={{
//           top: 0,
//           left: 0,
//           bottom: 0,
//           right: 0,
//           position: 'absolute',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//         }}
//       >
//         <Typography variant="caption" component="div" color="text.secondary">
//           {`${Math.round(props.value)}%`}
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

// CircularProgressWithLabel.propTypes = {
//   /**
//    * The value of the progress indicator for the determinate variant.
//    * Value between 0 and 100.
//    * @default 0
//    */
//   value: PropTypes.number.isRequired,
// };

// export default function CircularStatic() {
//   const [progress, setProgress] = React.useState(10);

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
//     }, 800);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return <CircularProgressWithLabel value={progress} />;
// }