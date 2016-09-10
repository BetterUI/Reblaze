import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { getClassName } from '../utils/animate';

const Alert = ({ children, className, primary, secondary, success, error, closable, animate, ...rest }) => {
  const parentModifiers = {
    'a-alerts': animate !== undefined
  };
  const modifiers = {
    'c-alerts__alert--primary': primary,
    'c-alerts__alert--secondary': secondary,
    'c-alerts__alert--success': success,
    'c-alerts__alert--error': error,
    'a-alerts--slow': animate === 'slow',
    'a-alerts--fast': animate === 'fast'
  };
  if (animate !== undefined) {
    const animateOptions = animate.split(' ');
    for (let i = 0; i < animateOptions.length; i++) {
      const classname = getClassName('a-alerts__alert', animateOptions[i]);
      modifiers[classname] = true;
    }
  }
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
  animate: PropTypes.oneOf(['slow', 'fast'])
};

export default Alert;
