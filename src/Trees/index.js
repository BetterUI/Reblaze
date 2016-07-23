import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Item from './Item';

const Trees = ({ children, className, animate, ...rest }) => {
  const parentModifiers = {
    'a-tree': animate !== undefined,
    'a-tree--slow': animate === 'slow',
    'a-tree--fast': animate === 'fast'
  };
  return (
    <ul className={classnames('c-tree', className, parentModifiers)} {...rest}>
      {children}
    </ul>
  );
};

Trees.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  animate: PropTypes.oneOf(['slow', 'fast'])
};

Trees.Item = Item;

export default Trees;
