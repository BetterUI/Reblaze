import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Row = ({ children, className, heading, ...rest }) => (
  <tr className={classnames('c-table__row', { 'c-table__row--heading': heading }, className)} {...rest}>
    {children}
  </tr>
);

Row.propTypes = {
  children: PropTypes.any,
  heading: PropTypes.bool,
  className: PropTypes.string
};

export default Row;
