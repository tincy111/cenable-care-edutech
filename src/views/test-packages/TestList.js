import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, CardContent, Card,Typography } from "@mui/material";
import { ExpandIcon, TestPackageListIcon } from "../../assets/icons";

const tests = [
  { id: "1", content: "Test Name/Chapter Name1", class: "10" },
  { id: "2", content: "Test Name/Chapter Name2", class: "10" },
  { id: "3", content: "Test Name/Chapter Name3", class: "10" },
  { id: "4", content: "Test Name/Chapter Name4", class: "10" },
  { id: "5", content: "Test Name/Chapter Name5", class: "10" },
  { id: "6", content: "Test Name/Chapter Name6", class: "10" },
  { id: "7", content: "Test Name/Chapter Name7", class: "10" },
  { id: "8", content: "Test Name/Chapter Name8", class: "10" },
  { id: "9", content: "Test Name/Chapter Name9", class: "10" },
  { id: "10", content: "Test Name/Chapter Name10", class: "10" },
];

const usestyles = makeStyles({
  testListContainer: {
    backgroundColor: "#E5E5E5",
    borderRadius:"4px",
    marginTop:"10px"
  },
  icon: {
    backgroundColor: "#634699",
    padding: "4px",
    borderRadius: "5px",
  },
});

const TestList = () => {
  const classes = usestyles();
  return (
    <Box px={1}>
      <Grid container className={classes.testListContainer}>
        <Grid item xs={12}>
          {tests.map((test) => (
            <Card sx={{ margin: "15px" }}>
              <CardContent>
                <Grid container >
                  <Grid item xs={1}>
                    <TestPackageListIcon className={classes.icon} />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography sx={{fontWeight:"bold",fontSize:"16px",color:"#634699",textAlign:"left"}}>{test.content}  <span style={{fontWeight:"normal",color:"gray",fontSize:"16px", marginLeft: "5px" }}>{test.class}</span></Typography>
                   
                  </Grid>
                  <Grid item xs={2}/>
                  <Grid item xs={1}>
                    <ExpandIcon />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default TestList;
