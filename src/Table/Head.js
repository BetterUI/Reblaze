import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Head = ({ children, className, ...rest }) => (
  <thead className={classnames('c-table__head', className)} {...rest}>
    {children}
  </thead>
);

Head.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

export default Head;
