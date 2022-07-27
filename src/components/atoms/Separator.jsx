import React from 'react';
import PropTypes from 'prop-types';
import styles from  './styles/Separator.module.css';

const Separator = () => {
  return (
    <div className={styles.separator}>
      <div className={styles.line} />
      <p className={styles.title}>Card</p>
      <div className={styles.line} />
    </div>
  );
};

Separator.propTypes = {
  title: PropTypes.string.isRequired
};

Separator.defaultProps = {
  title: 'Title'
};

export default Separator;