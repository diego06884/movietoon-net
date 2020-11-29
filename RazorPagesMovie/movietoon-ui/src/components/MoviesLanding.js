import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import bannerImg from "../assets/banner-orig.jpeg";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
  ButtonGroup,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Toolbar,
  CssBaseline,
} from "@material-ui/core";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "release_date", label: "Release Date", minWidth: 100 },
  {
    id: "genre",
    label: "Genre",
    minWidth: 170,
    align: "right",
  },
  {
    id: "price",
    label: "Price",
    minWidth: 170,
    align: "right",
    format: (value) => `$${value}`,
  },
  {
    id: "actions",
    label: "",
    minWidth: 170,
    align: "center",
  },
];
const createMockMovie = (
  name = "Movie Title",
  release_date = "1999-12-31",
  genre = "action",
  price = "9.99"
) => ({ name, release_date, genre, price });

const rows = [
  createMockMovie("The Matrix"),
  createMockMovie("The Matrix Reloaded"),
  createMockMovie("The Matrix Revolutions"),
  createMockMovie("Harry Potter and the Philosopher's Stone", "Adventure"),
  createMockMovie("Harry Potter and the Chamber of Secrets", "Adventure"),
  createMockMovie("Harry Potter and the Prisoner of Azkaban", "Adventure"),
  createMockMovie("Harry Potter and the Goblet of Fire", "Adventure"),
  createMockMovie("Harry Potter and the Order of the Phoenix ", "Adventure"),
  createMockMovie("Harry Potter and the Half-Blood Prince", "Adventure"),
  createMockMovie("Harry Potter and the Deathly Hallows – Part 1", "Adventure"),
  createMockMovie("Harry Potter and the Deathly Hallows – Part 2", "Adventure"),
  createMockMovie(),
];

const MoviesLanding = () => {
  const useStyles = makeStyles((theme) => ({
    bannerImg: {
      height: "250px",
    },
    tableRoot: {
      marginTop: theme.spacing(3),
    },
    container: {
      maxHeight: 440,
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
          <CardActions>
            <Button variant="contained" color="primary">
              Add new movie
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>

      <Paper className={classes.tableRoot}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead color="primary">
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    color="primary"
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        if (column.id !== "actions") {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format ? column.format(value) : value}
                            </TableCell>
                          );
                        }
                        return (
                          <TableCell key={column.id} align={column.align}>
                            <ButtonGroup size="small" color="secondary">
                              <Button>Edit</Button>
                              <Button>Details</Button>
                              <Button>Delete</Button>
                            </ButtonGroup>
                          </TableCell>
                        );
                      })}
                      <TableCell key></TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default MoviesLanding;
