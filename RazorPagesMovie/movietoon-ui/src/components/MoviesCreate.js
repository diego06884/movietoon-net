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
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import SaveIcon from "@material-ui/icons/Save";
import DateFnsUtils from "@date-io/date-fns";

const MoviesLanding = () => {
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
              Movies
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
              Add new movie
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <form className={classes.formRoot} noValidate autoComplete="off">
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    id="standard-basic"
                    label="Title"
                    variant="standard"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField id="standard-basic" label="Genre" />
                </Grid>
                <Grid item xs={12}>
                  <TextField id="standard-basic" label="Price" />
                </Grid>
                <Grid item xs={12}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="Release Date"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </MuiPickersUtilsProvider>
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

export default MoviesLanding;
