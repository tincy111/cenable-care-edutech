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
import { AddToCartIcon, TestPackageListIcon,ExpandIcon } from "../../assets/icons";

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
  button: {
    "& .MuiButton-root": {
      backgroundColor: "#fff",
      border: "1px solid #634699",
      color: "#000",
    },
  },
});

function createData(id, topic, grade) {
  return {
    id,
    topic,
    grade,
  };
}
const rows = [
  createData(1, "Test/Topic name", 10),
  createData(2, "Test/Topic name", 10),
  createData(3, "Test/Topic name", 10),
  createData(4, "Test/Topic name", 10),
  createData(5, "Test/Topic name", 10),
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
          style={{ fontWeight: "bold", color: "#634699" }}
        >
          {row.topic}
          <span style={{ fontWeight: "bold", color: "gray",marginLeft:"10px" }}> {row.grade}</span>
        </TableCell>
       
        <TableCell align="right" margin="18px">
          <ExpandIcon />
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
          <Table>
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
