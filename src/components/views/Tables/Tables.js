import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Tables = () => (
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
);

export default Tables;
