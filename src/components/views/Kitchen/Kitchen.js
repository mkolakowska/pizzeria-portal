import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Title from '../Title/Title';

const demoContent = [
  { id: '1', order: 'pizza salami', status: 'done' },
  { id: '2', order: ['toskana salad', 'coffee'], status: 'in preparation' },
  { id: '3', order: ['pizza carbonarra', 'coffee'], status: 'in preparation' },
];

const Kitchen = () => (
  <Paper className={styles.component}>
    <Title>Kitchen</Title>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Order</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {demoContent.map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              {row.id}
            </TableCell>
            <TableCell>{row.order}</TableCell>
            <TableCell>{row.status}</TableCell>
            <TableCell>
              <FormControlLabel control={<Switch />} label="Prepared" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Paper>
);

export default Kitchen;
