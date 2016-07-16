import React, { PropTypes } from 'react';
import classnames from 'classnames';
import baseStyles from 'blaze/scss/components.inputs.scss';

const Input = ({ children, className, width, style, ...rest }) => {
  const finalStyle = Object.assign({ width: `${width}px` }, style);

  return (
    <input className={classnames(baseStyles['c-field'], className)} style={finalStyle} type="text" {...rest}>
      {children}
    </input>
  );
};

Input.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  width: PropTypes.number,
  style: PropTypes.object
};

export default Input;
