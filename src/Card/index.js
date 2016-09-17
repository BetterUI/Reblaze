import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Content from './Content';
import Divider from './Divider';
import Item from './Item';

const Card = ({ children, className, shadow, primary, secondary, success, warning, error, ...rest }) => {
  const modifiers = {
    'c-card--primary': primary,
    'c-card--secondary': secondary,
    'c-card--successful': success,
    'c-card--warning': warning,
    'c-card--error': error,
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
  primary: PropTypes.bool,
  warning: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
  shadow: PropTypes.oneOf(['high', 'higher', 'highest'])
};

export default Card;
