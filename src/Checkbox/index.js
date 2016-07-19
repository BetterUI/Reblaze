import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Checkbox = ({ children, className, success, error, size, ...rest }) => {
  const modifiers = {
    ['c-choice--success']: success,
    ['c-choice--error']: error,
    ['c-field--xsmall']: size === 'xsmall',
    ['c-field--small']: size === 'small',
    ['c-field--medium']: size === 'medium',
    ['c-field--large']: size === 'large',
    ['c-field--xlarge']: size === 'xlarge',
    ['c-field--super']: size === 'super'
  };

  return (
    <label className={classnames('c-choice', modifiers, className)}>
      <input type="checkbox" {...rest} /> {children}
    </label>
  );
};

Checkbox.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  success: PropTypes.bool,
  error: PropTypes.error,
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'super'])
};

export default Checkbox;
