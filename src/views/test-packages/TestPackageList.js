import {
  Card,
  CardContent,
  Typography,
  Grid,
  CardHeader,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  IconButton,
  Collapse,
  Box,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AddToCartIcon,
  TestPackageListIcon,
  MoreIcon,
} from "../../assets/icons";

const usestyles = makeStyles({
  icon: {
    backgroundColor: "#634699",
    padding: "4px",
    borderRadius: "5px",
  },
  card: {
    margin: "10px",
    "& .MuiCardHeader-title": {
      color: "#634699",
      fontWeight: "bold",
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
});

function createData(id, subject, grade, description, price) {
  return {
    id,
    subject,
    grade,
    description,
    price,
  };
}
const rows = [
  createData(
    1,
    "Physics",
    10,
    "This test is for assessing your knowledge in physics",
    "$1000"
  ),
  createData(
    2,
    "Physics",
    10,
    "This test is for assessing your knowledge in physics",
    "$1000"
  ),
  createData(
    3,
    "Physics",
    10,
    "This test is for assessing your knowledge in physics",
    "$1000"
  ),
  createData(
    4,
    "Physics",
    10,
    "This test is for assessing your knowledge in physics",
    "$1000"
  ),
  createData(
    5,
    "Physics",
    10,
    "This test is for assessing your knowledge in physics",
    "$1000"
  ),
];

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = usestyles();
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <TestPackageListIcon className={classes.icon} />
        </TableCell>
        <TableCell
          component="th"
          scope="row"
          style={{ fontWeight: "bold", color: "#634699",fontSize:"16px" }}
        >
          {row.subject} {row.grade}th
          <Box sx={{ margin: 0, color: "#C4C4C4",fontWeight: "normal",fontSize:"12px" }}>{row.description}</Box>
        </TableCell>
        <TableCell
          align="right"
          style={{ fontWeight: "bold", color: "#634699" }}
        >
          {row.price}
        </TableCell>
        <TableCell align="right">
          <Button
            variant="outlined"
            style={{ color: "gray", border: "1px solid #634699" }}
            className={classes.button}
            onClick={() => setOpen(!open)}
          >
            View Syllabus
          </Button>
        </TableCell>
        <TableCell align="right">
          <Button className={classes.icon}>
            <AddToCartIcon />
          </Button>
        </TableCell>
        <TableCell align="right">
          <Button>
            <MoreIcon />
          </Button>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1, fontWeight: "bold" }}>
              <Typography variant="p" gutterBottom component="div">
                Sessions:12
              </Typography>
              <Typography variant="p" gutterBottom component="div">
                Tests: All Chapters
              </Typography>
              <Typography variant="p" gutterBottom component="div">
                Assignments:
              </Typography>
              <Typography variant="p" gutterBottom component="div">
                Course Material
              </Typography>
              {/* <Button>Enroll</Button> */}

              <Grid container className={classes.buttonContainer}>
                <Grid item>
                  <Grid container direction="column">
                    <Grid item>
                      {/* <Link to="/test-packages/orderconfirmation">
                        {" "}
                        Enroll{" "}
                      </Link> */}
                      <Button
                        component={Link}
                        to="/test-packages/orderconfirmation"
                        variant="outlined"
                        fullWidth
                        sx={{
                          marginTop: 1,
                          color:"#634699",
                          borderColor:"#634699",
                          fontWeight:"bold",
                          "&:hover": {borderColor:"#634699" },
                        }}
                      >
                        Enroll
                      </Button>
                    </Grid>
                    <Grid item>
                      {/* <Link to={`/test-packages/${row.id}`}>Customize?</Link> */}
                      <Button
                        component={Link}
                        to={`/test-packages/${row.id}`}
                        variant="outlined"
                        fullWidth
                        sx={{
                          marginTop: 1,
                          color:"#fff",
                          borderColor:"#634699",
                          backgroundColor: "#634699",
                          "&:hover": { backgroundColor: "#7C55C5",borderColor:"#634699" },
                        }}
                      >
                        Customize?
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const TestPackageList = () => {
  const classes = usestyles();
  return (
    <Grid container>
      <Grid item xs={12} md={12} m={2}>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableBody>
              {rows.map((row) => (
                <Row key={row.id} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default TestPackageList;
