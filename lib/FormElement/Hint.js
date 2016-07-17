import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Hint = ({ children, className, ...rest }) => (
  <div className={classnames('c-hint a-hint', className)} {...rest}>
    {children}
  </div>
);

Hint.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

export default Hint;
