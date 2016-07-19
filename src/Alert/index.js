import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Alert = ({ children, className, primary, secondary, success, error, closable, ...rest }) => {
  const modifiers = {
    'c-alerts__alert--primary': primary,
    'c-alerts__alert--secondary': secondary,
    'c-alerts__alert--success': success,
    'c-alerts__alert--error': error
  };

  return (
    <div className={classnames('c-alerts', className)} {...rest}>
      <div className={classnames('c-alerts__alert', modifiers)}>
        {closable ? <button className="c-button c-button--close">×</button> : null}
        {children}
      </div>
    </div>
  );
};

Alert.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
  closable: PropTypes.bool
};

export default Alert;
