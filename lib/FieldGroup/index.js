import React, { PropTypes } from 'react';
import classnames from 'classnames';

const FieldGroup = ({ children, className, inline, ...rest }) => (
  <div className={classnames({ ['c-field-group']: !inline, ['c-field-group-inline']: inline }, className)} {...rest}>
    {children}
  </div>
);

FieldGroup.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  inline: PropTypes.bool
};

export default FieldGroup;
