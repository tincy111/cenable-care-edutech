import React from "react";
import { useState } from "react";
import {
  Box,
  Grid,
  Button,
  Typography,
  TextField,
  RadioGroup,
  FormControlLabel,
  Radio,
  Card,
  CardContent,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import countries from "i18n-iso-countries";
// Import the languages you want to use
import enLocale from "i18n-iso-countries/langs/en.json";
import itLocale from "i18n-iso-countries/langs/it.json";

import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const usestyles = makeStyles({
  orderCheckoutContainer: {
    overflow: "hidden",
    overflowY: "auto",
    paddingBottom: "100px",
    marginTop: "5px",
    height: "calc(100vh - 46vh)",
    "&::-webkit-scrollbar": {
      width: "0.4em",
      borderRadius: "10px",
      padding: "5px",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#634699",
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    // position:"absolute",
    // bottom:"20px"
  },
});

const Checkout = () => {
  let history = useHistory();
  const classes = usestyles();

  const [selectedCountry, setSelectedCountry] = useState("");

  const selectCountryHandler = (value) => setSelectedCountry(value);

  // Have to register the languages you want to use
  countries.registerLocale(enLocale);
  countries.registerLocale(itLocale);

  // Returns an object not a list
  const countryObj = countries.getNames("en", { select: "official" });

  const countryArr = Object.entries(countryObj).map(([key, value]) => {
    return {
      label: value,
      value: key,
    };
  });

  const [showCard, setShowCard] = useState(false);

  const handleRadioChange = (event) => {
    console.log(event.target.value);
    if (event.target.value === "Card") {
      setShowCard(true);
    } else if (event.target.value === "Paypal") {
      setShowCard(false);
    } else if (event.target.value === "Cash") {
      setShowCard(false);
    }
  };

  const [card, setCard] = React.useState("");

  const handleCardChange = (event) => {
    setCard(event.target.value);
  };
  return (
    <Box px={2}>
      <Grid item xs={12}>
        <Button
          sx={{ color: "#634699", fontWeight: "bold" }}
          onClick={() => history.goBack()}
        >
          Back
        </Button>
      </Grid>
      <Card>
        <CardContent>
          <Grid
            container
            spacing={2}
            className={classes.orderCheckoutContainer}
          >
            <Grid item xs={12}>
              <Typography variant="h1" color="#634699">
                Checkout
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container spacing={2} direction="column">
                <Grid item>
                  <Typography variant="h2">Personal Details</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <TextField
                        label="First Name"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        label="Last Name"
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email Address"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Password" variant="outlined" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="country">Country</InputLabel>
                    <Select
                      label="Country"
                      variant="outlined"
                      value={selectedCountry}
                      onChange={(e) => selectCountryHandler(e.target.value)}
                    >
                      {!!countryArr?.length &&
                        countryArr.map(({ label, value }) => (
                          <MenuItem key={value} value={value}>
                            {label}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    multiline
                    rows={4}
                    maxRows={6}
                    label="Address"
                    variant="outlined"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="h2">Payment Method</Typography>
                </Grid>

                <Grid item xs={12}>
                  <RadioGroup
                    row
                    aria-label="payment"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="Card"
                      control={<Radio />}
                      label="Card Payment"
                      name="card"
                      onChange={handleRadioChange}
                    />
                    <FormControlLabel
                      value="Paypal"
                      control={<Radio />}
                      label="Paypal"
                      name="paypal"
                      onChange={handleRadioChange}
                    />
                    <FormControlLabel
                      value="Cash"
                      control={<Radio />}
                      label="Cash"
                      name="cash"
                      onChange={handleRadioChange}
                    />
                  </RadioGroup>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={8}>
              <Grid container spacing={2} marginLeft="20%" direction="column">
                {showCard && (
                  <>
                    <Grid item>
                      <Typography variant="h4" color="#634699">
                        Add Card
                      </Typography>
                    </Grid>
                    <Grid item>
                      <FormControl sx={{ minWidth: 300 }}>
                        <InputLabel id="demo-simple-select-label">
                          Select your Credit Card
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={card}
                          label=" Select your Credit Card"
                          onChange={handleCardChange}
                        >
                          <MenuItem value="mastercard">Master Card</MenuItem>
                          <MenuItem value="visa">Visa</MenuItem>
                          <MenuItem value="rupay">Rupay</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <TextField
                        label="Credit Card Number"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        id="date"
                        label="Valid through"
                        type="date"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </Grid>
                    <Grid item>
                      <TextField label="Card Holder Name" variant="standard" />
                    </Grid>
                  </>
                )}
              </Grid>

              <Grid container className={classes.buttonContainer}>
                <Grid item>
                  <Grid
                    container
                    direction="column"
                    sx={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <Grid item>
                      <Typography variant="h2">
                        Total{" "}
                        <span style={{ fontWeight: "bold", color: "#634699" }}>
                          80 $
                        </span>
                      </Typography>
                    </Grid>
                    <Grid>
                      <Button
                        variant="contained"
                        fullWidth
                        sx={{
                          marginTop: 1,
                          backgroundColor: "#634699",
                          "&:hover": { backgroundColor: "#634699" },
                        }}
                      >
                        Checkout
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Checkout;
