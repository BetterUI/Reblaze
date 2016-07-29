import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Item = ({ children, className, active, primary, secondary, success, error, ...rest }) => {
  const modifiers = {
    'c-nav__item--active': active,
    'c-nav__item--primary': primary,
    'c-nav__item--secondary': secondary,
    'c-nav__item--success': success,
    'c-nav__item--error': error
  };
  return (
    <li className={classnames('c-nav__item', className, modifiers)} {...rest}>
      {children}
    </li>
  );
};

Item.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  active: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool
};

export default Item;
