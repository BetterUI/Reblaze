import React, { PropTypes } from 'react';
import classnames from 'classnames';

const InputGroup = ({ children, className, ...rest }) => (
  <div className={classnames('c-input-group', className)} {...rest}>
    {children}
  </div>
);

InputGroup.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string
};

export default InputGroup;
