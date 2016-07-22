import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Item from './Item';
import Check from './Check';

const Menu = ({ children, className, shadow, ...rest }) => {
  const modifiers = {
    'c-menu--high': shadow === 'high',
    'c-menu--higher': shadow === 'higher',
    'c-menu--highest': shadow === 'highest'
  };

  return (
    <div className={classnames('c-menu', modifiers, className)} {...rest}>
      {children}
    </div>
  );
};

Menu.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  shadow: PropTypes.string
};

Menu.Item = Item;
Menu.Check = Check;

export default Menu;
