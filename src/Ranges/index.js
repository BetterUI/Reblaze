import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Ranges = ({ className, disabled, animate, primary, secondary, success, error, ...rest }) => {
  const modifiers = {
    'c-range--primary': primary,
    'c-range--secondary': secondary,
    'c-range--success': success,
    'c-range--error': error,
    'a-range': animate !== undefined,
    'a-range--slow': animate === 'slow',
    'a-range--fast': animate === 'fast'
  };
  return (
    <input type="range" className={classnames('c-range', modifiers, className)} disabled={disabled} {...rest} />
  );
};

Ranges.propTypes = {
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

export default Ranges;
