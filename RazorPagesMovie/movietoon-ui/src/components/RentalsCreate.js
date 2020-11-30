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
import Autocomplete from "@material-ui/lab/Autocomplete";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import SaveIcon from "@material-ui/icons/Save";
import DateFnsUtils from "@date-io/date-fns";

const RentalsCreate = () => {
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
  const top100Films = [
    { title: "Harry Potter and the Philosopher's Stone", year: 1994 },
    { title: "Harry Potter and the Chamber of Secrets", year: 1972 },
    { title: "Harry Potter and the Prisoner of Azkaban", year: 1974 },
    { title: "Harry Potter and the Goblet of Fire", year: 2008 },
    { title: "Harry Potter and the Order of the Phoenix", year: 1957 },
    { title: "Harry Potter and the Half-Blood Prince", year: 1993 },
    { title: "Harry Potter and the Deathly Hallows – Part 1", year: 1994 },
    { title: "Harry Potter and the Deathly Hallows – Part 2", year: 1994 },
  ];
  const clientList = [
    { name: "John Doe" },
    { name: "Jane Doe" },
    { name: "David Rogan" },
  ];
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
              Rentals
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
              Add new rental
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <form className={classes.formRoot} noValidate autoComplete="off">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <FormControl className={classes.formControl}>
                    <Autocomplete
                      id="combo-box-demo"
                      options={top100Films}
                      getOptionLabel={(option) => option.title}
                      renderInput={(params) => (
                        <TextField {...params} label="Movie" />
                      )}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl className={classes.formControl}>
                    <Autocomplete
                      id="combo-box-demo"
                      options={clientList}
                      getOptionLabel={(option) => option.name}
                      renderInput={(params) => (
                        <TextField {...params} label="Client" />
                      )}
                    />
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

export default RentalsCreate;
