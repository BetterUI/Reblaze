import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Content from './Content';
import Divider from './Divider';
import Item from './Item';

const Card = ({ children, className, shadow, ...rest }) => {
  const modifiers = {
    'c-card--high': shadow === 'high',
    'c-card--higher': shadow === 'higher',
    'c-card--highest': shadow === 'highest'
  };

  return (
    <div className={classnames('c-card', modifiers, className)} {...rest}>
      {children}
    </div>
  );
};

Card.Content = Content;
Card.Divider = Divider;
Card.Item = Item;

Card.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  shadow: PropTypes.oneOf(['high', 'higher', 'highest'])
};

export default Card;
