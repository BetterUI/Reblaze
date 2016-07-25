import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Tab = ({ children, className, active, disabled, ...rest }) => {
  const modifiers = {
    'c-tabs__tab--active': active,
    'c-tabs__tab--disabled': disabled
  };
  return (
    <div className={classnames('c-tabs__tab', className, modifiers)} {...rest}>
       {children}
    </div>
  );
};

Tab.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  active: PropTypes.bool,
  disabled: PropTypes.bool
};

export default Tab;

