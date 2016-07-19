import React, { PropTypes } from 'react';
import classnames from 'classnames';

const ButtonGroup = ({ children, className, rounded, ...rest }) => (
  <div className={classnames('c-button-group', { ['c-button-group--rounded']: rounded }, className)} {...rest}>
    {children}
  </div>
);

ButtonGroup.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  rounded: PropTypes.bool
};

export default ButtonGroup;
