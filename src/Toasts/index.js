import React, { PropTypes } from 'react';
import classnames from 'classnames';
import Toast from './Toast';

const Toasts = ({ children, className, animate, position, ...rest }) => {
  const modifiers = {
    'c-toasts--topleft': position === 'topleft',
    'c-toasts--topright': position === 'topright',
    'c-toasts--bottomleft': position === 'bottomleft',
    'c-toasts--bottomright': position === 'bottomright',
    'a-toasts': animate !== undefined
  };
  return (
    <div className={classnames('c-toasts', className, modifiers)} {...rest}>
       {children}
    </div>
  );
};

Toasts.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  position: PropTypes.oneOf(['topleft', 'topright', 'bottomleft', 'bottomright']),
  animate: PropTypes.oneOf(['slow', 'fast'])
};

export { Toasts, Toast };
