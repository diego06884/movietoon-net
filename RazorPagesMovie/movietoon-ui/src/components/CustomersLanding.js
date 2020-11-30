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
  { id: "firstname", label: "First Name", minWidth: 150 },
  { id: "lastname", label: "Last Name", minWidth: 150 },
  {
    id: "birthday",
    label: "Birthday",
    minWidth: 170,
  },
  {
    id: "email",
    label: "Email",
    minWidth: 170,
    align: "right",
  },
  {
    id: "phone",
    label: "Phone Number",
    minWidth: 170,
    align: "right",
  },
  {
    id: "address",
    label: "Address",
    minWidth: 170,
    align: "right",
  },
  {
    id: "membership",
    label: "Membership",
    minWidth: 170,
    align: "right",
  },
  {
    id: "actions",
    label: "",
    minWidth: 170,
    align: "center",
  },
];
const createMockCustomer = (
  firstname = "John",
  lastname = "Doe",
  birthday = "1981-12-31",
  email = "someemail@test.com",
  phone = "212-122-2345",
  address = "Evegreen Ave, 12",
  membership = "Yearly"
) => ({ firstname, lastname, birthday, email, phone, address, membership });

const rows = [
  createMockCustomer(),
  createMockCustomer(
    "Jane",
    "Doe",
    "1965-12-31",
    "another@test.com",
    "212-122-2335",
    "First Ave, 12",
    "Monthly"
  ),
  createMockCustomer(
    "David",
    "Rogan",
    "1965-12-31",
    "another@test.com",
    "212-122-2335",
    "First Ave, 12",
    "Pay as you go"
  ),
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
              Customers
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="primary">
              Add new customer
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
