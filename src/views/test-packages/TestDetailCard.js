import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";

const usestyles = makeStyles({
  cardAction: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    
      background: "#634699",
      width:"15%"
  },
});

const TestDetailCard = () => {
  const classes = usestyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Typography variant="h1" color="#634699">
              Physics 10th
            </Typography>
            <Typography sx={{display:"flex",justifyContent:"flex-end"}}variant="h1" color="#634699">
              100$
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              width="30%"
              marginTop="5px"
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled
            </Typography>
          </CardContent>
          <CardActions disableSpacing className={classes.cardAction}>
            <Button component={Link} to="/test-packages/orderconfirmation"  variant="contained" className={classes.button} size="small">
              Enroll
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TestDetailCard;
