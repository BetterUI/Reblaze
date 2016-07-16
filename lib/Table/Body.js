import React, { PropTypes } from 'react';
import classnames from 'classnames';
import 'blaze/scss/components.tables.scss';

const Body = ({ children, className, ...rest }) => (
  <tbody className={classnames('c-table__body', className)} {...rest}>
    {children}
  </tbody>
);

Body.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

export default Body;
