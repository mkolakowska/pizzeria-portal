import React from 'react';
import styles from './WaiterOrder.module.scss';
import { Link } from 'react-router-dom';

const WaiterOrder = () => (
  <div className={styles.component}>
    <h2>Waiter order view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`}>Id</Link>
  </div>
);

export default WaiterOrder;
