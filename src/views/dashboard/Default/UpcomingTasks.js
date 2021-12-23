import TaskIcon from "../../../assets/TaskIcon.png";
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
  Box,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
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
  cardHeader: {},
  avatar: {
    borderRadius: "15px",
  },
});

function createData(id, title, time, date) {
  return { id, title, time, date };
}

const rows = [
  createData(1, "Literature Discussion", "8.00pm", "2nd Oct 21"),
  createData(2, "Literature Discussion", "8.00pm", "2nd Oct 21"),
  createData(3, "Literature Discussion", "8.00pm", "2nd Oct 21"),
  createData(4, "Literature Discussion", "8.00pm", "2nd Oct 21")
];
const UpcomingTasks = () => {
  const classes = usestyles();

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
              Upcoming Tasks
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 450 }} aria-label="simple table">
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                        <TableCell><Avatar
                   className={classes.avatar}
                   alt="Task Icon"
                   src={TaskIcon}
                 ></Avatar></TableCell>
                      <TableCell component="th" scope="row">
                        {row.title}
                      </TableCell>
                      <TableCell align="right">{row.time}</TableCell>
                      <TableCell align="right">{row.date}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
export default UpcomingTasks;
