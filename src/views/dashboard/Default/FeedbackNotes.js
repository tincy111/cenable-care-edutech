import {Card,CardHeader,Typography,CardContent,Grid} from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const usestyles = makeStyles({
    card: {
        maxWidth: 617,
        margin: "auto",
        borderRadius:'5px',
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
          boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
      }
      
      
})

const Feedback =()=>{
    const classes = usestyles();
    return(
        <>
        <Grid container spacing={3} direction="row">
            <Grid item xs={12}>
            
                <Card className={classes.card} sx={{ maxWidth: 345 }}>
                <Typography variant='h4' style={{color:'#634699',padding:'20px'}}>Feedback Notes</Typography>
                    <CardContent>
                    <Typography  variant={"caption"}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                    </Typography>
                    <Typography display={"block"} variant={"caption"}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy 
                    text ever since the 1500s when 
                    </Typography>
                    <Typography display={"block"} variant={"caption"}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC. 
                    
                    
                    </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
        
        </>
    )
   

}

export default Feedback;