import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Toggles = ({ children, className, checked, disabled, animate, primary, secondary, success, error, ...rest }) => {
  const parentModifiers = {
    'c-toggle--primary': primary,
    'c-toggle--secondary': secondary,
    'c-toggle--success': success,
    'c-toggle--error': error,
    'a-toggle': animate !== undefined,
    'a-toggle--slow': animate === 'slow',
    'a-toggle--fast': animate === 'fast'
  };
  return (
    <label className={classnames('c-toggle', className, parentModifiers)} {...rest}>
      <input type="checkbox" defaultChecked={checked} disabled={disabled} />
       <div className="c-toggle__track">
        <div className="c-toggle__handle"></div>
       </div>
       {children}
    </label>
  );
};

Toggles.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  error: PropTypes.bool,
  animate: PropTypes.oneOf(['slow', 'fast'])
};

export default Toggles;
