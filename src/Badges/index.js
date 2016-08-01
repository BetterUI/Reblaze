import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Badges = ({ children, className, primary, secondary, success, error, rounded, ...rest }) => {
  const modifiers = {
    'c-badge--primary': primary,
    'c-badge--secondary': secondary,
    'c-badge--success': success,
    'c-badge--error': error,
    'c-badge--rounded': rounded
  };
  return (
    <span className={classnames('c-badge', className, modifiers)} {...rest}>
      {children}
    </span>
  );
};

Badges.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
  rounded: PropTypes.bool
};

export default Badges;
