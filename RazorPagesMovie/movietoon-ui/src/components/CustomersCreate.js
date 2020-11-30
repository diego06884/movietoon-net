import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import bannerImg from "../assets/banner-orig.jpeg";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  ButtonGroup,
  Paper,
  Toolbar,
  CssBaseline,
  TextField,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import SaveIcon from "@material-ui/icons/Save";
import DateFnsUtils from "@date-io/date-fns";

const CustomersCreate = () => {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const useStyles = makeStyles((theme) => ({
    bannerImg: {
      height: "250px",
    },
    container: {
      padding: theme.spacing(10),
      minHeight: "500px",
      maxWidth: "65%",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(3),
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "100%",
      },
    },
    formControl: {
      width: "100%",
    },
    saveBtn: {
      width: "50%",
      display: "flex",
      margin: "0 auto",
      marginTop: theme.spacing(3),
    },
    formTitle: {
      textAlign: "center",
      marginBottom: theme.spacing(3),
    },
  }));
  const classes = useStyles();
  const theme = useTheme();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };
  return (
    <>
      <CssBaseline />
      <Card>
        <CardActionArea>
          <CardMedia
            className={classes.bannerImg}
            image={bannerImg}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography variant="h5" color="primary">
              Customers
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Paper className={classes.container}>
        <Grid container justify="space-around">
          <Grid item xs={12}>
            <Typography
              className={classes.formTitle}
              variant="h4"
              color="Primary"
            >
              Add new customer
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <form className={classes.formRoot} noValidate autoComplete="off">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    id="standard-basic"
                    label="First Name"
                    variant="standard"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField id="standard-basic" label="Last Name" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    error
                    id="standard-basic"
                    label="Email"
                    helperText="invalid email format"
                  />
                </Grid>
                <Grid item xs={12}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      error
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="Birthday"
                      value={selectedDate}
                      onChange={handleDateChange}
                      helperText="Customer should be over 18 years old"
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
                <Grid item xs={12}>
                  <TextField id="standard-basic" label="Phone number" />
                </Grid>
                <Grid item xs={12}>
                  <TextField id="standard-basic" label="Address" />
                </Grid>
                <Grid item xs={12}>
                  <FormControl className={classes.formControl}>
                    <InputLabel id="demo-simple-select-label">
                      Membership
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                    >
                      <MenuItem value={10}>Pay as you go</MenuItem>
                      <MenuItem value={20}>Monthly</MenuItem>
                      <MenuItem value={30}>Quarterly</MenuItem>
                      <MenuItem value={40}>Yearly</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    className={classes.saveBtn}
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<SaveIcon />}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default CustomersCreate;
