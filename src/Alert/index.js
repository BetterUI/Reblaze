import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Alert = ({ children, className, primary, secondary, success, error, closable, animate, animateOptions, ...rest }) => {
  const parentModifiers = {
    'a-alerts': animate
  };
  const modifiers = {
    'c-alerts__alert--primary': primary,
    'c-alerts__alert--secondary': secondary,
    'c-alerts__alert--success': success,
    'c-alerts__alert--error': error,
    'a-alerts__alert--slow': animateOptions === 'slow',
    'a-alerts__alert--fast': animateOptions === 'fast',
    'a-alerts__alert--top': animateOptions === 'top',
    'a-alerts__alert--bottom': animateOptions === 'bottom',
    'a-alerts__alert--left': animateOptions === 'left',
    'a-alerts__alert--right': animateOptions === 'right'
  };

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
  animate: PropTypes.bool,
  animateOptions: PropTypes.oneOf(['slow', 'fast', 'top', 'bottom', 'left', 'right'])
};

export default Alert;
