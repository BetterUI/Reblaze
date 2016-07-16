import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Divider = ({ children, className, heading, ...rest }) => (
  <div className={classnames('c-card__content c-card__content--divider', { 'c-heading': heading }, className)} {...rest}>
    {children}
  </div>
);

Divider.propTypes = {
  children: PropTypes.any,
  heading: PropTypes.bool,
  className: PropTypes.string
};

export default Divider;
