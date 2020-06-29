import React from 'react';
import styles from './TablesEvent.module.scss';
import { Link } from 'react-router-dom';

const TablesEvent = () => (
  <div className={styles.component}>
    <h2>Tables event view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`}>Id</Link>
  </div>
);

export default TablesEvent;
