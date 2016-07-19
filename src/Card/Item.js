import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Item = ({ children, className, ...rest }) => (
  <div className={classnames('c-card__item', className)} {...rest}>
    {children}
  </div>
);

Item.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

export default Item;
