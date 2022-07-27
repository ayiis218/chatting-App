import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/Card.module.css';

const Card = ({ children }) => {
  return <div className="style__card">{children}</div>;
};

Card.PropTypes = {
  children: PropTypes.element
};

export default Card;