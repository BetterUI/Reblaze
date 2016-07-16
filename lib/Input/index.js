import React, { PropTypes } from 'react';
import classnames from 'classnames';
import baseStyles from 'blaze/scss/components.inputs.scss';

const Input = ({
  children, className, width, style,
  success, error, ...rest }) => {
  const finalStyle = Object.assign({ width: `${width}px` }, style);

  const modfiers = {
    [baseStyles['c-field--success']]: success,
    [baseStyles['c-field--error']]: error
  };

  return (
    <input className={classnames(baseStyles['c-field'], modfiers, className)}
      style={finalStyle}
      type="text"
      {...rest}
    >
      {children}
    </input>
  );
};

Input.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  width: PropTypes.number,
  success: PropTypes.bool,
  error: PropTypes.bool,
  style: PropTypes.object
};

export default Input;
