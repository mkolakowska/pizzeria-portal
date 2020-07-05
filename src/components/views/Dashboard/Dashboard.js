import React from 'react';
import styles from './Dashboards.module.scss';
import Tables from '../Tables/Tables';
import Waiter from '../Waiter/WaiterContainer';
import Grid from '@material-ui/core/Grid';

const Dashboard = () => (
  <main className={styles.component}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Waiter />
      </Grid>
      <Grid item xs={12}>
        <Tables />
      </Grid>
    </Grid>
  </main>
);

export default Dashboard;
