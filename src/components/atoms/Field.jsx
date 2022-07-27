import React from 'react';
import { TextField } from '@mui/material';
import propTypes from 'prop-types';

const Field = React.forwardRef(
  ({
    id, name, type, value, onChange, className, label, variant, style,
  }, ref) => (
    <TextField
      type={type}
      id={id}
      name={name}
      label={label}
      variant={variant}
      style={style}
      value={value}
      onChange={onChange}
      className={className}
      ref={ref}
      InputLabelProps={{
        style: {
          fontFamily: 'Rubik',
          fontWeight: '400',
          fontSize: '16px',
          color: 'var(--text-gray)',
          opacity: '0.75',
        },
      }}
      inputProps={{
        style: {
          fontFamily: 'Rubik',
          fontWeight: '500',
          fontSize: '16px',
          lineHeight: '19px',
          color: 'var(--text-black)',
        },
      }}
    />
  ),
);

Field.propTypes = {
  id: propTypes.string,
  name: propTypes.string,
  type: propTypes.string,
  value: propTypes.string,
  onChange: propTypes.func,
  className: propTypes.string,
  label: propTypes.string,
  variant: propTypes.string,
  style: propTypes.object,
};

Field.defaultProps = {
  variant: 'standard',
};

export default Field;
