import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Auth.module.css';

const AuthLayout = ({ children }) => {
  return (
    <main className={styles.auth}>
      <div className={styles.children}>{children}</div>
    </main>
  );
};

export default AuthLayout;

AuthLayout.PropTypes = {
  children: PropTypes.element
};