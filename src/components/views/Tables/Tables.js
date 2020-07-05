import React, { useState } from 'react';
import styles from './Tables.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Title from '../Title/Title';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const demoContent = [
  {
    hour: '13:00',
    tables: [
      { id: 1, status: 'booked' },
      { id: 2, status: 'free' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'free' },
      { id: 5, status: 'booked' },
      { id: 6, status: 'free' },
    ],
  },
  {
    hour: '13:30',
    tables: [
      { id: 1, status: 'booked' },
      { id: 2, status: 'event' },
      { id: 3, status: 'free' },
      { id: 4, status: 'free' },
      { id: 5, status: 'booked' },
      { id: 6, status: 'free' },
    ],
  },
  {
    hour: '14:00',
    tables: [
      { id: 1, status: 'event' },
      { id: 2, status: 'free' },
      { id: 3, status: 'booked' },
      { id: 4, status: 'free' },
      { id: 5, status: 'booked' },
      { id: 6, status: 'free' },
    ],
  },
  {
    hour: '14:30',
    tables: [
      { id: 1, status: 'booked' },
      { id: 2, status: 'free' },
      { id: 3, status: 'free' },
      { id: 4, status: 'event' },
      { id: 5, status: 'booked' },
      { id: 6, status: 'free' },
    ],
  },
];

const renderActions = (status) => {
  switch (status) {
    case 'free':
      return (
        <>
          <Button
            size="small"
            component={Link}
            variant="contained"
            color="secondary"
            to={`${process.env.PUBLIC_URL}/tables/booking/new`}
          >
            New Booking
          </Button>
          <Button
            size="small"
            component={Link}
            variant="contained"
            color="secondary"
            to={`${process.env.PUBLIC_URL}/tables/events/new`}
          >
            New Event
          </Button>
        </>
      );
    case 'booked':
      return (
        <Button
          size="small"
          component={Link}
          variant="contained"
          color="primary"
          to={`${process.env.PUBLIC_URL}/tables/booking/123abc`}
        >
          Booked
        </Button>
      );
    case 'event':
      return (
        <Button
          size="small"
          component={Link}
          variant="contained"
          color="primary"
          to={`${process.env.PUBLIC_URL}/tables/events/123abc`}
        >
          Event
        </Button>
      );
    default:
      return null;
  }
};

const Tables = () => {
  const classes = useStyles();
  let today = new Date();
  let currentDate = today.toISOString().slice(0, 10);
  const [selectedDate, setSelectedDate] = useState(currentDate);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <Paper className={styles.component}>
      <Title>Tables</Title>
      <Button
        className={styles.button}
        component={Link}
        to={`${process.env.PUBLIC_URL}/tables/booking/new`}
        activeclassname="active"
      >
        New booking
      </Button>
      <Button
        className={styles.button}
        component={Link}
        to={`${process.env.PUBLIC_URL}/tables/events/new`}
        activeclassname="active"
      >
        New event
      </Button>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            id="date"
            label="Date"
            type="date"
            defaultValue={selectedDate}
            onChange={handleDateChange}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="time"
            label="Hour"
            type="time"
            defaultValue="12:30"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            inputProps={{
              step: 1800, // 30 min
            }}
          />
        </Grid>
      </Grid>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Table 1</TableCell>
            <TableCell>Table 2</TableCell>
            <TableCell>Table 3</TableCell>
            <TableCell>Table 4</TableCell>
            <TableCell>Table 5</TableCell>
            <TableCell>Table 6</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map((row) => (
            <TableRow key={row.hour}>
              <TableCell component="th" scope="row" className={styles.hour}>
                {row.hour}
              </TableCell>
              {row.tables.map((table) => (
                <TableCell key={table.id}>
                  {renderActions(table.status)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Tables;
