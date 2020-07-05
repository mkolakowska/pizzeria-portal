import React from 'react';
import PropTypes from 'prop-types';
import styles from './TablesEvent.module.scss';

const TablesEvent = ({ match }) => (
  <div className={styles.component}>
    <h2>Event view</h2>
    <span>{match.params.id}</span>
  </div>
);

TablesEvent.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    }),
  }),
};

export default TablesEvent;
