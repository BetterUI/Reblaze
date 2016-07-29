import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Content from './Content';
import Item from './Item';

const Navs = ({ children, className, animate, inline, position, fixed, shadow, ...rest }) => {
  const modifiers = {
    'c-nav--inline': inline,
    'c-nav--fixed': fixed,
    'c-nav--top': position === 'top',
    'c-nav--bottom': position === 'bottom',
    'c-nav--left': position === 'left',
    'c-nav--right': position === 'right',
    'c-nav--high': shadow === 'high',
    'c-nav--higher': shadow === 'higher',
    'c-nav--highest': shadow === 'highest',
    'a-nav': animate !== undefined
  };
  return (
    <ul className={classnames('c-nav', className, modifiers)} {...rest}>
       {children}
    </ul>
  );
};

Navs.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  animate: PropTypes.bool,
  fixed: PropTypes.bool,
  inline: PropTypes.bool,
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  shadow: PropTypes.oneOf(['high', 'higher', 'highest'])
};

Navs.Content = Content;
Navs.Item = Item;

export default Navs;
