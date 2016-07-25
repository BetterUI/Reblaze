import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Heading = ({ children, className, active, disabled, ...rest }) => {
  const modifiers = {
    'c-tab-heading--active': active,
    'c-tab-heading--disabled': disabled
  };
  return (
    <div className={classnames('c-tab-heading', className, modifiers)} {...rest}>
       {children}
    </div>
  );
};

Heading.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool
};

export default Heading;
