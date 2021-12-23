import { Card, CardHeader, Typography, CardContent, Grid } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

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

const CenableStudents = () => {
  const classes = usestyles();
  return (
    <>
      <Grid container spacing={3} direction="row">
      
        <Grid item xs={12}>
          <Card className={classes.card} sx={{ maxWidth: 345 }}>
          <Typography variant='h4' style={{color:'#634699',padding:'20px'}}>Cenable Students</Typography>
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
                      alt="Evelyn Sharma"
                      src="/static/images/avatar/1.jpg"
                    ></Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Evelyn sharma"
                    secondary="Hi I need more Information.."
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
  );
};
export default CenableStudents;
