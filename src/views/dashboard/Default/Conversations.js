import { makeStyles } from "@material-ui/core/styles";
import {
    Card,
    IconButton,
    CardActions,
    Button,
    CardHeader,
    Typography,
    CardContent,
    Grid,
    Avatar,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar
  } from "@mui/material";
  const usestyles = makeStyles({
    card: {
      maxWidth: 617,
      margin: "auto",
      borderRadius: "5px",
      transition: "0.3s",
      boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
      "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
      },
    },
  });
const Conversations=()=>{
    const classes = usestyles();
return(
    <>
         <Grid
        container
        spacing={2}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
          
          <Grid item xs={12}>
          <Card className={classes.card}>
          <Typography variant='h4' style={{padding:'20px',color:'#634699'}}>Conversations</Typography>
            <CardContent>
              <List
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt="Esthera Jackson"
                      src="/static/images/avatar/1.jpg"
                    ></Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Evelyn sharma"
                    secondary="Hi I need more Information.."
                  />
                  <ListItemText
                    primary="Reply"
                    
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt="Bruno"
                      src="/static/images/avatar/1.jpg"
                    ></Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Bruno"
                    secondary="Awesome work, can you change..."
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar
                      alt="Rishab"
                      src="/static/images/avatar/1.jpg"
                    ></Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Rishab"
                    secondary="Have a great afternoon"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
          </Grid>
          
      </Grid>
    </>
)
}
export default Conversations;