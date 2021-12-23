import ScheduleIcon from "../../../assets/ScheduleIcon.png";
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
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ImageIcon,
  ListItemText
} from "@mui/material";
const usestyles = makeStyles({
  card: {
    maxWidth: "700px",
    margin: "auto",
    borderRadius: "5px",
    transition: "0.3s",
    boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
    "&:hover": {
      boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)",
    },
  },
  avatar: {
    borderRadius: "12px",
  },
});

const Schedule = () => {
  const classes = usestyles();
  const schedules = [
    {
      id: 1,
      title: "English",
      subtitle: "Lectures-module name",
    },
    {
      id: 2,
      title: "English",
      subtitle: "Lectures-module name",
    },
    {
      id: 3,
      title: "English",
      subtitle: "Lectures-module name",
    },
    {
        id: 4,
        title: "English",
        subtitle: "Lectures-module name",
      },
  ];
  return (
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
            <Typography
              variant="h4"
              style={{ padding: "20px", color: "#634699" }}
            >
              Schedule
            </Typography>
            {schedules.map((schedule) => (
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
                   className={classes.avatar}
                   alt="Task Icon"
                   src={ScheduleIcon}
                 ></Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={schedule.title}
                    secondary={schedule.subtitle}
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </List>
            ))}
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
export default Schedule;
