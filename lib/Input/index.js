import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Input = ({
  children, className, multiline, width, style,
  success, error, size, ...rest }) => {
  const finalStyle = Object.assign({ width: `${width}px` }, style);

  const modifiers = {
    ['c-field--success']: success,
    ['c-field--error']: error,
    ['c-field--xsmall']: size === 'xsmall',
    ['c-field--small']: size === 'small',
    ['c-field--medium']: size === 'medium',
    ['c-field--large']: size === 'large',
    ['c-field--xlarge']: size === 'xlarge',
    ['c-field--super']: size === 'super'
  };

  if (multiline) {
    return (
      <textarea className={classnames('c-field', modifiers, className)}
        style={finalStyle}
        type="text"
        {...rest}
      >
        {children}
      </textarea>
    );
  }

  return (
    <input className={classnames('c-field', modifiers, className)}
      style={finalStyle}
      type="text"
      {...rest}
    />
  );
};

Input.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  multiline: PropTypes.bool,
  width: PropTypes.number,
  success: PropTypes.bool,
  error: PropTypes.bool,
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'super']),
  style: PropTypes.object
};

export default Input;
