import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Label from './Label';
import Hint from './Hint';

const FormElement = ({ children, className, ...rest }) => (
  <div className={classnames('c-form-element', className)} {...rest}>
    {children}
  </div>
);

FormElement.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

FormElement.Label = Label;
FormElement.Hint = Hint;

export default FormElement;
