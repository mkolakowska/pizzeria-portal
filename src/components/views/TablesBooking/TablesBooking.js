import React from 'react';
import styles from './TablesBooking.module.scss';
import { Link } from 'react-router-dom';

const TablesBooking = () => (
  <div className={styles.component}>
    <h2>Tables booking view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`}>Id</Link>
  </div>
);

export default TablesBooking;
