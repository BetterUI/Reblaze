import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Legend = ({ children, className, ...rest }) => (
  <legend className={classnames('c-fieldset__legend', className)} {...rest}>
    {children}
  </legend>
);

Legend.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

export default Legend;
