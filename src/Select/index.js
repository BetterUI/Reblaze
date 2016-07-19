import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Select = ({ children, className, width, style,
  success, error, size, ...rest }) => {
  const finalStyle = Object.assign({ width: `${width}px` }, style);

  const modifiers = {
    ['c-choice--success']: success,
    ['c-choice--error']: error,
    ['c-choice--xsmall']: size === 'xsmall',
    ['c-choice--small']: size === 'small',
    ['c-choice--medium']: size === 'medium',
    ['c-choice--large']: size === 'large',
    ['c-choice--xlarge']: size === 'xlarge',
    ['c-choice--super']: size === 'super'
  };

  return (
    <select
      className={classnames('c-choice', modifiers, className)}
      style={finalStyle} {...rest}
    >
      {children}
    </select>
  );
};

Select.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  width: PropTypes.number,
  style: PropTypes.object,
  success: PropTypes.bool,
  error: PropTypes.bool,
  size: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large', 'xlarge', 'super'])
};

export default Select;
