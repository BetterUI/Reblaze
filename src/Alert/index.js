import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Alert = ({ children, className, primary, secondary, success, error, closable, animate, ...rest }) => {
  const parentModifiers = {
    'a-alerts': animate !== undefined
  };
  const modifiers = {
    'c-alerts__alert--primary': primary,
    'c-alerts__alert--secondary': secondary,
    'c-alerts__alert--success': success,
    'c-alerts__alert--error': error,
    'a-alerts__alert--slow': animate === 'slow',
    'a-alerts__alert--fast': animate === 'fast',
    'a-alerts__alert--top': animate === 'top',
    'a-alerts__alert--bottom': animate === 'bottom',
    'a-alerts__alert--left': animate === 'left',
    'a-alerts__alert--right': animate === 'right'
  };
  console.log(parentModifiers);
  return (
    <div className={classnames('c-alerts', className, parentModifiers)} {...rest}>
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
  closable: PropTypes.bool,
  animate: PropTypes.oneOf(['slow', 'fast', 'top', 'bottom', 'left', 'right'])
};

export default Alert;
