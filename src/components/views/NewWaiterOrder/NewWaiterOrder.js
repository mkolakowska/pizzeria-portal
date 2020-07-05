import React, { useState } from 'react';
import styles from './NewWaiterOrder.module.scss';
//import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Title from '../Title/Title';
import TableHead from '@material-ui/core/TableHead';

const menu = [
  { id: 1, dish: 'pizza', options: ['pepper', 'onion', 'olives'] },
  {
    id: 2,
    dish: 'coffee',
    options: ['lactose-free milk', 'small', 'big', 'no-milk'],
  },
  {
    id: 3,
    dish: 'salad',
    options: ['yellow cheese', 'goat cheese', 'tomato', 'cucumber', 'olives'],
  },
];

const NewWaiterOrder = () => {
  const [values, setValues] = useState({
    table: '',
    order: [],
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Paper className={styles.component}>
      <Title>New Order</Title>
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
      </Grid>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Dish</TableCell>
            <TableCell>Options</TableCell>
            <TableCell>Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {menu.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.dish}</TableCell>
              <TableCell>{row.options}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

/*const NewWaiterOrder = () => (
  <div className={styles.component}>
    <h2>Waiter order view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`}>Id</Link>
  </div>
);*/

export default NewWaiterOrder;
