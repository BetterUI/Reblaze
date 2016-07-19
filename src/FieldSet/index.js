import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Legend from './Legend';

const FieldSet = ({ children, className, ...rest }) => (
  <fieldset className={classnames('c-fieldset', className)} {...rest}>
    {children}
  </fieldset>
);

FieldSet.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

FieldSet.Legend = Legend;

export default FieldSet;
