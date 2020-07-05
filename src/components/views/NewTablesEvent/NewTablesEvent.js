import React, { useState } from 'react';
import styles from './NewTablesEvent.module.scss';
//import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Title from '../Title/Title';
import FormLabel from '@material-ui/core/FormLabel';

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

const NewTablesEvent = () => {
  const classes = useStyles;

  let today = new Date();
  let currentDate = today.toISOString().slice(0, 10);
  const [selectedDate, setSelectedDate] = useState(currentDate);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [values, setValues] = useState({
    table: '',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const demoStarters = ['water', 'snacks', 'cheese'];

  const [checked, setChecked] = useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
  });

  const [time, setTime] = useState('');

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleCheckboxChange = (name) => (event) => {
    setChecked({ ...checked, [name]: event.target.checked });
  };

  return (
    <Paper className={styles.component}>
      <Title>New event</Title>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            label="Table Number"
            name="table"
            onChange={handleChange}
            required
            select
            value={values.table}
            variant="outlined"
            fullWidth
          >
            {[1, 2, 3, 4, 5, 6].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}></Grid>
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
        <Grid item xs={6}>
          <FormLabel component="legend">Starters:</FormLabel>
          <FormGroup row>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked.checkedA}
                  onChange={handleCheckboxChange('checkedA')}
                  value={demoStarters[0]}
                  color="primary"
                />
              }
              label={demoStarters[0]}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked.checkedB}
                  onChange={handleCheckboxChange('checkedB')}
                  value={demoStarters[1]}
                  color="primary"
                />
              }
              label={demoStarters[1]}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked.checkedC}
                  onChange={handleCheckboxChange('checkedC')}
                  value={demoStarters[2]}
                  color="primary"
                />
              }
              label={demoStarters[2]}
            />
          </FormGroup>
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="select-frequency"
            select
            label="Frequency"
            value={time}
            onChange={handleTimeChange}
            fullWidth
          >
            <MenuItem value={10}>once a week</MenuItem>
            <MenuItem value={20}>once in two weeks</MenuItem>
            <MenuItem value={30}>once in month</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.margin}>
            <Grid container spacing={1} alignItems="flex-end">
              <Grid item>
                <AccountCircle />
              </Grid>
              <Grid item>
                <TextField id="input-with-icon-grid" label="With a grid" />
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

/*const NewTablesEvent = () => (
  <div className={styles.component}>
    <h2>Tables event view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`}>Id</Link>
  </div>
);*/

export default NewTablesEvent;
