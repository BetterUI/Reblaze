import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Label = ({ children, className, ...rest }) => (
  <label className={classnames('c-label', className)} {...rest}>
    {children}
  </label>
);

Label.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

export default Label;
