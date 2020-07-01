import React from 'react';
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
//import Grid from '@material-ui/core/Grid';

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

const Tables = () => {
  const classes = useStyles();
  const Hours = [];
  const halfHour = ['00', '30'];
  for (let i = 12; i < 24; i++) {
    for (let j = 0; j < 2; j++) {
      Hours.push(('0' + i).slice(-2) + ':' + halfHour[j]);
    }
  }

  let today = new Date();
  let currentDate = today.toISOString().slice(0, 10);
  const [selectedDate, setSelectedDate] = React.useState(currentDate);

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
        Tables booking
      </Button>
      <Button
        className={styles.button}
        component={Link}
        to={`${process.env.PUBLIC_URL}/tables/events/new`}
        activeclassname="active"
      >
        Tables event
      </Button>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <form className={classes.container} noValidate>
                <TextField
                  id="date"
                  label="Date & Time"
                  type="date"
                  defaultValue={selectedDate}
                  onChange={handleDateChange}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </form>
            </TableCell>
            <TableCell>Table 1</TableCell>
            <TableCell>Table 2</TableCell>
            <TableCell>Table 3</TableCell>
            <TableCell>Table 4</TableCell>
            <TableCell>Table 5</TableCell>
            <TableCell>Table 6</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Hours.map((row) => (
            <TableRow hover key={row}>
              <TableCell>{row}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
/*const Tables = () => (
  <div className={styles.component}>
    <Button
      className={styles.button}
      component={Link}
      to={`${process.env.PUBLIC_URL}/tables/booking/new`}
      activeclassname="active"
    >
      Tables booking
    </Button>
    <Button
      className={styles.button}
      component={Link}
      to={`${process.env.PUBLIC_URL}/tables/events/new`}
      activeclassname="active"
    >
      Tables event
    </Button>
    <h2>Tables view</h2>
  </div>
);*/

export default Tables;
