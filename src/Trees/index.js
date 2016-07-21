import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Item from './Item';

const Trees = ({ children, className, animate, animateOptions, ...rest }) => {
  const parentModifiers = {
    'a-tree': animate,
    'a-tree--slow': animateOptions === 'slow',
    'a-tree--fast': animateOptions === 'fast'
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
  animate: PropTypes.bool,
  animateOptions: PropTypes.oneOf(['slow', 'fast'])
};

Trees.Item = Item;

export default Trees;
