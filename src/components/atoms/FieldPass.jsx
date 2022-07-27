import React from "react";
import ropTypes from "prop-types";
import IconButton from "@mui/icons-material";
import { Input, InputAdornment, InputLabel, FormControl } from "@mui/material"
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";

const FieldPass = React.forwardRef(
    (
      {
        id,
        isShowPassword,
        value,
        onChange,
        handleClickShowPassword,
        handleMouseDownPassword,
        style
      },
      ref
    ) => (
      <>
        <FormControl variant="standard">
          <InputLabel
            htmlFor="standard-adornment-password"
            style={{
              fontFamily: 'Rubik',
              fontWeight: '400',
              fontSize: '16px',
              color: 'var(--text-gray)',
              opacity: '0.75'
            }}>
            {id === 'password' ? 'Password' : 'Confirm Password'}
          </InputLabel>
          <Input
            id={id}
            type={isShowPassword ? 'text' : 'password'}
            value={value}
            onChange={onChange}
            style={style}
            ref={ref}
            inputProps={{
              style: {
                fontFamily: 'Rubik',
                fontWeight: '500',
                fontSize: '16px',
                lineHeight: '19px',
                color: 'var(--text-black)'
              }
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}>
                  {isShowPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </>
    )
  );
  
  FieldPass.propTypes = {
    id: propTypes.string,
    isShowPassword: propTypes.bool,
    value: propTypes.string,
    onChange: propTypes.func,
    handleClickShowPassword: propTypes.func,
    handleMouseDownPassword: propTypes.func,
    style: propTypes.object
  };
  
  export default FieldPass;