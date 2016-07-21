import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Item = ({ children, className, expandable, expanded, ...rest }) => {
  const modifiers = {
    'c-tree__item--expandable': expandable,
    'c-tree__item--expanded': expanded
  };
  return (
    <li className={classnames('c-tree__item', className, modifiers)} {...rest}>
      {children}
    </li>
  );
};

Item.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  expandable: PropTypes.bool,
  expanded: PropTypes.bool
};

export default Item;
