import React from 'react';
import CenableStudents from './CenableStudents';
import Feedback from './FeedbackNotes';
import Progress from './Progress';
import { Grid, Box } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";
import UpcomingTasks from './UpcomingTasks';
import Schedule from './Schedule';
import Conversations from './Conversations';

const usestyles = makeStyles({
dashboardContainer:{
    overflow: 'hidden',
    overflowY: 'auto',
    paddingBottom:'100px',
    marginTop:'5px',
    height: 'calc(100vh - 42vh)',
    '&::-webkit-scrollbar': {
        width: '0.4em',
        borderRadius:'10px',
        padding:'5px'
      },
      '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: '#634699',
        
        
      }
}
})

const Dashboard = ()=>{
    const classes = usestyles();
    return(
        <Box px={2}>
        
        <Grid container spacing={5} className={classes.dashboardContainer}>
            <Grid item xs={12} md={4}>
                <CenableStudents/>
            </Grid>
            <Grid item xs={12} md={4}>
                <Feedback/>
             </Grid>
            <Grid item xs={12} md={4}>
                <Progress/>
            </Grid>
            <Grid item xs={12} md={4}>
                <UpcomingTasks/>
             </Grid>
             <Grid item xs={12} md={4}>
                <Schedule/>
             </Grid>
             <Grid item xs={12} md={4}>
                <Conversations/>
             </Grid>
        </Grid>
        </Box>
    )    

}
export default Dashboard;

