import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const usestyles = makeStyles({
  customizeGridContainer: {
    border: "3px dotted #634699",
    borderRadius: "4px",
    height: "400px",
    marginTop: "10px",
  },
});

const CustomizeGrid = () => {
  const classes = usestyles();
  return (
    <Box px={5}>
      <Grid container className={classes.customizeGridContainer}>
        <Grid item>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
          >
            <Grid item>
              {/* <Link to={`/test-packages/${row.id}`}>Customize?</Link> */}
              <Button
                component={Link}
                to="/test-packages/customize"
                variant="outlined"
                fullWidth
                sx={{
                  marginTop: 1,
                  color: "#fff",
                  borderColor: "#634699",
                  backgroundColor: "#634699",
                  "&:hover": {
                    backgroundColor: "#634699",
                    borderColor: "#634699",
                  },
                }}
              >
                Customize?
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CustomizeGrid;
