import React, { PropTypes } from 'react';
import classnames from 'classnames';

const Overlays = ({ className, animate, dismissable, transparent, fullpage, ...rest }) => {
  const modifiers = {
    'c-overlay--dismissable': dismissable,
    'c-overlay--transparent': transparent,
    'c-overlay--fullpage': fullpage,
    'a-overlay': animate !== undefined,
    'a-overlay--slow': animate === 'slow',
    'a-overlay--fast': animate === 'fast'
  };
  return (
    <div className={classnames('c-overlay', modifiers, className)} {...rest} ></div>
  );
};

Overlays.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  dismissable: PropTypes.bool,
  transparent: PropTypes.bool,
  fullpage: PropTypes.bool,
  animate: PropTypes.oneOf(['slow', 'fast'])
};

export default Overlays;
