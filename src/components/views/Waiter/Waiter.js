import React from 'react';
import styles from './Waiter.module.scss';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Waiter = () => (
  <div className={styles.component}>
    <Button
      className={styles.button}
      component={Link}
      to={`${process.env.PUBLIC_URL}/waiter/order/new`}
      activeclassname="active"
    >
      Waiter order
    </Button>
    <h2>Waiter view</h2>
  </div>
);

export default Waiter;
