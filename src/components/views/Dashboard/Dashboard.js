import React from 'react';
import styles from './Dashboards.module.scss';
import Tables from '../Tables/Tables';
import Waiter from '../Waiter/Waiter';

const Dashboard = () => (
  <div>
    <div>
      <Waiter />
    </div>
    <div className={styles.tables}>
      <Tables />
    </div>
  </div>
);

/*const Dashboard = () => (
  <div className={styles.component}>
    <h2>Dashboard view</h2>
  </div>
);*/

export default Dashboard;
