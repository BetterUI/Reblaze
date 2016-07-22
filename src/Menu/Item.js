import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Item = ({ children, className, divider, disabled, active, ...rest }) => {
  const modifiers = {
    'c-menu__item--divider': divider,
    'c-menu__item--disabled': disabled,
    'c-menu__item--active': active
  };

  return (
    <div className={classnames('c-menu__item', modifiers, className)} {...rest}>
      {children}
    </div>
  );
};

Item.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  divider: PropTypes.bool,
  disabled: PropTypes.bool,
  active: PropTypes.bool
};

export default Item;
