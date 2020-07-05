import React from 'react';
import PropTypes from 'prop-types';
import styles from './TablesBooking.module.scss';

const TablesBooking = ({ match }) => (
  <div className={styles.component}>
    <h2>Booking view</h2>
    <span>{match.params.id}</span>
  </div>
);

TablesBooking.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }),
};

export default TablesBooking;
