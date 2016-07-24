import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Toast = ({ children, className, primary, secondary, success, error, animate, ...rest }) => {
  const modifiers = {
    'c-toast--primary': primary,
    'c-toast--secondary': secondary,
    'c-toast--success': success,
    'c-toast--error': error,
    'a-toast': animate !== undefined,
    'a-toast--slow': animate === 'slow',
    'a-toast--fast': animate === 'fast'
  };
  return (
    <div className={classnames(className, modifiers)} {...rest}>
       {children}
    </div>
  );
};

Toast.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  checked: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
  animate: PropTypes.oneOf(['slow', 'fast'])
};

export default Toast;
