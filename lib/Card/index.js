import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Content from './Content';
import Divider from './Divider';

const Card = ({ children, className, ...rest }) => (
  <div className={classnames('c-card', className)} {...rest}>
    {children}
  </div>
);

Card.Content = Content;
Card.Divider = Divider;

Card.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

export default Card;
